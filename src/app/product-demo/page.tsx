export default function ProductDemoPage() {
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
            Syntra is an AI workforce platform for small businesses.
          </h1>
          <div className="mt-6 space-y-4">
            <p className="text-lg leading-7 text-gray-700">
              Instead of giving a business another chatbot, Syntra gives them specialized AI workers that operate inside their actual workflow.
            </p>
            <p className="text-lg leading-7 text-gray-700">
              This is the Syntra workspace. Each business has its own context, work queue, approvals, and action history.
            </p>
            <p className="text-lg leading-7 text-gray-700">
              The first active worker is the Executive Assistant.
            </p>
            <p className="text-lg leading-7 text-gray-700">
              It reviews the business day, identifies important emails, scheduling conflicts, follow‑ups, and client issues, then turns that into a clear daily briefing.
            </p>
            <p className="text-lg leading-7 text-gray-700">
              From there, Syntra creates work items and recommended next actions.
            </p>
            <p className="text-lg leading-7 text-gray-700">
              Here, the assistant has prepared a response draft and identified a calendar issue. But Syntra does not just act on its own. The user reviews, edits, approves, or dismisses the action.
            </p>
          </div>
          <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8 text-center md:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50">
              <svg
                className="h-8 w-8 text-cyan-600"
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
              href="https://drive.google.com/file/d/1hXwIl_o02xvRlGqSnUpUNscXzXQJoxTE/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-cyan-600 px-8 py-4 text-base font-black text-white shadow-md transition hover:bg-cyan-500"
            >
              Watch Product Demo Video
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