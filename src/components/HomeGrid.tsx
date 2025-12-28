import React from "react";
import { useContent } from "../hooks/useContent";
import { useParallaxCards } from "../hooks/useParallaxCards";
import { HeroCard } from "./HeroCard";
import { LocationCard } from "./LocationCard";
import { SkillsCard } from "./SkillsCard";
import { EducationCard } from "./EducationCard";
import { ProjectCard } from "./ProjectCard";
import { ExperienceCard } from "./ExperienceCard";
import { ContactCard } from "./ContactCard";

export function HomeGrid() {
  const { content, loading, error } = useContent();
  useParallaxCards();

  if (loading) return <p aria-live="polite">Loading content…</p>;
  if (error || !content) return <p role="alert">{error ?? "Failed to load content"}</p>;

  return (
    <div className="grid">
      {/* Row 1: Personal Info */}
      {/* Hero (span 6) */}
      <div className="grid-span-6">
        <HeroCard hero={content.hero} />
      </div>

      {/* Location (span 3) */}
      <div className="grid-span-3">
        <LocationCard location={content.location} />
      </div>

      {/* Skills (span 3) */}
      <div className="grid-span-3">
        <SkillsCard skillGroups={content.skillGroups} />
      </div>

      {/* Row 2: Background - Education & Experience */}
      {/* Education (span 6) */}
      <div className="grid-span-6">
        <EducationCard education={content.education} />
      </div>

      {/* Experience (span 6) */}
      <div className="grid-span-6">
        <ExperienceCard experience={content.experience} />
      </div>

      {/* Row 3: Projects Section */}
      <div id="projects" className="grid-span-12 projects-anchor">
        <h2 className="section-heading">Projects</h2>
      </div>
      {content.projects.map((p) => (
        <div key={p.id} className="grid-span-4">
          <ProjectCard project={p} />
        </div>
      ))}

      {/* Row 4: Contact */}
      {/* Contact (span 12 for full width emphasis) */}
      <div className="grid-span-12">
        <ContactCard contacts={content.contacts} />
      </div>
    </div>
  );
}
