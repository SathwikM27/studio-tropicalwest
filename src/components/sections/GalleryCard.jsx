"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export default function GalleryCard({ work, reversed }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`flex flex-col overflow-hidden rounded-2xl bg-paper-soft md:flex-row md:items-stretch md:overflow-visible md:rounded-none md:bg-transparent ${
        reversed ? "md:flex-row-reverse" : ""
      }`}
    >
      <Reveal
        direction={reversed ? "right" : "left"}
        className="relative aspect-[4/3] w-full md:w-1/2"
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={`${open ? "Hide" : "Show"} details for ${work.title}`}
          className="absolute inset-0 block h-full w-full text-left md:pointer-events-none"
        >
          <Image
            src={work.imageUrl}
            alt={work.imageAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover md:rounded-2xl"
          />

          {/* Mobile-only: caption stays hidden until the image is tapped.
              Sits on top of the photo's own dark scrim, so these stay fixed
              light-on-dark regardless of site theme. */}
          <span
            className={`absolute inset-x-0 bottom-0 flex flex-col gap-0.5 bg-gradient-to-t from-ink-fixed/85 via-ink-fixed/35 to-transparent px-5 pb-5 pt-12 transition-all duration-300 md:hidden ${
              open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
          >
            <span className="font-display text-xl text-paper-fixed">{work.title}</span>
            <span className="text-xs text-paper-fixed/80">{work.location}</span>
          </span>

          <span
            className={`absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-paper-fixed text-ink-fixed shadow-md transition-opacity duration-300 md:hidden ${
              open ? "opacity-0" : "opacity-100"
            }`}
          >
            <PlusIcon />
          </span>
        </button>
      </Reveal>

      <Reveal
        direction={reversed ? "left" : "right"}
        delay={90}
        className="hidden flex-col justify-center gap-2 p-6 md:flex md:w-1/2 md:p-10 lg:p-14"
      >
        <h3 className="font-display text-2xl text-ink md:text-3xl">
          {work.title}
        </h3>
        <p className="text-sm text-ink-soft md:text-base">{work.location}</p>
      </Reveal>
    </div>
  );
}
