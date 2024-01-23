// import i18next from 'i18next';

/* import ar from './navigation-i18n/ar'; */
// import en from './navigation-i18n/en';
// import tr from './navigation-i18n/tr';
// import authRoles from '../auth/authRoles';

// i18next.addResourceBundle('en', 'navigation', en);

// icon: 'developer_board',
const navigationConfig = [
  {
    id: 'dashboards',
    title: 'Dashboards',
    type: 'group',
    icon: 'heroicons-outline:home',
    translate: 'DASHBOARDS',
    children: [
      {
        id: 'dashboards.project',
        title: 'Home',
        type: 'item',
        icon: 'developer_board',
        url: '/dashboards/project',
      },
      /*  {
        id: 'dashboards.analytics',
        title: 'Add Empleados',
        type: 'item',
        icon: 'heroicons-outline:chart-pie',
        url: '/dashboards/analytics',
      },
      {
        id: 'dashboards.finance',
        title: 'Perfil Usuarios',
        type: 'item',
        icon: 'heroicons-outline:cash',
        url: '/dashboards/finance',
      },
      {
        id: 'dashboards.crypto',
        title: 'Permisos',
        type: 'item',
        icon: 'heroicons-outline:currency-dollar',
        url: '/dashboards/crypto',
      }, */
      {
        id: 'configs',
        title: 'Configuración',
        type: 'collapse',
        icon: 'settings',
        children: [
          {
            id: 'fuse-react-routing-doc',
            title: 'Mi Perfil',
            type: 'item',
            url: '/documentation/configuration/routing',
          },
          {
            id: 'fuse-react-navigation-doc',
            title: 'Empleados',
            type: 'item',
            url: '/documentation/configuration/navigation',
          },
          {
            id: 'fuse-react-code-splitting-doc',
            title: 'Perfil Usuarios',
            type: 'item',
            url: '/documentation/configuration/code-splitting',
          },
          {
            id: 'fuse-react-multi-language-doc',
            title: 'Permisos Acceso',
            type: 'item',
            url: '/documentation/configuration/multi-language',
          },
        ],
      },
    ],
  },
  {
    type: 'divider',
    id: 'divider-2',
  },
  {
    id: 'apps',
    title: 'Aplicaciones',
    type: 'group',
    icon: 'heroicons-outline:cube',
    translate: 'Aplicaciones',
    children: [
      {
        id: 'apps.contacts',
        title: 'Clientes',
        type: 'item',
        icon: 'heroicons-outline:user-group',
        url: '/apps/contacts',
        translate: 'CLIENTES',
      },
      {
        id: 'apps.ecommerce',
        title: 'BODEGA',
        type: 'collapse',
        icon: 'heroicons-outline:home',
        translate: 'BODEGA',
        children: [
          {
            id: 'e-commerce-products',
            title: 'Productos',
            type: 'item',
            url: 'apps/e-commerce/products',
            end: true,
          },
          {
            id: 'e-commerce-product-detail',
            title: 'Categoria',
            type: 'item',
            url: 'apps/e-commerce/products/1/a-walk-amongst-friends-canvas-print',
          },
          {
            id: 'e-commerce-new-product',
            title: 'Presentación',
            type: 'item',
            url: 'apps/e-commerce/products/new',
          },
          {
            id: 'e-commerce-order-detail',
            title: 'Marcas',
            type: 'item',
            url: 'apps/e-commerce/orders/1',
          },
        ],
      },
      {
        id: 'apps.help-center',
        title: 'COMPRAS',
        type: 'collapse',
        icon: 'heroicons-outline:shopping-cart',
        children: [
          {
            id: 'apps.provedor.home',
            title: 'Proveedor',
            type: 'item',
            url: '/apps/provedor',
            end: true,
          },
          {
            id: 'e-commerce-orders',
            title: 'Ordenes de compras',
            type: 'item',
            url: 'apps/e-commerce/orders',
            end: true,
          },
          {
            id: 'apps.help-center.faqs',
            title: 'Pedidos',
            type: 'item',
            url: '/apps/help-center/faqs',
          },
          /*  {
             id: 'apps.help-center.guides',
            title: 'Guides',
            type: 'item',
            url: '/apps/help-center/guides',
          }, */
        ],
      },
      {
        id: 'ventas.pricing',
        title: 'VENTAS',
        type: 'collapse',
        icon: 'heroicons-outline:cash',
        children: [
          {
            id: 'pages.pricing.modern',
            title: 'Modern',
            type: 'item',
            url: '/pages/pricing/modern',
          },
          {
            id: 'pages.pricing.simple',
            title: 'Ventas Locales',
            type: 'item',
            url: '/pages/pricing/simple',
          },
          {
            id: 'pages.pricing.single',
            title: 'Ventas Online',
            type: 'item',
            url: '/pages/pricing/single',
          },
          {
            id: 'pages.pricing.table',
            title: 'Ordenes entregadas',
            type: 'item',
            url: '/pages/pricing/table',
          },
          {
            id: 'pages.pricing.table',
            title: 'Cuentas por Cobrar',
            type: 'item',
            url: '/pages/pricing/table',
          },
        ],
      },
      {
        id: 'pages.invenration',
        title: 'INVENTARIO',
        type: 'collapse',
        icon: 'heroicons-outline:archive',
        children: [
          {
            id: 'pages.pricing.modern',
            title: 'Modern',
            type: 'item',
            url: '/pages/pricing/modern',
          },
          {
            id: 'pages.pricing.simple',
            title: 'Simple',
            type: 'item',
            url: '/pages/pricing/simple',
          },
          {
            id: 'pages.pricing.single',
            title: 'Single',
            type: 'item',
            url: '/pages/pricing/single',
          },
          {
            id: 'pages.pricing.table',
            title: 'Table',
            type: 'item',
            url: '/pages/pricing/table',
          },
        ],
      },
   /*   {
        id: 'apps.academy',
        title: 'BODEGA',
        type: 'item',
        icon: 'heroicons-outline:academic-cap',
        url: '/apps/academy',
        translate: 'BODEGA',
      },
     /*  {
        id: 'apps.calendar',
        title: 'COMPRAS',
        subtitle: '3 upcoming events',
        type: 'item',
        icon: 'heroicons-outline:calendar',
        url: '/apps/calendar',
        translate: 'COMPRAS',
      },
      {
        id: 'apps.chat',
        title: 'VENTAS',
        type: 'item',
        icon: 'heroicons-outline:chat-alt',
        url: '/apps/chat',
        translate: 'VENTAS',
      },
      {
        id: 'apps.contacts',
        title: 'INVENTARIO',
        type: 'item',
        icon: 'heroicons-outline:user-group',
        url: '/apps/contacts',
        translate: 'INVENTARIO',
      }, */
    ],
  },
];

export default navigationConfig;
