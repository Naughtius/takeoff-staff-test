import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
// Reducers
import authSlice from "@store/auth/authSlice";
import contactsSlice from "./contacts/contactsSlice";
// Saga
import { rootWatcher } from "./saga";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authSlice,
    contacts: contactsSlice,
  },
  middleware: [saga],
});

export default store;

saga.run(rootWatcher);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
