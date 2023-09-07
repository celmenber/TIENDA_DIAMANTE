import AXIOS from 'app/configs/interceptors';
import { useDispatch } from 'react-redux';
import TYPES from '../type/ProductType';
import jwtServiceConfig from '../auth/services/jwtService/jwtServiceConfig';

export const createProductAction = (Data) => ({
  type: TYPES.CREATE_PRODUCT,
  payload: Data,
});

export const deleteProductAction = (Data) => ({
  type: TYPES.DELETE_PRODUCT,
  payload: Data,
});

export const editProductAction = (Data) => ({
  type: TYPES.EDIT_PRODUCT,
  payload: Data,
});

export const getProductAction = (Data) => {
  return async (dispatch = useDispatch()) => {
    AXIOS.get(jwtServiceConfig.products.V2.viewProducto)
      .then((response) => {
        const { data } = response.data;
        dispatch(setProductsAction(data));
        // dispatch(showMessage({ message: "Carga completa" }))
      })
      .catch((err) => {
        dispatch(setProductsAction(false));
      });
    return { type: TYPES.GET_PRODUCT, payload: Data };
  };
};

export const setCategoriesAction = (Data) => ({
  type: TYPES.SET_CATEGORIES,
  payload: Data,
});

export const getCategoriesAction = (Data) => {
  return async (dispatch = useDispatch()) => {
    AXIOS.get(jwtServiceConfig.products.V2.viewCategoria)
      .then((response) => {
        const { data } = response.data;
        dispatch(setCategoriesAction(data));
        dispatch(setBaseCategoriesAction(data));
      })
      .catch((err) => {
        dispatch(setCategoriesAction(false));
      });
    return { type: TYPES.GET_CATEGORIES, payload: Data };
  };
};

export const setProductsSearchTextAction = (Data) => ({
  type: TYPES.SET_PRODUCTS_SEARCHTEXT,
  payload: Data,
});

export const setProductsAction = (Data) => ({
  type: TYPES.SET_PRODUCTS,
  payload: Data,
});

export const setBaseCategoriesAction = (Data) => ({
  type: TYPES.SET_BASECATEGORIES,
  payload: Data,
});

export const newProductAction = () => ({ type: TYPES.NEW_PRODUCT });
