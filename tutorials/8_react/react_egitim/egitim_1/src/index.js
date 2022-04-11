import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UserProvider } from "./components/context";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// App içeriğine userProvider olarak seçiyoruz
ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

//
reportWebVitals();
