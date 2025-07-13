import { Link } from "react-router-dom";
import "../Banners/css/Banner02.css";

const OfertaBanner = () => {
  return (
    <section className="oferta-banner">
      <div className="oferta-conteudo">
        <h2>Facilitamos sua criatividade. Baixe agora e comece hoje!</h2>
        <Link to={"/produtos"} className="botao-oferta">
          EXPLORAR <span className="seta">»</span>
        </Link>
      </div>
    </section>
  );
};

export default OfertaBanner;
