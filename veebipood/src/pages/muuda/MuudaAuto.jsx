import { useNavigate, useParams } from "react-router-dom";
import autodFailist from "../../data/autod.json";
import { useState } from "react";

function MuudaAuto() {
  const { index } = useParams();
  const [leitud, setAuto] = useState(autodFailist[index]);
  const suuna = useNavigate();

  function muuda() {
    if (leitud.nimi === "") {
      alert("Tühja nimega ei saa sisestada");
      return;
    }

    autodFailist[index] = leitud;

    suuna("/halda-autod");
  }

  return (
    <div>
      <div>{JSON.stringify(leitud)}</div>
      <label> Nimi</label>
      <input
        onChange={(e) => setAuto({ ...leitud, nimi: e.target.value })}
        defaultValue={leitud.nimi}
        type="text"
      />
      <br />
      <label> Hind</label>
      <input
        onChange={(e) => setAuto({ ...leitud, hind: Number(e.target.value) })}
        defaultValue={leitud.hind}
        type="number"
      />
      <br />
      <label> Pilt</label>
      <input
        onChange={(e) => setAuto({ ...leitud, pilt: e.target.value })}
        defaultValue={leitud.pilt}
        type="text"
      />
      <br />
      <label> Aktiivne</label>
      <input
        onChange={(e) => setAuto({ ...leitud, aktiivne: e.target.checkbox })}
        defaultChecked={leitud.aktiivne}
        type="checkbox"
      />
      <br />
      {/* <Link to="/halda-autod"> */}
      <button onClick={muuda}>Muuda</button>
      {/* </Link> */}
    </div>
  );
}

export default MuudaAuto;
