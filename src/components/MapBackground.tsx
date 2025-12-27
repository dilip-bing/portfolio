import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export interface MapBackgroundProps {
  lat: number;
  lng: number;
  zoom?: number;
}

export function MapBackground({ lat, lng, zoom = 11 }: MapBackgroundProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (!mapRef.current) {
      mapRef.current = L.map(containerRef.current, {
        center: [lat, lng],
        zoom,
        zoomControl: false,
        scrollWheelZoom: true,
        dragging: true,
        attributionControl: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "",
        maxZoom: 19,
      }).addTo(mapRef.current);

      // Custom emoji marker
      const emojiIcon = L.divIcon({
        className: "custom-emoji-marker",
        html: '<span style="font-size: 32px;">📍</span>',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
      });

      L.marker([lat, lng], { icon: emojiIcon }).addTo(mapRef.current);

      // Force map to recalculate size after render
      setTimeout(() => {
        if (mapRef.current) {
          mapRef.current.invalidateSize();
        }
      }, 100);
    } else {
      mapRef.current.setView([lat, lng], zoom);
      mapRef.current.invalidateSize();
    }

    return () => {
      // Do not destroy map between renders; only on unmount
    };
  }, [lat, lng, zoom]);

  useEffect(() => {
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  const handleZoomIn = () => {
    if (mapRef.current) {
      mapRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (mapRef.current) {
      mapRef.current.zoomOut();
    }
  };

  return (
    <div className="map-bg">
      <div ref={containerRef} className="map-bg__leaflet" />
      <div className="map-controls">
        <button
          type="button"
          className="map-control map-control--left"
          onClick={handleZoomOut}
          aria-label="Zoom out"
        >
          −
        </button>
        <button
          type="button"
          className="map-control map-control--right"
          onClick={handleZoomIn}
          aria-label="Zoom in"
        >
          +
        </button>
      </div>
    </div>
  );
}
