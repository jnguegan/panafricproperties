/* i18n.js — PanAfric Properties (EN/FR/ES) */

(function () {
  const STORAGE_KEY = "pap_lang";

  const dict = {
    en: {
      lang_label: "Language",
      nav_countries: "Countries",
      nav_properties: "Properties",
      nav_agents: "Agents",
      nav_work: "Work With Us",
      nav_training: "Training & Certification",
      nav_trust: "Trust",
      nav_login: "Partner Login",
      nav_contact: "Contact"
    },
    fr: {
      lang_label: "Langue",
      nav_countries: "Pays",
      nav_properties: "Biens",
      nav_agents: "Partenaires",
      nav_work: "Travailler avec nous",
      nav_training: "Formation & Certification",
      nav_trust: "Confiance",
      nav_login: "Connexion partenaire",
      nav_contact: "Contact"
    },
    es: {
      lang_label: "Idioma",
      nav_countries: "Países",
      nav_properties: "Propiedades",
      nav_agents: "Partners",
      nav_work: "Trabaja con nosotros",
      nav_training: "Formación y Certificación",
      nav_trust: "Confianza",
      nav_login: "Acceso socios",
      nav_contact: "Contacto"
    }
  };

  function getSavedLang() {
    const v = (localStorage.getItem(STORAGE_KEY) || "en").toLowerCase();
    return dict[v] ? v : "en";
  }

  function applyLang(lang) {
    const d = dict[lang] || dict.en;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const text = d[key];
      if (!text) return;
      el.textContent = text;
    });

    // keep dropdown in sync
    document.querySelectorAll(".lang-select").forEach((sel) => {
      sel.value = lang;
    });

    // also update html lang attribute
    document.documentElement.setAttribute("lang", lang);
  }

  // Expose globally for onchange="papSetLang('fr')"
  window.papSetLang = function (lang) {
    const safe = (lang || "en").toLowerCase();
    localStorage.setItem(STORAGE_KEY, safe);
    applyLang(safe);
  };

  document.addEventListener("DOMContentLoaded", function () {
    applyLang(getSavedLang());
  });
})();
