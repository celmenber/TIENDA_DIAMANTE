import { lazy } from 'react';
import ClientesView from './cliente/ClienteView';
import ClientesForm from './cliente/ClientestForm';

const ClientesApp = lazy(() => import('./ClientesApp'));

const ContactsAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/clientes',
      element: <ClientesApp />,
      children: [
        {
          path: ':id',
          element: <ClientesView />,
        },
        {
          path: ':id/edit',
          element: <ClientesForm />,
        },
      ],
    },
  ],
};

export default ContactsAppConfig;
