import React from "react";
import { ProjectsSectionProps } from "../types/types";
import { ProjectCard } from "./ProjectCard";
import { useContent } from "../hooks/useContent";

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const { content, loading, error } = useContent();
  const list = projects ?? content?.projects ?? [];

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="projects-section"
      role="region"
    >
      <h2 id="projects-heading" className="projects-section__heading">
        Projects
      </h2>
      {loading && <p aria-live="polite">Loading projects…</p>}
      {error && (
        <p role="alert" aria-live="assertive">
          {error}
        </p>
      )}
      <div className="projects-section__grid" role="list">
        {list.map((project) => (
          <div role="listitem" key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
