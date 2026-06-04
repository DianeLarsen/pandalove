export type ProjectSection = {
  heading: string;
  body: string;
};

export type Project = {
  title: string;
  slug: string;
  status: string;
  description: string;
  featured: boolean;
  stack: string[];
  sections: ProjectSection[];
};