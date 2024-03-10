import { lazy } from 'react';
import Credito from './credito/Credito';
import CreditoFirstScreen from './CreditoFirstScreen';

const CreditoApp = lazy(() => import('./CreditoApp'));

const ChatAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/credito',
      element: <CreditoApp />,
      children: [
        {
          path: '',
          element: <CreditoFirstScreen />,
        },
        {
          path: ':id',
          element: <Credito />,
        },
      ],
    },
  ],
};

export default ChatAppConfig;
