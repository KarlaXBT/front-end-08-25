import { Navigate, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Kujundus from "./pages/Kujundus";
import Ilmumine from "./pages/Ilmumine";
import Muutmine from "./pages/Muutmine";
import Telefon from "./pages/Telefon";
import Hind from "./pages/Hind";

function App() {
  return (
    <>
      <div className="App">
        <Link to="/ilmumine">
          <button>Ilmumine</button>
        </Link>
        <Link to="/kujundus">
          <button>Kujundus</button>
        </Link>
        <Link to="/muutmine">
          <button>Muutmine</button>
        </Link>
        <Link to="/telefon">
          <button>Telefon</button>
        </Link>
        <Link to="/hind">
          <button>Hind</button>
        </Link>
        <Routes>
          <Route path="/" element={<Navigate to="/ilmumine" />}></Route>
          <Route path="/kujundus" element={<Kujundus />}></Route>
          <Route path="/ilmumine" element={<Ilmumine />}></Route>
          <Route path="/muutmine" element={<Muutmine />}></Route>
          <Route path="/telefon" element={<Telefon />}></Route>
          <Route path="/hind" element={<Hind />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
