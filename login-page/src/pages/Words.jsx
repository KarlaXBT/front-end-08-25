import React, { useState } from "react";

function Words() {
  const words = ["spray", "elite", "exuberant", "destruction", "present"];
  const [sonad, setSonad] = useState(words);

  return (
    <div>
      <button onClick={() => setSonad([])}>Kustuta sõnad</button>
      <button onClick={() => setSonad(words)}>Taasta sõnad</button>

      {sonad.map((i) => (
        <div>{i}</div>
      ))}
      <div>Hetkel kuvame: {sonad.length} sõna</div>
      {sonad.length === 0 && <div>Hetkel pole ühtegi sõna mida kuvada</div>}
    </div>
  );
}

export default Words;
