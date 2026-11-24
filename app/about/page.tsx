
import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About | ProFolio",
  description: "Learn about ProFolio and how it helps you build professional resumes.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <section className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-3 font-semibold text-[#6854d9]">
            ABOUT PROFOLIO
          </p>

          <h1 className="text-4xl font-bold leading-tight">
            Making Professional Resumes Simple
          </h1>

          <p className="mt-5 leading-7 text-gray-600">
            ProFolio helps students, graduates, and professionals create
            attractive resumes without complicated formatting. Choose a
            template, enter your information, and preview your resume.
          </p>

          <div className="mt-7">
            <Button href="/templates">Explore Templates</Button>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/about-illustration.svg"
            alt="Resume creation illustration"
            width={480}
            height={360}
            priority
          />
        </div>
      </section>

      <section className="mt-24">
        <SectionHeading
          title="Why Choose ProFolio?"
          description="Everything you need to create a clear and professional resume."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Easy to Use",
              description: "A simple editor makes adding resume details easy.",
            },
            {
              title: "Professional Designs",
              description: "Choose from different resume templates and styles.",
            },
            {
              title: "Quick Preview",
              description: "Preview and print your resume whenever you need.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border bg-white p-7">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
