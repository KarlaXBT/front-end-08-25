import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { useRef, useState } from "react";
import Months from "./pages/Months";
import Animals from "./pages/Animals";
import Words from "./pages/Words";

function App() {
  const [sisselogitud, muudaSisselogitud] = useState("ei");
  const [sonum, muudaSonum] = useState("");
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();

  const logiSisse = () => {
    if (paroolRef.current.value === "123") {
      muudaSisselogitud("jah");
      muudaSonum(kasutajaNimiRef.current.value + " oled sisselogitud");
    } else {
      muudaSonum("Vale parool");
    }
  };
  const logiValja = () => {
    muudaSisselogitud("ei");
    muudaSonum("");
  };
  return (
    <>
      <div className="App">
        <div>{sonum}</div>
        {sisselogitud === "ei" && (
          <div>
            <label>Kasutajanimi</label>
            <br />
            <input ref={kasutajaNimiRef} type="text" />
            <br />
            <label>Parool</label>
            <br />
            <input ref={paroolRef} type="password" />
            <br />
          </div>
        )}

        {sisselogitud === "ei" && (
          <button onClick={logiSisse}>Logi Sisse</button>
        )}
        {sisselogitud === "jah" && (
          <button onClick={logiValja}>Logi Välja</button>
        )}
      </div>
      <nav>
        <Link to="/">
          <button>Avaleht</button>
        </Link>
        <Link to="/meist">
          <button>Meist</button>
        </Link>
        <Link to="/kontakt">
          <button>Kontakt</button>
        </Link>
        <Link to="/kuud">
          <button>Kuud</button>
        </Link>
        <Link to="/loomad">
          <button>Loomad</button>
        </Link>
        <Link to="/sonad">
          <button>Sõnad</button>
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meist" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/kuud" element={<Months />} />
        <Route path="/loomad" element={<Animals />} />
        <Route path="/sonad" element={<Words />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </>
  );
}

export default App;
