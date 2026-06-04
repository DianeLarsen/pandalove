import Link from "next/link";

const featuredProjects = [
  {
    title: "Digital Knowledgebase",
    description:
      "A work-in-progress personal knowledge management system inspired by the Antinet Zettelkasten method, built with Next.js, TypeScript, PostgreSQL, and rich note-linking features.",
    href: "/projects/knowledgebase",
    status: "In progress",
  },
  {
    title: "Clinic Intake API",
    description:
      "A healthcare-focused backend project using ASP.NET Core, C#, Entity Framework Core, and API design concepts.",
    href: "/projects/clinic-intake-api",
    status: "In progress",
  },
  {
    title: "Haven’s Heroes",
    description:
      "A neighborhood community platform with authentication, posts, polls, events, role-based access, and user-focused features.",
    href: "/projects/havens-heroes",
    status: "Built",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen text-foreground">
      <section className="mx-auto flex max-w-7xl flex-col gap-16 px-4 py-16 sm:px-6 lg:px-8">
        <section className="grid gap-8 rounded-3xl border border-border bg-card p-8 shadow-sm backdrop-blur-md lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Software Developer • Engineering Technician • Health Informatics
              Student
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Hi, I’m Diane Larsen.
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              I build practical software, automate messy processes, and create
              systems that help people organize information, solve problems, and
              avoid turning spreadsheets into a lifestyle.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90"
              >
                View Projects
              </Link>

              <Link
                href="/resume"
                className="rounded-md border border-border px-5 py-3 text-sm font-semibold transition hover:bg-accent"
              >
                Resume
              </Link>

              <a
                href="https://github.com/DianeLarsen"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-border px-5 py-3 text-sm font-semibold transition hover:bg-accent"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card-strong p-5">
            <p className="text-sm font-semibold text-muted-foreground">
              Current Focus
            </p>

            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">Building:</span>{" "}
                Knowledgebase and Clinic Intake API
              </li>
              <li>
                <span className="font-semibold text-foreground">Learning:</span>{" "}
                ASP.NET Core, C#, Azure, and backend architecture
              </li>
              <li>
                <span className="font-semibold text-foreground">Studying:</span>{" "}
                Health Informatics at Northwestern
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Featured Projects
              </h2>
              <p className="mt-2 text-muted-foreground">
                Current and recent software projects.
              </p>
            </div>

            <Link
              href="/projects"
              className="hidden text-sm font-medium text-muted-foreground hover:text-foreground sm:block"
            >
              View all projects
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4">
                  <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-lg font-semibold">{project.title}</h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {project.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-card p-6 shadow-sm backdrop-blur-md">
          <h2 className="text-2xl font-bold tracking-tight">Current Focus</h2>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div>
              <h3 className="font-semibold">Building</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A new unified portfolio, blog, and project showcase at
                pandalove.dev.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Learning</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                ASP.NET Core, C#, backend API design, deployment, and cloud
                hosting.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Studying</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Health Informatics, with a focus on practical software systems
                in healthcare settings.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
