import { FC, useEffect, useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import { EditContactPopupProps } from "./EditContactPopup.props";
import css from "./EditContactPopup.module.scss";
import { Formik, FormikProps } from "formik";
// Components
import Input from "@components/UI/Input";
// Hooks
import { useAppDispatch, useAppSelector } from "@hooks/index";
// Store
import { editContactFetch } from "@store/contacts/contactsSlice";
// Types
import { ContactEditItemType } from "@main-types/contacts";

const EditContactPopup: FC<EditContactPopupProps> = ({ show, onHide }) => {
  const dispatch = useAppDispatch();
  const formikRef = useRef<FormikProps<ContactEditItemType>>(null);
  const editContact = useAppSelector((state) => state.contacts.editContact);
  const initialValues: ContactEditItemType = { name: "", phone: "" };

  const onSubmit = (values: ContactEditItemType) => {
    dispatch(editContactFetch(values));
  };

  useEffect(() => {
    if (formikRef.current && show) {
      formikRef.current.setFieldValue("name", editContact?.name);
      formikRef.current.setFieldValue("phone", editContact?.phone);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  return (
    <Modal
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          innerRef={formikRef}
        >
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

export default EditContactPopup;
