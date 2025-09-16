import { useState } from "react";
import hinnadFailist from "../../data/hinnad.json";

function Hinnad() {
  const [hinnad, setHinnad] = useState(hinnadFailist);

  function sorteeriKasvavalt() {
    hinnad.sort((a, b) => a.arv - b.arv);
    setHinnad(hinnad.slice());

    // const vastus2 = hinnad.toSorted((a, b) => a - b);
    // setHinnad(vastus2);
  }

  function sorteeriKavanevalt() {
    // hinnad.sort((a, b) => a - b);
    // setHinnad(hinnad.slice());

    const vastus2 = hinnad.toSorted((a, b) => b.arv - a.arv);
    setHinnad(vastus2);
  }

  function filtreeriSuuremadKui10() {
    const vastus = hinnad.filter((item) => item.arv > 10);
    setHinnad(vastus);
  }
  function filtreeriVaiksemadKui100() {
    const vastus = hinnad.filter((item) => item.arv < 100);
    setHinnad(vastus);
  }
  return (
    <div>
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriKavanevalt}>Sorteeri kahanevalt</button>
      <button onClick={filtreeriSuuremadKui10}>Suuremad kui 10</button>
      <button onClick={filtreeriVaiksemadKui100}>Viksemad kui 100</button>

      {hinnad.map((item) => (
        <div key={item.arv}>{item.arv}</div>
      ))}
    </div>
  );
}

export default Hinnad;
