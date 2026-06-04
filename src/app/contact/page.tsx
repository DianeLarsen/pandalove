import GlassCard from "@/components/GlassCard";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  return (
    <main className="min-h-screen text-foreground">
      <section className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-16">
        <PageHeader
          eyebrow="Contact"
          title="Let's connect."
          description="I'm interested in software engineering, healthcare technology, automation, backend systems, and practical tools that make work less ridiculous."
        />

        <GlassCard>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground">Email:</span>{" "}
              <a
                href="mailto:Diane.Larsen@outlook.com"
                className="underline hover:text-foreground"
              >
                Diane.Larsen@outlook.com
              </a>
            </p>

            <p>
              <span className="font-semibold text-foreground">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/dianemlarsen"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                linkedin.com/in/dianemlarsen
              </a>
            </p>

            <p>
              <span className="font-semibold text-foreground">GitHub:</span>{" "}
              <a
                href="https://github.com/DianeLarsen"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                github.com/DianeLarsen
              </a>
            </p>
          </div>
        </GlassCard>
      </section>
    </main>
  );
}
