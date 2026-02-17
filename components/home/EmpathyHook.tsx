import Container from "@/components/ui/Container";

export default function EmpathyHook() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container className="max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
          Mocks Didn&apos;t Go as Planned?
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-4">
          You&apos;re not alone. Every year, thousands of Leaving Cert students
          walk out of mock exams feeling overwhelmed. The pressure is real, the
          syllabus is huge, and time is running out.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-4">
          But here&apos;s the good news: <strong className="text-navy">it&apos;s not too late.</strong>{" "}
          With the right approach, the right teacher, and focused sessions mapped
          directly to what the examiners want, you can turn things around.
        </p>
        <p className="text-green font-semibold text-lg mt-8">
          Here&apos;s exactly how we do it &darr;
        </p>
      </Container>
    </section>
  );
}
