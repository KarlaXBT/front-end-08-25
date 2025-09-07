import React from "react";
import { useState } from "react";

function LisaTegelane() {
  const [message, setMessage] = useState("");
  return (
    <div>
      <div>{message}</div>
      <label htmlFor="tegelane">Tegelase Nimi</label>
      <input id="tegelane" type="text" />
      <button onClick={() => setMessage("Tegelane lisatud!")}>Lisa uus</button>
    </div>
  );
}

export default LisaTegelane;
