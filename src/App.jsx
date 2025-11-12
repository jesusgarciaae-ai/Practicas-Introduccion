import React from "react";
import Modulo1 from "./Componentes/Ejercicios Modulo 6/Ejercicio 1 2 y 3/Introducción";
import Ej21 from "./Componentes/Ejercicios Modulo 6/Tema2_Componentes/ejercicio21";
import Menu from "./Componentes/Ejercicios Modulo 6/Ejercicio 1 2 y 3";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<h1 className="text-center mt-5">Inicio</h1>}
        />
        <Route path="/modulo1" element={<Modulo1 />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/ej2.1" element={<Ej21 />} />
      </Routes>
    </BrowserRouter>
  );
};

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ background: "#212029ff" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          Inicio
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/menu">
                Módulo 1
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/menu">
                Modulo 2
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default App;
