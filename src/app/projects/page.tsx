import Link from "next/link";

const projects = [
  {
    title: "Digital Knowledgebase",
    href: "/projects/knowledgebase",
    status: "In progress",
    description:
      "A personal knowledge management system inspired by the Antinet Zettelkasten method, built with Next.js, TypeScript, PostgreSQL, and rich note-linking features.",
  },
  {
    title: "Clinic Intake API",
    href: "/projects/clinic-intake-api",
    status: "In progress",
    description:
      "A healthcare-focused backend API built with ASP.NET Core, C#, Entity Framework Core, and REST API design concepts.",
  },
  {
    title: "Haven’s Heroes",
    href: "/projects/havens-heroes",
    status: "Built",
    description:
      "A community platform with authentication, posts, polls, events, role-based access, and user-focused features.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen text-foreground">
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-10 rounded-3xl border border-border bg-card p-8 shadow-sm backdrop-blur-md">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Projects
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            Software I’m building, improving, and occasionally arguing with.
          </h1>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                {project.status}
              </span>

              <h2 className="mt-5 text-xl font-semibold">{project.title}</h2>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
