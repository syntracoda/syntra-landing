import type { ReactNode } from "react";

type FeatureCardProps = {
  body: string;
  children?: ReactNode;
  id?: string;
  kicker?: string;
  title: string;
};

export function FeatureCard({
  body,
  children,
  id,
  kicker,
  title,
}: FeatureCardProps) {
  return (
    <article
      id={id}
      className="rounded-[1.8rem] border border-white/78 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(246,249,255,0.92)_100%)] p-6 shadow-[0_14px_40px_rgba(36,51,79,0.04)] transition hover:border-[rgba(37,99,235,0.2)] hover:shadow-[0_18px_42px_rgba(37,99,235,0.08)]"
    >
      {kicker ? (
        <p className="bg-[linear-gradient(135deg,var(--accent)_0%,var(--accent-strong)_52%,var(--accent-cyan)_100%)] bg-clip-text text-sm font-semibold uppercase tracking-[0.18em] text-transparent">
          {kicker}
        </p>
      ) : null}
      <h3 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-slate-600">{body}</p>
      {children ? <div className="mt-5">{children}</div> : null}
    </article>
  );
}
