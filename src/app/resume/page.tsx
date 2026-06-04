import GlassCard from "@/components/GlassCard";
import PageHeader from "@/components/PageHeader";

export default function ResumePage() {
  return (
    <main className="min-h-screen text-foreground">
      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-16">
        <PageHeader
          eyebrow="Resume"
          title="Engineering technician moving deeper into software engineering."
          description="A practical mix of medical device engineering, software development, automation, and health informatics."
        />

        <GlassCard>
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground">
                Current Focus
              </h2>
              <p className="mt-2 leading-7">
                Building full-stack and backend projects with Next.js,
                TypeScript, C#, ASP.NET Core, SQL, and healthcare-focused
                software design.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                Education
              </h2>
              <p className="mt-2 leading-7">
                BS Computer Science. Currently pursuing a Master’s in Health
                Informatics.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                Background
              </h2>
              <p className="mt-2 leading-7">
                Senior Engineering Technician building medical devices, with
                prior USAF experience in F-16/F-15 electrical and environmental
                systems.
              </p>
            </section>
          </div>
        </GlassCard>
      </section>
    </main>
  );
}
