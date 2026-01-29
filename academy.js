/* academy.js — PanAfric Properties
   Fixes:
   - Modules grid missing (robust container detection + auto-create under Modules heading)
   - Prevent showing raw i18n keys by NOT replacing existing English text with keys
   - Re-apply i18n after dynamic render
*/

(function () {
  "use strict";

  // ---------- language / i18n ----------
  function getLang() {
    return (
      localStorage.getItem("pap_lang") ||
      localStorage.getItem("lang") ||
      document.documentElement.getAttribute("lang") ||
      "en"
    );
  }

  function papReapplyI18n() {
    const lang = getLang();
    // Prefer dedicated apply function if present; else call setLang again.
    if (typeof window.papApplyI18n === "function") return window.papApplyI18n();
    if (typeof window.applyTranslations === "function") return window.applyTranslations();
    if (typeof window.papSetLang === "function") return window.papSetLang(lang);
  }

  // Set data-i18n on an element WITHOUT changing its visible English text.
  function ensureI18nKey(el, key, vars) {
    if (!el) return;
    el.setAttribute("data-i18n", key);
    if (vars && typeof vars === "object") {
      el.setAttribute("data-i18n-vars", JSON.stringify(vars));
    }
    // IMPORTANT: Do NOT set el.textContent here — preserve existing English wording.
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

  // ---------- DOM helpers ----------
  function $(sel) {
    return document.querySelector(sel);
  }

  function findModulesHeading() {
    // Prefer translated heading marker if present, else text match.
    const byKey = document.querySelector('[data-i18n="academy.modules"]');
    if (byKey) return byKey;

    const headings = Array.from(document.querySelectorAll("h1,h2,h3,h4"));
    return headings.find(h => (h.textContent || "").trim().toLowerCase() === "modules") || null;
  }

  function getOrCreateModulesContainer() {
    // Try common explicit IDs / classes first (safe + specific).
    const existing =
      $("#modulesGrid") ||
      $("#modules-grid") ||
      $("#modules") ||
      $("#modulesList") ||
      $(".modules-grid") ||
      document.querySelector('[data-role="modules-grid"]') ||
      document.querySelector('[data-modules-grid]');

    if (existing) return existing;

    // If not found, create it right under the Modules heading.
    const heading = findModulesHeading();
    if (!heading) return null;

    const div = document.createElement("div");
    div.id = "modulesGrid";
    div.className = "modules-grid"; // if your CSS uses it; harmless otherwise
    // Try to match typical grid styling without forcing new wording.
    div.style.display = "grid";
    div.style.gridTemplateColumns = "repeat(auto-fit, minmax(240px, 1fr))";
    div.style.gap = "14px";
    div.style.marginTop = "14px";

    heading.insertAdjacentElement("afterend", div);
    return div;
  }

  // ---------- render top section ----------
  function renderTop() {
    const total = Array.isArray(window.MODULES) ? window.MODULES.length : 0;
    const passed = getPassedIds().filter(x => x != null).length;
    const pct = total ? Math.round((passed / total) * 100) : 0;

    // If your HTML already has these elements, we just attach keys/vars.
    const welcomeEl =
      $("#academyWelcome") ||
      $("#welcome") ||
      document.querySelector('[data-role="academy-welcome"]');

    const userName =
      (window.authUser && (window.authUser.name || window.authUser.nickname)) ||
      (window.userProfile && (window.userProfile.name || window.userProfile.nickname)) ||
      "";
    const userEmail =
      (window.authUser && window.authUser.email) ||
      (window.userProfile && window.userProfile.email) ||
      "";

    if (welcomeEl) {
      ensureI18nKey(welcomeEl, "academy.welcome", {
        name: userName ? userName + " " : "",
        email: userEmail ? "(" + userEmail + ")" : ""
      });
    }

    const progressTextEl =
      $("#academyProgressText") ||
      $("#progressText") ||
      document.querySelector('[data-role="academy-progress-text"]');

    if (progressTextEl) {
      ensureI18nKey(progressTextEl, "academy.progress_text", { passed, total, pct });
    }

    // Resume button (if present)
    const resumeBtn =
      $("#academyResumeBtn") ||
      $("#resumeBtn") ||
      document.querySelector('[data-role="academy-resume"]');

    if (resumeBtn && !resumeBtn.__papBound) {
      resumeBtn.__papBound = true;
      resumeBtn.addEventListener("click", function () {
        const nextId = getNextModuleId();
        window.location.href = `module.html?m=${encodeURIComponent(String(nextId))}`;
      });
    }

    // Certification note/status (if present)
    const certTextEl =
      $("#academyCertText") ||
      $("#certText") ||
      document.querySelector('[data-role="academy-cert-text"]');

    if (certTextEl) {
      // Keep your existing English text; only set the key.
      if (total && passed >= total) ensureI18nKey(certTextEl, "academy.unlocked");
      else ensureI18nKey(certTextEl, "academy.locked");
    }
  }

  // ---------- render modules ----------
  function renderModules() {
    const container = getOrCreateModulesContainer();
    if (!container) return;

    if (!Array.isArray(window.MODULES)) {
      // If modules.js isn't loaded, do nothing (don’t break page).
      return;
    }

    container.innerHTML = "";

    window.MODULES.forEach((m) => {
      const card = document.createElement("div");
      card.className = "card";
      card.style.cursor = "pointer";
      card.style.padding = "16px";
      card.style.borderRadius = "12px";

      const h3 = document.createElement("h3");
      h3.textContent = `Module ${m.id}`; // English wording unchanged
      card.appendChild(h3);

      const pTitle = document.createElement("p");
      pTitle.className = "small";
      pTitle.textContent = m.title || "";
      card.appendChild(pTitle);

      const statusWrap = document.createElement("div");
      statusWrap.className = "small";
      statusWrap.style.marginTop = "10px";

      const statusLabel = document.createElement("span");
      statusLabel.style.fontWeight = "600";
      // Do NOT overwrite textContent; just tag for i18n if you want it translated.
      statusLabel.textContent = "academy.status"; // fallback key text (i18n will replace)
      ensureI18nKey(statusLabel, "academy.status");
      statusWrap.appendChild(statusLabel);

      statusWrap.appendChild(document.createTextNode(": "));

      const statusValue = document.createElement("span");
      const passed = isPassed(m.id);
      statusValue.textContent = passed ? "academy.completed" : "academy.not_completed"; // i18n replaces
      ensureI18nKey(statusValue, passed ? "academy.completed" : "academy.not_completed");
      statusWrap.appendChild(statusValue);

      card.appendChild(statusWrap);

      card.addEventListener("click", function () {
        window.location.href = `module.html?m=${encodeURIComponent(String(m.id))}`;
      });

      container.appendChild(card);
    });
  }

  function init() {
    renderTop();
    renderModules();

    // Re-apply i18n after dynamic render.
    // Run twice: immediately + next tick (covers script load ordering).
    papReapplyI18n();
    setTimeout(papReapplyI18n, 0);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
