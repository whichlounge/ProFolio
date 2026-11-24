
import Link from "next/link";
import type { ResumeRecord } from "@/types/resume";

interface ResumeCardProps {
  resume: ResumeRecord;
}

export default function ResumeCard({ resume }: ResumeCardProps) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold text-white"
          style={{ backgroundColor: resume.color }}
        >
          {resume.initials}
        </div>

        <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700">
          Sample Resume
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-gray-900">
        {resume.name}
      </h3>

      <p className="mt-1 text-sm text-gray-500">{resume.role}</p>

      <p className="mt-3 text-sm text-gray-400">
        Template: {resume.template}
      </p>

      <Link
        href={`/resume/${resume.id}`}
        className="mt-5 block rounded-xl border border-purple-200 px-4 py-2.5 text-center text-sm font-semibold text-purple-700 transition hover:bg-purple-50"
      >
        View Example
      </Link>

      <Link
        href={`/editor?sample=${resume.id}`}
        className="mt-2 block rounded-xl bg-purple-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-purple-700"
      >
        Use This Example
      </Link>
    </div>
  );
}
