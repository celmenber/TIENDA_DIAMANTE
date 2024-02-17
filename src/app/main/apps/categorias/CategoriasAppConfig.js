import { lazy } from 'react';
import CategoriasView from './categoria/CategoriaView';
import CategoriasForm from './categoria/CategoriaForm';

const CategoriasApp = lazy(() => import('./CategoriasApp'));

const ContactsAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/categorias',
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
