import Link from "next/link";
import { notFound } from "next/navigation";
import GlassCard from "@/components/GlassCard";
import PageHeader from "@/components/PageHeader";
import { posts } from "@/data/posts";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen text-foreground">
      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-16">
        <PageHeader
          eyebrow={post.date}
          title={post.title}
          description={post.summary}
        />

        <GlassCard>
          <div className="space-y-6 text-muted-foreground">
            <p className="leading-7">
              This blog post page is ready for migrated content. Eventually,
              this will pull full post content from Sanity or another content
              source instead of living directly in the code.
            </p>

            <Link
              href="/blog"
              className="inline-flex rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground hover:bg-accent"
            >
              Back to blog
            </Link>
          </div>
        </GlassCard>
      </section>
    </main>
  );
}
