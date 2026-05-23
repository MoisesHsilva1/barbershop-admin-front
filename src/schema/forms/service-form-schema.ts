import { z } from 'zod';

export const serviceFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be at most 100 characters'),
  description: z
    .string()
    .trim()
    .min(1, 'Description is required')
    .max(200, 'Description must be at most 200 characters'),
  price: z
    .number({
      error: 'Price is required',
    })
    .positive('Price must be greater than zero'),
});

export type ServiceFormValues = z.infer<typeof serviceFormSchema>;
