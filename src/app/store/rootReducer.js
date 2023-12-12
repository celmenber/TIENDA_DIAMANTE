import { combineReducers } from '@reduxjs/toolkit';
import fuse from './fuse';
import i18n from './i18nSlice';
import user from './userSlice';
import {
  UsuarioReducer,
  CartReducer,
  ClientReducer,
  SellReducer,
  ProductReducer,
} from '../reducers';

const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    ...asyncReducers,
    fuse,
    i18n,
    user,
    usuario: UsuarioReducer,
    cart: CartReducer,
    products: ProductReducer,
    clients: ClientReducer,
    sell: SellReducer,
  });

  /*
  Reset the redux store when user logged out
   */
  if (action.type === 'user/userLoggedOut') {
    state = undefined;
  }

  return combinedReducer(state, action);
};

export default createReducer;
