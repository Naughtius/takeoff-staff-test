import {
  ContactCreateItemType,
  ContactEditItemType,
  ContactItemType,
} from "@main-types/contacts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  list: ContactItemType[];
  filteredList: ContactItemType[];
  editContact: ContactItemType | null;
  isEditPopupOpen: boolean;
  isCreatePopupOpen: boolean;
};

const initialState: State = {
  list: [],
  filteredList: [],
  editContact: null,
  isEditPopupOpen: false,
  isCreatePopupOpen: false,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    contactsFetch: (state) => {},
    deleteContactFetch: (state, action: PayloadAction<number>) => {},
    editContactFetch: (state, action: PayloadAction<ContactEditItemType>) => {},
    getContactsSuccess: (state, action: PayloadAction<ContactItemType[]>) => {
      return { ...state, list: action.payload, filteredList: action.payload };
    },
    getEditContact: (state, action: PayloadAction<ContactItemType>) => {
      return { ...state, editContact: action.payload };
    },
    changeActiveEditPopup: (state) => {
      return { ...state, isEditPopupOpen: !state.isEditPopupOpen };
    },
    changeActiveCreatePopup: (state) => {
      return { ...state, isCreatePopupOpen: !state.isCreatePopupOpen };
    },
    createContactFetch: (
      state,
      action: PayloadAction<ContactCreateItemType>
    ) => {},
    searchContactByName: (state, action: PayloadAction<string>) => {
      const filteredContacts = state.list.filter((contact) =>
        contact.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        filteredList:
          action.payload.length > 0 ? filteredContacts : [...state.list],
      };
    },
  },
});

export const {
  contactsFetch,
  deleteContactFetch,
  editContactFetch,
  getContactsSuccess,
  getEditContact,
  changeActiveEditPopup,
  createContactFetch,
  changeActiveCreatePopup,
  searchContactByName,
} = contactsSlice.actions;

export default contactsSlice.reducer;
