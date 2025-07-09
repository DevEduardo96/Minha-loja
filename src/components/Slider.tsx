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
      data-bs-wrap="true" // ESSA LINHA FAZ O SLIDER DAR LOOP
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://uyaztjggrfuxtyyfwmnw.supabase.co/storage/v1/object/public/produtos//background_slider.png"
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
    </div>
  );
};

export default Slider;
