import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { siteConfig } from "@/lib/data/site-config";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Book Group A Sessions - Walsh Maths Works",
  description:
    "Enquire about 3-hour Saturday morning Leaving Cert Maths sessions. €45 per session. Talbot Hotel, Carlow.",
};

export default function BookGroupAPage() {
  const g = siteConfig.groups.a;

  return (
    <main>
      {/* Header */}
      <section className="bg-navy py-12 sm:py-16">
        <Container className="text-center">
          <Badge variant="gold" className="mb-4">
            Most Popular
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            {g.label} &mdash; {g.subtitle}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-slate-300 text-sm">
            <span>{g.time}</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>{g.duration}</span>
            <span className="hidden sm:inline">&middot;</span>
            <span className="font-semibold text-white">
              {formatPrice(g.pricePerSession)} per session
            </span>
            <span className="hidden sm:inline">&middot;</span>
            <span>{siteConfig.venue.full}</span>
          </div>
        </Container>
      </section>

      {/* Policy note */}
      <section className="bg-green-light border-b border-green/10">
        <Container className="py-3 text-center text-sm text-green-dark">
          Minimum {siteConfig.policies.minStudents} students required.{" "}
          {siteConfig.policies.refundPolicy} {siteConfig.policies.dateChangePolicy}
        </Container>
      </section>

      {/* Form */}
      <section className="py-12 sm:py-16 bg-off-white">
        <Container className="max-w-3xl">
          <EnquiryForm group="a" />
        </Container>
      </section>
    </main>
  );
}
