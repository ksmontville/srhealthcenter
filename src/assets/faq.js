/**
 * Frequently Asked Questions — South Royalton Health Center
 *
 * Source: client document "Services_FAQ.docx" (2026-07), plus the Appointments /
 * Insurance & Billing / Payment Options copy absorbed from the retired Office
 * Details page.
 *
 * `answer` is authored as plain text (blank line = paragraph break) so the exact
 * wording can be reused verbatim in FAQPage JSON-LD. Google flags structured data
 * whose answer text does not match what is rendered, so keep these in sync and put
 * anything display-only in `bullets` / `links`.
 */

export const faqItems = [
  {
    id: "new-patients",
    question: "Are you accepting new pediatric patients?",
    answer:
      "Yes! We welcome new patients from birth through young adulthood and proudly care for families throughout the Upper Valley of Vermont and New Hampshire.",
    links: [
      { label: "New patient information", to: "/new-patients" },
      { label: "New patient forms", to: "/patient-forms" },
    ],
  },
  {
    id: "schedule",
    question: "How do I schedule an appointment?",
    answer:
      "You can schedule an appointment by calling or texting our office during business hours or by requesting an appointment through the Patient Portal. Our team will help you find the visit type and appointment time that best meets your child's needs.\n\nWe also offer appointments at several of the surrounding schools, so please ask if that would be a good fit for your child.",
    links: [
      { label: "Patient Portal", to: "/patient-portal" },
      { label: "School-based visits", to: "/school-visits" },
    ],
  },
  {
    id: "insurance",
    question: "Do you accept my insurance?",
    answer:
      "We accept most major commercial insurance plans and Vermont Medicaid. We do not participate with Medicare or Medicaid plans from other states.\n\nIf you don't have insurance or have a high-deductible health plan, we offer affordable self-pay options, including same-day visit rates that are usually lower by half or more than hospital-based practices because we do not charge facility fees. We also work with families to identify lower-cost options for laboratory testing through independent labs whenever possible.",
    links: [{ label: "Contact us about coverage", to: "/contact" }],
  },
  {
    id: "payment",
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, checks, credit cards, and payments through the Patient Portal. We also offer a flexible payment plan.\n\nIf you have questions about your bill or need to discuss payment options, please contact our office — we're happy to help.",
    links: [
      { label: "Pay through the Patient Portal", to: "/patient-portal" },
      { label: "Contact us", to: "/contact" },
    ],
  },
  {
    id: "first-appointment",
    question: "What should I bring to my child's first appointment?",
    answer:
      "Please bring your insurance card, make sure you have completed the online new patient forms, and bring your child's immunization records (if they have not already been sent), a list of current medications, vitamins, or supplements, and any questions or concerns you'd like to discuss with your clinician.",
    links: [
      { label: "New patient forms", to: "/patient-forms" },
      { label: "Preparing for your first visit", to: "/new-patients" },
    ],
  },
  {
    id: "contact",
    question: "How can I contact the office with questions?",
    answer: "We want it to be easy to reach us.",
    bullets: [
      "Call our office for appointments, urgent concerns, or to speak with a member of our team (including after hours).",
      "Send a secure message through the Patient Portal for non-urgent medical questions, medication refill requests, forms, and follow-up with your team.",
      "Text our office for non-medical questions such as scheduling, insurance or billing questions, referrals, forms, or general office information.",
    ],
    links: [
      { label: "Call (802) 763-7575", href: "tel:8027637575" },
      { label: "Patient Portal", to: "/patient-portal" },
    ],
  },
  {
    id: "same-day",
    question: "Do you provide same-day sick appointments?",
    answer:
      "Yes. We offer same-day appointments for acute illnesses and injuries, helping your child receive timely care from the pediatric team who knows them best and avoiding urgent care and the emergency room.",
    links: [{ label: "See all our services", to: "/our-mission-and-services" }],
  },
  {
    id: "telehealth",
    question: "Do you offer telehealth appointments?",
    answer:
      "Yes. We offer telehealth appointments for many types of visits, including selected acute illnesses, behavioral health follow-up, medication management, and other concerns when appropriate. Telehealth can also complement our after-hours phone consultations for established patients.",
  },
  {
    id: "after-hours",
    question: "How do I contact the office after hours?",
    answer:
      "If your child becomes ill after our office is closed, our on-call pediatric team is available by phone for urgent medical concerns. If you believe your child is experiencing a life-threatening emergency, call 911 or go to your nearest emergency department immediately.",
    links: [{ label: "Call (802) 763-7575", href: "tel:8027637575" }],
  },
  {
    id: "newborns",
    question: "Do you care for newborns?",
    answer:
      "Absolutely. We provide complimentary prenatal \"Meet Your Pediatrician\" visits, newborn care, lactation consultation, infant feeding support, developmental monitoring, and ongoing well-child care from infancy through young adulthood.",
    links: [{ label: "So, you're expecting?", to: "/expecting" }],
  },
  {
    id: "mental-health",
    question: "Do you treat ADHD, anxiety, and other mental health conditions?",
    answer:
      "Yes. We provide comprehensive evaluation and ongoing care for ADHD, anxiety, depression, obsessive-compulsive disorder (OCD), post-traumatic stress disorder (PTSD), eating disorders, and other common pediatric mental health conditions. Treatment may include behavioral support, Lifestyle Medicine counseling, medication management, auricular acupuncture, and close collaboration with families, schools, therapists, and other specialists.",
    links: [
      { label: "ADHD & behavioral health care", to: "/our-mission-and-services" },
      { label: "Lifestyle Medicine", to: "/integrative-pediatric-care" },
      { label: "Auricular acupuncture", to: "/auricular-acupuncture" },
    ],
  },
  {
    id: "nutrition",
    question: "Do you help children with nutrition and healthy weight?",
    answer:
      "Yes. We provide nutrition counseling, Lifestyle Medicine, and comprehensive evidence-based pediatric obesity care. Our approach focuses on building sustainable healthy habits through personalized nutrition, physical activity, restorative sleep, and behavioral support. For children who may benefit, we also offer evidence-based prescription medications and auricular acupuncture as part of an individualized treatment plan.",
    links: [
      { label: "Integrative pediatric care", to: "/integrative-pediatric-care" },
      { label: "Auricular acupuncture", to: "/auricular-acupuncture" },
    ],
  },
  {
    id: "school-meetings",
    question: "Do you attend school meetings?",
    answer:
      "Yes. When appropriate, we participate in 504 Plan and IEP meetings, communicate with teachers and school staff, and help coordinate services that support your child's success at school.",
    links: [{ label: "School-based healthcare with HealthHubVT", to: "/school-visits" }],
  },
  {
    id: "sports-physicals",
    question: "Do you offer sports physicals?",
    answer:
      "Yes. We provide school, sports, and camp physicals throughout the year. Many sports physicals can be completed during your child's annual preventive well visit.",
  },
  {
    id: "integrative",
    question: "Do you offer integrative pediatric care?",
    answer:
      "Yes. South Royalton Health Center incorporates evidence-based integrative pediatric care and Lifestyle Medicine into traditional pediatric practice. We work with families to promote healthy nutrition, physical activity, restorative sleep, stress management, and other healthy lifestyle habits as part of comprehensive, whole-child pediatric care.\n\nDr. Ashley also offers auricular acupuncture, an evidence-based therapy that may be used alongside traditional pediatric care to support children and adolescents with concerns such as anxiety, ADHD symptoms, headaches, pain, sleep concerns, emotional regulation, injury recovery, and overall wellness. Families can discuss whether this treatment may be appropriate for their child's individualized care plan during their visit.",
    links: [
      { label: "Integrative pediatric care", to: "/integrative-pediatric-care" },
      { label: "Auricular acupuncture", to: "/auricular-acupuncture" },
    ],
  },
];

/**
 * Flattens an item to the single plain-text answer FAQPage schema expects,
 * including any display-only bullets so the markup matches what visitors read.
 */
export const faqAnswerText = (item) =>
  [item.answer, ...(item.bullets ?? [])].join("\n\n");

export default faqItems;
