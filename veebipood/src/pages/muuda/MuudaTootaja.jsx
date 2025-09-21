import { Link, useParams } from "react-router-dom";
import muudaTootajad from "../../data/tootajad.json";
import { useState } from "react";

function MuudaTootaja() {
  const { index } = useParams();
  const [match, setTootajad] = useState(muudaTootajad[index]);

  function muuda() {
    if (match.eesnimi === "") {
      alert("Tühja ei saa sisestada");
      return;
    }

    muudaTootajad[index] = match;
    alert("Edukalt muudetud");
  }

  return (
    <div>
      <div>{JSON.stringify(match)}</div>
      <label>Eesnimi</label>
      <input
        onChange={(e) => setTootajad({ ...match, eesnimi: e.target.value })}
        defaultValue={match.eesnimi}
        type="text"
      />
      <br />
      <label>Perenimi</label>
      <input
        onChange={(e) => setTootajad({ ...match, perenimi: e.target.value })}
        defaultValue={match.perenimi}
        type="text"
      />
      <br />
      <label>Amet</label>
      <input
        onChange={(e) => setTootajad({ ...match, amet: e.target.value })}
        defaultValue={match.amet}
        type="text"
      />
      <br />
      <label>Osakond</label>
      <input
        onChange={(e) => setTootajad({ ...match, osakond: e.target.value })}
        defaultValue={match.osakond}
        type="text"
      />
      <br />
      <label>Palk</label>
      <input
        onChange={(e) =>
          setTootajad({ ...match, palk: Number(e.target.value) })
        }
        defaultValue={match.palk}
        type="number"
      />
      <br />
      <label>Töötav</label>
      <input
        onChange={(e) => setTootajad({ ...match, tootav: e.target.checked })}
        defaultChecked={match.tootav}
        type="checkbox"
      />
      <br />
      <button onClick={muuda}>Muuda</button>

      <Link to="/halda-tootajad">
        <button>Tagasi</button>
      </Link>
    </div>
  );
}

export default MuudaTootaja;
