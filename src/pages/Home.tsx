import React from "react";
import { produtos } from "../data/Produtos";
import "./css/Home.css";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import { useNavigate } from "react-router-dom"; // Importa aqui

// 🔔 Importa SweetAlert2
import Swal from "sweetalert2";
import WhatsAppButton from "../components/WhatsAppButton";
import Banner from "../components/Banners/Banner";
import Banner02 from "../components/Banners/Banner02";
import Temporizador from "../components/Temporizador";

const Home: React.FC = () => {
  const navigate = useNavigate(); // Use dentro do componente

  const produtosRecomendadosIds = [1, 5, 8, 10]; // 🔧 IDs recomendados

  const produtosFiltrados = produtos.filter((produto) =>
    produtosRecomendadosIds.includes(produto.id)
  );

  const adicionarAoCarrinho = (produto: any) => {
    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho") || "[]");
    const novoCarrinho = [...carrinhoAtual, produto];
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));

    window.dispatchEvent(new Event("carrinhoAtualizado"));

    Swal.fire({
      title: "Adicionado ao carrinho!",
      text: `${produto.nome} foi adicionado com sucesso.`,
      icon: "success",
      background: "rgba(255, 255, 255, 0.884)",
      color: "#121212",
      confirmButtonColor: "#03f709",
      customClass: {
        popup: "bebas-alert",
      },
    });
  };

  return (
    <div className="container">
      <div className="container-secondario">
        <Header />
        <HeroSection />
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.8rem",
            backgroundColor: "black",
            color: "white",
            padding: "1rem 2rem",
            // width: "fit-content",
            // margin: "2rem auto",
          }}
        >
          Produtos Recomendados
        </h2>
        <Temporizador />

        <div className="produtos">
          {produtosFiltrados.map((produto) => (
            <div
              key={produto.id}
              className="produto"
              onClick={() => navigate(`/produto/${produto.id}`)}
              style={{ cursor: "pointer" }}
            >
              <h2>{produto.nome}</h2>
              <img src={produto.imagem} alt={produto.nome} />
              <p>{produto.descricao}</p>

              <div className="preco-container">
                {produto.precoAntigo && (
                  <span className="preco-antigo">{produto.precoAntigo}</span>
                )}
                <span className="preco-novo">{produto.preco}</span>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation(); // evita o clique no botão ativar o onClick do card
                  adicionarAoCarrinho(produto);
                }}
              >
                ADQUIRIR
              </button>
            </div>
          ))}
        </div>
        <Banner02 />
        <Banner />
        <Banner02 />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default Home;
