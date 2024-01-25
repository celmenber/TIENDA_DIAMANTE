/**
 * Authorization Roles
 */
const authRoles = {
  admin: ['administrador'],
  staff: ['administrador', 'vendedor'],
  user: ['administrador', 'vendedor', 'user'],
  onlyGuest: [],
};

export default authRoles;
