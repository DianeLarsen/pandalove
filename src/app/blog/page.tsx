const posts = [
  {
    title: "Coming Soon",
    summary:
      "Blog posts will live here once I migrate my writing into the new site.",
    date: "2026",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen text-foreground">
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm backdrop-blur-md">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Blog
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            Writing, notes, projects, and whatever else survives editing.
          </h1>

          <p className="mt-4 text-muted-foreground">
            This section will replace pandalove-blog.dev once the content is
            migrated.
          </p>
        </div>

        <div className="mt-8 grid gap-4">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm backdrop-blur-md"
            >
              <p className="text-sm text-muted-foreground">{post.date}</p>
              <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>
              <p className="mt-3 text-muted-foreground">{post.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
