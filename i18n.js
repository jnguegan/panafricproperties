/* i18n.js — lightweight EN/FR/ES switcher for PanAfric Properties */
(function () {
  const KEY = "pap_lang";
  const supported = ["en", "fr", "es"];

  // Add translations here. Keys must match data-i18n attributes in HTML.
  const T = {
    en: {
      nav_countries: "Countries",
      nav_properties: "Properties",
      nav_agents: "Agents",
      nav_work: "Work With Us",
      nav_training: "Training & Certification",
      nav_trust: "Trust",
      nav_login: "Partner Login",
      nav_contact: "Contact",

      hero_badge: "Diaspora-first • Trust-first",
      hero_title: "PanAfric Properties",
      hero_subtitle:
        "Your trusted gateway to African real estate — connecting Africans worldwide to verified property opportunities back home through a regulated local franchise network.",
      cta_explore: "Explore Properties",
      cta_talk: "Talk to a Local Agent"
    },

    fr: {
      nav_countries: "Pays",
      nav_properties: "Biens",
      nav_agents: "Partenaires",
      nav_work: "Rejoignez-nous",
      nav_training: "Formation & Certification",
      nav_trust: "Confiance",
      nav_login: "Espace Partenaire",
      nav_contact: "Contact",

      hero_badge: "Diaspora d’abord • Confiance d’abord",
      hero_title: "PanAfric Properties",
      hero_subtitle:
        "Votre passerelle de confiance vers l’immobilier africain — reliant la diaspora à des opportunités vérifiées au pays via un réseau de partenaires franchisés encadré.",
      cta_explore: "Voir les biens",
      cta_talk: "Parler à un partenaire local"
    },

    es: {
      nav_countries: "Países",
      nav_properties: "Propiedades",
      nav_agents: "Socios",
      nav_work: "Trabaja con nosotros",
      nav_training: "Formación y Certificación",
      nav_trust: "Confianza",
      nav_login: "Acceso Socios",
      nav_contact: "Contacto",

      hero_badge: "Diáspora primero • Confianza primero",
      hero_title: "PanAfric Properties",
      hero_subtitle:
        "Tu puerta de acceso confiable al inmobiliario africano — conectando a la diáspora con oportunidades verificadas en su país mediante una red de franquicias supervisada.",
      cta_explore: "Explorar propiedades",
      cta_talk: "Hablar con un socio local"
    }
  };

  function getLang() {
    const saved = (localStorage.getItem(KEY) || "").toLowerCase();
    if (supported.includes(saved)) return saved;

    const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
    return supported.includes(browser) ? browser : "en";
  }

  function setLang(lang) {
    const l = supported.includes(lang) ? lang : "en";
    localStorage.setItem(KEY, l);
    applyLang(l);
    updateLangUI(l);
  }

  function applyLang(lang) {
    const dict = T[lang] || T.en;
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      const value = dict[key];
      if (typeof value === "string") el.textContent = value;
    });
  }

  function updateLangUI(lang) {
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      const isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  // Expose a small API for onclick
  window.papSetLang = setLang;

  // Init on load
  document.addEventListener("DOMContentLoaded", () => {
    const lang = getLang();
    applyLang(lang);
    updateLangUI(lang);
  });
})();
