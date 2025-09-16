import { useState } from "react";

function Ostukorv() {
  const [tooted, setTooted] = useState(["Coca-cola", "Fanta", "Sprite"]);

  function kustuta(index) {
    tooted.splice(index, 1);
    setTooted([...tooted]);
  }
  return (
    <div>
      <div>Ostukorvis on {tooted.length} toodet</div>
      <button onClick={() => setTooted([])}>Tühjenda</button>
      <br />
      <br />
      {/* <div>Coca-cola</div>
      <div>Fanta</div>
      <div>Sprite</div> */}
      <div>
        {tooted.map((toode, index) => (
          <div key={index}>
            {toode}
            <button onClick={() => kustuta(index)}> X</button>
          </div>
        ))}
      </div>
      <br />
      <br />
      <div>Ostukorvi kogusumma: xx €</div>
    </div>
  );
}

export default Ostukorv;
