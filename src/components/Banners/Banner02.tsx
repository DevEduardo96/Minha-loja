import "../Banners/css/Banner02.css";

const OfertaBanner = () => {
  return (
    <section className="oferta-banner">
      <div className="oferta-conteudo">
        <h2>Facilitamos sua criatividade. Baixe agora e comece hoje!</h2>
        <a href="#comprar" className="botao-oferta">
          EXPLORAR <span className="seta">»</span>
        </a>
      </div>
    </section>
  );
};

export default OfertaBanner;
