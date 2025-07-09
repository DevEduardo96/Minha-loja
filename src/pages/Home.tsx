import React, { useState } from "react";
import { produtos } from "../data/Produtos";
import "./css/Home.css";
import Header from "../components/Header";
import Temporizador from "../components/Temporizador";
import HeroSection from "../components/HeroSection";

// 🔔 Importa SweetAlert2
import Swal from "sweetalert2";

const categorias = ["todos", "ebooks", "templates", "cursos"];

const Home: React.FC = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("todos");

  const adicionarAoCarrinho = (produto: any) => {
    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho") || "[]");
    const novoCarrinho = [...carrinhoAtual, produto];
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));

    window.dispatchEvent(new Event("carrinhoAtualizado"));
    // ✅ Alerta estiloso
    Swal.fire({
      title: "Adicionado ao carrinho!",
      text: `${produto.nome} foi adicionado com sucesso.`,
      icon: "success",
      background: "rgba(255, 255, 255, 0.884)", // 🔧 Cor de fundo correta aqui
      color: "#121212", // 🔧 Cor do texto
      confirmButtonColor: "#bde318", // 🔧 Cor do botão

      customClass: {
        popup: "bebas-alert", // classe CSS opcional
      },
    });
  };

  const produtosFiltrados = produtos.filter((produto) =>
    categoriaSelecionada === "todos"
      ? true
      : produto.categoria === categoriaSelecionada
  );

  return (
    <div className="container">
      <Header />
      <HeroSection />

      {/* Seção de Categorias */}
      <div
        className="categorias-menu"
        style={{
          display: "flex",
          gap: "0.5rem",
          flexWrap: "nowrap",
          overflowX: "auto",
          padding: "1rem",
          margin: "1.5rem 0",
          justifyContent: "center",
          backgroundColor: "#121212",
        }}
      >
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaSelecionada(cat)}
            style={{
              whiteSpace: "nowrap",
              flexShrink: 0,
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              border: "none",
              backgroundColor:
                categoriaSelecionada === cat ? "#bde318" : "#333",
              color: categoriaSelecionada === cat ? "#121212" : "#fff",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "0.9rem",
            }}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      <Temporizador />

      {/* Lista de Produtos */}
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
