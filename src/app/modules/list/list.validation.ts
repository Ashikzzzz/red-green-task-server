import { z } from 'zod';

const listZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
  }),
});

export const listZodValidation = {
  listZodSchema,
};
