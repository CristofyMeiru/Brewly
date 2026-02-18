import { PrismaService } from '@src/shared/services/prisma.service';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { openAPI } from 'better-auth/plugins';
import 'dotenv/config';
import { v7 as uuidv7 } from 'uuid';
import { adminPlugin } from './admin-plugin/admin.plugin';
import { user } from './schemas/user.schema';

export const auth = betterAuth({
  database: prismaAdapter(new PrismaService(), {
    provider: 'postgresql',
    transaction: true,
  }),
  advanced: {
    database: {
      generateId: () => uuidv7(),
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  user,
  plugins: [adminPlugin, openAPI({ path: '/docs' })],
  trustedOrigins: [process.env.CLIENT_ORIGIN!],
});
