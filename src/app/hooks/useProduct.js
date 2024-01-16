/* eslint-disable import/prefer-default-export */
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategoriesAction,
  getProductAction,
  setBaseCategoriesAction,
  setCategoriesAction,
  setProductsAction,
  setProductsSearchTextAction,
} from '../action/ProductAction';

export const useProduct = () => {
  const dispatch = useDispatch();
  // ACTIONS PROPIEADADES
  const setProducts = (Data) => dispatch(setProductsAction(Data));
  const getProducts = (Data) => dispatch(getProductAction(Data));
  const getCategories = (Data) => dispatch(getCategoriesAction(Data));
  const setCategories = (Data) => dispatch(setCategoriesAction(Data));
  const setBaseCategories = (Data) => dispatch(setBaseCategoriesAction(Data));
  const setProductsSearchText = (Data) => dispatch(setProductsSearchTextAction(Data));

  // SELECTORS
  const {
    selectProducts,
    selectProductsSearchText,
    selectCategories,
    selectBaseCategories,
    selectProductLoaded,
  } = useSelector((state) => state.products);

  /*  const selectProductsSearchText = useSelector((state) => state.products.searchText);
  const selectCategories = useSelector((state) => state.products.categories);
  const selectBaseCategories = useSelector((state) => state.products.baseCategories);
  const selectProductLoaded = useSelector((state) => state.products.loaded); */
  return {
    getCategories,
    setBaseCategories,
    setCategories,
    getProducts,
    setProducts,
    setProductsSearchText,
    selectCategories,
    selectBaseCategories,
    selectProductLoaded,
    selectProducts,
    selectProductsSearchText,
  };
};
