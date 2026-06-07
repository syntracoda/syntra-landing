"use client";

import { CTAButton } from "@/components/site/CTAButton";
import { FeatureCard } from "@/components/site/FeatureCard";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useCases } from "@/lib/site-data";

export default function UseCasesPage() {
  return (
    <MarketingPageLayout>
      <PageHero
        eyebrow="Use Cases"
        title="Built for the businesses that keep operations running."
        body="Syntra serves teams that juggle client work, calendars, follow-ups, approvals, and operational coordination across multiple tools."
        secondary="If your team spends more time managing work than doing it, Syntra is designed for you."
      />

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Industries we serve"
            title="Where Syntra fits best today."
            body="These are the operational patterns where the Executive Assistant and platform modules deliver the most immediate value."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((uc) => (
              <FeatureCard
                key={uc.id}
                id={uc.id}
                title={uc.title}
                body={uc.body}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.2rem] border border-[rgba(37,99,235,0.08)] bg-[linear-gradient(135deg,rgba(124,58,237,0.03),rgba(36,201,255,0.06))] px-8 py-10 md:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <SectionHeader
                centered
                eyebrow="Not sure where to start?"
                title="Try the AI Workflow Analysis to find your best fit."
                body="Use the guided analysis tool to identify repeated bottlenecks and see where Syntra can help first."
              />
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <CTAButton
                  href="https://syntra-core.vercel.app/workflow-assessment"
                  variant="primary"
                >
                  Try AI Workflow Analysis
                </CTAButton>
                <CTAButton href="/request-access" variant="secondary">
                  Request Access
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MarketingPageLayout>
  );
}
