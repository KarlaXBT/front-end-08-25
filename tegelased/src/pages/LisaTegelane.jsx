import React from "react";
import { useState, useRef } from "react";

function LisaTegelane() {
  const [message, setMessage] = useState("");
  const nimiRef = useRef(null);

  function lisaUusTegelane() {
    if (nimiRef.current.value.trim() === "") {
      setMessage("Tühja nimega ei saa sisestada");
    } else {
      setMessage("Tegelane lisatud");
    }
    nimiRef.current.value = "";
  }
  return (
    <div>
      <div>{message}</div>
      <label htmlFor="tegelane">Tegelase Nimi</label>
      <input id="tegelane" type="text" ref={nimiRef} />
      <button onClick={() => lisaUusTegelane()}>Lisa uus</button>
    </div>
  );
}

export default LisaTegelane;
