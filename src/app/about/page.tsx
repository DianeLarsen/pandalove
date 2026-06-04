import GlassCard from "@/components/GlassCard";
import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <main className="min-h-screen text-foreground">
      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-16">
        <PageHeader
          eyebrow="About"
          title="I build practical systems that solve real problems."
        />

        <GlassCard>
          <div className="space-y-6 text-lg leading-8 text-muted-foreground">
            <p>
              I’m Diane Larsen, a Senior Engineering Technician, software
              developer, USAF veteran, and Health Informatics graduate student.
              My background combines medical device engineering, software
              development, process improvement, and a dangerous tendency to turn
              “that’s annoying” into “I should build a tool for that.”
            </p>

            <p>
              I work with Next.js, TypeScript, Python, C#, SQL, and backend API
              design. I’m especially interested in healthcare software,
              knowledge management, automation, and systems that make
              complicated workflows easier to use.
            </p>

            <p>
              Professionally, I build defibrillators and support engineering
              teams developing medical technology. Outside of work, I enjoy
              building software projects, writing fantasy fiction, gardening,
              and creating systems that organize information more effectively.
            </p>
          </div>
        </GlassCard>
      </section>
    </main>
  );
}
