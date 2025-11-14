import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Ej22Cod = () => {
  const navBar = `
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

    `;
  const SkillBadgeCod = `
  const Skills = () => {
  return (
    <>
      <p className="fs-2">Mis habilidades son</p>
      <hr />
      <div className="container text-center">
        <div className="row row-cols-3">
          {hardSkills.map((skill, i) => (
            <div className="fs-3" key={i}>
              <div className=" border border-2 border-dark card">
                <div className="card-body">
                  <div className="col">{skill}</div>
                </div>
              </div>
              <br />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
`;
  const redesCod = `const Skills = () => {
  return (
    <>
      <p className="fs-2">Mis habilidades son</p>
      <hr />
      <div className="container text-center">
        <div className="row row-cols-3">
          {hardSkills.map((skill, i) => (
            <div className="fs-3" key={i}>
              <div className=" border border-2 border-dark card">
                <div className="card-body">
                  <div className="col">{skill}</div>
                </div>
              </div>
              <br />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
`;

  const proyectosCod = `const PhotoCard = () => {
  return (
    <>
      <p className="fs-2">Mis Proyectos</p>
      {proyectos.map((proyecto, i) => (
        <div key={i} className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <div className="bg-body-secondary rounded p-1 h-100"></div>
              </div>
              <div className="col">
                <h2>{proyecto.nombre}</h2>
                <p>{proyecto.tecnologia}</p>
                <p>{proyecto.descripcion}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
`;
  const CodEj22 = `import Back from "../../../Back";
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
          className={"btn btn-$}{codigo ? "secondary" : "primary"}}
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
`;

  return (
    <>
      <p className="fs-3 fw-bold">Nav Bar</p>
      <SyntaxHighlighter language="jsx" style={oneDark}>
        {navBar}
      </SyntaxHighlighter>
      <p className="fs-3 fw-bold">Proyectos</p>
      <SyntaxHighlighter language="jsx" style={oneDark}>
        {proyectosCod}
      </SyntaxHighlighter>
      <p className="fs-3 fw-bold">Habilidades</p>
      <SyntaxHighlighter language="jsx" style={oneDark}>
        {SkillBadgeCod}
      </SyntaxHighlighter>
      <p className="fs-3 fw-bold">Redes</p>
      <SyntaxHighlighter language="jsx" style={oneDark}>
        {redesCod}
      </SyntaxHighlighter>
      <p className="fs-3 fw-bold">Código Completo</p>
      <SyntaxHighlighter language="jsx" style={oneDark}>
        {CodEj22}
      </SyntaxHighlighter>
    </>
  );
};

export default Ej22Cod;
