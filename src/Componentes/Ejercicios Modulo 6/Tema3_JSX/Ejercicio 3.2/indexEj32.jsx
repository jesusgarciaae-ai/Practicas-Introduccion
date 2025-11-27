import Back from "../../../Back";
import DivisorSeccion from "../../../divisorSeccion";
import Footer from "../../../Footer";
import { useState } from "react";
import Ej32Cod from "../../mostrarCodigos/ejercicio32Cod";

const libros = [
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    paginas: 417,
    genero: "Realismo mágico",
  },
  { titulo: "1984", autor: "George Orwell", paginas: 328, genero: "Distopía" },
  {
    titulo: "El Quijote",
    autor: "Miguel de Cervantes",
    paginas: 863,
    genero: "Clásico",
  },
  {
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    paginas: 249,
    genero: "Distopía",
  },
  {
    titulo: "Pedro Páramo",
    autor: "Juan Rulfo",
    paginas: 124,
    genero: "Realismo mágico",
  },
  {
    titulo: "Dune",
    autor: "Frank Herbert",
    paginas: 688,
    genero: "Ciencia ficción",
  },
];

const requisitos = [
  "Crea un array de objetos con información de libros (título, autor, páginas, género)",
  "Muestra cada libro evitando el error Objects are not valid as React children",
  "Calcula estadísticas: total de páginas, promedio de páginas, género más común",
  "Implementa un sistema de recomendaciones basado en géneros",
];

const Ej32 = () => {
  const pagTotales = libros.reduce((num, p) => num + p.paginas, 0);
  const pagProm = Math.round(
    libros.reduce((num, p) => num + p.paginas, 0) / libros.length
  );

  const conteo = {};
  libros.map((libro) => {
    conteo[libro.genero] = (conteo[libro.genero] || 0) + 1;
  });

  const generoComun = Object.keys(conteo).reduce((a, b) =>
    conteo[b] > conteo[a] ? b : a
  );
  {
    /* Mostrar Código */
  }
  const [codigo, setCodigo] = useState(false);

  const verCodigo = () => {
    setCodigo(!codigo);
  };
  return (
    <>
      <div className="container">
        <Back to="/menu" />
        <p className="fs-2">Procesador de Datos Complejos</p>
        <div className="row row-cols-lg-2 row-cols-sm-1">
          {libros.map((libro, i) => (
            <div key={i} className="col">
              <div className="card">
                <div className="bg-secondary text-light fs-2 text-center">
                  <i className="bi bi-book"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">{libro.titulo}</h5>
                  <p className="card-text text-center">{libro.autor}</p>
                  <div className="row fw-light text-secondary text-center">
                    <div className="col">
                      Páginas del libro: {libro.paginas}
                    </div>
                    <div className="col">Género: {libro.genero}</div>
                  </div>
                </div>
              </div>
              <br />
            </div>
          ))}
        </div>
        <DivisorSeccion titulo="Estadisticas" />
        <p className="fs-5">Páginas totales: {pagTotales}</p>
        <p className="fs-5">Promedio de páginas: {pagProm}</p>
        <p className="fs-5">El genero mas común es: {generoComun}</p>
        <div className="text-light bg-success p-1 rounded text-center">
          <p className="fs-5">Te recomendamos el libro: {libros[4].titulo}</p>
        </div>
        <br />
        <button
          onClick={verCodigo}
          className={`btn btn-${codigo ? "secondary" : "primary"}`}
        >
          {codigo ? "Ocultar Código" : "Ver Código"}
        </button>
        {codigo && (
          <div className="codigo">
            <Ej32Cod />
          </div>
        )}
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

export default Ej32;
