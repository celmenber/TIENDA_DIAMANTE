import TYPES from "../type/ProductType";
import productsDataConfig from "../main/views/products/productsDataConfig";
import _ from "lodash";
import productConfig from "../main/views/products/productConfig";
import productCategoryConfig from "../main/views/products/ProductCategories/productCategoryConfig";

const initialState = {
  loaded: false,
  items: [],
  selectProduct: null,
  searchText: "",
  categories: [],
  baseCategories: [],
};

export const ProductReducer = (state = initialState, action) => {
  //const dispatch = useDispatch()
  switch (action.type) {
    case TYPES.SET_PRODUCTS:
      return {
        ...state,
        items: action.payload,
        loaded: true
      }
    case TYPES.CREATE_PRODUCT:
      !state.items.find(
        (item) => String(item.id) === String(action.payload.id)
      ) && state.items.push(action.payload);
      return state;
    case TYPES.DELETE_PRODUCT:
      _.remove(
        state.items,
        (item) => String(item.id) === String(action.payload.id)
      );
      return state;
    case TYPES.EDIT_PRODUCT:
      return {
        ...state
      };
    case TYPES.GET_PRODUCT:
      const product = state.items.find(
        (item) => String(item.id) === String(action.payload)
      );
      state.selectProduct = product;
      return {
        ...state,
      };
    case TYPES.GET_CATEGORIES:
      return { ...state };
    case TYPES.SET_CATEGORIES:
      state.categories = action.payload;
      return state;
    case TYPES.SET_BASECATEGORIES:
      state.baseCategories = state.categories;
      return state;
    case TYPES.NEW_PRODUCT:
      state.selectProduct = productConfig;
      return state;
    case TYPES.SET_PRODUCTS_SEARCHTEXT:
      state.searchText = action.payload;
      return state;
    default:
      return { ...state };
  }
};
