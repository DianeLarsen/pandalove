import { notFound } from "next/navigation";
import Link from "next/link";
import GlassCard from "@/components/GlassCard";
import PageHeader from "@/components/PageHeader";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen text-foreground">
      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-16">
        <PageHeader
          eyebrow={project.status}
          title={project.title}
          description={project.description}
        />

        <GlassCard>
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold">Technology Stack</h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accent px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Project Overview</h2>

              <p className="mt-3 leading-7 text-muted-foreground">
                This project page is ready for a full case study. The next step
                is to add project-specific goals, features, screenshots,
                technical challenges, and lessons learned.
              </p>
            </section>

            <Link
              href="/projects"
              className="inline-flex rounded-md border border-border px-4 py-2 text-sm font-semibold hover:bg-accent"
            >
              Back to projects
            </Link>
          </div>
        </GlassCard>
      </section>
    </main>
  );
}
