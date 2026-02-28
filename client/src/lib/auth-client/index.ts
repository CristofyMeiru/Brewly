import { ENV } from "@/env";
import { createAuthClient } from "better-auth/react";
import { betterAuthadminPlugin } from "./admin-plugin";

export const authClient = createAuthClient({
  baseURL: `${ENV.VITE_API_URL}/auth`,
  plugins: [betterAuthadminPlugin],
});
