import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <h1 className="text-7xl font-bold text-[#6854d9]">404</h1>

      <h2 className="mt-4 text-2xl font-bold">
        Resume Not Found
      </h2>

      <p className="mt-3 text-gray-500">
        Sorry, the resume you're looking for doesn't exist.
      </p>

      <Link
        href="/dashboard"
        className="mt-6 rounded-xl bg-[#6854d9] px-6 py-3 font-semibold text-white hover:bg-[#5541c2]"
      >
        Back to Dashboard
      </Link>
    </main>
  );
}