import Back from "../../../Back";
import DivisorSeccion from "../../../divisorSeccion";
import Footer from "../../../Footer";
import { useState, useEffect } from "react";

const temperatura = 9;
const alertas = [];
const tiempo = new Date();

const hours = tiempo.getHours().toString().padStart(2, "0");
const minutes = tiempo.getMinutes().toString().padStart(2, "0");

const requisitos = [
  "Sistema de clima que muestre diferentes componentes según la hora",
  "Renderizado condicional basado en múltiples variables",
  "Uso de operadores ternarios anidados y operador &&",
  "Manejo de arrays vacíos y valores null/undefined",
];

const Clima = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">
          <p>Ciudad Obregón</p>
        </h4>
        <p className="">
          {hours < 12
            ? "Buenos Días"
            : hour < 19
            ? "Buenas Tardes"
            : "Buenas Noches"}
        </p>
        <h1>{temperatura}°</h1>
        <p className="card-text">
          {temperatura > 26 ? (
            <i class="bi bi-brightness-high-fill">Temperaturas Altas</i>
          ) : temperatura < 10 ? (
            <i class="bi bi-asterisk">Frio</i>
          ) : (
            <i class="bi bi-cloud-sun-fill">Clima Agradable</i>
          )}
        </p>
      </div>
    </div>
  );
};
const Ej33 = () => {
  return (
    <>
      <div className="container">
        <Back to="/menu" />
        <p className="fs-2">Procesador de Datos Complejos</p>
        <div className="container text-center">
          <div className="">
            <Clima />
          </div>
          <div></div>
        </div>
      </div>
      <br />
      <Footer
        titulo="Ejercicio 3.2"
        descripcion="Consiste en trabajar con un arreglo de libros y mostrar su información correctamente en JSX, evitan
        do errores como Objects are not valid as React children El objetivo es practicar cómo manejar datos complejos en
         React de forma clara y segura."
        requisitos={requisitos}
      />
    </>
  );
};

export default Ej33;
