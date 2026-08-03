import "server-only";

import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { Post } from "@/types/post";
import { Project, ProjectStatus } from "@/types/project";

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
      throw new Error(`Could not read front matter line "${line}" in ${filePath}.`);
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
  const files = await readMarkdownFiles("projects");

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
