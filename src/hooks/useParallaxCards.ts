import { useEffect } from "react";

export function useParallaxCards() {
  useEffect(() => {
    // Disabled parallax - it conflicts with hover animations
    // Keeping smooth scroll for anchor links instead
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.hash) {
        const href = target.getAttribute("href");
        if (href?.startsWith("#")) {
          e.preventDefault();
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };
    
    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);
}
