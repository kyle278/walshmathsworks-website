import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { siteConfig } from "@/lib/data/site-config";
import { formatPrice } from "@/lib/utils";

export default function GroupComparison() {
  const { a, b } = siteConfig.groups;

  return (
    <section className="py-16 sm:py-20 bg-off-white">
      <Container>
        <SectionHeading
          eyebrow="Two Options"
          title="Choose the Right Group for You"
          subtitle="Whether you need comprehensive coverage or focused revision, there's a group that fits."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Group A */}
          <div className="relative bg-white rounded-2xl p-8 shadow-sm border-2 border-green hover:shadow-lg transition-shadow">
            <Badge variant="gold" className="absolute -top-3 left-8">
              Most Popular
            </Badge>
            <h3 className="text-2xl font-bold text-navy mb-1 mt-2">
              {a.label} &mdash; {a.subtitle}
            </h3>
            <p className="text-slate-400 text-sm mb-6">{a.time}</p>

            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl font-bold text-navy font-mono">
                {formatPrice(a.pricePerSession)}
              </span>
              <span className="text-slate-400 text-sm">per session</span>
            </div>
            <p className="text-sm text-green font-medium mb-6">
              Book all {a.totalSessions} and save {formatPrice(a.couponDiscount)}
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2 text-slate-600 text-sm">
                <svg className="w-5 h-5 text-green shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {a.duration} per session — thorough topic coverage
              </li>
              <li className="flex items-start gap-2 text-slate-600 text-sm">
                <svg className="w-5 h-5 text-green shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Ideal if you found the mocks challenging
              </li>
              <li className="flex items-start gap-2 text-slate-600 text-sm">
                <svg className="w-5 h-5 text-green shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {a.totalSessions} sessions covering Paper 1 &amp; Paper 2
              </li>
            </ul>

            <Button href="/book/group-a" className="w-full">
              Enquire About Group A
            </Button>
          </div>

          {/* Group B */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-navy mb-1">
              {b.label} &mdash; {b.subtitle}
            </h3>
            <p className="text-slate-400 text-sm mb-6">{b.time}</p>

            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl font-bold text-navy font-mono">
                {formatPrice(b.pricePerSession)}
              </span>
              <span className="text-slate-400 text-sm">per session</span>
            </div>
            <p className="text-sm text-green font-medium mb-6">
              Book all {b.totalSessions} and save {formatPrice(b.couponDiscount)}
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2 text-slate-600 text-sm">
                <svg className="w-5 h-5 text-green shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {b.duration} per session — focused revision
              </li>
              <li className="flex items-start gap-2 text-slate-600 text-sm">
                <svg className="w-5 h-5 text-green shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Best if you did okay but want to push higher
              </li>
              <li className="flex items-start gap-2 text-slate-600 text-sm">
                <svg className="w-5 h-5 text-green shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {b.totalSessions} sessions covering Paper 1 &amp; Paper 2
              </li>
            </ul>

            <Button href="/book/group-b" variant="secondary" className="w-full">
              Enquire About Group B
            </Button>
          </div>
        </div>

        <p className="text-center text-sm text-slate-400 mt-8">
          Not sure which group?{" "}
          <a href={siteConfig.tutor.phoneHref} className="text-green hover:underline">
            Call Tom on {siteConfig.tutor.phone}
          </a>{" "}
          for advice.
        </p>
      </Container>
    </section>
  );
}
