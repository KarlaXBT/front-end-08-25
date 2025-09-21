import { useParams } from "react-router-dom";
import autodFailist from "../../data/autod.json";

function YksAuto() {
  //  <Route path="/auto/:name" element={<YksAuto />} />  <---- siit : name
  const { name } = useParams();
  const leitud = autodFailist.find((auto) => auto.nimi === name);
  return (
    <div>
      <div>{leitud.nimi}</div>
      <div>{leitud.hind}</div>
      <div>{leitud.aktiivne ? "Aktiivne" : "Mitteaktiivne"}</div>
    </div>
  );
}

export default YksAuto;
