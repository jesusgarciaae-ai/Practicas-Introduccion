import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Ej31Cod = () => {
  const array = `const peliculas = [
  {
    titulo: "El Padrino",
    año: 1972,
    descrip:
      "El patriarca de una organización criminal transfiere el control de su clandestino imperio a su reacio hijo.",
  },
  {
    titulo: "Indiana Jones y el templo de la perdición",
    año: 1984,
    descrip:
      "Indiana Jones llega a la India, todavía parte del Imperio Británico, y se le pide que encuentre una piedra mística. Luego se topa con un culto secreto que comete esclavitud y sacrificios humanos en las catacumbas de un antiguo palacio.",
  },
  {
    titulo: "Bastardos sin gloria",
    año: 2009,
    descrip:
      "En la Francia ocupada por los nazis durante la Segunda Guerra Mundial, el plan para asesinar a líderes nazis por un grupo de soldados judíos de los Estados Unidos, coincide con el dueño de un teatro que planea lo mismo.",
  },
  {
    titulo: "Coraline y la Puerta Secreta",
    año: 2009,
    descrip:
      "Una niña aventurera de 11 años encuentra otro mundo que es una versión extrañamente idealizada de su hogar frustrante, pero tiene secretos siniestros.",
  },
  {
    titulo: "Parque jurásico",
    año: 1993,
    descrip:
      "Gracias al ADN fosilizado en ámbar, John Hammond da vida a varias especies de dinosaurios y crea Jurassic Park, un parque temático en una isla de Costa Rica. Pero lo que parecía un sueño se convierte rápidamente en pesadilla.",
  },
  {
    titulo: "El irlandés",
    año: 2019,
    descrip:
      "Un asesino recuerda haber participado en el asesinato de Jimmy Hoffa.",
  },
];`;
  const codigo = `
    const Ej31 = () => {
  const [codigo, setCodigo] = useState(false);

  const verCodigo = () => {
    setCodigo(!codigo);
  };
  return (
    <>
      <div className="container">
        <Back to="/menu" />
        <p className="fs-2">Generador de HTML Dinámico</p>
        <div className="row justify-content-center row-cols-md-3 gap-3">
          {peliculas.map((pelicula, i) => (
            <div key={i} className="" style={{ width: "100%" }}>
              <div className="border rounded row">
                <div className="col-md-4">
                  <div className="text-center bg-secondary h-100 p-4 rounded"></div>
                </div>
                <div className="col-md-8">
                  <div className=" card-body">
                    <h5 className="card-title">
                      {pelicula.titulo}{" "}
                      <span className="text-danger">{pelicula.año}</span>
                    </h5>
                    <p className="fs-sm">{pelicula.descrip}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <br />
        <DivisorSeccion titulo="Promedio de años de las peliculas" />
        <p className="text-center fs-4">
          {Math.round(
            peliculas.reduce((acum, peli) => acum + peli.año, 0) /
              peliculas.length
          )}
        </p>
        <button
          onClick={verCodigo}
          className={btn btn-codigo ? "secondary" : "primary"}}
        >
          {codigo ? "Ocultar Código" : "Ver Código"}
        </button>
        {codigo && (
          <div className="codigo">
            <Ej31Cod />
          </div>
        )}
      </div>
    </>
  );
};
`;
  return (
    <div className="row">
      <div className="col">
        <p className="fs-3 fw-bold">Array</p>
        <SyntaxHighlighter language="jsx" style={oneDark}>
          {array}
        </SyntaxHighlighter>
      </div>
      <div className="col">
        <p className="fs-3 fw-bold">Código</p>
        <SyntaxHighlighter language="jsx" style={oneDark}>
          {codigo}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Ej31Cod;
