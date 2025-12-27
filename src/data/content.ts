import { SiteContent } from "../types/types";

export const content: SiteContent = {
  metaTitle: "Dilip Kumar - Developer & Engineer",
  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    avatarEmoji: "👨‍💻",
    titlePrefix: "I'm",
    name: "Dilip Kumar",
    titleSuffix: ", a developer and engineer from India.",
    description:
      "I'm interested in Android Development, iOS Automation, Cloud Infrastructure, AI/ML, Automation Engineering, and Full-Stack Development.",
  },
  location: {
    heading: "Based in",
    basedIn: "Binghamton, NY",
    details:
      "Currently pursuing MS in Computer Science (AI Track) at Binghamton University",
  },
  skills: [
    "Android",
    "iOS",
    "React",
    "Python",
    "Java",
    "Kotlin",
    "Swift",
    "Docker",
    "AWS",
    "TensorFlow",
  ],
  projects: [
    {
      id: "gym-sync",
      title: "Gym Sync",
      description:
        "Dynamic AI-powered workout recommendation engine that analyzes user images to generate personalized fitness schedules with automated volume adjustments.",
      stack: ["React", "TypeScript", "Firebase", "Vercel"],
      iconEmoji: "🏋️",
      variant: "blue",
    },
    {
      id: "test-lab",
      title: "Test-Lab",
      description:
        "Led development of cloud-based testing infrastructure with custom Mobile Farm for virtual and real device testing. Managed full project lifecycle from ideation to deployment.",
      stack: ["React", "MongoDB", "Docker", "Android"],
      iconEmoji: "🧪",
      variant: "green",
    },
    {
      id: "earthworm",
      title: "Earthworm",
      description:
        "AI diagnostic system using Inception V3 for plant disease detection from leaf imagery. Achieved 95% accuracy across 17 disease categories.",
      stack: ["Python", "TensorFlow", "Computer Vision"],
      iconEmoji: "🌱",
      variant: "pink",
    },
  ],
  experience: {
    role: "Senior Automation Engineer",
    company: "Zoho Corporation",
    period: "January 2020 – July 2025",
    summary:
      "Architected custom Android Automation SDK from scratch, establishing core framework for entire automation team. Authored over 50,000 UI and E2E test cases across Android, iOS, and Web platforms. Developed complete automation environment with custom mobile apps and website interfaces.",
    logoLabel: "Z",
  },
  contacts: [
    {
      label: "Email",
      href: "mailto:dthirukondac@binghamton.edu",
      type: "email",
      display: "dthirukondac@binghamton.edu",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/dilipkumartc",
      type: "linkedin",
      display: "linkedin.com/in/dilipkumartc",
    },
    {
      label: "GitHub",
      href: "https://github.com/dilip-bing",
      type: "github",
      display: "github.com/dilip-bing",
    },
    {
      label: "Phone",
      href: "tel:+16076249390",
      type: "phone",
      display: "(607) 624-9390",
    },
  ],
};
