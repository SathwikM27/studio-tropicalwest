import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { getBrands } from "@/lib/sanity/queries";

export default async function Brands() {
  const brands = await getBrands();

  return (
    <SectionWrapper id="brands" tone="soft">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Brands We Use"
          title="Trusted suppliers and partners we work with regularly"
        />

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 md:gap-x-10 md:gap-y-14">
          {brands.map((brand, index) => (
            <Reveal
              key={brand._id}
              direction="up"
              delay={(index % 4) * 60}
              className="flex items-center justify-center"
            >
              {brand.logoUrl ? (
                <Image
                  src={brand.logoUrl}
                  alt={brand.name}
                  width={140}
                  height={56}
                  className="h-10 w-auto object-contain grayscale opacity-70 transition-opacity hover:opacity-100 dark:invert md:h-12"
                />
              ) : (
                <span className="text-sm font-medium uppercase tracking-wide text-ink-soft/70">
                  {brand.name}
                </span>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
