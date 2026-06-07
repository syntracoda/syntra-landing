type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  body?: string;
  centered?: boolean;
  level?: "h1" | "h2";
};

export function SectionHeader({
  eyebrow,
  title,
  body,
  centered = false,
  level = "h2",
}: SectionHeaderProps) {
  const alignment = centered ? "text-center mx-auto" : "";
  const dividerAlignment = centered ? "mx-auto" : "";
  const HeadingTag = level;

  return (
    <div className={`max-w-3xl ${alignment}`.trim()}>
      <p className="bg-[linear-gradient(135deg,var(--accent)_0%,var(--accent-strong)_55%,var(--accent-cyan)_100%)] bg-clip-text text-sm font-semibold uppercase tracking-[0.22em] text-transparent">
        {eyebrow}
      </p>
      <HeadingTag className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[var(--foreground)] md:text-5xl">
        {title}
      </HeadingTag>
      {body ? (
        <p className="mt-5 text-lg leading-8 text-slate-600">{body}</p>
      ) : null}
      <div
        className={`mt-6 h-px w-24 bg-[linear-gradient(90deg,var(--accent),var(--accent-cyan))] ${dividerAlignment}`.trim()}
      />
    </div>
  );
}
