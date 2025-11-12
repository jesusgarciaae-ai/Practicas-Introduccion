import Back from "../../Back";
import DivisorSeccion from "../../divisorSeccion";
import Footer from "../../Footer";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.titulo}</h5>
        <p className="card-text">{props.text}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

const Ej22 = () => {
  return (
    <div className="container">
      <Back />
      <table className="table">
        <tbody>
          <tr>
            <td>
              <Card titulo="Proyecto 1" text="Mundo" />
            </td>
            <td>
              <Card titulo="Proyecto 2" text="Mundo" />
            </td>
            <td>
              <Card titulo="Proyecto 3" text="Mundo" />
            </td>
          </tr>
        </tbody>
      </table>
      <div>Hola</div>
    </div>
  );
};

export default Ej22;
