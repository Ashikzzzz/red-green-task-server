import { z } from 'zod';

const userZodSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: 'Email is required',
    }),
    password: z.string({
      required_error: 'password is required',
    }),
    role: z.enum(['admin', 'Viewer', 'reguler user'], {
      required_error: 'Role is required',
    }),
  }),
});

export const userZodValidation = {
  userZodSchema,
};
