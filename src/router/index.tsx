import { Routes, Route, Outlet } from "react-router-dom";
// Pages
import ContactsPage from "@pages/ContactsPage";
import AuthPage from "@pages/AuthPage";
import Layout from "@components/Layout";
// Hooks
import { useAppSelector } from "@hooks/index";

const Router = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  return (
    <Routes>
      <Route
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        {isAuth ? (
          <Route path="/" element={<ContactsPage />} />
        ) : (
          <Route path="/auth" element={<AuthPage />} />
        )}
        <Route path="*" element={<AuthPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
