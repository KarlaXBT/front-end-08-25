import { useNavigate, useParams } from "react-router-dom";
import esindusedFailist from "../../data/esindused.json";
import { useState } from "react";

function MuudaEsindus() {
  const { index } = useParams();
  const [esindused, setEsindused] = useState(esindusedFailist[index]);
  const suuna = useNavigate();

  function muuda() {
    if (!esindused.keskus || !esindused.aadress || !esindused.tel) {
      alert("Ei saa olla tühi");
      return;
    }
    esindusedFailist[index] = esindused;
    suuna("/halda-esindused");
  }
  return (
    <div>
      <div>{JSON.stringify(esindused)}</div>
      <label>Keskus</label>
      <input
        onChange={(e) => setEsindused({ ...esindused, keskus: e.target.value })}
        defaultValue={esindused.keskus}
        type="text"
      />
      <br />
      <label>Aadress</label>
      <input
        onChange={(e) =>
          setEsindused({ ...esindused, aadress: e.target.value })
        }
        defaultValue={esindused.aadress}
        type="text"
      />
      <br />
      <label>Telefon</label>
      <input
        onChange={(e) => setEsindused({ ...esindused, tel: e.target.value })}
        defaultValue={esindused.tel}
        type="text"
      />
      <br />
      <button onClick={muuda}>Muuda</button>
    </div>
  );
}

export default MuudaEsindus;
