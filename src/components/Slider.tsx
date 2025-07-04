import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

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
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://salescdn.net/5u9boJPglkVmDu5QU9N9ZbeHYzU=/adaptive-fit-in/0x0/prod/store/14141/medias/storage/1751481577868.webp"
            className="d-block w-100"
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://salescdn.net/5u9boJPglkVmDu5QU9N9ZbeHYzU=/adaptive-fit-in/0x0/prod/store/14141/medias/storage/1751481577868.webp"
            className="d-block w-100"
            alt="Slide 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://salescdn.net/5u9boJPglkVmDu5QU9N9ZbeHYzU=/adaptive-fit-in/0x0/prod/store/14141/medias/storage/1751481577868.webp"
            className="d-block w-100"
            alt="Slide 3"
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#slider"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Anterior</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#slider"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Próximo</span>
      </button>
    </div>
  );
};

export default Slider;
