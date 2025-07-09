import React from "react";
import "./css/HeroSection.css";
import modeloImg from "../assets/modelo.webp"; // ajuste o caminho conforme necessário

const HeroSection: React.FC = () => {
  return (
    <section className="hero-container">
      <div className="hero-text">
        <div className="hero-text">
          <h1 className="hero-titulo">Deseja Alavancar Seus Resultados</h1>
          <p className="hero-paragrafo">
            Reunimos especialistas de diversos nichos para criar os melhores
            conteúdos digitais em um só lugar. Aqui você encontra e-books,
            templates, guias práticos e materiais prontos para usar,
            desenvolvidos para quem quer aprender mais, ganhar tempo ou
            transformar conhecimento em renda. Escolha seu pack ideal e comece
            hoje mesmo!
          </p>
        </div>
        <a href="#loja" className="hero-button">
          EXPLORAR <span className="arrow">»</span>
        </a>
      </div>
      <div className="hero-image">
        <img src={modeloImg} alt="Modelo com camiseta personalizada" />
      </div>
    </section>
  );
};

export default HeroSection;
