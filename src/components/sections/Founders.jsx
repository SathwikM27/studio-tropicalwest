import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { getFounders } from "@/lib/sanity/queries";

export default async function Founders() {
  const founders = await getFounders();

  return (
    <SectionWrapper id="founders" tone="paper" scrollOffset="-3rem">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Meet the Founders"
          title="The people behind the studio"
        />

        <div className="flex flex-col gap-10 md:gap-14">
          {founders.map((founder, index) => (
            <Reveal
              key={founder._id}
              direction="left"
              delay={index * 90}
              className="flex gap-5 md:gap-8"
            >
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl grayscale md:h-32 md:w-32">
                <Image
                  src={founder.photoUrl}
                  alt={founder.name}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-1.5 pt-1">
                <h3 className="font-display text-xl text-ink md:text-2xl">
                  {founder.name}
                </h3>
                <p className="text-sm text-ink-soft">{founder.role}</p>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft/90 md:text-base">
                  {founder.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
