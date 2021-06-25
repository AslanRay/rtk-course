import { configureStore } from '@reduxjs/toolkit';
import PetTagReducer from './slices/petTag';
import { petTagAPI } from './services/api';

const store = configureStore({
  reducer: {
    petTag: PetTagReducer,
    [petTagAPI.reducerPath]: petTagAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(petTagAPI.middleware),
});

export default store;
