import FuseUtils from '@fuse/utils';
import FuseLoading from '@fuse/core/FuseLoading';
import { Navigate } from 'react-router-dom';
import settingsConfigA from 'app/configs/settingsConfig';
import settingsConfigV from 'app/configs/settingsConfigV';
import SignInConfig from '../main/sign-in/SignInConfig';
import SignOutConfig from '../main/sign-out/SignOutConfig';
import dashboardsConfigs from '../main/dashboards/dashboardsConfigs';
import appsConfigs from '../main/apps/appsConfigs';

const routeConfigs = [...appsConfigs, ...dashboardsConfigs, SignOutConfig, SignInConfig];

const USER_ROL = window.localStorage.getItem('RollUser');
const Configuracion = USER_ROL === 'administrador' ? settingsConfigA : settingsConfigV;

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
