const tituloGaleria = "Momentos Capturados";
const subtituloGaleria = "Galería de fotografía profesional";

const PhotoCard = () => {
  const fotos = [
    {
      titulo: "Amanecer en la Montaña",
      descripcion: "Primera luz del día iluminando los picos nevados",
      ubicacion: "Alpes Suizos",
    },
    {
      titulo: "Reflexiones Urbanas",
      descripcion: "Rascacielos reflejados en charcos después de la lluvia",
      ubicacion: "Nueva York",
    },
    {
      titulo: "Vida Marina",
      descripcion: "Coloridos peces tropicales en arrecife de coral",
      ubicacion: "Gran Barrera de Coral",
    },
    {
      titulo: "Bosque Encantado",
      descripcion: "Rayos de sol filtrándose entre árboles centenarios",
      ubicacion: "Selva Negra, Alemania",
    },
    {
      titulo: "Desierto Infinito",
      descripcion: "Dunas doradas extendiéndose hasta el horizonte",
      ubicacion: "Sahara, Marruecos",
    },
    {
      titulo: "Aurora Boreal",
      descripcion: "Luces verdes danzando en el cielo nocturno",
      ubicacion: "Islandia",
    },
  ];

  return (
    <div>
      {fotos.map((foto, index) => (
        <div key={index} className="card">
          <p className="fs-4">{foto.titulo}</p>
          <p className="fs-4">{foto.descripcion}</p>
          <p className="fs-4">{foto.ubicacion}</p>
          <br />
        </div>
      ))}
    </div>
  );
};

const Galery = () => {
  return (
    <div className="container">
      <p className="fs-2">{tituloGaleria}</p>
      <PhotoCard />
    </div>
  );
};

export default Galery;
