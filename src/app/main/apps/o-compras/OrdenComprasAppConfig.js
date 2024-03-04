import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Product = lazy(() => import('./product/Product'));
const Products = lazy(() => import('./products/Products'));
const Order = lazy(() => import('./order/Order'));
const Orders = lazy(() => import('./orders/Orders'));

const OrdenComprasAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: 'apps/o-compras/products',
      element: <Products />,
    },
    {
      path: 'apps/o-compras/products/:productId/*',
      element: <Product />,
    },
    {
      path: 'apps/o-compras/orders',
      element: <Orders />,
    },
    {
      path: 'apps/o-compras/orders/:orderId',
      element: <Order />,
    },
    {
      path: 'apps/o-compras',
      element: <Navigate to="products" />,
    },
  ],
};

export default OrdenComprasAppConfig;
