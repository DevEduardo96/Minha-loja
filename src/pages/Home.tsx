import React from "react";
import { produtos } from "../data/Produtos";
import "./css/Home.css";
import Header from "../components/Header";
import Categorias from "../components/Categorias";
import Slider from "../components/Slider";
import Temporizador from "../components/Temporizador";
import HeroSection from "../components/HeroSection";

const Home: React.FC = () => {
  const adicionarAoCarrinho = (produto: any) => {
    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho") || "[]");
    const novoCarrinho = [...carrinhoAtual, produto];
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));

    // 🔔 Dispara evento personalizado para atualizar o Header
    window.dispatchEvent(new Event("carrinhoAtualizado"));

    alert(`${produto.nome} foi adicionado ao carrinho!`);
  };

  return (
    <div className="container">
      <Header />
      <HeroSection />
      <Categorias />
      <Slider />
      <Temporizador />

      <div className="produtos">
        {produtos.map((produto) => (
          <div key={produto.id} className="produto">
            {/* Se quiser exibir imagem no futuro */}
            {/* {produto.imagem && <img src={produto.imagem} alt={produto.nome} />} */}

            <h2>{produto.nome}</h2>
            <p>{produto.descricao}</p>

            <div className="preco-container">
              {produto.precoAntigo && (
                <span className="preco-antigo">{produto.precoAntigo}</span>
              )}
              <span className="preco-novo">{produto.preco}</span>
            </div>

            <button onClick={() => adicionarAoCarrinho(produto)}>
              Adquirir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
