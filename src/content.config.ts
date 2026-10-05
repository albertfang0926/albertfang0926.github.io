import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
  }),
})

const postsSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  duration: z.string().optional(),
  image: z
    .object({
      src: z.string(),
      alt: z.string(),
    })
    .optional(),
  date: z
    .string()
    .or(z.date())
    .transform((val: string | number | Date) => new Date(val).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })),
  draft: z.boolean().default(false).optional(),
  lang: z.string().default('en-US').optional(),
  tag: z.string().optional().optional(),
  redirect: z.string().optional(),
  video: z.boolean().default(false).optional(),
})

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog/blogs' }),
  schema: postsSchema,
})

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog/notes' }),
  schema: postsSchema,
})

const talks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog/talks' }),
  schema: postsSchema,
})

export const collections = { pages, blog, notes, talks }
