/* assets/js/i18n.js — SAFE + COMPLETE (EN/FR/ES) */

(function () {
  const STORAGE_KEY = "pap_lang";
  const SUPPORTED = ["en", "fr", "es"];

  const I18N = {
    en: {
      "lang_label": "Language",
      "lang.label": "Language",

      "nav.countries": "Countries",
      "nav.properties": "Properties",
      "nav.projects": "Projects",
      "nav.agents": "Agents",
      "nav.franchise": "Work With Us",
      "nav.training": "Training & Certification",
      "nav.trust": "Trust",
      "nav.login": "Partner Login",
      "nav.contact": "Contact",

      "franchise.hero.badge": "Entrepreneurship • Franchise • Social Impact",
      "franchise.hero.h1": "From Graduate to Real Estate Entrepreneur",
      "franchise.hero.p": `We empower young Africans, graduates, non-graduates, and unemployed professionals,
      to launch their own self-employed real estate businesses in their home cities under our franchise model.
      PanAfric Properties provides training, in-house certification, and access to diaspora buyers
      through our trusted marketplace platform.`,
      "franchise.training.h2": "Training & Certification",
      "franchise.training.p": `All approved franchise applicants complete our internal online Training & Certification Program
      before operating under the PanAfric Properties brand.`,
      "franchise.training.card1.h3": "Online Partner Academy",
      "franchise.training.card1.p": `Access structured training modules covering real estate basics,
          due diligence, ethics, and platform processes.`,
      "franchise.training.card2.h3": "Short Tests",
      "franchise.training.card2.p": "Each module includes a short assessment to verify understanding.",
      "franchise.training.card3.h3": "In-House Certification",
      "franchise.training.card3.p": "Receive PanAfric Properties Partner Certification upon completion.",
      "franchise.training.card4.h3": "Marketplace Activation",
      "franchise.training.card4.p": "Only certified partners may list properties and handle buyers.",
      "franchise.training.cta": "View Training & Certification Program",

      "franchise.hero.cta_apply": "Apply to Join Our Franchise Program",
      "franchise.hero.cta_trust": "How We Build Trust",

      "franchise.clarification.h3": "Important Clarification",
      "franchise.clarification.p": `PanAfric Properties is not offering salaried employment or traditional jobs.
        This program is a franchise-based entrepreneurship opportunity.
        Successful applicants operate as independent, self-employed business owners
        under the PanAfric Properties brand and trust framework.`,

      "franchise.who.h2": "Who This Is For",
      "franchise.who.card1.h3": "Graduates & Young Professionals",
      "franchise.who.card1.p": `If you have completed university or vocational training and are seeking a practical,
          income-generating business opportunity in your home city.`,
      "franchise.who.card2.h3": "Non-Graduates With Ambition",
      "franchise.who.card2.p": `You do not need a formal degree to succeed. We provide training, structure,
          and certification to help you operate professionally.`,
      "franchise.who.card3.h3": "Unemployed Professionals",
      "franchise.who.card3.p": `If you are currently unemployed or underemployed and want to become self-employed
          in a growing sector with real demand.`,
      "franchise.who.card4.h3": "Diaspora Returnees",
      "franchise.who.card4.p": `If you are returning to Africa and want to build a credible, structured business
          using an established brand and diaspora buyer pipeline.`,

      "franchise.provide.h2": "What We Provide",
      "franchise.provide.card1.h3": "Training & Onboarding",
      "franchise.provide.card1.p": `Structured onboarding covering real estate basics, client handling,
          due diligence procedures, platform processes, and ethics.`,
      "franchise.provide.card2.h3": "In-House Certification",
      "franchise.provide.card2.p": `All partners complete certification to operate under the PanAfric Properties
          brand and trust framework.`,
      "franchise.provide.card3.h3": "Brand & Marketplace Access",
      "franchise.provide.card3.p": `Use our brand, platform, and marketplace infrastructure to list verified
          opportunities and reach diaspora buyers worldwide.`,
      "franchise.provide.card4.h3": "Buyer Leads",
      "franchise.provide.card4.p": `Receive qualified enquiries from diaspora and international buyers
          routed through our marketplace.`,

      "franchise.model.h2": "How the Franchise Model Works",
      "franchise.model.card1.h3": "Territory-Based",
      "franchise.model.card1.p": `You operate in a defined city or territory as a PanAfric Properties partner.
          Exclusive or semi-exclusive rights may apply depending on market size.`,
      "franchise.model.card2.h3": "Commission-Based Earnings",
      "franchise.model.card2.p": `Earn commissions on successful property transactions and client referrals
          completed through the platform.`,
      "franchise.model.card3.h3": "Independent but Structured",
      "franchise.model.card3.p": `You run your own self-employed business while operating under our standards,
          trust framework, and compliance processes.`,
      "franchise.model.card4.h3": "Growth Path",
      "franchise.model.card4.p": `Top-performing partners may grow into multi-city operators,
          territory managers, or regional franchise leads.`,

      "franchise.econ.h2": "Partner Economics",
      "franchise.econ.p": `PanAfric Properties partners operate as independent, self-employed business owners. Your income is driven by
      completed transactions — supported by our training, verification framework, and diaspora buyer pipeline.`,

      "franchise.econ.card1.h3": "Typical Investment (Illustrative)",
      "franchise.econ.card1.p1": "A simple, transparent starting structure:",
      "franchise.econ.card1.p2": "• Training & Certification (one-off): <strong>€250</strong>",
      "franchise.econ.card1.p3": "• Territory Activation / Franchise Setup (one-off): <strong>€750</strong>",
      "franchise.econ.card1.p4": "Total initial investment: <strong>€1,000</strong>",
      "franchise.econ.card1.p5": "(Final pricing may vary by territory and rollout phase.)",
      "franchise.econ.card1.p6": `During early launch phases, PanAfric Properties may selectively waive or reduce certain fees for
  outstanding candidates or strategic territories, at its discretion.`,

      "franchise.econ.card2.h3": "How You Earn",
      "franchise.econ.card2.p1": "Partners earn a share of transaction commissions on completed deals.",
      "franchise.econ.card2.p2": "Typical commission range: <strong>3%–5%</strong>",
      "franchise.econ.card2.p3": "Typical partner share: <strong>50%–70%</strong>",
      "franchise.econ.card2.p4": "Exact structures may differ by market, property type, and developer agreements.",

      "franchise.econ.card3.h3": "Illustrative Income Per Deal",
      "franchise.econ.card3.p1": "Examples to help you understand the model:",
      "franchise.econ.card3.p2": "<strong>Conservative</strong>: €30,000 × 3% × 50% = <strong>€450</strong>",
      "franchise.econ.card3.p3": "<strong>Base</strong>: €50,000 × 4% × 60% = <strong>€1,200</strong>",
      "franchise.econ.card3.p4": "<strong>Strong</strong>: €80,000 × 5% × 70% = <strong>€2,800</strong>",
      "franchise.econ.card3.p5": `Many partners recover their initial investment within the first 1–3 completed transactions,
          depending on deal size and local commission norms.`,

      "franchise.econ.note.h3": "Important note (Transparency)",
      "franchise.econ.note.p": `Figures shown above are illustrative examples to explain the business model. Earnings are not guaranteed and
        depend on your activity, market conditions, pricing, and successful transaction completion.`,

      "franchise.econ.cta_team": "Speak to the team",
      "franchise.econ.cta_apply": "Apply to Join Our Partner Program",
      "franchise.econ.cta_training": "View Training & Certification",

      "franchise.compliance.h2": "Trust, Ethics & Compliance",
      "franchise.compliance.card1.h3": "Verification Standards",
      "franchise.compliance.card1.p": `All listings must pass basic legal, ownership, and documentation checks
          before being published on the platform.`,
      "franchise.compliance.card2.h3": "Code of Conduct",
      "franchise.compliance.card2.p": `All partners operate under a professional code of ethics covering
          transparency, client protection, and fair dealing.`,
      "franchise.compliance.card3.h3": "Ongoing Monitoring",
      "franchise.compliance.card3.p": `We monitor partner performance and compliance to maintain marketplace trust
          and diaspora confidence.`,
      "franchise.compliance.card4.h3": "Platform Governance",
      "franchise.compliance.card4.p": `Partners operate within our marketplace governance framework
          to protect buyers, sellers, and the PanAfric Properties brand.`,

      "franchise.apply.h2": "Apply to Join Our Franchise Program",
      "franchise.apply.p": `If you are ambitious, motivated, and committed to building a credible real estate business
        in your home city, we invite you to complete the form below to apply to become a PanAfric Properties franchise partner.
        No prior real estate experience is required.`,

      "franchise.form.full_name": "Full Name",
      "franchise.form.email": "Email Address",
      "franchise.form.phone": "Phone / WhatsApp",
      "franchise.form.location": "City & Country",
      "franchise.form.education": "Education Level",
      "franchise.form.employment": "Employment Status",
      "franchise.form.select": "Select",
      "franchise.form.education.secondary": "Secondary School",
      "franchise.form.education.diploma": "Diploma",
      "franchise.form.education.university": "University Degree",
      "franchise.form.education.other": "Other",
      "franchise.form.employment.unemployed": "Unemployed",
      "franchise.form.employment.self": "Self-employed",
      "franchise.form.employment.employed": "Employed",
      "franchise.form.employment.student": "Student",
      "franchise.form.why": "Why do you want to join PanAfric Properties?",
      "franchise.form.submit": "Submit Application",

      "footer.tagline": "Trusted access to verified African real estate opportunities — built for the diaspora.",
      "footer.platform.h3": "Platform",
      "footer.platform.countries": "Countries",
      "footer.platform.properties": "Properties",
      "footer.platform.trust": "Trust & Verification",
      "footer.platform.login": "Partner Login",
      "footer.work.h3": "Work With Us",
      "footer.work.p": `Launch your own real estate business with training,
          certification, and diaspora buyer access.`,
      "footer.work.apply": "Apply to Join",
      "footer.contact.h3": "Contact",
      "footer.contact.p": "For buyers, developers, and partners.",
      "footer.contact.link": "Message us",
      "footer.copyright": "© 2026 PanAfric Properties. All rights reserved.",

      "academy.go_dashboard": "Go to Partner Dashboard",

      "properties.pageTitle": "Properties — PanAfric Properties",
      "properties.h1": "Approved Property Listings",
      "properties.intro": "Browse approved listings. Each property is reviewed before publication.",
      "properties.searchPlaceholder": "Search by city, country, or keyword",
      "properties.filterAll": "All categories",
      "properties.filterSale": "For sale",
      "properties.filterRent": "For rent",
      "properties.typeAll": "All types",
      "properties.typeApartment": "Apartment",
      "properties.typeHouse": "House",
      "properties.typeLand": "Land",
      "properties.typeCommercial": "Commercial",
      "properties.typeDevelopment": "Development",
      "submit.type.development": "Development project",
      "properties.viewBtn": "View details",
      "properties.emptyTitle": "No approved listings yet",
      "properties.emptyText": "Please check back soon. New listings are published after admin approval.",
      "properties.errorTitle": "Unable to load listings",
      "properties.errorText": "Please try again later.",
      "properties.badgeSale": "For sale",
      "properties.badgeRent": "For rent",

      "property.pageTitle": "Property — PanAfric Properties",
      "property.backLink": "← Back to listings",
      "property.notFoundTitle": "Property not found",
      "property.notFoundText": "This listing may have been removed or is not approved.",
      "property.detailsTitle": "Details",
      "property.descriptionTitle": "Description",
      "property.featuresTitle": "Features",
      "property.contactTitle": "Contact",
      "property.emailBtn": "Email",
      "property.whatsappBtn": "WhatsApp",
      "property.noImages": "No images available",
      "property.noFeatures": "No features listed",

      "property.details.id": "ID",
      "property.details.type": "Type",
      "property.details.category": "Category",
      "property.details.bedrooms": "Bedrooms",
      "property.details.bathrooms": "Bathrooms",
      "property.details.size": "Size",
      "property.details.yearBuilt": "Year built",
      "property.details.city": "City",
      "property.details.country": "Country"
    },

    fr: {
      "lang_label": "Langue",
      "lang.label": "Langue",

      "nav.countries": "Pays",
      "nav.properties": "Propriétés",
      "nav.projects": "Projets",
      "nav.agents": "Agents",
      "nav.franchise": "Travailler avec nous",
      "nav.training": "Formation & Certification",
      "nav.trust": "Confiance",
      "nav.login": "Connexion Partenaire",
      "nav.contact": "Contact",

      "sponsor.who.card3Text": "Associations voulant créer une activité économique structurée.",
      "submit.footer_note": "Après soumission, notre équipe examinera et vous contactera si des précisions sont nécessaires.",
      "academy.go_dashboard": "Aller au tableau de bord partenaire",

      "properties.pageTitle": "Biens — PanAfric Properties",
      "properties.h1": "Annonces approuvées",
      "properties.intro": "Parcourez les annonces approuvées. Chaque bien est vérifié avant publication.",
      "properties.searchPlaceholder": "Rechercher par ville, pays ou mot-clé",
      "properties.filterAll": "Toutes les catégories",
      "properties.filterSale": "À vendre",
      "properties.filterRent": "À louer",
      "properties.typeAll": "Tous les types",
      "properties.typeApartment": "Appartement",
      "properties.typeHouse": "Maison",
      "properties.typeLand": "Terrain",
      "properties.typeCommercial": "Commercial",
      "properties.typeDevelopment": "Projet immobilier",
      "submit.type.development": "Projet immobilier",
      "properties.viewBtn": "Voir les détails",
      "properties.emptyTitle": "Aucune annonce approuvée pour le moment",
      "properties.emptyText": "Revenez bientôt. Les annonces sont publiées après validation admin.",
      "properties.errorTitle": "Impossible de charger les annonces",
      "properties.errorText": "Veuillez réessayer plus tard.",
      "properties.badgeSale": "À vendre",
      "properties.badgeRent": "À louer",

      "property.pageTitle": "Bien — PanAfric Properties",
      "property.backLink": "← Retour aux annonces",
      "property.notFoundTitle": "Bien introuvable",
      "property.notFoundText": "Cette annonce a peut-être été supprimée ou n’est pas approuvée.",
      "property.detailsTitle": "Détails",
      "property.descriptionTitle": "Description",
      "property.featuresTitle": "Caractéristiques",
      "property.contactTitle": "Contact",
      "property.emailBtn": "Email",
      "property.whatsappBtn": "WhatsApp",
      "property.noImages": "Aucune image disponible",
      "property.noFeatures": "Aucune caractéristique indiquée",

      "property.details.id": "ID",
      "property.details.type": "Type",
      "property.details.category": "Catégorie",
      "property.details.bedrooms": "Chambres",
      "property.details.bathrooms": "Salles de bain",
      "property.details.size": "Surface",
      "property.details.yearBuilt": "Année de construction",
      "property.details.city": "Ville",
      "property.details.country": "Pays"
      "index.hero.badge": "Diaspora d’abord • Confiance d’abord",
"index.hero.h1": "PanAfric Properties",
"index.hero.p": "Votre passerelle de confiance vers l’immobilier africain — connectant les Africains du monde entier à des opportunités vérifiées dans leur pays d’origine via un réseau local de franchise encadré.",
"index.hero.cta1": "Explorer les biens",
"index.hero.cta2": "Parler à un agent local",

"index.kpi1.t": "Marchés en lancement",
"index.kpi2.t": "Types d’annonces",
"index.kpi2.v": "Terrains • Maisons • Projets",
"index.kpi3.t": "Modèle",
"index.kpi3.v": "Réseau de franchise",

"index.how.h2": "Comment ça marche",
"index.how.card1.h3": "1) Parcourir des opportunités vérifiées",
"index.how.card1.p": "Explorez des terrains, maisons et projets listés par des partenaires franchisés agréés dans chaque territoire.",
"index.how.card2.h3": "2) Être mis en relation avec un agent local",
"index.how.card2.p": "Votre demande est orientée vers le bon professionnel sur place pour vous guider et vous protéger.",
"index.how.card3.h3": "3) Acheter avec clarté & accompagnement",
"index.how.card3.p": "Nous mettons en avant le niveau de diligence et fournissons des étapes transparentes pour finaliser en sécurité.",

"index.countries.h2": "Explorer les pays",
"index.countries.p": "Choisissez un marché pour voir des opportunités vérifiées et des partenaires franchisés locaux.",
"index.countries.cta1": "Voir les pays",
"index.countries.cta2": "Voir les annonces",

"index.country.ghana": "Ghana",
"index.country.nigeria": "Nigeria",
"index.country.cameroon": "Cameroun",
"index.country.senegal": "Sénégal",
"index.country.ivory": "Côte d’Ivoire",
"index.country.mali": "Mali",
"index.country.zimbabwe": "Zimbabwe",

"index.franchise.h2": "Devenir partenaire franchisé",
"index.franchise.p": "Lancez votre activité immobilière avec formation, certification et accès à des acheteurs de la diaspora via notre plateforme.",
"index.franchise.cta": "Travailler avec nous",

"index.footer.franchise.p": "Devenez partenaire local et listez des opportunités vérifiées dans votre territoire.",
"index.footer.franchise.link": "Candidater / Demander des informations"

    },

    es: {
      "lang_label": "Idioma",
      "lang.label": "Idioma",

      "nav.countries": "Países",
      "nav.properties": "Propiedades",
      "nav.projects": "Proyectos",
      "nav.agents": "Agentes",
      "nav.franchise": "Trabaja con nosotros",
      "nav.training": "Formación y Certificación",
      "nav.trust": "Confianza",
      "nav.login": "Acceso Socios",
      "nav.contact": "Contacto",

      "sponsor.who.card3Text": "Asociaciones que quieran crear actividad económica estructurada.",
      "module.9.q1.o3": "Evitar transparencia",
      "submit.footer_note": "Después del envío, nuestro equipo revisará y te contactará si necesita aclaraciones.",
      "academy.go_dashboard": "Ir al panel del socio",

      "properties.pageTitle": "Propiedades — PanAfric Properties",
      "properties.h1": "Listado de propiedades aprobadas",
      "properties.intro": "Explora los anuncios aprobados. Cada propiedad se revisa antes de publicarse.",
      "properties.searchPlaceholder": "Buscar por ciudad, país o palabra clave",
      "properties.filterAll": "Todas las categorías",
      "properties.filterSale": "En venta",
      "properties.filterRent": "En alquiler",
      "properties.typeAll": "Todos los tipos",
      "properties.typeApartment": "Apartamento",
      "properties.typeHouse": "Casa",
      "properties.typeLand": "Terreno",
      "properties.typeCommercial": "Comercial",
      "properties.typeDevelopment": "Proyecto inmobiliario",
      "submit.type.development": "Proyecto inmobiliario",
      "properties.viewBtn": "Ver detalles",
      "properties.emptyTitle": "Aún no hay anuncios aprobados",
      "properties.emptyText": "Vuelve pronto. Los anuncios se publican tras aprobación del admin.",
      "properties.errorTitle": "No se pudieron cargar los anuncios",
      "properties.errorText": "Inténtalo de nuevo más tarde.",
      "properties.badgeSale": "En venta",
      "properties.badgeRent": "En alquiler",

      "property.pageTitle": "Propiedad — PanAfric Properties",
      "property.backLink": "← Volver al listado",
      "property.notFoundTitle": "Propiedad no encontrada",
      "property.notFoundText": "Este anuncio puede haber sido eliminado o no está aprobado.",
      "property.detailsTitle": "Detalles",
      "property.descriptionTitle": "Descripción",
      "property.featuresTitle": "Características",
      "property.contactTitle": "Contacto",
      "property.emailBtn": "Email",
      "property.whatsappBtn": "WhatsApp",
      "property.noImages": "No hay imágenes disponibles",
      "property.noFeatures": "No hay características",

      "property.details.id": "ID",
      "property.details.type": "Tipo",
      "property.details.category": "Categoría",
      "property.details.bedrooms": "Habitaciones",
      "property.details.bathrooms": "Baños",
      "property.details.size": "Superficie",
      "property.details.yearBuilt": "Año de construcción",
      "property.details.city": "Ciudad",
      "property.details.country": "País"
  "index.hero.badge": "Primero la diáspora • Primero la confianza",
"index.hero.h1": "PanAfric Properties",
"index.hero.p": "Tu puerta de entrada de confianza al mercado inmobiliario africano — conectando a africanos en todo el mundo con oportunidades verificadas en su país de origen mediante una red local de franquicias regulada.",
"index.hero.cta1": "Explorar propiedades",
"index.hero.cta2": "Hablar con un agente local",

"index.kpi1.t": "Mercados en lanzamiento",
"index.kpi2.t": "Tipos de anuncios",
"index.kpi2.v": "Terrenos • Viviendas • Proyectos",
"index.kpi3.t": "Modelo",
"index.kpi3.v": "Red de franquicias",

"index.how.h2": "Cómo funciona",
"index.how.card1.h3": "1) Explora oportunidades verificadas",
"index.how.card1.p": "Explora terrenos, viviendas y proyectos publicados por socios franquiciados autorizados en cada territorio.",
"index.how.card2.h3": "2) Te conectamos con un agente local",
"index.how.card2.p": "Tu consulta se dirige al profesional adecuado en el terreno para guiarte y protegerte.",
"index.how.card3.h3": "3) Compra con claridad y apoyo",
"index.how.card3.p": "Destacamos el estado de la debida diligencia y proporcionamos pasos transparentes para completar de forma segura.",

"index.countries.h2": "Explorar países",
"index.countries.p": "Elige un mercado para ver oportunidades verificadas y socios franquiciados locales.",
"index.countries.cta1": "Ver países",
"index.countries.cta2": "Ver anuncios",

"index.country.ghana": "Ghana",
"index.country.nigeria": "Nigeria",
"index.country.cameroon": "Camerún",
"index.country.senegal": "Senegal",
"index.country.ivory": "Costa de Marfil",
"index.country.mali": "Malí",
"index.country.zimbabwe": "Zimbabue",

"index.franchise.h2": "Conviértete en socio franquiciado",
"index.franchise.p": "Lanza tu negocio inmobiliario con formación, certificación y acceso a compradores de la diáspora a través de nuestra plataforma.",
"index.franchise.cta": "Trabaja con nosotros",

"index.footer.franchise.p": "Conviértete en socio local y publica oportunidades verificadas en tu territorio.",
"index.footer.franchise.link": "Solicitar / Consultar"

    }
  };

  function getLang() {
    const saved = (localStorage.getItem(STORAGE_KEY) || localStorage.getItem("lang") || "").toLowerCase();
    return SUPPORTED.includes(saved) ? saved : "en";
  }

  function syncSelect(lang) {
    const selA = document.querySelector(".lang-select");
    const selB = document.getElementById("langSelect");
    if (selA) selA.value = lang;
    if (selB) selB.value = lang;
  }

  function rememberOriginal(el) {
    if (!el.dataset.i18nOriginal) el.dataset.i18nOriginal = el.innerHTML;
  }

  function rememberOriginalPlaceholder(el) {
    if (!el.dataset.i18nPlaceholderOriginal) el.dataset.i18nPlaceholderOriginal = el.getAttribute("placeholder") || "";
  }

  function t(lang, key) {
    const table = (I18N && I18N[lang]) ? I18N[lang] : null;
    if (table && Object.prototype.hasOwnProperty.call(table, key)) return table[key];

    const en = I18N.en || {};
    if (Object.prototype.hasOwnProperty.call(en, key)) return en[key];

    return "";
  }

  function applyLang(lang) {
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;

      rememberOriginal(el);

      if (lang === "en") {
        el.innerHTML = el.dataset.i18nOriginal;
        return;
      }

      const translated = t(lang, key);
      if (typeof translated === "string" && translated.length) {
        el.innerHTML = translated;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (!key) return;

      rememberOriginalPlaceholder(el);

      if (lang === "en") {
        el.setAttribute("placeholder", el.dataset.i18nPlaceholderOriginal);
        return;
      }

      const translated = t(lang, key);
      if (typeof translated === "string" && translated.length) {
        el.setAttribute("placeholder", translated);
      }
    });
  }

  function setLang(lang) {
    const safe = SUPPORTED.includes((lang || "").toLowerCase()) ? lang.toLowerCase() : "en";
    localStorage.setItem(STORAGE_KEY, safe);
    localStorage.setItem("lang", safe); // keep compatibility
    syncSelect(safe);
    applyLang(safe);
  }

  window.papT = function (key) {
    try {
      const lang = getLang();
      return t(lang, key) || "";
    } catch (e) {}
    return "";
  };

  window.papSetLang = setLang;
  window.papGetLang = getLang;

  window.papReapplyI18n = function () {
    try { applyLang(getLang()); } catch (e) {}
  };

  // ✅ Backward compatibility for older pages
  window.papApplyI18n = window.papReapplyI18n;

  document.addEventListener("DOMContentLoaded", () => {
    const lang = getLang();
    syncSelect(lang);
    applyLang(lang);

    const selA = document.querySelector(".lang-select");
    if (selA) selA.addEventListener("change", (e) => setLang(e.target.value));

    const selB = document.getElementById("langSelect");
    if (selB) selB.addEventListener("change", (e) => setLang(e.target.value));
  });
})();
