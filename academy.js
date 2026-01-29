/* academy.js — PanAfric Properties
   Fixes:
   - Modules grid missing (robust container detection + auto-create under Modules heading)
   - Correct placeholder replacement for welcome + progress ({name}{email}{passed}{total}{pct})
   - Module titles use titleKey (FR/ES) with English fallback
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
    if (typeof window.papApplyI18n === "function") return window.papApplyI18n();
    if (typeof window.applyTranslations === "function") return window.applyTranslations();
    if (typeof window.papSetLang === "function") return window.papSetLang(lang);
  }

  // Translate + replace {placeholders}. Falls back to provided English template.
  function papText(key, fallback, vars) {
    let s = fallback;
    try {
      if (typeof window.papT === "function") s = window.papT(key) || fallback;
      else if (typeof window.t === "function") s = window.t(key) || fallback;
    } catch (e) {}

    if (vars && typeof s === "string") {
      Object.keys(vars).forEach((k) => {
        const val = vars[k] == null ? "" : String(vars[k]);
        // replaceAll safe fallback
        s = s.split(`{${k}}`).join(val);
      });
    }
    return s;
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
    const byKey = document.querySelector('[data-i18n="academy.modules"]');
    if (byKey) return byKey;

    const headings = Array.from(document.querySelectorAll("h1,h2,h3,h4"));
    return headings.find((h) => (h.textContent || "").trim().toLowerCase() === "modules") || null;
  }

  function getOrCreateModulesContainer() {
    const existing =
      $("#modulesGrid") ||
      $("#modules-grid") ||
      $("#modules") ||
      $("#modulesList") ||
      $(".modules-grid") ||
      document.querySelector('[data-role="modules-grid"]') ||
      document.querySelector('[data-modules-grid]');

    if (existing) return existing;

    const heading = findModulesHeading();
    if (!heading) return null;

    const div = document.createElement("div");
    div.id = "modulesGrid";
    div.className = "modules-grid";
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
    const passed = getPassedIds().filter((x) => x != null).length;
    const pct = total ? Math.round((passed / total) * 100) : 0;

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
      welcomeEl.innerText = papText("academy.welcome", "Welcome, {name}{email}.", {
        name: userName ? userName : "",
        email: userEmail ? ` (${userEmail})` : ""
      });
      welcomeEl.setAttribute("data-i18n", "academy.welcome");
    }

    const progressTextEl =
      $("#academyProgressText") ||
      $("#progressText") ||
      document.querySelector('[data-role="academy-progress-text"]');

    if (progressTextEl) {
      progressTextEl.innerText = papText(
        "academy.progress_text",
        "{passed} / {total} modules completed ({pct}%).",
        { passed, total, pct }
      );
      progressTextEl.setAttribute("data-i18n", "academy.progress_text");
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
      const allDone = total && passed >= total;
      certTextEl.innerText = allDone
        ? papText("academy.unlocked", "Unlocked — you have completed all modules.")
        : papText("academy.locked", "Locked — complete all modules to unlock.");
      certTextEl.setAttribute("data-i18n", allDone ? "academy.unlocked" : "academy.locked");
    }
  }

  // ---------- render modules ----------
  function renderModules() {
    const container = getOrCreateModulesContainer();
    if (!container) return;

    if (!Array.isArray(window.MODULES)) return;

    container.innerHTML = "";

    window.MODULES.forEach((m) => {
      const card = document.createElement("div");
      card.className = "card";
      card.style.cursor = "pointer";
      card.style.padding = "16px";
      card.style.borderRadius = "12px";

      const moduleTitle =
        (m.titleKey ? papText(m.titleKey, m.title) : (m.title || ""));

      const h3 = document.createElement("h3");
      h3.textContent = `Module ${m.id} — ${moduleTitle}`;
      card.appendChild(h3);

      const pTitle = document.createElement("p");
      pTitle.className = "small";
      pTitle.textContent = moduleTitle;
      card.appendChild(pTitle);

      const statusWrap = document.createElement("div");
      statusWrap.className = "small";
      statusWrap.style.marginTop = "10px";

      const statusLabel = document.createElement("span");
      statusLabel.style.fontWeight = "600";
      statusLabel.textContent = papText("academy.status", "Status");
      statusWrap.appendChild(statusLabel);

      statusWrap.appendChild(document.createTextNode(": "));

      const statusValue = document.createElement("span");
      const done = isPassed(m.id);
      statusValue.textContent = done
        ? papText("academy.completed", "Completed ✅")
        : papText("academy.not_completed", "Not completed");
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

    // Apply i18n first, then render dynamic strings (so placeholders are replaced)
papReapplyI18n();
setTimeout(() => {
  renderTopDynamic();
  renderModules();
}, 50);


  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
