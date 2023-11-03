import { z } from 'zod';

const userZodSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: 'Email is required',
    }),
    password: z.string({
      required_error: 'password is required',
    }),
  }),
});

export const userZodValidation = {
  userZodSchema,
};
