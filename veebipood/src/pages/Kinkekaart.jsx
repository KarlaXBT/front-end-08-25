import { useRef, useState } from "react";

function Kinkekaart() {
  const [summa, setSumma] = useState(20);
  const [kogus, setKogus] = useState(1);
  const emailRef = useRef();

  function sisesta() {
    if (emailRef.current.value === "") {
      alert("Tühjs emaili ei saa sisestada");
      return;
    }

    if (emailRef.current.value.includes("@") === false) {
      alert("Email peab olema @ märgiga");
      return;
    }

    if (emailRef.current.value.length < 6) {
      alert("Email on liiga lühike");
      return;
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(emailRef.current.value)) {
      alert("Email ei ole korrektne");
      return;
    }
    alert("Email sisestatud");
  }
  return (
    <div>
      <button
        className={summa === 20 ? "summa-aktiivne" : undefined}
        onClick={() => setSumma(20)}
      >
        20 €
      </button>
      <button
        className={summa === 50 ? "summa-aktiivne" : undefined}
        onClick={() => setSumma(50)}
      >
        50 €
      </button>
      <button
        className={summa === 100 ? "summa-aktiivne" : undefined}
        onClick={() => setSumma(100)}
      >
        100 €
      </button>
      <br />
      <br />
      <div>Kinkekaart: {summa} €</div>
      <br />
      <br />
      <button disabled={kogus === 1} onClick={() => setKogus(kogus - 1)}>
        -
      </button>
      <span>{kogus}</span>
      <button onClick={() => setKogus(kogus + 1)}>+</button>

      <br />
      <br />
      <div>Kokku summa: {summa * kogus} €</div>
      <label>Email</label>
      <br />
      <input ref={emailRef} type="text" />
      <br />
      <button onClick={sisesta}>Sisesta</button>
    </div>
  );
}

export default Kinkekaart;
