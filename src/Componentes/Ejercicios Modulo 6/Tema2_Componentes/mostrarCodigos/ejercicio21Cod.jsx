import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Ej21Cod = () => {
  const header = `const Header = () => {
  return (
    <>
      <p className="fs-1">{datos.nombre}</p>
      <p className="f2-4">{datos.tituloProf}</p>
      <hr />
    </>
  );
};`;

  const aboutMe = `const About = () => {
  return (
    <>
      <table className="table"></table>
      <p className="fw-bold fs-3">About me: </p>
      <p>
        Soy estudiante de la Universisdad {datos.universidad} en {datos.ciudad}{" "}
        {datos.estado} <br /> me apasiona la {aboutMe.descipcion} así como
        tambien la <br /> {aboutMe.gustos}
      </p>
    </>
  );
};`;
  const contact = `const Contact = () => {
  return (
    <>
      <p className="fw-bold fs-3">Información de Contacto</p>
      <p>Correo Electronico: {datos.email}</p>
      <p>Correo Electronico: {datos.tel}</p>
    </>
  );
};`;
  const footer = `const Footer = () => {
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
};`;
  const codigo = `
import Back from "../../Back";
import DivisorSeccion from "../../divisorSeccion";

const datos = {
  nombre: "Jesús Javier García Andrade",
  email: "jesusho508@gmail.com",
  tel: "6441986785",
  tituloProf: "Desarrollador Full Stack",
  ciudad: "Ciudad Obregón",
  estado: "Sonora",
  universidad: "La Salle Noroeste",
};

const aboutMe = {
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

const DiaSemana = () => {
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

const Header = () => {
  return (
    <>
      <p className="fs-1">{datos.nombre}</p>
      <p className="f2-4">{datos.tituloProf}</p>
      <hr />
    </>
  );
};

const About = () => {
  return (
    <>
      <table className="table"></table>
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
const Footer = () => {
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
  return (
    <div>
      <div style={{ background: "#3a3942ff" }}>
        <Back />
        <div className="container">
          <span className=" text-light">
            <Header />
          </span>
        </div>
      </div>
      <div className="container">
        <table className="table">
          <tr>
            <td>
              <About />
            </td>
            <td>
              <Contact />
            </td>
          </tr>
        </table>
        <Footer />
        <br />
        <DivisorSeccion titulo="Código" />
      </div>
    </div>
  );
};
export default Ej21;

    `;
  return (
    <>
      <p className="fs-3 fw-bold">Header</p>
      <SyntaxHighlighter language="jsx" style={oneDark}>
        {header}
      </SyntaxHighlighter>
      <p className="fs-3 fw-bold">About me</p>
      <SyntaxHighlighter language="jsx" style={oneDark}>
        {aboutMe}
      </SyntaxHighlighter>
      <p className="fs-3 fw-bold">Contacto</p>
      <SyntaxHighlighter language="jsx" style={oneDark}>
        {contact}
      </SyntaxHighlighter>
      <p className="fs-3 fw-bold">Footer</p>
      <SyntaxHighlighter language="jsx" style={oneDark}>
        {footer}
      </SyntaxHighlighter>
      <p className="fs-3 fw-bold">Código Completo</p>
      <SyntaxHighlighter language="jsx" style={oneDark}>
        {codigo}
      </SyntaxHighlighter>
    </>
  );
};

export default Ej21Cod;
