
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import resumes from "@/data/sample-resumes";
import sampleResumeDetails from "@/data/sample-resume-details";
import Button from "@/components/Button";

export const instant = false;

export const metadata: Metadata = {
  title: "Sample Resume | ProFolio",
  description: "Explore a complete sample resume.",
};

export default async function ResumeDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const resume = resumes.find((item) => item.id === id);
  const details = sampleResumeDetails[id];

  if (!resume || !details) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f8f9fc] px-5 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <p className="font-semibold text-[#6854d9]">SAMPLE RESUME</p>
          <h1 className="mt-2 text-3xl font-extrabold text-[#171b2d]">
            {resume.name}
          </h1>
          <p className="mt-2 text-gray-500">{resume.role}</p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm sm:p-12">
          <div className="border-b-2 border-[#6854d9] pb-6">
            <h2 className="text-3xl font-extrabold text-gray-900">
              {details.fullName}
            </h2>
            <p className="mt-2 text-xl font-semibold text-[#6854d9]">
              {details.jobTitle}
            </p>

            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500">
              <span>{details.email}</span>
              <span>{details.phone}</span>
              <span>{details.address}</span>
            </div>
          </div>

          <section className="mt-7">
            <h3 className="border-b pb-2 text-lg font-bold text-gray-900">
              Professional Summary
            </h3>
            <p className="mt-3 leading-7 text-gray-600">{details.summary}</p>
          </section>

          {[
            { title: "Education", items: details.education },
            { title: "Experience", items: details.experience },
            { title: "Skills", items: details.skills },
            { title: "Projects", items: details.projects },
          ].map((section) => (
            <section key={section.title} className="mt-7">
              <h3 className="border-b pb-2 text-lg font-bold text-gray-900">
                {section.title}
              </h3>

              <ul className="mt-3 space-y-2">
                {section.items.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm leading-7 text-gray-600"
                  >
                    {section.title === "Skills" ? (
                      <span className="mr-2 inline-block rounded-lg bg-purple-50 px-3 py-1 text-purple-700">
                        {item}
                      </span>
                    ) : (
                      `• ${item}`
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-4">
          <Button href={`/editor?sample=${resume.id}`}>
            Use This Example
          </Button>

          <Button href="/dashboard" variant="outline">
            Back to Dashboard
          </Button>
        </div>
      </div>
    </main>
  );
}
