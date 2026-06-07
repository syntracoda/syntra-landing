"use client";

import Link from "next/link";

import { SiteNav } from "@/components/site/SiteNav";

const workflowAssessmentHref =
  "https://syntra-core.vercel.app/workflow-assessment";

const heroBullets = [
  "Specialized AI workers for inboxes, calendars, tasks, follow-ups, and approvals.",
  "Built first for small businesses and service teams that run on client requests and operational follow-through.",
  "Human-approved execution with workspaces, memory, activity history, and queues built in.",
];

const problemCards = [
  {
    title: "Email overload and missed requests",
    body: "Important work disappears into crowded inboxes, scattered replies, and informal follow-ups that never become a shared system.",
  },
  {
    title: "Scheduling conflicts and follow-up drag",
    body: "Reschedules, prep notes, client replies, and meeting changes consume hours that small teams rarely have to spare.",
  },
  {
    title: "Tasks hidden across disconnected tools",
    body: "Projects, inboxes, calendars, and client notes live in separate places, so teams see fragments instead of one clear work queue.",
  },
  {
    title: "Operational work that never makes it into a system",
    body: "Too much work stays reactive and manual until something important slips through the cracks.",
  },
];

const solutionCards = [
  {
    title: "Not another chatbot",
    body: "Syntra is built to organize, recommend, and move work forward, not just answer prompts in a chat window.",
  },
  {
    title: "Not a staffing company",
    body: "This is software: AI workers, workspaces, queues, approvals, memory, activity history, and execution.",
  },
  {
    title: "Workspace-based operations",
    body: "Each business gets a workspace for context, approvals, activity, and the operational memory that future actions depend on.",
  },
  {
    title: "Human-approved execution",
    body: "Syntra prepares the work, explains the recommendation, and waits for approval before important actions are taken.",
  },
  {
    title: "Work queue built in",
    body: "Operational requests land in organized queues so the team can see what is urgent, what is ready, and what needs review.",
  },
  {
    title: "Memory and activity history",
    body: "The system keeps track of what happened and what is still open, so work improves over time instead of resetting every day.",
  },
];

const modules = [
  {
    id: "executive-assistant",
    title: "Executive Assistant",
    what: "Daily briefings, inbox triage, scheduling conflicts, and follow-ups",
    body: "The first active AI worker reviews the day, prepares next actions, and routes work through approval.",
  },
  {
    id: "workspaces",
    title: "Workspaces",
    what: "Organized operating context for each business or client environment",
    body: "Workspaces keep queues, approvals, activity history, and client context together instead of scattered across tools.",
  },
  {
    id: "work-queue",
    title: "Work Queue",
    what: "Prioritized work waiting for review or execution",
    body: "Syntra turns operational signals into a queue the team can act on instead of leaving work buried across apps.",
  },
  {
    id: "approvals",
    title: "Approvals",
    what: "Human approval before important action",
    body: "The approval layer is a core product feature, helping businesses stay in control before action is executed.",
  },
  {
    id: "workflow-analysis",
    title: "AI Workflow Analysis",
    what: "A practical starting point for discovering where Syntra can help",
    body: "Use workflow analysis to identify repeated bottlenecks and see where specialized AI workers should begin first.",
  },
  {
    id: "future-workers",
    title: "Future Specialized Workers",
    what: "Project, operations, public-sector, and workflow-specific expansion",
    body: "Syntra begins with the Executive Assistant and expands through more specialized AI workers on the same operating layer.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Connect work sources",
    body: "Syntra starts where the business already works: inboxes, calendars, tasks, workflows, and client operations.",
  },
  {
    step: "02",
    title: "Syntra reviews and prioritizes",
    body: "The workspace creates a daily briefing, surfaces what needs attention, and organizes work by context and urgency.",
  },
  {
    step: "03",
    title: "AI workers prepare the work",
    body: "Specialized AI workers recommend actions, draft replies, flag issues, and prepare what should be reviewed next.",
  },
  {
    step: "04",
    title: "Human approves",
    body: "The user reviews, edits, approves, or dismisses important work before action is taken.",
  },
  {
    step: "05",
    title: "Syntra executes and learns",
    body: "Once approved, Syntra completes the action and keeps the result in workspace memory and activity history.",
  },
];

