const Footer = (props) => {
  return (
    <div className="bg-black absolute w-2 p-4">
      <div className="container text-secondary">
        <p className="fs-3">{props.titulo}</p>
        <hr />
        <p>{props.descripcion}</p>
        <p className="fs-3">Requisitos</p>
        <p>{props.requisitos}</p>
      </div>
    </div>
  );
};

export default Footer;
