import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="nav-pictures">
        <Link className="main-link" to="work">
          <img
            src="https://fastly.picsum.photos/id/1031/300/200.jpg?hmac=GPHPyeU_9Qo8HfSlKvb8fFdV2TUGLqecnu-UIPTgasc"
            alt=""
          />
          <p>Tööd</p>
        </Link>
        <Link className="main-link" to="hobbies">
          <img
            src="https://fastly.picsum.photos/id/98/300/200.jpg?hmac=xCnOo7csM4pecXlfWukWYj7yMt1MagmuQVzxPZKSowo"
            alt=""
          />
          <p>Hobid</p>
        </Link>
        <Link className="main-link" to="courses">
          <img
            src="https://fastly.picsum.photos/id/672/300/200.jpg?hmac=kwyJBjBU30s51icbB6yP0mxqzKTONkXpXsVLSAh7EVA"
            alt=""
          />
          <p>Kursused</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
