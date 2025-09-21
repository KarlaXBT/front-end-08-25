import { useState, useRef } from "react";
import esindusedFailist from "../../data/esindused.json";
import { Link } from "react-router-dom";

function HaldaEsindused() {
  const [esindused, setEsindused] = useState(esindusedFailist);
  const keskusRef = useRef();
  const aadressRef = useRef();
  const telefonRef = useRef();

  function kustuta(index) {
    esindusedFailist.splice(index, 1);
    // setAutod(autod.slice())
    setEsindused([...esindusedFailist]);
  }

  function sisesta() {
    const uusEsindus = {
      keskus: keskusRef.current.value,
      aadress: aadressRef.current.value,
      tel: telefonRef.current.value,
    };
    esindusedFailist.push(uusEsindus);
    setEsindused([...esindusedFailist]);
  }
  return (
    <div>
      <label htmlFor="">Keskus</label>
      <br />
      <input ref={keskusRef} type="text" />
      <br />
      <label htmlFor="">Aadress</label>
      <br />
      <input ref={aadressRef} type="text" />
      <br />
      <label htmlFor="">Telefon</label>
      <br />
      <input ref={telefonRef} type="number" />
      <br />
      <button onClick={sisesta}>Sisesta</button>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Järjekorranumber</th>
            <th>Esindus</th>
            <th>Aadress</th>
            <th>Telefon</th>
            <th>Kustuta nupp</th>
            <th>Muuda nupp</th>
          </tr>
        </thead>
        <tbody>
          {esindused.map((esindus, index) => (
            <tr key={esindus.keskus}>
              <td>{index}</td>
              <td>{index + 1}</td>
              <td>{esindus.keskus}</td>
              <td>{esindus.aadress}</td>
              <td>{esindus.tel}</td>
              <td>
                <button onClick={() => kustuta(index)}>X</button>
              </td>
              <td>
                <Link to={"/muuda-esindused/" + index}>
                  <button>Muuda</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HaldaEsindused;
