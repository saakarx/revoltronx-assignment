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
    .lte(0, 'Must be greater than ZERO'),
  discount: z
    .number({
      required_error: 'Required',
      coerce: true,
      invalid_type_error: 'Must be a number',
    })
    .lt(0, 'Must not be negative'),
  originalPrice: z
    .number({
      required_error: 'Required',
      coerce: true,
      invalid_type_error: 'Must be a number',
    })
    .lte(0, 'Must be greater than ZERO'),
  isFeatured: z.boolean({ coerce: true, required_error: 'Required' }),
});
