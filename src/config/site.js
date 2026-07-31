/**
 * Single source of truth for site-level identity: canonical URL, practice NAP
 * (name / address / phone) and hours.
 *
 * Used by both the per-route meta tags (`useSeo`) and the JSON-LD structured
 * data, so the two can never drift apart — mismatched NAP between a page and its
 * schema is a common local-SEO problem.
 */

// Apex, no `www`. The sitemap, canonical tags and OG URLs must all agree; the
// old sitemap used www while index.html used the apex, splitting the signal.
export const SITE_URL = "https://srhealthcenter.com";

export const SITE_NAME = "South Royalton Health Center";

export const PRACTICE = {
  name: SITE_NAME,
  legalName: "South Royalton Health Center",
  description:
    "Independent, woman-owned pediatric practice serving newborns through young adults in South Royalton and the greater Upper Valley of Vermont and New Hampshire.",
  telephone: "+1-802-763-7575",
  faxNumber: "+1-844-289-8252",
  address: {
    street: "79 South Windsor Street, PO Box 119",
    locality: "South Royalton",
    region: "VT",
    postalCode: "05068",
    country: "US",
  },
  // Office opens at 8:00; appointments run 9:00–17:00 with a 12:00–13:00 lunch.
  hours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "12:00",
    },
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "13:00",
      closes: "17:00",
    },
  ],
  areaServed: [
    "South Royalton",
    "Bethel",
    "Sharon",
    "Tunbridge",
    "Randolph",
    "Chelsea",
    "Woodstock",
    "Strafford",
    "Norwich",
    "Hartford",
    "Upper Valley",
  ],
  sameAs: ["https://www.facebook.com/southroyaltonhealthcenter/"],
};

/** Dr. Ashley Miller — referenced by the Physician schema and About page. */
export const PHYSICIAN = {
  name: "Ashley Miller, MD, FAAP, DipABLM",
  givenName: "Ashley",
  familyName: "Miller",
  jobTitle: "Pediatrician and Lifestyle Medicine Physician",
  description:
    "Board-certified pediatrician and Lifestyle Medicine physician, owner of South Royalton Health Center, and Clinical Assistant Professor of Pediatrics at the Geisel School of Medicine at Dartmouth.",
  // Third-party profiles and citations — these are what let search engines and
  // AI systems corroborate the practice's expertise.
  sameAs: [
    "https://vtmd.org/ashley-miller",
    "https://geiselmed.dartmouth.edu/students/profile/ashley-miller-md-2/",
    "https://vtdigger.org/2022/03/21/dr-ashley-miller-mental-health-crisis-is-overwhelming-our-primary-care-system/",
    "https://www.vermontpublic.org/local-news/2024-01-31/some-doctors-want-vermont-to-require-insurers-to-cover-weight-loss-drugs-like-ozempic",
    "https://www.ourherald.com/articles/there-is-a-doctor-in-the-house/",
  ],
};

/** Absolute URL for a route path, for canonical/OG tags and sitemap entries. */
export const absoluteUrl = (path = "/") =>
  path === "/" ? SITE_URL : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
