import React, { useState } from "react";

function Meist() {
  const [kontakt, n2itaKontakt] = useState("");
  const [valitud, setvalitud] = useState(null);

  function valiTootaja(item, index) {
    n2itaKontakt(item.telefon);
    setvalitud(index);
  }

  const tootajad = [
    {
      nimi: "arvo pärt",
      ala: "uudisklippide taustamuusika",
      telefon: "+37264094372",
      "": "",
    },
    {
      nimi: "kelly sildaru",
      ala: "püstolreporter",
      telefon: "+3726409437",
      "": "",
    },
    {
      nimi: "edward von lõngus",
      ala: "uudiste kujundamin",
      telefon: "+3726409437",
      "": "",
    },
    {
      nimi: "kerli kõiv",
      ala: "välistugude spetsialist",
      telefon: "+3726409437",
      "": "",
    },
  ];
  return (
    <div>
      <div>See on meist leht, nähtav localhost:5173/meist aadressil</div>
      <div>Meie töötajad:</div>
      <br />
      <div>
        {tootajad.map((item, index) => (
          <div key={index} className={valitud === index ? "valitud" : ""}>
            <div>{item.nimi}</div>
            <div>{item.ala}</div>
            <button onClick={() => valiTootaja(item, index)}>
              Võta ühendust
            </button>
          </div>
        ))}
      </div>

      {/* <div>Arvo Pärt</div>

      <div>Uudisklippide taustamuusika</div>
      <button onClick={() => n2itaKontakt("+37264094372")}>
        Võta ühenduse
      </button>
      <br />
      <div>Kelly Sildaru</div>

      <div>Püstolreporter</div>
      <button onClick={() => n2itaKontakt("+3726409437")}>Võta ühenduse</button>
      <br />
      <div>Edward von Lõngus</div>

      <div>Uudiste kujundamine</div>
      <button onClick={() => n2itaKontakt("+3726423437")}>Võta ühenduse</button>
      <br />
      <div>Kerli Kõiv</div>

      <div>Välistugude spetsialist</div>
      <button onClick={() => n2itaKontakt("+3726434237")}>Võta ühenduse</button>
      <br />
      <br /> */}
      {kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
    </div>
  );
}

export default Meist;
