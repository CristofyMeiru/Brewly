import { authService } from "@/shared/services/auth.service";
import { useMutation } from "@tanstack/react-query";
import type { BetterAuthError } from "better-auth";
import type { SignInEmail } from "./sign-in-email.schema";

export function useSignInPageActions() {
  const signInEmailMutation = useMutation<unknown, BetterAuthError, SignInEmail>({
    mutationKey: ["user"],
    mutationFn: async (data) => await authService.signInEmail(data),
  });

  const signInSocialGoogleMutation = useMutation({
    mutationKey: ["user"],
    mutationFn: async () => await authService.signInSocialGoogle(),
  });

  return {
    signInEmailMutation,
    signInSocialGoogleMutation,
  };
}
