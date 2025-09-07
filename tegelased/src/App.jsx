import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Avaleht from "./pages/Avaleht";
import LisaTegelane from "./pages/LisaTegelane";
import ValitudTegelased from "./pages/ValitudTegelased";

function App() {
  return (
    <>
      <Link to="/">
        <button>Avaleht</button>
      </Link>
      <Link to="/lisa-tegelane">
        <button>Lisa Tegelane</button>
      </Link>
      <Link to="/valitud-tegelased">
        <button>Valitud Tegelased</button>
      </Link>
      <Routes>
        <Route path="/" element={<Avaleht />}></Route>
        <Route path="/lisa-tegelane" element={<LisaTegelane />}></Route>
        <Route path="/valitud-tegelased" element={<ValitudTegelased />}></Route>
      </Routes>
    </>
  );
}

export default App;
