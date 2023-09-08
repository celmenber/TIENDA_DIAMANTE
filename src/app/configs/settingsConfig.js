import themesConfig from 'app/configs/themesConfig';
import i18n from '../../i18n';

const layaut = 'layout1'; // layout1 layout2 layout3

const settingsConfig = {
  layout: {
    style: layaut,
    config: {}, // checkout default layout configs at app/theme-layouts for example  app/theme-layouts/layout1/Layout1Config.js
  },
  customScrollbars: true,
  direction: 'ltr', // rtl, ltr
  theme: {
    main: themesConfig.custom,
    navbar: themesConfig.custom,
    toolbar: themesConfig.custom,
    footer: themesConfig.custom,
  },
  /*
   To make whole app auth protected by default set defaultAuth:['admin','staff','user']
   To make whole app accessible without authorization by default set defaultAuth: null
   *** The individual route configs which has auth option won't be overridden.
   */
  defaultAuth: ['admin', 'staff', 'user'],
  /*
    Default redirect url for the logged-in user,
   */
  loginRedirectUrl: '/',
};

export default settingsConfig;
