import estatuagamer from "../sliders/img/estatuagamer.png";
import estatuagamer03 from "../sliders/img/estatuagamer03.webp";
import estatuagamer02 from "../sliders/img/estatuagamer02.webp";
import estatuagamer01 from "../sliders/img/estatuagamer01.webp";
import "./css/Slider-produtos.css";
import { useState, useEffect } from "react";

const images = [estatuagamer, estatuagamer03, estatuagamer02, estatuagamer01];

const textos = [
  {
    titulo: "Explore nossos produtos digitais",
    descricao: "Oferecemos praticidade e qualidade para o seu dia a dia.",
  },
  {
    titulo: "Material atualizado e pronto para uso",
    descricao: "Baixe agora conteúdos úteis e bem organizados.",
  },
  {
    titulo: "Tudo o que você precisa em um só lugar",
    descricao:
      "Simplifique sua rotina com nossos produtos digitais exclusivos.",
  },
];

const ImageSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  // Troca de imagem muito rápida (efeito visual animado)
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 100); // 100ms para efeito super rápido

    return () => clearInterval(imageTimer);
  }, []);

  // Troca de texto mais lenta e legível
  useEffect(() => {
    const textTimer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % textos.length);
    }, 3000); // troca a cada 3s

    return () => clearInterval(textTimer);
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-text">
        <h1>{textos[textIndex].titulo}</h1>
        <p>{textos[textIndex].descricao}</p>
      </div>

      <div className="image-slider">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            className={`slider-image ${i === imageIndex ? "active" : ""}`}
            alt={`Slide ${i}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
