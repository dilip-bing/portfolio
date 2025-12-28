import { useEffect, useState } from "react";
import {
  SiteContent,
  MenuItem,
  HeroContent,
  LocationInfo,
  Project,
  ProjectVariant,
  Experience,
  Education,
  EducationItem,
  ContactLink,
  ContactType,
} from "../types/types";

function isMenuItem(value: unknown): value is MenuItem {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as MenuItem).label === "string" &&
    typeof (value as MenuItem).href === "string"
  );
}

function isProjectVariant(v: unknown): v is ProjectVariant {
  return v === "blue" || v === "green" || v === "pink";
}

function isProject(value: unknown): value is Project {
  if (typeof value !== "object" || value === null) return false;
  const p = value as Project;
  return (
    typeof p.id === "string" &&
    typeof p.title === "string" &&
    typeof p.description === "string" &&
    Array.isArray(p.stack) && p.stack.every((t) => typeof t === "string") &&
    typeof p.iconEmoji === "string" &&
    isProjectVariant(p.variant) &&
    (p.href === undefined || typeof p.href === "string")
  );
}

function isHero(value: unknown): value is HeroContent {
  if (typeof value !== "object" || value === null) return false;
  const h = value as HeroContent;
  return (
    typeof h.avatarEmoji === "string" &&
    typeof h.titlePrefix === "string" &&
    typeof h.name === "string" &&
    typeof h.titleSuffix === "string" &&
    typeof h.description === "string"
  );
}

function isLocation(value: unknown): value is LocationInfo {
  if (typeof value !== "object" || value === null) return false;
  const l = value as LocationInfo;
  return (
    typeof l.heading === "string" &&
    typeof l.basedIn === "string" &&
    typeof l.details === "string" &&
    typeof l.lat === "number" &&
    typeof l.lng === "number" &&
    (l.zoom === undefined || typeof l.zoom === "number")
  );
}

function isExperience(value: unknown): value is Experience {
  if (typeof value !== "object" || value === null) return false;
  const e = value as Experience;
  return (
    typeof e.role === "string" &&
    typeof e.company === "string" &&
    typeof e.period === "string" &&
    typeof e.summary === "string" &&
    typeof e.logoLabel === "string"
  );
}

function isEducationItem(value: unknown): value is EducationItem {
  if (typeof value !== "object" || value === null) return false;
  const ei = value as EducationItem;
  return (
    typeof ei.degree === "string" &&
    typeof ei.school === "string" &&
    typeof ei.details === "string"
  );
}

function isEducation(value: unknown): value is Education {
  if (typeof value !== "object" || value === null) return false;
  const ed = value as Education;
  return (
    typeof ed.iconEmoji === "string" &&
    typeof ed.heading === "string" &&
    Array.isArray(ed.items) && ed.items.every(isEducationItem)
  );
}

function isContactType(v: unknown): v is ContactType {
  return (
    v === "email" ||
    v === "linkedin" ||
    v === "github" ||
    v === "phone" ||
    v === "resume"
  );
}

function isContact(value: unknown): value is ContactLink {
  if (typeof value !== "object" || value === null) return false;
  const c = value as ContactLink;
  return (
    typeof c.label === "string" &&
    typeof c.href === "string" &&
    isContactType(c.type) &&
    typeof c.display === "string"
  );
}

function isSiteContent(value: unknown): value is SiteContent {
  if (typeof value !== "object" || value === null) return false;
  const s = value as SiteContent;
  return (
    typeof s.metaTitle === "string" &&
    Array.isArray(s.nav) && s.nav.every(isMenuItem) &&
    isHero(s.hero) &&
    isLocation(s.location) &&
    Array.isArray(s.skills) && s.skills.every((t) => typeof t === "string") &&
    isEducation(s.education) &&
    Array.isArray(s.projects) && s.projects.every(isProject) &&
    isExperience(s.experience) &&
    Array.isArray(s.contacts) && s.contacts.every(isContact)
  );
}

export function useContent() {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const baseUrl = (import.meta as any).env.BASE_URL;
        const res = await fetch(`${baseUrl}content.json`, { headers: { "Accept": "application/json" } });
        if (!res.ok) throw new Error(`Failed to load content.json: ${res.status}`);
        const json: unknown = await res.json();
        if (!isSiteContent(json)) {
          throw new Error("content.json does not match expected schema");
        }
        if (active) setContent(json);
      } catch (e) {
        if (active) setError((e as Error).message);
      } finally {
        if (active) setLoading(false);
      }
    }
    load();
    return () => {
      active = false;
    };
  }, []);

  return { content, loading, error };
}
