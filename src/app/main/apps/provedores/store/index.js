import { combineReducers } from '@reduxjs/toolkit';
import tags from './tagsSlice';
import provedores from './provedorSlices';
import provedor from './provedorSlice';
import countries from './countriesSlice';

const reducer = combineReducers({
  tags,
  countries,
  provedores,
  provedor,
});

export default reducer;
