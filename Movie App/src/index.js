import ReactDOM from "react-dom/client";
import React from "react";

import App from "./app";
import "./styles/index.scss";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
