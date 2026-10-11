import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const visual = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/visual' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['Photography', 'Video', 'Directing']),
    year: z.number().default(2026),
    coverImage: z.string(),
    client: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const music = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/music' }),
  schema: z.object({
    title: z.string(),
    project: z.string(),
    role: z.string().default('Guitar / Songwriting'),
    year: z.number().default(2026),
    coverImage: z.string(),
    audioUrl: z.string().optional(),
    releaseType: z.enum(['Single', 'EP', 'Album', 'Demo']),
    featured: z.boolean().default(false),
  }),
});

export const collections = { visual, music };
