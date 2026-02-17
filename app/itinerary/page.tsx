import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { paper1Sessions, paper2Sessions } from "@/lib/data/sessions";
import { siteConfig } from "@/lib/data/site-config";
import { formatPrice } from "@/lib/utils";
import type { Session } from "@/lib/types";

export const metadata: Metadata = {
  title: "Full 12-Week Itinerary - Walsh Maths Works",
  description:
    "Complete Paper 1 and Paper 2 topic breakdown for Leaving Cert Maths. 12 Saturday sessions covering everything you need.",
};

function SessionCard({ session }: { session: Session }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
      {/* Session number */}
      <div className="shrink-0 w-14 h-14 bg-navy rounded-xl flex items-center justify-center">
        <span className="text-white font-bold text-lg font-mono">
          {String(session.sessionNumber).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3 className="text-lg font-bold text-navy">{session.topic}</h3>
          <Badge variant="blue">Paper {session.paper}</Badge>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          {session.description}
        </p>
      </div>

      {/* Date */}
      <div className="shrink-0 text-right">
        <p className="font-semibold text-navy">{session.date}</p>
        <p className="text-xs text-slate-400">Saturday</p>
      </div>
    </div>
  );
}

export default function ItineraryPage() {
  const { a, b } = siteConfig.groups;

  return (
    <main>
      {/* Header */}
      <section className="bg-navy py-16 sm:py-20">
        <Container className="text-center">
          <SectionHeading
            eyebrow="12-Week Programme"
            title="Your Leaving Cert Maths Masterplan"
            subtitle="Every topic. Every technique. Mapped directly to what the examiners are looking for."
            dark
          />
        </Container>
      </section>

      {/* Paper 1 */}
      <section className="py-16 sm:py-20 bg-off-white">
        <Container>
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">
              Paper 1
            </h2>
            <Badge variant="blue">
              {paper1Sessions.length} Sessions &middot; March - May
            </Badge>
          </div>

          <div className="space-y-4">
            {paper1Sessions.map((s) => (
              <SessionCard key={s.id} session={s} />
            ))}
          </div>
        </Container>
      </section>

      {/* Paper 2 */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">
              Paper 2
            </h2>
            <Badge variant="green">
              {paper2Sessions.length} Sessions &middot; May - June
            </Badge>
          </div>

          <div className="space-y-4">
            {paper2Sessions.map((s) => (
              <SessionCard key={s.id} session={s} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-off-white">
        <Container>
          <SectionHeading
            title="Ready to Secure Your Place?"
            subtitle="Choose the group that suits you and get started."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center">
              <h3 className="font-bold text-navy text-xl mb-2">
                {a.label} &mdash; {a.subtitle}
              </h3>
              <p className="text-slate-400 text-sm mb-1">{a.time}</p>
              <p className="text-2xl font-bold text-navy font-mono mb-4">
                {formatPrice(a.pricePerSession)}
                <span className="text-sm font-normal text-slate-400">
                  {" "}
                  / session
                </span>
              </p>
              <Button href="/book/group-a" className="w-full">
                Enquire About Group A
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center">
              <h3 className="font-bold text-navy text-xl mb-2">
                {b.label} &mdash; {b.subtitle}
              </h3>
              <p className="text-slate-400 text-sm mb-1">{b.time}</p>
              <p className="text-2xl font-bold text-navy font-mono mb-4">
                {formatPrice(b.pricePerSession)}
                <span className="text-sm font-normal text-slate-400">
                  {" "}
                  / session
                </span>
              </p>
              <Button href="/book/group-b" variant="secondary" className="w-full">
                Enquire About Group B
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
