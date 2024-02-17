import { lazy } from 'react';
import CategoriasView from './marca/MarcaView';
import CategoriasForm from './marca/MarcaForm';

const CategoriasApp = lazy(() => import('./MarcasApp'));

const ContactsAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/marcas',
      element: <CategoriasApp />,
      children: [
        {
          path: ':id',
          element: <CategoriasView />,
        },
        {
          path: ':id/edit',
          element: <CategoriasForm />,
        },
      ],
    },
  ],
};

export default ContactsAppConfig;
