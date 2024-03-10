import { lazy } from 'react';

const VentasApp = lazy(() => import('./VentasApp'));

const NotesAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/ventas',
      element: <VentasApp />,
      children: [
        {
          path: ':filter',
          element: <VentasApp />,
          children: [
            {
              path: ':id',
              element: <VentasApp />,
            },
          ],
        },
      ],
    },
  ],
};

export default NotesAppConfig;
