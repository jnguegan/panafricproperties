/* modules.js — PanAfric Properties
   IMPORTANT:
   - This file MUST be JavaScript (not HTML)
   - Loaded before academy.js
   - Defines window.MODULES
*/

window.MODULES = [

  {
    id: 1,

    // English text (never removed)
    title: "Introduction to PanAfric Properties",
    titleKey: "academy.m1.title",

    reading: [
      "Welcome to the PanAfric Properties Partner Academy.",
      "This module introduces the mission, values, and expectations for partners using the platform.",
      "Understanding these fundamentals ensures consistency, trust, and professionalism across all listings."
    ],
    readingKeys: [
      "academy.m1.r1",
      "academy.m1.r2",
      "academy.m1.r3"
    ],

    quiz: [
      {
        q: "What is the goal of PanAfric Properties?",
        qKey: "academy.m1.q1",
        options: [
          "To promote verified real estate opportunities across Africa",
          "To allow any unverified property to be listed",
          "To replace traditional agents entirely"
        ],
        optionKeys: [
          "academy.m1.q1.a",
          "academy.m1.q1.b",
          "academy.m1.q1.c"
        ],
        answerIndex: 0
      }
    ]
  },

  {
    id: 2,

    title: "Trust & Verification Standards",
    titleKey: "academy.m2.title",

    reading: [
      "Trust is the foundation of successful property transactions.",
      "Partners must verify listings before publishing them on the platform.",
      "Providing accurate and transparent information protects both buyers and sellers."
    ],
    readingKeys: [
      "academy.m2.r1",
      "academy.m2.r2",
      "academy.m2.r3"
    ],

    quiz: [
      {
        q: "Why is verification important?",
        qKey: "academy.m2.q1",
        options: [
          "It increases trust and protects all parties",
          "It slows down the listing process unnecessarily",
          "It is optional and not recommended"
        ],
        optionKeys: [
          "academy.m2.q1.a",
          "academy.m2.q1.b",
          "academy.m2.q1.c"
        ],
        answerIndex: 0
      }
    ]
  },

  {
    id: 3,

    title: "Professional Conduct & Ethics",
    titleKey: "academy.m3.title",

    reading: [
      "Professionalism is essential when interacting with clients and partners.",
      "All communication should be clear, respectful, and honest.",
      "Maintaining ethical standards strengthens the PanAfric Properties network."
    ],
    readingKeys: [
      "academy.m3.r1",
      "academy.m3.r2",
      "academy.m3.r3"
    ],

    quiz: [
      {
        q: "What is a key principle of professional conduct?",
        qKey: "academy.m3.q1",
        options: [
          "Transparency and honesty",
          "Hiding important information",
          "Prioritising speed over accuracy"
        ],
        optionKeys: [
          "academy.m3.q1.a",
          "academy.m3.q1.b",
          "academy.m3.q1.c"
        ],
        answerIndex: 0
      }
    ]
  }

];
