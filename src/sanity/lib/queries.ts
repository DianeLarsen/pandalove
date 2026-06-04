export const featuredProjectsQuery = `
  *[_type == "project" && featured == true]
  | order(title asc) {
    title,
    "slug": slug.current,
    status,
    description,
    featured,
    stack,
    sections
  }
`;

export const projectsQuery = `
  *[_type == "project"]
  | order(title asc) {
    title,
    "slug": slug.current,
    status,
    description,
    featured,
    stack,
    sections
  }
`;

export const projectBySlugQuery = `
  *[_type == "project" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    status,
    description,
    featured,
    stack,
    sections
  }
`;

export const postsQuery = `
  *[_type == "post" && published == true]
  | order(publishedAt desc) {
    title,
    "slug": slug.current,
    summary,
    publishedAt,
    published
  }
`;

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug && published == true][0] {
    title,
    "slug": slug.current,
    summary,
    publishedAt,
    published,
    body
  }
`;