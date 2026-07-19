import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),

  email: z.email("Invalid email address"),

  company: z.string().optional(),

  subject: z.string().min(3, "Subject is required"),

  message: z.string().min(10, "Message is too short"),
});

export type ContactFormData =
  z.infer<typeof contactSchema>;