import type { Session } from "better-auth";
import type { UserWithRole } from "better-auth/plugins";

export type User = UserWithRole & {
  cpfMasked: string;
};

export type AuthState = {
  session: Session;
  user: User;
};
