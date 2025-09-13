import { useState } from "react";

function Tooted() {
  // loome "originaal" massiivi mida ei muuda
  const originaalTooted = [
    "Coca-Cola",
    "Pepsi",
    "Fanta",
    "Sprite",
    "Mountain Dew",
    "Dr Pepper",
    "7 Up",
    "Mirinda",
    "Root Beer",
    "Ginger Ale",
    "Whiskey",
  ];
  // useState  et muutustel re renderdada,
  const [tooted, setTooted] = useState(originaalTooted);
  // funktsioon mis sorteerib tähestiku järjekorras, loome "pealiskaudse koopia originaal massiivist"
  // kasutame sort meetodit mis võrdleb callback funktsiooni alusel

  // sortimis funktsioon
  function sortBy(compareFn) {
    setTooted([...originaalTooted].sort(compareFn));
  }
  // filtreerimis funktsioon
  function filterBy(compareFn) {
    setTooted(originaalTooted.filter(compareFn));
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

      {tooted.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}

export default Tooted;
