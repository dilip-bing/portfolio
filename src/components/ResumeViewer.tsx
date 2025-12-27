import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export interface ResumeViewerProps {
  src: string;
  open: boolean;
  onClose: () => void;
}

export function ResumeViewer({ src, open, onClose }: ResumeViewerProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      // lock background scroll when modal is open
      const prevHtmlOverflow = document.documentElement.style.overflow;
      const prevBodyOverflow = document.body.style.overflow;
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", onKey);
        document.documentElement.style.overflow = prevHtmlOverflow;
        document.body.style.overflow = prevBodyOverflow;
      };
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      onClick={onClose}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h3 id="resume-title" className="modal__title">Resume</h3>
          <div className="modal__actions">
            <a href={src} download className="icon-button" aria-label="Download resume">⬇️</a>
            <button type="button" className="icon-button" aria-label="Close" onClick={onClose}>✖️</button>
          </div>
        </div>
        <div className="modal__content">
          <iframe title="Resume PDF" src={src} className="modal__iframe" />
        </div>
      </div>
    </div>,
    document.body
  );
}
