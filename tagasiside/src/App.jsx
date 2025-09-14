import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Tagasiside from "./pages/Tagasiside";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <nav>
        <Link to="/">
          <button>Avalehele</button>
        </Link>
        <Link to="/tagasiside">
          <button>Tagasiside</button>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tagasiside" element={<Tagasiside />} />
      </Routes>
    </>
  );
}

export default App;
