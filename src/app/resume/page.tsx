import GlassCard from "@/components/GlassCard";
import PageHeader from "@/components/PageHeader";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getResume } from "@/lib/content";

export default async function ResumePage() {
  const resume = await getResume();

  return (
    <main className="min-h-screen text-foreground">
      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-16">
        <PageHeader
          eyebrow="Resume"
          title={resume.title}
          description={resume.summary}
        />

        <GlassCard>
          <article className="prose prose-slate max-w-none dark:prose-invert">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {resume.body}
            </ReactMarkdown>
          </article>
        </GlassCard>
      </section>
    </main>
  );
}
