import { useRef, useState } from "react";

function LisaToode() {
  const [sonum, setSonum] = useState("Lisa uus toode!");
  const nimiRef = useRef();

  function lisa() {
    if (nimiRef.current.value === "") {
      setSonum("Tühja nimega ei saa sisestada!");
    } else {
      setSonum("Toode lisatud: " + nimiRef.current.value);
    }
  }

  // const lisa = () => {
  //   if (nimiRef.current.value === "") {
  //     setSonum("Tühja nimega ei saa sisestada!");
  //   } else {
  //     setSonum("Toode lisatud: " + nimiRef.current.value);
  //   }
  // };

  return (
    <div>
      <div>{sonum}</div>
      <label>Uue toote nimi</label>
      <br />
      <input ref={nimiRef} type="text" />
      <br />
      <button onClick={() => lisa()}>Sisesta</button>
    </div>
  );
}

export default LisaToode;
