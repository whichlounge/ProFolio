
"use client";

import { useMemo, useState } from "react";
import templates from "@/data/templates";
import TemplateCard from "@/components/TemplateCard";
import SearchBar from "@/components/SearchBar";
import SectionHeading from "@/components/SectionHeading";

export default function TemplateGallery() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredTemplates = useMemo(() => {
    return templates.filter((template) => {
      const matchesSearch =
        template.name.toLowerCase().includes(search.toLowerCase()) ||
        template.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || template.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <div className="min-h-screen bg-[#f8f9fc]">

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#f0edff] to-white px-6 py-16">
        <div className="mx-auto max-w-7xl text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-[#6854d9]">
            Resume Designs
          </span>

          <h1 className="mt-4 text-4xl font-extrabold text-[#171b2d] md:text-5xl">
            Choose Your Perfect Template
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-500">
            Explore our collection of professionally designed resume
            templates. Find a style that reflects your skills,
            personality and career goals.
          </p>

        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <SectionHeading
          title="Explore Templates"
          description={`${filteredTemplates.length} templates available`}
        />

        {/* Search and Filter */}
        <div className="mt-8 flex flex-col gap-4 md:flex-row">

          <div className="flex-1">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Search templates..."
            />
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm text-gray-600 outline-none focus:border-[#6854d9]"
          >
            <option value="All">All Categories</option>
            <option value="Professional">Professional</option>
            <option value="Modern">Modern</option>
            <option value="Creative">Creative</option>
          </select>

        </div>

        {/* Template Cards */}
        {filteredTemplates.length > 0 ? (
          <div className="mt-9 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {filteredTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
              />
            ))}

          </div>
        ) : (
          <div className="mt-12 rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center">
            <div className="text-4xl">🎨</div>
            <h3 className="mt-4 text-lg font-bold text-gray-800">
              No templates found
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Try another search or category.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
              className="mt-5 font-semibold text-[#6854d9] hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

      </section>

      {/* Bottom Banner */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl bg-[#eeeaff] px-7 py-12 text-center">

          <h2 className="text-2xl font-extrabold text-[#171b2d]">
            Not Sure Where to Start?
          </h2>

          <p className="mt-3 text-sm leading-7 text-gray-600">
            Choose any template. You can personalize your information
            and preview your resume before printing.
          </p>

          <a
            href="/editor"
            className="mt-6 inline-block rounded-xl bg-[#6854d9] px-7 py-3 font-semibold text-white hover:bg-[#5541c2]"
          >
            Start Building →
          </a>

        </div>
      </section>

    </div>
  );
}
