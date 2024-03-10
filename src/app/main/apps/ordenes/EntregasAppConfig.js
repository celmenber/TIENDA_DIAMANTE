import { lazy } from 'react';

const EntregasApp = lazy(() => import('./EntregasApp'));

const EntregasAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/ordenesentregas',
      element: <EntregasApp />,
      children: [
        {
          path: ':filter',
          element: <EntregasApp />,
          children: [
            {
              path: ':id',
              element: <EntregasApp />,
            },
          ],
        },
      ],
    },
  ],
};

export default EntregasAppConfig;
