"use client";

import { AccessRequestForm } from "@/components/site/AccessRequestForm";
import { MarketingPageLayout } from "@/components/site/MarketingPageLayout";
import { PageHero } from "@/components/site/PageHero";

export default function RequestAccessPage() {
  return (
    <MarketingPageLayout>
      <PageHero
        eyebrow="Request Access"
        title="Tell us about your business and we will find the right starting point."
        body="Syntra is in early access. We work with pilot organizations to shape the platform before standard pricing."
        secondary="No commitments. No sales pitch. Just a conversation about whether Syntra fits your operations."
      />

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-2xl">
          <AccessRequestForm mode="full" />
        </div>
      </section>
    </MarketingPageLayout>
  );
}
