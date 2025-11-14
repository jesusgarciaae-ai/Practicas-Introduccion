import Back from "../../../Back";
import Inicio from "./inicio";
import PhotoCard from "./photoCard";
import Skills from "./Skills";
import Redes from "./redes";
import { useState } from "react";

const NavBar = ({ setComponente }) => {
  const handleClick = (nomComponente) => (e) => {
    setComponente(nomComponente);
  };
  return (
    <nav className="navbar navbar-expand-sm bg-body-secondary">
      <div className="container-fluid">
        <a className="navbar-brand" onClick={handleClick("Inicio")} href="#">
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                onClick={handleClick("PhotoCard")}
                href="#"
              >
                Proyectos
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About me
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    onClick={handleClick("Skills")}
                    href="#"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={handleClick("Redes")}
                    href="#"
                  >
                    Redes Sociales
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Ej22 = () => {
  const [componente, setComponente] = useState("Inicio");

  const renderizarComponente = () => {
    switch (componente) {
      case "PhotoCard":
        return <PhotoCard />;
      case "Inicio":
        return <Inicio />;
      case "Skills":
        return <Skills />;
      case "Redes":
        return <Redes />;
      default:
        return <Inicio />; // Valor por defecto
    }
  };

  return (
    <>
      <div className="container">
        <Back to="/menu" />
        <p className="fs-2">Portafolio Modular</p>
        <NavBar setComponente={setComponente} />
        <br />
        <div id="Content">{renderizarComponente()}</div>
      </div>
    </>
  );
};

export default Ej22;
