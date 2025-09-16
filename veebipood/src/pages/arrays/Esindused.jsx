import { useState } from "react";
import keskusedFailist from "../../data/esindused.json";

function Esindused() {
  const [linn, setLinn] = useState("Tallinn");
  const [keskused, setKeskused] = useState(keskusedFailist);

  function sorteeriAZ() {
    keskused.sort((a, b) => a.keskus.localeCompare(b.keskus));
    setKeskused([...keskused]);
  }

  function sorteeriZA() {
    keskused.sort((a, b) => b.keskus.localeCompare(a.keskus));
    setKeskused([...keskused]);
  }
  return (
    <div>
      <button
        className={linn === "Tallinn" ? "esindus-aktiivne" : undefined}
        onClick={() => setLinn("Tallinn")}
      >
        Tallinn (6)
      </button>
      <button
        className={linn === "Tartu" ? "esindus-aktiivne" : undefined}
        onClick={() => setLinn("Tartu")}
      >
        Tartu (2)
      </button>
      <button
        className={linn === "Narva" ? "esindus-aktiivne" : undefined}
        onClick={() => setLinn("Narva")}
      >
        Narva (2)
      </button>
      <button
        className={linn === "Pärnu" ? "esindus-aktiivne" : undefined}
        onClick={() => setLinn("Pärnu")}
      >
        Pärnu (1)
      </button>
      <br />
      <br />
      {linn === "Tallinn" && (
        <>
          <button onClick={sorteeriAZ}>SorteeriAZ</button>
          <button onClick={sorteeriZA}>SorteeriZA</button>
          {keskused.map((item) => (
            <div key={item.keskus}>{item.keskus}</div>
          ))}
        </>
      )}
      {linn === "Tartu" && (
        <>
          <div>Lõunakeskus</div>
          <div>Raatuse</div>
        </>
      )}
      {linn === "Narva" && (
        <>
          <div>Fama</div>
        </>
      )}
      {linn === "Pärnu" && (
        <>
          <div>Port Artur 2</div>
        </>
      )}
    </div>
  );
}

export default Esindused;
