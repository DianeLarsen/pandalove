# Diane Larsen | Software Engineering Portfolio

Source code and content for [pandalove.dev](https://pandalove.dev), my software engineering portfolio.

This site documents not only completed projects, but how I approach software development: defining problems, planning work, making technical decisions, solving problems, testing solutions, and iterating over time.

Projects are intentionally documented while they are being built. Some begin with my own idea, while others use a simulated client brief to practice working from requirements rather than designing around whatever I already know how to build.

The portfolio itself is also a software project and will continue to change as I learn, build, and inevitably decide something that seemed perfectly reasonable three months ago needs to be redesigned.

## Technology

The portfolio is built with:

* Next.js
* React
* TypeScript
* Tailwind CSS
* Markdown / MDX
* Git
* GitHub
* Vercel

Content is stored directly in this repository rather than in an external CMS.

This keeps project history, documentation, blog posts, and code changes together and makes the publishing process intentionally simple.

## Repository Structure

```text
content/
├── blog/
│   └── *.md
│
├── projects/
│   └── *.md
│
├── templates/
│   ├── blog-template.md
│   ├── project-template.md
│   └── project-brief-template.md
│
└── resume.md

public/
└── images/
    ├── blog/
    └── projects/

src/
├── app/
├── components/
└── lib/
    └── content.ts
```

### `content/blog`

Contains published blog posts.

### `content/projects`

Contains project pages, case studies, project briefs, and development logs.

Each project normally has one long-lived Markdown file that is updated throughout development rather than creating a new file for every update.

### `content/templates`

Contains reusable starting files for new content.

Use these instead of copying an arbitrary old post and hoping its front matter still represents reality.

### `public/images/blog`

Images used primarily in blog posts.

### `public/images/projects`

Screenshots, diagrams, and other evidence associated with individual projects.

A project should normally have its own directory:

```text
public/images/projects/cleartrack/
```

## Run Locally

Clone the repository and install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local address shown in the terminal, commonly:

```text
http://localhost:3000
```

Before publishing changes, run:

```bash
npm run lint
npm run build
```

The production build is particularly important because it catches routing, content parsing, type, and build problems that may not be obvious during local development.

## Content Workflow

The portfolio uses Markdown as its content management system.

The normal publishing workflow is:

```text
Copy template
↓
Fill in content
↓
Preview locally
↓
Run lint and build
↓
Commit
↓
Push to GitHub
↓
Vercel deploys
```

Content changes therefore remain part of the repository's Git history.

## Creating a Blog Post

### 1. Copy the blog template

```bash
cp content/templates/blog-template.md content/blog/my-post-name.md
```

Use lowercase, hyphen-separated filenames.

Example:

```text
content/blog/building-cleartrack.md
```

### 2. Complete the front matter

Blog posts use:

```md
---
title: "Building ClearTrack: A Client-Style Equipment Readiness Portal"
slug: "building-cleartrack-equipment-readiness-portal"
summary: "Starting a transparent, client-style portfolio build for clinic equipment readiness tracking."
publishedAt: "2026-08-20"
---
```

#### `title`

The displayed title of the post.

#### `slug`

The permanent URL identifier.

Do not casually change a slug after publishing because existing links may break.

#### `summary`

A short description used on blog listing pages and potentially in page metadata.

The summary should explain why the post is worth opening rather than merely repeating the title.

#### `publishedAt`

Publication date using:

```text
YYYY-MM-DD
```

### 3. Write the post

Blog posts can use normal Markdown:

```md
# Main Heading

## Section

Regular paragraph text.

- Item one
- Item two

**Bold text**

[Useful link](https://example.com)
```

Technical posts may also include fenced code blocks.

Blog posts do not need to follow a rigid format. They may document:

* project announcements;
* development experiences;
* engineering decisions;
* things I learned;
* technical experiments;
* career development;
* health informatics;
* other subjects relevant to what I am building or learning.

Project-related posts should link to the corresponding project page when appropriate rather than duplicating the entire case study.

## Creating a Project

### 1. Copy the project template

```bash
cp content/templates/project-template.md content/projects/project-name.md
```

Example:

```bash
cp content/templates/project-template.md content/projects/cleartrack.md
```

### 2. Complete the project front matter

A typical project uses:

```md
---
title: "ClearTrack"
slug: "cleartrack"
status: "In Progress"
description: "A client-style equipment readiness portal for tracking clinic equipment status and readiness."
featured: true
stack:
  - Next.js
  - TypeScript
  - Tailwind CSS
startedAt: "2026-08-20"
---
```

### Project status

Use a small, consistent set of statuses such as:

```text
Planned
In Progress
Built
```

The status represents the overall state of the project.

Detailed progress belongs in the development log rather than creating increasingly creative status labels.

## Project Briefs

Projects should begin with a brief whenever practical.

A brief may represent:

* a problem I identified myself;
* a personal project idea;
* a simulated client request;
* requirements supplied as part of a learning exercise.

For simulated client projects, the portfolio should clearly identify the work as simulated rather than implying that it was paid client work.

A project brief can include:

```md
## Project Brief

### Client Request

### Problem

### Users

### Goals

### Required Features

### Constraints

### Success Criteria

### Deliverables

### Out of Scope
```

Use:

```text
content/templates/project-brief-template.md
```

as the starting point when developing a new brief.

The brief should describe the problem and requirements before implementation decisions take over.

## Project Case Studies

As development progresses, the project page should become a useful case study.

A typical structure is:

```md
# Project Name

## Project Brief

## Problem

## Solution

## Key Workflows

## Architecture

## Engineering Decisions

## Testing and Quality

## Development Log

## Results

## Next Steps
```

Not every project needs every section.

The goal is to explain the work clearly rather than fill headings because a template demanded tribute.

## Development Logs

Each active project maintains a chronological development log inside its existing project Markdown file.

Do **not** create a separate file for every work session.

Instead, append entries to the project's `Development Log`.

This provides a visible history from the initial brief through implementation and completion.

### Starting a work session

Before beginning meaningful work, add an entry describing the goal.

Example:

```md
## Development Log

### August 20, 2026

#### Start of Session

**Goal:** Create the framework and basic layout using Tailwind CSS.

**Plan:**

- Create the initial application structure.
- Build the basic page layout.
- Add placeholder content.
- Keep the data hardcoded until the initial interface is established.
```

This records what I intended to accomplish before knowing whether it would actually work.

### Ending a work session

At the end of the session, update the same date with the result.

```md
#### End of Session

**Result:** Goal completed.

Created the initial application framework and Tailwind layout. Added placeholder content and established the basic visual structure.

![Initial ClearTrack layout](/images/projects/cleartrack/2026-08-20-layout.png)

**Problems / Decisions:**

- Kept data hardcoded while establishing the UI.
- Deferred persistent storage until the primary workflow is working.

**Next:** Build the equipment list and readiness-status components.
```

The end-of-session entry should capture:

* what was actually accomplished;
* problems encountered;
* important decisions;
* screenshots or other evidence when useful;
* what should happen next.

Development logs should remain concise.

They are engineering records, not diary entries about every semicolon that fought back.

## Milestones and Blockers

Not every update needs to represent a normal work session.

Important events can be recorded separately.

Example milestone:

```md
#### Milestone

Deployed the first working version to Vercel and verified the primary workflow in production.
```

Example blocker:

```md
#### Blocker

Authentication is preventing protected routes from loading correctly in production.

**Investigation:**

- Local authentication works.
- Production environment variables are present.
- Next step is comparing callback URLs between environments.
```

These entries help show debugging and decision-making rather than presenting the project as though it materialized fully formed after one suspiciously productive weekend.

## Project Images

Store project screenshots under:

```text
public/images/projects/<project-slug>/
```

Example:

```text
public/images/projects/cleartrack/dashboard.png
```

Reference them from Markdown:

```md
![ClearTrack equipment readiness dashboard](/images/projects/cleartrack/dashboard.png)
```

Use descriptive alt text.

Screenshots should demonstrate something useful, such as:

* a completed workflow;
* UI progression;
* testing evidence;
* deployment;
* architecture;
* a meaningful before-and-after state.

Avoid collecting screenshots merely because the screenshot button was available.

## Updating an Existing Project

Edit the existing project Markdown file.

Preserve its slug unless there is a strong reason to change the URL.

Update relevant information such as:

* status;
* technology stack;
* implemented capabilities;
* architecture decisions;
* screenshots;
* testing;
* deployment;
* development log;
* results;
* next steps.

The project page should reflect the project's current state while the development log preserves how it reached that state.

## Updating the Resume

Resume content lives in:

```text
content/resume.md
```

To update it:

1. Edit `content/resume.md`.
2. Preserve expected front matter fields.
3. Preview `/resume` locally.
4. Run lint.
5. Run the production build.
6. Commit and publish normally.

## Content Quality Checklist

Before publishing a project or blog update:

* [ ] The title clearly identifies the content.
* [ ] The slug is correct.
* [ ] Dates use `YYYY-MM-DD`.
* [ ] Filenames use lowercase hyphen-separated words.
* [ ] Links work.
* [ ] Images load.
* [ ] Images include useful alt text.
* [ ] Claims are specific and truthful.
* [ ] Simulated client work is identified as simulated.
* [ ] No credentials, secrets, private URLs, or personal information were committed.
* [ ] `npm run lint` passes.
* [ ] `npm run build` passes.
* [ ] The Vercel preview looks correct before merging significant changes.

## Git Workflow

Start from an updated `main` branch:

```bash
git switch main
git pull origin main
```

Create a short-lived branch:

```bash
git switch -c content/cleartrack-update
```

Make and validate the changes:

```bash
npm run lint
npm run build
```

Commit:

```bash
git add .
git commit -m "Add ClearTrack development update"
```

Push:

```bash
git push -u origin content/cleartrack-update
```

Open a pull request, review the Vercel preview when available, and merge after the change is ready.

For very small content corrections, the exact workflow may vary, but meaningful project and site changes should remain easy to identify in Git history.

## Philosophy

This portfolio is intended to show more than finished applications.

The useful evidence includes:

* how a problem was defined;
* how requirements were interpreted;
* what was planned before implementation;
* what technical decisions were made;
* what failed;
* how problems were investigated;
* what was tested;
* what changed during development;
* what was ultimately delivered.

Finished software matters.

The path from requirement to working software matters too.

## License

Unless noted otherwise, the code and written content in this repository are © Diane Larsen.

Project write-ups, personal content, images, and branding may not be reused without permission.
