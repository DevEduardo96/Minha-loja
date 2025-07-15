import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { produtos } from "../data/Produtos";
import Header from "../components/Header";
import WhatsAppButton from "../components/WhatsAppButton";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./css/DetalhesProdutos.css";

const MySwal = withReactContent(Swal);

const DetalhesProduto: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const produto = produtos.find((p) => p.id.toString() === id);
  const [imagemSelecionada, setImagemSelecionada] = useState(
    produto?.imagem || ""
  );

  if (!produto) {
    return (
      <div>
        <Header />
        <p style={{ padding: "2rem", textAlign: "center" }}>
          Produto não encontrado.
        </p>
      </div>
    );
  }

  const adicionarAoCarrinho = () => {
    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho") || "[]");
    const novoCarrinho = [...carrinhoAtual, produto];
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    window.dispatchEvent(new Event("carrinhoAtualizado"));

    MySwal.fire({
      title: "Adicionado ao carrinho!",
      text: `${produto.nome} foi adicionado com sucesso.`,
      icon: "success",
      background: "rgba(255, 255, 255, 0.9)",
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

        <button onClick={() => navigate(-1)} className="voltar-btn">
          ← Voltar
        </button>

        <div className="container-principal">
          <div className="coluna-esquerda">
            <img
              src={imagemSelecionada}
              alt={produto.nome}
              className="imagem-principal"
            />

            {produto.imagensExtras && produto.imagensExtras.length > 0 && (
              <div className="miniaturas">
                {[produto.imagem, ...produto.imagensExtras].map(
                  (img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Imagem extra ${index + 1}`}
                      className="miniatura"
                      onClick={() => setImagemSelecionada(img)}
                    />
                  )
                )}
              </div>
            )}
          </div>

          <div className="coluna-direita">
            <h1 className="produto-titulo">{produto.nome}</h1>
            <p className="produto-descricao">{produto.descricao}</p>

            <div className="preco-container">
              {produto.precoAntigo && (
                <span className="preco-antigo">{produto.precoAntigo}</span>
              )}
              <span className="preco-novo">{produto.preco}</span>
            </div>

            <button onClick={adicionarAoCarrinho} className="adicionar-btn">
              Adicionar ao carrinho <span className="arrow">»</span>
            </button>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default DetalhesProduto;
