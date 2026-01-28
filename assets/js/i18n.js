/* assets/js/i18n.js
   PanAfric Properties — simple, reliable static i18n (EN/FR/ES)
*/

(function () {
  const STORAGE_KEY = "pap_lang";
  const DEFAULT_LANG = "en";

  // 1) TRANSLATIONS (keys must match data-i18n exactly)
  const I18N = {
    en: {
      "lang.label": "Language",

      "nav.countries": "Countries",
      "nav.properties": "Properties",
      "nav.agents": "Agents",
      "nav.work": "Work With Us",
      "nav.training": "Training & Certification",
      "nav.trust": "Trust",
      "nav.login": "Partner Login",
      "nav.contact": "Contact",

      "footer.tagline": "Trusted access to verified African real estate opportunities — built for the diaspora.",
      "footer.platform": "Platform",
      "footer.trust": "Trust & Verification",
      "footer.franchise": "Franchise",
      "footer.franchise_text": "Become a local partner and list verified opportunities in your territory.",
      "footer.apply": "Apply / Enquire",
      "footer.contact": "Contact",
      "footer.contact_text": "For buyers, developers, and partners.",
      "footer.message": "Message us",
      "footer.rights": "© 2026 PanAfric Properties. All rights reserved.",

      "trust.title": "Trust & Verification",
      "trust.intro":
        "PanAfric Properties operates through a regulated local franchise network to improve transparency, reduce fraud risk, and protect diaspora buyers.",

      "trust.c1.t": "Licensed Local Franchise Partners",
      "trust.c1.p": "Listings are submitted by verified partners operating under local laws and industry requirements.",

      "trust.c2.t": "Title & Ownership Checks",
      "trust.c2.p": "Where available, title documentation is reviewed and flagged as Verified / In Review / Not Verified.",

      "trust.c3.t": "Developer Screening",
      "trust.c3.p": "Developers and sellers undergo basic background checks and reference validation before listing.",

      "trust.c4.t": "Due Diligence Status",
      "trust.c4.p": "Each opportunity will clearly display its due diligence status and recommended next steps.",

      "trust.c5.t": "Buyer Support",
      "trust.c5.p": "We guide buyers through the process and route enquiries to the correct in-country partner.",

      "trust.c6.t": "Clear Process, Clear Pricing",
      "trust.c6.p": "Transparent communication on fees, steps, and timelines—so diaspora buyers can plan confidently.",

      "trust.cta.agent": "Speak to a Local Agent",
      "trust.cta.browse": "Browse Properties",

      "trust.promo.t": "Build a Real Estate Business With Us",
      "trust.promo.p":
        "PanAfric Properties empowers young Africans — graduates, non-graduates, and unemployed professionals — to launch their own self-employed real estate businesses under our franchise model. Training, in-house certification, and diaspora buyer access are provided.",
      "trust.promo.cta": "Apply to Join Our Franchise Program",

      "home.hero.t": "Pan-African Real Estate, Built on Trust",
      "home.hero.p": "Verified assets. Trusted partners. Diaspora-ready.",
      "home.cta.browse": "Browse Properties",
      "home.cta.partner": "Become a Partner",

      "training.title": "Training & Certification",
      "training.intro": "We train and certify local partners to protect buyers and strengthen trust.",

      "franchise.title": "Franchise Model",
      "franchise.intro": "Launch PanAfric Properties in your country with training, tools, and diaspora buyer access.",
      "franchise.cta": "Apply Now"
    },

    fr: {
      "lang.label": "Langue",

      "nav.countries": "Pays",
      "nav.properties": "Biens",
      "nav.agents": "Agents",
      "nav.work": "Travailler avec nous",
      "nav.training": "Formation & Certification",
      "nav.trust": "Confiance",
      "nav.login": "Connexion Partenaire",
      "nav.contact": "Contact",

      "footer.tagline": "Accès fiable à l’immobilier africain vérifié — conçu pour la diaspora.",
      "footer.platform": "Plateforme",
      "footer.trust": "Confiance & Vérification",
      "footer.franchise": "Franchise",
      "footer.franchise_text": "Devenez partenaire local et publiez des opportunités vérifiées dans votre territoire.",
      "footer.apply": "Candidater / Demander",
      "footer.contact": "Contact",
      "footer.contact_text": "Pour acheteurs, promoteurs et partenaires.",
      "footer.message": "Nous écrire",
      "footer.rights": "© 2026 PanAfric Properties. Tous droits réservés.",

      "trust.title": "Confiance & Vérification",
      "trust.intro":
        "PanAfric Properties opère via un réseau de franchises locales encadrées afin d’améliorer la transparence, réduire le risque de fraude et protéger les acheteurs de la diaspora.",

      "trust.c1.t": "Partenaires franchisés locaux agréés",
      "trust.c1.p": "Les annonces sont soumises par des partenaires vérifiés opérant selon les lois locales et les exigences du secteur.",

      "trust.c2.t": "Vérification des titres & propriété",
      "trust.c2.p": "Lorsque disponible, la documentation est examinée et indiquée : Vérifié / En cours / Non vérifié.",

      "trust.c3.t": "Contrôle des promoteurs",
      "trust.c3.p": "Les promoteurs et vendeurs font l’objet de vérifications de base et de validation de références avant publication.",

      "trust.c4.t": "Statut de due diligence",
      "trust.c4.p": "Chaque opportunité affiche clairement son statut de due diligence et les prochaines étapes recommandées.",

      "trust.c5.t": "Accompagnement acheteur",
      "trust.c5.p": "Nous guidons l’acheteur et orientons chaque demande vers le bon partenaire local.",

      "trust.c6.t": "Process clair, prix clairs",
      "trust.c6.p": "Communication transparente sur les frais, les étapes et les délais — pour planifier en confiance.",

      "trust.cta.agent": "Parler à un agent local",
      "trust.cta.browse": "Voir les biens",

      "trust.promo.t": "Construisez votre activité immobilière avec nous",
      "trust.promo.p":
        "PanAfric Properties aide les jeunes Africains — diplômés, non diplômés et professionnels en recherche d’emploi — à créer leur activité immobilière en indépendants via notre modèle de franchise. Formation, certification interne et accès à la diaspora inclus.",
      "trust.promo.cta": "Candidater au programme de franchise",

      "home.hero.t": "Immobilier panafricain, fondé sur la confiance",
      "home.hero.p": "Actifs vérifiés. Partenaires fiables. Pensé pour la diaspora.",
      "home.cta.browse": "Voir les biens",
      "home.cta.partner": "Devenir partenaire",

      "training.title": "Formation & Certification",
      "training.intro": "Nous formons et certifions les partenaires locaux pour protéger les acheteurs et renforcer la confiance.",

      "franchise.title": "Modèle de franchise",
      "franchise.intro": "Lancez PanAfric Properties dans votre pays avec formation, outils et accès aux acheteurs diaspora.",
      "franchise.cta": "Candidater"
    },

    es: {
      "lang.label": "Idioma",

      "nav.countries": "Países",
      "nav.properties": "Propiedades",
      "nav.agents": "Agentes",
      "nav.work": "Trabaja con nosotros",
      "nav.training": "Formación y Certificación",
      "nav.trust": "Confianza",
      "nav.login": "Acceso Socios",
      "nav.contact": "Contacto",

      "footer.tagline": "Acceso confiable a oportunidades inmobiliarias africanas verificadas — creado para la diáspora.",
      "footer.platform": "Plataforma",
      "footer.trust": "Confianza y Verificación",
      "footer.franchise": "Franquicia",
      "footer.franchise_text": "Conviértete en socio local y publica oportunidades verificadas en tu territorio.",
      "footer.apply": "Solicitar / Consultar",
      "footer.contact": "Contacto",
      "footer.contact_text": "Para compradores, promotores y socios.",
      "footer.message": "Escríbenos",
      "footer.rights": "© 2026 PanAfric Properties. Todos los derechos reservados.",

      "trust.title": "Confianza y Verificación",
      "trust.intro":
        "PanAfric Properties opera mediante una red de franquicias locales reguladas para mejorar la transparencia, reducir el fraude y proteger a los compradores de la diáspora.",

      "trust.c1.t": "Socios locales con licencia",
      "trust.c1.p": "Los anuncios los envían socios verificados que operan bajo leyes locales y requisitos del sector.",

      "trust.c2.t": "Comprobación de título y propiedad",
      "trust.c2.p": "Cuando esté disponible, la documentación se revisa y se marca como Verificado / En revisión / No verificado.",

      "trust.c3.t": "Evaluación de promotores",
      "trust.c3.p": "Promotores y vendedores pasan controles básicos y validación de referencias antes de publicar.",

      "trust.c4.t": "Estado de due diligence",
      "trust.c4.p": "Cada oportunidad muestra claramente su estado de due diligence y los siguientes pasos recomendados.",

      "trust.c5.t": "Soporte al comprador",
      "trust.c5.p": "Guiamos al comprador y canalizamos las consultas al socio local correspondiente.",

      "trust.c6.t": "Proceso claro, precios claros",
      "trust.c6.p": "Comunicación transparente sobre tarifas, pasos y plazos—para que la diáspora planifique con confianza.",

      "trust.cta.agent": "Hablar con un agente local",
      "trust.cta.browse": "Ver propiedades",

      "trust.promo.t": "Construye un negocio inmobiliario con nosotros",
      "trust.promo.p":
        "PanAfric Properties impulsa a jóvenes africanos — graduados, no graduados y profesionales desempleados — a lanzar su negocio inmobiliario como autónomos mediante nuestro modelo de franquicia. Incluye formación, certificación interna y acceso a compradores de la diáspora.",
      "trust.promo.cta": "Solicitar el programa de franquicia",

      "home.hero.t": "Inmobiliaria panafricana basada en la confianza",
      "home.hero.p": "Activos verificados. Socios confiables. Lista para la diáspora.",
      "home.cta.browse": "Ver propiedades",
      "home.cta.partner": "Ser socio",

      "training.title": "Formación y Certificación",
      "training.intro": "Formamos y certificamos socios locales para proteger a los compradores y fortalecer la confianza.",

      "franchise.title": "Modelo de franquicia",
      "franchise.intro": "Lanza PanAfric Properties en tu país con formación, herramientas y acceso a compradores de la diáspora.",
      "franchise.cta": "Solicitar"
    }
  };

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setLang(lang) {
    const safe = I18N[lang] ? lang : DEFAULT_LANG;
    localStorage.setItem(STORAGE_KEY, safe);
    applyLang(safe);
  }

  function applyLang(lang) {
    const dict = I18N[lang] || I18N[DEFAULT_LANG];

    document.documentElement.lang = lang;

    // Translate text nodes
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = dict[key];
      if (typeof val === "string") {
        el.textContent = val;
      } else {
        // If missing key, keep existing text (but log to console)
        // Helps you find missing translations quickly
        // console.warn("[i18n missing]", lang, key);
      }
    });

    // Sync dropdown
    const sel = document.querySelector(".lang-select");
    if (sel) sel.value = lang;
  }

  // Expose globally for onchange handlers
  window.papSetLang = setLang;
  window.papApplyLang = applyLang;
  window.papGetLang = getLang;

  // AUTO-RUN ON EVERY PAGE LOAD
  document.addEventListener("DOMContentLoaded", function () {
    applyLang(getLang());
  });
})();
