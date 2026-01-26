import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Ej33Cod = () => {
  const codigo = `import Back from "../../../Back";
import DivisorSeccion from "../../../divisorSeccion";
import Footer from "../../../Footer";
import { useState, useEffect } from "react";

const temperatura = 9;
const alertas = [];
const tiempo = new Date();

const hours = tiempo.getHours().toString().padStart(2, "0");
const minutes = tiempo.getMinutes().toString().padStart(2, "0");

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
};`;
  return (
    <>
      <p className="fs-3 fw-bold">Código</p>
      <SyntaxHighlighter language="jsx" style={oneDark}>
        {codigo}
      </SyntaxHighlighter>
    </>
  );
};

export default Ej33Cod;
