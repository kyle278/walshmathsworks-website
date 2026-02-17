import { Session } from "@/lib/types";

export const sessions: Session[] = [
  {
    id: "algebra-1",
    topic: "Algebra 1",
    paper: 1,
    sessionNumber: 1,
    date: "19th March",
    isoDate: "2026-03-19",
    description:
      "Basics, evaluation, solving & rearranging. The foundation everything else builds on.",
    groupA: { price: 45, time: "10:00am - 1:00pm", duration: "3 hours" },
    groupB: { price: 30, time: "1:30pm - 3:30pm", duration: "2 hours" },
  },
  {
    id: "number-systems",
    topic: "Number Systems",
    paper: 1,
    sessionNumber: 2,
    date: "26th March",
    isoDate: "2026-03-26",
    description:
      "Number sets (N, Z, Q, R, R\\Q), standard notation, surds, indices, HCF & LCM.",
    groupA: { price: 45, time: "10:00am - 1:00pm", duration: "3 hours" },
    groupB: { price: 30, time: "1:30pm - 3:30pm", duration: "2 hours" },
  },
  {
    id: "algebra-2",
    topic: "Algebra 2",
    paper: 1,
    sessionNumber: 3,
    date: "2nd April",
    isoDate: "2026-04-02",
    description:
      "Simultaneous equations, factorising, algebraic fractions.",
    groupA: { price: 45, time: "10:00am - 1:00pm", duration: "3 hours" },
    groupB: { price: 30, time: "1:30pm - 3:30pm", duration: "2 hours" },
  },
  {
    id: "complex-numbers",
    topic: "Complex Numbers",
    paper: 1,
    sessionNumber: 4,
    date: "9th April",
    isoDate: "2026-04-09",
    description:
      "Plotting, adding, modulus, multiplying, conjugates.",
    groupA: { price: 45, time: "10:00am - 1:00pm", duration: "3 hours" },
    groupB: { price: 30, time: "1:30pm - 3:30pm", duration: "2 hours" },
  },
  {
    id: "arithmetic",
    topic: "Arithmetic",
    paper: 1,
    sessionNumber: 5,
    date: "16th April",
    isoDate: "2026-04-16",
    description:
      "VAT, compound interest, ratio, currency, income tax & pay, speed.",
    groupA: { price: 45, time: "10:00am - 1:00pm", duration: "3 hours" },
    groupB: { price: 30, time: "1:30pm - 3:30pm", duration: "2 hours" },
  },
  {
    id: "sequences",
    topic: "Sequences",
    paper: 1,
    sessionNumber: 6,
    date: "23rd April",
    isoDate: "2026-04-23",
    description: "Arithmetic, geometric & other sequences.",
    groupA: { price: 45, time: "10:00am - 1:00pm", duration: "3 hours" },
    groupB: { price: 30, time: "1:30pm - 3:30pm", duration: "2 hours" },
  },
  {
    id: "functions-graphs",
    topic: "Functions & Graphs",
    paper: 1,
    sessionNumber: 7,
    date: "30th April",
    isoDate: "2026-04-30",
    description:
      "Linear, quadratic, cubic, exponential functions and transformations.",
    groupA: { price: 45, time: "10:00am - 1:00pm", duration: "3 hours" },
    groupB: { price: 30, time: "1:30pm - 3:30pm", duration: "2 hours" },
  },
  {
    id: "calculus",
    topic: "Calculus",
    paper: 1,
    sessionNumber: 8,
    date: "7th May",
    isoDate: "2026-05-07",
    description:
      "Slope and rate of change, rules for differentiation, the second derivative.",
    groupA: { price: 45, time: "10:00am - 1:00pm", duration: "3 hours" },
    groupB: { price: 30, time: "1:30pm - 3:30pm", duration: "2 hours" },
  },
  {
    id: "line-and-circle",
    topic: "The Line & Circle",
    paper: 2,
    sessionNumber: 9,
    date: "14th May",
    isoDate: "2026-05-14",
    description:
      "Length, slope and equation of a line. Area of a triangle. Two forms of circle equation.",
    groupA: { price: 45, time: "10:00am - 1:00pm", duration: "3 hours" },
    groupB: { price: 30, time: "1:30pm - 3:30pm", duration: "2 hours" },
  },
  {
    id: "trigonometry",
    topic: "Trigonometry",
    paper: 2,
    sessionNumber: 10,
    date: "21st May",
    isoDate: "2026-05-21",
    description:
      "Solving right-angled and non-right-angled triangles. Pythagoras theorem, sine & cosine rules.",
    groupA: { price: 45, time: "10:00am - 1:00pm", duration: "3 hours" },
    groupB: { price: 30, time: "1:30pm - 3:30pm", duration: "2 hours" },
  },
  {
    id: "length-area-volume",
    topic: "Length, Area & Volume",
    paper: 2,
    sessionNumber: 11,
    date: "26th May",
    isoDate: "2026-05-26",
    description:
      "Plane figures, area formulae, nets, surface area & volume.",
    groupA: { price: 45, time: "10:00am - 1:00pm", duration: "3 hours" },
    groupB: { price: 30, time: "1:30pm - 3:30pm", duration: "2 hours" },
  },
  {
    id: "probability",
    topic: "Probability",
    paper: 2,
    sessionNumber: 12,
    date: "4th June",
    isoDate: "2026-06-04",
    description:
      "Basic concepts, probability scale, factorials & permutations.",
    groupA: { price: 45, time: "10:00am - 1:00pm", duration: "3 hours" },
    groupB: { price: 30, time: "1:30pm - 3:30pm", duration: "2 hours" },
  },
];

export const paper1Sessions = sessions.filter((s) => s.paper === 1);
export const paper2Sessions = sessions.filter((s) => s.paper === 2);
