/* netlify/functions/submitEnquiry.js */

const { createClient } = require("@supabase/supabase-js");

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

function isEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s || "").trim());
}

exports.handler = async (event) => {
  // CORS preflight
  if (event.httpMethod === "OPTIONS") return json(200, { ok: true });

  if (event.httpMethod !== "POST") return json(405, { ok: false, error: "Method not allowed" });

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!SUPABASE_URL || !SERVICE_KEY) {
    return json(500, {
      ok: false,
      error: "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in Netlify environment variables."
    });
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { ok: false, error: "Invalid JSON body." });
  }

  const listing_id = String(body.listing_id || "").trim();
  const listing_title = String(body.listing_title || "").trim();
  const listing_url = String(body.listing_url || "").trim();

  const buyer_name = String(body.buyer_name || "").trim();
  const buyer_email = String(body.buyer_email || "").trim();
  const buyer_phone = String(body.buyer_phone || "").trim();
  const message = String(body.message || "").trim();

  const lang = String(body.lang || "en").trim().toLowerCase();
  const page = String(body.page || "").trim();

  if (!listing_id) return json(400, { ok: false, error: "Missing listing_id." });
  if (!buyer_name) return json(400, { ok: false, error: "Missing buyer_name." });
  if (!buyer_email || !isEmail(buyer_email)) return json(400, { ok: false, error: "Invalid buyer_email." });
  if (!message) return json(400, { ok: false, error: "Missing message." });

  try {
    const supabase = createClient(SUPABASE_URL, SERVICE_KEY, {
      auth: { persistSession: false }
    });

    const row = {
      listing_id,
      listing_title,
      listing_url,
      buyer_name,
      buyer_email,
      buyer_phone,
      message,
      lang,
      page,
      status: "new"
    };

    const { data, error } = await supabase
      .from("enquiries")
      .insert(row)
      .select("id")
      .single();

    if (error) throw error;

    return json(200, { ok: true, id: data?.id || null });
  } catch (e) {
    return json(500, { ok: false, error: e.message || String(e) });
  }
};
