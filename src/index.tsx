import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
// Components
import App from "@components/App";
// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/reset.scss";
import "@styles/common.scss";
// Store
import store from "@store/index";
// Constants
import { history } from "@constants/history";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <HistoryRouter history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </HistoryRouter>
);
