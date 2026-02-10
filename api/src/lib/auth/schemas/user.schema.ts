import { BetterAuthOptions } from 'better-auth';

export const user: BetterAuthOptions['user'] = {
  additionalFields: {
    cpfHash: {
      type: 'string',
      required: false,
      unique: true,
      index: true,
    },
    cpfEncrypted: {
      type: 'string',
      required: false,
    },
    cpfMasked: {
      type: 'string',
      required: false,
    },
    isCpfVerified: {
      type: 'boolean',
      defaultValue: false,
    },
  },
};
