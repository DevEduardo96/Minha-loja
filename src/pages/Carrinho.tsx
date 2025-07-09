// Carrinho.tsx
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "./css/Carrinho.css";

const Carrinho: React.FC = () => {
  const [carrinho, setCarrinho] = useState<any[]>([]);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("carrinho") || "[]");
    setCarrinho(dados);
  }, []);

  const removerItem = (id: number) => {
    const novoCarrinho = carrinho.filter((item) => item.id !== id);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    setCarrinho(novoCarrinho);
  };

  const limparCarrinho = () => {
    localStorage.removeItem("carrinho");
    setCarrinho([]);
  };

  return (
    <div className="container">
      <Header />
      <h1>Carrinho de Compras</h1>

      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div className="lista-carrinho">
          {carrinho.map((item) => (
            <div key={item.id} className="item-carrinho">
              <h2>{item.nome}</h2>
              <p>{item.descricao}</p>
              <p>
                <strong>{item.preco}</strong>
              </p>
              <a href={item.linkPix} target="_blank" rel="noreferrer">
                <button className="botao-comprar">Comprar via Pix</button>
              </a>
              <button onClick={() => removerItem(item.id)}>Remover</button>
            </div>
          ))}
          <button className="limpar" onClick={limparCarrinho}>
            Esvaziar Carrinho
          </button>
        </div>
      )}
    </div>
  );
};

export default Carrinho;
