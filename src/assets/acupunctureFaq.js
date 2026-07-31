/**
 * Auricular Acupuncture Q&A — South Royalton Health Center
 *
 * Source: client document "website edits.docx" (2026-07). The client asked for these
 * to be click-to-expand "but still be SEO/AI optimized? So html not java?" — hence the
 * native <details>/<summary> accordion, which keeps every answer in the DOM.
 *
 * Same contract as faq.js: `answer` is plain text reused verbatim in FAQPage JSON-LD.
 */

export const acupunctureFaqItems = [
  {
    id: "what-is-it",
    question: "What is auricular acupuncture?",
    answer:
      "Auricular acupuncture is an evidence-based therapy that uses tiny needles or ear seeds on carefully selected points on the outer ear to support the body's natural healing response. The ear contains nerve pathways connected with the nervous system, and stimulating these points may help support the body's regulation of pain, stress response, sleep, and overall balance.\n\nEvery treatment is individualized by Dr. Ashley based on your child's medical history, symptoms, and goals.",
  },
  {
    id: "what-can-it-help",
    question: "What can auricular acupuncture help support?",
    answer:
      "Auricular acupuncture may be recommended as part of a comprehensive treatment plan for children and teens experiencing:",
    bullets: [
      "Anxiety and stress",
      "ADHD symptoms",
      "Sleep concerns",
      "Headaches and migraines",
      "Sports injuries and chronic pain",
      "Concussion recovery",
      "Functional abdominal pain or nausea",
      "Emotional regulation",
      "Weight regulation",
      "Overall wellness",
    ],
    closing:
      "Treatment recommendations are individualized and may be used alongside traditional pediatric care, Lifestyle Medicine, behavioral health services, physical therapy, nutrition counseling, or other treatments when appropriate.",
    links: [
      { label: "Integrative pediatric care", to: "/integrative-pediatric-care" },
      { label: "All pediatric services", to: "/our-mission-and-services" },
    ],
  },
  {
    id: "why-srhc",
    question: "Why choose South Royalton Health Center?",
    answer:
      "Auricular acupuncture at South Royalton Health Center is integrated into your child's overall pediatric care. Families appreciate that Dr. Ashley:",
    bullets: [
      "Is a board-certified pediatrician with additional training in auricular acupuncture",
      "Knows your child's medical history",
      "Coordinates care with therapists, specialists, athletic trainers, and schools when appropriate",
      "Integrates acupuncture into an evidence-based pediatric treatment plan",
      "Provides comprehensive medical care before, during, and after treatment",
    ],
    closing:
      "Our goal is not to replace traditional medical care — it is to provide another tool that may help children and teens feel their best.",
  },
  {
    id: "what-happens",
    question: "What happens during a visit?",
    answer:
      "Your child's first auricular acupuncture visit lasts approximately 45 minutes. During the visit, Dr. Ashley will:",
    bullets: [
      "Review your child's medical history",
      "Discuss your child's symptoms and goals",
      "Explain how auricular acupuncture works",
      "Review the potential benefits, risks, and alternatives",
      "Answer your questions",
      "Provide treatment, if appropriate and desired",
    ],
    closing:
      "Parents and caregivers are encouraged to participate throughout the visit. Children and teens are included in discussions and supported in making healthcare decisions at a developmentally appropriate level.",
  },
  {
    id: "does-it-hurt",
    question: "Does auricular acupuncture hurt?",
    answer:
      "Most children and teens tolerate auricular acupuncture very well. The needles are extremely thin — much thinner than typical medical needles. Some children notice a brief pinch, mild tingling, warmth, or little sensation at all. Depending on the treatment plan, small ear seeds may also be used instead of or in addition to needles.\n\nMany patients find treatment calming and relaxing, and treatment can be paused or stopped at any time.",
  },
  {
    id: "is-it-safe",
    question: "Is auricular acupuncture safe?",
    answer:
      "When performed by a trained clinician using sterile, single-use needles, auricular acupuncture is generally considered safe for children and adolescents. Possible side effects include:",
    bullets: [
      "Mild soreness",
      "Small amounts of bruising or bleeding",
      "Temporary dizziness or lightheadedness",
      "Rare infection",
    ],
    closing:
      "Before treatment, Dr. Ashley will review your child's medical history and discuss whether auricular acupuncture is an appropriate option.",
  },
  {
    id: "how-many-treatments",
    question: "How many treatments will my child need?",
    answer:
      "Every child's treatment plan is individualized. Many children begin with weekly treatments for approximately three weeks. Some concerns, particularly chronic conditions or certain mental health goals, may benefit from weekly treatments for eight weeks or longer.\n\nRecommendations are based on your child's symptoms, goals, and response to treatment.",
  },
  {
    id: "cost-insurance",
    question: "What does it cost, and is it covered by insurance?",
    answer:
      "Currently, your child's first auricular acupuncture treatment is included with their office visit. Future treatments will be offered as a separate self-pay service. Families will:",
    bullets: [
      "Pay at the time of scheduling",
      "Receive a superbill for insurance submission on request",
      "Be able to submit the superbill to their insurance company for possible reimbursement",
    ],
    closing:
      "Insurance coverage varies by plan, and reimbursement cannot be guaranteed.",
    links: [{ label: "Billing and insurance questions", to: "/faq" }],
  },
];

/**
 * Flattens an item to the single plain-text answer FAQPage schema expects,
 * including display-only bullets and closing copy so the markup matches the page.
 */
export const acupunctureAnswerText = (item) =>
  [item.answer, ...(item.bullets ?? []), item.closing]
    .filter(Boolean)
    .join("\n\n");

export default acupunctureFaqItems;
