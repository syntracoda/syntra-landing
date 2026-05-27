export default function FounderIntroPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#050816] text-white">
      <section className="flex-1 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <a
            href="https://syntrasuite.com"
            className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-300"
          >
            &larr; Back to SyntraSuite.com
          </a>

          <h1 className="text-4xl font-black tracking-tight md:text-5xl">
            Founder Intro &mdash; Ryan Sanders
          </h1>
          <p className="mt-3 text-lg text-slate-300">
            Ryan Sanders introduces Syntra Suite and why we are building the AI
            Workforce OS for small businesses.
          </p>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center md:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-fuchsia-300/20">
              <svg className="h-8 w-8 text-fuchsia-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <a
              href="https://drive.google.com/file/d/1CZCM4TDzUwHYizQDrnsOcjWBcJOlcrf7/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-fuchsia-300 px-8 py-4 text-base font-black text-slate-950 shadow-lg shadow-fuchsia-500/20 transition hover:bg-fuchsia-200"
            >
              Watch Founder Intro Video
            </a>
            <p className="mt-4 text-sm text-slate-400">
              Video opens in a new tab
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-4xl flex-col justify-between gap-4 text-sm text-slate-400 md:flex-row">
          <p>&copy; 2026 Syntra Suite. All rights reserved.</p>
          <a
            href="https://syntrasuite.com"
            className="transition hover:text-cyan-300"
          >
            syntrasuite.com
          </a>
        </div>
      </footer>
    </main>
  );
}
