import { configureStore } from '@reduxjs/toolkit';
import { phoneFilter, phoneReducer } from './reducers';

const store = configureStore({
  reducer: {
    phonebook: phoneReducer,
    phonebookFilter: phoneFilter,
  },
});

export default store;
