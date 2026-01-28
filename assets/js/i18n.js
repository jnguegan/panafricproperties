// assets/js/i18n.js

(function () {
  const STORAGE_KEY = "pap_lang";
  const SUPPORTED = ["en", "fr", "es"];
  const DEFAULT_LANG = "en";

  // ---- DICTIONARY (expand keys as you convert pages) ----
  const I18N = {
    en: {
      nav: {
        home: "Home",
        countries: "Countries",
        properties: "Properties",
        agents: "Agents",
        trust: "Trust",
        academy: "Partner Academy",
        training: "Training",
        franchise: "Franchise",
        contact: "Contact"
      },
      common: {
        language: "Language",
        learnMore: "Learn more",
        getStarted: "Get started",
        comingSoon: "Coming soon",
        back: "Back",
        next: "Next"
      },
      footer: {
        tagline: "Trusted Pan-African property marketplace.",
        rights: "All rights reserved.",
        privacy: "Privacy",
        terms: "Terms"
      },
      index: {
        heroTitle: "Pan-African Real Estate, Verified.",
        heroSubtitle: "Discover properties, trusted agents, and cross-border opportunities across Africa — with verification built in.",
        ctaBrowse: "Browse listings",
        ctaTrust: "How verification works",
        block1Title: "Verified agents",
        block1Text: "Work with agents and partners who pass identity and compliance checks.",
        block2Title: "Buyer protection",
        block2Text: "Clear steps, audit trails, and dispute-ready records for safer transactions.",
        block3Title: "Diaspora-ready",
        block3Text: "Remote viewing, legal guidance, and structured purchase workflows."
      },
      trust: {
        title: "Trust & Verification",
        intro: "We combine partner onboarding, identity checks, and transparent record keeping to help reduce fraud and increase confidence.",
        section1Title: "How verification works",
        step1Title: "Identity & company checks",
        step1Text: "We verify partner identity, business registration, and contact channels before activation.",
        step2Title: "Listing standards",
        step2Text: "Listings must meet minimum information standards and pass quality screening.",
        step3Title: "Audit trail & reporting",
        step3Text: "We keep structured records and offer reporting paths to resolve issues.",
        section2Title: "For buyers",
        buyersText: "Use verified partners, request documentation early, and keep communications inside the platform.",
        section3Title: "For agents",
        agentsText: "Complete onboarding, keep listings accurate, and respond to buyers promptly to maintain status."
      },
      training: {
        title: "Training",
        intro: "Learn how to use PanAfric Properties as an agent, partner, or franchise operator.",
        card1Title: "Platform fundamentals",
        card1Text: "Listings, messaging, leads, and buyer workflows.",
        card2Title: "Compliance & verification",
        card2Text: "Partner requirements, document standards, and red flags.",
        card3Title: "Closing cross-border deals",
        card3Text: "Remote buyers, payment routes, and secure handover."
      },
      franchise: {
        title: "Franchise",
        intro: "Operate PanAfric Properties in your territory with structured onboarding and support.",
        block1Title: "Territory rights",
        block1Text: "Exclusive or shared territory models depending on market maturity.",
        block2Title: "Revenue model",
        block2Text: "Commission share, partner onboarding, and service upsells.",
        block3Title: "Support",
        block3Text: "Training, brand assets, operations playbook, and KPIs.",
        ctaApply: "Apply as a franchise partner"
      }
    },

    fr: {
      nav: {
        home: "Accueil",
        countries: "Pays",
        properties: "Biens",
        agents: "Agents",
        trust: "Confiance",
        academy: "Académie Partenaires",
        training: "Formation",
        franchise: "Franchise",
        contact: "Contact"
      },
      common: {
        language: "Langue",
        learnMore: "En savoir plus",
        getStarted: "Commencer",
        comingSoon: "Bientôt disponible",
        back: "Retour",
        next: "Suivant"
      },
      footer: {
        tagline: "Marketplace immobilier panafricain de confiance.",
        rights: "Tous droits réservés.",
        privacy: "Confidentialité",
        terms: "Conditions"
      },
      index: {
        heroTitle: "Immobilier panafricain, vérifié.",
        heroSubtitle: "Découvrez des biens, des agents fiables et des opportunités transfrontalières — avec une vérification intégrée.",
        ctaBrowse: "Voir les annonces",
        ctaTrust: "Comment fonctionne la vérification",
        block1Title: "Agents vérifiés",
        block1Text: "Travaillez avec des agents et partenaires validés (identité & conformité).",
        block2Title: "Protection acheteur",
        block2Text: "Étapes claires, traces et documents pour des transactions plus sûres.",
        block3Title: "Conçu pour la diaspora",
        block3Text: "Visites à distance, accompagnement légal et processus d’achat structuré."
      },
      trust: {
        title: "Confiance & Vérification",
        intro: "Nous combinons l’onboarding partenaires, la vérification d’identité et des registres transparents pour réduire la fraude et renforcer la confiance.",
        section1Title: "Comment ça marche",
        step1Title: "Contrôles identité & société",
        step1Text: "Vérification de l’identité, immatriculation, et canaux de contact avant activation.",
        step2Title: "Normes des annonces",
        step2Text: "Les annonces doivent respecter un standard minimum et passent un contrôle qualité.",
        step3Title: "Traçabilité & signalement",
        step3Text: "Nous conservons des preuves et proposons des voies de signalement pour résoudre les litiges.",
        section2Title: "Pour les acheteurs",
        buyersText: "Utilisez des partenaires vérifiés, demandez les documents tôt, et centralisez les échanges sur la plateforme.",
        section3Title: "Pour les agents",
        agentsText: "Terminez l’onboarding, gardez les annonces exactes et répondez rapidement pour maintenir votre statut."
      },
      training: {
        title: "Formation",
        intro: "Apprenez à utiliser PanAfric Properties en tant qu’agent, partenaire ou franchisé.",
        card1Title: "Bases de la plateforme",
        card1Text: "Annonces, messages, leads et parcours acheteur.",
        card2Title: "Conformité & vérification",
        card2Text: "Exigences partenaires, standards documents et signaux d’alerte.",
        card3Title: "Conclure à l’international",
        card3Text: "Acheteurs à distance, paiements et remise sécurisée."
      },
      franchise: {
        title: "Franchise",
        intro: "Déployez PanAfric Properties dans votre zone avec un onboarding et un support structurés.",
        block1Title: "Droits territoriaux",
        block1Text: "Modèles exclusifs ou partagés selon la maturité du marché.",
        block2Title: "Modèle de revenus",
        block2Text: "Partage de commissions, onboarding partenaires et services additionnels.",
        block3Title: "Support",
        block3Text: "Formation, assets de marque, playbook opérationnel et KPI.",
        ctaApply: "Postuler comme franchisé"
      }
    },

    es: {
      nav: {
        home: "Inicio",
        countries: "Países",
        properties: "Propiedades",
        agents: "Agentes",
        trust: "Confianza",
        academy: "Academia de Socios",
        training: "Formación",
        franchise: "Franquicia",
        contact: "Contacto"
      },
      common: {
        language: "Idioma",
        learnMore: "Saber más",
        getStarted: "Empezar",
        comingSoon: "Próximamente",
        back: "Atrás",
        next: "Siguiente"
      },
      footer: {
        tagline: "Marketplace inmobiliario panafricano de confianza.",
        rights: "Todos los derechos reservados.",
        privacy: "Privacidad",
        terms: "Términos"
      },
      index: {
        heroTitle: "Inmobiliaria panafricana, verificada.",
        heroSubtitle: "Descubre propiedades, agentes confiables y oportunidades transfronterizas — con verificación integrada.",
        ctaBrowse: "Ver anuncios",
        ctaTrust: "Cómo funciona la verificación",
        block1Title: "Agentes verificados",
        block1Text: "Trabaja con agentes y socios validados (identidad y cumplimiento).",
        block2Title: "Protección al comprador",
        block2Text: "Pasos claros, trazabilidad y documentación para mayor seguridad.",
        block3Title: "Lista para la diáspora",
        block3Text: "Visitas remotas, guía legal y flujos de compra estructurados."
      },
      trust: {
        title: "Confianza y Verificación",
        intro: "Combinamos onboarding de socios, verificación de identidad y registros transparentes para reducir el fraude y aumentar la confianza.",
        section1Title: "Cómo funciona",
        step1Title: "Verificación de identidad y empresa",
        step1Text: "Verificamos identidad, registro mercantil y canales de contacto antes de activar.",
        step2Title: "Estándares de anuncios",
        step2Text: "Los anuncios deben cumplir un estándar mínimo y pasan control de calidad.",
        step3Title: "Trazabilidad y reporte",
        step3Text: "Guardamos registros y ofrecemos vías de reporte para resolver incidencias.",
        section2Title: "Para compradores",
        buyersText: "Usa socios verificados, pide documentación pronto y centraliza la comunicación en la plataforma.",
        section3Title: "Para agentes",
        agentsText: "Completa el onboarding, mantén anuncios correctos y responde rápido para conservar tu estado."
      },
      training: {
        title: "Formación",
        intro: "Aprende a usar PanAfric Properties como agente, socio o franquiciado.",
        card1Title: "Fundamentos de la plataforma",
        card1Text: "Anuncios, mensajes, leads y flujo del comprador.",
        card2Title: "Cumplimiento y verificación",
        card2Text: "Requisitos de socios, estándares de documentos y señales de alerta.",
        card3Title: "Cerrar operaciones internacionales",
        card3Text: "Compradores remotos, pagos y entrega segura."
      },
      franchise: {
        title: "Franquicia",
        intro: "Opera PanAfric Properties en tu territorio con onboarding y soporte estructurados.",
        block1Title: "Derechos territoriales",
        block1Text: "Modelos exclusivos o compartidos según el mercado.",
        block2Title: "Modelo de ingresos",
        block2Text: "Reparto de comisiones, onboarding de socios y servicios extra.",
        block3Title: "Soporte",
        block3Text: "Formación, activos de marca, playbook operativo y KPIs.",
        ctaApply: "Solicitar franquicia"
      }
    }
  };

  function getNested(obj, path) {
    return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
  }

  function detectInitialLang() {
    const saved = (localStorage.getItem(STORAGE_KEY) || "").toLowerCase();
    if (SUPPORTED.includes(saved)) return saved;

    const nav = (navigator.language || DEFAULT_LANG).slice(0, 2).toLowerCase();
    if (SUPPORTED.includes(nav)) return nav;

    return DEFAULT_LANG;
  }

  function applyTranslations(lang) {
    const dict = I18N[lang] || I18N[DEFAULT_LANG];

    // text nodes: data-i18n
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = getNested(dict, key) ?? getNested(I18N[DEFAULT_LANG], key);
      if (value !== undefined) el.textContent = value;
    });

    // html nodes: data-i18n-html
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      const value = getNested(dict, key) ?? getNested(I18N[DEFAULT_LANG], key);
      if (value !== undefined) el.innerHTML = value;
    });

    // attributes
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const value = getNested(dict, key) ?? getNested(I18N[DEFAULT_LANG], key);
      if (value !== undefined) el.setAttribute("placeholder", value);
    });

    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      const value = getNested(dict, key) ?? getNested(I18N[DEFAULT_LANG], key);
      if (value !== undefined) el.setAttribute("title", value);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      const value = getNested(dict, key) ?? getNested(I18N[DEFAULT_LANG], key);
      if (value !== undefined) el.setAttribute("aria-label", value);
    });

    // set document lang attribute
    document.documentElement.setAttribute("lang", lang);
  }

  // Public API (you already have papSetLang callable)
  window.papSetLang = function (lang) {
    const normalized = (lang || "").toLowerCase();
    const finalLang = SUPPORTED.includes(normalized) ? normalized : DEFAULT_LANG;

    localStorage.setItem(STORAGE_KEY, finalLang);
    applyTranslations(finalLang);

    // keep dropdown in sync (if exists)
    const sel = document.querySelector(".lang-switch select");
    if (sel) sel.value = finalLang;
  };

  window.papGetLang = function () {
    const saved = (localStorage.getItem(STORAGE_KEY) || "").toLowerCase();
    return SUPPORTED.includes(saved) ? saved : DEFAULT_LANG;
  };

  // Auto-init on DOM ready
  document.addEventListener("DOMContentLoaded", () => {
    const lang = detectInitialLang();

    // bind dropdown (standard behavior everywhere)
    const sel = document.querySelector(".lang-switch select");
    if (sel) {
      sel.value = lang;
      sel.addEventListener("change", (e) => window.papSetLang(e.target.value));
    }

    window.papSetLang(lang);
  });
})();
