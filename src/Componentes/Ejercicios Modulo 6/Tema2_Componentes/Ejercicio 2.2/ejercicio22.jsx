import Back from "../../../Back";
import Inicio from "./inicio";
import PhotoCard from "./photoCard";
import Skills from "./Skills";
import Redes from "./redes";
import { useState } from "react";

import DivisorSeccion from "../../../divisorSeccion";
import Footer from "../../../Footer";
import Ej22Cod from "../mostrarCodigos/ejercicio22Cod";

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
  const [codigo, setCodigo] = useState(false);

  const verCodigo = () => {
    setCodigo(!codigo);
  };

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
        return <Inicio />;
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
        <br />
        <DivisorSeccion titulo="Código" />
        <button
          onClick={verCodigo}
          className={`btn btn-${codigo ? "secondary" : "primary"}`}
        >
          {codigo ? "Ocultar Código" : "Ver Código"}
        </button>
        {codigo && (
          <div className="codigo">
            <Ej22Cod />
          </div>
        )}
      </div>
      <br />
      <Footer
        titulo="Ejercicio 2.2"
        descripcion="El ejercicio 2.2 consiste en crear un portafolio modular
       en React utilizando varios componentes dentro del mismo archivo. El objetivo es practicar la reutilización
        de componentes especializados y el renderizado dinámico de listas a partir de datos."
        requisitos="NavBar con menú de navegación - Componente ProjectCard para mostrar tres proyectos - Componente SkillBadge para listar al menos cinco habilidades - Componente SocialLinks con enlaces a redes sociales. "
      />
    </>
  );
};

export default Ej22;
