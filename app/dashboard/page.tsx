
import type { Metadata } from "next";
import DashboardContent from "@/components/DashboardContent";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage, search and organize your resumes with ProFolio.",
};

export default function DashboardPage() {
  return <DashboardContent />;
}
