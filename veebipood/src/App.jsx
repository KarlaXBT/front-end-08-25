import "./App.css";

import Avaleht from "./pages/Avaleht";
import LisaToode from "./pages/LisaToode";
import Seaded from "./pages/Seaded";
import Ostukorv from "./pages/Ostukorv";
import { Route, Routes } from "react-router-dom";
import Esindused from "./pages/arrays/Esindused";
import Kinkekaart from "./pages/Kinkekaart";
import Notfound from "./pages/Notfound";
import Menu from "./components/Menu";
import Kalkulaator from "./pages/Kalkulaator";
import ArraysHome from "./pages/arrays/ArraysHome";
import Autod from "./pages/arrays/Autod";
import Hinnad from "./pages/arrays/Hinnad";
import Kasutajad from "./pages/arrays/Kasutajad";
import Tootajad from "./pages/arrays/Tootajad";
import Tooted from "./pages/arrays/Tooted";
import HaldaHome from "./pages/halda/HaldaHome";
import HaldaEsindused from "./pages/halda/HaldaEsindused";
import HaldaAutod from "./pages/halda/HaldaAutod";
import HaldaHinnad from "./pages/halda/HaldaHinnad";
import HaldaKasutajad from "./pages/halda/HaldaKasutajad";
import HaldaTootajad from "./pages/halda/HaldaTootajad";
import HaldaTooted from "./pages/halda/HaldaTooted";
import MuudaEsindus from "./pages/muuda/MuudaEsindus";
import MuudaAuto from "./pages/muuda/MuudaAuto";
import MuudaKasutaja from "./pages/muuda/MuudaKasutaja";
import MuudaTootaja from "./pages/muuda/MuudaTootaja";
import MuudaToode from "./pages/muuda/MuudaToode";
import YksEsindus from "./pages/yks/YksEsindus";
import YksAuto from "./pages/yks/YksAuto";
import YksHind from "./pages/yks/YksHind";
import YksKasutaja from "./pages/yks/YksKasutaja";
import YksTootaja from "./pages/yks/YksTootaja";
import YksToode from "./pages/yks/YksToode";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Avaleht />} />
        <Route path="/ostukorv" element={<Ostukorv />} />
        <Route path="/lisa-toode" element={<LisaToode />} />
        <Route path="/seaded" element={<Seaded />} />

        <Route path="/osta-kinkekaart" element={<Kinkekaart />} />
        <Route path="/kalkulaator" element={<Kalkulaator />} />

        <Route path="/arrays-home" element={<ArraysHome />} />
        <Route path="/esindused" element={<Esindused />} />
        <Route path="/autod" element={<Autod />} />
        <Route path="/hinnad" element={<Hinnad />} />
        <Route path="/kasutajad" element={<Kasutajad />} />
        <Route path="/tootajad" element={<Tootajad />} />
        <Route path="/tooted" element={<Tooted />} />

        <Route path="/halda-home" element={<HaldaHome />} />
        <Route path="/halda-esindused" element={<HaldaEsindused />} />
        <Route path="/halda-autod" element={<HaldaAutod />} />
        <Route path="/halda-hinnad" element={<HaldaHinnad />} />
        <Route path="/halda-kasutajad" element={<HaldaKasutajad />} />
        <Route path="/halda-tootajad" element={<HaldaTootajad />} />
        <Route path="/halda-tooted" element={<HaldaTooted />} />

        <Route path="/muuda-esindused/:index" element={<MuudaEsindus />} />
        <Route path="/muuda-autod/:index" element={<MuudaAuto />} />
        <Route path="/muuda-hinnad/:index" element={<HaldaHinnad />} />
        <Route path="/muuda-kasutajad" element={<MuudaKasutaja />} />
        <Route path="/muuda-tootajad/:index" element={<MuudaTootaja />} />
        <Route path="/muuda-tooted/:index" element={<MuudaToode />} />

        <Route path="/esindus/:shop" element={<YksEsindus />} />
        <Route path="/auto/:name" element={<YksAuto />} />
        <Route path="/hind/:index" element={<YksHind />} />
        <Route path="/kasutaja/" element={<YksKasutaja />} />

        <Route path="/tootaja/:index" element={<YksTootaja />} />
        <Route path="/toode/:index" element={<YksToode />} />

        <Route path="/*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
