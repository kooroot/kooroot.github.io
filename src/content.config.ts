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
    ]),
    show_tile: z.boolean().default(true),
    tech_stack: z.array(z.string()).default([]),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    date: z.coerce.date(),
  }),
});

export const collections = { projects };
