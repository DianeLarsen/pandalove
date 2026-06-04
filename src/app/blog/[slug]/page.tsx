import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import GlassCard from "@/components/GlassCard";
import PageHeader from "@/components/PageHeader";
import { client } from "@/sanity/lib/client";
import { postBySlugQuery, postsQuery } from "@/sanity/lib/queries";
import { Post } from "@/types/post";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const posts = await client.fetch<Post[]>(postsQuery);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const post = await client.fetch<Post>(postBySlugQuery, { slug });

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen text-foreground">
      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-16">
        <PageHeader
          eyebrow={new Date(post.publishedAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
          title={post.title}
          description={post.summary}
        />

        <GlassCard>
          <article className="prose prose-slate max-w-none dark:prose-invert">
            {post.body && <PortableText value={post.body} />}
          </article>

          <Link
            href="/blog"
            className="mt-8 inline-flex rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground hover:bg-accent"
          >
            Back to blog
          </Link>
        </GlassCard>
      </section>
    </main>
  );
}