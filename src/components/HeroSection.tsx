import React, { useState, useEffect } from "react";
import "./css/HeroSection.css";
import { Link } from "react-router-dom";

// Imagens desktop
import imgglitch from "../components/Banners/banner-img/img.webp";
import imgglitch01 from "../components/Banners/banner-img/img04.webp";
import imgglitch02 from "../components/Banners/banner-img/img02.webp";
import imgglitch03 from "../components/Banners/banner-img/img03.webp";

// Imagens mobile
import mobileImg1 from "../components/Banners/banner-img/estatuagamer.webp";
import mobileImg2 from "../components/Banners/banner-img/estatuagamer02.webp";
import mobileImg3 from "../components/Banners/banner-img/estatuagamer03.webp";
import mobileImg4 from "../components/Banners/banner-img/estatuagamer01.webp";

const HeroSection: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Listas de imagens para cada tipo de dispositivo
  const desktopImages: string[] = [
    imgglitch,
    imgglitch01,
    imgglitch02,
    imgglitch03,
    imgglitch,
  ];

  const mobileImages: string[] = [
    mobileImg1,
    mobileImg2,
    mobileImg3,
    mobileImg4,
    mobileImg1,
  ];

  // Detecta se é mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Chamada inicial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Atualiza o índice do slider (efeito glitch)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % desktopImages.length);
    }, 120); // super rápido como você quer

    return () => clearInterval(interval);
  }, [desktopImages.length]);

  const currentImages = isMobile ? mobileImages : desktopImages;

  return (
    <section className="hero-container">
      {/* IMAGEM COM GLITCH */}
      <div className="hero-image glitch-wrapper" aria-hidden="true">
        {currentImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Imagem promocional"
            className={`glitch-img ${i === index ? "active" : ""}`}
          />
        ))}
      </div>

      {/* TEXTO E BOTÃO */}
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
    </section>
  );
};

export default HeroSection;
