import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/data/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions - Walsh Maths Works",
  description: "Terms and conditions for Walsh Maths Works tutoring services.",
};

export default function TermsPage() {
  return (
    <main>
      <section className="bg-navy py-12 sm:py-16">
        <Container className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Terms &amp; Conditions
          </h1>
          <p className="mt-2 text-slate-300 text-sm">
            Last updated: February 2026
          </p>
        </Container>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <Container className="max-w-3xl">
          <div className="space-y-8 text-slate-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">
                1. Services
              </h2>
              <p>
                Walsh Maths Works provides Leaving Certificate Mathematics
                tuition sessions at the {siteConfig.venue.full}. Sessions are
                offered in two formats: Group A (3-hour morning sessions) and
                Group B (2-hour afternoon sessions).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">
                2. Booking &amp; Payment
              </h2>
              <p>
                All bookings are subject to availability. Payment terms will be
                communicated directly by {siteConfig.tutor.name} upon booking
                confirmation. Prices are as advertised on the website at the time
                of enquiry.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">
                3. Minimum Class Size
              </h2>
              <p>
                A minimum of {siteConfig.policies.minStudents} students is
                required for each session to proceed.{" "}
                {siteConfig.policies.refundPolicy}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">
                4. Schedule Changes
              </h2>
              <p>{siteConfig.policies.dateChangePolicy} Every effort will be made to provide reasonable notice of any changes to scheduled sessions.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">
                5. Cancellation &amp; Refunds
              </h2>
              <p>
                If you need to cancel your booking, please contact{" "}
                {siteConfig.tutor.name} as soon as possible. Refund
                arrangements will be made on a case-by-case basis. If a session
                is cancelled by Walsh Maths Works, a full refund or alternative
                date will be offered.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">
                6. Liability
              </h2>
              <p>
                Walsh Maths Works provides tutoring services to supplement
                students&apos; existing studies. While we are committed to helping
                every student achieve their potential, examination results depend
                on many factors and cannot be guaranteed.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">
                7. Contact
              </h2>
              <p>
                For any questions about these terms, please contact:
              </p>
              <p className="mt-2">
                <strong className="text-navy">{siteConfig.tutor.name}</strong>
                <br />
                Email:{" "}
                <a
                  href={siteConfig.tutor.emailHref}
                  className="text-green hover:underline"
                >
                  {siteConfig.tutor.email}
                </a>
                <br />
                Phone:{" "}
                <a
                  href={siteConfig.tutor.phoneHref}
                  className="text-green hover:underline"
                >
                  {siteConfig.tutor.phone}
                </a>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
