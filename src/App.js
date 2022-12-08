import { Routes, Route, Link } from "react-router-dom";
import "./assets/scss/style.scss";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container header__wrapper">
          <a href={`/`} className="header__wrapper__brand">
            KhanhWibu
          </a>
          <ul className="header__wrapper__nav">
            <li className="header__wrapper__nav__item-nav">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="header__wrapper__nav__item-nav">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
