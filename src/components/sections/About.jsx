import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <SectionWrapper id="studio" tone="paper">
      <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div className="flex flex-col gap-6">
          <SectionHeading
            align="left"
            eyebrow="Design Studio"
            title="Shaped by people, culture and place."
          />
          <Reveal direction="left" delay={90} className="rounded-2xl bg-paper-soft p-6 md:p-8">
            <p className="text-base leading-relaxed text-ink-soft md:text-lg">
              Studio Tropicalwest designs homes and interiors that respond to
              the people who live in them and the culture around them —
              tropical light, local material, everyday ritual. Every project
              begins as a conversation and ends as a space that feels
              inevitable, not imposed.
            </p>
          </Reveal>
        </div>

        <Reveal
          direction="right"
          className="relative h-72 w-full overflow-hidden rounded-2xl md:h-[28rem]"
        >
          <Image
            src="/images/gallery/pelican-square/living-room.jpg"
            alt="Double-height living room with a beige sectional sofa and floor-to-ceiling windows at Pelican Square Villa, Bengaluru"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
