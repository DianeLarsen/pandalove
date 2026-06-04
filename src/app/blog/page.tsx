import GlassCard from "@/components/GlassCard";
import PageHeader from "@/components/PageHeader";
import { posts } from "@/data/posts";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="min-h-screen text-foreground">
      <section className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-16">
        <PageHeader
          eyebrow="Blog"
          title="Writing, notes, projects, and whatever else survives editing."
          description="This section will replace pandalove-blog.dev once the content is migrated."
        />

        <GlassCard>
          <div className="grid gap-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={post.href}
                className="rounded-2xl border border-border bg-card-strong p-6 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm text-muted-foreground">{post.date}</p>

                <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>

                <p className="mt-3 text-muted-foreground">{post.summary}</p>
              </Link>
            ))}
          </div>
        </GlassCard>
      </section>
    </main>
  );
}
