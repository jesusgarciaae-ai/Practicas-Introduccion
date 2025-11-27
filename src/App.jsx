import React from "react";
import Modulo1 from "./Componentes/Ejercicios Modulo 6/Tema1_Introducción/Introducción";
import Ej21 from "./Componentes/Ejercicios Modulo 6/Tema2_Componentes/Ejercicio 2.1/ejercicio21";
import Ej22 from "./Componentes/Ejercicios Modulo 6/Tema2_Componentes/Ejercicio 2.2/ejercicio22";
import Ej23 from "./Componentes/Ejercicios Modulo 6/Tema2_Componentes/Ejercicio 2.3/indexEj23";
import Ej31 from "./Componentes/Ejercicios Modulo 6/Tema3_JSX/Ejercicio 3.1/indexEj31";
import Ej32 from "./Componentes/Ejercicios Modulo 6/Tema3_JSX/Ejercicio 3.2/indexEj32";

import Menu from "./Componentes/Ejercicios Modulo 6/Tema1_Introducción";
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
        <Route path="/ej2.2" element={<Ej22 />} />
        <Route path="/ej2.3" element={<Ej23 />} />
        <Route path="/ej3.1" element={<Ej31 />} />
        <Route path="/ej3.2" element={<Ej32 />} />
      </Routes>
    </BrowserRouter>
  );
};

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-dark"
        style={{ background: "#212029ff" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">
            Inicio
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* Este <span> contendrá el ícono blanco gracias a 'navbar-dark' */}
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/menu">
                  Módulo 6
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/menu">
                  Modulo 7
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default App;
