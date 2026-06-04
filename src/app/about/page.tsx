export default function AboutPage() {
  return (
    <main className="min-h-screen text-foreground">
      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm backdrop-blur-md">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            About
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            I build practical systems that solve real problems.
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I’m Diane Larsen, a Senior Engineering Technician, software
            developer, USAF veteran, and Health Informatics graduate student. My
            background combines medical device engineering, software
            development, process improvement, and a dangerous tendency to turn
            “that’s annoying” into “I should build a tool for that.”
          </p>

          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            I work with Next.js, TypeScript, Python, C#, SQL, and backend API
            design. I’m especially interested in healthcare software, knowledge
            management, automation, and systems that make complicated workflows
            easier to use.
          </p>
        </div>
      </section>
    </main>
  );
}