const useCases = [
  {
    id: "law-offices",
    title: "Law Offices",
    body: "Organize intake, follow-ups, deadlines, and client communication without letting urgent requests vanish in the inbox.",
  },
  {
    id: "trucking-companies",
    title: "Trucking Companies",
    body: "Track dispatch communication, shipment changes, follow-through, and operational updates before delays grow expensive.",
  },
  {
    id: "local-businesses",
    title: "Local Service Businesses",
    body: "Handle scheduling, quotes, customer questions, and recurring admin work with a cleaner operational loop.",
  },
  {
    id: "ecommerce-brands",
    title: "E-commerce Brands",
    body: "Support orders, customer requests, operational follow-ups, and repeat issues in one reviewable system.",
  },
  {
    id: "professional-services",
    title: "Professional Services",
    body: "Stay ahead of appointments, proposals, inbox review, and client-facing operational work that usually slips between tools.",
  },
  {
    id: "government-offices",
    title: "Government / Legislative Offices",
    body: "Triage constituent issues, calendars, approvals, and legislative tracking through structured queues and review steps.",
  },
];

const pilotCards = [
  {
    title: "Early Pilot",
    body: "A guided starting point for teams that want to test the Executive Assistant on real operational work.",
  },
  {
    title: "Small Business Workspace",
    body: "A broader workspace setup for teams that need queues, approvals, memory, and a more complete operational loop.",
  },
  {
    title: "Custom Workflow Build",
    body: "A higher-touch path for organizations that want Syntra tailored to more specialized workflows as the platform expands.",
  },
];



