import { Link, useParams } from "react-router-dom";
import tootedFailist from "../../data/tooted.json";
import { useState } from "react";

function MuudaToode() {
  const { index } = useParams();
  const [leitudToode, setLeitudToode] = useState(tootedFailist[index]);

  function muuda() {
    if (leitudToode.nimi === "") {
      alert("Sisend ei saa olla tühi");
      return;
    }

    tootedFailist[index] = leitudToode;
    alert("Toode muudetuds");
  }
  return (
    <div>
      <div>{JSON.stringify(leitudToode)}</div>
      <h2>Muuda Tooteid:</h2>
      <label>Nimi</label>
      <input
        onChange={(e) =>
          setLeitudToode({ ...leitudToode, nimi: e.target.value })
        }
        defaultValue={leitudToode.nimi}
        type="text"
      />
      <br />
      <label>Kogus</label>
      <input
        onChange={(e) =>
          setLeitudToode({ ...leitudToode, kogus: Number(e.target.value) })
        }
        defaultValue={leitudToode.kogus}
        type="text"
      />
      <br />
      <label>Hind</label>
      <input
        onChange={(e) =>
          setLeitudToode({ ...leitudToode, hind: Number(e.target.value) })
        }
        defaultValue={leitudToode.hind}
        type="text"
      />
      <br />
      <label>Ostetud</label>
      <input
        onChange={(e) =>
          setLeitudToode({ ...leitudToode, ostetud: e.target.checked })
        }
        defaultChecked={leitudToode.ostetud}
        type="checkbox"
      />
      <br />
      <button onClick={muuda}>Muuda </button>

      <Link to="/halda-tooted/">
        <button> Tagasi</button>
      </Link>
    </div>
  );
}

export default MuudaToode;
