import React, { useState } from "react";
import { ContactLink } from "../types/types";
import { ResumeViewer } from "./ResumeViewer";

export interface ContactCardProps {
  contacts: ContactLink[];
}

export function ContactCard({ contacts }: ContactCardProps) {
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const resumeSrc = contacts.find((c) => c.type === "resume")?.href ?? "/resume.pdf";

  return (
    <section className="card contact-card" id="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="contact-card__heading">Let's Connect</h2>
      <div className="contact-card__links">
        {contacts.map((c) => {
          if (c.type === "resume") {
            return (
              <div key={c.href} className="contact-link" role="group" aria-label="Resume">
                <div className="contact-icon" aria-hidden="true">
                  <span>📄</span>
                </div>
                <div>
                  <button type="button" className="link-button" onClick={() => setResumeOpen(true)} aria-label="View resume">
                    <div className="contact-card__label">{c.label}</div>
                    <div className="contact-card__display">{c.display}</div>
                  </button>
                </div>
                <a href={c.href} download className="icon-button" aria-label="Download resume">⬇️</a>
              </div>
            );
          }
          return (
            <a
              key={c.href}
              href={c.href}
              className="contact-link"
              target={c.type === "email" || c.type === "phone" ? undefined : "_blank"}
              rel={c.type === "email" || c.type === "phone" ? undefined : "noopener noreferrer"}
            >
              <div className="contact-icon" aria-hidden="true">
                {c.type === "email" && <span>📧</span>}
                {c.type === "linkedin" && <span>💼</span>}
                {c.type === "github" && <span>💻</span>}
                {c.type === "phone" && <span>📱</span>}
              </div>
              <div>
                <div className="contact-card__label">{c.label}</div>
                <div className="contact-card__display">{c.display}</div>
              </div>
            </a>
          );
        })}
      </div>
      <ResumeViewer src={resumeSrc} open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}
