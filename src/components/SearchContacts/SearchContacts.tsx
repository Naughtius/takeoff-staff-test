import { Formik } from "formik";
import { FC } from "react";
import css from "./SearchContacts.module.scss";
import { SearchType } from "./SearchContacts.props";
import { useAppDispatch } from "@hooks/index";
// Components
import Input from "@components/UI/Input";
// Store
import { searchContactByName } from "@store/contacts/contactsSlice";

const SearchContacts: FC = () => {
  const dispatch = useAppDispatch();
  const initialValues: SearchType = { search: "" };

  const onSubmit = (values: SearchType) => {
    dispatch(searchContactByName(values.search));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(props) => (
        <form className={css.form} onSubmit={props.handleSubmit}>
          <Input name="search" label="Search" className={css.form_input} />
        </form>
      )}
    </Formik>
  );
};

export default SearchContacts;
