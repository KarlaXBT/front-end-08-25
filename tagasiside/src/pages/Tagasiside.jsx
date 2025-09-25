import React, { useState } from "react";

function Tagasiside() {
  const [tagasisided, setTagasisided] = useState([
    "Oli hea",
    "Huvitav",
    "Teistsugune",
    "Põnev",
  ]);

  const [lisaUus, setLisaUus] = useState("");

  function kustuta(index) {
    const koopia = [...tagasisided];
    koopia.splice(index, 1);
    setTagasisided(koopia);
  }

  function lisa() {
    if (!lisaUus.trim()) {
      alert("Tühjust ei saa lisada");
      return;
    }

    const koopia = [...tagasisided];
    koopia.push(lisaUus);
    setTagasisided(koopia);
    setLisaUus("");
  }

  return (
    <div>
      {tagasisided.map((i, index) => (
        <div key={index}>
          {i}
          <button onClick={() => kustuta(index)}>X</button>
        </div>
      ))}

      <label>Lisa uus tagasiside: </label>
      <input
        onChange={(e) => setLisaUus(e.target.value)}
        value={lisaUus}
        type="text"
      />
      <button onClick={lisa}>Sisesta</button>
      <br />
      {JSON.stringify(lisaUus)}
      {JSON.stringify(tagasisided)}
    </div>
  );
}

export default Tagasiside;
