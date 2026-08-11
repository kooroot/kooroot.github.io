import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { CATEGORY_NAMES } from "./lib/categories";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    // Derived from lib/categories.ts so a category cannot be valid content
    // without also having the class strings the pages look up by name.
    category: z.enum(CATEGORY_NAMES),
    show_tile: z.boolean().default(true),
    tech_stack: z.array(z.string()).default([]),
    github: z.string().url().optional(),
    dune: z.string().url().optional(),
    // The repository exists but is not publicly readable — a company org repo,
    // or one holding credentials or unreleased work. Rendered as a "Private
    // repo" marker instead of a link.
    //
    // This field exists because the alternative was worse. Nine entries carried
    // a `github:` URL that returned 404 to anyone not signed in; the author,
    // being authenticated, saw all nine resolve. On a site whose whole claim is
    // that its claims survive a click, a dead link does more damage than no
    // link — it reads as a fabricated citation. Saying "private" states the
    // actual situation and stops inviting the click.
    repo_private: z.boolean().default(false),
    date: z.coerce.date(),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(true),
    related_project: z.string().optional(),
    // Pieces published elsewhere (a company publication, X, a guest post).
    // When set, the entry links out and no local detail page is generated.
    external_url: z.string().url().optional(),
    // Where it was published, e.g. "Tokamak Network". Rendered as a badge.
    publication: z.string().optional(),
    read_time: z.string().optional(),
    lang: z.enum(["en", "ko"]).default("en"),
    // Shared key joining the EN and KO versions of one piece into a single
    // card. Both entries carry the same value.
    pair: z.string().optional(),
  }),
});

export const collections = { projects, writing };
