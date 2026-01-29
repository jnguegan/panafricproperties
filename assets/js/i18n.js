/* =========================================================
   PanAfric Properties — i18n (EN / FR / ES)
   Stable version (auto-runs on page load)
   ========================================================= */

(function () {
  const STORAGE_KEY = "pap_lang";
  const DEFAULT_LANG = "en";

  // IMPORTANT: Keys must match data-i18n exactly
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

      "home.hero.t": "Pan-African Real Estate, Built on Trust",
      "home.hero.p": "Verified assets. Trusted partners. Diaspora-ready.",
      "home.cta.browse": "Browse Properties",
      "home.cta.partner": "Become a Partner",

      "trust.title": "Trust & Verification",
      "trust.intro": "PanAfric Properties operates through a regulated local franchise network to improve transparency, reduce fraud risk, and protect diaspora buyers.",
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
      "trust.promo.p": "PanAfric Properties empowers young Africans — graduates, non-graduates, and unemployed professionals — to launch their own self-employed real estate businesses under our franchise model. Training, in-house certification, and diaspora buyer access are provided.",
      "trust.promo.cta": "Apply to Join Our Franchise Program",

      "training.title": "Training & Certification",
      "training.intro": "We train and certify local partners to protect buyers and strengthen trust.",
      "training.card1.t": "Partner Onboarding",
      "training.card1.p": "Core standards, brand guidelines, ethics, and local compliance fundamentals.",
      "training.card2.t": "Listing Verification",
      "training.card2.p": "How to validate ownership documents, seller identity, and due diligence status.",
      "training.card3.t": "Buyer Journey",
      "training.card3.p": "Managing diaspora enquiries, handovers, visit scheduling, and closing support.",
      "training.card4.t": "Professional Conduct",
      "training.card4.p": "Communication rules, transparency on fees, and dispute prevention.",
      "training.card5.t": "Certification",
      "training.card5.p": "Earn an internal certification that increases credibility for buyers and developers.",
      "training.card6.t": "Continuous Training",
      "training.card6.p": "Ongoing learning modules to keep partners aligned with platform standards.",
      "training.cta_box.t": "Want to become certified?",
      "training.cta_box.p": "Apply to join the franchise network. Once approved, you will get onboarding access to the Partner Academy.",

      "franchise.title": "Franchise Model",
      "franchise.intro": "Launch PanAfric Properties in your country with training, tools, and diaspora buyer access.",
      "franchise.cta": "Apply Now",

      "franchise.card1.t": "Exclusive Territory",
      "franchise.card1.p": "Operate PanAfric Properties in your assigned country or region under an exclusive franchise mandate.",
      "franchise.card2.t": "Training & Certification",
      "franchise.card2.p": "Receive onboarding, verification training, and internal certification to build buyer trust.",
      "franchise.card3.t": "Platform & Brand",
      "franchise.card3.p": "Use our platform, systems, and brand to list properties and serve diaspora clients professionally.",
      "franchise.card4.t": "Revenue Model",
      "franchise.card4.p": "Earn income through listings, buyer introductions, transaction support, and local partnerships.",
      "franchise.card5.t": "Ongoing Support",
      "franchise.card5.p": "Continuous training, platform updates, and operational guidance from the central team.",
      "franchise.card6.t": "Long-Term Growth",
      "franchise.card6.p": "Build a scalable real estate business aligned with diaspora demand and long-term credibility."
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

      "home.hero.t": "Immobilier panafricain, fondé sur la confiance",
      "home.hero.p": "Actifs vérifiés. Partenaires fiables. Pensé pour la diaspora.",
      "home.cta.browse": "Voir les biens",
      "home.cta.partner": "Devenir partenaire",

      "trust.title": "Confiance & Vérification",
      "trust.intro": "PanAfric Properties opère via un réseau de franchises locales encadrées afin d’améliorer la transparence, réduire le risque de fraude et protéger les acheteurs de la diaspora.",
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
      "trust.promo.p": "PanAfric Properties aide les jeunes Africains — diplômés, non diplômés et professionnels en recherche d’emploi — à créer leur activité immobilière en indépendants via notre modèle de franchise. Formation, certification interne et accès à la diaspora inclus.",
      "trust.promo.cta": "Candidater au programme de franchise",

      "training.title": "Formation & Certification",
      "training.intro": "Nous formons et certifions les partenaires locaux pour protéger les acheteurs et renforcer la confiance.",
      "training.card1.t": "Intégration des partenaires",
      "training.card1.p": "Normes clés, charte de marque, éthique et bases de conformité locale.",
      "training.card2.t": "Vérification des annonces",
      "training.card2.p": "Validation des documents de propriété, de l’identité du vendeur et du statut de due diligence.",
      "training.card3.t": "Parcours acheteur",
      "training.card3.p": "Gestion des demandes diaspora, passations, planification des visites et accompagnement à la clôture.",
      "training.card4.t": "Conduite professionnelle",
      "training.card4.p": "Règles de communication, transparence des frais et prévention des litiges.",
      "training.card5.t": "Certification",
      "training.card5.p": "Obtenez une certification interne renforçant la crédibilité auprès des acheteurs et promoteurs.",
      "training.card6.t": "Formation continue",
      "training.card6.p": "Modules réguliers pour maintenir les partenaires alignés sur les standards de la plateforme.",
      "training.cta_box.t": "Vous souhaitez être certifié ?",
      "training.cta_box.p": "Postulez pour rejoindre le réseau de franchises. Une fois approuvé, vous aurez accès à l’intégration via la Partner Academy.",

      "franchise.title": "Modèle de franchise",
      "franchise.intro": "Lancez PanAfric Properties dans votre pays avec formation, outils et accès aux acheteurs diaspora.",
      "franchise.cta": "Candidater",

      "franchise.card1.t": "Territoire exclusif",
      "franchise.card1.p": "Exploitez PanAfric Properties dans votre pays ou région attribué(e) via un mandat de franchise exclusif.",
      "franchise.card2.t": "Formation & Certification",
      "franchise.card2.p": "Onboarding, formation à la vérification et certification interne pour renforcer la confiance des acheteurs.",
      "franchise.card3.t": "Plateforme & Marque",
      "franchise.card3.p": "Utilisez notre plateforme, nos systèmes et notre marque pour publier des biens et servir la diaspora avec professionnalisme.",
      "franchise.card4.t": "Modèle de revenus",
      "franchise.card4.p": "Générez des revenus via les annonces, mises en relation acheteurs, accompagnement transactionnel et partenariats locaux.",
      "franchise.card5.t": "Support continu",
      "franchise.card5.p": "Formation continue, mises à jour de la plateforme et accompagnement opérationnel par l’équipe centrale.",
      "franchise.card6.t": "Croissance à long terme",
      "franchise.card6.p": "Construisez une activité immobilière scalable, alignée sur la demande diaspora et une crédibilité durable."
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

      "home.hero.t": "Inmobiliaria panafricana basada en la confianza",
      "home.hero.p": "Activos verificados. Socios confiables. Lista para la diáspora.",
      "home.cta.browse": "Ver propiedades",
      "home.cta.partner": "Ser socio",

      "trust.title": "Confianza y Verificación",
      "trust.intro": "PanAfric Properties opera mediante una red de franquicias locales reguladas para mejorar la transparencia, reducir el fraude y proteger a los compradores de la diáspora.",
      "trust.c1.t": "Socios locales con licencia",
      "trust.c1.p": "Los anuncios los envían socios verificados que operan bajo leyes locales y requisitos del sector.",
      "trust.c2.t": "Comprobación de título y propiedad",
      "trust.c2.p": "Cuando está disponible, la documentación se revisa y se marca como Verificado / En revisión / No verificado.",
      "trust.c3.t": "Evaluación de promotores",
      "trust.c3.p": "Promotores y vendedores pasan controles básicos y validación de referencias antes de publicar.",
      "trust.c4.t": "Estado de due diligence",
      "trust.c4.p": "Cada oportunidad muestra claramente su estado de due diligence y los siguientes pasos recomendados.",
      "trust.c5.t": "Soporte al comprador",
      "trust.c5.p": "Guiamos al comprador y canalizamos las consultas al socio local correspondiente.",
      "trust.c6.t": "Proceso claro, precios claros",
      "trust.c6.p": "Comunicación transparente sobre tarifas, pasos y plazos — para planificar con confianza.",
      "trust.cta.agent": "Hablar con un agente local",
      "trust.cta.browse": "Ver propiedades",
      "trust.promo.t": "Construye un negocio inmobiliario con nosotros",
      "trust.promo.p": "PanAfric Properties impulsa a jóvenes africanos — graduados, no graduados y profesionales desempleados — a lanzar su negocio inmobiliario como autónomos mediante nuestro modelo de franquicia. Incluye formación, certificación interna y acceso a compradores de la diáspora.",
      "trust.promo.cta": "Solicitar el programa de franquicia",

      "training.title": "Formación y Certificación",
      "training.intro": "Formamos y certificamos a socios locales para proteger a los compradores y fortalecer la confianza.",
      "training.card1.t": "Incorporación de socios",
      "training.card1.p": "Estándares clave, guías de marca, ética y fundamentos de cumplimiento local.",
      "training.card2.t": "Verificación de anuncios",
      "training.card2.p": "Cómo validar documentos de propiedad, identidad del vendedor y estado de due diligence.",
      "training.card3.t": "Recorrido del comprador",
      "training.card3.p": "Gestión de consultas de la diáspora, traspasos, agenda de visitas y soporte de cierre.",
      "training.card4.t": "Conducta profesional",
      "training.card4.p": "Normas de comunicación, transparencia en tarifas y prevención de disputas.",
      "training.card5.t": "Certificación",
      "training.card5.p": "Obtén una certificación interna que aumenta la credibilidad para compradores y promotores.",
      "training.card6.t": "Formación continua",
      "training.card6.p": "Módulos continuos para mantener a los socios alineados con los estándares de la plataforma.",
      "training.cta_box.t": "¿Quieres certificarte?",
      "training.cta_box.p": "Solicita unirte a la red de franquicias. Una vez aprobado, tendrás acceso a la Partner Academy.",

      "franchise.title": "Modelo de franquicia",
      "franchise.intro": "Lanza PanAfric Properties en tu país con formación, herramientas y acceso a compradores de la diáspora.",
      "franchise.cta": "Solicitar",

      "franchise.card1.t": "Territorio exclusivo",
      "franchise.card1.p": "Opera PanAfric Properties en tu país o región asignada bajo un mandato de franquicia exclusivo.",
      "franchise.card2.t": "Formación y Certificación",
      "franchise.card2.p": "Incorporación, formación en verificación y certificación interna para generar confianza en los compradores.",
      "franchise.card3.t": "Plataforma y Marca",
      "franchise.card3.p": "Utiliza nuestra plataforma, sistemas y marca para publicar propiedades y atender a la diáspora con profesionalidad.",
      "franchise.card4.t": "Modelo de ingresos",
      "franchise.card4.p": "Genera ingresos mediante anuncios, introducciones de compradores, soporte en transacciones y alianzas locales.",
      "franchise.card5.t": "Soporte continuo",
      "franchise.card5.p": "Formación continua, actualizaciones de la plataforma y orientación operativa del equipo central.",
      "franchise.card6.t": "Crecimiento a largo plazo",
      "franchise.card6.p": "Construye un negocio inmobiliario escalable, alineado con la demanda de la diáspora y con credibilidad a largo plazo."
    }
  };

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function applyLang(lang) {
    const dict = I18N[lang] || I18N[DEFAULT_LANG];
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    const select = document.querySelector(".lang-select");
    if (select) select.value = lang;
  }

  function setLang(lang) {
    const safe = I18N[lang] ? lang : DEFAULT_LANG;
    localStorage.setItem(STORAGE_KEY, safe);
    applyLang(safe);
  }

  window.papSetLang = setLang;
  window.papApplyLang = applyLang;
  window.papGetLang = getLang;

  document.addEventListener("DOMContentLoaded", function () {
    applyLang(getLang());
  });
})();
