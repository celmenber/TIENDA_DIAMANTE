import { lazy } from 'react';
import PresentacionView from './presentacion/PresentacionView';
import PresentacionForm from './presentacion/PresentacionForm';

const PresentacionApp = lazy(() => import('./PresentacionApp'));

const ContactsAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/Presentacion',
      element: <PresentacionApp />,
      children: [
        {
          path: ':id',
          element: <PresentacionView />,
        },
        {
          path: ':id/edit',
          element: <PresentacionForm />,
        },
      ],
    },
  ],
};

export default ContactsAppConfig;
