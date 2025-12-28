import React, { useState } from "react";
import { createPortal } from "react-dom";
import { SkillGroup } from "../types/types";

export interface SkillsCardProps {
  skillGroups: SkillGroup[];
}

const INITIAL_DISPLAY = 10;

export function SkillsCard({ skillGroups }: SkillsCardProps) {
  const [showAll, setShowAll] = useState(false);

  // Flatten all skills for initial display
  const allSkills = skillGroups.flatMap((group) => group.skills);
  const visibleSkills = allSkills.slice(0, INITIAL_DISPLAY);
  const hasMore = allSkills.length > INITIAL_DISPLAY;
  const hiddenCount = allSkills.length - INITIAL_DISPLAY;

  return (
    <>
      <section className="card skills-card" aria-labelledby="skills-heading">
        <h3 id="skills-heading" className="skills-card__heading">Tech Stack</h3>
        <div className="skills-card__tags" role="list">
          {visibleSkills.map((skill) => (
            <span role="listitem" key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
          {hasMore && (
            <button
              type="button"
              className="skill-tag skill-tag__more"
              onClick={() => setShowAll(true)}
              aria-label={`Show ${hiddenCount} more skills`}
            >
              +{hiddenCount} more
            </button>
          )}
        </div>
      </section>

      {showAll &&
        createPortal(
          <div className="modal-overlay" onClick={() => setShowAll(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal__header">
                <h3 className="modal__title">All Skills</h3>
                <button
                  type="button"
                  className="icon-button"
                  onClick={() => setShowAll(false)}
                  aria-label="Close"
                >
                  ✖️
                </button>
              </div>
              <div className="modal__content">
                <div className="skills-modal__groups">
                  {skillGroups.map((group) => (
                    <div key={group.name} className="skill-modal__group">
                      <h4 className="skill-modal__group-name">{group.name}</h4>
                      <div className="skills-card__tags">
                        {group.skills.map((skill) => (
                          <span key={skill} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
