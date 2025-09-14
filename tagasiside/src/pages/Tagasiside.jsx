import React, { useState } from "react";

function Tagasiside() {
  const [tagasisided, setTagasisided] = useState([
    "Oli hea",
    "Huvitav",
    "Teistsugune",
    "Põnev",
  ]);
  return (
    <div>
      {tagasisided.map((i) => (
        <div>{i}</div>
      ))}
    </div>
  );
}

export default Tagasiside;
