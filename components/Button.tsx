
import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  className = "",
  onClick,
}: ButtonProps) {
  const styles = {
    primary: "bg-[#6854d9] text-white hover:bg-[#5541c2] shadow-md shadow-purple-200",
    secondary: "bg-[#eeeaff] text-[#6854d9] hover:bg-[#e2dcff]",
    outline: "border border-[#6854d9] text-[#6854d9] hover:bg-[#f5f2ff]",
  };

  const baseStyles =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all";

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${styles[variant]} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
