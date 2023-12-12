/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-shadow */
import { useSelector } from 'react-redux';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export const getProducts = () => {
  const state = useSelector((state) => state);
  return state.cart;
}; /* createAsyncThunk('eCommerceApp/products/getProducts', async () => {
  const response = await axios.get('/api/ecommerce/products');
  const data = await response.data;

  return data;
}); */

export const removeProducts = () => {};
/* createAsyncThunk(
  'eCommerceApp/products',
  async (productIds, { dispatch, getState }) => {
    await axios.delete('/api/ecommerce/products', { data: productIds });

    return productIds;
  }
); */

const productsAdapter = createEntityAdapter({});

export const { selectAll: selectProducts, selectById: selectProductById } =
  productsAdapter.getSelectors((state) => state.eCommerceApp.products);

const productsSlice = createSlice({
  name: 'eCommerceApp/products',
  initialState: productsAdapter.getInitialState({
    searchText: '',
  }),
  reducers: {
    setProductsSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
  },
  extraReducers: {
    // [getProducts.fulfilled]: productsAdapter.setAll,
    [removeProducts.fulfilled]: (state, action) =>
      productsAdapter.removeMany(state, action.payload),
  },
});

export const { setProductsSearchText } = productsSlice.actions;

export const selectProductsSearchText = ({ cartApp }) => cartApp.products.searchText;

export default productsSlice.reducer;
