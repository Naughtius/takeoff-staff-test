import {
  contactsApi,
  createContactApi,
  deleteContactApi,
  editContactApi,
} from "@api/contacts";
import {
  ContactCreateItemType,
  ContactEditItemType,
  ContactItemType,
} from "@main-types/contacts";
import { call, put, select, takeEvery } from "redux-saga/effects";
import {
  changeActiveCreatePopup,
  changeActiveEditPopup,
  contactsFetch,
  createContactFetch,
  deleteContactFetch,
  editContactFetch,
  getContactsSuccess,
} from "./contactsSlice";

function* contactsFetchWork() {
  try {
    const { data } = yield call(contactsApi);

    yield put(getContactsSuccess(data));
  } catch (e) {}
}

function* contactDeleteFetchWork({
  payload,
}: {
  type: string;
  payload: number;
}) {
  try {
    yield call(deleteContactApi, payload);

    const contacts: ContactItemType[] = yield select(
      (state) => state.contacts.list
    );
    const contactsFiltered = contacts.filter(
      (contact: ContactItemType) => contact.id !== payload
    );

    yield put(getContactsSuccess(contactsFiltered));
  } catch (e) {}
}

function* contactEditFetchWork({
  payload,
}: {
  type: string;
  payload: ContactEditItemType;
}) {
  try {
    const editContact: ContactItemType = yield select(
      (state) => state.contacts.editContact
    );
    const contacts: ContactItemType[] = yield select(
      (state) => state.contacts.list
    );
    const { data } = yield call(editContactApi, {
      id: editContact.id,
      ...payload,
    });
    const contactsChanged = contacts.map((item) =>
      item.id === editContact.id ? data : item
    );

    yield put(getContactsSuccess(contactsChanged));
    yield put(changeActiveEditPopup());
  } catch (e) {}
}

function* contactCreateFetchWork({
  payload,
}: {
  type: string;
  payload: ContactCreateItemType;
}) {
  try {
    if (payload.name.trim() !== "" && payload.phone.trim() !== "") {
      const contacts: ContactItemType[] = yield select(
        (state) => state.contacts.list
      );
      const contactsCopy = [...contacts];
      const { data } = yield call(createContactApi, payload);
      contactsCopy.push(data);
      yield put(getContactsSuccess(contactsCopy));
      yield put(changeActiveCreatePopup());
    }
  } catch (e) {}
}

function* constactsSagaWatcher() {
  yield takeEvery(contactsFetch.type, contactsFetchWork);
  yield takeEvery(deleteContactFetch.type, contactDeleteFetchWork);
  yield takeEvery(editContactFetch.type, contactEditFetchWork);
  yield takeEvery(createContactFetch.type, contactCreateFetchWork);
}

export default constactsSagaWatcher;
