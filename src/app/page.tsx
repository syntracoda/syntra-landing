export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="relative overflow-hidden px-6 py-8">
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-cyan-300/20 bg-black/40 shadow-lg shadow-cyan-500/20">
              <img
                src="/images/syntra-logo.png"
                alt="Syntra Suite"
                className="h-full w-full object-cover"
              />
            </div>

            <span className="text-lg font-semibold tracking-wide text-white">
              Syntra Suite
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://syntra-core.vercel.app/workflow-assessment"
              className="rounded-full border border-fuchsia-300/40 px-5 py-2 text-sm font-semibold text-fuchsia-200 transition hover:border-fuchsia-300 hover:bg-fuchsia-300/10"
            >
              Workflow Assessment
            </a>
            <a
              href="#early-access"
              className="rounded-full border border-cyan-300/40 px-5 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-300/10"
            >
              Request Early Access
            </a>
          </div>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 py-24 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
              AI Workforce OS • Executive Assistant first
            </div>

            <h1 className="max-w-3xl text-5xl font-black tracking-tight text-white md:text-7xl">
              Deploy AI workers that understand your business.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Syntra helps teams turn email, calendars, tasks, and workflows
              into prioritized action — with human approval built in.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://syntra-core.vercel.app/workflow-assessment"
                className="rounded-full border border-fuchsia-300/40 px-7 py-3 text-center text-sm font-bold text-fuchsia-200 transition hover:bg-fuchsia-300/10"
              >
                Try the Workflow Assessment
              </a>
              <a
                href="#early-access"
                className="rounded-full bg-cyan-300 px-7 py-3 text-center text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-200"
              >
                Request Early Access
              </a>
              <a
                href="#how-it-works"
                className="rounded-full border border-white/15 px-7 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
              >
                See How It Works
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur">
            <div className="rounded-[1.5rem] bg-[#0b1024] p-6">
              <p className="text-sm font-semibold text-cyan-200">
                Today’s AI Briefing
              </p>

              <div className="mt-6 space-y-4">
                {[
                  "3 urgent emails need review",
                  "2 meetings have missing prep notes",
                  "1 calendar conflict needs approval",
                  "5 recommended actions ready",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-fuchsia-300/30 bg-fuchsia-300/10 p-4">
                <p className="text-sm font-bold text-fuchsia-200">
                  Syntra recommends. You approve. Then Syntra executes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-fuchsia-300">
            Free tool
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-5xl">
            Discover where your business is losing time
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Use Syntra's Workflow Assessment to identify bottlenecks, estimate wasted hours, and see which AI workers could help your business.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-fuchsia-300/20 bg-fuchsia-300/[0.05] p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-300/20">
                <svg className="h-6 w-6 text-fuchsia-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-white">Identify repeated workflow bottlenecks</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">Map your recurring processes and find where delays happen most.</p>
            </div>
            <div className="rounded-3xl border border-fuchsia-300/20 bg-fuchsia-300/[0.05] p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-300/20">
                <svg className="h-6 w-6 text-fuchsia-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-white">Estimate time and cost lost each month</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">Get concrete numbers on how much inefficiency is costing your business.</p>
            </div>
            <div className="rounded-3xl border border-fuchsia-300/20 bg-fuchsia-300/[0.05] p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-300/20">
                <svg className="h-6 w-6 text-fuchsia-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-white">Recommend the right Syntra AI workers</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">See which AI workers best fit your specific workflow needs.</p>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="https://syntra-core.vercel.app/workflow-assessment"
              className="inline-block rounded-full bg-fuchsia-300 px-7 py-3 text-center text-sm font-black text-slate-950 shadow-lg shadow-fuchsia-500/20 transition hover:bg-fuchsia-200"
            >
              Start Workflow Assessment
            </a>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
            The problem
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-5xl">
            Businesses are drowning in missed requests, scattered tools, and
            manual coordination.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              ["Buried emails", "Important requests get lost in busy inboxes."],
              ["Meeting chaos", "Follow-ups and prep work fall through cracks."],
              ["Manual searching", "Teams waste time looking for what matters."],
              [
                "Tool overload",
                "AI answers questions but rarely operates like a worker.",
              ],
            ].map(([title, body]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="text-xl font-black text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.05] p-8 md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
            First worker
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Syntra starts with an AI Executive Assistant.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              "Reads Gmail, Calendar, and Tasks",
              "Creates your daily briefing",
              "Surfaces urgent requests",
              "Detects meeting conflicts",
              "Recommends next actions",
              "Routes work through approval",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-[#0b1024] p-5 text-slate-100"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-fuchsia-300">
            Platform vision
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            One assistant today. An AI workforce tomorrow.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              ["Executive Assistant", "Active / Early Access"],
              ["Dev Agent", "Coming Soon"],
              ["IT Operations Agent", "Coming Soon"],
              ["Security Analyst", "Coming Soon"],
            ].map(([worker, status]) => (
              <div
                key={worker}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="text-xl font-black text-white">{worker}</h3>
                <p className="mt-3 text-sm font-semibold text-cyan-200">
                  {status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="early-access" className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Early access
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Help shape the future of AI work.
            </h2>
            <p className="mt-5 text-slate-300">
              We’re looking for early users who want fewer missed requests,
              better prioritization, and safer AI-assisted execution.
            </p>
          </div>

          <form
            action="https://formspree.io/f/xbdwzgao"
            method="POST"
            className="space-y-4"
          >
            <input
              name="name"
              placeholder="Name"
              required
              className="w-full rounded-2xl border border-white/10 bg-[#0b1024] px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full rounded-2xl border border-white/10 bg-[#0b1024] px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300"
            />
            <input
              name="company"
              placeholder="Company"
              className="w-full rounded-2xl border border-white/10 bg-[#0b1024] px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300"
            />
            <textarea
              name="workflow_problem"
              placeholder="Biggest workflow problem"
              rows={4}
              className="w-full rounded-2xl border border-white/10 bg-[#0b1024] px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-cyan-300 px-7 py-4 text-sm font-black text-slate-950 transition hover:bg-cyan-200"
            >
              Request Early Access
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-400 md:flex-row">
          <p>© 2026 Syntra Suite. All rights reserved.</p>
          <p>AI workforce infrastructure for modern teams.</p>
        </div>
      </footer>
    </main>
  );
}