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