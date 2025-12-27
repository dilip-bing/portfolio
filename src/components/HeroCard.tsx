import React from "react";
import { HeroContent } from "../types/types";

export interface HeroCardProps {
  hero: HeroContent;
}

export function HeroCard({ hero }: HeroCardProps) {
  return (
    <section className="card hero-card" id="about" aria-labelledby="hero-title">
      <div className="hero-card__avatar" aria-hidden="true" role="img">
        <span>{hero.avatarEmoji}</span>
      </div>
      <h1 id="hero-title" className="hero-card__title">
        {hero.titlePrefix} <span className="hero-card__name">{hero.name}</span>
        {hero.titleSuffix}
      </h1>
      <p className="hero-card__description">{hero.description}</p>
    </section>
  );
}
