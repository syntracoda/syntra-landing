"use client";

import Link from "next/link";

import { CTAButton } from "@/components/site/CTAButton";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { howItWorks } from "@/lib/site-data";

export default function HowItWorksPage() {
  return (
    <MarketingPageLayout>
      <PageHero
        eyebrow="How It Works"
        title="Work moves from sources into review, approval, execution, and memory."
        body="Syntra connects to where the business already works, prepares the next actions, and waits for human approval before anything important happens."
      />

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.2rem] border border-[rgba(37,99,235,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(249,251,255,0.9)_100%)] px-8 py-10 shadow-[0_22px_80px_rgba(36,51,79,0.05)] md:px-10">
            <div className="mx-auto max-w-4xl">
              {howItWorks.map((step, idx) => (
                <div
                  key={step.step}
                  className={
                    idx < howItWorks.length - 1
                      ? "relative border-b border-[var(--line)] pb-8 pt-8 first:pt-0"
                      : "pb-0 pt-8"
                  }
                >
                  <div className="flex items-start gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(124,58,237,0.1),rgba(36,201,255,0.12))] text-lg font-bold text-[var(--accent-strong)]">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-[var(--foreground)]">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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
                eyebrow="See it in action"
                title="Watch the founder walkthrough."
                body="Ryan Sanders explains the operating model, approval layer, and why Syntra is building AI workers for small businesses."
              />
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/founder-intro">
                  <CTAButton variant="secondary">
                    Watch Founder Intro
                  </CTAButton>
                </Link>
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
