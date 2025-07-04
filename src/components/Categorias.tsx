import React from "react";
import "./css/Categorias.css";

const categorias = [
  "DEPARTAMENTOS",
  "OFERTAS",
  "MONTE O SEU PC",
  "COMPUTADOR",
  "NOTEBOOK",
  "VIDEO GAMES",
  "CADEIRA GAMER",
  "HARDWARE",
  "IMPRESSORA",
];

const Categorias: React.FC = () => {
  return (
    <nav className="categorias-menu">
      <ul>
        {categorias.map((cat) => (
          <li key={cat}>
            <a href={`#${cat.toLowerCase().replace(/\s+/g, "-")}`}>
              {cat}
              {cat === "DEPARTAMENTOS" && <span className="seta">▼</span>}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Categorias;
