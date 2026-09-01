"use client";

import { useEffect, useState } from "react";
import DotLogo from "@/components/ui/DotLogo";
import ThemeToggle from "@/components/ui/ThemeToggle";
import MobileNav from "./MobileNav";

const NAV_LINKS = [
  { href: "#studio", label: "Studio" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#work", label: "Selected Works" },
  { href: "#founders", label: "Founders" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("hero");
    const threshold = () =>
      heroEl ? heroEl.offsetHeight * 0.8 : window.innerHeight * 0.75;
    const onScroll = () => setPastHero(window.scrollY > threshold());
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-paper/60 shadow-sm backdrop-blur-xl backdrop-saturate-150",
        "transition-all duration-500 ease-out",
        pastHero
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none",
        "md:translate-y-0 md:opacity-100 md:pointer-events-auto",
      ].join(" ")}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#hero" className="flex items-center gap-2.5">
          <DotLogo size={26} />
          <span className="font-display text-sm tracking-wide text-ink">
            studio tropicalwest
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <MobileNav links={NAV_LINKS} />
      </div>
    </header>
  );
}
