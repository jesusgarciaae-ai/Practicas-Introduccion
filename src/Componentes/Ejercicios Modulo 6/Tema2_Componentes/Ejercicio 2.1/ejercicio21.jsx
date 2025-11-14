import { useState } from "react";

import Back from "../../../Back";
import DivisorSeccion from "../../../divisorSeccion";
import Ej21Cod from "../mostrarCodigos/ejercicio21Cod";
import Footer from "../../../Footer";

export const datos = {
  nombre: "Jesús Javier García Andrade",
  email: "jesusho508@gmail.com",
  tel: "6441986785",
  tituloProf: "Desarrollador Full Stack",
  ciudad: "Ciudad Obregón",
  estado: "Sonora",
  universidad: "La Salle Noroeste",
};

export const aboutMe = {
  descipcion: "programación, el ejercicio y mascotas",
  gustos: "musica, arte, pintura, naturaleza",
};

const fecha = new Date();

const Mes = () => {
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const mes = meses[fecha.getMonth()];

  return mes;
};

export const DiaSemana = () => {
  let dia = "";
  switch (fecha.getDay()) {
    case 1:
      dia = "Lunes";
      break;
    case 2:
      dia = "Martes";
      break;
    case 3:
      dia = "Miércoles";
      break;
    case 4:
      dia = "Jueves";
      break;
    case 5:
      dia = "Viernes";
      break;
    case 6:
      dia = "Sábado";
      break;
    default:
      dia = "Domingo";
  }
  return dia;
};

export const Header = (props) => {
  return (
    <>
      <p className="fs-1">{props.nombre}</p>
      <p className="f2-4">{props.tituloProf}</p>
      <hr />
    </>
  );
};

const About = () => {
  return (
    <>
      <p className="fw-bold fs-3">About me: </p>
      <p>
        Soy estudiante de la Universisdad {datos.universidad} en {datos.ciudad}{" "}
        {datos.estado} <br /> me apasiona la {aboutMe.descipcion} así como
        tambien la <br /> {aboutMe.gustos}
      </p>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <p className="fw-bold fs-3">Información de Contacto</p>
      <p>Correo Electronico: {datos.email}</p>
      <p>Correo Electronico: {datos.tel}</p>
    </>
  );
};
const Footerej2 = () => {
  const dia = DiaSemana();
  const mes = Mes();
  return (
    <>
      <div className="card">
        <div className="card-body text-center">
          <p>
            {dia} {fecha.getDate()} de {mes} de {fecha.getFullYear()}
          </p>
        </div>
      </div>
    </>
  );
};

const Ej21 = () => {
  const [codigo, setCodigo] = useState(false);

  const verCodigo = () => {
    setCodigo(!codigo);
  };

  return (
    <div>
      <div style={{ background: "#3a3942ff" }}>
        <Back to="/menu" />
        <div className="container">
          <span className=" text-light">
            <Header nombre={datos.nombre} tituloProf={datos.tituloProf} />
          </span>
        </div>
      </div>
      <div className="container">
        <table className="table">
          <tbody>
            <tr>
              <td>
                <About />
              </td>
              <td>
                <Contact />
              </td>
            </tr>
          </tbody>
        </table>
        <Footerej2 />
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
            <Ej21Cod />
          </div>
        )}
      </div>
      <br />
      <Footer
        titulo="Ejercicio 2.1 "
        descripcion="consiste en crear una tarjeta de presentación usando React, separando la
         interfaz en cuatro componentes: Header (nombre y título profesional), About (descripción personal), Contact
          (correo, LinkedIn, teléfono y ubicación) y Footer (año actual con new Date().getFullYear()). El objetivo es practicar la organización y composición de componentes mostrando información personal de forma ordenada."
        requisitos="Componente Header con tu nombre y título profesional - Componente About con descripción personal - Componente Contact con tu información de contacto - Componente Footer con el año actual"
      />
    </div>
  );
};
export default Ej21;
