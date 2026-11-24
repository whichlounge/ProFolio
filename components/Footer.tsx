
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">

        <div>
          <h2 className="text-2xl font-extrabold text-[#171b2d]">
            Pro<span className="text-[#6854d9]">Folio</span>
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-7 text-gray-500">
            Build professional resumes, showcase your experience and
            take the next step in your career with ProFolio.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-gray-900">Quick Links</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#6854d9]">Home</Link>
            <Link href="/dashboard" className="hover:text-[#6854d9]">Dashboard</Link>
            <Link href="/templates" className="hover:text-[#6854d9]">Templates</Link>
            <Link href="/about" className="hover:text-[#6854d9]">About</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-gray-900">Get Started</h3>
          <p className="mt-4 text-sm leading-6 text-gray-500">
            Create your professional resume with simple tools and
            beautiful templates.
          </p>
          <Link
            href="/editor"
            className="mt-4 inline-block font-semibold text-[#6854d9] hover:underline"
          >
            Create Your Resume →
          </Link>
        </div>

      </div>

      <div className="border-t border-gray-100 py-5 text-center text-sm text-gray-400">
        © 2026 ProFolio. All rights reserved.
      </div>
    </footer>
  );
}
