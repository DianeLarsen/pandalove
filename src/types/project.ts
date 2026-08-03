export type ProjectStatus = "Built" | "In progress" | "Planned";

export type Project = {
  title: string;
  slug: string;
  status: ProjectStatus;
  description: string;
  featured: boolean;
  stack: string[];
  body: string;
};
