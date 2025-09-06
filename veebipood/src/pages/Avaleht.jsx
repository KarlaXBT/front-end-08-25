import { useState } from "react";
import syda from "../assets/react.svg";

function Avaleht() {
  const [laigitud, setLaigitud] = useState(true);
  const [kogus, setKogus] = useState(0);
  const [sonum, setSonum] = useState("Muuda kogust!");

  console.log(kogus);

  function nulli() {
    // kogus = 0;
    setKogus(0);
    setSonum("Kogus nullitud");
  }

  function vahenda() {
    setKogus(kogus - 1);
    // kogus = kogus - 1;
    setSonum("Kogus vähendatud");
  }
  function suurenda() {
    setKogus(kogus + 1);
    // kogus = kogus + 1;
    setSonum("Kogus suurendatud");
  }
  return (
    <div>
      {laigitud === true ? (
        <img src={syda} alt="Laigitud süda" />
      ) : (
        <img src="mittelaigitud.svg" alt="Mittelaigitud süda" />
      )}
      <button onClick={() => setLaigitud(!laigitud)}>Muuda laik-i</button>
      <br /> <br />
      <div>{sonum}</div>
      {kogus > 0 && <button onClick={() => nulli()}>Nulli kogus</button>}
      <button disabled={kogus === 0} onClick={vahenda}>
        -
      </button>
      <span>{kogus}</span>
      <button onClick={() => suurenda()}>+</button>
    </div>
  );
}

export default Avaleht;
