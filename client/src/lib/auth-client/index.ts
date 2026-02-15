import { ENV } from "@/env";
import { adminClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: `${ENV.VITE_API_URL}/auth`,

  plugins: [adminClient()],
});
