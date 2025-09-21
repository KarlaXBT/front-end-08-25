import { useState } from "react";
import tootajadFailist from "../../data/tootajad.json";
import { Link } from "react-router-dom";

function Tootajad() {
  // const tootajadFailist = [
  //   "Charlie",
  //   "Fiona",
  //   "Julia",
  //   "Diana",
  //   "Bob",
  //   "George",
  //   "Alice",
  //   "Hannah",
  //   "Ethan",
  //   "Mark",
  //   "Ivan",
  // ];
  const [tootajad, setTootajad] = useState(tootajadFailist);

  function sorteeriAZ() {
    setTootajad(
      [...tootajadFailist].sort((a, b) => a.eesnimi.localeCompare(b.eesnimi))
    );
  }

  function sorteeriZA() {
    setTootajad(
      [...tootajadFailist].sort((a, b) => b.eesnimi.localeCompare(a.eesnimi))
    );
  }

  function tahedKasvavalt() {
    setTootajad(
      [...tootajadFailist].sort((a, b) => a.eesnimi.length - b.eesnimi.length)
    );
  }
  function tahedKahanevalt() {
    setTootajad(
      [...tootajadFailist].sort((a, b) => b.eesnimi.length - a.eesnimi.length)
    );
  }

  function teineTahtAZ() {
    setTootajad(
      [...tootajadFailist].sort((a, b) =>
        a.eesnimi[1].localeCompare(b.eesnimi[1])
      )
    );
  }

  function kolmeTahelised() {
    setTootajad(tootajadFailist.filter((item) => item.eesnimi.length === 3));
  }

  function rohkemKuiViis() {
    setTootajad(tootajadFailist.filter((item) => item.eesnimi.length > 5));
  }

  function algabMTahega() {
    setTootajad(
      tootajadFailist.filter((item) => item.eesnimi[0].toUpperCase() === "M")
    );
  }

  function neljasTahtI() {
    setTootajad(
      tootajadFailist.filter(
        (item) => item.eenimi.length > 3 && item.eenimi[3] === "i"
      )
    );
  }

  function sisaldabAI() {
    setTootajad(tootajadFailist.filter((item) => item.eesnimi.includes("ia")));
  }

  function paarisArvTahti() {
    setTootajad(
      tootajadFailist.filter((item) => item.eesnimi.length % 2 === 0)
    );
  }

  return (
    <div>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={tahedKasvavalt}>Tähed kasvavalt</button>
      <button onClick={tahedKahanevalt}>Tähed kahanevalt</button>
      <button onClick={teineTahtAZ}>Teine täht AZ</button>
      <button onClick={kolmeTahelised}>Kolme tähelised</button>
      <button onClick={rohkemKuiViis}>Rohkem kui viis tähte</button>
      <button onClick={algabMTahega}>Algab M-ga</button>
      <button onClick={neljasTahtI}>Neljas täht i</button>
      <button onClick={sisaldabAI}>Sisaldab ia</button>
      <button onClick={paarisArvTahti}>Paarisarv tähti</button>
      {tootajad.map((item, index) => (
        <div key={item.eesnimi}>
          {item.eesnimi}
          <Link to={"/tootaja/" + index}>
            <button>Vaata lähemalt</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Tootajad;
