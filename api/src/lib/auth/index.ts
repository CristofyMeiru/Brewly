import { PrismaService } from '@src/shared/services/prisma.service';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { openAPI } from 'better-auth/plugins';
import 'dotenv/config';
import { adminPlugin } from './admin-plugin/admin.plugin';
import { user } from './schemas/user.schema';

export const auth = betterAuth({
  database: prismaAdapter(new PrismaService(), {
    provider: 'postgresql',
    transaction: true,
  }),
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
});
