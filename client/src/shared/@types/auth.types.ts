import type { Session } from "better-auth";
import type { UserWithRole } from "better-auth/plugins";

export type User = UserWithRole & {
  cpfMasked: string;
  phoneNumber: string;
};

export type AuthState = {
  session: Session;
  user: User;
};
