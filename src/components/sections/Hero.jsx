import Image from "next/image";
import DotLogo from "@/components/ui/DotLogo";
import { getHero } from "@/lib/sanity/queries";

export default async function Hero() {
  const hero = await getHero();

  return (
    <section id="hero" className="relative flex flex-col md:h-svh md:flex-row">
      <div className="relative h-[55vh] w-full md:h-full md:w-1/2">
        <Image
          src={hero.imageUrl}
          alt={hero.imageAlt}
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="relative flex w-full flex-col justify-center gap-6 bg-paper px-6 py-12 md:w-1/2 md:px-16 md:py-0 lg:px-20">
        <div className="flex items-center gap-3">
          <DotLogo size={36} />
          <span className="font-display text-xl tracking-wide text-ink md:text-2xl">
            studio tropicalwest
          </span>
        </div>

        <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {hero.eyebrow}
        </span>

        <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl">
          {hero.heading} <span className="text-accent">{hero.accentWord}</span>
        </h1>

        <p className="max-w-sm text-base text-ink-soft md:text-lg">
          {hero.subtext}
        </p>

        <a
          href="#work"
          className="group mt-2 inline-flex w-fit items-center gap-2 border-b border-ink pb-1 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
        >
          View our work
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
