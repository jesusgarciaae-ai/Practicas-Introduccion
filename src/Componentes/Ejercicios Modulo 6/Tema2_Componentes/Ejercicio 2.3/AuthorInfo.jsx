const Info = () => {
  return (
    <div
      className="card text-center rounded-pill text-bg-dark fs-4"
      style={{ width: "4rem", position: "fixed", right: "20px", top: "50%" }}
    >
      <div className="card-body">
        <a
          href="https://github.com/jesusgarciaae-ai"
          className=" link-secondary link-opacity-25-hover"
        >
          <i className="bi bi-github"></i>
        </a>
        <br />
        <a className=" link-secondary link-opacity-25-hover">
          <i className="bi bi-instagram"></i>
        </a>
        <br />
        <a className=" link-secondary link-opacity-25-hover">
          <i className="bi bi-discord"></i>
        </a>
        <br />
        <a className=" link-secondary link-opacity-25-hover">
          <i className="bi bi-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};

export default Info;
