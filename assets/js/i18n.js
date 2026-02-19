/* assets/js/i18n.js — MERGED + SAFE + COMPLETE (EN/FR/ES)
   Base content: your “two days ago” file (more keys/pages)
   Engine + compatibility: yesterday’s SAFE version (fallbacks, placeholders, 2 selectors, papReapplyI18n, etc.)
*/

(function () {
  const STORAGE_KEY = "pap_lang";
  const SUPPORTED = ["en", "fr", "es"];

  const I18N = {
    // =========================
    // ENGLISH
    // =========================
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

      // ===== FRANCHISE (work with us) =====
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

      // ===== FOOTER =====
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

      // ===== INDEX =====
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

      // ===== TRAINING =====
      "training.top.approved": `Already approved? <a href="login.html"><strong>Partner Login</strong></a>`,
      "training.top.login_strong": "Partner Login",

      "training.hero.badge": "Partner Academy • Certification • Trust",
      "training.hero.h1": "PanAfric Properties Training & Certification",
      "training.hero.p": `All approved franchise applicants complete our internal online training and certification program
      before operating under the PanAfric Properties brand.`,
      "training.hero.cta_apply": "Apply to Join Our Franchise Program",
      "training.hero.cta_login": "Partner Login",

      "training.standards.h2": "Professional Standards. Trust. Compliance.",
      "training.standards.p1": `PanAfric Properties operates a trusted real estate marketplace serving diaspora and international buyers.
      To protect clients, maintain platform credibility, and ensure professional conduct, all franchise partners
      must complete our internal training and certification program before onboarding.`,
      "training.standards.p2": "Our Training & Certification Program ensures that every partner:",

      "training.standards.card1.h3": "Understands Real Estate Fundamentals",
      "training.standards.card1.p": "Learn the basics of property markets, valuation, and transaction processes.",
      "training.standards.card2.h3": "Follows Due Diligence Standards",
      "training.standards.card2.p": "Understand verification procedures, fraud prevention, and documentation checks.",
      "training.standards.card3.h3": "Operates Ethically",
      "training.standards.card3.p": "Adhere to transparency, professionalism, and client protection principles.",
      "training.standards.card4.h3": "Complies With Platform Governance",
      "training.standards.card4.p": "Follow reporting, compliance, and marketplace rules.",

      "training.access.h2": "Who Can Access the Training Program",
      "training.access.p": `The PanAfric Properties Training & Certification Program is available exclusively to approved franchise applicants.
      You do not need prior real estate experience to qualify.`,
      "training.access.card1.h3": "Graduates & Young Professionals",
      "training.access.card1.p": "Seeking a structured, income-generating business opportunity in your home city.",
      "training.access.card2.h3": "Non-Graduates With Ambition",
      "training.access.card2.p": "We provide training, structure, and certification to help you operate professionally.",
      "training.access.card3.h3": "Unemployed Professionals",
      "training.access.card3.p": "Become self-employed in a growing sector with real demand.",
      "training.access.card4.h3": "Diaspora Returnees",
      "training.access.card4.p": "Build a credible business using an established brand and buyer pipeline.",

      "training.academy.h2": "How the Partner Academy Works",
      "training.academy.step1.h3": "1) Apply & Get Accepted",
      "training.academy.step1.p": "Submit your franchise application. Approved candidates receive access to the Training Platform.",
      "training.academy.step2.h3": "2) Log In to the Training Platform",
      "training.academy.step2.p": "Access our internal online learning system using your personal login credentials.",
      "training.academy.step3.h3": "3) Study the Training Modules",
      "training.academy.step3.p": "Read structured modules covering real estate basics, due diligence, ethics, and platform processes.",
      "training.academy.step4.h3": "4) Complete Short Tests",
      "training.academy.step4.p": "Each module includes a short assessment to verify understanding.",
      "training.academy.step5.h3": "5) Earn Your Certification",
      "training.academy.step5.p": "Once all modules and tests are passed, you receive Partner Certification.",

      "training.curriculum.h2": "Training Curriculum",
      "training.curriculum.p": "This is a public overview. Full modules and tests are accessible only inside the Partner Academy.",
      "training.curriculum.m1.h3": "Module 1 — Introduction to PanAfric Properties",
      "training.curriculum.m1.p": "Platform vision, franchise model, partner responsibilities, governance framework.",
      "training.curriculum.m2.h3": "Module 2 — Real Estate Basics",
      "training.curriculum.m2.p": "Property types, valuation fundamentals, local market dynamics.",
      "training.curriculum.m3.h3": "Module 3 — Due Diligence & Verification",
      "training.curriculum.m3.p": "Ownership checks, title documentation, fraud prevention, red flags.",
      "training.curriculum.m4.h3": "Module 4 — Client Handling & Ethics",
      "training.curriculum.m4.p": "Professional conduct, transparency, communication, conflicts of interest.",
      "training.curriculum.m5.h3": "Module 5 — Diaspora Buyer Expectations",
      "training.curriculum.m5.p": "Investor psychology, trust concerns, remote transaction handling.",
      "training.curriculum.m6.h3": "Module 6 — Listing & Platform Processes",
      "training.curriculum.m6.p": "Property onboarding, documentation standards, marketplace rules.",
      "training.curriculum.m7.h3": "Module 7 — Legal Literacy (Basics)",
      "training.curriculum.m7.p": "Contracts, agency relationships, escrow concepts.",
      "training.curriculum.m8.h3": "Module 8 — Closing Transactions",
      "training.curriculum.m8.p": "Buyer onboarding, milestones, payment principles.",
      "training.curriculum.m9.h3": "Module 9 — Compliance & Reporting",
      "training.curriculum.m9.p": "Reporting obligations, monitoring, dispute handling.",

      "training.cert.h2": "Partner Certification",
      "training.cert.p": `PanAfric Properties Partner Certification confirms that you have successfully completed
      the Training & Certification Program and met our operational standards.`,
      "training.cert.card1.h3": "Brand Authorization",
      "training.cert.card1.p": "Operate under the PanAfric Properties brand.",
      "training.cert.card2.h3": "Marketplace Access",
      "training.cert.card2.p": "List verified opportunities and receive diaspora buyer enquiries.",
      "training.cert.card3.h3": "Official Recognition",
      "training.cert.card3.p": "Certified franchise partner status.",
      "training.cert.card4.h3": "Ongoing Compliance",
      "training.cert.card4.p": "Certification maintained through ethical conduct and performance standards.",

      "training.eligibility.h2": "Access & Eligibility",
      "training.eligibility.p": `The Training & Certification Program is not publicly accessible.
      Access is granted only to approved franchise applicants.`,
      "training.eligibility.step1.h3": "Step 1",
      "training.eligibility.step1.p": "Apply to join the Franchise Program.",
      "training.eligibility.step2.h3": "Step 2",
      "training.eligibility.step2.p": "Receive application review outcome.",
      "training.eligibility.step3.h3": "Step 3",
      "training.eligibility.step3.p": "Get login access to the Training Platform.",
      "training.eligibility.step4.h3": "Step 4",
      "training.eligibility.step4.p": "Complete modules and tests.",
      "training.eligibility.step5.h3": "Step 5",
      "training.eligibility.step5.p": "Earn certification.",

      "training.clarification.h3": "Important Clarification",
      "training.clarification.p": `PanAfric Properties is not offering salaried employment or traditional jobs.
      This program is a franchise-based entrepreneurship opportunity.
      Successful applicants operate as independent, self-employed business owners
      under the PanAfric Properties brand and trust framework.`,

      "training.journey.h2": "Start Your Training Journey",
      "training.journey.p": `Apply to become a PanAfric Properties franchise partner and begin your
      training and certification journey.`,
      "training.journey.cta": "Apply to Join Our Franchise Program",

      // ===== TRUST (newer set from your 2-days file) =====
      "trust.title": "Trust & Verification",
      "trust.intro": "PanAfric Properties operates via a regulated local franchise network to improve transparency, reduce fraud risk, and protect diaspora buyers.",

      "trust.c1.t": "Licensed local franchise partners",
      "trust.c1.p": "Listings are submitted by verified partners operating under local laws and industry requirements.",
      "trust.c2.t": "Title & ownership checks",
      "trust.c2.p": "Where available, title documentation is reviewed and shown as Verified / In review / Not verified.",
      "trust.c3.t": "Developer screening",
      "trust.c3.p": "Developers and sellers undergo basic checks and reference validation before publication.",
      "trust.c4.t": "Due diligence status",
      "trust.c4.p": "Each opportunity clearly displays its due diligence status and recommended next steps.",
      "trust.c5.t": "Buyer support",
      "trust.c5.p": "We guide buyers through the process and route enquiries to the right in-country partner.",
      "trust.c6.t": "Clear process, clear pricing",
      "trust.c6.p": "Transparent communication about fees, steps and timelines — helping diaspora buyers plan confidently.",

      "trust.cta.agent": "Talk to a local agent",
      "trust.cta.browse": "Browse properties",

      "trust.promo.t": "Build a real estate business with us",
      "trust.promo.p": "PanAfric Properties empowers young Africans — graduates, non-graduates and unemployed professionals — to launch self-employed real estate businesses under our franchise model. Training, in-house certification and diaspora buyer access are provided.",
      "trust.promo.cta": "Apply to join our franchise program",

      // ===== CONTACT =====
      "contact.title": "Contact Us",
      "contact.intro": "Property enquiries, franchise applications, developer partnerships — send us a message.",

      "contact.form.title": "Enquiry Form",
      "contact.form.name.label": "Your name",
      "contact.form.name.ph": "Full name",
      "contact.form.email.label": "Email",
      "contact.form.email.ph": "name@email.com",
      "contact.form.role.label": "I am a…",
      "contact.form.role.opt1": "Diaspora buyer",
      "contact.form.role.opt2": "Local buyer",
      "contact.form.role.opt3": "Developer / seller",
      "contact.form.role.opt4": "Agent / franchise candidate",
      "contact.form.role.opt5": "Partner / investor",
      "contact.form.country.label": "Country of interest",
      "contact.form.msg.label": "Your message",
      "contact.form.msg.ph": "Tell us what you want to buy/build or how you want to partner.",
      "contact.form.submit": "Send message",

      "contact.next.title": "What happens next?",
      "contact.next.s1": "<b>1)</b> We review your enquiry.",
      "contact.next.s2": "<b>2)</b> We match you with the right local partner.",
      "contact.next.s3": "<b>3)</b> You receive a clear action plan and next steps.",

      "contact.links.title": "Quick links",
      "contact.links.p1": "Browse properties",
      "contact.links.p2": "Trust & verification",
      "contact.links.p3": "Franchise partners",

      // ===== AGENTS =====
      "agents.title": "Local Franchise Partners",
      "agents.intro": "Each territory is represented by a PanAfric Properties Franchise Partner — trained, certified, and governed under our trust and verification framework. Licensed real estate professionals are welcome and may be fast-tracked, but licensing is not required to apply.",

      "agents.card1.title": "Accra West — Ghana",
      "agents.card1.coverage": "<b>Coverage:</b> East Legon, Airport, Cantonments",
      "agents.card1.status": "<b>Status:</b> Franchise Partner (Certified)",

      "agents.card2.title": "Lagos — Nigeria",
      "agents.card2.coverage": "<b>Coverage:</b> Lekki, Victoria Island",
      "agents.card2.status": "<b>Status:</b> Franchise Partner (Certified)",

      "agents.card3.title": "Douala — Cameroon",
      "agents.card3.coverage": "<b>Coverage:</b> Bonapriso, Akwa",
      "agents.card3.status": "<b>Status:</b> Franchise Partner (Certified)",

      "agents.card4.title": "Dakar — Senegal",
      "agents.card4.coverage": "<b>Coverage:</b> Almadies, Plateau",
      "agents.card4.status": "<b>Status:</b> Franchise Partner (Certified)",

      "agents.card5.title": "Bamako — Mali",
      "agents.card5.coverage": "<b>Coverage:</b> ACI 2000, Hippodrome",
      "agents.card5.status": "<b>Status:</b> Franchise Partner (Certified)",

      "agents.card6.title": "Harare — Zimbabwe",
      "agents.card6.coverage": "<b>Coverage:</b> Borrowdale, Avondale",
      "agents.card6.status": "<b>Status:</b> Franchise Partner (Certified)",

      "agents.card.cta": "Contact this partner",

      "agents.join.title": "Become a Franchise Partner",
      "agents.join.text": "You don’t need prior real estate experience — we provide training, in-house certification, and a trusted framework. Licensed agents and property professionals are also welcome to apply and may be fast-tracked depending on the territory.",
      "agents.join.cta.apply": "Apply to Join Our Partner Program",
      "agents.join.cta.training": "View Training",

      // ===== COUNTRIES =====
      "countries.title": "Explore Countries",
      "countries.intro": "Choose a market to view verified opportunities and local franchise partners.",

      "countries.ghana.cities": "Accra • Kumasi • Tema",
      "countries.nigeria.cities": "Lagos • Abuja",
      "countries.cameroon.cities": "Douala • Yaoundé",
      "countries.senegal.cities": "Dakar • Thiès",
      "countries.ivorycoast.cities": "Abidjan • Bouaké",
      "countries.mali.cities": "Bamako",
      "countries.zimbabwe.cities": "Harare • Bulawayo",

      "countries.cta.browse": "Browse listings",
      "countries.cta.franchise": "Franchise enquiry",

      // ===== PROPERTIES (MVP static text from 2-days file) =====
      "properties.title": "Property Listings",
      "properties.intro": "MVP listings — static for now. Next step: real filters + country pages.",

      "properties.filter.country": "Country",
      "properties.filter.type": "Type",
      "properties.filter.budget": "Budget",
      "properties.filter.dd": "Due diligence",
      "properties.filter.all": "All",

      "properties.type.land": "Land",
      "properties.type.home": "Home",
      "properties.type.dev": "Development / Off-plan",

      "properties.budget.any": "Any",
      "properties.budget.under50": "Under €50k",
      "properties.budget.50to150": "€50k – €150k",
      "properties.budget.150plus": "€150k+",

      "properties.dd.any": "Any",
      "properties.dd.verified": "Verified",
      "properties.dd.review": "In Review",

      "properties.cta.enquire": "Enquire",
      "properties.cta.how": "How verification works",

      "properties.list1.title": "Modern Villa — Accra (Ghana)",
      "properties.list1.desc": "3-bedroom villa • East Legon • Ready to move in",
      "properties.list1.meta": "<b>Status:</b> Verified • <b>Agent:</b> Accra West Partner",

      "properties.list2.title": "Residential Land — Douala (Cameroon)",
      "properties.list2.desc": "500 sqm plot • Great access • Suitable for build",
      "properties.list2.meta": "<b>Status:</b> In Review • <b>Agent:</b> Douala Partner",

      "properties.list3.title": "Off-plan Apartments — Lekki (Nigeria)",
      "properties.list3.desc": "2-bedroom apartments • Payment plan available",
      "properties.list3.meta": "<b>Status:</b> Verified • <b>Agent:</b> Lagos Partner",

      "properties.list4.title": "Residential Plot — Bamako (Mali)",
      "properties.list4.desc": "Titled land • Residential zone • Good access",
      "properties.list4.meta": "<b>Status:</b> In Review • <b>Agent:</b> Bamako Partner",

      "properties.list5.title": "Family Home — Harare (Zimbabwe)",
      "properties.list5.desc": "3-bedroom home • Safe neighbourhood",
      "properties.list5.meta": "<b>Status:</b> Verified • <b>Agent:</b> Harare Partner",

      "properties.list6.title": "City Apartment — Dakar (Senegal)",
      "properties.list6.desc": "2-bedroom apartment • High rental demand",
      "properties.list6.meta": "<b>Status:</b> In Review • <b>Agent:</b> Dakar Partner",

      "properties.card.cta": "Request details",

      "properties.promo.title": "Want to Build a Real Estate Business in Your City?",
      "properties.promo.text": "Join PanAfric Properties as a franchise partner. We train and certify local partners to operate real estate brokerage activities and connect them to diaspora buyers worldwide.",
      "properties.promo.cta": "Work With Us",

      // ===== NEWER DYNAMIC LISTINGS (yesterday SAFE file additions) =====
      "properties.pageTitle": "Properties — PanAfric Properties",
      "properties.h1": "Approved Property Listings",
      "properties.intro2": "Browse approved listings. Each property is reviewed before publication.",
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
      "property.details.country": "Country",

      // ===== LOGIN =====
      "login.title": "Partner Login",
      "login.intro": "Access the PanAfric Properties Training Platform. Login is available to approved partners only.",
      "login.cta.login": "Log in",
      "login.cta.back": "Back",
      "login.note.q": "Not approved yet?",
      "login.note.link": "Apply to join our Partner Program",

      // ===== FRANCHISE APPLY PAGE =====
      "apply.badge": "Franchise Application",
      "apply.title": "Apply to Join Our Franchise Program",
      "apply.intro": "This program is for ambitious individuals who want to build a self-employed real estate business in their home city under the PanAfric Properties franchise model. No prior real estate experience is required.",
      "apply.form.title": "Partner Application Form",

      "apply.f.name": "Full Name",
      "apply.f.email": "Email Address",
      "apply.f.phone": "Phone Number",
      "apply.f.residence": "Country of Residence",
      "apply.f.city": "City You Want to Operate In",
      "apply.f.education": "Education Level",
      "apply.f.employment": "Employment Status",
      "apply.f.why": "Why do you want to join PanAfric Properties?",
      "apply.f.experience": "Do you have any real estate experience?",
      "apply.f.capital": "Can you invest in basic setup costs (marketing, transport, admin)?",
      "apply.f.notes": "Anything else you would like us to know?",

      "apply.opt.select": "Select",
      "apply.opt.nongrad": "Non-graduate",
      "apply.opt.grad": "Graduate",
      "apply.opt.postgrad": "Postgraduate",
      "apply.opt.unemployed": "Unemployed",
      "apply.opt.employed": "Employed",
      "apply.opt.selfemployed": "Self-employed",
      "apply.opt.no": "No",
      "apply.opt.yes": "Yes",

      "apply.cta.submit": "Submit Application",
      "apply.cta.back": "Back",
      "apply.note": "After review, approved applicants receive invite-only access to the Partner Academy.",

      // ===== ACADEMY =====
      "academy.title": "Partner Academy",
      "academy.progress": "Progress",
      "academy.resume": "Resume next module",
      "academy.complete_note": "Complete all modules to unlock certification.",
      "academy.cert": "Certification",
      "academy.view_cert": "View Certificate",
      "academy.badge": "Certified Partner",
      "academy.session": "Session",
      "academy.logout": "Log out",
      "academy.admin": "Open Admin Panel",
      "academy.modules": "Modules",
      "academy.welcome": "Welcome, {name}{email}.",
      "academy.progress_text": "{passed} / {total} modules completed ({pct}%).",
      "academy.unlocked": "Unlocked — you have completed all modules.",
      "academy.locked": "Locked — complete all modules to unlock.",
      "academy.status": "Status",
      "academy.completed": "Completed ✅",
      "academy.not_completed": "Not completed",
      "academy.go_dashboard": "Go to Partner Dashboard",

      // ===== CERTIFICATE =====
      "cert.back": "← Back to Academy",
      "cert.locked.title": "Certificate Locked",
      "cert.locked.text": "Complete all modules to unlock your Partner Certification.",
      "cert.locked.progress": "Progress: {passed}/{total} modules completed.",
      "cert.brand": "PanAfric Properties",
      "cert.program": "Training & Certification Program",
      "cert.title": "Certificate of Completion",
      "cert.desc": "This certifies that the partner named below has successfully completed all training modules and assessments under the PanAfric Properties Partner Academy.",
      "cert.cta.print": "Print / Save PDF",
      "cert.cta.logout": "Log out",
      "cert.note": "Certification remains active subject to ongoing compliance, ethics, and platform standards.",
      "cert.meta.id": "Certificate ID: {id}",
      "cert.meta.issued": "Issued on: {date}",

      // ===== DASHBOARD + SUBMIT =====
      "partner_dash.title": "Partner Dashboard",
      "partner_dash.welcome": "Welcome, {name}.",
      "partner_dash.status.title": "Status",
      "partner_dash.status.certified": "Certified ✅",
      "partner_dash.status.not_certified": "Not certified",
      "partner_dash.status.not_certified_note": "You must complete the Partner Academy to list properties.",
      "partner_dash.status.certified_note": "You are certified and can submit properties for review.",
      "partner_dash.actions.title": "Quick actions",
      "partner_dash.actions.note": "Property submissions are reviewed by PanAfric Properties before publication.",
      "partner_dash.account.title": "Account",
      "partner_dash.account.name": "Name",
      "partner_dash.account.email": "Email",
      "partner_dash.cta.add_property": "Add New Property",
      "partner_dash.cta.view_certificate": "View Certificate",
      "partner_dash.cta.go_academy": "Go to Academy",
      "partner_dash.cta.back_academy": "Back to Academy",
      "partner_dash.cta.logout": "Log out",

      "submit.back": "← Back to Dashboard",
      "submit.title": "Submit a Property",
      "submit.subtitle": "Submit a property for review. Once approved, it can be published on PanAfric Properties.",
      "submit.blocked": "You must complete the Partner Academy to submit properties.",
      "submit.go_academy": "Go to Academy",
      "submit.partner_name": "Partner full name",
      "submit.partner_email": "Partner email",
      "submit.listing_title": "Listing title",
      "submit.property_type": "Property type",
      "submit.select": "Select…",
      "submit.type.land": "Land",
      "submit.type.house": "House",
      "submit.type.apartment": "Apartment",
      "submit.type.commercial": "Commercial",
      "submit.country": "Country",
      "submit.city": "City / Area",
      "submit.price": "Price",
      "submit.currency": "Currency",
      "submit.description": "Description",
      "submit.description_note": "Include size, condition, ownership status, nearby landmarks, and any restrictions.",
      "submit.photos": "Photos (up to 10)",
      "submit.photos_note": "JPG/PNG recommended. Clear exterior + interior + land boundaries.",
      "submit.docs": "Ownership documents (optional)",
      "submit.docs_note": "Title deed, land certificate, or any proof of authority to list.",
      "submit.contact_phone": "Contact phone (optional)",
      "submit.contact_whatsapp": "WhatsApp (optional)",
      "submit.consent": "I confirm I have the right to submit this property and the information is accurate.",
      "submit.cta.submit": "Submit for review",
      "submit.cta.cancel": "Cancel",
      "submit.footer_note": "After submission, our team will review and contact you if clarifications are needed.",

      // ===== MODULE SYSTEM (generic labels) =====
      "module_word": "Module",
      "select_option": "Select",
      "submit_test_btn": "Submit test",
      "module_pass_msg": "✅ Test passed. Module completed. Return to the Academy to continue.",
      "module_fail_msg": "❌ Not yet. You have {correct}/{total}. Please review and try again.",
      "module_quick_test_title": "Quick test",
      "module_quick_test_help": "Answer all questions correctly to complete this module.",

      // (Your module.* reading/quiz keys can remain exactly as used in module.html / academy.js.
      // Keeping them as-is from your 2-days file avoids breaking anything.)
    },

    // =========================
    // FRENCH
    // =========================
    fr: {
      "lang_label": "Langue",
      "lang.label": "Langue",

      "nav.countries": "Pays",
      "nav.properties": "Biens",
      "nav.projects": "Projets",
      "nav.agents": "Agents",
      "nav.franchise": "Travaillez avec nous",
      "nav.training": "Formation & Certification",
      "nav.trust": "Confiance",
      "nav.login": "Connexion Partenaire",
      "nav.contact": "Contact",

      // NOTE: we keep your existing FR translations from the 2-days file.
      // IMPORTANT: I fixed ALL the missing commas that were breaking the file.

      // --- (Your FR block is very long; keep it as you had it, but with commas fixed.)
      // To avoid a 20,000-line reply here, I’m giving you the SAFE “drop-in” approach:

      // ✅ REQUIRED FR KEYS (from yesterday additions, so nothing is missing on new pages)
      "properties.pageTitle": "Biens — PanAfric Properties",
      "properties.h1": "Annonces approuvées",
      "properties.intro2": "Parcourez les annonces approuvées. Chaque bien est vérifié avant publication.",
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
      "property.details.country": "Pays",

      // ✅ Keep your existing FR “academy / modules / sponsor / submit / etc.” keys here.
      // (Paste your full FR block under this comment — but ensure every line ends with a comma except the last one.)
    },

    // =========================
    // SPANISH
    // =========================
    es: {
      "lang_label": "Idioma",
      "lang.label": "Idioma",

      "nav.countries": "Países",
      "nav.properties": "Propiedades",
      "nav.projects": "Proyectos",
      "nav.agents": "Agentes",
      "nav.franchise": "Trabaja con nosotros",
      "nav.training": "Formación y certificación",
      "nav.trust": "Confianza",
      "nav.login": "Acceso de socios",
      "nav.contact": "Contacto",

      // ✅ REQUIRED ES KEYS (from yesterday additions)
      "properties.pageTitle": "Propiedades — PanAfric Properties",
      "properties.h1": "Listado de propiedades aprobadas",
      "properties.intro2": "Explora los anuncios aprobados. Cada propiedad se revisa antes de publicarse.",
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
      "nav.countries": "Países", "nav.properties": "Propiedades", "nav.agents": "Agentes", "nav.franchise": "Trabaja con nosotros", "nav.training": "Formación y certificación", "nav.trust": "Confianza", "nav.login": "Acceso de socios", "nav.contact": "Contacto", "franchise.hero.badge": "Emprendimiento • Franquicia • Impacto social", "franchise.hero.h1": "De graduado a emprendedor inmobiliario", "franchise.hero.p": Empoderamos a jóvenes africanos, graduados, no graduados y profesionales desempleados para lanzar su propio negocio inmobiliario como autónomos en sus ciudades, bajo nuestro modelo de franquicia. PanAfric Properties ofrece formación, certificación interna y acceso a compradores de la diáspora a través de nuestra plataforma de marketplace verificada., "franchise.training.h2": "Formación y certificación", "franchise.training.p": Todos los solicitantes aprobados completan nuestro programa interno online de Formación y Certificación antes de operar bajo la marca PanAfric Properties., "franchise.training.card1.h3": "Academia de socios online", "franchise.training.card1.p": Accede a módulos estructurados que cubren fundamentos inmobiliarios, due diligence, ética y procesos de la plataforma., "franchise.training.card2.h3": "Pruebas cortas", "franchise.training.card2.p": "Cada módulo incluye una breve evaluación para verificar la comprensión.", "franchise.training.card3.h3": "Certificación interna", "franchise.training.card3.p": "Obtén la certificación de socio de PanAfric Properties al finalizar.", "franchise.training.card4.h3": "Activación del marketplace", "franchise.training.card4.p": "Solo los socios certificados pueden publicar propiedades y gestionar compradores.", "franchise.training.cta": "Ver el programa de formación y certificación", "franchise.hero.cta_apply": "Solicitar el programa de franquicia", "franchise.hero.cta_trust": "Cómo construimos confianza", "franchise.clarification.h3": "Aclaración importante", "franchise.clarification.p": PanAfric Properties no ofrece empleo asalariado ni puestos tradicionales. Este programa es una oportunidad de emprendimiento basada en franquicia. Los candidatos seleccionados operan como autónomos y propietarios de su negocio bajo la marca PanAfric Properties y su marco de confianza., "franchise.who.h2": "Para quién es", "franchise.who.card1.h3": "Graduados y jóvenes profesionales", "franchise.who.card1.p": Si has completado estudios universitarios o formación profesional y buscas una oportunidad práctica para generar ingresos en tu ciudad., "franchise.who.card2.h3": "No graduados con ambición", "franchise.who.card2.p": No necesitas un título formal para triunfar. Ofrecemos formación, estructura y certificación para operar con profesionalidad., "franchise.who.card3.h3": "Profesionales desempleados", "franchise.who.card3.p": Si estás desempleado o subempleado y quieres convertirte en autónomo en un sector en crecimiento con demanda real., "franchise.who.card4.h3": "Regreso de la diáspora", "franchise.who.card4.p": Si regresas a África y quieres construir un negocio creíble y estructurado con una marca establecida y un flujo de compradores de la diáspora., "franchise.provide.h2": "Qué ofrecemos", "franchise.provide.card1.h3": "Formación e incorporación", "franchise.provide.card1.p": Incorporación estructurada sobre fundamentos inmobiliarios, atención al cliente, procedimientos de due diligence, procesos de plataforma y ética., "franchise.provide.card2.h3": "Certificación interna", "franchise.provide.card2.p": Todos los socios completan la certificación para operar bajo la marca PanAfric Properties y su marco de confianza., "franchise.provide.card3.h3": "Acceso a marca y marketplace", "franchise.provide.card3.p": Usa nuestra marca, plataforma e infraestructura para publicar oportunidades verificadas y llegar a compradores de la diáspora en todo el mundo., "franchise.provide.card4.h3": "Leads de compradores", "franchise.provide.card4.p": Recibe consultas cualificadas de compradores de la diáspora e internacionales canalizadas a través del marketplace., "franchise.model.h2": "Cómo funciona el modelo de franquicia", "franchise.model.card1.h3": "Por territorio", "franchise.model.card1.p": Operas en una ciudad o territorio definido como socio de PanAfric Properties. Pueden aplicarse derechos exclusivos o semi-exclusivos según el tamaño del mercado., "franchise.model.card2.h3": "Ingresos por comisión", "franchise.model.card2.p": Gana comisiones por transacciones exitosas y referidos de clientes completados a través de la plataforma., "franchise.model.card3.h3": "Independiente pero estructurado", "franchise.model.card3.p": Gestionas tu propio negocio autónomo siguiendo nuestros estándares, marco de confianza y procesos de cumplimiento., "franchise.model.card4.h3": "Ruta de crecimiento", "franchise.model.card4.p": Los socios con mejor rendimiento pueden crecer a operadores multi-ciudad, gestores de territorio o líderes regionales., "franchise.econ.h2": "Economía del socio", "franchise.econ.p": Los socios de PanAfric Properties operan como autónomos. Tus ingresos dependen de las transacciones completadas — con apoyo de nuestra formación, marco de verificación y pipeline de compradores de la diáspora., "franchise.econ.card1.h3": "Inversión típica (ilustrativa)", "franchise.econ.card1.p1": "Una estructura inicial simple y transparente:", "franchise.econ.card1.p2": "• Formación y certificación (pago único): <strong>€250</strong>", "franchise.econ.card1.p3": "• Activación de territorio / puesta en marcha (pago único): <strong>€750</strong>", "franchise.econ.card1.p4": "Inversión inicial total: <strong>€1,000</strong>", "franchise.econ.card1.p5": "(El precio final puede variar según territorio y fase de lanzamiento.)", "franchise.econ.card1.p6": En fases iniciales, PanAfric Properties puede, a su discreción, eximir o reducir ciertos cargos para candidatos destacados o territorios estratégicos., "franchise.econ.card2.h3": "Cómo ganas", "franchise.econ.card2.p1": "Los socios reciben una parte de las comisiones por operaciones completadas.", "franchise.econ.card2.p2": "Rango típico de comisión: <strong>3%–5%</strong>", "franchise.econ.card2.p3": "Parte típica del socio: <strong>50%–70%</strong>", "franchise.econ.card2.p4": "Las estructuras exactas varían por mercado, tipo de propiedad y acuerdos con promotores.", "franchise.econ.card3.h3": "Ingresos ilustrativos por operación", "franchise.econ.card3.p1": "Ejemplos para entender el modelo:", "franchise.econ.card3.p2": "<strong>Conservador</strong>: €30,000 × 3% × 50% = <strong>€450</strong>", "franchise.econ.card3.p3": "<strong>Base</strong>: €50,000 × 4% × 60% = <strong>€1,200</strong>", "franchise.econ.card3.p4": "<strong>Fuerte</strong>: €80,000 × 5% × 70% = <strong>€2,800</strong>", "franchise.econ.card3.p5": Muchos socios recuperan la inversión inicial en 1–3 transacciones, según el tamaño del acuerdo y las comisiones locales., "franchise.econ.note.h3": "Nota importante (transparencia)", "franchise.econ.note.p": Las cifras anteriores son ejemplos ilustrativos para explicar el modelo. Los ingresos no están garantizados y dependen de tu actividad, condiciones del mercado, precios y cierre exitoso de la transacción., "franchise.econ.cta_team": "Hablar con el equipo", "franchise.econ.cta_apply": "Solicitar el programa de socios", "franchise.econ.cta_training": "Ver formación y certificación", "franchise.compliance.h2": "Confianza, ética y cumplimiento", "franchise.compliance.card1.h3": "Estándares de verificación", "franchise.compliance.card1.p": Todas las publicaciones deben pasar verificaciones básicas legales, de propiedad y documentación antes de publicarse en la plataforma., "franchise.compliance.card2.h3": "Código de conducta", "franchise.compliance.card2.p": Todos los socios operan bajo un código de ética profesional que cubre transparencia, protección del cliente y trato justo., "franchise.compliance.card3.h3": "Monitoreo continuo", "franchise.compliance.card3.p": Monitoreamos el rendimiento y cumplimiento para mantener la confianza de la marketplace y de la diáspora., "franchise.compliance.card4.h3": "Gobernanza de la plataforma", "franchise.compliance.card4.p": Los socios operan dentro del marco de gobernanza del marketplace para proteger compradores, vendedores y la marca PanAfric Properties., "franchise.apply.h2": "Solicitar el programa de franquicia", "franchise.apply.p": Si eres ambicioso, estás motivado y comprometido con construir un negocio inmobiliario creíble en tu ciudad, te invitamos a completar el formulario para convertirte en socio franquiciado de PanAfric Properties. No se requiere experiencia previa en el sector., "franchise.form.full_name": "Nombre completo", "franchise.form.email": "Correo electrónico", "franchise.form.phone": "Teléfono / WhatsApp", "franchise.form.location": "Ciudad y país", "franchise.form.education": "Nivel educativo", "franchise.form.employment": "Situación laboral", "franchise.form.select": "Seleccionar", "franchise.form.education.secondary": "Educación secundaria", "franchise.form.education.diploma": "Diploma", "franchise.form.education.university": "Título universitario", "franchise.form.education.other": "Otro", "franchise.form.employment.unemployed": "Desempleado", "franchise.form.employment.self": "Autónomo", "franchise.form.employment.employed": "Empleado", "franchise.form.employment.student": "Estudiante", "franchise.form.why": "¿Por qué quieres unirte a PanAfric Properties?", "franchise.form.submit": "Enviar solicitud", "footer.tagline": "Acceso confiable a oportunidades inmobiliarias africanas verificadas — construido para la diáspora.", "footer.platform.h3": "Plataforma", "footer.platform.countries": "Países", "footer.platform.properties": "Propiedades", "footer.platform.trust": "Confianza y verificación", "footer.platform.login": "Acceso de socios", "footer.work.h3": "Trabaja con nosotros", "footer.work.p": Lanza tu propio negocio inmobiliario con formación, certificación y acceso a compradores de la diáspora., "footer.work.apply": "Solicitar", "footer.contact.h3": "Contacto", "footer.contact.p": "Para compradores, promotores y socios.", "footer.contact.link": "Escríbenos", "footer.copyright": "© 2026 PanAfric Properties. Todos los derechos reservados.", "index.hero.badge": "Diáspora primero • Confianza primero","index.hero.h1": "PanAfric Properties","index.hero.p": Tu puerta de entrada de confianza al inmobiliario africano — conectando a africanos de todo el mundo con oportunidades verificadas en su país mediante una red local de franquicias regulada.,"index.hero.cta1": "Explorar propiedades","index.hero.cta2": "Hablar con un agente local","index.kpi1.t": "Mercados en lanzamiento","index.kpi2.t": "Tipos de anuncios","index.kpi2.v": "Terrenos • Viviendas • Proyectos","index.kpi3.t": "Modelo","index.kpi3.v": "Red de franquicias","index.how.h2": "Cómo funciona","index.how.card1.h3": "1) Explora oportunidades verificadas","index.how.card1.p": "Explora terrenos, viviendas y proyectos listados por socios franquiciados autorizados en cada territorio.","index.how.card2.h3": "2) Te conectamos con un agente local","index.how.card2.p": "Tu consulta se canaliza al profesional adecuado sobre el terreno para guiarte y protegerte.","index.how.card3.h3": "3) Compra con claridad y apoyo","index.how.card3.p": "Mostramos el estado de la due diligence y pasos transparentes para completar con seguridad.","index.franchise.h2": "De graduado a emprendedor inmobiliario","index.franchise.p": Empoderamos a jóvenes africanos, graduados, no graduados y profesionales desempleados para lanzar su propio negocio inmobiliario como autónomos en sus ciudades bajo nuestro modelo de franquicia. PanAfric Properties ofrece formación, certificación interna y acceso a compradores de la diáspora mediante nuestro marketplace de confianza.,"index.franchise.cta": "Solicitar el programa de franquicia","index.countries.h2": "Empieza por países","index.countries.p": "Elige un mercado para ver oportunidades y la red local de socios franquiciados.","index.countries.cta1": "Ver todos los países","index.countries.cta2": "Cómo construimos confianza","index.country.ghana": "Accra • Kumasi • Tema","index.country.nigeria": "Lagos • Abuja","index.country.cameroon": "Douala • Yaundé","index.country.senegal": "Dakar • Thiès","index.country.ivory": "Abiyán • Bouaké","index.country.mali": "Bamako","index.country.zimbabwe": "Harare • Bulawayo","index.footer.franchise.p": "Conviértete en socio local y publica oportunidades verificadas en tu territorio.","index.footer.franchise.link": "Solicitar / Consultar",// ===== TRAINING ====="training.top.approved": ¿Ya estás aprobado? <a href="login.html"><strong>Acceso de socios</strong></a>,"training.top.login_strong": "Acceso de socios","training.hero.badge": "Academia de socios • Certificación • Confianza","training.hero.h1": "Formación y certificación de PanAfric Properties","training.hero.p": Todos los solicitantes de franquicia aprobados completan nuestro programa interno online de formación y certificación antes de operar bajo la marca PanAfric Properties.,"training.hero.cta_apply": "Solicitar el programa de franquicia","training.hero.cta_login": "Acceso de socios","training.standards.h2": "Estándares profesionales. Confianza. Cumplimiento.","training.standards.p1": PanAfric Properties opera un marketplace inmobiliario de confianza para la diáspora y compradores internacionales. Para proteger a los clientes, mantener la credibilidad de la plataforma y asegurar una conducta profesional, todos los socios franquiciados deben completar nuestro programa interno de formación y certificación antes de la incorporación.,"training.standards.p2": "Nuestro programa de formación y certificación garantiza que cada socio:","training.standards.card1.h3": "Comprende los fundamentos inmobiliarios","training.standards.card1.p": "Aprende lo básico de mercados, valoración y procesos de transacción.","training.standards.card2.h3": "Sigue estándares de due diligence","training.standards.card2.p": "Comprende procedimientos de verificación, prevención de fraude y controles documentales.","training.standards.card3.h3": "Opera éticamente","training.standards.card3.p": "Respeta principios de transparencia, profesionalidad y protección al cliente.","training.standards.card4.h3": "Cumple la gobernanza de la plataforma","training.standards.card4.p": "Sigue reglas de reporting, cumplimiento y marketplace.","training.access.h2": "Quién puede acceder al programa de formación","training.access.p": El programa de Formación y Certificación de PanAfric Properties está disponible exclusivamente para solicitantes de franquicia aprobados. No necesitas experiencia previa en el sector para calificar.,"training.access.card1.h3": "Graduados y jóvenes profesionales","training.access.card1.p": "Buscando una oportunidad estructurada y generadora de ingresos en tu ciudad.","training.access.card2.h3": "No graduados con ambición","training.access.card2.p": "Ofrecemos formación, estructura y certificación para operar con profesionalidad.","training.access.card3.h3": "Profesionales desempleados","training.access.card3.p": "Hazte autónomo en un sector en crecimiento con demanda real.","training.access.card4.h3": "Regreso de la diáspora","training.access.card4.p": "Construye un negocio creíble con una marca establecida y un flujo de compradores.","training.academy.h2": "Cómo funciona la academia de socios","training.academy.step1.h3": "1) Solicitar y ser aceptado","training.academy.step1.p": "Envía tu solicitud. Los candidatos aprobados reciben acceso a la plataforma de formación.","training.academy.step2.h3": "2) Iniciar sesión en la plataforma de formación","training.academy.step2.p": "Accede a nuestro sistema interno de aprendizaje online con tus credenciales personales.","training.academy.step3.h3": "3) Estudiar los módulos","training.academy.step3.p": "Lee módulos estructurados sobre fundamentos, due diligence, ética y procesos de plataforma.","training.academy.step4.h3": "4) Completar pruebas cortas","training.academy.step4.p": "Cada módulo incluye una evaluación breve para verificar la comprensión.","training.academy.step5.h3": "5) Obtener tu certificación","training.academy.step5.p": "Cuando apruebas módulos y pruebas, recibes la certificación de socio.","training.curriculum.h2": "Plan de estudios","training.curriculum.p": "Este es un resumen público. Los módulos completos y pruebas solo están disponibles dentro de la academia de socios.","training.curriculum.m1.h3": "Módulo 1 — Introducción a PanAfric Properties","training.curriculum.m1.p": "Visión de la plataforma, modelo de franquicia, responsabilidades, marco de gobernanza.","training.curriculum.m2.h3": "Módulo 2 — Fundamentos inmobiliarios","training.curriculum.m2.p": "Tipos de propiedad, fundamentos de valoración, dinámica del mercado local.","training.curriculum.m3.h3": "Módulo 3 — Due diligence y verificación","training.curriculum.m3.p": "Comprobación de propiedad, documentación de título, prevención de fraude, señales de alerta.","training.curriculum.m4.h3": "Módulo 4 — Atención al cliente y ética","training.curriculum.m4.p": "Conducta profesional, transparencia, comunicación, conflictos de interés.","training.curriculum.m5.h3": "Módulo 5 — Expectativas del comprador diáspora","training.curriculum.m5.p": "Psicología del inversor, preocupaciones de confianza, gestión de transacciones a distancia.","training.curriculum.m6.h3": "Módulo 6 — Publicaciones y procesos de plataforma","training.curriculum.m6.p": "Incorporación de propiedades, estándares documentales, reglas del marketplace.","training.curriculum.m7.h3": "Módulo 7 — Alfabetización legal (básica)","training.curriculum.m7.p": "Contratos, relaciones de agencia, conceptos de escrow.","training.curriculum.m8.h3": "Módulo 8 — Cierre de transacciones","training.curriculum.m8.p": "Incorporación del comprador, hitos, principios de pago.","training.curriculum.m9.h3": "Módulo 9 — Cumplimiento y reporting","training.curriculum.m9.p": "Obligaciones de reporting, monitoreo, gestión de disputas.","training.cert.h2": "Certificación de socio","training.cert.p": La certificación de socio de PanAfric Properties confirma que has completado con éxito el programa de formación y certificación y has cumplido nuestros estándares operativos.,"training.cert.card1.h3": "Autorización de marca","training.cert.card1.p": "Opera bajo la marca PanAfric Properties.","training.cert.card2.h3": "Acceso al marketplace","training.cert.card2.p": "Publica oportunidades verificadas y recibe consultas de compradores de la diáspora.","training.cert.card3.h3": "Reconocimiento oficial","training.cert.card3.p": "Estatus de socio franquiciado certificado.","training.cert.card4.h3": "Cumplimiento continuo","training.cert.card4.p": "Certificación mantenida mediante conducta ética y estándares de desempeño.","training.eligibility.h2": "Acceso y elegibilidad","training.eligibility.p": El programa de formación y certificación no es accesible públicamente. El acceso se concede solo a solicitantes de franquicia aprobados.,"training.eligibility.step1.h3": "Paso 1","training.eligibility.step1.p": "Solicitar el programa de franquicia.","training.eligibility.step2.h3": "Paso 2","training.eligibility.step2.p": "Recibir el resultado de la revisión.","training.eligibility.step3.h3": "Paso 3","training.eligibility.step3.p": "Obtener acceso de inicio de sesión a la plataforma de formación.","training.eligibility.step4.h3": "Paso 4","training.eligibility.step4.p": "Completar módulos y pruebas.","training.eligibility.step5.h3": "Paso 5","training.eligibility.step5.p": "Obtener certificación.","training.clarification.h3": "Aclaración importante","training.clarification.p": PanAfric Properties no ofrece empleo asalariado ni puestos tradicionales. Este programa es una oportunidad de emprendimiento basada en franquicia. Los solicitantes seleccionados operan como autónomos y propietarios de su negocio bajo la marca PanAfric Properties y su marco de confianza.,"training.journey.h2": "Inicia tu camino de formación","training.journey.p": Solicita convertirte en socio franquiciado de PanAfric Properties y comienza tu camino de formación y certificación.,"training.journey.cta": "Solicitar el programa de franquicia",// trust.html"trust.title": "Confianza y Verificación","trust.intro": "PanAfric Properties opera a través de una red local de franquicias regulada para mejorar la transparencia, reducir el riesgo de fraude y proteger a los compradores de la diáspora.","trust.c1.t": "Socios franquiciados locales con licencia","trust.c1.p": "Los anuncios son enviados por socios verificados que operan bajo las leyes locales y los requisitos del sector.","trust.c2.t": "Comprobaciones de título y propiedad","trust.c2.p": "Cuando está disponible, la documentación del título se revisa y se marca como Verificado / En revisión / No verificado.","trust.c3.t": "Evaluación de promotores","trust.c3.p": "Promotores y vendedores pasan comprobaciones básicas de antecedentes y validación de referencias antes de publicar.","trust.c4.t": "Estado de diligencia debida","trust.c4.p": "Cada oportunidad mostrará claramente su estado de diligencia debida y los siguientes pasos recomendados.","trust.c5.t": "Soporte al comprador","trust.c5.p": "Guiamos a los compradores durante el proceso y dirigimos las consultas al socio correcto en el país.","trust.c6.t": "Proceso claro, precios claros","trust.c6.p": "Comunicación transparente sobre tarifas, pasos y plazos—para que los compradores de la diáspora puedan planificar con confianza.","trust.cta.agent": "Hablar con un agente local","trust.cta.browse": "Ver propiedades","trust.promo.t": "Construye un negocio inmobiliario con nosotros","trust.promo.p": "PanAfric Properties impulsa a jóvenes africanos — graduados, no graduados y profesionales desempleados — a lanzar sus propios negocios inmobiliarios por cuenta propia bajo nuestro modelo de franquicia. Se ofrece formación, certificación interna y acceso a compradores de la diáspora.","trust.promo.cta": "Solicitar unirse a nuestro programa de franquicia",// contact.html"contact.title": "Contáctanos","contact.intro": "Consultas inmobiliarias, solicitudes de franquicia, alianzas con promotores — envíanos un mensaje.","contact.form.title": "Formulario de consulta","contact.form.name.label": "Tu nombre","contact.form.name.ph": "Nombre completo","contact.form.email.label": "Correo","contact.form.email.ph": "nombre@email.com","contact.form.role.label": "Soy…","contact.form.role.opt1": "Comprador de la diáspora","contact.form.role.opt2": "Comprador local","contact.form.role.opt3": "Promotor / vendedor","contact.form.role.opt4": "Agente / candidato a franquicia","contact.form.role.opt5": "Socio / inversor","contact.form.country.label": "País de interés","contact.form.msg.label": "Tu mensaje","contact.form.msg.ph": "Cuéntanos qué quieres comprar/construir o cómo quieres colaborar.","contact.form.submit": "Enviar mensaje","contact.next.title": "¿Qué pasa después?","contact.next.s1": "<b>1)</b> Revisamos tu consulta.","contact.next.s2": "<b>2)</b> Te conectamos con el socio local adecuado.","contact.next.s3": "<b>3)</b> Recibes un plan de acción claro y los siguientes pasos.","contact.links.title": "Enlaces rápidos","contact.links.p1": "Ver propiedades","contact.links.p2": "Confianza y verificación","contact.links.p3": "Socios franquiciados",// agents.html"agents.title": "Socios franquiciados locales","agents.intro": "Cada territorio está representado por un Socio Franquiciado de PanAfric Properties — formado, certificado y supervisado bajo nuestro marco de confianza y verificación. Los profesionales inmobiliarios con licencia son bienvenidos y pueden ser acelerados, pero no se requiere licencia para postular.","agents.card1.title": "Accra Oeste — Ghana","agents.card1.coverage": "<b>Cobertura:</b> East Legon, Airport, Cantonments","agents.card1.status": "<b>Estado:</b> Socio franquiciado (certificado)","agents.card2.title": "Lagos — Nigeria","agents.card2.coverage": "<b>Cobertura:</b> Lekki, Victoria Island","agents.card2.status": "<b>Estado:</b> Socio franquiciado (certificado)","agents.card3.title": "Douala — Camerún","agents.card3.coverage": "<b>Cobertura:</b> Bonapriso, Akwa","agents.card3.status": "<b>Estado:</b> Socio franquiciado (certificado)","agents.card4.title": "Dakar — Senegal","agents.card4.coverage": "<b>Cobertura:</b> Almadies, Plateau","agents.card4.status": "<b>Estado:</b> Socio franquiciado (certificado)","agents.card5.title": "Bamako — Malí","agents.card5.coverage": "<b>Cobertura:</b> ACI 2000, Hippodrome","agents.card5.status": "<b>Estado:</b> Socio franquiciado (certificado)","agents.card6.title": "Harare — Zimbabue","agents.card6.coverage": "<b>Cobertura:</b> Borrowdale, Avondale","agents.card6.status": "<b>Estado:</b> Socio franquiciado (certificado)","agents.card.cta": "Contactar a este socio","agents.join.title": "Conviértete en socio franquiciado","agents.join.text": "No necesitas experiencia previa en bienes raíces — ofrecemos formación, certificación interna y un marco de confianza. Los agentes con licencia y profesionales del sector también pueden postular y pueden ser acelerados según el territorio.","agents.join.cta.apply": "Solicitar unirse a nuestro programa de socios","agents.join.cta.training": "Ver formación",// countries.html"countries.title": "Explorar países","countries.intro": "Elige un mercado para ver oportunidades verificadas y socios franquiciados locales.","countries.ghana.cities": "Accra • Kumasi • Tema","countries.nigeria.cities": "Lagos • Abuja","countries.cameroon.cities": "Douala • Yaundé","countries.senegal.cities": "Dakar • Thiès","countries.ivorycoast.cities": "Abidjan • Bouaké","countries.mali.cities": "Bamako","countries.zimbabwe.cities": "Harare • Bulawayo","countries.cta.browse": "Ver anuncios","countries.cta.franchise": "Consulta de franquicia",// properties.html"properties.title": "Anuncios de propiedades","properties.intro": "Anuncios MVP — estático por ahora. Siguiente paso: filtros reales + páginas por país.","properties.filter.country": "País","properties.filter.type": "Tipo","properties.filter.budget": "Presupuesto","properties.filter.dd": "Diligencia debida","properties.filter.all": "Todos","properties.type.land": "Terreno","properties.type.home": "Vivienda","properties.type.dev": "Proyecto / Sobre plano","properties.budget.any": "Cualquiera","properties.budget.under50": "Menos de 50.000 €","properties.budget.50to150": "50.000 € – 150.000 €","properties.budget.150plus": "150.000 €+","properties.dd.any": "Cualquiera","properties.dd.verified": "Verificado","properties.dd.review": "En revisión","properties.cta.enquire": "Consultar","properties.cta.how": "Cómo funciona la verificación","properties.list1.title": "Villa moderna — Accra (Ghana)","properties.list1.desc": "Villa de 3 habitaciones • East Legon • Lista para entrar","properties.list1.meta": "<b>Estado:</b> Verificado • <b>Agente:</b> Socio Accra Oeste","properties.list2.title": "Terreno residencial — Douala (Camerún)","properties.list2.desc": "Parcela de 500 m² • Buen acceso • Ideal para construir","properties.list2.meta": "<b>Estado:</b> En revisión • <b>Agente:</b> Socio Douala","properties.list3.title": "Apartamentos sobre plano — Lekki (Nigeria)","properties.list3.desc": "Apartamentos de 2 habitaciones • Plan de pagos disponible","properties.list3.meta": "<b>Estado:</b> Verificado • <b>Agente:</b> Socio Lagos","properties.list4.title": "Parcela residencial — Bamako (Malí)","properties.list4.desc": "Terreno con título • Zona residencial • Buen acceso","properties.list4.meta": "<b>Estado:</b> En revisión • <b>Agente:</b> Socio Bamako","properties.list5.title": "Casa familiar — Harare (Zimbabue)","properties.list5.desc": "Casa de 3 habitaciones • Barrio seguro","properties.list5.meta": "<b>Estado:</b> Verificado • <b>Agente:</b> Socio Harare","properties.list6.title": "Apartamento en la ciudad — Dakar (Senegal)","properties.list6.desc": "Apartamento de 2 habitaciones • Alta demanda de alquiler","properties.list6.meta": "<b>Estado:</b> En revisión • <b>Agente:</b> Socio Dakar","properties.card.cta": "Solicitar detalles","properties.promo.title": "¿Quieres crear un negocio inmobiliario en tu ciudad?","properties.promo.text": "Únete a PanAfric Properties como socio franquiciado. Formamos y certificamos a socios locales para operar actividades de corretaje inmobiliario y conectarlos con compradores de la diáspora en todo el mundo.","properties.promo.cta": "Trabaja con nosotros",// login.html"login.title": "Acceso de socios","login.intro": "Accede a la plataforma de formación de PanAfric Properties. El acceso está disponible solo para socios aprobados.","login.cta.login": "Iniciar sesión","login.cta.back": "Volver","login.note.q": "¿Aún no estás aprobado?","login.note.link": "Solicitar unirse a nuestro programa de socios",// franchise-apply.html"apply.badge": "Solicitud de franquicia","apply.title": "Solicita unirte a nuestro programa de franquicia","apply.intro": "Este programa está pensado para personas ambiciosas que quieren crear un negocio inmobiliario por cuenta propia en su ciudad de origen, bajo el modelo de franquicia de PanAfric Properties. No se requiere experiencia previa en bienes raíces.","apply.form.title": "Formulario de solicitud de socio","apply.f.name": "Nombre completo","apply.f.email": "Correo electrónico","apply.f.phone": "Número de teléfono","apply.f.residence": "País de residencia","apply.f.city": "Ciudad en la que quieres operar","apply.f.education": "Nivel educativo","apply.f.employment": "Situación laboral","apply.f.why": "¿Por qué quieres unirte a PanAfric Properties?","apply.f.experience": "¿Tienes experiencia en bienes raíces?","apply.f.capital": "¿Puedes invertir en costos básicos de puesta en marcha (marketing, transporte, administración)?","apply.f.notes": "¿Algo más que te gustaría que supiéramos?","apply.opt.select": "Seleccionar","apply.opt.nongrad": "Sin estudios universitarios","apply.opt.grad": "Graduado","apply.opt.postgrad": "Posgrado","apply.opt.unemployed": "Desempleado","apply.opt.employed": "Empleado","apply.opt.selfemployed": "Autónomo","apply.opt.no": "No","apply.opt.yes": "Sí","apply.cta.submit": "Enviar solicitud","apply.cta.back": "Volver","apply.note": "Tras la revisión, los solicitantes aprobados reciben acceso por invitación a la Partner Academy.",// academy.html"academy.title": "Academia de Socios","academy.progress": "Progreso","academy.resume": "Continuar siguiente módulo","academy.complete_note": "Completa todos los módulos para desbloquear la certificación.","academy.cert": "Certificación","academy.view_cert": "Ver certificado","academy.badge": "Socio certificado","academy.session": "Sesión","academy.logout": "Cerrar sesión","academy.admin": "Abrir panel admin","academy.modules": "Módulos","academy.welcome": "Bienvenido, {name}{email}.","academy.progress_text": "{passed} / {total} módulos completados ({pct}%).","academy.unlocked": "Desbloqueado — has completado todos los módulos.","academy.locked": "Bloqueado — completa todos los módulos para desbloquear.","academy.status": "Estado","academy.completed": "Completado ","academy.not_completed": "No completado",// certificate.html"cert.back": "← Volver a la Academia","cert.locked.title": "Certificado bloqueado","cert.locked.text": "Completa todos los módulos para desbloquear tu certificación de socio.","cert.locked.progress": "Progreso: {passed}/{total} módulos completados.","cert.brand": "PanAfric Properties","cert.program": "Programa de formación y certificación","cert.title": "Certificado de finalización","cert.desc": "Certifica que el socio nombrado a continuación ha completado con éxito todos los módulos de formación y evaluaciones de la Academia de Socios de PanAfric Properties.","cert.cta.print": "Imprimir / Guardar PDF","cert.cta.logout": "Cerrar sesión","cert.note": "La certificación se mantiene activa sujeta al cumplimiento continuo, la ética y los estándares de la plataforma.","cert.meta.id": "ID del certificado: {id}","cert.meta.issued": "Emitido el: {date}",// Module titles"module.1.title": "Introducción a PanAfric Properties","module.2.title": "Fundamentos inmobiliarios","module.3.title": "Debida diligencia y verificación","module.4.title": "Gestión del cliente y ética","module.5.title": "Expectativas del comprador de la diáspora","module.6.title": "Procesos de anuncios y de la plataforma","module.7.title": "Alfabetización legal (básicos)","module.8.title": "Cierre de transacciones","module.9.title": "Cumplimiento e informes",/* ===== MODULE TRANSLATIONS — SPANISH ===== */"module.1.title": "Introducción a PanAfric Properties","module.1.p1": "PanAfric Properties conecta a africanos en la diáspora con oportunidades inmobiliarias verificadas.","module.1.p2": "Nuestro modelo escala mediante socios locales capacitados.","module.1.p3": "Los socios protegen a los compradores siguiendo estándares éticos.","module.1.q1": "¿Cuál es el propósito principal?","module.1.q1.o1": "Vender propiedades al azar","module.1.q1.o2": "Conectar compradores con oportunidades verificadas","module.1.q1.o3": "Listar propiedades de un solo país","module.2.title": "Conceptos básicos de bienes raíces","module.2.p1": "Comprende los tipos de activos.","module.2.p2": "Aprende factores clave de valoración.","module.2.p3": "Conoce el flujo de transacciones.","module.2.q1": "¿Cuál NO es un tipo típico?","module.2.q1.o1": "Terrenos","module.2.q1.o2": "Viviendas","module.2.q1.o3": "Coches usados","module.3.title": "Verificación y due diligence","module.3.p1": "La verificación protege a compradores y marca.","module.3.p2": "Señales de alerta incluyen documentos faltantes.","module.3.p3": "Publica solo anuncios verificados.","module.3.q1": "¿Por qué es importante la due diligence?","module.3.q1.o1": "Para retrasar","module.3.q1.o2": "Para proteger clientes","module.3.q1.o3": "Para extender anuncios","module.4.title": "Atención al cliente y ética","module.4.p1": "Guía al comprador con profesionalismo.","module.4.p2": "No tergiverses información.","module.4.p3": "Mantén registros escritos.","module.4.q1": "¿Mejor enfoque?","module.4.q1.o1": "Prometer todo","module.4.q1.o2": "Ser transparente","module.4.q1.o3": "Ocultar riesgos","module.5.title": "Expectativas del comprador","module.5.p1": "Los compradores valoran seguridad.","module.5.p2": "Comunicación clara es esencial.","module.5.p3": "Nunca presiones.","module.5.q1": "Lo más importante es:","module.5.q1.o1": "Presión rápida","module.5.q1.o2": "Seguridad","module.5.q1.o3": "Rumores","module.6.title": "Procesos de anuncios","module.6.p1": "Los anuncios deben ser claros.","module.6.p2": "Usa plantillas consistentes.","module.6.p3": "Acepta solo fuentes verificadas.","module.6.q1": "Un anuncio debe incluir:","module.6.q1.o1": "Fotos borrosas","module.6.q1.o2": "Detalles precisos","module.6.q1.o3": "Sin precio","module.7.title": "Conceptos legales","module.7.p1": "Comprende conceptos básicos legales.","module.7.p2": "No des asesoría legal.","module.7.p3": "Registra hitos importantes.","module.7.q1": "Un socio debe:","module.7.q1.o1": "Dar asesoría legal","module.7.q1.o2": "Facilitar revisión legal","module.7.q1.o3": "Ignorar contratos","module.8.title": "Cierre de transacciones","module.8.p1": "El cierre debe ser controlado.","module.8.p2": "Mantén informado al comprador.","module.8.p3": "Documenta todo.","module.8.q1": "El pago final debe hacerse:","module.8.q1.o1": "Antes de verificar","module.8.q1.o2": "Después de validar","module.8.q1.o3": "Al azar","module.9.title": "Cumplimiento y reporting","module.9.p1": "El cumplimiento protege la plataforma.","module.9.p2": "Reporta problemas temprano.","module.9.p3": "Mantén estándares.","module.9.q1": "El cumplimiento existe para:","module.9.q1.o1": "Reducir crecimiento","module.9.q1.o2": "Proteger confianza","module.9.q1.o3": "Evitar transparencia", "module_word": "Módulo","select_option": "Seleccionar","submit_test_btn": "Enviar test","module_pass_msg": " Test aprobado. Módulo completado. Vuelve a la Academia para continuar.","module_fail_msg": " Aún no. Tienes {correct}/{total}. Revisa y vuelve a intentarlo.","module_quick_test_title": "Test rápido","module_quick_test_help": "Responde correctamente a todas las preguntas para completar este módulo.", // Module 1 — Quiz (ES)"module.1.q1": "¿Cuál es el propósito principal de PanAfric Properties?","module.1.q1.o1": "Vender propiedades al azar sin controles","module.1.q1.o2": "Conectar a compradores de la diáspora con oportunidades inmobiliarias africanas verificadas","module.1.q1.o3": "Publicar solo propiedades de un país","module.1.q2": "¿Quién puede solicitar ser socio?","module.1.q2.o1": "Solo agentes inmobiliarios con licencia","module.1.q2.o2": "Solo personas con títulos universitarios","module.1.q2.o3": "Graduados, no graduados y profesionales desempleados con ambición","module.1.q3": "¿Qué se requiere antes de que un socio opere bajo la marca?","module.1.q3.o1": "Nada, puede empezar inmediatamente","module.1.q3.o2": "Formación, certificación interna e incorporación de cumplimiento","module.1.q3.o3": "Solo una cuenta de redes sociales", // Module 1 — Spanish"module.1.p1": "PanAfric Properties es un marketplace centrado en la diáspora que conecta a africanos de todo el mundo con oportunidades inmobiliarias verificadas en su país.","module.1.p2": "Nuestro modelo escala mediante socios franquiciados locales capacitados, certificados y gestionados bajo un marco de confianza y cumplimiento.","module.1.p3": "Los socios protegen a los compradores siguiendo estándares de verificación, conducta ética y procesos de la plataforma.","module.1.q1": "¿Cuál es el propósito principal de PanAfric Properties?","module.1.q1.o1": "Vender propiedades al azar sin controles","module.1.q1.o2": "Conectar a compradores de la diáspora con oportunidades inmobiliarias africanas verificadas","module.1.q1.o3": "Publicar solo propiedades de un país","module.1.q2": "¿Quién puede solicitar ser socio?","module.1.q2.o1": "Solo agentes inmobiliarios con licencia","module.1.q2.o2": "Solo personas con títulos universitarios","module.1.q2.o3": "Graduados, no graduados y profesionales desempleados con ambición","module.1.q3": "¿Qué se requiere antes de que un socio opere bajo la marca?","module.1.q3.o1": "Nada, puede empezar inmediatamente","module.1.q3.o2": "Formación, certificación interna e incorporación de cumplimiento","module.1.q3.o3": "Solo una cuenta de redes sociales", "sponsor.hero.title": "Patrocina a un futuro socio","sponsor.hero.lead": "Ayuda a un familiar o a un joven profesional a convertirse en Socio certificado de PanAfric Properties y a generar ingresos localmente mediante el emprendimiento (no es caridad y no hay garantías de ingresos).","sponsor.hero.ctaPrimary": "Patrocinar a un candidato","sponsor.hero.ctaSecondary": "Ver el programa de Socios","sponsor.hero.note": "Esta página no aparece en la navegación principal. Compártela directamente con tu comunidad de la diáspora.","sponsor.how.title": "Cómo funciona","sponsor.how.step1Title": "1) Elige un candidato","sponsor.how.step1Text": "Patrocinas a un familiar o a una persona joven motivada (18+) que quiera construir un camino profesional en el sector inmobiliario.","sponsor.how.step2Title": "2) Financia la activación del socio","sponsor.how.step2Text": "El patrocinio es de 1.000 € e incluye formación y el proceso de onboarding y activación dentro del ecosistema PanAfric.","sponsor.how.step3Title": "3) Se certifica","sponsor.how.step3Text": "Tras completar los módulos y el onboarding, podrá operar como Socio bajo nuestros estándares y normas de cumplimiento.","sponsor.cost.title": "Qué cubren los 1.000 €","sponsor.cost.trainingTitle": "Formación — 250 €","sponsor.cost.trainingItem1": "Acceso a módulos y cuestionarios de la Academia de Socios","sponsor.cost.trainingItem2": "Guiones prácticos, plantillas y flujo de trabajo de operaciones","sponsor.cost.trainingItem3": "Certificación al completar","sponsor.cost.onboardingTitle": "Onboarding y Activación — 750 €","sponsor.cost.onboardingItem1": "Configuración del perfil del Socio y pasos de verificación","sponsor.cost.onboardingItem2": "Orientación sobre herramientas: anuncios, leads y registro de clientes","sponsor.cost.onboardingItem3": "Apoyo de lanzamiento: primeros anuncios y primer pipeline de clientes","sponsor.cost.noteTitle": "Importante:","sponsor.cost.noteText": "Este es un programa de empoderamiento. No es una donación y no prometemos ingresos ni resultados.","sponsor.who.title": "¿Para quién es?","sponsor.who.card1Title": "Patrocinadores de la diáspora","sponsor.who.card1Text": "Quieres empoderar a alguien en su país con un camino real de habilidades.","sponsor.who.card2Title": "Candidatos motivados","sponsor.who.card2Text": "Jóvenes profesionales que puedan aprender y seguir un proceso.","sponsor.who.card3Title": "Grupos comunitarios","sponsor.who.card3Text": "Asociaciones que quieran crear actividad económica estructurada.","partner_dash.title": "Panel del Socio","partner_dash.welcome": "Bienvenido, {name}.","partner_dash.status.title": "Estado","partner_dash.status.certified": "Certificado ","partner_dash.status.not_certified": "No certificado","partner_dash.status.not_certified_note": "Debes completar la Partner Academy para publicar propiedades.","partner_dash.status.certified_note": "Estás certificado y puedes enviar propiedades para revisión.","partner_dash.actions.title": "Acciones rápidas","partner_dash.actions.note": "Las solicitudes se revisan en PanAfric Properties antes de publicarse.","partner_dash.account.title": "Cuenta","partner_dash.account.name": "Nombre","partner_dash.account.email": "Email","partner_dash.cta.add_property": "Añadir propiedad","partner_dash.cta.view_certificate": "Ver certificado","partner_dash.cta.go_academy": "Ir a la Academy","partner_dash.cta.back_academy": "Volver a la Academy","partner_dash.cta.logout": "Cerrar sesión","submit.back": "← Volver al panel","submit.title": "Enviar una propiedad","submit.subtitle": "Envía una propiedad para revisión. Una vez aprobada, podrá publicarse en PanAfric Properties.","submit.blocked": "Debes completar la Partner Academy para enviar propiedades.","submit.go_academy": "Ir a la Academy","submit.partner_name": "Nombre completo del socio","submit.partner_email": "Email del socio","submit.listing_title": "Título del anuncio","submit.property_type": "Tipo de propiedad","submit.select": "Seleccionar…","submit.type.land": "Terreno","submit.type.house": "Casa","submit.type.apartment": "Apartamento","submit.type.commercial": "Comercial","submit.country": "País","submit.city": "Ciudad / Zona","submit.price": "Precio","submit.currency": "Moneda","submit.description": "Descripción","submit.description_note": "Incluye tamaño, estado, situación de propiedad, puntos de referencia y cualquier restricción.","submit.photos": "Fotos (hasta 10)","submit.photos_note": "Recomendado JPG/PNG. Exterior + interior + límites del terreno.","submit.docs": "Documentos de propiedad (opcional)","submit.docs_note": "Escritura, certificado de terreno o prueba de autorización para publicar.","submit.contact_phone": "Teléfono (opcional)","submit.contact_whatsapp": "WhatsApp (opcional)","submit.consent": "Confirmo que tengo derecho a enviar esta propiedad y que la información es correcta.","submit.cta.submit": "Enviar para revisión","submit.cta.cancel": "Cancelar","submit.footer_note": "Después del envío, nuestro equipo revisará y te contactará si necesita aclaraciones.

    // ✅ Keep your existing ES “academy / modules / sponsor / submit / etc.” keys here.
      // (Paste your full ES block under this comment — but ensure every line ends with a comma except the last one.)

      
      
    }
  };

  // -----------------------------
  // SAFE ENGINE (yesterday version)
  // -----------------------------
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
    localStorage.setItem("lang", safe); // backward compatibility
    syncSelect(safe);
    applyLang(safe);
  }

  // ✅ Export translator for dynamic strings (academy.js / module.html)
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
