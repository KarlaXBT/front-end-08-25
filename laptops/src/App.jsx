import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Avaleht from "./pages/Avaleht";
import LisaArvuti from "./pages/LisaArvuti";
import VaataArvuteid from "./pages/VaataArvuteid";

function App() {
  return (
    <>
      <Navbar />

      {/* kolm erinevat URL aadressi, teekonnad */}
      <Routes>
        <Route path="/" element={<Avaleht />} />
        <Route path="/all" element={<VaataArvuteid />} />
        <Route path="/add" element={<LisaArvuti />} />
      </Routes>
    </>
  );
}

export default App;
