import { createAccessControl } from 'better-auth/plugins';
import { defaultRoles, defaultStatements } from 'better-auth/plugins/admin/access';

const statements = {
  ...defaultStatements,
  product: ['create', 'update', 'delete'],
} as const;

export const adminAccessControl = createAccessControl(statements);

export const adminPluginRoles = {
  admin: adminAccessControl.newRole({
    ...defaultRoles.admin.statements,
    product: ['create', 'update', 'delete'],
  }),
  user: adminAccessControl.newRole({
    ...defaultRoles.user.statements,
    product: [],
  }),
};
