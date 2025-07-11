import menino from "./img/menino.webp";
import imagem2 from "./img/apontando.webp";
import imagem3 from "./img/braçoscruzados.png";
import "./css/Slider-produtos.css";
import { useState, useEffect } from "react";

const images = [menino, imagem2, imagem3];

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
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-text">
        <h1>{textos[index].titulo}</h1>
        <p>{textos[index].descricao}</p>
      </div>

      <div className="image-slider">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            className={`slider-image ${i === index ? "active" : ""}`}
            alt={`Slide ${i}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
