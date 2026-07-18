import { z } from "zod";

export const createFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must contain at least 2 characters"),

  email: z
    .email("Invalid email address"),

  message: z
    .string()
    .min(10, "Message must contain at least 10 characters"),
});

export type CreateFormDTO =
  z.infer<typeof createFormSchema>;