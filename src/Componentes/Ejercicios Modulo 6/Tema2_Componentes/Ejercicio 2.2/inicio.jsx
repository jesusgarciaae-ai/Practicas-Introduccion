import { Header, datos, aboutMe } from "../ejercicio21";

const Inicio = () => {
  return (
    <>
      <div>
        <div className="p-3 rounded" style={{ background: "#3a3942ff" }}>
          <div className="container">
            <span className=" text-light">
              <Header nombre={datos.nombre} tituloProf={datos.tituloProf} />
            </span>
          </div>
          <div className="container">
            <p className="fw-bold text-light fs-3">About me: </p>
            <p className="text-light">
              Soy estudiante de la Universisdad {datos.universidad} en{" "}
              {datos.ciudad} {datos.estado} <br /> me apasiona la{" "}
              {aboutMe.descipcion} así como tambien la <br /> {aboutMe.gustos}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
