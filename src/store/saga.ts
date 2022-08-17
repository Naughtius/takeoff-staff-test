import { all } from "redux-saga/effects";
// Watchers
import authSagaWatcher from "./auth/authSaga";
import constactsSagaWatcher from "./contacts/contactsSaga";

export function* rootWatcher() {
  yield all([authSagaWatcher(), constactsSagaWatcher()]);
}
