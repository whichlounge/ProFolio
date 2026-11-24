
import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Build a professional resume with ProFolio. Choose a template and create your perfect resume.",
};

const features = [
  {
    icon: "✏️",
    title: "Easy Resume Editing",
    description:
      "Add your personal details, education, experience and skills through simple forms.",
  },
  {
    icon: "🎨",
    title: "Beautiful Templates",
    description:
      "Choose from professionally designed resume templates that match your style.",
  },
  {
    icon: "👁️",
    title: "Live Resume Preview",
    description:
      "See your resume update instantly while you enter and edit your information.",
  },
  {
    icon: "📄",
    title: "Print Your Resume",
    description:
      "Get a clean, professional document ready to print or save as a PDF.",
  },
];

const steps = [
  {
    number: "01",
    title: "Enter Your Details",
    description: "Fill in your personal information, education, experience and skills.",
  },
  {
    number: "02",
    title: "Choose a Template",
    description: "Select a professional design that represents your personality.",
  },
  {
    number: "03",
    title: "Preview Your Resume",
    description: "Review your completed resume and print it when you're ready.",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#f5f2ff] via-white to-[#eeebff]">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-28">

          <div>
            <span className="inline-block rounded-full border border-purple-200 bg-white px-4 py-2 text-sm font-semibold text-[#6854d9]">
              ✨ Your Career Starts Here
            </span>

            <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight text-[#171b2d] md:text-6xl">
              Build a Resume
              <span className="block text-[#6854d9]">
                That Gets You
              </span>
              Noticed.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
              Create a professional resume in minutes. Choose beautiful
              templates, add your experience and watch your resume come
              to life with our live preview.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/editor">
                Build My Resume →
              </Button>

              <Button href="/templates" variant="outline">
                Explore Templates
              </Button>
            </div>

            <div className="mt-9 flex flex-wrap gap-6 text-sm text-gray-500">
              <span>✓ Easy to use</span>
              <span>✓ Live preview</span>
              <span>✓ Professional designs</span>
            </div>
          </div>

          {/* Resume Preview Illustration */}
          <div className="relative flex justify-center">

            <div className="absolute -left-5 top-12 h-40 w-40 rounded-full bg-purple-200 opacity-50 blur-3xl" />

            <div className="relative w-full max-w-md rotate-1 rounded-2xl bg-white p-7 shadow-2xl shadow-purple-200/70 md:p-9">

              <div className="border-b-2 border-[#6854d9] pb-5">
                <h2 className="text-2xl font-extrabold tracking-wide text-[#171b2d]">
                  ALEX MORGAN
                </h2>
                <p className="mt-1 text-sm font-medium text-[#6854d9]">
                  SOFTWARE DEVELOPER
                </p>
                <p className="mt-3 text-xs text-gray-400">
                  alex@email.com | New York, USA
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#6854d9]">
                  Profile
                </h3>
                <p className="mt-2 text-xs leading-6 text-gray-500">
                  Passionate developer with experience in creating
                  modern applications and solving complex problems.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#6854d9]">
                  Experience
                </h3>
                <div className="mt-3">
                  <p className="text-sm font-bold text-gray-800">
                    Frontend Developer
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    Creative Solutions · 2024 - Present
                  </p>
                  <div className="mt-3 h-2 w-full rounded bg-gray-100" />
                  <div className="mt-2 h-2 w-5/6 rounded bg-gray-100" />
                  <div className="mt-2 h-2 w-4/6 rounded bg-gray-100" />
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#6854d9]">
                  Education
                </h3>
                <p className="mt-3 text-sm font-bold text-gray-800">
                  Bachelor of Computer Science
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  University · 2022 - 2026
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#6854d9]">
                  Skills
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["React", "JavaScript", "Python", "UI Design"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-[#f0edff] px-3 py-1.5 text-xs font-medium text-[#6854d9]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute -right-5 top-24 rounded-xl bg-white px-4 py-3 shadow-xl">
                <span className="text-sm font-semibold text-green-600">
                  ✓ Resume Ready
                </span>
              </div>

              <div className="absolute -bottom-5 -left-5 rounded-xl bg-[#6854d9] px-5 py-3 text-sm font-semibold text-white shadow-xl">
                ✨ Professional Design
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-[#6854d9]">
            Why ProFolio?
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-[#171b2d] md:text-4xl">
            Everything You Need to Build Your Resume
          </h2>

          <p className="mt-5 leading-7 text-gray-500">
            Simple tools and professional designs to help you
            create a resume that represents your potential.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-100"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f0edff] text-2xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-lg font-bold text-[#171b2d]">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* How It Works */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#6854d9]">
              Simple Process
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#171b2d] md:text-4xl">
              Create Your Resume in 3 Steps
            </h2>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[#f0edff] text-2xl font-extrabold text-[#6854d9]">
                  {step.number}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#171b2d]">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-gray-500">
                  {step.description}
                </p>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-[#5140b8] to-[#8873ee] px-7 py-16 text-center shadow-xl shadow-purple-200 md:px-16">

          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Ready to Build Your Future?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-purple-100">
            Start creating your professional resume today.
            Your next opportunity could be one resume away.
          </p>

          <Link
            href="/editor"
            className="mt-9 inline-block rounded-xl bg-white px-8 py-4 font-bold text-[#6854d9] shadow-lg hover:bg-purple-50"
          >
            Create My Resume →
          </Link>

        </div>
      </section>

    </div>
  );
}
