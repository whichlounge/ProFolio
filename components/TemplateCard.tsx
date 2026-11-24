
import type { ResumeTemplate } from "@/data/templates";
import Link from "next/link";

interface TemplateCardProps {
  template: ResumeTemplate;
}

export default function TemplateCard({ template }: TemplateCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100">

      {/* Resume Preview */}
      <div className="relative flex h-80 items-center justify-center overflow-hidden bg-[#eeedf4] p-6">

        <div
          className="h-full w-full max-w-[230px] overflow-hidden bg-white p-4 shadow-lg"
          style={{ borderTop: `5px solid ${template.accent}` }}
        >

          {template.layout === "sidebar" && (
            <div className="flex h-full gap-3">
              <div
                className="w-[32%] p-2"
                style={{ backgroundColor: `${template.accent}18` }}
              >
                <div
                  className="mx-auto h-10 w-10 rounded-full"
                  style={{ backgroundColor: template.accent }}
                />
                <div className="mt-4 h-1.5 rounded bg-gray-400" />
                <div className="mt-2 h-1 rounded bg-gray-200" />
                <div className="mt-1 h-1 rounded bg-gray-200" />
                <div className="mt-4 h-1.5 rounded bg-gray-400" />
                <div className="mt-2 h-1 rounded bg-gray-200" />
                <div className="mt-1 h-1 rounded bg-gray-200" />
                <div className="mt-1 h-1 rounded bg-gray-200" />
              </div>

              <div className="flex-1 pt-2">
                <div
                  className="h-2.5 w-4/5 rounded"
                  style={{ backgroundColor: template.accent }}
                />
                <div className="mt-2 h-1 w-3/5 rounded bg-gray-300" />

                <div className="mt-6 h-1.5 w-2/3 rounded bg-gray-400" />
                <div className="mt-3 h-1 w-full rounded bg-gray-200" />
                <div className="mt-2 h-1 w-full rounded bg-gray-200" />
                <div className="mt-2 h-1 w-4/5 rounded bg-gray-200" />

                <div className="mt-6 h-1.5 w-2/3 rounded bg-gray-400" />
                <div className="mt-3 h-1 w-full rounded bg-gray-200" />
                <div className="mt-2 h-1 w-5/6 rounded bg-gray-200" />

                <div className="mt-6 h-1.5 w-2/3 rounded bg-gray-400" />
                <div className="mt-3 h-1 w-full rounded bg-gray-200" />
              </div>
            </div>
          )}

          {template.layout === "classic" && (
            <div className="pt-3">
              <div
                className="mx-auto h-3 w-3/4 rounded"
                style={{ backgroundColor: template.accent }}
              />
              <div className="mx-auto mt-3 h-1 w-1/2 rounded bg-gray-300" />
              <div
                className="mt-6 border-b-2 pb-1 text-[7px] font-bold"
                style={{ borderColor: template.accent, color: template.accent }}
              >
                PROFESSIONAL SUMMARY
              </div>
              <div className="mt-3 h-1 w-full rounded bg-gray-200" />
              <div className="mt-2 h-1 w-full rounded bg-gray-200" />
              <div className="mt-2 h-1 w-4/5 rounded bg-gray-200" />

              <div
                className="mt-6 border-b-2 pb-1 text-[7px] font-bold"
                style={{ borderColor: template.accent, color: template.accent }}
              >
                EXPERIENCE
              </div>
              <div className="mt-3 h-1.5 w-3/4 rounded bg-gray-400" />
              <div className="mt-2 h-1 w-full rounded bg-gray-200" />
              <div className="mt-2 h-1 w-5/6 rounded bg-gray-200" />

              <div className="mt-5 h-1.5 w-3/4 rounded bg-gray-400" />
              <div className="mt-2 h-1 w-full rounded bg-gray-200" />
              <div className="mt-2 h-1 w-4/5 rounded bg-gray-200" />

              <div
                className="mt-6 border-b-2 pb-1 text-[7px] font-bold"
                style={{ borderColor: template.accent, color: template.accent }}
              >
                EDUCATION
              </div>
              <div className="mt-3 h-1.5 w-3/4 rounded bg-gray-400" />
              <div className="mt-2 h-1 w-4/5 rounded bg-gray-200" />
            </div>
          )}

          {template.layout === "minimal" && (
            <div className="pt-5">
              <div
                className="h-3 w-3/4 rounded"
                style={{ backgroundColor: template.accent }}
              />
              <div className="mt-3 h-1 w-1/2 rounded bg-gray-300" />
              <div
                className="mt-8 h-1.5 w-1/3 rounded"
                style={{ backgroundColor: template.accent }}
              />
              <div className="mt-3 h-1 w-full rounded bg-gray-200" />
              <div className="mt-2 h-1 w-full rounded bg-gray-200" />
              <div className="mt-2 h-1 w-5/6 rounded bg-gray-200" />

              <div
                className="mt-8 h-1.5 w-1/3 rounded"
                style={{ backgroundColor: template.accent }}
              />
              <div className="mt-3 h-1 w-full rounded bg-gray-200" />
              <div className="mt-2 h-1 w-4/5 rounded bg-gray-200" />

              <div
                className="mt-8 h-1.5 w-1/3 rounded"
                style={{ backgroundColor: template.accent }}
              />
              <div className="mt-3 h-1 w-full rounded bg-gray-200" />
              <div className="mt-2 h-1 w-3/4 rounded bg-gray-200" />
            </div>
          )}

        </div>

        {template.popular && (
          <span className="absolute left-4 top-4 rounded-full bg-[#6854d9] px-3 py-1 text-xs font-bold text-white">
            Popular
          </span>
        )}
      </div>

      {/* Template Information */}
      <div className="p-5">

        <div className="flex items-center justify-between gap-2">
          <h3 className="font-bold text-[#171b2d]">
            {template.name}
          </h3>

          <span
            className="h-4 w-4 shrink-0 rounded-full border border-gray-200"
            style={{ backgroundColor: template.accent }}
          />
        </div>

        <span className="mt-2 inline-block rounded-md bg-[#f0edff] px-2.5 py-1 text-xs font-semibold text-[#6854d9]">
          {template.category}
        </span>

        <p className="mt-3 min-h-10 text-sm leading-6 text-gray-500">
          {template.description}
        </p>

        <Link
          href={`/editor?template=${template.id}`}
          className="mt-5 block rounded-xl bg-[#6854d9] py-3 text-center text-sm font-semibold text-white hover:bg-[#5541c2]"
        >
          Use This Template →
        </Link>

      </div>
    </div>
  );
}
