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

          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-black/60">
            <video
              controls
              playsInline
              className="w-full"
            >
              <source src="/videos/founder-intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
