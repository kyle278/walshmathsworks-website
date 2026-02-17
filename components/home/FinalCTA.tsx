import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/data/site-config";

export default function FinalCTA() {
  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <Container className="relative py-20 sm:py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Places Are Limited &mdash; Secure Your Spot Today
        </h2>
        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
          12 sessions. 12 topics. Everything you need for Paper 1 and Paper 2.
          Don&apos;t leave your Leaving Cert results to chance.
        </p>

        <Button href="/book/group-a" size="lg" variant="primary">
          Book Your Sessions Now
        </Button>

        <p className="mt-8 text-sm text-slate-400">
          Questions? Call Tom on{" "}
          <a
            href={siteConfig.tutor.phoneHref}
            className="text-green-bright hover:underline"
          >
            {siteConfig.tutor.phone}
          </a>{" "}
          or email{" "}
          <a
            href={siteConfig.tutor.emailHref}
            className="text-green-bright hover:underline"
          >
            {siteConfig.tutor.email}
          </a>
        </p>
      </Container>
    </section>
  );
}
