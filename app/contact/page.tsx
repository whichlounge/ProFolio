import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact | ProFolio",
  description: "Get in touch with the ProFolio team.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading
        title="Get in Touch"
        description="Have a question or suggestion? We'd love to hear from you."
      />

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold">Let's Talk!</h2>
          <p className="mt-4 leading-7 text-gray-500">
            We're always happy to hear your feedback. Send us a message
            using the form and we'll be glad to hear from you.
          </p>

          <div className="mt-8 rounded-2xl bg-purple-50 p-6">
            <h3 className="font-semibold text-purple-800">
              ProFolio Support
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              We're here to make your resume-building experience easier.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-7 shadow-sm">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}