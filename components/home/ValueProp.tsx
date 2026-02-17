import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/data/site-config";

const values = [
  {
    title: "Engineering Precision",
    description:
      "Tom's engineering career means he doesn't just teach formulas — he teaches you why they work and how to apply them under exam pressure.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "No Stupid Questions",
    description:
      "An open, interactive approach where every question is welcomed. If you're confused, you're in the right place.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "100% Success Rate",
    description:
      "Every student who has completed the programme has passed. That's not marketing — that's 25 years of results.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Exam-Focused Preparation",
    description:
      "Every session is mapped directly to Leaving Cert exam topics. No wasted time, no off-syllabus tangents.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
];

export default function ValueProp() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Value points */}
          <div>
            <SectionHeading
              eyebrow="Why Choose Tom"
              title="Why Walsh Maths Works"
              centered={false}
            />
            <div className="space-y-6">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-green-light rounded-xl flex items-center justify-center text-green">
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-lg mb-1">
                      {v.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quote card */}
          <div className="relative">
            <div className="bg-off-white rounded-2xl p-8 sm:p-10 border border-slate-200">
              <svg
                className="w-12 h-12 text-green/20 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
              </svg>
              <blockquote className="text-xl sm:text-2xl font-medium text-navy leading-relaxed mb-6">
                &ldquo;{siteConfig.tutor.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">TW</span>
                </div>
                <div>
                  <p className="font-semibold text-navy">{siteConfig.tutor.name}</p>
                  <p className="text-sm text-slate-400">
                    Engineer &amp; Maths Tutor
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-green/5 rounded-2xl" />
          </div>
        </div>
      </Container>
    </section>
  );
}
