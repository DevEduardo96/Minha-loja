import React, { useState, useEffect } from "react";
import "./css/HeroSection.css";
import imgglitch from "../components/Banners/banner-img/img.webp";
import imgglitch01 from "../components/Banners/banner-img/img04.webp";
import imgglitch02 from "../components/Banners/banner-img/img02.webp";
import imgglitch03 from "../components/Banners/banner-img/img03.webp";

import { Link } from "react-router-dom";

const images = [imgglitch, imgglitch01, imgglitch02, imgglitch03, imgglitch];

const HeroSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 120); // super rápido como o slider

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-container">
      <div className="hero-text">
        <h1 className="hero-titulo">Deseja Alavancar Seus Resultados</h1>
        <p className="hero-paragrafo">
          Explore uma coleção exclusiva de packs de design, sites, ilustrações e
          muito mais — desenvolvidos com qualidade e praticidade para turbinar
          seus projetos. Downloads rápidos, uso imediato e um acervo pensado
          para quem busca agilidade sem abrir mão do estilo.
        </p>
        <nav>
          <Link to="/produtos" className="hero-button">
            EXPLORAR <span className="arrow">»</span>
          </Link>
        </nav>
      </div>

      <div className="hero-image glitch-wrapper" aria-hidden="true">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Modelo com camiseta personalizada"
            className={`glitch-img ${i === index ? "active" : ""}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
