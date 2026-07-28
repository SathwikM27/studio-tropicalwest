import Container from "./Container";

const TONES = {
  paper: "bg-paper text-ink",
  soft: "bg-paper-soft text-ink",
  dark: "bg-ink text-paper",
};

export default function SectionWrapper({
  id,
  tone = "paper",
  bleed = false,
  scrollOffset = "6rem",
  className = "",
  containerClassName = "",
  children,
}) {
  return (
    <section
      id={id}
      style={{ scrollMarginTop: scrollOffset }}
      className={`${TONES[tone]} ${className}`}
    >
      {bleed ? (
        children
      ) : (
        <Container className={`py-16 md:py-24 ${containerClassName}`}>
          {children}
        </Container>
      )}
    </section>
  );
}
