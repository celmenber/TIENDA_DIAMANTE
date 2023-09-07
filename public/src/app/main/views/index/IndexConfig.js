import Index from './Index';

const IndexConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/',
      element: <Index />,
    },
  ],
};

export default IndexConfig;
