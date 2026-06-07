"use client";

import { CTAButton } from "@/components/site/CTAButton";
import { FeatureCard } from "@/components/site/FeatureCard";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { workerCards } from "@/lib/site-data";

export default function AIWorkersPage() {
  return (
    <MarketingPageLayout>
      <PageHero
        eyebrow="AI Workers"
        title="Specialized workers designed for business operations."
        body="Each AI worker is built for a specific operational role — inbox review, project tracking, public requests, legislative monitoring, or workflow quality. The Executive Assistant is active now and additional workers are on the roadmap."
        secondary="Syntra AI workers prepare the work, recommend next actions, and route everything through human approval before execution."
      />

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Current &amp; planned workers"
            title="A growing team of specialized AI workers."
            body="Each worker has a defined role, and new workers are added as the platform expands."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {workerCards.map((worker) => (
              <FeatureCard
                key={worker.id}
                id={worker.id}
                kicker={worker.status}
                title={worker.title}
                body={worker.body}
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
              eyebrow="Active today"
              title="Executive Assistant"
              body="The first AI worker is live and ready. It reviews inboxes, calendars, follow-ups, and daily operating signals, then prepares the next actions for human review."
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-20" id="future-workers">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.2rem] border border-[rgba(37,99,235,0.08)] bg-[linear-gradient(135deg,rgba(124,58,237,0.03),rgba(36,201,255,0.06))] px-8 py-10 md:px-10">
            <SectionHeader
              centered
              eyebrow="Platform roadmap"
              title="Workers in development."
              body="The worker layer expands as Syntra learns how teams use the platform. Each new worker is built on the same operating layer — workspaces, queues, approvals, memory, and activity history."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {workerCards
                .filter((w) => w.status === "Roadmap")
                .map((worker) => (
                  <FeatureCard
                    key={worker.id}
                    kicker={worker.status}
                    title={worker.title}
                    body={worker.body}
                  />
                ))}
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
