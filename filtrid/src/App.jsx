import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import Numbers from "./pages/Numbers";

function App() {
  return (
    <>
      <Link to="/books">
        <button>Books</button>
      </Link>
      <Link to="/numbers">
        <button>Numbers</button>
      </Link>

      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/numbers" element={<Numbers />} />
      </Routes>
    </>
  );
}

export default App;
