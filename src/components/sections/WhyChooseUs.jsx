import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const REASONS = [
  {
    title: "25+ years of collective expertise",
    body: "Architecture, interiors and styling under one studio, led by co-founders who've shaped skylines and homes alike.",
  },
  {
    title: "End-to-end execution",
    body: "From concept to handover — design, procurement and site execution are managed by one accountable team.",
  },
  {
    title: "Contextual, material-first design",
    body: "Every material and detail is chosen to suit Bengaluru's light, climate and the rhythms of daily life.",
  },
  {
    title: "A calm, collaborative process",
    body: "Clear timelines, honest budgets and a design language built around how you actually live.",
  },
];

function BadgeIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      className="shrink-0 text-accent"
      aria-hidden="true"
    >
      <circle cx="14" cy="11" r="7" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M10.5 17 9 24l5-2.5L19 24l-1.5-7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhyChooseUs() {
  return (
    <SectionWrapper id="why-us" tone="paper">
      <div className="flex flex-col gap-10">
        <SectionHeading eyebrow="Why Choose Us" title="Why work with us" />

        <div className="grid gap-8 md:grid-cols-2 md:gap-x-12 md:gap-y-10">
          {REASONS.map((reason, index) => (
            <Reveal
              key={reason.title}
              direction="up"
              delay={index * 75}
              className="flex gap-4"
            >
              <BadgeIcon />
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display text-lg text-ink">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {reason.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
