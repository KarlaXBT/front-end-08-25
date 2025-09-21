import { useParams } from "react-router-dom";
import hinnadFailist from "../../data/hinnad.json";

function YksHind() {
  const { index } = useParams();
  const leitud = hinnadFailist[index];

  return (
    <div>
      <div>{leitud.arv}</div>
      <div>{leitud.sonana}</div>
    </div>
  );
}

export default YksHind;
