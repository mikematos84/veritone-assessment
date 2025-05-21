import {
  call,
  // @ts-ignore
  takeEvery,
  put,
} from "redux-saga/effects";

import {
  fetchItemsStart,
  fetchItemsSuccess,
  fetchItemsFailure,
  addItem,
  removeItem,
  editItem,
  type ShoppingItem,
} from "./shoppingListSlice";

import { type PayloadAction } from "@reduxjs/toolkit";
import axios, { type AxiosResponse } from "axios";

const API_BASE = "http://localhost:4000";

function* fetchItems(): Generator<any, void, AxiosResponse<ShoppingItem[]>> {
  try {
    // @ts-ignore
    const response = yield call(axios.get, `${API_BASE}/items`);
    yield put(fetchItemsSuccess(response.data));
  } catch (error) {
    yield put(fetchItemsFailure((error as Error).message));
  }
}

function* addItemSaga(
  action: PayloadAction<ShoppingItem>
): Generator<any, void, AxiosResponse<ShoppingItem>> {
  try {
    // @ts-ignore
    yield call(axios.post, `${API_BASE}/items`, action.payload);
  } catch (error) {
    console.error("Failed to add item:", error);
  }
}

function* removeItemSaga(
  action: PayloadAction<ShoppingItem>
): Generator<any, void, AxiosResponse<ShoppingItem>> {
  try {
    // @ts-ignore
    yield call(axios.delete, `${API_BASE}/items/${action.payload.id}`);
  } catch (error) {
    console.error("Failed to delete item:", error);
  }
}

function* editItemSaga(action: PayloadAction<ShoppingItem>) {
  try {
    yield call(
      // @ts-ignore
      axios.put,
      `${API_BASE}/items/${action.payload.id}`,
      action.payload
    );
  } catch (error) {
    console.error("Failed to update item:", error);
  }
}

export default function* rootSaga() {
  yield takeEvery(fetchItemsStart.type, fetchItems);
  yield takeEvery(addItem.type, addItemSaga);
  yield takeEvery(removeItem.type, removeItemSaga);
  yield takeEvery(editItem.type, editItemSaga);
}
