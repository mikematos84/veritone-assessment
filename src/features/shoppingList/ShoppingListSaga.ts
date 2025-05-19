import { all, call, takeEvery } from "redux-saga/effects";

function* handleAddItemSaga() {
  yield call(() => console.log("Added Item"));
}

export default function* rootSaga() {
  yield all([takeEvery("shoppingList/addItem", handleAddItemSaga)]);
}
