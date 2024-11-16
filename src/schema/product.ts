import { z } from 'zod';

export const productCreateSchema = z.object({
  name: z
    .string({ required_error: 'Required', coerce: true })
    .min(3, 'Must be atleast 3 characters'),
  description: z
    .string({ required_error: 'Required', coerce: true })
    .min(5, 'Must be atleast 5 characters'),
  price: z
    .number({
      required_error: 'Required',
      coerce: true,
      invalid_type_error: 'Must be a number',
    })
    .gt(0, 'Must be greater than ZERO'),
  discount: z
    .number({
      required_error: 'Required',
      coerce: true,
      invalid_type_error: 'Must be a number',
    })
    .gte(0, 'Must not be negative')
    .max(100, 'Cannot be more than 100'),
  isFeatured: z.boolean({ coerce: true, required_error: 'Required' }),
});
