
"use client";

import { useEffect, useRef, useState } from "react";
import { useResume } from "@/context/ResumeContext";
import sampleResumeDetails from "@/data/sample-resume-details";
import Button from "@/components/Button";
import Link from "next/link";

export default function ResumeEditor() {
  const {
    resume,
    setResume,
    saveResume,
    activeResumeId,
    loadResume,
    startNewResume,
    savedResumes,
    loaded,
  } = useResume();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const initialized = useRef(false);

 
useEffect(() => {
  if (!loaded || initialized.current) return;

  const params = new URLSearchParams(window.location.search);
  const resumeId = params.get("id");
  const sampleId = params.get("sample");
  const selectedTemplate = params.get("template");

  if (resumeId) {
    const exists = savedResumes.some((item) => item.id === resumeId);

    if (exists) {
      loadResume(resumeId);
    } else {
      startNewResume();
    }
  } else if (sampleId && sampleResumeDetails[sampleId]) {
    startNewResume();
    setResume({
      ...sampleResumeDetails[sampleId],
      templateId: selectedTemplate || sampleResumeDetails[sampleId].templateId || "modern",
    });
  } else {
   startNewResume();

  setResume({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    jobTitle: "",
    summary: "",
    education: [],
    experience: [],
    skills: [],
    projects: [],
    templateId: selectedTemplate || "modern",
    profilePhoto: ""
});
    
  }

  initialized.current = true;
}, [
  loaded,
  savedResumes,
  loadResume,
  startNewResume,
  setResume,
]);

  function updateField(field: string, value: string) {
    setResume({ ...resume, [field]: value });
    setSuccess("");
  }

  function addItem(field: "education" | "experience" | "skills" | "projects") {
    setResume({ ...resume, [field]: [...resume[field], ""] });
    setSuccess("");
  }

  function updateItem(
    field: "education" | "experience" | "skills" | "projects",
    index: number,
    value: string
  ) {
    const updated = [...resume[field]];
    updated[index] = value;
    setResume({ ...resume, [field]: updated });
    setSuccess("");
  }

  function removeItem(
    field: "education" | "experience" | "skills" | "projects",
    index: number
  ) {
    setResume({
      ...resume,
      [field]: resume[field].filter((_, i) => i !== index),
    });
    setSuccess("");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!resume.fullName.trim() || !resume.email.trim()) {
      setError("Please enter your name and email.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(resume.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    saveResume(resume, activeResumeId || undefined);

    setError("");
    setSuccess("Your resume has been saved successfully!");
  }

  const sections = [
    { title: "Education", field: "education" as const },
    { title: "Experience", field: "experience" as const },
    { title: "Skills", field: "skills" as const },
    { title: "Projects", field: "projects" as const },
  ];

  if (!loaded || !initialized.current) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-gray-500">
        Loading your resume...
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-5 py-12">
      <h1 className="mb-2 text-3xl font-bold">Build Your Resume</h1>
      
      
<div className="mb-8 rounded-xl border border-purple-100 bg-purple-50 p-5">
  <h2 className="mb-3 text-lg font-semibold text-gray-800">
    Resume Template
  </h2>

  <select
    value={resume.templateId || "modern"}
    onChange={(e) =>
      setResume({
        ...resume,
        templateId: e.target.value,
      })
    }
    className="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-800"
  >
    <option value="modern">Modern Professional</option>
    <option value="classic">Classic Executive</option>
    <option value="creative">Creative Portfolio</option>
    <option value="minimal">Minimal Elegance</option>
    <option value="corporate">Corporate Standard</option>
    <option value="bold">Bold Creative</option>
  </select>

  {["creative", "bold"].includes(resume.templateId || "modern") && (
    <div className="mt-5">
      <label className="mb-2 block font-medium text-gray-700">
        Profile Photo
      </label>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];

          if (!file) return;

          if (file.size > 2 * 1024 * 1024) {
            alert("Please choose an image smaller than 2 MB.");
            e.target.value = "";
            return;
          }

          const reader = new FileReader();

          reader.onloadend = () => {
            setResume({
              ...resume,
              profilePhoto: reader.result as string,
            });
          };

          reader.readAsDataURL(file);
        }}
        className="w-full text-sm text-gray-700"
      />

      {resume.profilePhoto && (
        <img
          src={resume.profilePhoto}
          alt="Profile preview"
          className="mt-4 h-20 w-20 rounded-full object-cover"
        />
      )}
    </div>
  )}
</div>

      
      <p className="mb-8 text-gray-500">
        Add your details to create your professional resume.
      </p>


      <form onSubmit={handleSubmit} className="space-y-8">
        <section className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-xl font-semibold">Personal Information</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Full Name", "fullName", "Your full name"],
              ["Email", "email", "Your email address"],
              ["Phone", "phone", "Your phone number"],
              ["Address", "address", "Your location"],
              ["Job Title", "jobTitle", "e.g. Software Developer"],
            ].map(([label, field, placeholder]) => (
              <label key={field} className="space-y-2 text-sm font-medium">
                {label}
                <input
                  type="text"
                  value={resume[field as keyof typeof resume] as string}
                  onChange={(e) => updateField(field, e.target.value)}
                  placeholder={placeholder}
                  className="w-full rounded-lg border border-gray-300 p-3 font-normal outline-none focus:border-purple-500"
                />
              </label>
            ))}
          </div>

          <label className="mt-4 block space-y-2 text-sm font-medium">
            Professional Summary
            <textarea
              value={resume.summary}
              onChange={(e) => updateField("summary", e.target.value)}
              placeholder="Write a short introduction about yourself..."
              rows={4}
              className="w-full rounded-lg border border-gray-300 p-3 font-normal outline-none focus:border-purple-500"
            />
          </label>
        </section>

        {sections.map(({ title, field }) => (
          <section
            key={field}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >
            <div className="mb-5 flex items-center justify-between gap-3">
              <h2 className="text-xl font-semibold">{title}</h2>
              <button
                type="button"
                onClick={() => addItem(field)}
                className="rounded-lg bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 hover:bg-purple-200"
              >
                + Add
              </button>
            </div>

            {resume[field].length === 0 && (
              <p className="text-sm text-gray-400">
                Nothing added yet. Click Add to get started.
              </p>
            )}

            {resume[field].map((item, index) => (
              <div key={index} className="mb-3 flex gap-2">
                <input
                  value={item}
                  onChange={(e) => updateItem(field, index, e.target.value)}
                  placeholder={`Enter ${title.toLowerCase()} details`}
                  className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-purple-500"
                />
                <button
                  type="button"
                  onClick={() => removeItem(field, index)}
                  className="rounded-lg px-3 text-red-500 hover:bg-red-50"
                >
                  Remove
                </button>
              </div>
            ))}
          </section>
        ))}

        {error && <p className="text-sm text-red-600">{error}</p>}
        {success && <p className="text-sm text-green-600">{success}</p>}

        <div className="flex flex-wrap items-center gap-4">
          <Button type="submit">Save Resume</Button>

          <Link
            href="/preview"
            className="rounded-xl bg-purple-100 px-6 py-3 font-semibold text-purple-700 hover:bg-purple-200"
          >
            Preview Resume →
          </Link>
        </div>
      </form>
    </main>
  );
}
