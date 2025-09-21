import { useState } from "react";
import autodAndmeBaasist from "../../data/autod.json";
import { Link } from "react-router-dom";

function Autod() {
  const [autod, setAutod] = useState(autodAndmeBaasist);

  function sorteeriAZ() {
    const vastus = autodAndmeBaasist.toSorted((a, b) =>
      a.nimi.localeCompare(b.nimi)
    );
    setAutod(vastus);
  }
  function sorteeriZA() {
    const vastus = autodAndmeBaasist.toSorted((a, b) =>
      b.nimi.localeCompare(a.nimi)
    );
    setAutod(vastus);
  }
  function sorteeriTahedKasvav() {
    const vastus = autodAndmeBaasist.toSorted(
      (a, b) => a.nimi.length - b.nimi.length
    );
    setAutod(vastus);
  }
  function sorteeriTahedKahanev() {
    const vastus = autodAndmeBaasist.toSorted(
      (a, b) => b.nimi.length - a.nimi.length
    );
    setAutod(vastus);
  }
  function sorteeriKolmasTahtAZ() {
    const vastus = autodAndmeBaasist.toSorted((a, b) =>
      a.nimi[2].localeCompare(b.nimi[2])
    );
    setAutod(vastus);
  }

  function sorteeriHindKasvav() {
    autod.sort((a, b) => a.hind - b.hind);
    setAutod(autod.slice());
  }
  function sorteeriHindKahanev() {
    autod.sort((a, b) => b.hind - a.hind);
    setAutod(autod.slice());
  }

  function filtreeriIgaloppevad() {
    const filter = autodAndmeBaasist.filter((item) => item.nimi.endsWith("i"));
    setAutod(filter);
  }
  function filtreeri7Tahelised() {
    const filter = autodAndmeBaasist.filter((item) => item.nimi.length === 7);
    setAutod(filter);
  }
  function filtreeriRohkemKui6Tahelised() {
    const filter = autodAndmeBaasist.filter((item) => item.nimi.length > 6);
    setAutod(filter);
  }

  return (
    <div>
      <button onClick={sorteeriAZ}>SorteeriAZ</button>
      <button onClick={sorteeriZA}>SorteeriZA</button>
      <button onClick={sorteeriTahedKasvav}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriTahedKahanev}>Sorteeri kahanevalt</button>
      <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht AZ</button>
      <button onClick={sorteeriHindKasvav}>Sorteeri hind kasvav</button>
      <button onClick={sorteeriHindKahanev}>Sorteeri hind kahanev</button>

      <button onClick={filtreeriIgaloppevad}>Jäta alles i-ga lõppevad</button>
      <button onClick={filtreeri7Tahelised}>Täpselt 7</button>
      <button onClick={filtreeriRohkemKui6Tahelised}>6+ tähte</button>
      {autod.map((item) => (
        <div key={item.nimi}>
          {item.nimi}
          {/* kui kaldkriipsu pole siis liidab praeguseöe URL-le juurde
localhost:5072/autod  + auto  =  localhost:5072/autod/auto tuleb notfound leht sest
sellist URL ei ole */}
          <Link to={"/auto/" + item.nimi}>
            <button>Vt lähemalt</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Autod;
