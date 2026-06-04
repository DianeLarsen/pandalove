export type Project = {
  title: string;
  slug: string;
  href: string;
  status: "Built" | "In progress" | "Planned";
  description: string;
  stack: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Digital Knowledgebase",
    slug: "knowledgebase",
    href: "/projects/knowledgebase",
    status: "In progress",
    description:
      "A personal knowledge management system inspired by the Antinet Zettelkasten method, built with Next.js, TypeScript, PostgreSQL, and rich note-linking features.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tiptap", "Drizzle"],
    featured: true,
  },
  {
    title: "Clinic Intake API",
    slug: "clinic-intake-api",
    href: "/projects/clinic-intake-api",
    status: "In progress",
    description:
      "A healthcare-focused backend API built with ASP.NET Core, C#, Entity Framework Core, and REST API design concepts.",
    stack: ["C#", "ASP.NET Core", "Entity Framework Core", "SQL Server"],
    featured: true,
  },
  {
    title: "Haven’s Heroes",
    slug: "havens-heroes",
    href: "/projects/havens-heroes",
    status: "Built",
    description:
      "A community platform with authentication, posts, polls, events, role-based access, and user-focused features.",
    stack: ["Next.js", "TypeScript", "Supabase", "Clerk", "Tailwind"],
    featured: true,
  },
];