export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <section className="relative px-6 pb-14 pt-8">
        <div className="mx-auto max-w-7xl">
          <header className="relative">
            <div className="pointer-events-none absolute inset-x-4 top-14 -z-10 h-[28rem] rounded-[3rem] bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.09),transparent_40%),radial-gradient(circle_at_top_right,rgba(36,201,255,0.1),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.84)_0%,rgba(248,250,252,0.18)_72%,rgba(248,250,252,0)_100%)] blur-2xl" />
            <SiteNav />

            <div className="grid items-center gap-10 px-2 pb-2 pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:px-0">
              <div>
                <div className="inline-flex rounded-full border border-[rgba(37,99,235,0.14)] bg-[linear-gradient(135deg,rgba(124,58,237,0.07),rgba(36,201,255,0.12))] px-4 py-2 text-sm font-semibold text-[var(--navy-soft)] shadow-[0_10px_24px_rgba(37,99,235,0.08)]">
                  Human-approved AI workers for small business operations
                </div>

                <h1 className="mt-6 max-w-3xl text-[2.8rem] font-semibold leading-[0.99] tracking-[-0.04em] text-[var(--foreground)] sm:text-[3.35rem] lg:text-[4.15rem]">
                  The AI Workforce OS for business operations.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  Syntra gives businesses specialized AI workers that review
                  email, calendars, tasks, follow-ups, and workflows - then
                  prepare recommended actions for human approval.
                </p>

                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500">
                  Built first for small businesses and service teams that need a
                  clearer way to manage operational work.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <a
                    href="#early-access"
                    className="cta-aura rounded-full bg-[linear-gradient(135deg,#6d4dff_0%,#8f55ff_48%,#2cc9ff_100%)] px-7 py-3 text-center text-sm font-bold text-white shadow-[0_16px_36px_rgba(109,77,255,0.2)] transition hover:shadow-[0_18px_42px_rgba(109,77,255,0.24)]"
                  >
                    Request Access
                  </a>
                  <a
                    href={workflowAssessmentHref}
                    className="rounded-full border border-[rgba(37,99,235,0.16)] bg-[linear-gradient(135deg,rgba(124,58,237,0.04),rgba(36,201,255,0.1))] px-7 py-3 text-center text-sm font-bold text-[var(--navy-soft)] transition hover:border-[rgba(37,99,235,0.3)] hover:bg-[linear-gradient(135deg,rgba(124,58,237,0.06),rgba(36,201,255,0.14))]"
                  >
                    Try AI Workflow Analysis
                  </a>
                  <a
                    href="#how-it-works"
                    className="rounded-full border border-[var(--line-strong)] bg-white px-7 py-3 text-center text-sm font-bold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
                  >
                    See How It Works
                  </a>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {heroBullets.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.55rem] border border-[rgba(37,99,235,0.1)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(247,250,255,0.9)_100%)] p-5 shadow-[0_12px_30px_rgba(36,51,79,0.04)] transition hover:border-[rgba(37,99,235,0.2)] hover:shadow-[0_16px_36px_rgba(37,99,235,0.08)]"
                    >
                      <p className="text-sm leading-6 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mx-auto w-full max-w-[39rem] rounded-[2.15rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,#101831_0%,#122040_50%,#182a50_100%)] p-4 text-white shadow-[0_24px_72px_rgba(18,28,44,0.15)]">
                <div className="rounded-[1.65rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                  <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/52">
                        Syntra command center
                      </p>
                      <h2 className="mt-2 text-[1.7rem] font-semibold leading-tight">
                        Workspace - Briefing - Queue - Approval - Action
                      </h2>
                    </div>
                    <div className="rounded-full border border-white/12 bg-white/6 px-3 py-1 text-sm font-semibold text-[rgba(164,122,255,0.98)]">
                      Product preview
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
                    <div className="rounded-[1.45rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/48">
                        Today&apos;s AI Briefing
                      </p>
                      <div className="mt-4 grid gap-3">
                        {[
                          "2 priority emails need response drafts",
                          "1 calendar conflict is waiting for approval",
                          "3 follow-ups are ready in the work queue",
                          "2 actions were completed and logged today",
                        ].map((item) => (
                          <div
                            key={item}
                            className="rounded-2xl border border-white/8 bg-white/6 px-4 py-3 text-sm text-white/84"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-4">
                      <div className="rounded-[1.45rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/48">
                          Work queue
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {[
                            "Inbox triage",
                            "Reply draft",
                            "Calendar review",
                            "Follow-up prep",
                          ].map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-white/10 bg-[rgba(44,201,255,0.12)] px-3 py-2 text-xs font-semibold text-white/86"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-[1.45rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/48">
                          Pending approvals
                        </p>
                        <div className="mt-3 space-y-3">
                          {[
                            "Client reply draft needs review",
                            "Meeting change request waiting for approval",
                          ].map((item) => (
                            <div
                              key={item}
                              className="rounded-2xl border border-white/8 bg-white/6 px-4 py-3 text-sm text-white/84"
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-[1.45rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/48">
                          Connected apps and history
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {["Inbox", "Calendar", "Tasks", "Approvals", "History"].map(
                            (item) => (
                              <span
                                key={item}
                                className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-xs font-semibold text-white/74"
                              >
                                {item}
                              </span>
                            ),
                          )}
                        </div>
                        <p className="mt-4 text-sm leading-6 text-white/66">
                          A single product surface for operational work, review,
                          approvals, and activity history.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="bg-[linear-gradient(135deg,var(--accent)_0%,var(--accent-strong)_55%,var(--accent-cyan)_100%)] bg-clip-text text-sm font-semibold uppercase tracking-[0.22em] text-transparent">
              The problem
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[var(--foreground)] md:text-5xl">
              Small businesses are drowning in email, scheduling, follow-ups,
              admin work, client requests, and disconnected tools.
            </h2>
            <div className="mt-6 h-px w-24 bg-[linear-gradient(90deg,var(--accent),var(--accent-cyan))]" />
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {problemCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.8rem] border border-white/78 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(247,250,255,0.92)_100%)] p-6 shadow-[0_14px_40px_rgba(36,51,79,0.04)] transition hover:border-[rgba(37,99,235,0.2)] hover:shadow-[0_18px_42px_rgba(37,99,235,0.08)]"
              >
                <h3 className="text-xl font-semibold text-[var(--foreground)]">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="bg-[linear-gradient(135deg,var(--accent)_0%,var(--accent-strong)_55%,var(--accent-cyan)_100%)] bg-clip-text text-sm font-semibold uppercase tracking-[0.22em] text-transparent">
              The solution
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[var(--foreground)] md:text-5xl">
              Syntra gives each business a platform of specialized AI workers
              organized around workspaces, queues, approvals, memory, activity
              history, and execution.
            </h2>
            <div className="mt-6 h-px w-24 bg-[linear-gradient(90deg,var(--accent),var(--accent-cyan))]" />
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {solutionCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.8rem] border border-white/78 bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(246,249,255,0.9)_100%)] p-6 shadow-[0_14px_40px_rgba(36,51,79,0.04)] transition hover:border-[rgba(37,99,235,0.2)] hover:shadow-[0_18px_42px_rgba(37,99,235,0.08)]"
              >
                <h3 className="text-xl font-semibold text-[var(--foreground)]">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="modules" className="px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="bg-[linear-gradient(135deg,var(--accent)_0%,var(--accent-strong)_55%,var(--accent-cyan)_100%)] bg-clip-text text-sm font-semibold uppercase tracking-[0.22em] text-transparent">
              Product modules
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[var(--foreground)] md:text-5xl">
              Syntra is a platform, not a single AI feature.
            </h2>
            <div className="mt-6 h-px w-24 bg-[linear-gradient(90deg,var(--accent),var(--accent-cyan))]" />
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {modules.map((module) => (
              <article
                key={module.id}
                id={module.id}
                className="rounded-[1.85rem] border border-[rgba(37,99,235,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(244,248,255,0.92)_100%)] p-6 shadow-[0_14px_40px_rgba(36,51,79,0.04)] transition hover:border-[rgba(37,99,235,0.24)] hover:shadow-[0_18px_44px_rgba(37,99,235,0.08)]"
              >
                <p className="bg-[linear-gradient(135deg,var(--accent)_0%,var(--accent-strong)_52%,var(--accent-cyan)_100%)] bg-clip-text text-sm font-semibold uppercase tracking-[0.18em] text-transparent">
                  Product module
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
                  {module.title}
                </h3>
                <p className="mt-4 text-sm font-semibold text-[var(--accent-strong)]">
                  {module.what}
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {module.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-6 py-12">
        <div className="mx-auto max-w-7xl rounded-[2.55rem] border border-[rgba(102,131,191,0.22)] bg-[linear-gradient(180deg,#10192f_0%,#152447_58%,#1b2d58_100%)] px-8 py-10 text-white shadow-[0_30px_90px_rgba(18,28,44,0.18)] md:px-10">
          <div className="max-w-3xl">
            <p className="bg-[linear-gradient(135deg,#b991ff_0%,#7db3ff_55%,#79e4ff_100%)] bg-clip-text text-sm font-semibold uppercase tracking-[0.22em] text-transparent">
              How it works
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">
              Syntra reviews the work, prepares the action, waits for approval,
              and keeps the operational history attached to the workspace.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {howItWorks.map((item) => (
              <article
                key={item.step}
                className="rounded-[1.8rem] border border-[rgba(118,149,212,0.18)] bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.04)_100%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[rgba(121,228,255,0.9)]">
                  {item.step}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-white/72">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="use-cases" className="px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="bg-[linear-gradient(135deg,var(--accent)_0%,var(--accent-strong)_55%,var(--accent-cyan)_100%)] bg-clip-text text-sm font-semibold uppercase tracking-[0.22em] text-transparent">
              Use cases
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[var(--foreground)] md:text-5xl">
              Practical operating environments where the approval workflow
              matters.
            </h2>
            <div className="mt-6 h-px w-24 bg-[linear-gradient(90deg,var(--accent),var(--accent-cyan))]" />
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {useCases.map((item) => (
              <article
                key={item.id}
                id={item.id}
                className="rounded-[1.8rem] border border-white/78 bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(246,249,255,0.9)_100%)] p-6 shadow-[0_14px_40px_rgba(36,51,79,0.04)] transition hover:border-[rgba(37,99,235,0.2)] hover:shadow-[0_18px_42px_rgba(37,99,235,0.08)]"
              >
                <h3 className="text-2xl font-semibold text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing-soon" className="px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="bg-[linear-gradient(135deg,var(--accent)_0%,var(--accent-strong)_55%,var(--accent-cyan)_100%)] bg-clip-text text-sm font-semibold uppercase tracking-[0.22em] text-transparent">
              Pilot access and pricing soon
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[var(--foreground)] md:text-5xl">
              Syntra is opening through pilots and early workspace deployments.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              We&apos;re keeping pricing honest. The current path is pilot-based
              and workflow-driven while the product matures.
            </p>
            <div className="mt-6 h-px w-24 bg-[linear-gradient(90deg,var(--accent),var(--accent-cyan))]" />
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pilotCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.8rem] border border-white/78 bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(246,249,255,0.9)_100%)] p-6 shadow-[0_14px_40px_rgba(36,51,79,0.04)] transition hover:border-[rgba(37,99,235,0.2)] hover:shadow-[0_18px_42px_rgba(37,99,235,0.08)]"
              >
                <h3 className="text-2xl font-semibold text-[var(--foreground)]">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {card.body}
                </p>
                <p className="mt-5 text-sm font-semibold text-[var(--accent-strong)]">
                  Pricing coming soon. Access is currently pilot-based.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="early-access" className="px-6 pb-14 pt-12">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.8rem] border border-[rgba(102,131,191,0.22)] bg-[linear-gradient(180deg,#10192f_0%,#16284d_100%)] p-8 text-white shadow-[0_30px_90px_rgba(18,28,44,0.18)] lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-10">
          <div>
            <p className="bg-[linear-gradient(135deg,#b991ff_0%,#7db3ff_55%,#79e4ff_100%)] bg-clip-text text-sm font-semibold uppercase tracking-[0.22em] text-transparent">
              Final CTA
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-5xl">
              Build your AI workforce before busy work buries your business.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/74">
              Request access or start with AI Workflow Analysis to see how
              Syntra can turn operational drag into approved action.
            </p>
            <div className="mt-6 h-px w-24 bg-[linear-gradient(90deg,#b991ff,#79e4ff)]" />

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="#early-access-form"
                className="cta-aura inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#6d4dff_0%,#8f55ff_52%,#2cc9ff_100%)] px-7 py-3 text-center text-sm font-bold text-white shadow-[0_16px_36px_rgba(109,77,255,0.2)] transition hover:shadow-[0_18px_42px_rgba(109,77,255,0.24)]"
              >
                Request Access
              </a>
              <a
                href={workflowAssessmentHref}
                className="rounded-full border border-white/16 bg-[rgba(255,255,255,0.08)] px-7 py-3 text-center text-sm font-bold text-white transition hover:border-[rgba(121,228,255,0.35)] hover:bg-[rgba(255,255,255,0.12)]"
              >
                Try AI Workflow Analysis
              </a>
            </div>
          </div>

          <form
            id="early-access-form"
            action="https://formspree.io/f/xbdwzgao"
            method="POST"
            className="grid gap-4 rounded-[2rem] border border-white/12 bg-[rgba(255,255,255,0.96)] p-6 text-[var(--foreground)] shadow-[0_22px_70px_rgba(18,28,44,0.14)] md:p-7"
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
            <textarea
              name="workflow_problem"
              placeholder="What workflow is causing the most drag right now?"
              rows={4}
              className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-5 py-4 outline-none placeholder:text-slate-400 focus:border-[var(--accent)]"
            />
            <button
              type="submit"
              className="cta-aura inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#6d4dff_0%,#8f55ff_52%,#2cc9ff_100%)] px-7 py-4 text-sm font-bold text-white shadow-[0_16px_36px_rgba(109,77,255,0.2)] transition hover:shadow-[0_18px_42px_rgba(109,77,255,0.24)]"
            >
              Request Access
            </button>
          </form>
        </div>
      </section>

      <footer className="px-6 pb-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-[var(--line)] pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 Syntra. AI Workforce OS for business operations.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#modules" className="hover:text-[var(--foreground)]">
              Product
            </a>
            <a href="#use-cases" className="hover:text-[var(--foreground)]">
              Use Cases
            </a>
            <Link href="/founder-intro" className="hover:text-[var(--foreground)]">
              Founder Intro
            </Link>
            <Link href="/product-demo" className="hover:text-[var(--foreground)]">
              Product Demo
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
