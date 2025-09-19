import { useState } from "react";
import tootedFailist from "../../data/tooted.json";

function HaldaTooted() {
  const [tooted, setTooted] = useState(tootedFailist);

  const [uusToode, setUusToode] = useState({
    nimi: "",
    kogus: "",
    hind: "",
    ostetud: false,
  });

  function kustuta(i) {
    const uuendatudTooted = [...tooted];
    uuendatudTooted.splice(i, 1);
    setTooted(uuendatudTooted);
  }

  function lisa() {
    const uuendatudTooted = [...tooted];
    uuendatudTooted.push({
      ...uusToode,
      kogus: Number(uusToode.kogus),
      hind: Number(uusToode.hind),
    });
    setTooted(uuendatudTooted);
    setUusToode({ nimi: "", kogus: "", hind: "" });
  }
  return (
    <>
      <h2>Tooted</h2>
      <table>
        <thead>
          <tr>
            <th>Nimi</th>
            <th>Kogus</th>
            <th>Hind</th>
            <th>Ostukorvis</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {tooted.map((item, index) => (
            <tr key={index}>
              <td> {item.nimi} </td>
              <td> {item.kogus} </td>
              <td> {item.hind} </td>

              <td> {item.ostetud ? "Ostetud" : "Ostmata"} </td>
              <td>
                <button onClick={() => kustuta(index)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Lisa uus toode</h2>
      <label htmlFor=""> Nimi</label>
      <input
        onChange={(e) => setUusToode({ ...uusToode, nimi: e.target.value })}
        value={uusToode.nimi}
        type="text"
      />
      <br />
      <label htmlFor=""> Kogus</label>
      <input
        onChange={(e) => setUusToode({ ...uusToode, kogus: e.target.value })}
        value={uusToode.kogus}
        type="number"
      />
      <br />
      <label htmlFor=""> Hind</label>
      <input
        onChange={(e) => setUusToode({ ...uusToode, hind: e.target.value })}
        value={uusToode.hind}
        type="number"
      />
      <br />
      <label htmlFor=""> Ostetud</label>
      <input
        onChange={(e) =>
          setUusToode({ ...uusToode, ostetud: e.target.checked })
        }
        checked={uusToode.ostetud}
        type="checkbox"
      />
      <br />
      <button onClick={lisa}>Lisa toode</button>
    </>
  );
}

export default HaldaTooted;
