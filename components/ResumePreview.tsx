
"use client";

import { useResume } from "@/context/ResumeContext";

export default function ResumePreview() {
  const { resume } = useResume();

  const template = resume.templateId || "modern";

const isSidebar = ["modern", "creative"].includes(template);
const isClassic = ["classic", "corporate"].includes(template);
const showPhoto = ["creative", "bold"].includes(template);

  const sections = [
    { title: "Professional Summary", items: [resume.summary] },
    { title: "Education", items: resume.education },
    { title: "Experience", items: resume.experience },
    { title: "Skills", items: resume.skills },
    { title: "Projects", items: resume.projects },
  ];

  const accent =
    template === "creative" ? "#d16c91" :
    template === "minimal" ? "#819a95ff" :
    template === "corporate" ? "#c54d4dff" :
    template === "bold" ? "#6188aaff" :
    template === "classic" ? "#725c6cff" :
    "#6854d9";

  return (
    <div
      id="resume-print"
      className="mx-auto max-w-3xl overflow-hidden rounded-xl border bg-white shadow-sm"
      style={{ color: "#222" }}
    >
      {isSidebar && (
        <div className="flex min-h-[700px]">
          <aside
            className="w-[34%] p-6 text-white"
            style={{ backgroundColor: accent }}
          >
            {showPhoto && resume.profilePhoto && (
              <img
                src={resume.profilePhoto}
                alt="Profile"
className="mx-auto mb-6 h-28 w-28 rounded-full object-cover"              />
            )}

            <h1 className="break-words text-2xl font-bold">
              {resume.fullName || "Your Name"}
            </h1>

            <p className="mt-2 text-sm opacity-90">
              {resume.jobTitle || "Professional Title"}
            </p>

            <div className="mt-8">
              <h2 className="mb-3 border-b border-white/50 pb-2 font-bold">
                Contact
              </h2>
              <p className="mb-2 break-words text-sm">{resume.email}</p>
              <p className="mb-2 text-sm">{resume.phone}</p>
              <p className="text-sm">{resume.address}</p>
            </div>

            {resume.skills.length > 0 && (
              <div className="mt-8">
                <h2 className="mb-3 border-b border-white/50 pb-2 font-bold">
                  Skills
                </h2>
                {resume.skills.map((skill, i) => (
                  <p key={i} className="mb-2 text-sm">{skill}</p>
                ))}
              </div>
            )}
          </aside>

          <main className="w-[66%] space-y-7 p-7">
            {sections
              .filter(section => section.title !== "Skills")
              .map(section => (
                <section key={section.title}>
                  <h2
                    className="mb-3 border-b-2 pb-2 text-lg font-bold"
                    style={{ color: accent, borderColor: accent }}
                  >
                    {section.title}
                  </h2>
                  {section.items.filter(Boolean).length > 0 ? (
                    section.items.filter(Boolean).map((item, i) => (
                      <p key={i} className="mb-3 whitespace-pre-line text-sm leading-relaxed">
                        {item}
                      </p>
                    ))
                  ) : (
                    <p className="text-sm text-gray-400">Not added yet</p>
                  )}
                </section>
              ))}
          </main>
        </div>
      )}

      {isClassic && (
        <main className="p-10 sm:p-14">
          <header className="mb-8 border-b-2 pb-6 text-center" style={{ borderColor: accent }}>
            <h1 className="text-3xl font-bold uppercase tracking-wide">
              {resume.fullName || "Your Name"}
            </h1>
            <p className="mt-2 text-lg" style={{ color: accent }}>
              {resume.jobTitle || "Professional Title"}
            </p>
            <p className="mt-3 text-sm text-gray-600">
              {[resume.email, resume.phone, resume.address].filter(Boolean).join("  |  ") || "Your contact information"}
            </p>
          </header>

          {sections.map(section => (
            <section key={section.title} className="mb-7">
              <h2
                className="mb-3 border-b pb-2 text-base font-bold uppercase tracking-wider"
                style={{ color: accent, borderColor: accent }}
              >
                {section.title}
              </h2>
              {section.items.filter(Boolean).length > 0 ? (
                section.items.filter(Boolean).map((item, i) => (
                  <p key={i} className="mb-3 whitespace-pre-line text-sm leading-relaxed">
                    {item}
                  </p>
                ))
              ) : (
                <p className="text-sm text-gray-400">Not added yet</p>
              )}
            </section>
          ))}
        </main>
      )}

      {template === "minimal" && (
        <main className="p-10 sm:p-14">
          <header className="mb-10">
            <p className="mb-3 text-xs uppercase tracking-[4px]" style={{ color: accent }}>
              Resume
            </p>
            <h1 className="text-4xl font-light">
              {resume.fullName || "Your Name"}
            </h1>
            <p className="mt-2 text-gray-500">
              {resume.jobTitle || "Professional Title"}
            </p>
            <p className="mt-4 text-xs text-gray-500">
              {[resume.email, resume.phone, resume.address].filter(Boolean).join("  •  ") || "Your contact information"}
            </p>
          </header>

          {sections.map(section => (
            <section key={section.title} className="mb-8">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest" style={{ color: accent }}>
                {section.title}
              </h2>
              <div className="border-l-2 pl-4" style={{ borderColor: accent }}>
                {section.items.filter(Boolean).length > 0 ? (
                  section.items.filter(Boolean).map((item, i) => (
                    <p key={i} className="mb-3 whitespace-pre-line text-sm leading-relaxed">
                      {item}
                    </p>
                  ))
                ) : (
                  <p className="text-sm text-gray-400">Not added yet</p>
                )}
              </div>
            </section>
          ))}
        </main>
      )}

     
{template === "bold" && (
  <main className="min-h-[700px]">
    <header
      className="flex items-center justify-between gap-5 p-8 text-white sm:p-12"
      style={{ backgroundColor: accent }}
    >
      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-[3px]">
          Professional Profile
        </p>
        <h1 className="text-3xl font-black uppercase">
          {resume.fullName || "Your Name"}
        </h1>
        <p className="mt-2 text-lg">
          {resume.jobTitle || "Professional Title"}
        </p>
      </div>

      {resume.profilePhoto && (
        <img
          src={resume.profilePhoto}
          alt="Profile"
          className="h-28 w-28 rounded-full object-cover"  />
      )}
    </header>

    <div className="grid gap-8 p-8 sm:grid-cols-[1fr_2fr] sm:p-12">
      <aside>
        <h2 className="mb-3 border-b-2 pb-2 font-bold" style={{ borderColor: accent }}>
          CONTACT
        </h2>
        <p className="mb-2 break-words text-sm">{resume.email}</p>
        <p className="mb-2 text-sm">{resume.phone}</p>
        <p className="text-sm">{resume.address}</p>

        <h2 className="mb-3 mt-8 border-b-2 pb-2 font-bold" style={{ borderColor: accent }}>
          SKILLS
        </h2>
        {resume.skills.map((skill, i) => (
          <p key={i} className="mb-2 text-sm">{skill}</p>
        ))}
      </aside>

      <div>
        {sections
          .filter(section => section.title !== "Skills")
          .map(section => (
            <section key={section.title} className="mb-7">
              <h2 className="mb-3 text-lg font-black uppercase" style={{ color: accent }}>
                {section.title}
              </h2>
              {section.items.filter(Boolean).length > 0 ? (
                section.items.filter(Boolean).map((item, i) => (
                  <p key={i} className="mb-3 whitespace-pre-line text-sm leading-relaxed">
                    {item}
                  </p>
                ))
              ) : (
                <p className="text-sm text-gray-400">Not added yet</p>
              )}
            </section>
          ))}
      </div>
    </div>
  </main>
)}

    </div>
  );
}
