import Link from "next/link";
import GlassCard from "@/components/GlassCard";
import PageHeader from "@/components/PageHeader";
import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";
import { Project } from "@/types/project";

export default async function ProjectsPage() {
    const projects = await client.fetch<Project[]>(projectsQuery);

  return (
    <main className="min-h-screen text-foreground">
      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-16">
        <PageHeader
          eyebrow="Projects"
          title="Software I’m building, improving, and occasionally arguing with."
        />

        <GlassCard>
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="rounded-2xl border border-border bg-card-strong p-6 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                  {project.status}
                </span>

                <h2 className="mt-5 text-xl font-semibold">{project.title}</h2>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-accent px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </GlassCard>
      </section>
    </main>
  );
}
