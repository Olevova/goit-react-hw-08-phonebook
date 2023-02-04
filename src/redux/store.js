import { configureStore } from '@reduxjs/toolkit';
import { registerReducer } from './registerSlice';
import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
import { persistStore } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

export const store = configureStore({
    reducer: {
        register: registerReducer,
        contacts: contactReducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
console.log(persistor);