---
title: Digital Knowledgebase
slug: digital-knowledgebase
status: In progress
description: A full-stack personal knowledge system for connecting notes, references, projects, and tasks instead of leaving useful information stranded in unrelated apps.
featured: true
stack:
  - Next.js
  - TypeScript
  - PostgreSQL
  - Drizzle ORM
  - Tiptap
  - Tailwind CSS
---

## The problem

Notes, research links, tasks, and project plans tend to split into separate tools until finding the thing you already know becomes a part-time job. The Digital Knowledgebase is an attempt to make those relationships explicit instead of relying on memory and heroic amounts of browser-tab archaeology.

## What I am building

Inspired by the Antinet Zettelkasten approach, this application connects notes, sources, projects, and tasks in a structured personal workspace. It is designed to support long-running research and writing as well as the ordinary work of planning and completing a project.

## Current capabilities

- Rich-text note authoring with Tiptap.
- Tags, references, and linked-note relationships.
- Project workspaces that connect notes and supporting material.
- Search and interactive previews for linked content.
- Authentication, ownership rules, and persistent user data.
- PostgreSQL relational modeling with Drizzle ORM.

## Engineering focus

The interesting work is the relationship model. A note should be able to point to a source, connect to a project, surface related ideas, and remain consistent as the interface changes. That requires more than a text editor and a table named `notes` pretending the rest of the problem will go away.

This project is where I have been practicing full-stack product architecture: schema design, authenticated user workflows, data access layers, rich-text behavior, React UI state, and search.

## What this demonstrates

Digital Knowledgebase is my strongest example of a full-stack web application with complex relational data, user-facing workflows, and a product problem that requires actual design decisions rather than a tutorial’s pre-approved answers.

## Next steps

Improve search and cross-linking, refine deployment planning, prepare a public demo, and keep tightening the project workflows that make the system useful for real research rather than merely impressive in screenshots.
