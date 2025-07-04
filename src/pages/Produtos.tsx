import React from "react";
import { useParams } from "react-router-dom";
import { produtos } from "../data/Produtos";
import "./css/Produtos.css";

const Produto: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const produto = produtos.find((p) => p.id === Number(id));

  if (!produto) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <div className="produto-container">
      <h1>{produto.nome}</h1>
      <p>{produto.descricao}</p>
      <p>
        <strong>{produto.preco}</strong>
      </p>
      <a href={produto.linkPix} target="_blank" rel="noreferrer">
        <button className="botao-comprar">Comprar via Pix</button>
      </a>
    </div>
  );
};

export default Produto;
