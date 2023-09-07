import { lazy } from 'react';
import FuseUtils from '@fuse/utils';
import FuseLoading from '@fuse/core/FuseLoading';
import { Navigate } from 'react-router-dom';
import settingsConfig from 'app/configs/settingsConfig';
import SignInConfig from '../main/sign-in/SignInConfig';
import SignUpConfig from '../main/sign-up/SignUpConfig';
import SignOutConfig from '../main/sign-out/SignOutConfig';

const Index = lazy(() => import('../main/views/index/Index'));
// const Order = lazy(() => import('../main/sign-in/SignInPage'));
const CartProducts = lazy(() => import('../main/views/cartView/CartProducts'));
const Products = lazy(() => import('../main/views/products/Products'));
const Product = lazy(() => import('../main/views/product/Product'));
const Profile = lazy(() => import('../main/views/profile'));
const Orders = lazy(() => import('../main/views/orders/Orders'));
const Clients = lazy(() => import('../main/views/clients/Clients'));
const SignOutPage = lazy(() => import('../main/sign-out/SignOutPage'))
const Sells = lazy(() => import('../main/views/sells/Sells'));

const Error404Page = lazy(() => import('../main/views/404/Error404Page'));

const routeConfigs = [SignInConfig, SignOutConfig, SignUpConfig];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
  {
    path: '/',
    element: <Navigate to="productos" />,
    auth: settingsConfig.defaultAuth,
    exact: true,
  },
  {
    path: 'loading',
    element: <FuseLoading />,
  },
  {
    path: 'inicio',
    element: <Index />,
  },
  {
    path: 'productos',
    element: <Products />,
  },
  {
    path: 'productos/:productoId/*',
    element: <Product />,
  },
  {
    path: '404',
    element: <Error404Page />,
  },
  {
    path: 'carrito',
    element: <CartProducts />,
  },
  {
    path: 'user/profile',
    element: <Profile />,
  },
  {
    path: 'user/profile/:userId/*',
    element: <Profile />,
  },
  {
    path: 'clientes',
    element: <Clients />,
  },
  {
    path: 'logout',
    element: <SignOutPage />,
  },
  /* {
    path: 'ordenes/:orderId',
    element: <Order />,
  }, */
  {
    path: 'ordenes',
    element: <Orders />,
  },
  {
    path: 'ventas',
    element: <Sells />,
  },
  {
    path: '*',
    element: <Navigate to="404" />,
  },
];

export default routes;
