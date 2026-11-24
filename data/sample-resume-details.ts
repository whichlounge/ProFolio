
import type { ResumeData } from "@/context/ResumeContext";

const sampleResumeDetails: Record<string, ResumeData> = {
  "1": {
    fullName: "Alex Morgan",
    email: "alex.morgan@example.com",
    phone: "+1 555 010 1001",
    address: "New York, USA",
    jobTitle: "Software Developer",
    summary:
      "Motivated software developer with experience in building web applications, solving technical problems, and working with modern development tools.",
    education: [
      "BS Computer Science - New York University (2021–2025)",
    ],
    experience: [
      "Junior Developer - Tech Solutions (2025–Present): Developed and maintained web application features.",
      "Software Development Intern - CodeWorks (2024): Assisted with debugging and testing applications.",
    ],
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Python", "SQL"],
    projects: [
      "Task Manager: Developed a task management application with user-friendly features.",
      "Weather Dashboard: Created a dashboard displaying weather information using an API.",
    ],
  },

  "2": {
    fullName: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 555 010 1002",
    address: "Los Angeles, USA",
    jobTitle: "UI/UX Designer",
    summary:
      "Creative UI/UX designer interested in creating simple, accessible, and user-friendly digital experiences through research and thoughtful design.",
    education: [
      "BS Interaction Design - California State University (2021–2025)",
    ],
    experience: [
      "UI/UX Designer - Creative Studio (2025–Present): Designed interfaces and improved user experiences for web applications.",
      "Design Intern - Pixel Agency (2024): Created wireframes, prototypes, and design assets.",
    ],
    skills: ["Figma", "Wireframing", "Prototyping", "User Research", "Adobe XD"],
    projects: [
      "Food Delivery App: Designed a mobile ordering experience.",
      "Travel Website: Created a responsive website layout and interactive prototype.",
    ],
  },

  "3": {
    fullName: "Daniel Brown",
    email: "daniel.brown@example.com",
    phone: "+1 555 010 1003",
    address: "Chicago, USA",
    jobTitle: "Cybersecurity Analyst",
    summary:
      "Detail-oriented cybersecurity graduate with knowledge of network security, vulnerability assessment, and security monitoring.",
    education: [
      "BS Cybersecurity - University of Illinois (2021–2025)",
    ],
    experience: [
      "Security Intern - SecureTech (2024): Assisted with vulnerability assessments and security documentation.",
      "IT Support Trainee - Digital Systems (2023): Helped troubleshoot technical and network issues.",
    ],
    skills: ["Network Security", "Linux", "Nmap", "Wireshark", "Python", "Risk Assessment"],
    projects: [
      "Network Vulnerability Assessment: Identified potential network security weaknesses.",
      "Password Strength Checker: Built a basic tool to evaluate password strength.",
    ],
  },

  "4": {
    fullName: "Sophia Martinez",
    email: "sophia.martinez@example.com",
    phone: "+1 555 010 1004",
    address: "Miami, USA",
    jobTitle: "Graphic Designer",
    summary:
      "Visual designer with a passion for branding, digital illustration, and creating engaging designs that communicate ideas effectively.",
    education: [
      "BA Graphic Design - Miami Arts University (2021–2025)",
    ],
    experience: [
      "Graphic Designer - Bright Designs (2025–Present): Created digital graphics and branding materials.",
      "Design Intern - Studio Creative (2024): Assisted with social media graphics and promotional designs.",
    ],
    skills: ["Adobe Photoshop", "Illustrator", "InDesign", "Canva", "Typography", "Branding"],
    projects: [
      "Brand Identity: Designed a complete visual identity for a fictional café.",
      "Social Media Campaign: Created promotional graphics for a digital campaign.",
    ],
  },
};

export default sampleResumeDetails;
