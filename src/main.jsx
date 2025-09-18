import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LoginWindow from "./context/LoginWindow";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginWindow>
        <App />
    </LoginWindow>
  </React.StrictMode>
);
