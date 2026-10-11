import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const visual = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/content/visual' }),
  schema: z.object({
    title: z.string(),
    category: z.string().default('Photography'),
    year: z.number().default(2026),
    coverImage: z.string().default('/uploads/placeholder.jpg'),
    client: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const music = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/content/music' }),
  schema: z.object({
    title: z.string(),
    project: z.string().default('Kronis'),
    role: z.string().default('Guitar'),
    year: z.number().default(2026),
    coverImage: z.string().default('/uploads/placeholder.jpg'),
    audioUrl: z.string().optional(),
    releaseType: z.string().default('Single'),
    featured: z.boolean().default(false),
  }),
});

export const collections = { visual, music };
