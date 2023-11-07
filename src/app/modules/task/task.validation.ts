import { z } from 'zod';

const taskZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    status: z.enum(['done', 'pending'], {
      required_error: 'status is required',
    }),
    list: z.string({
      required_error: 'List is required',
    }),
  }),
});

export const taskZodValidation = {
  taskZodSchema,
};
