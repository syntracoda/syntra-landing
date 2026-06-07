"use client";

import { CTAButton } from "@/components/site/CTAButton";
import { FeatureCard } from "@/components/site/FeatureCard";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { modules } from "@/lib/site-data";

export default function ProductPage() {
  return (
    <MarketingPageLayout>
      <PageHero
        eyebrow="Product"
        title="The AI Workforce OS for business operations."
        body="Syntra gives small businesses specialized AI workers for inboxes, calendars, tasks, follow-ups, and approvals — organized in workspaces with queues, memory, and human-approved execution."
        secondary="Not a chatbot or a VA placement service. Syntra is a platform where AI workers prepare operational work, route it through approval, and keep activity history for every action taken."
      />

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Core platform modules"
            title="Everything your business operations need to run on AI workers."
            body="Each module is designed to work together. Start with one and expand as the platform grows."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((mod) => (
              <FeatureCard
                key={mod.id}
                id={mod.id}
                kicker={mod.what}
                title={mod.title}
                body={mod.body}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.2rem] border border-[rgba(37,99,235,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(249,251,255,0.9)_100%)] px-8 py-10 shadow-[0_22px_80px_rgba(36,51,79,0.05)] md:px-10">
            <SectionHeader
              centered
              eyebrow="Designed for real operations"
              title="How the platform works together"
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-[1.8rem] border border-white/78 bg-white p-6 shadow-[0_14px_40px_rgba(36,51,79,0.04)]">
                <p className="bg-[linear-gradient(135deg,var(--accent)_0%,var(--accent-strong)_52%,var(--accent-cyan)_100%)] bg-clip-text text-sm font-semibold uppercase tracking-[0.18em] text-transparent">
                  Workspace
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
                  Organize by business or client
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Each workspace keeps queues, approvals, activity history, and
                  operational memory together instead of scattered across
                  separate tools.
                </p>
              </div>
              <div className="rounded-[1.8rem] border border-white/78 bg-white p-6 shadow-[0_14px_40px_rgba(36,51,79,0.04)]">
                <p className="bg-[linear-gradient(135deg,var(--accent)_0%,var(--accent-strong)_52%,var(--accent-cyan)_100%)] bg-clip-text text-sm font-semibold uppercase tracking-[0.18em] text-transparent">
                  Work Queue
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
                  Prioritized work waiting for review
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Syntra turns operational signals into an organized queue so
                  the team can see what is urgent, what is ready, and what needs
                  review.
                </p>
              </div>
              <div className="rounded-[1.8rem] border border-white/78 bg-white p-6 shadow-[0_14px_40px_rgba(36,51,79,0.04)]">
                <p className="bg-[linear-gradient(135deg,var(--accent)_0%,var(--accent-strong)_52%,var(--accent-cyan)_100%)] bg-clip-text text-sm font-semibold uppercase tracking-[0.18em] text-transparent">
                  Memory &amp; History
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
                  Every action is recorded
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  The system keeps track of what happened and what is still
                  open, so work improves over time instead of resetting every
                  day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.2rem] border border-[rgba(37,99,235,0.08)] bg-[linear-gradient(135deg,rgba(124,58,237,0.03),rgba(36,201,255,0.06))] px-8 py-10 md:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <SectionHeader
                centered
                eyebrow="Get started"
                title="Ready to see what an AI workforce looks like for your business?"
              />
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <CTAButton href="/how-it-works" variant="secondary">
                  See How It Works
                </CTAButton>
                <CTAButton href="/request-access">
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
