"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import DotLogo from "@/components/ui/DotLogo";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function MobileNav({ links }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center gap-1 md:hidden">
      <ThemeToggle />
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger
          aria-label="Open menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
        >
          <span className="h-px w-6 bg-ink" />
          <span className="h-px w-6 bg-ink" />
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-ink-fixed/30 backdrop-blur-sm transition-opacity" />
          <Dialog.Content
            aria-describedby={undefined}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col gap-10 border-l border-line/60 bg-paper/60 px-8 py-8 shadow-xl backdrop-blur-xl backdrop-saturate-150"
          >
            <div className="flex items-center justify-between">
              <DotLogo size={24} />
              <Dialog.Close
                aria-label="Close menu"
                className="text-sm uppercase tracking-wide text-ink-soft"
              >
                Close
              </Dialog.Close>
            </div>
            <Dialog.Title className="sr-only">Navigation menu</Dialog.Title>
            <nav className="flex flex-col gap-6">
              {links.map((link) => (
                <Dialog.Close asChild key={link.href}>
                  <a href={link.href} className="font-display text-2xl text-ink">
                    {link.label}
                  </a>
                </Dialog.Close>
              ))}
            </nav>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
