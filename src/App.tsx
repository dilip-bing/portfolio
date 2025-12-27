import React, { useEffect } from "react";
import { useContent } from "./hooks/useContent";
import { HomeGrid } from "./components/HomeGrid";

export default function App() {
  const { content } = useContent();

  useEffect(() => {
    if (content?.metaTitle) {
      document.title = content.metaTitle;
    }
  }, [content?.metaTitle]);

  return (
    <div className="container">
      <header className="site-header">
        <div className="logo" aria-label="Site logo">dilip</div>
        <nav className="site-nav" aria-label="Primary">
          {content?.nav?.map((item) => (
            <a key={item.href} href={item.href} aria-label={item.label}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>
      <main>
        <HomeGrid />
      </main>
      <footer className="site-footer" aria-label="Footer">
        <small>&copy; {new Date().getFullYear()} Dilip Kumar</small>
      </footer>
    </div>
  );
}
