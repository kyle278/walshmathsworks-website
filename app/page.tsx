import Hero from "@/components/home/Hero";
import EmpathyHook from "@/components/home/EmpathyHook";
import HowItWorks from "@/components/home/HowItWorks";
import ValueProp from "@/components/home/ValueProp";
import GroupComparison from "@/components/home/GroupComparison";
import Testimonials from "@/components/home/Testimonials";
import FAQPreview from "@/components/home/FAQPreview";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <EmpathyHook />
      <HowItWorks />
      <ValueProp />
      <GroupComparison />
      <Testimonials />
      <FAQPreview />
      <FinalCTA />
    </main>
  );
}
