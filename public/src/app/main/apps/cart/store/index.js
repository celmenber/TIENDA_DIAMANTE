import { combineReducers } from '@reduxjs/toolkit';
//import clients from './clientsSlice';
import state from './stateSlice';

const reducer = combineReducers({
  //contacts,
  state,
});

export default reducer;
