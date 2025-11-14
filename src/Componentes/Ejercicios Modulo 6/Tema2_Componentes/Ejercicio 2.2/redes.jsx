const redes = [
  {
    nombre: "Github",
    url: "github.com/jesusgarciaae-ai",
    icon: <i class="bi bi-github"></i>,
  },
  {
    nombre: "Instagram",
    url: "@jesus_garciq",
    icon: <i class="bi bi-instagram"></i>,
  },
  {
    nombre: "Discord",
    url: ".jesus_cristo",
    icon: <i class="bi bi-discord"></i>,
  },
  {
    nombre: "WhatsApp",
    url: "644-198-6785",
    icon: <i class="bi bi-whatsapp"></i>,
  },
];

const Redes = () => {
  return (
    <>
      <p className="fs-2">Contactame</p>
      <div className="container">
        <div className="row row-cols-2">
          {redes.map((red, i) => (
            <div key={i}>
              <div className="card">
                <div className="card-body">
                  <div className="col">
                    <p className="fs-4 fw-bold">
                      {red.nombre} {red.icon}
                    </p>
                    <hr />
                    <p>{red.url}</p>
                  </div>
                </div>
              </div>
              <br />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Redes;
