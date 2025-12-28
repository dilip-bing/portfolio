import React from "react";
import { Experience } from "../types/types";

export interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <section className="card experience-card" id="experience" aria-labelledby="exp-heading">
      <h3 id="exp-heading" className="exp-card__heading">Professional Experience</h3>
      
      <div className="exp-card__role-row">
        <div className="exp-card__role-text">
          <div className="exp-card__role">{experience.role}</div>
          <p className="exp-card__meta">
            {experience.company}  {experience.period}
          </p>
        </div>
        <img
          className="exp-card__logo-img"
          src={`${(import.meta as any).env.BASE_URL}zoho-logo-web.svg`}
          alt={`${experience.company} logo`}
        />
      </div>

      <ul className="exp-card__achievements">
        <li>Architected a custom Android Automation SDK from scratch featuring advanced safety and precision testing protocols, establishing the core framework currently utilized by the entire automation team</li>
        <li>Authored and systematized over 50,000 UI and E2E cases and numerous Unit cases for Android, iOS, and Web platforms</li>
        <li>Developed a complete automation environment consisting of custom mobile apps and website interfaces, providing the necessary infrastructure for developers and managers to execute runs and analyze results</li>
      </ul>
    </section>
  );
}