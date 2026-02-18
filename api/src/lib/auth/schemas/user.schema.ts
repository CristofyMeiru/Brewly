import { BetterAuthOptions } from 'better-auth';

export const user: BetterAuthOptions['user'] = {
  additionalFields: {
    cpfHash: {
      type: 'string',
      required: false,
      unique: true,
      index: true,
      returned: false,
    },
    cpfEncrypted: {
      type: 'string',
      required: false,
      returned: false,
    },
    cpfMasked: {
      type: 'string',
      required: false,
    },
    isCpfVerified: {
      type: 'boolean',
      defaultValue: false,
    },
    phoneNumber: {
      type: 'string',
      required: false,
      returned: true,
    },
  },
};
