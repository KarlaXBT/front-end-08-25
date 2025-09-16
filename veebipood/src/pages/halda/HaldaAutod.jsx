import { useState } from "react";
import autodAndmeBaasist from "../../data/autod.json";

function HaldaAutod() {
  // state tabeli jaoks
  const [autod, setAutod] = useState(autodAndmeBaasist);

  // state uue auto hoidmiseks
  const [uusAuto, setUusAuto] = useState({
    nimi: "",
    hind: "",
    aktiivne: false,
    pilt: "",
  });

  // Lisamise funktsioon
  function lisa() {
    // lisa "andmebaasi"
    autodAndmeBaasist.push(uusAuto);

    // uuenda state'i
    setAutod([...autodAndmeBaasist]);

    // puhasta inputid
    setUusAuto({
      nimi: "",
      hind: "",
      aktiivne: false,
      pilt: "",
    });
  }

  // Kustutamise funktsioon
  function kustuta(index) {
    // eemalda element "andmebaasist"
    autodAndmeBaasist.splice(index, 1);

    // uuenda state'i
    setAutod([...autodAndmeBaasist]);
  }

  return (
    <>
      <h2>Autode tabel</h2>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Nimi</th>
            <th>Hind</th>
            <th>Aktiivne</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {autod.map((item, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{item.nimi}</td>
              <td>{item.hind}</td>
              <td>{item.aktiivne ? "aktiivne" : "mitteaktiivne"}</td>
              <td>
                <button onClick={() => kustuta(index)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Lisa uus auto</h2>
      <div>Ajutine väljakuvamine: {JSON.stringify(uusAuto)}</div>

      <label>Nimi:</label>
      <input
        type="text"
        value={uusAuto.nimi}
        onChange={(e) => setUusAuto({ ...uusAuto, nimi: e.target.value })}
      />
      <br />

      <label>Hind:</label>
      <input
        type="number"
        value={uusAuto.hind}
        onChange={(e) =>
          setUusAuto({ ...uusAuto, hind: Number(e.target.value) })
        }
      />
      <br />

      <label>Aktiivne:</label>
      <input
        type="checkbox"
        checked={uusAuto.aktiivne}
        onChange={(e) => setUusAuto({ ...uusAuto, aktiivne: e.target.checked })}
      />
      <br />

      <label>Pilt:</label>
      <input
        type="text"
        value={uusAuto.pilt}
        onChange={(e) => setUusAuto({ ...uusAuto, pilt: e.target.value })}
      />
      <br />

      <button onClick={lisa}>Lisa auto</button>
    </>
  );
}

export default HaldaAutod;
