export type ProjectSection = {
  heading: string;
  body: string;
};

export type Project = {
  title: string;
  slug: string;
  href: string;
  status: "Built" | "In progress" | "Planned";
  description: string;
  stack: string[];
  featured: boolean;
  sections: ProjectSection[];
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
    sections: [
      {
        heading: "Project Goals",
        body: "The Digital Knowledgebase is designed to connect notes, references, projects, and tasks into a structured personal knowledge system. The goal is to move beyond isolated notes and create a tool that supports long-term research, writing, and project planning.",
      },
      {
        heading: "Core Features",
        body: "The project includes rich text notes, tag support, reference linking, project workspaces, linked note previews, hover interactions, and persistent relationships between notes and research materials.",
      },
      {
        heading: "Technical Challenges",
        body: "The most challenging parts have been managing rich text editor behavior, preserving linked references, coordinating hover previews, and keeping note relationships consistent across refreshes and UI states.",
      },
      {
        heading: "Next Steps",
        body: "The project is still in progress. Upcoming work includes deployment planning, hosted database setup, improved search, public demo preparation, and eventually a cloud-ready version of the application.",
      },
    ],
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
    sections: [
      {
        heading: "Project Goals",
        body: "The Digital Knowledgebase is designed to connect notes, references, projects, and tasks into a structured personal knowledge system. The goal is to move beyond isolated notes and create a tool that supports long-term research, writing, and project planning.",
      },
      {
        heading: "Core Features",
        body: "The project includes rich text notes, tag support, reference linking, project workspaces, linked note previews, hover interactions, and persistent relationships between notes and research materials.",
      },
      {
        heading: "Technical Challenges",
        body: "The most challenging parts have been managing rich text editor behavior, preserving linked references, coordinating hover previews, and keeping note relationships consistent across refreshes and UI states.",
      },
      {
        heading: "Next Steps",
        body: "The project is still in progress. Upcoming work includes deployment planning, hosted database setup, improved search, public demo preparation, and eventually a cloud-ready version of the application.",
      },
    ],
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
    sections: [
      {
        heading: "Project Goals",
        body: "The Digital Knowledgebase is designed to connect notes, references, projects, and tasks into a structured personal knowledge system. The goal is to move beyond isolated notes and create a tool that supports long-term research, writing, and project planning.",
      },
      {
        heading: "Core Features",
        body: "The project includes rich text notes, tag support, reference linking, project workspaces, linked note previews, hover interactions, and persistent relationships between notes and research materials.",
      },
      {
        heading: "Technical Challenges",
        body: "The most challenging parts have been managing rich text editor behavior, preserving linked references, coordinating hover previews, and keeping note relationships consistent across refreshes and UI states.",
      },
      {
        heading: "Next Steps",
        body: "The project is still in progress. Upcoming work includes deployment planning, hosted database setup, improved search, public demo preparation, and eventually a cloud-ready version of the application.",
      },
    ],
  },
];
