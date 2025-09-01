import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// URL vahetamiseks + HTMLi muutmiseks samal ajal (navigation / routing):
// 1. npm i react-router-dom ---> võtab internetist ja paneb vajalikud koodilõigud node_modeules kausta
// 2. võtame node_modules seest, react-router-dom kaustast BrowserRouteri impordi abil
// 3. ümbritseme App.jsx faili (<App />) selle imporditud BrowserRouteriga
// 4. teeme App.jsx failis URL ja HTML seoseid

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
