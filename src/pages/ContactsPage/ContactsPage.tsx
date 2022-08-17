import { FC } from "react";
import css from "./ContactsPage.module.scss";
import { Button } from "react-bootstrap";
// Components
import ContactsList from "@components/ContactsList";
import EditContactPopup from "@components/EditContactPopup";
import CreateContactPopup from "@components/CreateContactPopup";
import SearchContacts from "@components/SearchContacts";
// Hooks
import { useAppDispatch, useAppSelector } from "@hooks/index";
// Store
import {
  changeActiveCreatePopup,
  changeActiveEditPopup,
} from "@store/contacts/contactsSlice";

const ContactsPage: FC = () => {
  const dispatch = useAppDispatch();
  const isEditPopupOpen = useAppSelector(
    (state) => state.contacts.isEditPopupOpen
  );
  const isCreatePopupOpen = useAppSelector(
    (state) => state.contacts.isCreatePopupOpen
  );

  return (
    <div>
      <div className={css.title}>
        <span>CONTACTS</span>
        <Button onClick={() => dispatch(changeActiveCreatePopup())}>
          Create
        </Button>
      </div>
      <SearchContacts />
      <ContactsList />
      <EditContactPopup
        show={isEditPopupOpen}
        onHide={() => dispatch(changeActiveEditPopup())}
      />
      <CreateContactPopup
        show={isCreatePopupOpen}
        onHide={() => dispatch(changeActiveCreatePopup())}
      />
    </div>
  );
};

export default ContactsPage;
