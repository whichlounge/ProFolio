import type { Metadata } from "next";
import ResumePreview from "@/components/ResumePreview";
import Link from "next/link";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Resume Preview | ProFolio",
  description: "Preview your professional resume.",
};

export default function PreviewPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-12">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Resume Preview</h1>
          <p className="mt-2 text-gray-500">
            See how your completed resume looks.
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            href="/editor"
            className="rounded-lg border px-5 py-3 text-sm font-medium hover:bg-gray-50"
          >
            Edit Resume
          </Link>

         <PrintButton />
        </div>
      </div>

      <ResumePreview />
    </main>
  );
}