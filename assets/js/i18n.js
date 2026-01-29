/* assets/js/i18n.js — SAFE + COMPLETE (EN/FR/ES) */

(function () {
  const STORAGE_KEY = "pap_lang";
  const SUPPORTED = ["en", "fr", "es"];

  const I18N = {
    en: {
      "lang_label": "Language",

      "nav.countries": "Countries",
      "nav.properties": "Properties",
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

      "index.hero.badge": "Diaspora-first • Trust-first",
"index.hero.h1": "PanAfric Properties",
"index.hero.p": `Your trusted gateway to African real estate — connecting Africans worldwide to verified
      property opportunities back home through a regulated local franchise network.`,
"index.hero.cta1": "Explore Properties",
"index.hero.cta2": "Talk to a Local Agent",

"index.kpi1.t": "Markets launching",
"index.kpi2.t": "Listing types",
"index.kpi2.v": "Land • Homes • Projects",
"index.kpi3.t": "Model",
"index.kpi3.v": "Franchise network",

"index.how.h2": "How it works",
"index.how.card1.h3": "1) Browse verified opportunities",
"index.how.card1.p": "Explore land, homes, and projects listed by licensed franchise partners in each territory.",
"index.how.card2.h3": "2) Get matched to a local agent",
"index.how.card2.p": "Your enquiry is routed to the right on-the-ground professional to guide and protect you.",
"index.how.card3.h3": "3) Buy with clarity & support",
"index.how.card3.p": "We highlight due diligence status and provide transparent steps to complete safely.",

"index.franchise.h2": "From Graduate to Real Estate Entrepreneur",
"index.franchise.p": `We empower young Africans, graduates, non-graduates, and unemployed professionals, to launch their own self-employed real estate businesses in their home cities under our franchise model.
        PanAfric Properties provides training, in-house certification, and access to diaspora buyers through our trusted marketplace platform.`,
"index.franchise.cta": "Apply to Join Our Franchise Program",

"index.countries.h2": "Start with countries",
"index.countries.p": "Choose a market to view opportunities and the local franchise partner network.",
"index.countries.cta1": "View all countries",
"index.countries.cta2": "How we build trust",

"index.country.ghana": "Accra • Kumasi • Tema",
"index.country.nigeria": "Lagos • Abuja",
"index.country.cameroon": "Douala • Yaoundé",
"index.country.senegal": "Dakar • Thiès",
"index.country.ivory": "Abidjan • Bouaké",
"index.country.mali": "Bamako",
"index.country.zimbabwe": "Harare • Bulawayo",

"index.footer.franchise.p": "Become a local partner and list verified opportunities in your territory.",
"index.footer.franchise.link": "Apply / Enquire",

      
    },

    fr: {
      "lang_label": "Langue",

      "nav.countries": "Pays",
      "nav.properties": "Biens",
      "nav.agents": "Agents",
      "nav.franchise": "Travaillez avec nous",
      "nav.training": "Formation & Certification",
      "nav.trust": "Confiance",
      "nav.login": "Connexion Partenaire",
      "nav.contact": "Contact",

      "franchise.hero.badge": "Entrepreneuriat • Franchise • Impact social",
      "franchise.hero.h1": "De diplômé à entrepreneur immobilier",
      "franchise.hero.p": `Nous accompagnons les jeunes Africains, diplômés, non-diplômés et professionnels au chômage,
      pour lancer leur propre activité immobilière indépendante dans leur ville d’origine grâce à notre modèle de franchise.
      PanAfric Properties fournit une formation, une certification interne et un accès aux acheteurs de la diaspora
      via notre plateforme de marketplace de confiance.`,
      "franchise.training.h2": "Formation & Certification",
      "franchise.training.p": `Tous les candidats franchisés approuvés suivent notre programme interne en ligne de Formation & Certification
      avant d’opérer sous la marque PanAfric Properties.`,
      "franchise.training.card1.h3": "Académie partenaire en ligne",
      "franchise.training.card1.p": `Accédez à des modules structurés couvrant les bases de l’immobilier,
          la due diligence, l’éthique et les processus de la plateforme.`,
      "franchise.training.card2.h3": "Tests courts",
      "franchise.training.card2.p": "Chaque module inclut une courte évaluation pour vérifier la compréhension.",
      "franchise.training.card3.h3": "Certification interne",
      "franchise.training.card3.p": "Recevez la Certification Partenaire PanAfric Properties à l’issue du programme.",
      "franchise.training.card4.h3": "Activation marketplace",
      "franchise.training.card4.p": "Seuls les partenaires certifiés peuvent publier des biens et gérer les acheteurs.",
      "franchise.training.cta": "Voir le programme Formation & Certification",

      "franchise.hero.cta_apply": "Candidater à notre programme de franchise",
      "franchise.hero.cta_trust": "Comment nous construisons la confiance",

      "franchise.clarification.h3": "Clarification importante",
      "franchise.clarification.p": `PanAfric Properties ne propose pas d’emploi salarié ni de postes traditionnels.
        Ce programme est une opportunité d’entrepreneuriat basée sur la franchise.
        Les candidats retenus opèrent en tant qu’entrepreneurs indépendants, à leur compte,
        sous la marque PanAfric Properties et son cadre de confiance.`,

      "franchise.who.h2": "À qui s’adresse ce programme",
      "franchise.who.card1.h3": "Diplômés & jeunes professionnels",
      "franchise.who.card1.p": `Si vous avez terminé l’université ou une formation professionnelle et recherchez une opportunité concrète,
          génératrice de revenus, dans votre ville.`,
      "franchise.who.card2.h3": "Non-diplômés ambitieux",
      "franchise.who.card2.p": `Aucun diplôme n’est obligatoire. Nous fournissons formation, structure
          et certification pour vous aider à opérer de manière professionnelle.`,
      "franchise.who.card3.h3": "Professionnels sans emploi",
      "franchise.who.card3.p": `Si vous êtes actuellement au chômage ou sous-employé et souhaitez devenir indépendant
          dans un secteur en croissance et à forte demande.`,
      "franchise.who.card4.h3": "Retours de la diaspora",
      "franchise.who.card4.p": `Si vous rentrez en Afrique et souhaitez bâtir une activité crédible et structurée
          avec une marque établie et un flux d’acheteurs diaspora.`,

      "franchise.provide.h2": "Ce que nous fournissons",
      "franchise.provide.card1.h3": "Formation & onboarding",
      "franchise.provide.card1.p": `Onboarding structuré couvrant les bases de l’immobilier, la relation client,
          les procédures de due diligence, les processus de la plateforme et l’éthique.`,
      "franchise.provide.card2.h3": "Certification interne",
      "franchise.provide.card2.p": `Tous les partenaires obtiennent une certification pour opérer sous la marque PanAfric Properties
          et son cadre de confiance.`,
      "franchise.provide.card3.h3": "Accès marque & marketplace",
      "franchise.provide.card3.p": `Utilisez notre marque, notre plateforme et l’infrastructure marketplace pour publier des opportunités vérifiées
          et toucher des acheteurs diaspora dans le monde entier.`,
      "franchise.provide.card4.h3": "Prospects acheteurs",
      "franchise.provide.card4.p": `Recevez des demandes qualifiées d’acheteurs diaspora et internationaux
          acheminées via notre marketplace.`,

      "franchise.model.h2": "Comment fonctionne le modèle de franchise",
      "franchise.model.card1.h3": "Par territoire",
      "franchise.model.card1.p": `Vous opérez dans une ville ou un territoire défini en tant que partenaire PanAfric Properties.
          Des droits exclusifs ou semi-exclusifs peuvent s’appliquer selon la taille du marché.`,
      "franchise.model.card2.h3": "Revenus à la commission",
      "franchise.model.card2.p": `Gagnez des commissions sur les transactions immobilières réussies et les recommandations clients
          réalisées via la plateforme.`,
      "franchise.model.card3.h3": "Indépendant mais structuré",
      "franchise.model.card3.p": `Vous gérez votre activité indépendante tout en respectant nos standards,
          notre cadre de confiance et nos processus de conformité.`,
      "franchise.model.card4.h3": "Parcours de croissance",
      "franchise.model.card4.p": `Les meilleurs partenaires peuvent évoluer vers des opérateurs multi-villes,
          des responsables de territoire ou des leads régionaux.`,

      "franchise.econ.h2": "Économie partenaire",
      "franchise.econ.p": `Les partenaires PanAfric Properties opèrent en tant qu’entrepreneurs indépendants. Vos revenus dépendent des
      transactions finalisées — soutenues par notre formation, notre cadre de vérification et notre pipeline d’acheteurs diaspora.`,

      "franchise.econ.card1.h3": "Investissement type (illustratif)",
      "franchise.econ.card1.p1": "Une structure de départ simple et transparente :",
      "franchise.econ.card1.p2": "• Formation & Certification (unique) : <strong>250 €</strong>",
      "franchise.econ.card1.p3": "• Activation territoire / mise en place franchise (unique) : <strong>750 €</strong>",
      "franchise.econ.card1.p4": "Investissement initial total : <strong>1 000 €</strong>",
      "franchise.econ.card1.p5": "(La tarification finale peut varier selon le territoire et la phase de déploiement.)",
      "franchise.econ.card1.p6": `Lors des phases de lancement, PanAfric Properties peut, à sa discrétion, supprimer ou réduire certains frais
  pour des profils exceptionnels ou des territoires stratégiques.`,

      "franchise.econ.card2.h3": "Comment vous gagnez",
      "franchise.econ.card2.p1": "Les partenaires perçoivent une part des commissions sur les ventes finalisées.",
      "franchise.econ.card2.p2": "Fourchette de commission typique : <strong>3 %–5 %</strong>",
      "franchise.econ.card2.p3": "Part partenaire typique : <strong>50 %–70 %</strong>",
      "franchise.econ.card2.p4": "Les structures exactes varient selon le marché, le type de bien et les accords promoteurs.",

      "franchise.econ.card3.h3": "Revenus illustratifs par transaction",
      "franchise.econ.card3.p1": "Exemples pour comprendre le modèle :",
      "franchise.econ.card3.p2": "<strong>Prudent</strong> : 30 000 € × 3 % × 50 % = <strong>450 €</strong>",
      "franchise.econ.card3.p3": "<strong>Base</strong> : 50 000 € × 4 % × 60 % = <strong>1 200 €</strong>",
      "franchise.econ.card3.p4": "<strong>Solide</strong> : 80 000 € × 5 % × 70 % = <strong>2 800 €</strong>",
      "franchise.econ.card3.p5": `De nombreux partenaires récupèrent leur investissement initial en 1 à 3 transactions,
          selon la taille des deals et les usages de commission locaux.`,

      "franchise.econ.note.h3": "Note importante (transparence)",
      "franchise.econ.note.p": `Les chiffres ci-dessus sont des exemples illustratifs pour expliquer le modèle. Les revenus ne sont pas garantis et
        dépendent de votre activité, des conditions de marché, des prix et de la finalisation des transactions.`,

      "franchise.econ.cta_team": "Parler à l’équipe",
      "franchise.econ.cta_apply": "Candidater à notre programme partenaire",
      "franchise.econ.cta_training": "Voir la Formation & Certification",

      "franchise.compliance.h2": "Confiance, éthique & conformité",
      "franchise.compliance.card1.h3": "Standards de vérification",
      "franchise.compliance.card1.p": `Toutes les annonces doivent passer des vérifications juridiques, de propriété et de documents
          avant publication sur la plateforme.`,
      "franchise.compliance.card2.h3": "Code de conduite",
      "franchise.compliance.card2.p": `Tous les partenaires respectent un code d’éthique professionnel couvrant
          la transparence, la protection client et l’équité.`,
      "franchise.compliance.card3.h3": "Suivi continu",
      "franchise.compliance.card3.p": `Nous suivons la performance et la conformité des partenaires afin de maintenir la confiance de la marketplace
          et de la diaspora.`,
      "franchise.compliance.card4.h3": "Gouvernance de la plateforme",
      "franchise.compliance.card4.p": `Les partenaires opèrent dans notre cadre de gouvernance marketplace
          pour protéger acheteurs, vendeurs et la marque PanAfric Properties.`,

      "franchise.apply.h2": "Candidater à notre programme de franchise",
      "franchise.apply.p": `Si vous êtes ambitieux, motivé et déterminé à bâtir une activité immobilière crédible
        dans votre ville, nous vous invitons à remplir le formulaire ci-dessous pour devenir partenaire franchisé PanAfric Properties.
        Aucune expérience immobilière préalable n’est requise.`,

      "franchise.form.full_name": "Nom complet",
      "franchise.form.email": "Adresse e-mail",
      "franchise.form.phone": "Téléphone / WhatsApp",
      "franchise.form.location": "Ville & pays",
      "franchise.form.education": "Niveau d’études",
      "franchise.form.employment": "Situation professionnelle",
      "franchise.form.select": "Sélectionner",
      "franchise.form.education.secondary": "Secondaire",
      "franchise.form.education.diploma": "Diplôme",
      "franchise.form.education.university": "Diplôme universitaire",
      "franchise.form.education.other": "Autre",
      "franchise.form.employment.unemployed": "Sans emploi",
      "franchise.form.employment.self": "Indépendant",
      "franchise.form.employment.employed": "Salarié",
      "franchise.form.employment.student": "Étudiant",
      "franchise.form.why": "Pourquoi souhaitez-vous rejoindre PanAfric Properties ?",
      "franchise.form.submit": "Envoyer la candidature",

      "footer.tagline": "Un accès de confiance à des opportunités immobilières africaines vérifiées — conçu pour la diaspora.",
      "footer.platform.h3": "Plateforme",
      "footer.platform.countries": "Pays",
      "footer.platform.properties": "Biens",
      "footer.platform.trust": "Confiance & vérification",
      "footer.platform.login": "Connexion Partenaire",
      "footer.work.h3": "Work With Us",
      "footer.work.p": `Lancez votre activité immobilière avec formation,
          certification et accès aux acheteurs diaspora.`,
      "footer.work.apply": "Candidater",
      "footer.contact.h3": "Contact",
      "footer.contact.p": "Pour les acheteurs, promoteurs et partenaires.",
      "footer.contact.link": "Nous écrire",
      "footer.copyright": "© 2026 PanAfric Properties. Tous droits réservés.",

    "index.hero.badge": "Diaspora d’abord • Confiance d’abord",
"index.hero.h1": "PanAfric Properties",
"index.hero.p": `Votre passerelle de confiance vers l’immobilier africain — reliant les Africains du monde entier à des
      opportunités immobilières vérifiées au pays via un réseau local de franchises régulé.`,
"index.hero.cta1": "Explorer les biens",
"index.hero.cta2": "Parler à un agent local",

"index.kpi1.t": "Marchés en lancement",
"index.kpi2.t": "Types d’annonces",
"index.kpi2.v": "Terrains • Maisons • Projets",
"index.kpi3.t": "Modèle",
"index.kpi3.v": "Réseau de franchises",

"index.how.h2": "Comment ça marche",
"index.how.card1.h3": "1) Parcourir des opportunités vérifiées",
"index.how.card1.p": "Explorez des terrains, maisons et projets publiés par des partenaires franchisés agréés dans chaque territoire.",
"index.how.card2.h3": "2) Être mis en relation avec un agent local",
"index.how.card2.p": "Votre demande est transmise au bon professionnel sur le terrain pour vous guider et vous protéger.",
"index.how.card3.h3": "3) Acheter avec clarté et accompagnement",
"index.how.card3.p": "Nous indiquons l’état de la due diligence et des étapes transparentes pour finaliser en toute sécurité.",

"index.franchise.h2": "De diplômé à entrepreneur immobilier",
"index.franchise.p": `Nous accompagnons les jeunes Africains, diplômés, non-diplômés et professionnels au chômage, pour lancer leur propre activité immobilière indépendante dans leur ville grâce à notre modèle de franchise.
        PanAfric Properties fournit une formation, une certification interne et un accès aux acheteurs de la diaspora via notre marketplace de confiance.`,
"index.franchise.cta": "Candidater à notre programme de franchise",

"index.countries.h2": "Commencez par les pays",
"index.countries.p": "Choisissez un marché pour voir les opportunités et le réseau local de partenaires franchisés.",
"index.countries.cta1": "Voir tous les pays",
"index.countries.cta2": "Comment nous construisons la confiance",

"index.country.ghana": "Accra • Kumasi • Tema",
"index.country.nigeria": "Lagos • Abuja",
"index.country.cameroon": "Douala • Yaoundé",
"index.country.senegal": "Dakar • Thiès",
"index.country.ivory": "Abidjan • Bouaké",
"index.country.mali": "Bamako",
"index.country.zimbabwe": "Harare • Bulawayo",

"index.footer.franchise.p": "Devenez partenaire local et publiez des opportunités vérifiées dans votre territoire.",
"index.footer.franchise.link": "Candidater / Demander",


    },

    es: {
      "lang_label": "Idioma",

      "nav.countries": "Países",
      "nav.properties": "Propiedades",
      "nav.agents": "Agentes",
      "nav.franchise": "Trabaja con nosotros",
      "nav.training": "Formación y certificación",
      "nav.trust": "Confianza",
      "nav.login": "Acceso de socios",
      "nav.contact": "Contacto",

      "franchise.hero.badge": "Emprendimiento • Franquicia • Impacto social",
      "franchise.hero.h1": "De graduado a emprendedor inmobiliario",
      "franchise.hero.p": `Empoderamos a jóvenes africanos, graduados, no graduados y profesionales desempleados
      para lanzar su propio negocio inmobiliario como autónomos en sus ciudades, bajo nuestro modelo de franquicia.
      PanAfric Properties ofrece formación, certificación interna y acceso a compradores de la diáspora
      a través de nuestra plataforma de marketplace verificada.`,

      "franchise.training.h2": "Formación y certificación",
      "franchise.training.p": `Todos los solicitantes aprobados completan nuestro programa interno online de Formación y Certificación
      antes de operar bajo la marca PanAfric Properties.`,
      "franchise.training.card1.h3": "Academia de socios online",
      "franchise.training.card1.p": `Accede a módulos estructurados que cubren fundamentos inmobiliarios,
          due diligence, ética y procesos de la plataforma.`,
      "franchise.training.card2.h3": "Pruebas cortas",
      "franchise.training.card2.p": "Cada módulo incluye una breve evaluación para verificar la comprensión.",
      "franchise.training.card3.h3": "Certificación interna",
      "franchise.training.card3.p": "Obtén la certificación de socio de PanAfric Properties al finalizar.",
      "franchise.training.card4.h3": "Activación del marketplace",
      "franchise.training.card4.p": "Solo los socios certificados pueden publicar propiedades y gestionar compradores.",
      "franchise.training.cta": "Ver el programa de formación y certificación",

      "franchise.hero.cta_apply": "Solicitar el programa de franquicia",
      "franchise.hero.cta_trust": "Cómo construimos confianza",

      "franchise.clarification.h3": "Aclaración importante",
      "franchise.clarification.p": `PanAfric Properties no ofrece empleo asalariado ni puestos tradicionales.
        Este programa es una oportunidad de emprendimiento basada en franquicia.
        Los candidatos seleccionados operan como autónomos y propietarios de su negocio
        bajo la marca PanAfric Properties y su marco de confianza.`,

      "franchise.who.h2": "Para quién es",
      "franchise.who.card1.h3": "Graduados y jóvenes profesionales",
      "franchise.who.card1.p": `Si has completado estudios universitarios o formación profesional y buscas una oportunidad práctica
          para generar ingresos en tu ciudad.`,
      "franchise.who.card2.h3": "No graduados con ambición",
      "franchise.who.card2.p": `No necesitas un título formal para triunfar. Ofrecemos formación, estructura
          y certificación para operar con profesionalidad.`,
      "franchise.who.card3.h3": "Profesionales desempleados",
      "franchise.who.card3.p": `Si estás desempleado o subempleado y quieres convertirte en autónomo
          en un sector en crecimiento con demanda real.`,
      "franchise.who.card4.h3": "Regreso de la diáspora",
      "franchise.who.card4.p": `Si regresas a África y quieres construir un negocio creíble y estructurado
          con una marca establecida y un flujo de compradores de la diáspora.`,

      "franchise.provide.h2": "Qué ofrecemos",
      "franchise.provide.card1.h3": "Formación e incorporación",
      "franchise.provide.card1.p": `Incorporación estructurada sobre fundamentos inmobiliarios, atención al cliente,
          procedimientos de due diligence, procesos de plataforma y ética.`,
      "franchise.provide.card2.h3": "Certificación interna",
      "franchise.provide.card2.p": `Todos los socios completan la certificación para operar bajo la marca PanAfric Properties
          y su marco de confianza.`,
      "franchise.provide.card3.h3": "Acceso a marca y marketplace",
      "franchise.provide.card3.p": `Usa nuestra marca, plataforma e infraestructura para publicar oportunidades verificadas
          y llegar a compradores de la diáspora en todo el mundo.`,
      "franchise.provide.card4.h3": "Leads de compradores",
      "franchise.provide.card4.p": `Recibe consultas cualificadas de compradores de la diáspora e internacionales
          canalizadas a través del marketplace.`,

      "franchise.model.h2": "Cómo funciona el modelo de franquicia",
      "franchise.model.card1.h3": "Por territorio",
      "franchise.model.card1.p": `Operas en una ciudad o territorio definido como socio de PanAfric Properties.
          Pueden aplicarse derechos exclusivos o semi-exclusivos según el tamaño del mercado.`,
      "franchise.model.card2.h3": "Ingresos por comisión",
      "franchise.model.card2.p": `Gana comisiones por transacciones exitosas y referidos de clientes
          completados a través de la plataforma.`,
      "franchise.model.card3.h3": "Independiente pero estructurado",
      "franchise.model.card3.p": `Gestionas tu propio negocio autónomo siguiendo nuestros estándares,
          marco de confianza y procesos de cumplimiento.`,
      "franchise.model.card4.h3": "Ruta de crecimiento",
      "franchise.model.card4.p": `Los socios con mejor rendimiento pueden crecer a operadores multi-ciudad,
          gestores de territorio o líderes regionales.`,

      "franchise.econ.h2": "Economía del socio",
      "franchise.econ.p": `Los socios de PanAfric Properties operan como autónomos. Tus ingresos dependen de las
      transacciones completadas — con apoyo de nuestra formación, marco de verificación y pipeline de compradores de la diáspora.`,

      "franchise.econ.card1.h3": "Inversión típica (ilustrativa)",
      "franchise.econ.card1.p1": "Una estructura inicial simple y transparente:",
      "franchise.econ.card1.p2": "• Formación y certificación (pago único): <strong>€250</strong>",
      "franchise.econ.card1.p3": "• Activación de territorio / puesta en marcha (pago único): <strong>€750</strong>",
      "franchise.econ.card1.p4": "Inversión inicial total: <strong>€1,000</strong>",
      "franchise.econ.card1.p5": "(El precio final puede variar según territorio y fase de lanzamiento.)",
      "franchise.econ.card1.p6": `En fases iniciales, PanAfric Properties puede, a su discreción, eximir o reducir ciertos cargos
  para candidatos destacados o territorios estratégicos.`,

      "franchise.econ.card2.h3": "Cómo ganas",
      "franchise.econ.card2.p1": "Los socios reciben una parte de las comisiones por operaciones completadas.",
      "franchise.econ.card2.p2": "Rango típico de comisión: <strong>3%–5%</strong>",
      "franchise.econ.card2.p3": "Parte típica del socio: <strong>50%–70%</strong>",
      "franchise.econ.card2.p4": "Las estructuras exactas varían por mercado, tipo de propiedad y acuerdos con promotores.",

      "franchise.econ.card3.h3": "Ingresos ilustrativos por operación",
      "franchise.econ.card3.p1": "Ejemplos para entender el modelo:",
      "franchise.econ.card3.p2": "<strong>Conservador</strong>: €30,000 × 3% × 50% = <strong>€450</strong>",
      "franchise.econ.card3.p3": "<strong>Base</strong>: €50,000 × 4% × 60% = <strong>€1,200</strong>",
      "franchise.econ.card3.p4": "<strong>Fuerte</strong>: €80,000 × 5% × 70% = <strong>€2,800</strong>",
      "franchise.econ.card3.p5": `Muchos socios recuperan la inversión inicial en 1–3 transacciones,
          según el tamaño del acuerdo y las comisiones locales.`,

      "franchise.econ.note.h3": "Nota importante (transparencia)",
      "franchise.econ.note.p": `Las cifras anteriores son ejemplos ilustrativos para explicar el modelo. Los ingresos no están garantizados y
        dependen de tu actividad, condiciones del mercado, precios y cierre exitoso de la transacción.`,

      "franchise.econ.cta_team": "Hablar con el equipo",
      "franchise.econ.cta_apply": "Solicitar el programa de socios",
      "franchise.econ.cta_training": "Ver formación y certificación",

      "franchise.compliance.h2": "Confianza, ética y cumplimiento",
      "franchise.compliance.card1.h3": "Estándares de verificación",
      "franchise.compliance.card1.p": `Todas las publicaciones deben pasar verificaciones básicas legales, de propiedad y documentación
          antes de publicarse en la plataforma.`,
      "franchise.compliance.card2.h3": "Código de conducta",
      "franchise.compliance.card2.p": `Todos los socios operan bajo un código de ética profesional que cubre
          transparencia, protección del cliente y trato justo.`,
      "franchise.compliance.card3.h3": "Monitoreo continuo",
      "franchise.compliance.card3.p": `Monitoreamos el rendimiento y cumplimiento para mantener la confianza de la marketplace
          y de la diáspora.`,
      "franchise.compliance.card4.h3": "Gobernanza de la plataforma",
      "franchise.compliance.card4.p": `Los socios operan dentro del marco de gobernanza del marketplace
          para proteger compradores, vendedores y la marca PanAfric Properties.`,

      "franchise.apply.h2": "Solicitar el programa de franquicia",
      "franchise.apply.p": `Si eres ambicioso, estás motivado y comprometido con construir un negocio inmobiliario creíble
        en tu ciudad, te invitamos a completar el formulario para convertirte en socio franquiciado de PanAfric Properties.
        No se requiere experiencia previa en el sector.`,

      "franchise.form.full_name": "Nombre completo",
      "franchise.form.email": "Correo electrónico",
      "franchise.form.phone": "Teléfono / WhatsApp",
      "franchise.form.location": "Ciudad y país",
      "franchise.form.education": "Nivel educativo",
      "franchise.form.employment": "Situación laboral",
      "franchise.form.select": "Seleccionar",
      "franchise.form.education.secondary": "Educación secundaria",
      "franchise.form.education.diploma": "Diploma",
      "franchise.form.education.university": "Título universitario",
      "franchise.form.education.other": "Otro",
      "franchise.form.employment.unemployed": "Desempleado",
      "franchise.form.employment.self": "Autónomo",
      "franchise.form.employment.employed": "Empleado",
      "franchise.form.employment.student": "Estudiante",
      "franchise.form.why": "¿Por qué quieres unirte a PanAfric Properties?",
      "franchise.form.submit": "Enviar solicitud",

      "footer.tagline": "Acceso confiable a oportunidades inmobiliarias africanas verificadas — construido para la diáspora.",
      "footer.platform.h3": "Plataforma",
      "footer.platform.countries": "Países",
      "footer.platform.properties": "Propiedades",
      "footer.platform.trust": "Confianza y verificación",
      "footer.platform.login": "Acceso de socios",
      "footer.work.h3": "Trabaja con nosotros",
      "footer.work.p": `Lanza tu propio negocio inmobiliario con formación,
          certificación y acceso a compradores de la diáspora.`,
      "footer.work.apply": "Solicitar",
      "footer.contact.h3": "Contacto",
      "footer.contact.p": "Para compradores, promotores y socios.",
      "footer.contact.link": "Escríbenos",
      "footer.copyright": "© 2026 PanAfric Properties. Todos los derechos reservados."

      "index.hero.badge": "Diáspora primero • Confianza primero",
"index.hero.h1": "PanAfric Properties",
"index.hero.p": `Tu puerta de entrada de confianza al inmobiliario africano — conectando a africanos de todo el mundo con
      oportunidades verificadas en su país mediante una red local de franquicias regulada.`,
"index.hero.cta1": "Explorar propiedades",
"index.hero.cta2": "Hablar con un agente local",

"index.kpi1.t": "Mercados en lanzamiento",
"index.kpi2.t": "Tipos de anuncios",
"index.kpi2.v": "Terrenos • Viviendas • Proyectos",
"index.kpi3.t": "Modelo",
"index.kpi3.v": "Red de franquicias",

"index.how.h2": "Cómo funciona",
"index.how.card1.h3": "1) Explora oportunidades verificadas",
"index.how.card1.p": "Explora terrenos, viviendas y proyectos listados por socios franquiciados autorizados en cada territorio.",
"index.how.card2.h3": "2) Te conectamos con un agente local",
"index.how.card2.p": "Tu consulta se canaliza al profesional adecuado sobre el terreno para guiarte y protegerte.",
"index.how.card3.h3": "3) Compra con claridad y apoyo",
"index.how.card3.p": "Mostramos el estado de la due diligence y pasos transparentes para completar con seguridad.",

"index.franchise.h2": "De graduado a emprendedor inmobiliario",
"index.franchise.p": `Empoderamos a jóvenes africanos, graduados, no graduados y profesionales desempleados para lanzar su propio negocio inmobiliario como autónomos en sus ciudades bajo nuestro modelo de franquicia.
        PanAfric Properties ofrece formación, certificación interna y acceso a compradores de la diáspora mediante nuestro marketplace de confianza.`,
"index.franchise.cta": "Solicitar el programa de franquicia",

"index.countries.h2": "Empieza por países",
"index.countries.p": "Elige un mercado para ver oportunidades y la red local de socios franquiciados.",
"index.countries.cta1": "Ver todos los países",
"index.countries.cta2": "Cómo construimos confianza",

"index.country.ghana": "Accra • Kumasi • Tema",
"index.country.nigeria": "Lagos • Abuja",
"index.country.cameroon": "Douala • Yaundé",
"index.country.senegal": "Dakar • Thiès",
"index.country.ivory": "Abiyán • Bouaké",
"index.country.mali": "Bamako",
"index.country.zimbabwe": "Harare • Bulawayo",

"index.footer.franchise.p": "Conviértete en socio local y publica oportunidades verificadas en tu territorio.",
"index.footer.franchise.link": "Solicitar / Consultar",

    }
  };

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return (saved && SUPPORTED.includes(saved)) ? saved : "en";
  }

  function syncSelect(lang) {
    const sel = document.querySelector(".lang-select");
    if (sel) sel.value = lang;
  }

  function rememberOriginal(el) {
    if (!el.dataset.i18nOriginal) el.dataset.i18nOriginal = el.innerHTML;
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

      const translated = (I18N[lang] || {})[key];
      if (typeof translated === "string" && translated.length) {
        el.innerHTML = translated;
      }
      // if missing key -> DO NOTHING (keeps English)
    });
  }

  function setLang(lang) {
    const safe = SUPPORTED.includes(lang) ? lang : "en";
    localStorage.setItem(STORAGE_KEY, safe);
    syncSelect(safe);
    applyLang(safe);
  }

  window.papSetLang = setLang;
  window.papGetLang = getLang;

  document.addEventListener("DOMContentLoaded", () => {
    const lang = getLang();
    syncSelect(lang);
    applyLang(lang);

    const sel = document.querySelector(".lang-select");
    if (sel) sel.addEventListener("change", (e) => setLang(e.target.value));
  });
})();
