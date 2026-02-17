import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Student Stories"
          title="What Students & Parents Say"
          subtitle="Real results from real students. Here's what they have to say about Walsh Maths Works."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-off-white rounded-2xl p-8 border border-slate-200 hover:shadow-md transition-shadow"
            >
              {/* Quote icon */}
              <svg
                className="w-8 h-8 text-green/20 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
              </svg>

              <p className="text-slate-700 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-navy">{t.name}</p>
                  <p className="text-sm text-slate-400">{t.role}</p>
                </div>
                {t.result && (
                  <Badge variant="green">{t.result}</Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
