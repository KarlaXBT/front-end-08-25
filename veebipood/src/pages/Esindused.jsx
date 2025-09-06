import { useState } from "react";

function Esindused() {
  const [linn, setLinn] = useState("Tallinn");
  return (
    <div>
      <button onClick={() => setLinn("Tallinn")}>Tallinn (6)</button>
      <button onClick={() => setLinn("Tartu")}>Tartu (2)</button>
      <button onClick={() => setLinn("Narva")}>Narva (2)</button>
      <button onClick={() => setLinn("Pärnu")}>Pärnu (1)</button>
      <br />
      <br />
      {linn === "Tallinn" && (
        <>
          <div>Ülemiste</div>
          <div>Kristiine</div>
          <div>Rocca al Mare</div>
          <div>Vesse</div>
          <div>Järveotsa</div>
          <div>Viru Keskus</div>
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
