import { useState, useRef } from "react";

function MaksimaalneKalkulaator() {
  const [maxLaen, setMaxLaen] = useState(24000);
  const ylalpeetavadRef = useRef(0);
  const netoRef = useRef("900");
  const kohustusedRef = useRef("300");

  function arvutaMaxLaen() {
    const ylalpeetavadKulu = parseInt(ylalpeetavadRef.current.value) * 200;
    const netoTulu = parseFloat(netoRef.current.value) || 0;
    const kohustused = parseFloat(kohustusedRef.current.value) || 0;

    if (netoTulu === 0) {
      alert("Netotulu ei saa olla 0 €!");
      setMaxLaen(0);
      return;
    }

    const vabaRaha = netoTulu - ylalpeetavadKulu - kohustused;
    const maksimaalneLaen = Math.max(vabaRaha * 0.5 * 120);
    setMaxLaen(maksimaalneLaen.toFixed(2));
  }

  return (
    <>
      <label htmlFor="ylalpeetavad">Ülalpeetavate arv</label>
      <select
        onChange={arvutaMaxLaen}
        ref={ylalpeetavadRef}
        id="ylalpeetavad"
        defaultValue={"1"}
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6 või rohkem</option>
      </select>
      <br />
      <label htmlFor="neto">Netosissetulek</label>
      <input
        defaultValue={"900"}
        onChange={arvutaMaxLaen}
        ref={netoRef}
        type="text"
        id="neto"
      />
      <br />
      <label htmlFor="kohustused">Igakuised kohustused</label>
      <input
        defaultValue={"300"}
        onChange={arvutaMaxLaen}
        ref={kohustusedRef}
        type="text"
        id="kohustused"
      />
      <br />
      <br />
      <div>Maksimaalne pakutav limiit: {maxLaen}</div>
    </>
  );
}

export default MaksimaalneKalkulaator;
