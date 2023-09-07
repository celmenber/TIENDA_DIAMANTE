import Products from './Products';

const ProductsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/productos',
      element: <Products />,
    },
  ],
};

export default ProductsConfig;
