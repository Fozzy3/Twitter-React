import React from "react";
import "./Principal.css";

export default function Principal() {
  return (
    <div className="principal">
      <div className="barra">
        <input type="text" className="buscar" placeholder="Search" />
      </div>
      <div className="noticias_post"></div>
    </div>
  );
}
