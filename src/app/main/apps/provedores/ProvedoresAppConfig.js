import { lazy } from 'react';
import ContactView from './provedor/ProvedorView';
import ContactForm from './provedor/ContactForm';

const ContactsApp = lazy(() => import('./ProvedoresApp'));

const ContactsAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/provedores',
      element: <ContactsApp />,
      children: [
        {
          path: ':id',
          element: <ContactView />,
        },
        {
          path: ':id/edit',
          element: <ContactForm />,
        },
      ],
    },
  ],
};

export default ContactsAppConfig;
