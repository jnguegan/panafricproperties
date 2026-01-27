/* academy.js — shared helper for login, gating, progress, certificate */

const PAP = {
  keys: {
    approved: "pap_approved_partners",
    partnerEmail: "pap_partner_email",
    partnerName: "pap_partner_name",
    isPartner: "pap_partner",
    progress: "pap_progress"
  }
};

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

function papRequirePartner() {
  const ok = localStorage.getItem(PAP.keys.isPartner) === "true";
  if (!ok) window.location.href = "login.html";
}

function papGetProgress() {
  try {
    return JSON.parse(localStorage.getItem(PAP.keys.progress) || "{}");
  } catch {
    return {};
  }
}

function papSetProgress(progressObj) {
  localStorage.setItem(PAP.keys.progress, JSON.stringify(progressObj || {}));
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

