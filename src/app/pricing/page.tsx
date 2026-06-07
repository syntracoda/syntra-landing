"use client";

import { CTAButton } from "@/components/site/CTAButton";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { pilotCards } from "@/lib/site-data";

export default function PricingPage() {
  return (
    <MarketingPageLayout>
      <PageHero
        eyebrow="Pricing"
        title="Pilot-based access. No fixed pricing yet."
        body="Syntra is in early access. We are working with pilot organizations to shape the platform before setting standard pricing."
        secondary="If you want to try Syntra, the fastest path is to request a pilot conversation."
      />

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            centered
            eyebrow="Pilot options"
            title="Three ways to start working with Syntra."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pilotCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[1.8rem] border border-white/78 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(246,249,255,0.92)_100%)] p-6 shadow-[0_14px_40px_rgba(36,51,79,0.04)] transition hover:border-[rgba(37,99,235,0.2)] hover:shadow-[0_18px_42px_rgba(37,99,235,0.08)]"
              >
                <h3 className="text-2xl font-semibold text-[var(--foreground)]">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-slate-500">
            Pricing details will be announced as the platform moves beyond early
            access.
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.2rem] border border-[rgba(37,99,235,0.08)] bg-[linear-gradient(135deg,rgba(124,58,237,0.03),rgba(36,201,255,0.06))] px-8 py-10 md:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <SectionHeader
                centered
                eyebrow="Not sure which path fits?"
                title="Request a pilot conversation."
                body="Tell us about your business and we will help determine the right starting point."
              />
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <CTAButton href="/request-access">
                  Request Access
                </CTAButton>
                <CTAButton
                  href="https://syntra-core.vercel.app/workflow-assessment"
                  variant="secondary"
                >
                  Try AI Workflow Analysis
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MarketingPageLayout>
  );
}
