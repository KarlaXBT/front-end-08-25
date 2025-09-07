import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Courses from "./pages/Courses";
import Hobbies from "./pages/Hobbies";
import Work from "./pages/Work";
import Navbar from "./components/Navbar";

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
        {/* <Navbar /> */}
      </div>

      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="work" element={<Work />} />
        <Route path="hobbies" element={<Hobbies />} />
        <Route path="courses" element={<Courses />} />
      </Routes>
    </>
  );
}

export default App;
