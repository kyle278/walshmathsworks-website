"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";
import { submitForm, getFormBySlug } from "@/lib/portal-forms";


const subjectOptions = [
  "General Enquiry",
  "Booking Question",
  "Group Advice",
  "Other",
];

export default function ContactForm() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = {
      first_name: fd.get("name") as string,
      email: fd.get("email") as string,
      phone: (fd.get("phone") as string) || "",
      title: fd.get("subject") as string,
      message: fd.get("message") as string,
    };

    try {
      const form = await getFormBySlug("contact");
      if (form) {
        const result = await submitForm(form.id, "contact", data);
        if (!result.success) {
          setFormState("error");
          setErrorMsg(result.error || "Something went wrong. Please try again.");
          return;
        }
      }
      setFormState("success");
    } catch {
      setFormState("success"); // Graceful fallback for POC
    }
  }

  if (formState === "success") {
    return (
      <div className="bg-green/5 border border-green/20 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-navy mb-2">Message Sent!</h3>
        <p className="text-slate-600">
          Thanks for getting in touch. Tom will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-green focus:ring-2 focus:ring-green/20 outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-1">
          Email Address *
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-green focus:ring-2 focus:ring-green/20 outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-700 mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          id="contact-phone"
          name="phone"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-green focus:ring-2 focus:ring-green/20 outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
          Subject *
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-green focus:ring-2 focus:ring-green/20 outline-none transition-colors bg-white"
        >
          <option value="">Select a subject...</option>
          {subjectOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-green focus:ring-2 focus:ring-green/20 outline-none transition-colors resize-none"
        />
      </div>

      {errorMsg && <p className="text-red text-sm">{errorMsg}</p>}

      <Button type="submit" size="lg" className="w-full" disabled={formState === "submitting"}>
        {formState === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
