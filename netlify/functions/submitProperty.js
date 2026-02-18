/* netlify/functions/submitProperty.js */

const { createClient } = require("@supabase/supabase-js");
const Busboy = require("busboy");
const crypto = require("crypto");

function json(statusCode, obj) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Methods": "POST, OPTIONS"
    },
    body: JSON.stringify(obj)
  };
}

function parseMultipart(event) {
  return new Promise((resolve, reject) => {
    const contentType = event.headers["content-type"] || event.headers["Content-Type"] || "";
    if (!contentType.includes("multipart/form-data")) {
      return reject(new Error("Invalid content-type. Use multipart/form-data."));
    }
    if (!/boundary=/i.test(contentType)) {
      return reject(new Error("Invalid multipart request (missing boundary)."));
    }

    const bb = Busboy({ headers: { "content-type": contentType } });
    const fields = {};
    const files = [];

    bb.on("field", (name, val) => {
      // keep last value if duplicate keys appear
      fields[name] = val;
    });

    bb.on("file", (name, file, info) => {
      const { filename, mimeType } = info;
      const chunks = [];

      file.on("data", (d) => chunks.push(d));
      file.on("end", () => {
        const buffer = Buffer.concat(chunks);
        if (buffer.length > 0) {
          files.push({
            fieldname: name,
            filename: filename || "upload",
            mimeType: mimeType || "application/octet-stream",
            buffer
          });
        }
      });
    });

    bb.on("error", reject);
    bb.on("finish", () => resolve({ fields, files }));

    const body = event.isBase64Encoded
      ? Buffer.from(event.body || "", "base64")
      : Buffer.from(event.body || "", "utf8");

    bb.end(body);
  });
}

function toNumber(v) {
  if (v === undefined || v === null || v === "") return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function toInt(v) {
  if (v === undefined || v === null || v === "") return null;
  const n = parseInt(String(v), 10);
  return Number.isFinite(n) ? n : null;
}

function safeJsonParse(v, fallback) {
  try {
    if (!v) return fallback;
    return JSON.parse(v);
  } catch {
    return fallback;
  }
}

function slugifyFilename(name) {
  const base = (name || "image")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9.\-_]/g, "");
  return base || "image";
}

async function uploadImages({ supabase, bucket, listingId, files }) {
  const publicUrls = [];

  // UI says up to 10 photos
  const photos = (files || [])
    .filter((f) => f.fieldname === "photos")
    .filter((f) => /^image\//i.test(f.mimeType))
    .slice(0, 10);

  for (let i = 0; i < photos.length; i++) {
    const f = photos[i];

    const cleanName = slugifyFilename(f.filename);
    const path = `${listingId}/${Date.now()}-${i}-${cleanName}`;

    const { error: upErr } = await supabase.storage
      .from(bucket)
      .upload(path, f.buffer, { contentType: f.mimeType, upsert: false });

    if (upErr) throw upErr;

    const { data } = supabase.storage.from(bucket).getPublicUrl(path);
    if (data?.publicUrl) publicUrls.push(data.publicUrl);
  }

  return publicUrls;
}

exports.handler = async (event) => {
  // ✅ CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return json(200, { ok: true });
  }

  if (event.httpMethod !== "POST") {
    return json(405, { ok: false, error: "Method not allowed" });
  }

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const BUCKET = process.env.SUPABASE_STORAGE_BUCKET || "property-images";

  if (!SUPABASE_URL || !SERVICE_KEY) {
    return json(500, {
      ok: false,
      error: "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in Netlify environment variables."
    });
  }

  try {
    const supabase = createClient(SUPABASE_URL, SERVICE_KEY, {
      auth: { persistSession: false }
    });

    const { fields, files } = await parseMultipart(event);
    const listingId = crypto.randomUUID();

    // Upload images (expects input name="photos")
    const imageUrls = await uploadImages({
      supabase,
      bucket: BUCKET,
      listingId,
      files
    });

    // Features
    const features = safeJsonParse(fields.features_json, null);
    const featuresArr = Array.isArray(features)
      ? features.map((x) => String(x)).filter(Boolean)
      : String(fields.features || "")
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean);

    // Contact (fallback to partner identity)
    const contact = {
      name: (fields.contact_name || fields.partner_name || "").trim(),
      email: (fields.contact_email || fields.partner_email || "").trim(),
      phone: (fields.contact_phone || "").trim(),
      whatsapp: (fields.contact_whatsapp || "").trim()
    };

    // ✅ Title mapping: form uses listing_title, but table uses title
    const title =
      (fields.title || "").trim() ||
      (fields.listing_title || "").trim() ||
      "Untitled Listing";

    // ✅ City mapping: form uses city_area, table uses city
    const city =
      (fields.city || "").trim() ||
      (fields.city_area || "").trim();

    // ✅ Property type mapping: form uses property_type, table uses property_type
    const propertyType =
      (fields.property_type || "").trim() ||
      (fields.propertyType || "").trim();

    // ✅ Size mapping: accept both size_m2 and sizeM2 (future-proof)
    const sizeM2 = toNumber(fields.size_m2 ?? fields.sizeM2);

    const row = {
      id: listingId,
      status: "published",

      title,
      description: fields.description || "",

      price: toNumber(fields.price),
      currency: (fields.currency || "EUR").trim(),

      property_type: propertyType,

      country: (fields.country || "").trim(),
      city,

      address: (fields.address || "").trim(),

      // table uses size_m2 (snake_case)
      size_m2: sizeM2,

      bedrooms: toInt(fields.bedrooms),
      bathrooms: toInt(fields.bathrooms),

      features: featuresArr,
      contact,
      images: imageUrls
    };

    // Remove undefined keys (keeps insert clean)
    Object.keys(row).forEach((k) => {
      if (row[k] === undefined) delete row[k];
    });

    const { error: insErr } = await supabase.from("listings").insert(row);
    if (insErr) throw insErr;

    return json(200, {
      ok: true,
      id: listingId,
      url: `/properties/${encodeURIComponent(listingId)}`,
      images: imageUrls
    });
  } catch (e) {
    return json(500, { ok: false, error: e.message || String(e) });
  }
};
