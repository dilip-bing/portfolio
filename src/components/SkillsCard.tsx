import React from "react";

export interface SkillsCardProps {
  skills: string[];
}

export function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <section className="card skills-card" aria-labelledby="skills-heading">
      <h3 id="skills-heading" className="skills-card__heading">Tech Stack</h3>
      <div className="skills-card__tags" role="list">
        {skills.map((skill) => (
          <span role="listitem" key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
