import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./routing/useAuth";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
    <AuthProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AuthProvider>
  </BrowserRouter>
);
