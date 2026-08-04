import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    ownerName: z.string(), // exact string to bold in the author line
    venue: z.string(),
    year: z.number(),
    tag: z.enum(['security', 'systems']),
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
