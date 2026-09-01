"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

function SunIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" {...props}>
      <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M9 1.5v2M9 14.5v2M16.5 9h-2M3.5 9h-2M14.36 3.64l-1.41 1.41M5.05 12.95l-1.41 1.41M14.36 14.36l-1.41-1.41M5.05 5.05 3.64 3.64"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15 10.5A6.5 6.5 0 0 1 7.5 3 6.5 6.5 0 1 0 15 10.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ThemeToggle({ className = "" }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid a hydration mismatch: resolvedTheme is unknown on the server.
  // This one-time mount flag is next-themes' documented pattern for it.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`flex h-8 w-8 items-center justify-center text-ink-soft transition-colors hover:text-ink ${className}`}
    >
      {mounted ? isDark ? <SunIcon /> : <MoonIcon /> : <span className="h-[18px] w-[18px]" />}
    </button>
  );
}
