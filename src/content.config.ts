import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    category: z.enum([
      "Blockchain Research",
      "Blockchain Development",
      "Blockchain Node Operation",
      "AI Engineering",
    ]),
    show_tile: z.boolean().default(true),
    tech_stack: z.array(z.string()).default([]),
    github: z.string().url().optional(),
    dune: z.string().url().optional(),
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
  }),
});

export const collections = { projects, writing };
