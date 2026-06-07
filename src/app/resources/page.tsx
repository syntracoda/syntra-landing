"use client";

import Link from "next/link";

import { CTAButton } from "@/components/site/CTAButton";
import { FeatureCard } from "@/components/site/FeatureCard";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { resourceCards } from "@/lib/site-data";

export default function ResourcesPage() {
  return (
    <MarketingPageLayout>
      <PageHero
        eyebrow="Resources"
        title="Learn more about Syntra and the AI workforce platform."
        body="Founder walkthroughs, workflow analysis, platform docs, and early access — everything you need to understand how Syntra works."
      />

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Explore"
            title="Resources to help you get started."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resourceCards.map((card) => (
              <Link key={card.id} href={card.href} className="group block">
                <FeatureCard title={card.title} body={card.body} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20" id="product-roadmap">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.2rem] border border-[rgba(37,99,235,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(249,251,255,0.9)_100%)] px-8 py-10 shadow-[0_22px_80px_rgba(36,51,79,0.05)] md:px-10">
            <SectionHeader
              centered
              eyebrow="Product Roadmap"
              title="Where Syntra is headed."
              body="The Executive Assistant is active now. Additional workers and platform capabilities are in development."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="rounded-[1.8rem] border border-white/78 bg-white p-6 shadow-[0_14px_40px_rgba(36,51,79,0.04)]">
                <p className="bg-[linear-gradient(135deg,var(--accent)_0%,var(--accent-strong)_52%,var(--accent-cyan)_100%)] bg-clip-text text-sm font-semibold uppercase tracking-[0.18em] text-transparent">
                  Now
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
                  Executive Assistant active
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  The first AI worker is live. Inbox review, calendar
                  preparation, follow-up surfacing, and daily briefings are
                  operational.
                </p>
              </div>
              <div className="rounded-[1.8rem] border border-white/78 bg-white p-6 shadow-[0_14px_40px_rgba(36,51,79,0.04)]">
                <p className="bg-[linear-gradient(135deg,var(--accent)_0%,var(--accent-strong)_52%,var(--accent-cyan)_100%)] bg-clip-text text-sm font-semibold uppercase tracking-[0.18em] text-transparent">
                  Next
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
                  Expanding the worker layer
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Project management, constituent issues, legislative watch,
                  and operations agents are on the roadmap.
                </p>
              </div>
            </div>
            <div className="mt-10 text-center">
              <CTAButton href="/request-access">
                Request Early Access
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </MarketingPageLayout>
  );
}
