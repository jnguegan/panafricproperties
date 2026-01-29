/* modules.js — module content + quiz questions (v1) */

const MODULES = [
  {
    id: 1,
    titleKey: "module.1.title",
    title: "Introduction to PanAfric Properties",
    reading: [
      "PanAfric Properties is a diaspora-first marketplace connecting Africans worldwide to verified property opportunities back home.",
      "Our model scales through local franchise partners trained, certified, and governed under a trust & compliance framework.",
      "Partners protect buyers by following verification standards, ethical conduct, and platform processes."
    ],
    quiz: [
      {
        q: "What is the core purpose of PanAfric Properties?",
        options: [
          "Selling random properties with no checks",
          "Connecting diaspora buyers to verified African real estate opportunities",
          "Only listing properties from one country"
        ],
        answerIndex: 1
      },
      {
        q: "Who can apply to become a partner?",
        options: [
          "Only licensed real estate agents",
          "Only people with university degrees",
          "Graduates, non-graduates, and unemployed professionals with ambition"
        ],
        answerIndex: 2
      },
      {
        q: "What is required before a partner operates under the brand?",
        options: [
          "Nothing, they can start immediately",
          "Training, in-house certification, and compliance onboarding",
          "Only a social media account"
        ],
        answerIndex: 1
      }
    ]
  },

  {
    id: 2,
    titleKey: "module.2.title",
    title: "Real Estate Basics",
    reading: [
      "Understand asset types: land, homes, and projects (developments).",
      "Learn basic valuation drivers: location, access, utilities, legal status, demand, and comparable pricing.",
      "Know the transaction flow: inquiry → viewing/due diligence → offer → agreement → payment milestones → completion."
    ],
    quiz: [
      {
        q: "Which is NOT a typical listing type on PanAfric Properties?",
        options: ["Land", "Homes", "Used cars"],
        answerIndex: 2
      },
      {
        q: "Which factor most strongly impacts value in many markets?",
        options: ["Location and access", "Wallpaper color", "Phone brand"],
        answerIndex: 0
      },
      {
        q: "What is the correct flow?",
        options: [
          "Payment → inquiry → due diligence → completion",
          "Inquiry → due diligence → agreement → milestones → completion",
          "Completion → inquiry → payment"
        ],
        answerIndex: 1
      }
    ]
  },

  {
    id: 3,
    titleKey: "module.3.title",
    title: "Due Diligence & Verification",
    reading: [
      "Verification protects buyers and the brand. Always confirm ownership/title chain, documentation authenticity, and seller/developer credibility.",
      "Red flags: inconsistent names, missing documents, pressure tactics, unclear boundaries, unpaid taxes/encumbrances, unverifiable seller identity.",
      "Only publish listings that meet minimum documentation requirements and can be independently checked."
    ],
    quiz: [
      {
        q: "Why is due diligence critical?",
        options: ["To slow down the buyer", "To protect clients and platform trust", "To make listings look longer"],
        answerIndex: 1
      },
      {
        q: "Which is a red flag?",
        options: ["Clear title documents", "Pressure to pay immediately", "Verifiable seller identity"],
        answerIndex: 1
      },
      {
        q: "When should a listing be published?",
        options: ["Before documents are reviewed", "Only after minimum verification checks", "Only after it is sold"],
        answerIndex: 1
      }
    ]
  },

  {
    id: 4,
    titleKey: "module.4.title",
    title: "Client Handling & Ethics",
    reading: [
      "Your role is to guide and protect the buyer with professionalism, transparency, and accurate information.",
      "Never misrepresent ownership, pricing, legal status, or timelines.",
      "Keep written records of key steps and disclosures."
    ],
    quiz: [
      {
        q: "What is the best approach with a buyer?",
        options: ["Promise anything to close quickly", "Be transparent and accurate", "Hide risks to avoid questions"],
        answerIndex: 1
      },
      {
        q: "Ethics requires you to:",
        options: ["Misrepresent details", "Disclose material risks", "Skip documentation"],
        answerIndex: 1
      },
      {
        q: "Good practice includes:",
        options: ["No records", "Written confirmations of key steps", "Only verbal agreements"],
        answerIndex: 1
      }
    ]
  },

  {
    id: 5,
    titleKey: "module.5.title",
    title: "Diaspora Buyer Expectations",
    reading: [
      "Diaspora buyers value safety, proof, clarity, and predictable steps because they are buying remotely.",
      "Communication must be proactive, structured, and respectful—include photos, documents, and process updates.",
      "Trust is your strongest asset: never rush or pressure."
    ],
    quiz: [
      {
        q: "Diaspora buyers care most about:",
        options: ["Fast pressure tactics", "Safety and proof", "Rumors"],
        answerIndex: 1
      },
      {
        q: "Best communication style is:",
        options: ["Proactive and structured", "Silent until closing", "Aggressive"],
        answerIndex: 0
      },
      {
        q: "What should you avoid?",
        options: ["Verification", "Pressure and rushing", "Document checks"],
        answerIndex: 1
      }
    ]
  },

  {
    id: 6,
    titleKey: "module.6.title",
    title: "Listing & Platform Processes",
    reading: [
      "Listings must meet documentation standards and include clear photos, accurate location, and pricing transparency.",
      "Use consistent templates for listing descriptions and ensure details can be verified.",
      "Only accept listings from sources you can validate (owner/developer/authorized representative)."
    ],
    quiz: [
      {
        q: "A listing should include:",
        options: ["Unclear photos", "Accurate details and documentation", "No price"],
        answerIndex: 1
      },
      {
        q: "You should accept listings from:",
        options: ["Anyone with a story", "Sources you can validate", "Anonymous senders only"],
        answerIndex: 1
      },
      {
        q: "Why use templates/standards?",
        options: ["To reduce clarity", "To ensure consistency and trust", "To hide information"],
        answerIndex: 1
      }
    ]
  },

  {
    id: 7,
    titleKey: "module.7.title",
    title: "Legal Literacy (Basics)",
    reading: [
      "Understand basic concepts: contracts, agency relationships, ownership transfer, and the role of legal professionals.",
      "Do not give legal advice—facilitate access to verified legal counsel and ensure documentation is reviewed properly.",
      "Record milestones and require written confirmations."
    ],
    quiz: [
      {
        q: "A partner should:",
        options: ["Give legal advice", "Facilitate proper legal review", "Ignore contracts"],
        answerIndex: 1
      },
      {
        q: "Contracts should be:",
        options: ["Verbal only", "Written and reviewed", "Avoided"],
        answerIndex: 1
      },
      {
        q: "Milestones should be:",
        options: ["Untracked", "Recorded with confirmations", "Guessed"],
        answerIndex: 1
      }
    ]
  },

  {
    id: 8,
    titleKey: "module.8.title",
    title: "Closing Transactions",
    reading: [
      "Closing is the controlled process of completing the sale with verified documents, agreed milestones, and confirmed payments.",
      "Keep the buyer informed at every step and confirm completion criteria before final payment.",
      "Document handover and confirmations protect all parties."
    ],
    quiz: [
      {
        q: "Final payment should happen:",
        options: ["Before documents are confirmed", "After agreed completion criteria are met", "At random"],
        answerIndex: 1
      },
      {
        q: "Buyer updates should be:",
        options: ["Rare", "Proactive and clear", "Only after issues happen"],
        answerIndex: 1
      },
      {
        q: "Handover should be:",
        options: ["Undocumented", "Confirmed and recorded", "Skipped"],
        answerIndex: 1
      }
    ]
  },

  {
    id: 9,
    titleKey: "module.9.title",
    title: "Compliance & Reporting",
    reading: [
      "Compliance maintains platform integrity: follow verification rules, ethical standards, and reporting requirements.",
      "Report issues, disputes, and red flags early to protect buyers and the brand.",
      "Consistent compliance is required to keep certification active."
    ],
    quiz: [
      {
        q: "Compliance exists to:",
        options: ["Slow growth", "Protect clients and brand trust", "Avoid transparency"],
        answerIndex: 1
      },
      {
        q: "If you spot a red flag you should:",
        options: ["Ignore it", "Report early and document", "Publish anyway"],
        answerIndex: 1
      },
      {
        q: "Certification stays active through:",
        options: ["Ongoing compliance", "No standards", "Silence"],
        answerIndex: 0
      }
    ]
  }
];

const TOTAL_MODULES = MODULES.length;
window.MODULES = MODULES;
window.TOTAL_MODULES = TOTAL_MODULES;
