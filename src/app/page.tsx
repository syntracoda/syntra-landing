import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-900 font-sans">
      {/* Hero with navigation */}
      <header className="relative overflow-hidden">
        {/* Top navigation bar */}
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          {/* Logo and brand name */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow">
              <Image src="/images/syntra-logo.png" alt="Syntra Suite" width={40} height={40} />
            </div>
            <span className="text-lg font-bold tracking-tight">Syntra Suite</span>
          </div>
          {/* Primary nav links */}
          <div className="hidden items-center gap-6 text-sm font-semibold text-gray-600 md:flex">
            <a href="#product" className="hover:text-gray-900">Product</a>
            <a href="#use-cases" className="hover:text-gray-900">Use Cases</a>
            <a href="#demo" className="hover:text-gray-900">Demo</a>
            <a href="#founder" className="hover:text-gray-900">Founder</a>
            <span className="cursor-default text-gray-400">Pricing (Soon)</span>
          </div>
          {/* Call to action button */}
          <a
            href="#early-access"
            className="rounded-full bg-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-purple-500"
          >
            Request Pilot Access
          </a>
        </nav>
        {/* Hero content */}
        <section className="mx-auto max-w-7xl grid items-center gap-12 px-6 pb-24 pt-12 lg:grid-cols-12">
          {/* Text content */}
          <div className="lg:col-span-6">
            <span className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 uppercase">
              AI Workforce OS • Executive Assistant first
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              AI workers for the work your business never has time to finish.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-7 text-gray-600">
              Syntra gives small businesses specialized AI workers for email, scheduling, follow‑ups, workflow triage, and client operations —
              with human approval before anything important happens.
            </p>
            {/* Key benefits list */}
            <ul className="mt-8 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="leading-6">Detects work across your tools</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="leading-6">Prepares drafts you can approve</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="leading-6">Human approval — you stay in control</span>
              </li>
            </ul>
            {/* Hero call to actions */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#early-access"
                className="rounded-full bg-purple-600 px-7 py-3 text-center text-sm font-bold text-white shadow-md transition hover:bg-purple-500"
              >
                Request Pilot Access
              </a>
              <a
                href="#demo"
                className="rounded-full border border-purple-600 px-7 py-3 text-center text-sm font-bold text-purple-600 transition hover:bg-purple-50"
              >
                Watch Product Demo
              </a>
              <a
                href="#founder"
                className="rounded-full border border-gray-300 px-7 py-3 text-center text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
              >
                View Founder Intro
              </a>
            </div>
          </div>
          {/* Product screenshot */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-md overflow-hidden rounded-xl shadow-xl ring-1 ring-gray-200">
              <Image
                src="/images/syntra-app.png"
                alt="Syntra app screenshot"
                width={512}
                height={512}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      </header>
      {/* Trusted by section */}
      <section id="use-cases" className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-purple-600">
            Trusted by small businesses ready to scale
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                title: 'Law Offices',
                description: 'Stay on top of client communication and deadlines.',
              },
              {
                title: 'Trucking Companies',
                description: 'Keep dispatch, deliveries, and follow-ups organized.',
              },
              {
                title: 'Local Businesses',
                description: 'Streamline daily operations and customer requests.',
              },
              {
                title: 'E‑commerce Brands',
                description: 'Manage orders, shipments, and customer support.',
              },
              {
                title: 'Professional Services',
                description: 'Never miss an appointment or invoice again.',
              },
            ].map(({ title, description }) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Problem & solution cards */}
      <section id="product" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl grid gap-10 px-6 md:grid-cols-2">
          {/* Problem card */}
          <div className="rounded-3xl bg-white p-8 shadow-md ring-1 ring-gray-100">
            <span className="text-sm font-semibold uppercase text-purple-600">The problem we solve</span>
            <h3 className="mt-4 text-2xl font-bold text-gray-900">Small businesses drown in busy work.</h3>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Email overload and lost requests</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Scheduling conflicts and missed prep</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Important tasks fall through the cracks</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Too many disconnected tools</span>
              </li>
            </ul>
          </div>
          {/* Executive assistant card */}
          <div className="rounded-3xl bg-white p-8 shadow-md ring-1 ring-gray-100">
            <span className="text-sm font-semibold uppercase text-blue-600">Executive Assistant</span>
            <h3 className="mt-4 text-2xl font-bold text-gray-900">Your first AI worker.</h3>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Detects operational work across email, calendar, and tasks</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Recommends next actions and prepares drafts</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Routes everything through human approval</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Tracks what happened and builds context</span>
              </li>
            </ul>
            <p className="mt-8 rounded-lg bg-blue-50 p-3 text-sm font-medium text-blue-700">
              Human approval. You stay in control.
            </p>
          </div>
        </div>
      </section>
      {/* Use cases expanded section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-purple-600">Pilot-ready use cases</p>
          <h2 className="mt-4 max-w-xl text-3xl font-extrabold tracking-tight md:text-4xl">
            See where Syntra starts today.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {[
              {
                title: 'Law Office',
                body: 'Pilot focus on client intake, follow-ups, and deadline reminders.',
              },
              {
                title: 'Trucking Company',
                body: 'Manage dispatching, shipment updates, and driver communications.',
              },
              {
                title: 'Cupcake Business',
                body: 'Coordinate orders, deliveries, and customer feedback.',
              },
              {
                title: 'Dog Boutique',
                body: 'Handle appointments, grooming schedules, and pet-owner messaging.',
              },
              {
                title: 'Syntra Internal',
                body: 'Eat our own dogfood: refine our processes with Syntra.',
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                <p className="mt-3 text-sm text-gray-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Demo and founder videos section */}
      <section id="demo" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            See how it works
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* Product demo video */}
            <div className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-gray-100">
              <div className="relative w-full pb-[56.25%]">
                <iframe
                  className="absolute inset-0 h-full w-full rounded-xl"
                  src="https://drive.google.com/file/d/1hXwIl_o02xvRlGqSnUpUNscXzXQJoxTE/preview"
                  allow="autoplay; fullscreen"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Product Demo</h3>
              <p className="mt-2 text-sm text-gray-600">
                Watch how Syntra’s AI Executive Assistant organizes your day.
              </p>
            </div>
            {/* Founder video */}
            <div className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-gray-100">
              <div className="relative w-full pb-[56.25%]">
                <iframe
                  className="absolute inset-0 h-full w-full rounded-xl"
                  src="https://drive.google.com/file/d/1CZCM4TDzUwHYizQDrnsOcjWBcJOlcrf7/preview"
                  allow="autoplay; fullscreen"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">The story behind Syntra</h3>
              <p className="mt-2 text-sm text-gray-600">
                Hear from Ryan Sanders, Syntra’s founder.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Final call-to-action section */}
      <section id="early-access" className="py-20">
        <div className="mx-auto max-w-7xl rounded-3xl bg-purple-50 px-6 py-12 md:px-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
                Join our pilot program
              </h2>
              <p className="mt-4 text-gray-700">
                Help shape the future of AI for small businesses. Sign up for pilot access and be among the first to put Syntra to work for you.
              </p>
            </div>
            <form
              action="https://formspree.io/f/xbdwzgao"
              method="POST"
              className="space-y-4"
            >
              <div className="flex flex-col gap-4 md:flex-row">
                <input
                  name="name"
                  placeholder="Name"
                  required
                  className="flex-1 rounded-lg border border-gray-300 bg-white px-5 py-4 text-gray-800 placeholder-gray-500 shadow-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="flex-1 rounded-lg border border-gray-300 bg-white px-5 py-4 text-gray-800 placeholder-gray-500 shadow-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
              </div>
              <input
                name="company"
                placeholder="Company (optional)"
                className="w-full rounded-lg border border-gray-300 bg-white px-5 py-4 text-gray-800 placeholder-gray-500 shadow-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />
              <textarea
                name="workflow_problem"
                placeholder="Describe your biggest workflow problem (optional)"
                rows={3}
                className="w-full rounded-lg border border-gray-300 bg-white px-5 py-4 text-gray-800 placeholder-gray-500 shadow-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-purple-600 px-7 py-4 text-sm font-bold text-white shadow-md transition hover:bg-purple-500 md:w-auto"
              >
                Request Pilot Access
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <span>© 2026 Syntra Suite.</span>
            <span>All rights reserved.</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#product" className="hover:text-gray-900">Product</a>
            <a href="#use-cases" className="hover:text-gray-900">Use Cases</a>
            <a href="#demo" className="hover:text-gray-900">Demo</a>
            <a href="#founder" className="hover:text-gray-900">Founder</a>
            <a href="/privacy" className="hover:text-gray-900">Privacy</a>
            <a href="/terms" className="hover:text-gray-900">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}