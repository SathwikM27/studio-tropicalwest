import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryCard from "./GalleryCard";
import { getGalleryWorks } from "@/lib/sanity/queries";

export default async function Gallery() {
  const works = await getGalleryWorks();

  return (
    <SectionWrapper id="work" tone="paper">
      <div className="flex flex-col gap-10 md:gap-16">
        <SectionHeading
          eyebrow="Selected Works"
          title="A glimpse into spaces shaped by people, culture & function"
        />

        <div className="flex flex-col gap-8 md:gap-20">
          {works.map((work, index) => (
            <GalleryCard key={work._id} work={work} reversed={index % 2 === 1} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
