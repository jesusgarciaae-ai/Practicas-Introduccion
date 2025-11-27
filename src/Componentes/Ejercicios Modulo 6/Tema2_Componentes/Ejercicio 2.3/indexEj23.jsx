import Back from "../../../Back";
import Blog from "./Blog";
import Footer from "../../../Footer";
import Info from "./AuthorInfo";
import CommentSection from "./Commet_section";
import DivisorSeccion from "../../../divisorSeccion";
import Ej23Cod from "../../mostrarCodigos/ejercicio23Cod";
import { useState } from "react";

const listaRequisitos = [
  "Componente Blog que contenga múltiples BlogPost",
  "Cada BlogPost debe tener PostHeader, PostContent y PostFooter",
  "Componente CommentSection con múltiples Comment",
  "Componente AuthorInfo que aparezca en varios lugares",
  "Al menos 6 niveles de anidación de componentes",
];
const Ej23 = () => {
  const [codigo, setCodigo] = useState(false);

  const verCodigo = () => {
    setCodigo(!codigo);
  };
  return (
    <>
      <div className="container">
        <Back to="/menu" />
        <p className="fs-2">Sistema de Componentes Anidados </p>
        <br />
        <Blog />
        <CommentSection />
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
            <Ej23Cod />
          </div>
        )}
      </div>

      <br />
      <Info />
      <Footer
        titulo="Ejercicio 2.3"
        descripcion="El ejercicio 2.3 avanzado. Consiste en crear un sistema de componentes 
      anidados en React. El proyecto debe lograr al menos seis niveles de anidación, demostrando comunicación y estructura compleja entre componentes. "
        requisitos={listaRequisitos}
      />
    </>
  );
};

export default Ej23;
