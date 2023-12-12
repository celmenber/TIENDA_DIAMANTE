import FuseLoading from '@fuse/core/FuseLoading';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { useDeepCompareEffect } from '@fuse/hooks';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import _ from '@lodash';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import { useProduct } from 'src/app/hooks';
import ProductHeader from './ProductHeader';
import BasicInfoTab from './tabs/BasicInfoTab';
import InventoryTab from './tabs/InventoryTab';
import PricingTab from './tabs/PricingTab';
import ProductImagesTab from './tabs/ProductImagesTab';
import ShippingTab from './tabs/ShippingTab';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  name: yup
    .string()
    .required('You must enter a product name')
    .min(5, 'The product name must be at least 5 characters'),
});

function Product(props) {
  const { selectProducts } = useProduct();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const [product, setProduct] = useState(state.products.selectProduct);
  const routeParams = useParams();
  const [tabValue, setTabValue] = useState(0);
  const [noProduct, setNoProduct] = useState(false);
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema),
  });
  const { reset, watch, control, onChange, formState } = methods;
  const form = watch();

  useEffect(() => {
    if (routeParams.productoId === 'new') {
      dispatch(newProduct());
    } else {
      dispatch(getProduct(routeParams.productoId));
    }
    setProduct(state.products.selectProduct);
  }, [dispatch, routeParams, setProduct]);

  useDeepCompareEffect(() => {
    function updateProductState() {
      if (routeParams.productoId === 'new') {
        /**
         * Create New Product data
         */
        // dispatch(newProduct());
      } else if (
        !state.products.selectProduct ||
        state.products.selectProduct === null ||
        state.products.selectProduct === {} ||
        state.products.selectProduct === undefined
      ) {
        setNoProduct(true);
      } else {
        /**
         * Get Product data
         */
        dispatch(getProduct(routeParams.productoId));
      }
    }

    updateProductState();
  }, [dispatch, routeParams]);

  useEffect(() => {
    if (!product) {
      return;
    }
    /**
     * Reset the form on product state changes
     */
    reset(product);
  }, [product, reset]);

  useEffect(() => {
    return () => {
      /**
       * Reset Product on component unload
       */
      // dispatch(resetProduct());
      setNoProduct(false);
    };
  }, [dispatch]);

  /**
   * Tab Change
   */
  function handleTabChange(event, value) {
    setTabValue(value);
  }

  /**
   * Show Message if the requested products is not exists
   */
  if (noProduct) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-col flex-1 items-center justify-center h-full"
      >
        <Typography color="text.secondary" variant="h5">
          Este producto no existe!
        </Typography>
        <Button
          className="mt-24"
          component={Link}
          variant="outlined"
          to="/productos"
          color="inherit"
        >
          Ir al catalogo
        </Button>
      </motion.div>
    );
  }

  /**
   * Wait while product data is loading and form is setted
   */
  if (
    _.isEmpty(form) ||
    (product &&
      String(routeParams.productoId) !== String(product.id) &&
      routeParams.productId !== 'new')
  ) {
    return <FuseLoading />;
  }
  return (
    <FormProvider {...methods}>
      <FusePageCarded
        header={<ProductHeader />}
        content={
          <>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              indicatorColor="secondary"
              textColor="secondary"
              variant="scrollable"
              scrollButtons="auto"
              classes={{ root: 'w-full h-64 border-b-1' }}
            >
              <Tab className="h-64" label="Informacion" />
              <Tab className="h-64" label="Imagenes" />
              <Tab className="h-64" label="Costos" />
              <Tab className="h-64" label="Inventario" />
              <Tab className="h-64" label="Envio" />
            </Tabs>
            <div className="p-16 sm:p-24 max-w-3xl">
              <div className={tabValue !== 0 ? 'hidden' : ''}>
                <BasicInfoTab />
              </div>

              <div className={tabValue !== 1 ? 'hidden' : ''}>
                <ProductImagesTab />
              </div>

              <div className={tabValue !== 2 ? 'hidden' : ''}>
                <PricingTab />
              </div>

              <div className={tabValue !== 3 ? 'hidden' : ''}>
                <InventoryTab />
              </div>

              <div className={tabValue !== 4 ? 'hidden' : ''}>
                <ShippingTab />
              </div>
            </div>
          </>
        }
        scroll={isMobile ? 'normal' : 'content'}
      />
    </FormProvider>
  );
}

export default Product;
