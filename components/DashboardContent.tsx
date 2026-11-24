
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useResume } from "@/context/ResumeContext";
import sampleResumes from "@/data/sample-resumes";
import ResumeCard from "@/components/ResumeCard";
import SearchBar from "@/components/SearchBar";
import SectionHeading from "@/components/SectionHeading";

export default function DashboardContent() {
  const { savedResumes, deleteResume } = useResume();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("recent");

  const completed = savedResumes.filter(
    (resume) => resume.data.fullName && resume.data.email
  ).length;

  const drafts = savedResumes.length - completed;

  const filteredResumes = useMemo(() => {
    const results = savedResumes.filter((resume) => {
      const matchesSearch =
        resume.data.fullName.toLowerCase().includes(search.toLowerCase()) ||
        resume.data.jobTitle.toLowerCase().includes(search.toLowerCase());

      const isCompleted = Boolean(
        resume.data.fullName && resume.data.email
      );

      const matchesStatus =
        status === "All" ||
        (status === "Completed" && isCompleted) ||
        (status === "Draft" && !isCompleted);

      return matchesSearch && matchesStatus;
    });

    return [...results].sort((a, b) => {
      if (sort === "name") {
        return a.data.fullName.localeCompare(b.data.fullName);
      }

      return (
        new Date(b.updatedAt).getTime() -
        new Date(a.updatedAt).getTime()
      );
    });
  }, [savedResumes, search, status, sort]);

  const filteredSamples = sampleResumes.filter((resume) => {
    return (
      resume.name.toLowerCase().includes(search.toLowerCase()) ||
      resume.role.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-[#6854d9]">
              YOUR WORKSPACE
            </p>
            <h1 className="mt-2 text-3xl font-extrabold text-[#171b2d] md:text-4xl">
              Welcome to Your Dashboard
            </h1>
            <p className="mt-3 text-gray-500">
              Manage your resumes and keep your career journey organized.
            </p>
          </div>

          <Link
            href="/editor"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#6854d9] px-6 py-3.5 font-semibold text-white shadow-md shadow-purple-200 hover:bg-[#5541c2]"
          >
            <span className="text-xl">+</span>
            Create New Resume
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">My Resumes</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#171b2d]">
              {savedResumes.length}
            </h2>
            <p className="mt-2 text-xs text-gray-400">
              Your saved resumes
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Completed Resumes</p>
            <h2 className="mt-3 text-3xl font-extrabold text-green-600">
              {completed}
            </h2>
            <p className="mt-2 text-xs text-gray-400">
              Ready for printing
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Draft Resumes</p>
            <h2 className="mt-3 text-3xl font-extrabold text-amber-500">
              {drafts}
            </h2>
            <p className="mt-2 text-xs text-gray-400">
              Still in progress
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-5 rounded-2xl bg-gradient-to-r from-[#5140b8] to-[#8873ee] p-7 md:flex-row md:items-center md:px-10">
          <div>
            <h2 className="text-xl font-bold text-white">
              Ready for your next opportunity?
            </h2>
            <p className="mt-2 text-sm text-purple-100">
              Create a fresh resume using one of our professional templates.
            </p>
          </div>

          <Link
            href="/templates"
            className="whitespace-nowrap rounded-xl bg-white px-6 py-3 text-center text-sm font-bold text-[#6854d9] hover:bg-purple-50"
          >
            Browse Templates →
          </Link>
        </div>

        <div className="mt-14">
          <SectionHeading
            title="My Resumes"
            description="Search, edit and manage the resumes you have created."
          />

          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <div className="flex-1">
              <SearchBar
                value={search}
                onChange={setSearch}
                placeholder="Search by name or job title..."
              />
            </div>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm text-gray-600 outline-none focus:border-[#6854d9]"
            >
              <option value="All">All Resumes</option>
              <option value="Completed">Completed</option>
              <option value="Draft">Drafts</option>
            </select>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm text-gray-600 outline-none focus:border-[#6854d9]"
            >
              <option value="recent">Recently Updated</option>
              <option value="name">Name (A–Z)</option>
            </select>
          </div>

          {filteredResumes.length > 0 ? (
            <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredResumes.map((resume) => (
                <div
                  key={resume.id}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 font-bold text-purple-700">
                      {resume.data.fullName
                        ? resume.data.fullName
                            .split(" ")
                            .map((word) => word[0])
                            .join("")
                            .slice(0, 2)
                            .toUpperCase()
                        : "R"}
                    </div>

                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                      {resume.data.fullName && resume.data.email
                        ? "Completed"
                        : "Draft"}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-gray-900">
                    {resume.data.fullName || "Untitled Resume"}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {resume.data.jobTitle || "No job title added"}
                  </p>

                  <p className="mt-3 text-xs text-gray-400">
                    Updated: {new Date(resume.updatedAt).toLocaleDateString()}
                  </p>

                  <div className="mt-5 flex gap-3">
                    <Link
                      href={`/editor?id=${resume.id}`}
                      className="flex-1 rounded-xl bg-[#6854d9] px-3 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#5541c2]"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => deleteResume(resume.id)}
                      className="rounded-xl border border-red-200 px-3 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center">
              <div className="text-4xl">📄</div>
              <h3 className="mt-4 text-lg font-bold text-gray-800">
                {savedResumes.length === 0
                  ? "You haven't created a resume yet"
                  : "No resumes found"}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {savedResumes.length === 0
                  ? "Create your first resume or start with one of our examples below."
                  : "Try changing your search or filter."}
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setStatus("All");
                  setSort("recent");
                }}
                className="mt-5 font-semibold text-[#6854d9] hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        <div className="mt-16">
          <SectionHeading
            title="Sample Resumes"
            description="Explore these examples for inspiration or use one as a starting point."
          />

          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredSamples.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>

          {filteredSamples.length === 0 && (
            <p className="mt-7 text-center text-sm text-gray-500">
              No sample resumes match your search.
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
