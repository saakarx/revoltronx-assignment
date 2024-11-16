import { z } from 'zod';

export const blogCreateSchema = z.object({
  title: z
    .string({ required_error: 'Required', coerce: true })
    .min(3, 'Must be atleast 3 characters'),
  excerpt: z
    .string({ required_error: 'Required', coerce: true })
    .min(5, 'Must be atleast 5 characters'),
  content: z
    .string({ required_error: 'Required', coerce: true })
    .min(5, 'Must be atleast 5 characters'),
  keywords: z
    .string({ required_error: 'Required' })
    .min(1, 'Must add atleast 1 keyword'),
  tags: z
    .string({ required_error: 'Required' })
    .min(1, 'Must add atleast 1 tag'),
  isFeatured: z.boolean({ coerce: true, required_error: 'Required' }),
});
