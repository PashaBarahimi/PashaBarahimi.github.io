import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// NB: CLAUDE.md specifies `src/content/config.ts` with `type: 'content'`. Astro 6
// removed legacy content collections (LegacyContentConfigError), so this lives at
// src/content.config.ts and uses the glob loader instead. The Markdown files stay
// in src/content/publications/ and the schema below is unchanged.
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
    draft: z.boolean().default(false),
  }),
});

export const collections = { publications };
