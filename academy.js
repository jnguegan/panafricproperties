/* academy.js — PanAfric Properties
   Purpose:
   - Render modules grid from MODULES (modules.js)
   - Show progress + resume logic
   - Ensure i18n applies to dynamically created content (fixes "keys showing" issue)
   Notes:
   - Does NOT change English wording; uses i18n keys + fallbacks
   - Does NOT touch Auth0 guard; assumes auth is handled elsewhere
*/

(function () {
  "use strict";

  // ---------- i18n helpers ----------
  function getLang() {
    return (
      localStorage.getItem("pap_lang") ||
      localStorage.getItem("lang") ||
      document.documentElement.getAttribute("lang") ||
      "en"
    );
  }

  // If your i18n.js provides papT(key, vars) or t(key, vars), we use it.
  function _t(key, fallback, vars) {
    try {
      if (typeof window.papT === "function") return window.papT(key, vars) || fallback;
      if (typeof window.t === "function") return window.t(key, vars) || fallback;
    } catch (e) {}
    // Simple placeholder replace fallback
    if (vars && typeof fallback === "string") {
      return fallback.replace(/\{(\w+)\}/g, (_, k) => (vars[k] != null ? String(vars[k]) : `{${k}}`));
    }
    return fallback;
  }

  // Re-apply translations after dynamic rendering
  function papReapplyI18n() {
    const lang = getLang();
    if (typeof window.papApplyI18n === "function") {
      window.papApplyI18n();
      return;
    }
    if (typeof window.applyTranslations === "function") {
      window.applyTranslations();
      return;
    }
    if (typeof window.papSetLang === "function") {
      window.papSetLang(lang);
      return;
    }
  }

  // Optional: store vars for i18n engines that support data-i18n-vars
  function setI18n(el, key, fallback, vars) {
    if (!el) return;
    el.setAttribute("data-i18n", key);
    if (vars && typeof vars === "object") {
      // many i18n scripts use this attribute name
      el.setAttribute("data-i18n-vars", JSON.stringify(vars));
    }
    // fallback text (English wording stays as defined in your EN dict)
    el.textContent = typeof fallback === "string" ? _t(key, fallback, vars) : key;
  }

  // ---------- progress storage ----------
  function getPassedIds() {
    try {
      const arr = JSON.parse(localStorage.getItem("pap_modules_passed") || "[]");
      return Array.isArray(arr) ? arr : [];
    } catch (e) {
      return [];
    }
  }

  function isPassed(id) {
    return getPassedIds().includes(id);
  }

  function getNextModuleId() {
    if (!Array.isArray(window.MODULES)) return 1;
    for (const m of window.MODULES) {
      if (!isPassed(m.id)) return m.id;
    }
    return window.MODULES.length ? window.MODULES[window.MODULES.length - 1].id : 1;
  }

  // ---------- DOM getters (safe) ----------
  function $(sel) {
    return document.querySelector(sel);
  }

  // We support multiple possible containers so this works with your current HTML.
  function getModulesContainer() {
    return (
      $("#modulesGrid") ||
      $("#modules") ||
      document.querySelector("[data-modules]") ||
      document.querySelector(".modules-grid") ||
      document.querySelector(".grid") ||
      null
    );
  }

  // ---------- render ----------
  function renderTop() {
    const total = Array.isArray(window.MODULES) ? window.MODULES.length : 0;
    const passed = getPassedIds().filter((id) => typeof id === "number" || /^\d+$/.test(String(id))).length;
    const pct = total ? Math.round((passed / total) * 100) : 0;

    // Welcome line (supports placeholders)
    const welcomeEl = $("#academyWelcome") || $("#welcome") || document.querySelector("[data-role='academy-welcome']");
    // If you have an auth profile helper, use it; otherwise keep placeholder-only.
    const userName =
      (window.authUser && (window.authUser.name || window.authUser.nickname)) ||
      (window.userProfile && (window.userProfile.name || window.userProfile.nickname)) ||
      "";
    const userEmail =
      (window.authUser && window.authUser.email) ||
      (window.userProfile && window.userProfile.email) ||
      "";

    if (welcomeEl) {
      setI18n(welcomeEl, "academy.welcome", "academy.welcome", {
        name: userName ? userName + " " : "",
        email: userEmail ? "(" + userEmail + ")" : ""
      });
    }

    // Progress text (supports placeholders)
    const progressTextEl =
      $("#academyProgressText") || $("#progressText") || document.querySelector("[data-role='academy-progress-text']");
    if (progressTextEl) {
      setI18n(progressTextEl, "academy.progress_text", "academy.progress_text", {
        passed,
        total,
        pct
      });
    }

    // Progress bar (optional)
    const progressBarEl =
      $("#academyProgressBar") || $("#progressBar") || document.querySelector("[data-role='academy-progress-bar']");
    if (progressBarEl) {
      // support <div style="width:..">, <progress>, etc.
      if (progressBarEl.tagName.toLowerCase() === "progress") {
        progressBarEl.max = total || 1;
        progressBarEl.value = passed;
      } else {
        progressBarEl.style.width = pct + "%";
        progressBarEl.setAttribute("aria-valuenow", String(pct));
      }
    }

    // Resume button
    const resumeBtn = $("#academyResumeBtn") || $("#resumeBtn") || document.querySelector("[data-role='academy-resume']");
    if (resumeBtn) {
      const nextId = getNextModuleId();
      resumeBtn.addEventListener("click", function () {
        window.location.href = `module.html?m=${encodeURIComponent(String(nextId))}`;
      });
    }

    // Certification status text (optional)
    const certTextEl =
      $("#academyCertText") || $("#certText") || document.querySelector("[data-role='academy-cert-text']");
    if (certTextEl) {
      if (total && passed >= total) {
        setI18n(certTextEl, "academy.unlocked", "academy.unlocked");
      } else {
        setI18n(certTextEl, "academy.locked", "academy.locked");
      }
    }
  }

  function renderModules() {
    const container = getModulesContainer();
    if (!container) return;

    if (!Array.isArray(window.MODULES)) {
      // No MODULES found; do not crash page.
      return;
    }

    // Clear current content (only the grid area)
    container.innerHTML = "";

    window.MODULES.forEach((m) => {
      const card = document.createElement("div");
      card.className = "card module-card";
      card.style.cursor = "pointer";

      // Title: "Module 1" etc.
      const h3 = document.createElement("h3");
      h3.textContent = `Module ${m.id}`; // English wording unchanged
      card.appendChild(h3);

      // Subtitle: module title from data
      const pTitle = document.createElement("p");
      pTitle.className = "small";
      pTitle.textContent = m.title || "";
      card.appendChild(pTitle);

      // Status label + value
      const statusWrap = document.createElement("div");
      statusWrap.className = "small";
      statusWrap.style.marginTop = "10px";

      const statusLabel = document.createElement("span");
      // Render label as i18n key (so FR/ES translate)
      statusLabel.style.fontWeight = "600";
      setI18n(statusLabel, "academy.status", "academy.status");
      statusWrap.appendChild(statusLabel);

      statusWrap.appendChild(document.createTextNode(": "));

      const statusValue = document.createElement("span");
      const passed = isPassed(m.id);
      setI18n(statusValue, passed ? "academy.completed" : "academy.not_completed", passed ? "academy.completed" : "academy.not_completed");
      statusWrap.appendChild(statusValue);

      card.appendChild(statusWrap);

      // Click opens module
      card.addEventListener("click", function () {
        window.location.href = `module.html?m=${encodeURIComponent(String(m.id))}`;
      });

      container.appendChild(card);
    });
  }

  function init() {
    // Render dynamic parts, then re-apply i18n so bottom translates too
    renderTop();
    renderModules();
    papReapplyI18n();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
