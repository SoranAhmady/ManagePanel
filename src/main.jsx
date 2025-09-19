import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LoginWindow from "./context/LoginWindow";
import { Provider } from "react-redux";
import store from "./core/Redux/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store} >
    <LoginWindow>
        <App />
    </LoginWindow>
    </Provider>
  </React.StrictMode>
);
