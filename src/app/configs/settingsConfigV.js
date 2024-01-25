import themesConfig from 'app/configs/themesConfig';
import i18n from '../../i18n';

const settingsConfigV = {
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
  defaultAuth: ['vendedor'],
  loginRedirectUrl: '/',
};

export default settingsConfigV;
