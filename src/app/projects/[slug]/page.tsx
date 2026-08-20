import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import GlassCard from "@/components/GlassCard";
import PageHeader from "@/components/PageHeader";
import {
  getProjectBySlug,
  getProjectDevNotes,
  getProjects,
} from "@/lib/content";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = await getProjectBySlug(slug);
  const devNotes = await getProjectDevNotes(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen text-foreground">
      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-16">
        <PageHeader
          eyebrow={project.status}
          title={project.title}
          description={project.description}
        />

        <div
          className={
            devNotes.length > 0
              ? "grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]"
              : "grid gap-8"
          }
        >
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

              <article className="prose prose-slate max-w-none dark:prose-invert">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {project.body}
                </ReactMarkdown>
              </article>

              <Link
                href="/projects"
                className="inline-flex rounded-md border border-border px-4 py-2 text-sm font-semibold hover:bg-accent"
              >
                Back to projects
              </Link>
            </div>
          </GlassCard>

          {devNotes.length > 0 && (
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <GlassCard>
                <h2 className="text-lg font-semibold">Development Log</h2>

                {devNotes.length === 0 ? (
                  <p className="mt-4 text-sm text-muted-foreground">
                    No development notes yet.
                  </p>
                ) : (
                  <div className="mt-5 space-y-5">
                    {devNotes.map((note) => (
                      <div
                        key={note.slug}
                        className="border-l-2 border-border pl-4"
                      >
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          {new Date(note.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>

                        <p className="mt-1 text-xs uppercase text-muted-foreground">
                          {note.type}
                        </p>

                        <h3 className="mt-1 font-semibold">{note.title}</h3>

                        {note.summary && (
                          <p className="mt-2 text-sm leading-5 text-muted-foreground">
                            {note.summary}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </GlassCard>
            </aside>
          )}
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}
