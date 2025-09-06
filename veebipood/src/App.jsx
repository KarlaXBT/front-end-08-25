import "./App.css";

import Avaleht from "./pages/Avaleht";
import LisaToode from "./pages/LisaToode";
import Seaded from "./pages/Seaded";
import Ostukorv from "./pages/Ostukorv";
import { Route, Routes } from "react-router-dom";
import Esindused from "./pages/Esindused";
import Kinkekaart from "./pages/Kinkekaart";
import Notfound from "./pages/Notfound";
import Menu from "./components/Menu";
import Kalkulaator from "./pages/Kalkulaator";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Avaleht />} />
        <Route path="/ostukorv" element={<Ostukorv />} />
        <Route path="/lisa-toode" element={<LisaToode />} />
        <Route path="/seaded" element={<Seaded />} />
        <Route path="/esindused" element={<Esindused />} />
        <Route path="/osta-kinkekaart" element={<Kinkekaart />} />
        <Route path="/kalkulaator" element={<Kalkulaator />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
