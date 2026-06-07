import type { ReactNode } from "react";

import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";

type MarketingPageLayoutProps = {
  children: ReactNode;
};

export function MarketingPageLayout({ children }: MarketingPageLayoutProps) {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="px-6 pb-6 pt-8">
        <div className="mx-auto max-w-7xl">
          <SiteNav />
        </div>
      </section>
      {children}
      <SiteFooter />
    </main>
  );
}
