// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import shoppingListReducer from "../features/shoppingList/shoppingListSlice";
import shoppingListSaga from "../features/shoppingList/shoppingListSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    shoppingList: shoppingListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(shoppingListSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
