import FuseUtils from '@fuse/utils';
import FuseLoading from '@fuse/core/FuseLoading';
import { Navigate } from 'react-router-dom';
import { settingsConfig, settingsConfigV } from 'app/configs/settingsConfig';
import SignInConfig from '../main/sign-in/SignInConfig';
import SignOutConfig from '../main/sign-out/SignOutConfig';
import dashboardsConfigs from '../main/dashboards/dashboardsConfigs';
import appsConfigs from '../main/apps/appsConfigs';
import authRoleExamplesConfigs from '../main/auth/authRoleExamplesConfigs';

const routeConfigs = [
  ...appsConfigs,
  ...dashboardsConfigs,
  // ...authRoleExamplesConfigs,
  SignOutConfig,
  SignInConfig,
];

const USER_ROL = localStorage.getItem('RollUser');
console.log(USER_ROL)
const Configuracion = USER_ROL === 'administrador' ? settingsConfig : settingsConfigV;

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, Configuracion.defaultAuth),
  {
    path: '/',
    element: <Navigate to="dashboards/analytics" />,
    auth: Configuracion.defaultAuth,
  },
  {
    path: 'loading',
    element: <FuseLoading />,
  },
  {
    path: '*',
    element: <Navigate to="pages/error/404" />,
  },
];

export default routes;
