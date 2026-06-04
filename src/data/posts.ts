export type Post = {
  title: string;
  slug: string;
  href: string;
  date: string;
  summary: string;
  published: boolean;
};

export const posts: Post[] = [
  {
    title: "Coming Soon",
    slug: "coming-soon",
    href: "/blog/coming-soon",
    date: "2026",
    summary:
      "Blog posts will live here once I migrate my writing into the new site.",
    published: false,
  },
];
