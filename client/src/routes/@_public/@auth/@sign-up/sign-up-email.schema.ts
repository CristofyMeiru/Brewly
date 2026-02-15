import { z } from "zod";

export const SignUpEmailSchema = z
  .object({
    name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres").max(100, "Nome muito longo"),
    email: z.email("Email inválido").max(255),
    password: z.string().min(8, "Senha deve ter no mínimo 8 caracteres").max(100),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export type SignUpEmail = Omit<z.infer<typeof SignUpEmailSchema>, "confirmPassword">;
