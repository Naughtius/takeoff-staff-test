import { FC } from "react";
import css from "./AuthPage.module.scss";
//Components
import AuthForm from "@components/AuthForm";

const AuthPage: FC = () => {
  return (
    <div>
      <div className={css.title}>AUTH</div>
      <AuthForm />
    </div>
  );
};

export default AuthPage;
