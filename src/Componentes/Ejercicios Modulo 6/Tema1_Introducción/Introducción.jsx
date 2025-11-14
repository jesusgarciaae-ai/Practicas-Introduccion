import Back from "../../Back";
import MensajeHoras from "../../../Mensajes/mensajeHoras";
import Countdown from "react-countdown";
import { useState, useEffect } from "react";
import DivisorSeccion from "../../divisorSeccion";

const datos = {
  nombre: "Jesús Javier García Andrade",
  edad: 21,
  ciudad: "Obregón",
  carrera: "Producción multimedia",
  fechaNac: new Date(2004, 2, 2),
  cafesAlDia: 2,
  totLibrosLeidos: 42,
  lineasCodigo: 110,
  horasDeSueño: 8,
};

const fecha = new Date();

const DiaSemana = () => {
  let dia = "";
  let mensaje = "";
  switch (fecha.getDay()) {
    case 1:
      dia = "Lunes";
      mensaje = "Cada pequeño paso cuenta, sigue avanzando con confianza.";
      break;
    case 2:
      dia = "Martes";
      mensaje = "Te irá bien, empieza el día con una excelente actitud!!!";
      break;
    case 3:
      dia = "Miércoles";
      mensaje = "Ya vas a mitad de semana, mantén el ritmo y no te rindas.";
      break;
    case 4:
      dia = "Jueves";
      mensaje = "Sonríe, estás más cerca del fin de semana.";
      break;
    case 5:
      dia = "Viernes";
      mensaje = "¡Lo lograste! Cierra la semana con energía y buenas vibras!";
      break;
    case 6:
      dia = "Sábado";
      mensaje = "Relájate y disfruta lo que te hace feliz.";
      break;
    default:
      dia = "Domingo";
      mensaje = "Recarga tus fuerzas, mañana empieza una nueva oportunidad.";
  }
  return { dia, mensaje };
};

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

const ContadorCumple = () => {
  let proximoCumple = new Date(fecha.getFullYear(), 2, 2);

  if (fecha > proximoCumple) {
    proximoCumple = new Date(fecha.getFullYear() + 1, 2, 2);
  }

  const diferenciaMs = proximoCumple - fecha;
  const diasFaltantes = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));

  return diasFaltantes;
};

const Reloj = () => {
  const [hora, setHora] = useState(fecha);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);
  const formatoHora = hora.toLocaleTimeString();

  return formatoHora;
};

const Bienvenida = () => {
  const { dia, mensaje } = DiaSemana();
  const mes = Mes();
  return (
    <>
      <div className="row">
        <div className="col">
          <p className="fs-2">
            Hola soy {datos.nombre.split(" ").slice(0, 2).join(" ")}
          </p>
          <p className="fs-6">
            El dia de hoy es {dia} {fecha.getDate()} de {mes}
          </p>
          <p>{mensaje}</p>
        </div>
        <div className="col text-center">
          <span className="fs-3">
            <Reloj /> <hr />
          </span>
          <MensajeHoras />
        </div>
      </div>
    </>
  );
};
const Datospersonales = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <p className="card-img-top fs-3">Datos Personales:</p>
          <div className="row">
            <div className="col">
              <p>Nombre : {datos.nombre}</p>
            </div>
            <div className="col">
              <p>Edad: {datos.edad}</p>
            </div>
            <div className="col">
              <p>Ciudad: {datos.ciudad}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>Carrera: {datos.carrera}</p>
            </div>
            <div className="col">
              <p>Fecha de Nacimiento: {datos.fechaNac.toLocaleDateString()}</p>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </>
  );
};

