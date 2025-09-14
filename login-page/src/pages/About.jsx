import React, { useState } from "react";

function About() {
  const [message, setMessage] = useState("Vali mõni tegevus");
  return (
    <div>
      <div>{message}</div>
      <button
        onClick={() =>
          setMessage("Selleks saada meile email jobs@html-css.com")
        }
      >
        Kandideeri tööle
      </button>
      <button
        onClick={() =>
          setMessage(
            "Meil on 10 töötajat, kelle info ilmub veebilehele lähiaja"
          )
        }
      >
        Vaata meie töötajaid
      </button>
      <button
        onClick={() => setMessage("Ühenduse võtmiseks mine lehele Kontakt")}
      >
        Võta meiega ühendust
      </button>
    </div>
  );
}

export default About;
