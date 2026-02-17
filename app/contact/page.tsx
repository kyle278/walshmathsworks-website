import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/data/site-config";

export const metadata: Metadata = {
  title: "Contact Tom Walsh - Walsh Maths Works",
  description:
    "Get in touch about Leaving Cert Maths tuition in Carlow. Call 087 236 5324 or email walshwpm@gmail.com.",
};

const contactCards = [
  {
    title: "Phone",
    value: siteConfig.tutor.phone,
    href: siteConfig.tutor.phoneHref,
    description: "Call or text Tom directly",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Email",
    value: siteConfig.tutor.email,
    href: siteConfig.tutor.emailHref,
    description: "Send Tom an email anytime",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Location",
    value: siteConfig.venue.full,
    href: siteConfig.venue.mapUrl,
    description: "Saturday sessions held here",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-navy py-16 sm:py-20">
        <Container className="text-center">
          <SectionHeading
            title="Get in Touch"
            subtitle="Have a question about sessions, booking, or anything else? Tom is happy to help."
            dark
          />
        </Container>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 bg-off-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                <h2 className="text-xl font-bold text-navy mb-6">
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact details */}
            <div className="lg:col-span-2 space-y-4">
              {contactCards.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.title === "Location" ? "_blank" : undefined}
                  rel={card.title === "Location" ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow group"
                >
                  <div className="w-12 h-12 bg-green-light rounded-xl flex items-center justify-center text-green shrink-0 group-hover:bg-green group-hover:text-white transition-colors">
                    {card.icon}
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-0.5">{card.title}</p>
                    <p className="font-semibold text-navy">{card.value}</p>
                    <p className="text-sm text-slate-400">{card.description}</p>
                  </div>
                </a>
              ))}

              {/* Extra info */}
              <div className="bg-green-light rounded-2xl p-6">
                <h3 className="font-semibold text-navy mb-2">Quick Response</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Tom typically responds within a few hours during weekdays. For
                  urgent queries, a phone call is always the fastest option.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
