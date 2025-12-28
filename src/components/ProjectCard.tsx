import React from "react";
import { ProjectCardProps } from "../types/types";

export function ProjectCard({ project }: ProjectCardProps) {
  const titleId = `${project.id}-title`;
  const descriptionId = `${project.id}-desc`;

  return (
    <article
      className="project-card"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      data-variant={project.variant}
    >
      {project.category && (
        <div className="project-card__category" aria-label="Project category">
          {project.category}
        </div>
      )}
      <div className="project-card__icon" aria-hidden="true" role="img">
        <span>{project.iconEmoji}</span>
      </div>
      <h3 id={titleId} className="project-card__title">
        {project.title}
      </h3>
      {project.period && (
        <p className="project-card__period">{project.period}</p>
      )}
      <p id={descriptionId} className="project-card__description">
        {project.description}
      </p>
      <ul className="project-card__stack" aria-label="Technology stack">
        {project.stack.map((tech) => (
          <li key={tech} className="project-card__stack-item">
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}
