---
title: TextBound
slug: textbound
status: In progress
description: A private, local-first research assistant that answers questions only from the text a person provides and cites the supporting passage.
featured: true
stack:
  - C#
  - ASP.NET Core
  - SQLite
  - SQLite FTS
  - HTML
  - CSS
---

## The problem

Most AI tools can produce a polished answer with no dependable relationship to the source material. That is not useful when someone needs to study a book, research a document, or check what a source actually says. Confident nonsense is still nonsense; it has simply put on a blazer.

## The idea

TextBound is a local, privacy-first application that accepts a text file, breaks it into chapters and passages, and searches those passages to answer questions. If the supplied text does not establish an answer, the application should say so instead of filling the gap with invented certainty.

The intended home is a Windows flash drive: the application, imported texts, database, and future local model stay with the user instead of being sent to a cloud service.

## Planned workflow

1. Import a `.txt` book or source document.
2. Detect chapter boundaries and split the text into searchable passages.
3. Store books, chapters, passages, and later question history in a local SQLite database.
4. Use SQLite full-text search to find the most relevant passages.
5. Show the exact passage and chapter citation with each result.
6. Later, let a local language model summarize only the retrieved evidence.

## Engineering focus

- Local data modeling for books, chapters, passages, and citations.
- Search quality and evidence retrieval using SQLite full-text search.
- A browser-based interface served locally rather than a command-line-only tool.
- A portable folder structure for the app, data, imports, models, and logs.
- Evidence-bound answer behavior: no claim without source support.

## Why it matters

TextBound is a practical experiment in trustworthy AI behavior. The product constraint is the point: answers must be traceable to a source passage, and unsupported answers must be rejected. That makes it a useful foundation for personal research, study support, and future health-informatics work where provenance matters.

## Next steps

Build the SQLite schema and import pipeline, add search results to the local UI, then create the reader view that lets someone jump directly to the chapter and passage behind an answer.
