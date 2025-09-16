import { Link } from "react-router-dom";
function Menu() {
  return (
    <div>
      <Link to="/">
        <img
          className="pilt"
          src="https://www.motorcyclecruiser.com/resizer/-PAnxmuTE3vonuu0CUHRZqr2kY8=/1440x0/smart/cloudfront-us-east-1.images.arcpublishing.com/octane/U7NE4JOSA757H7EYU44LJEESSA.jpg"
          alt="Motikas"
        />
      </Link>
      <Link to="/ostukorv">
        <button>Ostukorv</button>
      </Link>
      <Link to="/lisa-toode">
        <button>Lisa toode</button>
      </Link>
      <Link to="/seaded">
        <button>Seaded</button>
      </Link>

      <Link to="/osta-kinkekaart">
        <button>Kinkekaardid</button>
      </Link>
      <Link to="/kalkulaator">
        <button>Kalkulaator</button>
      </Link>
      <Link to="/arrays-home">
        <button>Arrays</button>
      </Link>
      <Link to="/halda-home">
        <button>Halda</button>
      </Link>
    </div>
  );
}

export default Menu;
