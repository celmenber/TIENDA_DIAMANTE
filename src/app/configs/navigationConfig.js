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
        id: 'apps.clientes',
        title: 'Clientes',
        type: 'item',
        icon: 'heroicons-outline:user-group',
        url: '/apps/clientes',
        translate: 'CLIENTES',
      },
      {
        id: 'apps.bodega',
        title: 'BODEGA',
        type: 'collapse',
        icon: 'heroicons-outline:home',
        translate: 'BODEGA',
        children: [
          {
            id: 'o-compras-products',
            title: 'Productos',
            type: 'item',
            url: 'apps/o-compras/products',
            end: true,
          },
          {
            id: 'categorias-product-detail',
            title: 'Categorias',
            type: 'item',
            url: '/apps/categorias',
          },
          {
            id: 'presentacion-new-product',
            title: 'Presentación',
            type: 'item',
            url: 'apps/presentacion',
          },
          {
            id: 'marcas-order-detail',
            title: 'Marcas',
            type: 'item',
            url: 'apps/marcas',
          },
        ],
      },
      {
        id: 'apps.compras',
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
            id: 'compras-orders',
            title: 'Ordenes de compras',
            type: 'item',
            url: 'apps/o-compras/orders',
            end: true,
          },
          {
            id: 'apps.help-center.faqs',
            title: 'Pedidos',
            type: 'item',
            url: '/apps/pedidos/orders',
          },
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
            title: 'Gestion Ventas',
            type: 'item',
            url: '/apps/ventas',
          },
          {
            id: 'ordenesentregas.pricing.table',
            title: 'Entregadas Pedidos',
            type: 'item',
            url: '/apps/ordenesentregas',
          },
          {
            id: 'credito.pricing.table',
            title: 'Cuentas por Cobrar',
            type: 'item',
            url: '/apps/credito',
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
