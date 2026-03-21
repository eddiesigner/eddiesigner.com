import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).optional(),
      heroImage: image().optional(),
    }),
});

const work = defineCollection({
  loader: glob({ base: "./src/content/work", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      type: z.string(),
      year: z.string(),
      heroImage: image(),
      url: z.string(),
      pubDate: z.coerce.date(),
      tags: z.array(z.string()).optional(),
    }),
});

const labs = defineCollection({
  loader: glob({ base: "./src/content/labs", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      heroImage: image(),
      url: z.string(),
      tags: z.array(z.string()).optional(),
    }),
});

const explorations = defineCollection({
  loader: glob({
    base: "./src/content/explorations",
    pattern: "**/*.{md,mdx}",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      heroImage: image(),
      tags: z.array(z.string()).optional(),
    }),
});

export const collections = { blog, work, labs, explorations };
