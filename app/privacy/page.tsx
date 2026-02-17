import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/data/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy - Walsh Maths Works",
  description: "Privacy policy for Walsh Maths Works tutoring services.",
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="bg-navy py-12 sm:py-16">
        <Container className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="mt-2 text-slate-300 text-sm">
            Last updated: February 2026
          </p>
        </Container>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <Container className="max-w-3xl prose prose-slate">
          <div className="space-y-8 text-slate-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">
                1. Information We Collect
              </h2>
              <p>
                When you use our website or enquire about our tutoring services,
                we may collect the following personal information:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Your name and your child&apos;s name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Any information you provide in enquiry forms or messages</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">
                2. How We Use Your Information
              </h2>
              <p>We use your personal information to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Respond to your enquiries about tutoring sessions</li>
                <li>Manage bookings and communicate session details</li>
                <li>Send relevant updates about scheduled sessions</li>
                <li>Process payments (when payment integration is active)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">
                3. Third-Party Services
              </h2>
              <p>
                We may use third-party services to operate our website and process
                enquiries. These include web hosting providers and, when
                applicable, payment processors such as Stripe. These services have
                their own privacy policies governing how they handle your data.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">
                4. Data Retention
              </h2>
              <p>
                We retain your personal information only for as long as necessary
                to provide our services and fulfil the purposes described in this
                policy. You may request deletion of your data at any time by
                contacting us.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">
                5. Your Rights
              </h2>
              <p>
                Under applicable data protection laws, you have the right to
                access, correct, or delete your personal data. To exercise these
                rights, please contact us using the details below.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">
                6. Contact Us
              </h2>
              <p>
                If you have any questions about this privacy policy, please
                contact:
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
