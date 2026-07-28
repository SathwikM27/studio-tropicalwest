import SectionWrapper from "@/components/ui/SectionWrapper";
import Reveal from "@/components/ui/Reveal";

export default function Philosophy() {
  return (
    <SectionWrapper id="philosophy" tone="soft">
      <Reveal direction="up" className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Philosophy
        </span>
        <p className="font-display text-2xl italic leading-relaxed text-ink md:text-4xl">
          &ldquo;Good design isn&apos;t decided in isolation — it&apos;s shaped
          by the people who live in a space and the culture that surrounds
          it.&rdquo;
        </p>
        <p className="max-w-xl text-sm leading-relaxed text-ink-soft md:text-base">
          We design slowly, listen closely, and build spaces that age well —
          in materials, in memory, and in everyday use.
        </p>
      </Reveal>
    </SectionWrapper>
  );
}
