import React from "react";
import { Education } from "../types/types";

export interface EducationCardProps {
  education: Education;
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <section className="card education-card" aria-labelledby="education-heading">
      <div className="education-card__icon" aria-hidden="true" role="img">
        <span>{education.iconEmoji}</span>
      </div>
      <h3 id="education-heading" className="education-card__heading">
        {education.heading}
      </h3>
      <div className="education-card__items">
        {education.items.map((item, idx) => (
          <div key={idx} className="edu-item">
            <div className="edu-item__degree">{item.degree}</div>
            <div className="edu-item__school-row">
              <div className="edu-item__school">{item.school}</div>
              {item.school.includes("Binghamton University") && (
                <img
                  className="edu-item__school-logo"
                  src={`${(import.meta as any).env.BASE_URL}bing.png`}
                  alt="Binghamton University logo"
                />
              )}
            </div>
            <div className="edu-item__details">{item.details}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
