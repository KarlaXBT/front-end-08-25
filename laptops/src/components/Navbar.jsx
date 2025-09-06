import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      {/* lingid on selleks et me ei peaks manuaalselt URL vahetama, paneme siia nt nupud */}
      <Link to="/">
        <button>Avaleht</button>
      </Link>
      <Link to="/all">
        <button>Sülearvutid</button>
      </Link>
      <Link to="/add">
        <button>Lisa</button>
      </Link>
    </nav>
  );
}

export default Navbar;
