import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root") ?? document.body).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
