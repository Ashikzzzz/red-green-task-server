import { z } from 'zod';

// login valiation data
const authValidationZodSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: 'Email is required',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
  }),
});

export const authValidation = {
  authValidationZodSchema,
};
