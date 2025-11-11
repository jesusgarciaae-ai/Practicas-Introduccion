import { useState, useEffect } from "react";

const mensajeHoras = [
  "Caer está permitido; quedarse en el suelo, no.",
  "El éxito es insistir.",
  "Cada día es una nueva oportunidad para cambiar tu vida.",
  "Prohibido rendirse, respira hondo y sigue.",
  "El esfuerzo sincero vale mucho más que cualquier excusa para rendirse.",
  "Sin acción, los sueños solo son ilusiones.",
  "La mejor manera de predecir el futuro es crearlo.",
  "Hazlo con pasión o no lo hagas.",
  "Avanza, aunque sea un pequeño paso.",
  "El futuro que sueñas empieza hoy con la forma en que estudias.",
  "Cree en ti mismo, el mundo necesita tu luz.",
  "Tu actitud decide qué altura alcanzarás.",
];

const Reloj = () => {
  const [hora, setHora] = useState(new Date().getHours());
  const [mensaje, setMensaje] = useState(() => {
    // Si hay un mensaje guardado en localStorage, lo usamos
    const guardado = localStorage.getItem("mensajeActual");
    return guardado
      ? guardado
      : mensajeHoras[Math.floor(Math.random() * mensajeHoras.length)];
  });

  useEffect(() => {
    const nuevoMensaje = () => {
      const indice = Math.floor(Math.random() * mensajeHoras.length);
      return mensajeHoras[indice];
    };

    const intervalo = setInterval(() => {
      const nuevaHora = new Date().getHours();

      // si la hora cambió
      if (nuevaHora !== hora) {
        console.log("🕒 La hora cambió:", nuevaHora);
        setHora(nuevaHora);

        const msg = nuevoMensaje();
        setMensaje(msg);
        localStorage.setItem("mensajeActual", msg); // guarda el mensaje actual
      }
    }, 1000);

    return () => clearInterval(intervalo);
  }, [hora]);

  return <p>{mensaje}</p>;
};

export default Reloj;