const Calculos = () => {
  const resta = fecha.getTime() - datos.fechaNac.getTime();

  const dias = Math.floor(resta / (1000 * 60 * 60 * 24));
  const horas = Math.floor(resta / (1000 * 60 * 60));
  const minutos = Math.floor(resta / (1000 * 60));

  const progresoAño = (((365 - fecha.getDate()) * 100) / 365).toFixed(2);
  return (
    <>
      <div className="card">
        <div className="card-body">
          <p className="fs-3">Curiosidades</p>
          <p>Mi edad se divide en:</p>
          <table className="table">
            <thead>
              <tr>
                <th>Días</th>
                <th>Horas</th>
                <th>Minutos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{dias}</td>
                <td>{horas}</td>
                <td>{minutos}</td>
              </tr>
            </tbody>
          </table>
          <br />
          <p>
            Faltan{" "}
            <span className="fw-bold">
              <ContadorCumple />
            </span>{" "}
            días para mi cumpleaños!!
          </p>
          <p>
            Tomo alrededor de {datos.cafesAlDia} tazas de café al día, al año
            tomo:
            <span className="fw-bold"> {datos.cafesAlDia * 365} cafés</span>
          </p>
          <p>
            Comencé a programar desde los 16 en preparatoria, y entre la
            creación de servidores y front hacía aproximadamente{" "}
            {datos.lineasCodigo} lineas de código de codigo al dia. Eso
            significa que durante los 3 años de prepa hice{" "}
            <span className="fw-bold">{datos.lineasCodigo * 365 * 3}</span>{" "}
            lineas de código!
          </p>
          <p>
            He leído {datos.totLibrosLeidos} libros en total, considerando que
            comencé con el habito de la lectura desde los 15, llevo{" "}
            {datos.edad - 15} años leyendo con regularidad, por lo tanto al año
            he leído{" "}
            <span className="fw-bold">
              {datos.totLibrosLeidos / (datos.edad - 15)} libros al año desde
              los 15 años
            </span>
          </p>
          <p>
            El humano pierde gran parte de su vida durmiendo... pero la verdad
            vale totalmente la pena, yo duermo aproximadamente{" "}
            {datos.horasDeSueño} horas, eso significa que durante toda mi vida
            he dormido :{" "}
            <span className="fw-bold">
              {datos.edad * 365 * datos.horasDeSueño} horas
            </span>
          </p>
          <p>
            Por mi horaio hago solo {datos.cafesAlDia} comidas al día, por lo
            tanto a la semana son {datos.cafesAlDia * 7} comidas, al mes son{" "}
            {datos.cafesAlDia * 7 * 4} y al año {datos.cafesAlDia * 7 * 4 * 12}!
          </p>
          <br />
          <div className="text-center fs-3">
            <p>Progreso del año</p>
            <div className="progress-stacked">
              <div
                className="progress"
                role="progressbar"
                aria-label="Segment one"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: `${progresoAño}%` }}
              >
                <div className="progress-bar"></div>
              </div>
            </div>
            <p>{progresoAño}%</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Footerintro = () => {
  return (
    <div className="bg-black absolute">
      <div className="container text-secondary">
        <p className="text-center">
          En esta pagina se encuentran los ejercicios del tema: 1-Introducción a
          React, que incluyen 3 ejercicios 1.1 , 1.2 y 1.3
        </p>
        <div className="row">
          <div className="col">
            <p className="fw-bold">Ejercicio 1.1</p>
            <ul>
              <li>Usa Vite para crear el proyecto</li>
              <li>Muestra tu nombre, edad y ciudad</li>
              <li>Agrega un mensaje de bienvenida personalizado</li>
              <li>Incluye la fecha y hora actual</li>
            </ul>
          </div>
          <div className="col">
            <p className="fw-bold">Ejercicio 1.2</p>
            <ul>
              <li>Calcula y muestra tu edad en días, horas y minutos</li>
              <li>
                Si eres programador, calcula cuántas líneas de código
                aproximadas has escrito
              </li>
              <li>
                Muestra cuántos cafés has tomado en tu vida (estimación
                divertida)
              </li>
              <li>Agrega al menos 3 cálculos más creativos</li>
            </ul>
          </div>
          <div className="col">
            <p className="fw-bold">Ejercicio 1.3</p>
            <ul>
              <li>
                Reloj digital que muestre hora, minutos y segundos actuales
              </li>
              <li>Contador de días hasta tu próximo cumpleaños</li>
              <li>Indicador del día de la semana con mensaje personalizado</li>
              <li>Progreso del año (porcentaje completado)</li>
              <li>Frase motivacional que cambie según la hora del día</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
const Modulo1 = () => {
  return (
    <>
      <div className="container mt-3">
        <Back to="/menu" />
        <DivisorSeccion titulo="Ejercicios 1.1 , 1.2 y 1.3" />
        <Bienvenida />
        <Datospersonales />
        <br />
        <Calculos />
      </div>
      <br />
      <Footerintro />
    </>
  );
};

export default Modulo1;
