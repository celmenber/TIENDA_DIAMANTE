import { combineReducers } from '@reduxjs/toolkit';
import tags from './tagsSlice';
import contacts from './provedoresSlice';
import countries from './countriesSlice';
import contact from './provedorSlice';

const reducer = combineReducers({
  tags,
  countries,
  contacts,
  contact,
});

export default reducer;
