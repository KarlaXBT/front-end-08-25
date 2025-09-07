import React, { useState } from "react";

function Kontakt() {
  const [n2itaTelKristiine, muudaN2itaTelKristiine] = useState("");
  const [n2itaTelYlemiste, muudaN2itaTelYlemiste] = useState("");
  const [n2itaTelTasku, muudaN2itaTelTasku] = useState("");
  return (
    // <div>
    //   <div>See on kontaktide leht, nähtav localhost:3000/kontakt aadressil</div>
    //   <div>Võtke meiega ühendust:</div>
    //   <br />
    //   <div>Kristiine keskus</div>
    //   <div>+372683694</div>
    //   <div>Endla 45</div>
    //   <br />
    //   <div>Kristiine keskus</div>
    //   <div>+372683694</div>
    //   <div>Endla 45</div>
    //   <br />
    //   <div>Kristiine keskus</div>
    //   <div>+372683694</div>
    //   <div>Endla 45</div>
    // </div>

    <div>
      <div>See on kontaktide leht, nähtav localhost:3000/kontakt aadressil</div>
      <div>Võtke meiega ühendust:</div>
      <br />
      <div onClick={() => muudaN2itaTelKristiine(!n2itaTelKristiine)}>
        Kristiine keskus
      </div>
      {n2itaTelKristiine && <div>+372683694</div>}
      <div>Endla 45</div>
      <br />
      <div onClick={() => muudaN2itaTelYlemiste(!n2itaTelYlemiste)}>
        Ülemiste keskus
      </div>
      {n2itaTelYlemiste && <div>+372683694</div>}
      <div>Suur-Sõjamäe 4</div>
      <br />
      <div onClick={() => muudaN2itaTelTasku(!n2itaTelTasku)}>Tasku Keskus</div>
      {n2itaTelTasku && <div>+372683694</div>}
      <div>Turu 2</div>
    </div>
  );
}

export default Kontakt;
