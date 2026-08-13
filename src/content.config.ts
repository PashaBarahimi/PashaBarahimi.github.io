// `z` used to be re-exported from 'astro:content', which is now deprecated —
// import zod directly. It's the same instance either way: one hoisted zod
// satisfies Astro's own dependency, so schemas keep validating identically.
// Build-time only, hence a devDependency.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    ownerName: z.string(), // exact string to bold in the author line
    venue: z.string(),
    year: z.number(),
    links: z
      .object({
        pdf: z.string().optional(),
        doi: z.string().optional(),
        code: z.string().optional(),
        slides: z.string().optional(),
      })
      .default({}),
    bibtex: z.string().optional(), // renders a `cite` button + BibTeX modal when present
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    // Which section of the projects page this lands in. Required rather than
    // defaulted so a new project has to say where it belongs instead of
    // silently landing in whichever bucket happened to be the fallback.
    category: z.enum(['research', 'industry', 'coursework', 'personal']),
    // Featured entries sort to the front of their own section and carry a
    // star; they don't get a section of their own.
    featured: z.boolean().default(false),
    // Implementation languages, kept out of `tags` so they can render as their
    // own section. A list because a project can be written in more than one.
    languages: z.array(z.string()).default([]),
    tags: z.array(z.string()),
    links: z
      .object({
        github: z.string().optional(),
        demo: z.string().optional(),
        paper: z.string().optional(),
      })
      .default({}),
    order: z.number().default(0), // manual sort control on the card grid
    draft: z.boolean().default(false),
  }),
});

export const collections = { publications, projects };
