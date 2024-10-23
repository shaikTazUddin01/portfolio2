import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/feature/Auth/authslice";
import togglReducer from "@/redux/feature/toggle/toggleSlice";
import { baseApi } from "./feature/Api/baseApi";
import storage from 'redux-persist/lib/storage'
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";

const persistConfig = {
  key: 'auth',
  storage,
}


const authPersistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    toggle:togglReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
  
  }).concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor=persistStore(store)