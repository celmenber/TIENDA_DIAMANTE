import { lazy } from 'react';
import Credito from './chat/Chat';
import CreditoFirstScreen from './ChatFirstScreen';

const CreditoApp = lazy(() => import('./ChatApp'));

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
