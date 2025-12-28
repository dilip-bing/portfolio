// Shared TypeScript types for portfolio app

export interface MenuItem {
  label: string;
  href: string;
}

export type ProjectVariant = "blue" | "green" | "pink";

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  iconEmoji: string;
  variant: ProjectVariant;
  category?: string;
  href?: string;
  period?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  summary: string;
  logoLabel: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  details: string;
}

export interface Education {
  iconEmoji: string;
  heading: string;
  items: EducationItem[];
}

export type ContactType = "email" | "linkedin" | "github" | "phone" | "resume";

export interface ContactLink {
  label: string;
  href: string;
  type: ContactType;
  display: string;
}

export interface HeroContent {
  avatarEmoji: string;
  avatarImage?: string;
  titlePrefix: string;
  name: string;
  titleSuffix: string;
  description: string;
}

export interface LocationInfo {
  heading: string;
  basedIn: string;
  details: string;
  lat: number;
  lng: number;
  zoom?: number;
}

export interface SkillGroup {
  name: string;
  skills: string[];
}

export interface SiteContent {
  metaTitle: string;
  nav: MenuItem[];
  hero: HeroContent;
  location: LocationInfo;
  skillGroups: SkillGroup[];
  education: Education;
  projects: Project[];
  experience: Experience;
  contacts: ContactLink[];
}

// Component props
export interface ProjectCardProps {
  project: Project;
}

export interface ProjectsSectionProps {
  projects: Project[];
}
