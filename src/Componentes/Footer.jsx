const Footer = ({ titulo, descripcion, requisitos = [] }) => {
  return (
    <div className="bg-black absolute w-2 p-4">
      <div className="container text-secondary">
        <p className="fs-3">{titulo}</p>
        <hr />
        <p>{descripcion}</p>
        <p className="fs-3">Requisitos</p>
        <ul className="list">
          {requisitos.map((requisito, i) => (
            <li key={i}>{requisito}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
