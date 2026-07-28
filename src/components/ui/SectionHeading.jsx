import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "ink",
  className = "",
}) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
  const subtitleTone = tone === "paper" ? "text-paper/75" : "text-ink-soft";

  return (
    <Reveal direction="up" className={`flex flex-col gap-3 ${alignment} ${className}`}>
      {eyebrow ? (
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-medium tracking-tight md:text-4xl">{title}</h2>
      {subtitle ? (
        <p className={`max-w-xl text-base leading-relaxed ${subtitleTone}`}>
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
