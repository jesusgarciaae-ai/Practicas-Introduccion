import React from "react";
import Modulo1 from "./Componentes/Ejercicios Modulo 6/Ejercicio 1 2 y 3/Introducción";
import Menu from "./Componentes/Ejercicios Modulo 6/Ejercicio 1 2 y 3";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  // const name = "Peter";
  // const age = 10;

  // return (
  //   <div className="container">
  //     <h1>Greetings</h1>
  //     <Hello name="Jesus Garcia" age={10 + 11} />
  //     <Hello name={name} age={age} />
  //   </div>
  // );
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
