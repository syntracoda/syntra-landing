export default function FounderIntroPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
      <section className="flex-1 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <a
            href="https://syntrasuite.com"
            className="mb-8 inline-flex items-center gap-2 text-sm text-gray-600 transition hover:text-cyan-700"
          >
            &larr; Back to SyntraSuite.com
          </a>
          <h1 className="text-4xl font-black tracking-tight md:text-5xl">
            Founder Intro — Ryan Sanders
          </h1>
          <div className="mt-6 space-y-4">
            <p className="text-lg leading-7 text-gray-700">
              Hi, I’m Ryan Sanders, founder of Syntra.
            </p>
            <p className="text-lg leading-7 text-gray-700">
              Small businesses do not need another chatbot. They need an AI workforce they can trust.
            </p>
            <p className="text-lg leading-7 text-gray-700">
              Most small businesses are buried in email, scheduling, follow‑ups, client requests,
              missed tasks, and scattered tools. The work does not stop, but they usually do not have the staff or time to keep up with all of it.
            </p>
            <p className="text-lg leading-7 text-gray-700">
              Syntra gives those businesses specialized AI workers that operate inside their workflow.
            </p>
            <p className="text-lg leading-7 text-gray-700">
              Our first worker is the Executive Assistant. It reviews email and calendar activity,
              identifies what needs attention, prepares draft responses, flags scheduling conflicts, recommends next actions,
              and routes everything through human approval.
            </p>
            <p className="text-lg leading-7 text-gray-700">
              That approval layer is important. Syntra is not trying to replace the business owner’s judgment.
              It helps prepare the work, organize the day, and keep the business moving while the human stays in control.
            </p>
            <p className="text-lg leading-7 text-gray-700">
              We are building Syntra as an AI workforce operating system for small businesses, starting with real workflows,
              real approvals, and pilot‑ready use cases.
            </p>
            <p className="text-lg leading-7 text-gray-700">That is the company we are building.</p>
          </div>
          <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8 text-center md:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-fuchsia-50">
              <svg
                className="h-8 w-8 text-fuchsia-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <a
              href="https://drive.google.com/file/d/1CZCM4TDzUwHYizQDrnsOcjWBcJOlcrf7/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-fuchsia-600 px-8 py-4 text-base font-black text-white shadow-md transition hover:bg-fuchsia-500"
            >
              Watch Founder Intro Video
            </a>
            <p className="mt-4 text-sm text-gray-500">Video opens in a new tab</p>
          </div>
        </div>
      </section>
      <footer className="border-t border-gray-200 px-6 py-8">
        <div className="mx-auto flex max-w-4xl flex-col justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>&copy; 2026 Syntra Suite. All rights reserved.</p>
          <a href="https://syntrasuite.com" className="transition hover:text-cyan-700">
            syntrasuite.com
          </a>
        </div>
      </footer>
    </main>
  );
}