import { FC } from "react";
import css from "./AuthForm.module.scss";
import { Formik } from "formik";
import { Button } from "react-bootstrap";
// Components
import Input from "@components/UI/Input";
// Hooks
import { useAppDispatch } from "@hooks/index";
// Store
import { authFetch } from "@store/auth/authSlice";
// Types
import { ValuesAuthType } from "@main-types/auth";

const AuthForm: FC = () => {
  const dispatch = useAppDispatch();
  const initialValues: ValuesAuthType = { email: "", password: "" };

  const onSubmit = (values: ValuesAuthType) => {
    dispatch(authFetch(values));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(props) => (
        <form className={css.form} onSubmit={props.handleSubmit}>
          <Input name="email" label="Email" className={css.form_input} />
          <Input name="password" label="Password" />
          <Button variant="primary" type="submit" className={css.form_btn}>
            Sign in
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default AuthForm;
