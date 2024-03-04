import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Product = lazy(() => import('./product/Product'));
const Products = lazy(() => import('./products/Products'));
const Order = lazy(() => import('./order/Order'));
const Orders = lazy(() => import('./orders/Orders'));

const PedidosAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: 'apps/pedidos/products',
      element: <Products />,
    },
    {
      path: 'apps/pedidos/products/:productId/*',
      element: <Product />,
    },
    {
      path: 'apps/pedidos/orders',
      element: <Orders />,
    },
    {
      path: 'apps/pedidos/orders/:orderId',
      element: <Order />,
    },
    {
      path: 'apps/pedidos',
      element: <Navigate to="products" />,
    },
  ],
};

export default PedidosAppConfig;
