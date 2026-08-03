import Link from "next/link";
import GlassCard from "@/components/GlassCard";
import PageHeader from "@/components/PageHeader";
import { getPosts } from "@/lib/content";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen text-foreground">
      <section className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-16">
        <PageHeader
          eyebrow="Blog"
          title="Writing, notes, projects, and whatever else survives editing."
          description="Posts about software, projects, learning, gardening, books, and whatever else earns a place here."
        />

        <GlassCard>
          {posts.length === 0 ? (
            <p className="text-muted-foreground">
              No posts yet. Add a Markdown file in content/blog and commit it.
            </p>
          ) : (
            <div className="grid gap-4">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="rounded-2xl border border-border bg-card-strong p-6 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-sm text-muted-foreground">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>

                  <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>

                  <p className="mt-3 text-muted-foreground">{post.summary}</p>
                </Link>
              ))}
            </div>
          )}
        </GlassCard>
      </section>
    </main>
  );
}
