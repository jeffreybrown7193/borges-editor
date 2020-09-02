
import { UserRole } from '../app/shared/auth.roles';

export const environment = {
  production: false,
  buyUrl : "",
  SCARF_ANALYTICS : false,
  adminRoot: '',
  apiUrl: '',
  defaultMenuType: 'menu-default',
  subHiddenBreakpoint: 1440,
  menuHiddenBreakpoint: 768,
  themeColorStorageKey: 'vien-themecolor',
  isMultiColorActive: false,
  myEndpoint: 'localhost:4201',
  defaultColor: 'light.blueyale',
  isDarkSwitchActive: false,
  defaultDirection: 'ltr',
  themeRadiusStorageKey: 'vien-themeradius',
  isAuthGuardActive: true,
  defaultRole: UserRole.Admin
};
