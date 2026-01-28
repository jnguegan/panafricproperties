/* i18n.js — PanAfric Properties (EN / FR / ES) */

(function () {
  const STORAGE_KEY = "pap_lang";

  const dict = {
    /* ================= ENGLISH ================= */
    en: {
      /* Global */
      lang_label: "Language",

      /* Navigation */
      nav_countries: "Countries",
      nav_properties: "Properties",
      nav_agents: "Agents",
      nav_work: "Work With Us",
      nav_training: "Training & Certification",
      nav_trust: "Trust",
      nav_login: "Partner Login",
      nav_contact: "Contact",

      /* Trust page */
      trust_title: "Trust & Verification",
      trust_cta_agent: "Speak to a Local Agent",
      trust_cta_browse: "Browse Properties"
    },

    /* ================= FRENCH ================= */
    fr: {
      /* Global */
      lang_label: "Langue",

      /* Navigation */
      nav_countries: "Pays",
      nav_properties: "Biens",
      nav_agents: "Partenaires",
      nav_work: "Travailler avec nous",
      nav_training: "Formation & Certification",
      nav_trust: "Confiance",
      nav_login: "Espace partenaire",
      nav_contact: "Contact",

      /* Trust page */
      trust_title: "Confiance & Vérification",
      trust_cta_agent: "Parler à un partenaire local",
      trust_cta_browse: "Voir les biens"
    },

    /* ================= SPANISH ================= */
    es: {
      /* Global */
      lang_label: "Idioma",

      /* Navigation */
      nav_countries: "Países",
      nav_properties: "Propiedades",
      nav_agents: "Socios",
      nav_work: "Trabaja con nosotros",
      nav_training: "Formación y Certificación",
      nav_trust: "Confianza",
      nav_login: "Acceso socios",
      nav_contact: "Contacto",

      /* Trust page */
      trust_title: "Confianza y Verificación",
      trust_cta_agent: "Hablar con un socio local",
      trust_cta_browse: "Explorar propiedades"
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
      if (!key || !d[key]) return;
      el.textContent = d[key];
    });

    /* Sync dropdown value */
    document.querySelectorAll(".lang-select").forEach((sel) => {
      sel.value = lang;
    });

    /* Set html lang attribute */
    document.documentElement.setAttribute("lang", lang);
  }

  /* Expose globally */
  window.papSetLang = function (lang) {
    const safe = (lang || "en").toLowerCase();
    localStorage.setItem(STORAGE_KEY, safe);
    applyLang(safe);
  };

  document.addEventListener("DOMContentLoaded", function () {
    applyLang(getSavedLang());
  });
})();
