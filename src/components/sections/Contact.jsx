import Image from "next/image";
import DotLogo from "@/components/ui/DotLogo";
import Reveal from "@/components/ui/Reveal";
import { getContactDetails } from "@/lib/sanity/queries";

function PinIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
      <path
        d="M9 16.5S15 11.5 15 7a6 6 0 1 0-12 0c0 4.5 6 9.5 6 9.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <circle cx="9" cy="7" r="2" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
      <path
        d="M4 3h3l1.2 3.4L6.8 8a8.5 8.5 0 0 0 4.2 4.2l1.6-1.4L16 12v3a1.5 1.5 0 0 1-1.6 1.5A12.5 12.5 0 0 1 3 5.6 1.5 1.5 0 0 1 4 3Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
      <rect x="2.5" y="4.5" width="13" height="9" rx="1.3" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M3 5.8 9 10l6-4.2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
      <rect x="3" y="3" width="12" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="12.5" cy="5.5" r="0.75" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
      <rect x="3" y="3" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M6.2 7.8v4.4M6.2 6v.01M8.6 12.2V9.6c0-.9.6-1.6 1.5-1.6.9 0 1.4.6 1.4 1.6v2.6"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default async function Contact() {
  const contact = await getContactDetails();

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-20 md:py-28">
      <Image
        src="/images/contact/topography.jpg"
        alt=""
        fill
        aria-hidden="true"
        sizes="100vw"
        className="object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-ink/50" />

      <div className="relative mx-auto flex w-full max-w-lg flex-col items-center gap-8 px-6">
        <Reveal direction="up">
          <DotLogo size={32} tone="light" />
        </Reveal>

        <Reveal
          direction="up"
          delay={90}
          className="w-full rounded-3xl bg-paper px-6 py-8 shadow-xl md:px-10 md:py-10"
        >
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-ink-soft">
            Contact Us:
          </p>

          <ul className="flex flex-col divide-y divide-line">
            <li className="flex items-center gap-3 py-3 text-sm text-ink">
              <PinIcon className="shrink-0 text-ink-soft" />
              {contact.address}
            </li>
            <li className="flex items-center gap-3 py-3 text-sm text-ink">
              <PhoneIcon className="shrink-0 text-ink-soft" />
              <a
                href={`tel:${contact.phone}`}
                className="rounded-full bg-accent px-5 py-1.5 text-sm font-medium text-paper transition-opacity hover:opacity-90"
              >
                Call Us
              </a>
            </li>
            <li className="flex items-center gap-3 py-3 text-sm text-ink">
              <MailIcon className="shrink-0 text-ink-soft" />
              <a href={`mailto:${contact.email}`} className="hover:text-accent">
                {contact.email}
              </a>
            </li>
            <li className="flex items-center gap-3 py-3 text-sm text-ink">
              <InstagramIcon className="shrink-0 text-ink-soft" />
              <a
                href={`https://instagram.com/${contact.instagramHandle}`}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-accent"
              >
                @{contact.instagramHandle}
              </a>
            </li>
            <li className="flex items-center gap-3 py-3 text-sm text-ink">
              <LinkedInIcon className="shrink-0 text-ink-soft" />
              {contact.linkedinLabel}
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
