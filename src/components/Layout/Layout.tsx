import { FC } from "react";
import { LayoutProps } from "./Layout.props";
import css from "./Layout.module.scss";

const Layout: FC<LayoutProps> = ({ children }) => (
  <div className={css.wrapper}>
    <div className={css.inner}>{children}</div>
  </div>
);

export default Layout;
