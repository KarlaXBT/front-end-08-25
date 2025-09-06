import { useState } from "react";

function Seaded() {
  const [keel, setKeel] = useState("et");
  return (
    <div>
      {/* <div>Hetkel aktiivne keel: {keel} </div> */}
      <button onClick={() => setKeel("et")}>Eesti</button>
      <button onClick={() => setKeel("en")}>English</button>
      <button onClick={() => setKeel("es")}>Espanol</button>
      <button onClick={() => setKeel("ru")}>Pycckij</button>
      <br />
      <br />
      {keel === "et" && <div>Leht on eesti keelne</div>}
      {keel === "en" && <div>Page is in English</div>}
      {keel === "es" && <div>La pagina esta en espanol</div>}
      {keel === "ru" && <div>............</div>}
      {keel !== "et" && (
        <div>
          <i>Other languages than Estonian are not ready</i>
        </div>
      )}
    </div>
  );
}

export default Seaded;
