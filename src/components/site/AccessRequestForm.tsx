import { requestAccessFormAction } from "@/lib/site-data";

import { CTAButton } from "./CTAButton";

type AccessRequestFormProps = {
  className?: string;
  mode?: "compact" | "full";
};

export function AccessRequestForm({
  className = "",
  mode = "compact",
}: AccessRequestFormProps) {
  return (
    <form
      action={requestAccessFormAction}
      method="POST"
      className={[
        "grid gap-4 rounded-[2rem] border border-white/12 bg-[rgba(255,255,255,0.96)] p-6 text-[var(--foreground)] shadow-[0_22px_70px_rgba(18,28,44,0.14)] md:p-7",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <input
        name="name"
        placeholder="Name"
        required
        className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-5 py-4 outline-none placeholder:text-slate-400 focus:border-[var(--accent)]"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-5 py-4 outline-none placeholder:text-slate-400 focus:border-[var(--accent)]"
      />
      <input
        name="company"
        placeholder="Company"
        className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-5 py-4 outline-none placeholder:text-slate-400 focus:border-[var(--accent)]"
      />
      {mode === "full" ? (
        <input
          name="business_type"
          placeholder="Business type / use case"
          className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-5 py-4 outline-none placeholder:text-slate-400 focus:border-[var(--accent)]"
        />
      ) : null}
      <textarea
        name="workflow_problem"
        placeholder={
          mode === "full"
            ? "Biggest workflow bottleneck"
            : "What workflow is causing the most drag right now?"
        }
        rows={mode === "full" ? 5 : 4}
        className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-5 py-4 outline-none placeholder:text-slate-400 focus:border-[var(--accent)]"
      />
      {mode === "full" ? (
        <textarea
          name="optional_message"
          placeholder="Optional message"
          rows={4}
          className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-5 py-4 outline-none placeholder:text-slate-400 focus:border-[var(--accent)]"
        />
      ) : null}
      <CTAButton type="submit" className={mode === "full" ? "py-4" : "py-4"}>
        Request Access
      </CTAButton>
    </form>
  );
}
