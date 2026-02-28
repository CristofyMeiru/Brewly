import { createAccessControl } from 'better-auth/plugins';
import { defaultRoles, defaultStatements } from 'better-auth/plugins/admin/access';

const statements = {
  ...defaultStatements,
  product: ['create', 'update', 'delete'],
  generics: ['access-panel'],
} as const;

export const adminAccessControl = createAccessControl(statements);

export const adminPluginRoles = {
  admin: adminAccessControl.newRole({
    ...defaultRoles.admin.statements,
    product: ['create', 'update', 'delete'],
    generics: ['access-panel'],
  }),
  employee: adminAccessControl.newRole({
    user: [],
    session: [],
    product: [],
    generics: ['access-panel'],
  }),
  user: adminAccessControl.newRole({
    ...defaultRoles.user.statements,
    product: [],
    generics: [],
  }),
};
