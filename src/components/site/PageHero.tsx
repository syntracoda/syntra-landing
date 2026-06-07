import type { ReactNode } from "react";

import { SectionHeader } from "./SectionHeader";

type PageHeroProps = {
  actions?: ReactNode;
  body: string;
  eyebrow: string;
  secondary?: string;
  title: string;
};

export function PageHero({
  actions,
  body,
  eyebrow,
  secondary,
  title,
}: PageHeroProps) {
  return (
    <section className="px-6 pb-8 pt-6">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2.2rem] border border-[rgba(37,99,235,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(249,251,255,0.9)_100%)] px-8 py-10 shadow-[0_22px_80px_rgba(36,51,79,0.05)] md:px-10">
          <SectionHeader eyebrow={eyebrow} title={title} body={body} />
          {secondary ? (
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-500">
              {secondary}
            </p>
          ) : null}
          {actions ? (
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              {actions}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
