export default function ResumePage() {
  return (
    <main className="min-h-screen text-foreground">
      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm backdrop-blur-md">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Resume
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            Engineering technician moving deeper into software engineering.
          </h1>

          <div className="mt-8 space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground">
                Current Focus
              </h2>
              <p className="mt-2">
                Building full-stack and backend projects with Next.js,
                TypeScript, C#, ASP.NET Core, SQL, and healthcare-focused
                software design.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                Education
              </h2>
              <p className="mt-2">
                BS Computer Science. Currently pursuing a Master’s in Health
                Informatics.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                Background
              </h2>
              <p className="mt-2">
                Senior Engineering Technician building medical devices, with
                prior USAF experience in F-16/F-15 electrical and environmental
                systems.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
