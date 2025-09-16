import { useRef, useState } from "react";
import hinnadFailist from "../../data/hinnad.json";

function HaldaHinnad() {
  const [hinnad, setHinnad] = useState(hinnadFailist);
  const hindRef = useRef();
  const sonaRef = useRef();

  function sisesta() {
    hinnadFailist.push({
      arv: hindRef.current.value,
      sonana: sonaRef.current.value,
    });
    setHinnad([...hinnadFailist]);
  }

  function kustuta(index) {
    hinnadFailist.splice(index, 1);
    // setAutod(autod.slice())
    setHinnad([...hinnadFailist]);
  }
  return (
    <div>
      <label htmlFor="">Hind</label>
      <br />
      <input ref={hindRef} type="number" />
      <br />
      <label htmlFor="">Hind sonana</label>
      <br />
      <input ref={sonaRef} type="text" />
      <br />
      <button onClick={sisesta}>Sisesta</button>

      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Järjekorranumber</th>
            <th>Hind</th>
            <th>Hind sõnana</th>

            <th>Kustuta nupp</th>
          </tr>
        </thead>
        <tbody>
          {hinnad.map((hind, index) => (
            <tr key={hind.arv}>
              <td>{index}</td>
              <td>{index + 1}</td>
              <td>{hind.arv}</td>
              <td>{hind.sonana}</td>
              <td>
                <button onClick={() => kustuta(index)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HaldaHinnad;
