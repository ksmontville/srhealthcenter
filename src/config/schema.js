/**
 * JSON-LD builders.
 *
 * The client's SEO notes asked specifically for MedicalClinic + Physician on the
 * services page and FAQPage on the FAQ. Everything is derived from
 * `config/site.js` so the structured data can't drift from the visible NAP.
 *
 * Note: `geo` coordinates are deliberately omitted rather than guessed —
 * fabricated coordinates are worse than none for local search.
 */
import { SITE_URL, SITE_NAME, PRACTICE, PHYSICIAN, absoluteUrl } from "@/config/site";

const CLINIC_ID = `${SITE_URL}/#clinic`;
const PHYSICIAN_ID = `${SITE_URL}/#physician`;

const postalAddress = () => ({
  "@type": "PostalAddress",
  streetAddress: PRACTICE.address.street,
  addressLocality: PRACTICE.address.locality,
  addressRegion: PRACTICE.address.region,
  postalCode: PRACTICE.address.postalCode,
  addressCountry: PRACTICE.address.country,
});

const openingHours = () =>
  PRACTICE.hours.map((slot) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: slot.days,
    opens: slot.opens,
    closes: slot.closes,
  }));

/** Sitewide practice entity. Emitted once, from App.vue. */
export const clinicSchema = () => ({
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": CLINIC_ID,
  name: PRACTICE.name,
  legalName: PRACTICE.legalName,
  description: PRACTICE.description,
  url: SITE_URL,
  telephone: PRACTICE.telephone,
  faxNumber: PRACTICE.faxNumber,
  address: postalAddress(),
  openingHoursSpecification: openingHours(),
  medicalSpecialty: "Pediatric",
  areaServed: PRACTICE.areaServed.map((name) => ({ "@type": "Place", name })),
  sameAs: PRACTICE.sameAs,
  logo: absoluteUrl("/srhc-logo-white.png"),
  image: absoluteUrl("/srhc-logo-white.png"),
});

/** Dr. Ashley Miller. `sameAs` is what corroborates expertise to search/AI. */
export const physicianSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": PHYSICIAN_ID,
  name: PHYSICIAN.name,
  givenName: PHYSICIAN.givenName,
  familyName: PHYSICIAN.familyName,
  jobTitle: PHYSICIAN.jobTitle,
  description: PHYSICIAN.description,
  medicalSpecialty: "Pediatric",
  worksFor: { "@id": CLINIC_ID },
  address: postalAddress(),
  telephone: PRACTICE.telephone,
  sameAs: PHYSICIAN.sameAs,
});

/**
 * FAQPage. `answerText` must match what the page renders, or Google flags the
 * markup as mismatched — hence the shared `*AnswerText` helpers in the data
 * modules rather than a second copy of the copy.
 */
export const faqPageSchema = (items, answerFor) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answerFor(item),
    },
  })),
});

/** A page describing services offered by the clinic. */
export const medicalWebPageSchema = ({ path, name, description, services = [] }) => ({
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "@id": `${absoluteUrl(path)}#webpage`,
  url: absoluteUrl(path),
  name,
  description,
  isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
  about: { "@id": CLINIC_ID },
  ...(services.length && {
    mainEntity: services.map((service) => ({
      "@type": "MedicalProcedure",
      name: service,
      provider: { "@id": CLINIC_ID },
    })),
  }),
});

/** Breadcrumb trail, e.g. Home › Services › Auricular Acupuncture. */
export const breadcrumbSchema = (trail) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map((crumb, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: crumb.name,
    item: absoluteUrl(crumb.path),
  })),
});
