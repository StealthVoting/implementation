import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import voterReducer from "../reducers/voter";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  voter: voterReducer,
});

const persReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
