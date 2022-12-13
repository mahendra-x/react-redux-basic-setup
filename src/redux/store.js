import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import loginReducer from "./slices/loginSlice";
import homeReducer from "./slices/homeSlice";
import customReducer from "./slices/customSlice";

const persistConfig = {
  key: "custom",
  storage,
};

const reducers = combineReducers({
  login: loginReducer,
  home: homeReducer,
  custom: customReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
