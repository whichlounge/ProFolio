import type { Metadata } from "next";
import ResumeEditor from "@/components/ResumeEditor";

export const metadata: Metadata = {
  title: "Resume Editor | ProFolio",
  description: "Create and edit your professional resume.",
};

export default function EditorPage() {
  return <ResumeEditor />;
}