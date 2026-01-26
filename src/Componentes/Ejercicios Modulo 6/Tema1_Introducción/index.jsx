import { Link, useNavigate } from "react-router-dom";
import Back from "../../Back";

const Titulo = (props) => {
  return (
    <>
      <p className="fs-2 mt-4">{props.titulo}</p>
    </>
  );
};

const Card = (props) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(props.to);
  };

  return (
    <div className="col">
      <div
        className="card"
        onClick={handleRedirect}
        style={{ cursor: "pointer" }}
      >
        <div className="card-body">
          <h5 className="card-title">{props.titulo}</h5>
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <div className="container">
      <Back to="/" />
      <div className="container text-center">
        <div className="row ">
          <Titulo titulo="Introducción" />
          <div className="col">
            <Card
              titulo="Ejercicio 1.1 al 1.3"
              text="Crear aplicación y mostrar información personal"
              to="/modulo1"
            />
          </div>
        </div>
        <div className="row ">
          <Titulo titulo="Componentes" />
          <div className="col">
            <Card
              titulo=" Ejercicio 2.1 - Tarjeta de Presentación"
              text="Crear una tarjeta de presentación usando React"
              to="/ej2.1"
            />
          </div>
          <div className="col">
            <Card
              titulo=" Ejercicio 2.2 - Portafolio Modular"
              text="Crear un portafolio modular"
              to="/ej2.2"
            />
          </div>
          <div className="col">
            <Card
              titulo="Ejercicio 2.3: Sistema de Componentes Anidados"
              text="Crear un sistema de componentes anidados en React."
              to="/ej2.3"
            />
          </div>
        </div>
        <div className="row">
          <Titulo titulo="JSX" />
          <div className="col">
            <Card
              titulo="Ejercicio 3.1: Generador de HTML Dinámico"
              text="Crear contenido HTML dinámico con JavaScript."
              to="/ej3.1"
            />
          </div>
          <div className="col">
            <Card
              titulo="Ejercicio 3.2: Procesador de Datos Complejos"
              text="Maneja objetos y arrays complejos en JSX de forma segura."
              to="/ej3.2"
            />
          </div>
          <div className="col">
            <Card
              titulo="Ejercicio 3.3: Renderizador Condicional Avanzado"
              text="Crea un sistema complejo de renderizado condicional con JSX."
              to="/ej3.3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
