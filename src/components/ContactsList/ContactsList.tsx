import { FC, useEffect } from "react";
import css from "./ContactsList.module.scss";
// Hooks
import { useAppDispatch, useAppSelector } from "@hooks/index";
// Store
import {
  changeActiveEditPopup,
  contactsFetch,
  deleteContactFetch,
  getEditContact,
} from "@store/contacts/contactsSlice";
// Components
import ContactItem from "@components/ContactItem";
// Types
import { ContactItemType } from "@main-types/contacts";

const ContactsList: FC = () => {
  const dispatch = useAppDispatch();
  const filteredContacts = useAppSelector(
    (state) => state.contacts.filteredList
  );

  useEffect(() => {
    dispatch(contactsFetch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const editHandler = (contact: ContactItemType) => {
    dispatch(getEditContact(contact));
    dispatch(changeActiveEditPopup());
  };

  return (
    <div>
      {filteredContacts.map((contact) => (
        <ContactItem
          key={contact.id}
          name={contact.name}
          phone={contact.phone}
          className={css.contact}
          deleteHandler={() => dispatch(deleteContactFetch(contact.id))}
          editHandler={() => editHandler(contact)}
        />
      ))}
    </div>
  );
};

export default ContactsList;
