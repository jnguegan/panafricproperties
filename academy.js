/* academy.js — shared helper for gating + per-user progress (Auth0-compatible) */

const PAP = {
  keys: {
    // legacy / MVP keys (still kept so nothing breaks)
    approved: "pap_approved_partners",
    partnerEmail: "pap_partner_email",
    partnerName: "pap_partner_name",
    isPartner: "pap_partner",

    // NEW: progress is now namespaced per user
    progressPrefix: "pap_progress__"
  }
};

/* ---------------------------
   Utilities
--------------------------- */

function papSafeEmailKey(email) {
  return String(email || "anon")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9@._-]/g, "_");
}

function papCurrentUserEmail() {
  // Prefer Auth0 user (new system)
  try {
    if (typeof authGetUser === "function") {
      const u = authGetUser();
      if (u && u.email) return String(u.email).trim().toLowerCase();
    }
  } catch (e) {}

  // Fallback: legacy session storage (old system)
  const legacy = localStorage.getItem(PAP.keys.partnerEmail);
  if (legacy) return String(legacy).trim().toLowerCase();

  return "anon";
}

function papProgressKey() {
  return PAP.keys.progressPrefix + papSafeEmailKey(papCurrentUserEmail());
}

/* ---------------------------
   Approved list (legacy helper)
--------------------------- */

function papGetApprovedList() {
  try {
    return JSON.parse(localStorage.getItem(PAP.keys.approved) || "[]");
  } catch {
    return [];
  }
}

function papIsApproved(email) {
  const list = papGetApprovedList().map(e => (e || "").toLowerCase());
  return list.includes((email || "").toLowerCase());
}

/* ---------------------------
   Legacy partner session (kept for compatibility)
--------------------------- */

function papSetPartnerSession({ email, name }) {
  localStorage.setItem(PAP.keys.partnerEmail, email || "");
  localStorage.setItem(PAP.keys.partnerName, name || "");
  localStorage.setItem(PAP.keys.isPartner, "true");
}

function papLogout() {
  localStorage.removeItem(PAP.keys.isPartner);
  localStorage.removeItem(PAP.keys.partnerEmail);
  localStorage.removeItem(PAP.keys.partnerName);
}

/* ---------------------------
   Partner gate (Auth0-friendly)
--------------------------- */

function papRequirePartner() {
  // If Auth0 is available, require Auth0 login
  try {
    if (typeof authGetUser === "function") {
      const u = authGetUser();
      if (u && (u.email || u.name)) return; // logged in
      window.location.href = "login.html";
      return;
    }
  } catch (e) {}

  // Fallback: legacy session
  const ok = localStorage.getItem(PAP.keys.isPartner) === "true";
  if (!ok) window.location.href = "login.html";
}

/* ---------------------------
   Progress (NEW: per user)
--------------------------- */

function papGetProgress() {
  try {
    return JSON.parse(localStorage.getItem(papProgressKey()) || "{}");
  } catch {
    return {};
  }
}

function papSetProgress(progressObj) {
  localStorage.setItem(papProgressKey(), JSON.stringify(progressObj || {}));
}

function papMarkModulePassed(moduleId) {
  const p = papGetProgress();
  p[String(moduleId)] = true;
  papSetProgress(p);
}

function papIsModulePassed(moduleId) {
  const p = papGetProgress();
  return p[String(moduleId)] === true;
}

function papPercentComplete(totalModules) {
  const p = papGetProgress();
  const passed = Object.values(p).filter(Boolean).length;
  const pct = totalModules ? Math.round((passed / totalModules) * 100) : 0;
  return { passed, pct };
}

/* Optional helper: reset progress for the currently logged-in user */
function papResetMyProgress() {
  localStorage.removeItem(papProgressKey());
}
