# Portfolio content

This folder is the site's content system. Markdown files are deployed with the site, so edits are versioned in Git and do not depend on Sanity.

## Add a blog post

Create `content/blog/your-post-slug.md`:

```md
---
title: Your post title
slug: your-post-slug
summary: One or two sentences for the blog list.
publishedAt: 2026-08-03
---

Write the post in Markdown here.
```

## Add a project

Create `content/projects/your-project-slug.md`:

```md
---
title: Project name
slug: your-project-slug
status: In progress
description: A short description for the project card.
featured: false
stack:
  - TypeScript
  - Next.js
---

## Project goals

Write the project case study in Markdown here.
```

Allowed `status` values are `Built`, `In progress`, and `Planned`.

## Images

Put images in `public/images`, preferably in a subfolder such as `public/images/projects/textbound/`. Reference one in Markdown like this:

```md
![TextBound search results](/images/projects/textbound/search-results.png)
```

Then run `npm run build` before committing. The build catches malformed front matter before it reaches the deployed site.
