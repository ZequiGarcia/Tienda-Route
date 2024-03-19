import React from "react";
import "./App.css";
import {Route,Routes, NavLink,} from "react-router-dom";
import {Header,CenteredCont,} from "./estilos-componentes/styles-comp";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import CelularDetails from "./components/CelularDetails";
import Celulares from "./components/Celulares";

function App() {
  return (
    <div>
      <Header id="header">
        <div className="logo">
          <img src="./logo.png" alt="no esta el logo" />
        </div>
        <nav>
          <ul>
            <li className="home"><span>
              <NavLink to="/">Home</NavLink></span>
            </li>
            <li>
              <NavLink to="/search-page">Pagina de Busqueda</NavLink>
            </li>
          </ul>
        </nav>
      </Header>

      <CenteredCont>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-page" element={<SearchPage />} />

          <Route path="/celulares/:nameCelular" element={<Celulares />}>
            <Route path="details" element={<CelularDetails />} />
          </Route>

          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </CenteredCont>
    </div>
  );
}

export default App;
