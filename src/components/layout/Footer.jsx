import DotLogo from "@/components/ui/DotLogo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink px-6 py-6 text-xs text-paper/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <DotLogo size={18} tone="light" />
          <span className="font-display text-paper/80">studio tropicalwest</span>
        </div>
        <p>© {year} Studio Tropicalwest. All rights reserved.</p>
      </div>
    </footer>
  );
}
