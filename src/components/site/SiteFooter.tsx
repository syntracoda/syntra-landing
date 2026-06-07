import Link from "next/link";

import { footerLinks } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="px-6 pb-10 pt-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-[var(--line)] pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>Copyright 2026 Syntra. AI Workforce OS for business operations.</p>
        <div className="flex flex-wrap items-center gap-4">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[var(--foreground)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
