import { lazy } from 'react';
import ProvedorForm from './provedor/ProvedorForm';

const ProvedoresApp = lazy(() => import('./ProvedoresApp'));

const ProvedoresAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/provedores',
      element: <ProvedoresApp />,
      children: [
        {
          path: ':id',
          element: <ProvedorForm />,
        },
        {
          path: ':id/:type',
          element: <ProvedorForm />,
        },
      ],
    },
  ],
};

export default ProvedoresAppConfig;
