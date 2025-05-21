// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import shoppingListReducer from "../features/shoppingList/shoppingListSlice";
import rootSaga from "../features/shoppingList/shoppingListSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    shoppingList: shoppingListReducer,
  },
  // @ts-ignore
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
