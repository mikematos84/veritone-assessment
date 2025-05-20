import { call, takeEvery, put } from "redux-saga/effects";

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
import axios from "axios";

const API_BASE = "http://localhost:4000/items";

function* fetchItems() {
  try {
    const response = yield call(axios.get, API_BASE);
    yield put(fetchItemsSuccess(response.data));
  } catch (error) {
    yield put(fetchItemsFailure((error as Error).message));
  }
}

function* addItemSaga(action: PayloadAction<ShoppingItem>) {
  try {
    yield call(axios.post, API_BASE, action.payload);
  } catch (error) {
    console.error("Failed to add item:", error);
  }
}

function* removeItemSaga(action: PayloadAction<ShoppingItem>) {
  try {
    yield call(axios.delete, `${API_BASE}/${action.payload.id}`);
  } catch (error) {
    console.error("Failed to delete item:", error);
  }
}

function* editItemSaga(action: PayloadAction<ShoppingItem>) {
  try {
    yield call(axios.put, `${API_BASE}/${action.payload.id}`, action.payload);
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
