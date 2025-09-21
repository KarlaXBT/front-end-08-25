import { useParams } from "react-router-dom";
import esindusedFailist from "../../data/esindused.json";

function YksEsindus() {
  const { shop } = useParams();
  const leitud = esindusedFailist.find((item) => item.keskus === shop);
  return (
    <div>
      <div>{leitud.keskus}</div>
      <div>{leitud.aadress}</div>
      <div>{leitud.tel}</div>
    </div>
  );
}

export default YksEsindus;
