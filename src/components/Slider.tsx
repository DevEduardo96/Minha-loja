import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import slider from "../assets/slider-img/imagem_convertida.svg";
import slider02 from "../assets/slider-img/background02.webp";

const Slider: React.FC = () => {
  useEffect(() => {
    // Nenhuma lógica adicional é necessária, Bootstrap cuida do autoplay
  }, []);

  return (
    <div
      id="slider"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
      data-bs-wrap="true" // ESSA LINHA FAZ O SLIDER DAR LOOP
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slider02} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={slider} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={slider} className="d-block w-100" alt="Slide 3" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
