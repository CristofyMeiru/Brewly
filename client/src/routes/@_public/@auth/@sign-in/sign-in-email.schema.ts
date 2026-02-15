import { z } from "zod";

export const signInEmailSchema = z.object({
  email: z.email("Formato de e-mail inválido").trim().toLowerCase(),
  password: z.string().min(1, "A senha é obrigatória"),
  rememberMe: z.boolean().optional(),
});

export type SignInEmail = z.infer<typeof signInEmailSchema>;
