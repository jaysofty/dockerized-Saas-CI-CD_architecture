import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),

  email: z
    .string()
    .email("Please enter a valid email"),

  message: z
    .string()
    .min(10, "Message is too short"),
});

export type ContactSchema = z.infer<
  typeof contactSchema
>;