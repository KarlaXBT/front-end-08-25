import { useState } from "react";

function Tootajad() {
  const originaalTootajad = [
    "Charlie",
    "Fiona",
    "Julia",
    "Diana",
    "Bob",
    "George",
    "Alice",
    "Hannah",
    "Ethan",
    "Mark",
    "Ivan",
  ];
  const [tootajad, setTootajad] = useState(originaalTootajad);

  function sorteeriAZ() {
    setTootajad([...originaalTootajad].sort((a, b) => a.localeCompare(b)));
  }

  function sorteeriZA() {
    setTootajad([...originaalTootajad].sort((a, b) => b.localeCompare(a)));
  }

  function tahedKasvavalt() {
    setTootajad([...originaalTootajad].sort((a, b) => a.length - b.length));
  }
  function tahedKahanevalt() {
    setTootajad([...originaalTootajad].sort((a, b) => b.length - a.length));
  }

  function teineTahtAZ() {
    setTootajad(
      [...originaalTootajad].sort((a, b) => a[1].localeCompare(b[1]))
    );
  }

  function kolmeTahelised() {
    setTootajad(originaalTootajad.filter((item) => item.length === 3));
  }

  function rohkemKuiViis() {
    setTootajad(originaalTootajad.filter((item) => item.length > 5));
  }

  function algabMTahega() {
    setTootajad(
      originaalTootajad.filter((item) => item[0].toUpperCase() === "M")
    );
  }

  function neljasTahtI() {
    setTootajad(
      originaalTootajad.filter((item) => item.length > 3 && item[3] === "i")
    );
  }

  function sisaldabAI() {
    setTootajad(originaalTootajad.filter((item) => item.includes("ia")));
  }

  function paarisArvTahti() {
    setTootajad(originaalTootajad.filter((item) => item.length % 2 === 0));
  }

  return (
    <div>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={tahedKasvavalt}>Tähed kasvavalt</button>
      <button onClick={tahedKahanevalt}>Tähed kahanevalt</button>
      <button onClick={teineTahtAZ}>Teine täht AZ</button>
      <button onClick={kolmeTahelised}>Kolme tähelised</button>
      <button onClick={rohkemKuiViis}>Rohkem kui viis tähte</button>
      <button onClick={algabMTahega}>Algab M-ga</button>
      <button onClick={neljasTahtI}>Neljas täht i</button>
      <button onClick={sisaldabAI}>Sisaldab ia</button>
      <button onClick={paarisArvTahti}>Paarisarv tähti</button>
      {tootajad.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}

export default Tootajad;
