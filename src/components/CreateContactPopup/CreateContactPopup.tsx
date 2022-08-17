import { FC } from "react";
import { Button, Modal } from "react-bootstrap";
import { CreateContactPopupProps } from "./CreateContactPopup.props";
import css from "./CreateContactPopup.module.scss";
import { Formik } from "formik";
// Components
import Input from "@components/UI/Input";
// Hooks
import { useAppDispatch } from "@hooks/index";
// Store
import { createContactFetch } from "@store/contacts/contactsSlice";
// Types
import { ContactCreateItemType } from "@main-types/contacts";

const CreateContactPopup: FC<CreateContactPopupProps> = ({ show, onHide }) => {
  const dispatch = useAppDispatch();
  const initialValues: ContactCreateItemType = { name: "", phone: "" };

  const onSubmit = (values: ContactCreateItemType) => {
    dispatch(createContactFetch(values));
  };

  return (
    <Modal
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Create</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {(props) => (
            <form className={css.form} onSubmit={props.handleSubmit} id="edit">
              <Input name="name" label="Name" className={css.form_input} />
              <Input name="phone" label="Phone" />
            </form>
          )}
        </Formik>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" form="edit">
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateContactPopup;
