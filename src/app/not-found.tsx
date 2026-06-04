import Link from "next/link";
import GlassCard from "@/components/GlassCard";

export default function NotFound() {
  return (
    <main className="min-h-screen text-foreground">
      <section className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-16">
        <GlassCard>
          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            404
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            This page wandered off.
          </h1>

          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            The page you’re looking for doesn’t exist, moved, or was sacrificed
            during a perfectly normal website rebuild.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90"
            >
              Go home
            </Link>

            <Link
              href="/projects"
              className="rounded-md border border-border px-5 py-3 text-sm font-semibold transition hover:bg-accent"
            >
              View projects
            </Link>
          </div>
        </GlassCard>
      </section>
    </main>
  );
}
