import "./css/Banner.css";
import estatua from "./banner-img/estatua.png";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-container">
        <div className="banner-image">
          <img className="img-estatua" src={estatua} />
        </div>
        <div className="banner-text">
          <h1>O que é a Artfix?</h1>
          <p>
            Somos uma loja especializada na venda de produtos digitais, como{" "}
            {""}
            <strong>
              e-books, apostilas, templates e planilhas exclusivas
            </strong>
            . Aqui você encontra materiais prontos para baixar e usar, com
            segurança e entrega automática após o pagamento via Pix.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
