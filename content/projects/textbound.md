---
title: TextBound
slug: textbound
status: In progress
description: A local, evidence-bound research assistant that answers questions only from the text a person provides.
featured: true
stack:
  - C#
  - ASP.NET Core
  - SQLite
  - Full-text search
---

## Project goals

Create a private, local-first tool that imports a book or source text, finds relevant passages, and keeps every answer tied to the evidence that supports it.

## Core idea

If the provided source does not establish an answer, TextBound says so. This is less flashy than confident invention, but dramatically more useful for research.

## Planned features

- Import and split a text into chapters and passages.
- Search with SQLite full-text search.
- Show exact supporting passages and chapter citations.
- Add a reader view that jumps to the source location.
