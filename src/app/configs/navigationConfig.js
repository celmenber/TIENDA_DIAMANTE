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
            title: 'Categorias',
            type: 'item',
            url: '/apps/categorias',
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
            title: 'Proveedores',
            type: 'item',
            url: '/apps/provedores',
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
            title: 'Generar Inventario',
            type: 'item',
            url: '/pages/pricing/modern',
          },
          {
            id: 'pages.pricing.simple',
            title: 'Ver Inventario',
            type: 'item',
            url: '/pages/pricing/simple',
          },
        ],
      },
    ],
  },
];

export default navigationConfig;
