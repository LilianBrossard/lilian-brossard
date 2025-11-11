"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  const toggleTheme = () => {
    // Logic to toggle theme
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="clipPath-Button-Double bg-(--accentuation) relative inline-flex p-1 h-10 w-20 items-center transition-colors duration-300"
    >
      <span
        className={`inline-block h-full w-full transform transition-transform ${
          theme === "dark" ? "translate-x-1/2" : "translate-x-0"
        }`}
      >
        <svg
          className={`absolute inset-0 h-full w-1/2 transition-all duration-500 ${
            theme === "dark"
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="5" fill="var(--accentuation-inverse)" />
          <g
            stroke="var(--accentuation-inverse)"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </g>
        </svg>

        {/* Moon SVG */}
        <svg
          className={`absolute inset-0 h-full w-1/2 transition-all duration-500 ${
            theme === "dark"
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          }`}
          fill="var(--accentuation-inverse)"
          viewBox="0 0 24 24"
        >
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            fill="var(--accentuation-inverse)"
          />
        </svg>
      </span>
    </button>
  );
}
