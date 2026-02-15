import { authClient } from "@/lib/auth-client";
import type { SignInEmail } from "@/routes/@_public/@auth/@sign-in/sign-in-email.schema";
import type { SignUpEmail } from "@/routes/@_public/@auth/@sign-up/sign-up-email.schema";

export const authService = {
  async signUp({ email, name, password }: SignUpEmail) {
    const { data, error } = await authClient.signUp.email({ email, password, name });
    if (error) throw error;
    return data;
  },

  async signInEmail({ email, password, rememberMe }: SignInEmail) {
    const { data, error } = await authClient.signIn.email({ email, password, rememberMe });
    if (error) throw error;
    return data;
  },

  async signInSocialGoogle() {
    const { data, error } = await authClient.signIn.social({ provider: "google" });
    if (error) throw error;
    return data;
  },
};
