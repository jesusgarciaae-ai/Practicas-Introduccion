import { Link, useNavigate } from "react-router-dom";
import Back from "../../Back";

const Titulo = (props) => {
  return (
    <>
      <p className="fs-2">{props.title}</p>
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
        className="card mt-4"
        onClick={handleRedirect}
        style={{ cursor: "pointer" }}
      >
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
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
        <div className="row">
          <Titulo title="Introducción" />
          <div className="col">
            <Card
              title="Ejercicio 1.1 al 1.3"
              text="Crear aplicación y mostrar información personal, aplicación  en React que realice diferentes cálculos curiosos basados en tu información personal.
          El objetivo es crear un dashboard personal dinámico, mostrando información que cambia en tiempo real o según la fecha."
              to="/modulo1"
            />
          </div>
        </div>
        <div className="row">
          <Titulo title="Componentes" />
          <div className="col">
            <Card
              title=" Ejercicio 2.1 - Tarjeta de Presentación"
              text="El ejercicio 2.1 consiste en crear una tarjeta de presentación usando React, separando la interfaz en cuatro
              componentes. El objetivo es practicar la organización y composición de componentes mostrando información personal de forma ordenada."
              to="/ej2.1"
            />
          </div>
          <div className="col">
            <Card
              title=" Ejercicio 2.2 - Portafolio Modular"
              text="El ejercicio 2.2 consiste en crear un portafolio modular en React utilizando varios componentes dentro del mismo
               archivo. El objetivo es practicar la reutilización de componentes especializados y el renderizado dinámico de listas
                  a partir de datos."
              to="/ej2.2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
