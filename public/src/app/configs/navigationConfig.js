import i18next from 'i18next';
import en from './navigation-i18n/en';

i18next.addResourceBundle('en', 'navigation', en);

const navigationConfig = [
  /*
  {
    id: 'index-component',
    title: 'Inicio',
    translate: 'Inicio',
    type: 'item',
    icon: 'heroicons-outline:home',
    url: '/inicio',
  },
  */
  {
    id: 'product-component',
    title: 'Modulo de Caja',
    translate: 'Caja',
    type: 'item',
    icon: 'heroicons-outline:shopping-bag',
    url: 'productos',
  },
  {
    id: 'sells-component',
    title: 'Ventas del dia',
    translate: 'Ventas',
    type: 'item',
    icon: 'heroicons-outline:currency-dollar',
    url: 'ventas',
  },
  {
    id: 'clients-component',
    title: 'Clientes',
    translate: 'Clientes',
    type: 'item',
    icon: 'heroicons-outline:user',
    url: 'clientes'
  },
  {
    id: 'requests-component',
    title: 'Ordenes',
    translate: 'Ordenes',
    type: 'item',
    icon: 'heroicons-outline:bell',
    url: 'ordenes',
  },

  {
    id: 'signOutPage-component',
    title: 'logout',
    translate: 'logout',
    type: 'item',
    icon: 'heroicons-solid:logout',
    url: 'logout',
  },
];

export default navigationConfig;
