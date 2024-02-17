import { lazy } from 'react';
import ClientesView from './contact/ContactView';
import ClientesForm from './contact/ContactForm';

const ClientesApp = lazy(() => import('./ContactsApp'));

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
