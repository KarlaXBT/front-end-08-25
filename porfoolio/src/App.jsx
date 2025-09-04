import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Courses from "./pages/Courses";
import Hobbies from "./pages/Hobbies";
import Work from "./pages/Work";

function App() {
  return (
    <>
      <div className="container">
        <div className="main-img-container">
          <img
            className="main-img"
            src="https://fastly.picsum.photos/id/401/1000/500.jpg?hmac=AFpNANi5U2Wpm8YhSBuQw1aRfawOO-mUeAK07uCGpI0"
            alt=""
          />
        </div>
        <div className="main-text">
          Hello, I am Bla Blaatens and this website is made for Programming or
          Design to show my porfolio
        </div>
        <div className="rectangle"></div>
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

      <Routes>
        <Route path="work" element={<Work />} />
        <Route path="hobbies" element={<Hobbies />} />
        <Route path="courses" element={<Courses />} />
      </Routes>
    </>
  );
}

export default App;
