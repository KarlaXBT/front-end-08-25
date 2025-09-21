import { useParams } from "react-router-dom";
import tootedFailist from "../../data/tooted.json";

function YksToode() {
  const { index } = useParams();
  const toode = tootedFailist[index];
  return (
    <div>
      <div>Nimi: {toode.nimi}</div>
      <div>Kogus: {toode.kogus}</div>
      <div>Hind: {toode.hind}</div>
      <div>Ostetud: {toode.ostetud ? "Jah" : "Ei"}</div>
    </div>
  );
}

export default YksToode;
