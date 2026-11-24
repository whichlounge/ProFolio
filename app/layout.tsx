
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ResumeProvider } from "@/context/ResumeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ProFolio | Build Your Professional Resume",
    template: "%s | ProFolio",
  },
  description:
    "Create professional resumes with ProFolio. Choose beautiful templates, customize your details and preview your resume instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
  <ResumeProvider>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </ResumeProvider>
</body>
    </html>
  );
}
