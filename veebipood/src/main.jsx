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

//1. T 26.08 - muutujad, tingimused
//2. N 28.08 - tsüklid, objektid
//3. E 01.09 - React algus, navigeerimine
//4. R 05.09 - useState
//5. E 08.09 -
//6. R 12.09 -
//7. E 15.09 -
//8. K 17.09 -
