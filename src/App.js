import Header from "./components/header";
import Card from "./components/card";
import Todocontainer from "./components/todocondainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Landing from "./pages/landing";
import { useState } from "react";
import { Link } from "react-router-dom";
function App() {
  const [crtpas, setcrtpas] = useState([
    {
      ussername: "Anand",
      password: "677",
    },
  ]);
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link></Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<Login crtpas={crtpas} setcrtpas={setcrtpas} />}
          ></Route>
          <Route
            path="/signup"
            element={<Signup crtpas={crtpas} setcrtpas={setcrtpas} />}
          ></Route>
          <Route path="/landing" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
