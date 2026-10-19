import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    date: z.string().optional(),
    highlights: z.array(z.string()),
    tags: z.array(z.string()),
    github: z.string().url().optional(),
    order: z.number(),
  }),
});

export const collections = { projects };
