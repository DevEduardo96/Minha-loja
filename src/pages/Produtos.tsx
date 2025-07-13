import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { produtos } from "../data/Produtos";
import "./css/Produtos.css";
import Header from "../components/Header";
import Temporizador from "../components/Temporizador";
import SliderProdutos from "../components/sliders/Slider-produtos";
import WhatsAppButton from "../components/WhatsAppButton";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const categorias = ["todos", "ebooks", "templates", "sites"];
const itensPorPagina = 12;

const Produtos: React.FC = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("todos");
  const [paginaAtual, setPaginaAtual] = useState(1);
  const navigate = useNavigate();

  const adicionarAoCarrinho = (produto: any) => {
    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho") || "[]");
    const novoCarrinho = [...carrinhoAtual, produto];
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    window.dispatchEvent(new Event("carrinhoAtualizado"));

    MySwal.fire({
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

  // 🔍 Filtrar produtos por categoria
  const produtosFiltrados = produtos.filter((produto) =>
    categoriaSelecionada === "todos"
      ? true
      : produto.categoria === categoriaSelecionada
  );

  // 📄 Paginação
  const totalPaginas = Math.ceil(produtosFiltrados.length / itensPorPagina);
  const indiceInicial = (paginaAtual - 1) * itensPorPagina;
  const produtosPaginados = produtosFiltrados.slice(
    indiceInicial,
    indiceInicial + itensPorPagina
  );

  const mudarCategoria = (categoria: string) => {
    setCategoriaSelecionada(categoria);
    setPaginaAtual(1);
  };

  return (
    <div className="container">
      <Header />
      <SliderProdutos />

      {/* Menu de Categorias */}
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
            onClick={() => mudarCategoria(cat)}
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
        {produtosPaginados.map((produto) => (
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
                e.stopPropagation(); // evita navegação ao clicar no botão
                adicionarAoCarrinho(produto);
              }}
            >
              Adquirir
            </button>
          </div>
        ))}
      </div>

      {/* Paginação */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
          gap: "0.5rem",
          flexWrap: "wrap",
        }}
      >
        {Array.from({ length: totalPaginas }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setPaginaAtual(i + 1)}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: paginaAtual === i + 1 ? "#bde318" : "#333",
              color: paginaAtual === i + 1 ? "#121212" : "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <WhatsAppButton />
    </div>
  );
};

export default Produtos;
