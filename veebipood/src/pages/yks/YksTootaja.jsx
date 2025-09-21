import { useParams } from "react-router-dom";
import tootajadFailist from "../../data/tootajad.json";

function YksTootaja() {
  const { index } = useParams();
  const tootaja = tootajadFailist[index];

  console.log(tootaja);
  return (
    <div>
      <div>ID: {tootaja.id} </div>
      <div>Eesnimi: {tootaja.eesnimi} </div>
      <div>Perenimi: {tootaja.perenimi} </div>
      <div>Amet: {tootaja.amet} </div>
      <div>Osakond: {tootaja.osakond} </div>
      <div>Palk: {tootaja.palk} </div>
      <div>Tootav: {tootaja.tootav ? "Töötab" : "Ei tööta"} </div>
    </div>
  );
}

export default YksTootaja;
