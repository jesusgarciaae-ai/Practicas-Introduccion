const proyectos = [
  {
    nombre: "Hackatón Figma",
    tecnologia: "React + Figma Make",
    descripcion: "Historieta visual",
  },
  {
    nombre: "Agenda de contactos",
    tecnologia: "React + Node.js",
    descripcion: "Formulario para guardar contactos",
  },
  {
    nombre: "Stellide",
    tecnologia: "ReactNative",
    descripcion: "Videojuego tipo endless runner",
  },
];

const PhotoCard = () => {
  return (
    <>
      <p className="fs-2">Mis Proyectos</p>
      {proyectos.map((proyecto, i) => (
        <div key={i} className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <div className="bg-body-secondary rounded p-1 h-100"></div>
              </div>
              <div className="col">
                <h2>{proyecto.nombre}</h2>
                <p>{proyecto.tecnologia}</p>
                <p>{proyecto.descripcion}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PhotoCard;
