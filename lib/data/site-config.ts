export const siteConfig = {
  name: "Walsh Maths Works",
  tagline: "Leaving Cert Maths Tuition in Carlow",
  year: 2026,

  tutor: {
    name: "Tom Walsh",
    phone: "087 236 5324",
    phoneHref: "tel:+353872365324",
    email: "walshwpm@gmail.com",
    emailHref: "mailto:walshwpm@gmail.com",
    experience: "25+",
    successRate: "100%",
    bio: "Over 25 years tuition experience with a 100% success rate. In my engineering career I have used Maths to solve a wide range of problems. I adopt an open and interactive approach where there is no such thing as a 'Stupid Question'.",
    quote:
      "I adopt an open and interactive approach where there is no such thing as a 'Stupid Question'.",
  },

  venue: {
    name: "Talbot Hotel",
    town: "Carlow",
    full: "Talbot Hotel, Carlow",
    mapUrl:
      "https://www.google.com/maps/place/Talbot+Hotel+Carlow/@52.8366,-6.9262,17z",
  },

  groups: {
    a: {
      label: "Group A",
      slug: "group-a",
      subtitle: "Deep Dive",
      time: "Saturdays 10:00am - 1:00pm",
      duration: "3 hours",
      pricePerSession: 45,
      totalSessions: 12,
      description:
        "Comprehensive 3-hour deep dive sessions ideal for students who found the mocks challenging and need thorough coverage of each topic.",
      couponCode: "RQGXEKET",
      couponDiscount: 90,
    },
    b: {
      label: "Group B",
      slug: "group-b",
      subtitle: "Targeted Revision",
      time: "Saturdays 1:30pm - 3:30pm",
      duration: "2 hours",
      pricePerSession: 30,
      totalSessions: 12,
      description:
        "Focused 2-hour targeted revision sessions for students who did okay in mocks but want to solidify weaker areas and push for a higher grade.",
      couponCode: "7UCCPFBV",
      couponDiscount: 60,
    },
  },

  policies: {
    minStudents: 5,
    refundPolicy:
      "Full refund or alternative date if minimum class size is not met.",
    dateChangePolicy: "Dates may change with advance notice.",
  },
} as const;
