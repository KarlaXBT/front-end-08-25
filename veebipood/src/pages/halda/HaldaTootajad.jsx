import { useState } from "react";

// import .json failist
import tootajadFailist from "../../data/tootajad.json";

function HaldaTootajad() {
  const [tootajad, setTootajad] = useState(tootajadFailist);

  const [uusTootaja, setUusTootaja] = useState({
    id: "",
    eesnimi: "",
    perenimi: "",
    amet: "",
    osakond: "",
    palk: "",
    tootav: false,
  });

  // sellega saame objektide võtmed returnib array
  const tootajadVotmed = Object.keys(tootajadFailist[0]);

  function kustuta(i) {
    // koopia, et referentsi uuendada
    const uusTootajad = [...tootajad];
    uusTootajad.splice(i, 1);
    setTootajad(uusTootajad);
  }

  function lisa() {
    const tootajadKoopia = [...tootajad];
    tootajadKoopia.push(uusTootaja);
    setTootajad(tootajadKoopia);
    setUusTootaja({
      id: "",
      eesnimi: "",
      perenimi: "",
      amet: "",
      osakond: "",
      palk: "",
      tootav: false,
    });
  }
  return (
    <>
      <h1>Meie töötajad</h1>
      {/* tabel et state muutujast kuvada */}

      <table>
        <thead>
          <tr>
            {/* .map et need dünaamiliselt kuvada */}
            {tootajadVotmed.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* .map jälle et state muutujast kuvada tabelisse andmed */}
          {tootajad.map((item, index) => (
            <tr className={item.tootav ? "tootav" : "mitte-tootav"} key={index}>
              <td>{item.id}</td>
              <td>{item.eesnimi}</td>
              <td>{item.perenimi}</td>
              <td>{item.amet}</td>
              <td>{item.osakond}</td>
              <td>{item.palk}</td>
              <td>
                {/* saame muuta booleani */}
                <input
                  onChange={() => {
                    const koopia = [...tootajad];
                    koopia[index].tootav = !koopia[index].tootav;
                    setTootajad(koopia);
                  }}
                  checked={item.tootav}
                  type="checkbox"
                />
              </td>
              <td>
                <button onClick={() => kustuta(index)}> X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Lisa töötaja</h2>
      <label>Id</label>
      <br />
      <input
        onChange={(e) => setUusTootaja({ ...uusTootaja, id: e.target.value })}
        value={uusTootaja.id}
        type="number"
      />
      <br />
      <label>Eesnimi</label>
      <br />
      <input
        onChange={(e) =>
          setUusTootaja({ ...uusTootaja, eesnimi: e.target.value })
        }
        value={uusTootaja.eesnimi}
        type="text"
      />
      <br />
      <label>Perenimi</label>
      <br />
      <input
        onChange={(e) =>
          setUusTootaja({ ...uusTootaja, perenimi: e.target.value })
        }
        value={uusTootaja.perenimi}
        type="text"
      />
      <br />
      <label>Amet</label>
      <br />
      <input
        onChange={(e) => setUusTootaja({ ...uusTootaja, amet: e.target.value })}
        value={uusTootaja.amet}
        type="text"
      />
      <br />
      <label>Osakond</label>
      <br />
      <input
        onChange={(e) =>
          setUusTootaja({ ...uusTootaja, osakond: e.target.value })
        }
        value={uusTootaja.osakond}
        type="text"
      />
      <br />
      <label>Palk</label>
      <br />
      <input
        onChange={(e) => setUusTootaja({ ...uusTootaja, palk: e.target.value })}
        value={uusTootaja.palk}
        type="number"
      />
      <br />
      <label>Töötav</label>
      <br />
      <input
        onChange={(e) =>
          setUusTootaja({ ...uusTootaja, tootav: e.target.checked })
        }
        checked={uusTootaja.tootav}
        type="checkbox"
      />
      <br />
      <button onClick={lisa}>Lisa</button>
    </>
  );
}

export default HaldaTootajad;
