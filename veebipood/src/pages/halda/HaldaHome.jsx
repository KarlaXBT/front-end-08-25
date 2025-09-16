import { Link } from "react-router-dom";

function HaldaHome() {
  return (
    <div>
      <Link to="/halda-autod">
        <button className="nupp">Halda autosid</button>
      </Link>
      <Link to="/halda-esindused">
        <button>Esindused</button>
      </Link>
      <Link to="/halda-hinnad">
        <button className="nupp">Halda hindu</button>
      </Link>
      <Link to="/halda-kasutajad">
        <button className="nupp">Halda kasutajaid</button>
      </Link>
      <Link to="/halda-tootajad">
        <button className="nupp">Halda töötajaid</button>
      </Link>
      <Link to="/halda-tooted">
        <button className="nupp">Halda tooteid</button>
      </Link>
    </div>
  );
}

export default HaldaHome;
