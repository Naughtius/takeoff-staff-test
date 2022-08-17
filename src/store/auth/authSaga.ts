import { usersApi } from "@api/auth";
import { history } from "@constants/history";
import { ValuesAuthType } from "@main-types/auth";
import { call, put, takeEvery } from "redux-saga/effects";
import { authFetch, authSuccess } from "./authSlice";

function* authFetchWork({
  payload,
}: {
  type: string;
  payload: ValuesAuthType;
}) {
  try {
    const { data } = yield call(usersApi, payload);

    if (data.length !== 0) {
      yield put(authSuccess());
      yield call(history.push, "/");
    }
  } catch (e) {}
}

function* authSagaWatcher() {
  yield takeEvery(authFetch.type, authFetchWork);
}

export default authSagaWatcher;
