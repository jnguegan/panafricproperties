/* academy.js — PanAfric Properties (stable)
   - Requires: assets/js/i18n.js, modules.js loaded BEFORE this file
   - Uses #welcome, #progressText, #modulesGrid that exist in academy.html
*/

(function () {
  "use strict";

  function getLang() {
    return (
      localStorage.getItem("pap_lang") ||
      localStorage.getItem("lang") ||
      document.documentElement.getAttribute("lang") ||
      "en"
    );
  }

  // Translate + placeholder replace
  function tr(key, fallback, vars) {
    let s = fallback;
    try {
      if (typeof window.papT === "function") s = window.papT(key) || fallback;
      else if (typeof window.t === "function") s = window.t(key) || fallback;
    } catch (e) {}

    if (vars && typeof s === "string") {
      Object.keys(vars).forEach((k) => {
        const val = vars[k] == null ? "" : String(vars[k]);
        s = s.split(`{${k}}`).join(val);
      });
    }
    return s;
  }

  function applyI18nOnly() {
    const lang = getLang();
    // Apply translations to static HTML only
    if (typeof window.papApplyI18n === "function") return window.papApplyI18n();
    if (typeof window.applyTranslations === "function") return window.applyTranslations();
    if (typeof window.papSetLang === "function") return window.papSetLang(lang);
  }

  // Progress storage
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

  // ✅ UPDATED: Only adds missing UI toggles (resume/cert CTA/badge/progress bar)
  // Everything else remains unchanged.
  function renderTop() {
    const welcomeEl = document.getElementById("welcome");
    const progressEl = document.getElementById("progressText");
    const certEl = document.getElementById("certStatus"); // optional if exists

    // NEW: UI elements that exist in academy.html (were previously never toggled)
    const progressBar = document.getElementById("progressBar");
    const resumeBtn = document.getElementById("resumeBtn");
    const certBtn = document.getElementById("certBtn");
    const certBadge = document.getElementById("certBadge");
    const editNameBox = document.getElementById("editNameBox");
    const editNameBtn = document.getElementById("editNameBtn");

    const total = Array.isArray(window.MODULES) ? window.MODULES.length : 0;
    const passedIds = getPassedIds();
    const passed = passedIds.length;
    const pct = total ? Math.round((passed / total) * 100) : 0;

    const user = (typeof window.authGetUser === "function" ? window.authGetUser() : null) || {};
    const name = user.name || user.nickname || user.email || "";
    const email = user.email || "";

    if (welcomeEl) {
      // IMPORTANT: do not keep data-i18n here, i18n engines often don’t inject vars
      welcomeEl.removeAttribute("data-i18n");
      welcomeEl.innerText = tr("academy.welcome", "Welcome, {name}{email}.", {
        name: name ? name : "",
        email: email ? ` (${email})` : ""
      });
    }

    if (progressEl) {
      progressEl.removeAttribute("data-i18n");
      progressEl.innerText = tr(
        "academy.progress_text",
        "{passed} / {total} modules completed ({pct}%).",
        { passed, total, pct }
      );
    }

    // NEW: update progress bar width (was always 0%)
    if (progressBar) {
      progressBar.style.width = `${pct}%`;
    }

    const allDone = total && passed >= total;

    if (certEl) {
      certEl.removeAttribute("data-i18n");
      certEl.innerText = allDone
        ? tr("academy.unlocked", "Unlocked — you have completed all modules.")
        : tr("academy.locked", "Locked — complete all modules to unlock.");
    }

    // NEW: toggle certificate CTA + badge + shared completion flag for certificate.html
    if (allDone) {
      localStorage.setItem("papAcademyCompleted", "1");

      // Ask for full name once (used on certificate)
      const existingName = (localStorage.getItem("pap_partner_fullname") || "").trim();
      if (!existingName) {
        const input = prompt(
          "Congratulations! Please enter your full name for the certificate (First name + Surname):",
          ""
        );
        if (input && input.trim().length >= 3) {
          localStorage.setItem("pap_partner_fullname", input.trim());
        }
      }

      // ✅ Show "Edit Certificate Name" button when completed
      if (editNameBox) editNameBox.style.display = "block";

      if (editNameBtn) {
  editNameBtn.onclick = function () {
    const current = (localStorage.getItem("pap_partner_fullname") || "").trim();
    const input = prompt("Edit your certificate full name:", current);
    if (input && input.trim().length >= 3) {
      localStorage.setItem("pap_partner_fullname", input.trim());
      alert("Certificate name updated.");
    }
  };
}


      if (certBtn) certBtn.style.display = "inline-flex";
      if (certBadge) certBadge.style.display = "block";
    } else {
      localStorage.removeItem("papAcademyCompleted");

      if (certBtn) certBtn.style.display = "none";
      if (certBadge) certBadge.style.display = "none";

      // Hide Edit Name button until completion
      if (editNameBox) editNameBox.style.display = "none";
    }

    // NEW: toggle resume CTA to next incomplete module
    if (resumeBtn && Array.isArray(window.MODULES) && window.MODULES.length) {
      if (allDone) {
        resumeBtn.style.display = "none";
      } else {
        const next = window.MODULES.find((m) => !isPassed(m.id)) || window.MODULES[0];
        resumeBtn.href = `module.html?m=${encodeURIComponent(String(next.id))}`;
        resumeBtn.style.display = "inline-flex";
      }
    }
  }

  function renderModules() {
    const grid = document.getElementById("modulesGrid");
    if (!grid) return;

    const list = window.MODULES;
    if (!Array.isArray(list)) {
      grid.innerHTML = "<p class='small'>Modules failed to load.</p>";
      return;
    }

    grid.innerHTML = "";

    list.forEach((m) => {
      const done = isPassed(m.id);

      const moduleTitle = m.titleKey
        ? tr(m.titleKey, m.title || "")
        : (m.title || "");

      const card = document.createElement("a");
      card.className = "card";
      card.href = `module.html?m=${encodeURIComponent(String(m.id))}`;
      card.style.textDecoration = "none";
      card.style.display = "block";
      card.style.padding = "16px";
      card.style.borderRadius = "12px";

      const statusLabel = tr("academy.status", "Status");
      const statusValue = done
        ? tr("academy.completed", "Completed ✅")
        : tr("academy.not_completed", "Not completed");

      card.innerHTML = `
        <h3 style="margin:0 0 6px;">Module ${m.id} — ${moduleTitle}</h3>
        <p class="small" style="margin:0;">${moduleTitle}</p>
        <p class="small" style="margin-top:10px;"><strong>${statusLabel}:</strong> ${statusValue}</p>
      `;

      grid.appendChild(card);
    });
  }

  function renderAll() {
    // 1) Apply i18n to static content
    applyI18nOnly();

    // 2) Then render dynamic content AFTER i18n (so placeholders are replaced)
    setTimeout(() => {
      renderTop();
      renderModules();
    }, 50);
  }

  function wrapLanguageSwitch() {
    if (typeof window.papSetLang === "function" && !window.papSetLang.__papWrapped) {
      const original = window.papSetLang;
      window.papSetLang = function (lang) {
        const r = original(lang);
        // Re-render dynamic strings after language change
        setTimeout(() => {
          renderTop();
          renderModules();
        }, 50);
        return r;
      };
      window.papSetLang.__papWrapped = true;
    }
  }

  function init() {
    wrapLanguageSwitch();
    renderAll();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
