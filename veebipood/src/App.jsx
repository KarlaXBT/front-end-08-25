import "./App.css";

import Avaleht from "./pages/Avaleht";
import LisaToode from "./pages/LisaToode";
import Seaded from "./pages/Seaded";
import Ostukorv from "./pages/Ostukorv";
import { Link, Route, Routes } from "react-router-dom";
import Esindused from "./pages/Esindused";
import Kinkekaart from "./pages/Kinkekaart";
import Notfound from "./pages/Notfound";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Link to="/">
        <img
          className="pilt"
          src="https://www.motorcyclecruiser.com/resizer/-PAnxmuTE3vonuu0CUHRZqr2kY8=/1440x0/smart/cloudfront-us-east-1.images.arcpublishing.com/octane/U7NE4JOSA757H7EYU44LJEESSA.jpg"
          alt="Motikas"
        />
      </Link>
      <Link to="/ostukorv">
        <button>Ostukorv</button>
      </Link>
      <Link to="/lisa-toode">
        <button>Lisa toode</button>
      </Link>
      <Link to="/seaded">
        <button>Seaded</button>
      </Link>
      <Link to="/esindused">
        <button>Esindused</button>
      </Link>
      <Link to="/osta-kinkekaart">
        <button>Kinkekaardid</button>
      </Link>

      <Routes>
        <Route path="/" element={<Avaleht />} />
        <Route path="/ostukorv" element={<Ostukorv />} />
        <Route path="/lisa-toode" element={<LisaToode />} />
        <Route path="/seaded" element={<Seaded />} />
        <Route path="/esindused" element={<Esindused />} />
        <Route path="/osta-kinkekaart" element={<Kinkekaart />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
