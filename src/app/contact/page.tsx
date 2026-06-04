export default function ContactPage() {
  return (
    <main className="min-h-screen text-foreground">
      <section className="mx-auto max-w-3xl px-4 py-16">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm backdrop-blur-md">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Contact
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            Let’s connect.
          </h1>

          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            I’m interested in software engineering, healthcare technology,
            automation, backend systems, and practical tools that make work less
            ridiculous.
          </p>

          <div className="mt-8 space-y-3 text-muted-foreground">
            <p>
              Email:{" "}
              <a
                href="mailto:Diane.Larsen@outlook.com"
                className="underline hover:text-foreground"
              >
                Diane.Larsen@outlook.com
              </a>
            </p>

            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/dianemlarsen"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                linkedin.com/in/dianemlarsen
              </a>
            </p>

            <p>
              GitHub:{" "}
              <a
                href="https://github.com/DianeLarsen"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                github.com/DianeLarsen
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
