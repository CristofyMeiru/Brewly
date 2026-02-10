import { admin } from 'better-auth/plugins';
import { adminAccessControl, adminPluginRoles } from './admin-permissions';

export const adminPlugin = admin({
  ac: adminAccessControl,
  roles: adminPluginRoles,
  defaultRole: 'user',
  adminRoles: ['admin'],
});
