import { useState } from "react";
import tootedFailist from "../../data/tooted.json";
import { Link } from "react-router-dom";

function Tooted() {
  // useState  et muutustel re renderdada,
  const [tooted, setTooted] = useState(tootedFailist);
  // funktsioon mis sorteerib tähestiku järjekorras, loome "pealiskaudse koopia originaal massiivist"
  // kasutame sort meetodit mis võrdleb callback funktsiooni alusel

  // sortimis funktsioon
  function sortBy(compareFn) {
    setTooted([...tootedFailist].sort(compareFn));
  }
  // filtreerimis funktsioon
  function filterBy(compareFn) {
    setTooted(tootedFailist.filter(compareFn));
  }
  return (
    <div>
      <button onClick={() => sortBy((a, b) => a.localeCompare(b))}>
        SorteeriAZ
      </button>
      <button onClick={() => sortBy((a, b) => b.localeCompare(a))}>
        SorteeriZA
      </button>
      <button onClick={() => sortBy((a, b) => a.length - b.length)}>
        Sõna pikkus kasvav
      </button>
      <button onClick={() => sortBy((a, b) => b.length - a.length)}>
        Sõna pikkus ahanev
      </button>
      <button onClick={() => sortBy((a, b) => a[1].localeCompare(b[1]))}>
        Teine täht AZ
      </button>
      <button onClick={() => filterBy((i) => i.length <= 6)}>
        Kuni 6 tähelised
      </button>
      <button onClick={() => filterBy((i) => i.length === 6)}>
        Täpselt 6 tähelised
      </button>
      <button onClick={() => filterBy((i) => i.slice(-1) === "a")}>
        Lõppeb tähega a
      </button>
      <button onClick={() => filterBy((i) => i.slice(-1) === "y")}>
        Lõppeb tähega y
      </button>
      <button
        onClick={() => filterBy((i) => i.replace(/\s/g, "").length % 2 === 0)}
      >
        Paaris arv tähti
      </button>

      {tooted.map((item, index) => (
        <div key={item.nimi}>
          {item.nimi}
          <Link to={"/toode/" + index}>
            <button>Vt lähemalt</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Tooted;
