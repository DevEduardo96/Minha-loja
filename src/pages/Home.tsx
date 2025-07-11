import React from "react";
import { produtos } from "../data/Produtos";
import "./css/Home.css";
import Header from "../components/Header";
import Temporizador from "../components/Temporizador";
import HeroSection from "../components/HeroSection";

// 🔔 Importa SweetAlert2
import Swal from "sweetalert2";

const Home: React.FC = () => {
  const produtosRecomendadosIds = [1, 5, 8, 10]; // 🔧 Altere aqui os IDs dos produtos recomendados

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
      confirmButtonColor: "#bde318",
      customClass: {
        popup: "bebas-alert",
      },
    });
  };

  return (
    <div className="container">
      <Header />
      <HeroSection />

      <h2
        style={{
          textAlign: "center",
          fontSize: "1.8rem",
          backgroundColor: "black",
          color: "white",
          borderRadius: "20px",
          padding: "1rem 2rem", // 👉 aumenta a área interna
          // width: "fit-content",👉 faz o fundo se ajustar ao conteúdo
          // margin: "2rem auto",👉 centraliza horizontalmente
        }}
      >
        Produtos Recomendados
      </h2>

      <Temporizador />
      <div className="produtos">
        {produtosFiltrados.map((produto) => (
          <div key={produto.id} className="produto">
            <h2>{produto.nome}</h2>
            <img src={produto.imagem} alt={produto.nome} />
            <p>{produto.descricao}</p>

            <div className="preco-container">
              {produto.precoAntigo && (
                <span className="preco-antigo">{produto.precoAntigo}</span>
              )}
              <span className="preco-novo">{produto.preco}</span>
            </div>

            <button onClick={() => adicionarAoCarrinho(produto)}>
              ADQUIRIR
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
