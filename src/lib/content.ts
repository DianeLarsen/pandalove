import "server-only";

import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { Post } from "@/types/post";
import { Project, ProjectStatus } from "@/types/project";

export type DevNoteType = "start" | "end" | "milestone" | "blocker";

export type DevNote = {
  slug: string;
  date: string;
  type: DevNoteType;
  title: string;
  summary?: string;
  image?: string;
  body: string;
};

type FrontMatter = Record<string, boolean | string | string[]>;

const contentRoot = path.join(process.cwd(), "content");

function parseFrontMatter(source: string, filePath: string) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    throw new Error(`${filePath} needs front matter between --- lines.`);
  }

  const metadata: FrontMatter = {};
  let listKey: string | undefined;

  for (const rawLine of match[1].split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;

    if (line.startsWith("- ") && listKey) {
      const list = metadata[listKey];
      if (Array.isArray(list)) list.push(line.slice(2).trim());
      continue;
    }

    const separator = line.indexOf(":");
    if (separator === -1) {
      throw new Error(
        `Could not read front matter line "${line}" in ${filePath}.`,
      );
    }

    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim();
    listKey = undefined;

    if (!value) {
      metadata[key] = [];
      listKey = key;
    } else if (value === "true" || value === "false") {
      metadata[key] = value === "true";
    } else {
      metadata[key] = value.replace(/^['\"]|['\"]$/g, "");
    }
  }

  return { metadata, body: match[2].trim() };
}

async function readProjectFiles() {
  const projectsDirectory = path.join(contentRoot, "projects");

  const entries = await readdir(projectsDirectory, {
    withFileTypes: true,
  });

  return Promise.all(
    entries
      .filter((entry) => entry.isDirectory())
      .map(async (entry) => {
        const filePath = path.join(projectsDirectory, entry.name, "project.md");

        const source = await readFile(filePath, "utf8");

        return {
          filePath,
          ...parseFrontMatter(source, filePath),
        };
      }),
  );
}

async function readMarkdownFiles(directory: string) {
  const directoryPath = path.join(contentRoot, directory);
  const filenames = await readdir(directoryPath);

  return Promise.all(
    filenames
      .filter((filename) => filename.endsWith(".md"))
      .map(async (filename) => {
        const filePath = path.join(directoryPath, filename);
        const source = await readFile(filePath, "utf8");
        return { filePath, ...parseFrontMatter(source, filePath) };
      }),
  );
}

function requiredString(metadata: FrontMatter, key: string, filePath: string) {
  const value = metadata[key];
  if (typeof value !== "string" || !value) {
    throw new Error(`${filePath} needs a ${key} value in its front matter.`);
  }
  return value;
}

function optionalString(metadata: FrontMatter, key: string) {
  const value = metadata[key];
  return typeof value === "string" && value ? value : undefined;
}

export async function getPosts(): Promise<Post[]> {
  const files = await readMarkdownFiles("blog");

  return files
    .map(({ metadata, body, filePath }) => ({
      title: requiredString(metadata, "title", filePath),
      slug: requiredString(metadata, "slug", filePath),
      summary: requiredString(metadata, "summary", filePath),
      publishedAt: requiredString(metadata, "publishedAt", filePath),
      body,
    }))
    .sort((first, second) =>
      second.publishedAt.localeCompare(first.publishedAt),
    );
}

export async function getPostBySlug(slug: string) {
  return (await getPosts()).find((post) => post.slug === slug);
}

export async function getProjects(): Promise<Project[]> {
  const files = await readProjectFiles();

  return files
    .map(({ metadata, body, filePath }) => ({
      title: requiredString(metadata, "title", filePath),
      slug: requiredString(metadata, "slug", filePath),
      status: requiredString(metadata, "status", filePath) as ProjectStatus,
      description: requiredString(metadata, "description", filePath),
      featured: metadata.featured === true,
      stack: Array.isArray(metadata.stack) ? metadata.stack : [],
      body,
    }))
    .sort((first, second) => first.title.localeCompare(second.title));
}

export async function getProjectBySlug(slug: string) {
  return (await getProjects()).find((project) => project.slug === slug);
}

export async function getResume() {
  const filePath = path.join(contentRoot, "resume.md");
  const source = await readFile(filePath, "utf8");
  const { metadata, body } = parseFrontMatter(source, filePath);

  return {
    title: requiredString(metadata, "title", filePath),
    summary: requiredString(metadata, "summary", filePath),
    body,
  };
}

export async function getProjectDevNotes(
  projectSlug: string,
): Promise<DevNote[]> {
  const directoryPath = path.join(
    contentRoot,
    "projects",
    projectSlug,
    "dev-notes",
  );

  let filenames: string[];
console.log("DEV NOTES PATH:", directoryPath);
  try {
    filenames = await readdir(directoryPath);
  } catch (error) {
    console.error("DEV NOTES NOT FOUND:", directoryPath, error);
    return [];
  }

  const notes = await Promise.all(
    filenames
      .filter((filename) => filename.endsWith(".md"))
      .map(async (filename) => {
        const filePath = path.join(directoryPath, filename);
        const source = await readFile(filePath, "utf8");
        const { metadata, body } = parseFrontMatter(source, filePath);

        return {
          slug: filename.replace(/\.md$/, ""),
          date: requiredString(metadata, "date", filePath),
          type: requiredString(metadata, "type", filePath) as DevNoteType,
          title: requiredString(metadata, "title", filePath),
          summary: optionalString(metadata, "summary"),
          image: optionalString(metadata, "image"),
          body,
        };
      }),
  );

  return notes.sort((a, b) => {
    const dateCompare = b.date.localeCompare(a.date);

    if (dateCompare !== 0) {
      return dateCompare;
    }

    const order: Record<DevNoteType, number> = {
      milestone: 4,
      blocker: 3,
      end: 2,
      start: 1,
    };

    return order[b.type] - order[a.type];
  });
}