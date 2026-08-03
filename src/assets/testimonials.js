/**
 * Patient testimonials.
 *
 * Extracted from TestimonialCards.vue so the home page and the dedicated
 * testimonials page render the same source. The home page shows the first
 * `HOME_TESTIMONIAL_COUNT` and links onward; the page shows all of them.
 *
 * Note on structured data: these are deliberately *not* marked up as
 * schema.org Review/AggregateRating. Google's structured-data policy excludes
 * self-serving reviews — reviews about a business, collected and hosted by that
 * business — from review rich results, so the markup would earn no stars and
 * risks a manual action. The plain text is still fully indexable, which is what
 * matters for AI assistants answering "what do patients say about this practice".
 */

export const testimonials = [
  {
    id: 0,
    name: "Laura DiCicco",
    role: "Parent",
    text:
      "Everyone here cares about my kids, knows how to connect with them, and answers hundreds of questions for me. " +
      "It is the sweetest small practice, and we love Dr Ashley and Sabra!",
  },
  {
    id: 1,
    name: "Monique Braman",
    role: "Parent",
    text: "Dr. Ashley is an amazing person who cares deeply about her patients and families. She takes her time and is just wonderful. We are lucky to have her!",
  },
  {
    id: 2,
    name: "Rachel Chapin",
    role: "Parent",
    text: "The staff are amazing and patient. They all care about my son and his needs listens to my concerns as well. Been bringing my son for over 5 years.",
  },
  {
    id: 3,
    name: "Mary Etna Haac",
    role: "Parent",
    text: "Wonderful experience! Dr. Miller was attentive and helped my nervous 2 -yr old feel comfortable. We did not feel rushed and felt the space to ask questions comfortably.",
  },
];

/** How many appear in the home page strip before "read all". */
export const HOME_TESTIMONIAL_COUNT = 3;
