import React from "react";
import { LocationInfo } from "../types/types";
import { MapBackground } from "./MapBackground";

export interface LocationCardProps {
  location: LocationInfo;
}

export function LocationCard({ location }: LocationCardProps) {
  return (
    <section className="card location-card" aria-labelledby="location-heading">
      <h3 id="location-heading" className="sr-only">
        {location.heading}
      </h3>
      <MapBackground lat={location.lat} lng={location.lng} zoom={location.zoom ?? 11} />
    </section>
  );
}
