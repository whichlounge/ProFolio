
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-8">

        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6854d9] text-xl font-bold text-white">
            P
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-[#171b2d]">
            Pro<span className="text-[#6854d9]">Folio</span>
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-600 sm:gap-7">
          <Link href="/" className="hover:text-[#6854d9]">
            Home
          </Link>
          <Link href="/dashboard" className="hover:text-[#6854d9]">
            Dashboard
          </Link>
          <Link href="/templates" className="hover:text-[#6854d9]">
            Templates
          </Link>
          <Link href="/about" className="hover:text-[#6854d9]">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#6854d9]">
            Contact
          </Link>
        </nav>

        <Link
          href="/editor"
          className="rounded-xl bg-[#6854d9] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-purple-200 hover:bg-[#5541c2]"
        >
          Build My Resume
        </Link>

      </div>
    </header>
  );
}
