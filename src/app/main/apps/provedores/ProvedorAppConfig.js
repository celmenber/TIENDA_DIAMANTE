import { lazy } from 'react';
import ProvedorView from './contact/ProvedorView';
import ProvedorForm from './contact/ProvedorForm';

const ProvedorApp = lazy(() => import('./ProvedorApp'));

const ContactsAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/provedor',
      element: <ProvedorApp />,
      children: [
        {
          path: ':id',
          element: <ProvedorView />,
        },
        {
          path: ':id/edit',
          element: <ProvedorForm />,
        },
      ],
    },
  ],
};

export default ContactsAppConfig;
