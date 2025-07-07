import React from "react";
import "./css/HeroSection.css";
import modeloImg from "../assets/modelo.png"; // ajuste o caminho conforme necessário

const HeroSection: React.FC = () => {
  return (
    <section className="hero-container">
      <div className="hero-text">
        <h1>
          Customized <br /> Printed Tees
        </h1>
        <p>
          Nam at congue diam etiam erat lectus, finibus eget commodo quis,
          congue diam etiam erat lectus.
        </p>
        <a href="#loja" className="hero-button">
          EXPLORE STORE <span className="arrow">»</span>
        </a>
      </div>
      <div className="hero-image">
        <img src={modeloImg} alt="Modelo com camiseta personalizada" />
      </div>
    </section>
  );
};

export default HeroSection;
