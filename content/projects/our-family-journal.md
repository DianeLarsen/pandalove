---
title: Our Family Journal
slug: our-family-journal
status: In progress
description: A private, invite-only family journal for sharing stories, photos, milestones, and memories with extended family without turning them into social-media inventory.
featured: true
stack:
  - Next.js
  - TypeScript
  - PostgreSQL
  - Neon
  - Drizzle ORM
  - Auth.js
  - Cloudflare R2
  - Tailwind CSS
---

## The problem

Families often want a shared place for stories and photos, but public social platforms come with privacy compromises, distracting feeds, and no meaningful model for family relationships. A group text works until someone needs to find a memory from two years ago. Then it becomes an archaeological site with worse search.

## What I am building

Our Family Journal is a private site for an invited family group. It supports family profiles, written stories, photos, milestones, and scrapbook-style posts while allowing each item to have an intentional audience.

## Current design

- Invite-only access with administrator and member roles.
- Magic-link sign-in with Auth.js and Resend.
- Profiles for adults, children, pets, and family groups, plus relationships between them.
- Stories, photos, milestones, likes, and “latest” views.
- Visibility choices for all invited family, close family, or private items.
- A scrapbook editor with text, captions, images, dragging, rotation, and scaling.
- Cloudflare R2 image storage and Neon PostgreSQL with Drizzle ORM.

## Engineering focus

The project combines private-access design with relational modeling. The data model has to represent people, relationships, content, permissions, and visibility without turning every page into a tangle of special cases. Image storage and the scrapbook editor add a separate layer of interaction and layout work.

## Why it matters

This is a product built around a real privacy and usability problem: preserving family memories in a system owned and controlled by the family. It demonstrates multi-user data modeling, access control, media handling, and interaction design in one application.

## Next steps

Finish milestones and the dedicated photos view, add profile-picture improvements and unread/like behavior, continue refining the family-tree view, and prepare a stable private release for extended family.
