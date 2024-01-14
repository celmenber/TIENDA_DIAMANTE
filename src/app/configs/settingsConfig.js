import themesConfig from 'app/configs/themesConfig';
import i18n from '../../i18n';

// const USER_ROL = window.localStorage.getItem('RollUser');
// const layaut = USER_ROL === 'administrador' ? 'layout1' : 'layout2';
/*  console.log(USER_ROL);
 console.log(layaut); */

export const settingsConfig = {
  layout: {
    style: 'layout1', // layout1 layout2
    config: {}, // checkout default layout configs at app/theme-layouts for example  app/theme-layouts/layout1/Layout1Config.js
  },
  customScrollbars: true,
  direction: i18n.dir(i18n.options.lng) || 'ltr', // rtl, ltr
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
  defaultAuth: ['administrador'],
  /*
    Default redirect url for the logged-in user,
   */
  loginRedirectUrl: '/',
};

export const settingsConfigV = {
  layout: {
    style: 'layout2', // layout1 layout2
    config: {}, // checkout default layout configs at app/theme-layouts for example  app/theme-layouts/layout1/Layout1Config.js
  },
  customScrollbars: true,
  direction: i18n.dir(i18n.options.lng), // rtl, ltr
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
  defaultAuth: ['vendedor'],
  /*
    Default redirect url for the logged-in user,
   */
  loginRedirectUrl: '/',
};

// export default settingsConfig;
