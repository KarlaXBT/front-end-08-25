import { useState } from "react";

function Hinnad() {
  const [hinnad, setHinnad] = useState([
    5, 12, 899, 20, 3000, 17, 9, 14, 123, 11,
  ]);

  function sorteeriKasvavalt() {
    hinnad.sort((a, b) => a - b);
    setHinnad(hinnad.slice());

    // const vastus2 = hinnad.toSorted((a, b) => a - b);
    // setHinnad(vastus2);
  }

  function sorteeriKavanevalt() {
    // hinnad.sort((a, b) => a - b);
    // setHinnad(hinnad.slice());

    const vastus2 = hinnad.toSorted((a, b) => b - a);
    setHinnad(vastus2);
  }

  function filtreeriSuuremadKui10() {
    const vastus = hinnad.filter((item) => item > 10);
    setHinnad(vastus);
  }
  function filtreeriVaiksemadKui100() {
    const vastus = hinnad.filter((item) => item < 100);
    setHinnad(vastus);
  }
  return (
    <div>
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriKavanevalt}>Sorteeri kahanevalt</button>
      <button onClick={filtreeriSuuremadKui10}>Suuremad kui 10</button>
      <button onClick={filtreeriVaiksemadKui100}>Viksemad kui 100</button>

      {hinnad.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}

export default Hinnad;
