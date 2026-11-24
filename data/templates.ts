
export interface ResumeTemplate {
  id: string;
  name: string;
  category: "Professional" | "Modern" | "Creative";
  description: string;
  color: string;
  accent: string;
  layout: "sidebar" | "classic" | "minimal";
  popular: boolean;
}

const templates: ResumeTemplate[] = [
  {
    id: "modern",
    name: "Modern Professional",
    category: "Modern",
    description: "A clean and contemporary design for modern careers.",
    color: "#ffffff",
    accent: "#6854d9",
    layout: "sidebar",
    popular: true,
  },
  {
    id: "classic",
    name: "Classic Executive",
    category: "Professional",
    description: "A traditional layout suitable for corporate positions.",
    color: "#ffffff",
    accent: "#263b59",
    layout: "classic",
    popular: true,
  },
  {
    id: "creative",
    name: "Creative Portfolio",
    category: "Creative",
    description: "A stylish design for designers and creative professionals.",
    color: "#ffffff",
    accent: "#d16c91",
    layout: "sidebar",
    popular: false,
  },
  {
    id: "minimal",
    name: "Minimal Elegance",
    category: "Modern",
    description: "A simple and elegant resume with a minimal layout.",
    color: "#ffffff",
    accent: "#368878",
    layout: "minimal",
    popular: false,
  },
  {
    id: "corporate",
    name: "Corporate Standard",
    category: "Professional",
    description: "A structured resume for business and management roles.",
    color: "#ffffff",
    accent: "#3475a9",
    layout: "classic",
    popular: false,
  },
  {
    id: "bold",
    name: "Bold Creative",
    category: "Creative",
    description: "A distinctive design to help your profile stand out.",
    color: "#ffffff",
    accent: "#bd8744",
    layout: "sidebar",
    popular: false,
  },
];

export default templates;
