import React from "react";
import "../stylesheets/Testimonio.css";

function Testimonio({nombre, pais, cargo, testimonio, empresa, imagen}) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../Imagenes/testimonio-${imagen}.png`)}
        alt="Foto-testimonio"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{nombre}</strong> en {pais}</p>
        <p className="cargo-testimonio">{cargo} en <strong>{empresa}</strong></p>
        <p className="texto-testimonio" dangerouslySetInnerHTML={{ __html: testimonio }} />
      </div>
    </div>
  );
}
export default Testimonio;
