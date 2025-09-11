import { useRef, useState } from "react";

function LaenuKalkulaator() {
  const [kuumakse, setKuumakse] = useState(208.33);
  const [laenusumma, setLaenusumma] = useState(75000);
  const [intressKokku, setIntressKokku] = useState(3.85);

  const ostuhindRef = useRef();
  const sissemakseRef = useRef();
  const marginaalRef = useRef();
  const euriborRef = useRef();
  const perioodRef = useRef();

  function arvutaKuumakse() {
    setLaenusumma(ostuhindRef.current.value - sissemakseRef.current.value);

    setKuumakse(
      ((ostuhindRef.current.value - sissemakseRef.current.value) /
        perioodRef.current.value /
        12) *
        (intressKokku / 2.8)
    );
    setIntressKokku(
      Number(euriborRef.current.value) + Number(marginaalRef.current.value)
    );
  }
  return (
    <div>
      <label>Kinnisvara ostuhind</label>
      <input
        defaultValue={75000}
        onChange={arvutaKuumakse}
        ref={ostuhindRef}
        type="text"
      />{" "}
      <br />
      <label defaultValue={0}>Sissemakse</label>
      <input onChange={arvutaKuumakse} ref={sissemakseRef} type="text" /> <br />
      <label>Laenusumma</label>
      <input disabled value={laenusumma} type="text" /> <br />
      <label>Periood</label>
      <select defaultValue={30} onChange={arvutaKuumakse} ref={perioodRef}>
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>20</option>
        <option>25</option>
        <option>30</option>
      </select>
      <br />
      <label>Marginaal</label>
      <input
        defaultValue={1.7}
        onChange={arvutaKuumakse}
        ref={marginaalRef}
        type="text"
      />{" "}
      <br />
      <label>Euribor</label>
      <input
        defaultValue={2.15}
        onChange={arvutaKuumakse}
        ref={euriborRef}
        type="text"
      />{" "}
      <br />
      <label>Intress kokku</label>
      <input disabled value={intressKokku.toFixed(2)} type="text" /> <br />
      <div>Laenusumma: {kuumakse.toFixed(2)}</div>
    </div>
  );
}

export default LaenuKalkulaator;
