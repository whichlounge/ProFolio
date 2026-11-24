
import type { Metadata } from "next";
import TemplateGallery from "@/components/TemplateGallery";

export const metadata: Metadata = {
  title: "Resume Templates",
  description:
    "Explore professional, modern and creative resume templates on ProFolio.",
};

export default function TemplatesPage() {
  return <TemplateGallery />;
}
