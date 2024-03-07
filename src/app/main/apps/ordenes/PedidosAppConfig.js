import { lazy } from 'react';

const PedidosApp = lazy(() => import('./PedidosApp'));

const NotesAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/ordenesentregas',
      element: <PedidosApp />,
      children: [
        {
          path: ':filter',
          element: <PedidosApp />,
          children: [
            {
              path: ':id',
              element: <PedidosApp />,
            },
          ],
        },
      ],
    },
  ],
};

export default NotesAppConfig;
