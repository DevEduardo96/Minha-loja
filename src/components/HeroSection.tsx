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
            Explore uma coleção exclusiva de packs de design, sites, ilustrações
            e muito mais — desenvolvidos com qualidade e praticidade para
            turbinar seus projetos. Downloads rápidos, uso imediato e um acervo
            pensado para quem busca agilidade sem abrir mão do estilo.
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
