import { useState } from "react";

const autodAndmeBaasist = [
  "Audi",
  "BMW",
  "Mercedes",
  "Toyota",
  "Honda",
  "Ford",
  "Chevrolet",
  "Volkswagen",
  "Hyundai",
  "Kia",
  "Ferrari",
];

function Autod() {
  const [autod, setAutod] = useState(autodAndmeBaasist);

  function sorteeriAZ() {
    const vastus = autodAndmeBaasist.toSorted((a, b) => a.localeCompare(b));
    setAutod(vastus);
  }
  function sorteeriZA() {
    const vastus = autodAndmeBaasist.toSorted((a, b) => b.localeCompare(a));
    setAutod(vastus);
  }
  function sorteeriTahedKasvav() {
    const vastus = autodAndmeBaasist.toSorted((a, b) => a.length - b.length);
    setAutod(vastus);
  }
  function sorteeriTahedKahanev() {
    const vastus = autodAndmeBaasist.toSorted((a, b) => b.length - a.length);
    setAutod(vastus);
  }
  function sorteeriKolmasTahtAZ() {
    const vastus = autodAndmeBaasist.toSorted((a, b) =>
      a[2].localeCompare(b[2])
    );
    setAutod(vastus);
  }

  function filtreeriIgaloppevad() {
    const filter = autodAndmeBaasist.filter((item) => item.endsWith("i"));
    setAutod(filter);
  }
  function filtreeri7Tahelised() {
    const filter = autodAndmeBaasist.filter((item) => item.length === 7);
    setAutod(filter);
  }
  function filtreeriRohkemKui6Tahelised() {
    const filter = autodAndmeBaasist.filter((item) => item.length > 6);
    setAutod(filter);
  }
  return (
    <div>
      <button onClick={sorteeriAZ}>SorteeriAZ</button>
      <button onClick={sorteeriZA}>SorteeriZA</button>
      <button onClick={sorteeriTahedKasvav}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriTahedKahanev}>Sorteeri kahanevalt</button>
      <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht AZ</button>
      <button onClick={filtreeriIgaloppevad}>Jäta alles i-ga lõppevad</button>
      <button onClick={filtreeri7Tahelised}>Täpselt 7</button>
      <button onClick={filtreeriRohkemKui6Tahelised}>6+ tähte</button>
      {autod.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}

export default Autod;
