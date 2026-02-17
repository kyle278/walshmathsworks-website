/** Page key constants */
export const PAGE = {
  HOME: "home",
  ITINERARY: "itinerary",
  BOOK: "book",
  CONTACT: "contact",
  PRIVACY: "privacy",
  TERMS: "terms",
} as const;

/** Section key constants per page */
export const SECTION = {
  HOME: {
    HERO: "hero",
    EMPATHY: "empathy",
    HOW_IT_WORKS: "how_it_works",
    VALUE_PROP: "value_prop",
    GROUPS: "groups",
    TESTIMONIALS: "testimonials",
    FAQ: "faq",
    FINAL_CTA: "final_cta",
  },
  ITINERARY: {
    HEADER: "header",
    PAPER_1: "paper_1",
    PAPER_2: "paper_2",
    CTA: "cta",
  },
  BOOK: {
    HEADER: "header",
    FORM: "form",
  },
  CONTACT: {
    HEADER: "header",
    FORM: "form",
    DETAILS: "details",
  },
} as const;

/** Block key constants */
export const BLOCK = {
  HEADLINE: "headline",
  SUBHEADLINE: "subheadline",
  BODY: "body",
  CTA_TEXT: "cta_text",
  CTA_SECONDARY: "cta_secondary",
  DESCRIPTION: "description",
  QUOTE: "quote",
} as const;
