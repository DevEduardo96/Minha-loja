import React, { useEffect, useState } from "react";
import "./css/CarrinhoLateral.css";
import CheckoutButton from "./CheckoutButton";

interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  imagem?: string;
  quantidade: number;
}

interface CarrinhoLateralProps {
  onFechar: () => void;
}

const CarrinhoLateral: React.FC<CarrinhoLateralProps> = ({ onFechar }) => {
  const [carrinho, setCarrinho] = useState<Produto[]>([]);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("carrinho") || "[]");
    const unificados = agruparProdutos(dados);
    setCarrinho(unificados);
  }, []);

  const agruparProdutos = (produtos: any[]) => {
    const agrupado: { [key: number]: Produto } = {};
    produtos.forEach((item) => {
      if (agrupado[item.id]) {
        agrupado[item.id].quantidade += 1;
      } else {
        agrupado[item.id] = { ...item, quantidade: 1 };
      }
    });
    return Object.values(agrupado);
  };

  const atualizarLocalStorage = (novoCarrinho: Produto[]) => {
    const expandido = novoCarrinho.flatMap((item) =>
      Array(item.quantidade).fill({ ...item, quantidade: 1 })
    );
    localStorage.setItem("carrinho", JSON.stringify(expandido));
  };

  const subtotal = carrinho.reduce((acc, item) => {
    const preco = parseFloat(
      item.preco.replace("R$", "").replace(".", "").replace(",", ".")
    );
    return acc + preco * item.quantidade;
  }, 0);

  const desconto = subtotal * 0.15;
  const total = subtotal - desconto;

  const removerItem = (id: number) => {
    const novoCarrinho = carrinho.filter((item) => item.id !== id);
    setCarrinho(novoCarrinho);
    atualizarLocalStorage(novoCarrinho);
    window.dispatchEvent(new Event("carrinhoAtualizado"));
  };

  const alterarQuantidade = (id: number, delta: number) => {
    const novoCarrinho = carrinho
      .map((item) => {
        if (item.id === id) {
          const novaQuantidade = item.quantidade + delta;
          return novaQuantidade > 0
            ? { ...item, quantidade: novaQuantidade }
            : null;
        }
        return item;
      })
      .filter(Boolean) as Produto[];
    setCarrinho(novoCarrinho);
    atualizarLocalStorage(novoCarrinho);
    window.dispatchEvent(new Event("carrinhoAtualizado"));
  };

  return (
    <div className="carrinho-lateral">
      <button className="voltar-carrinho" onClick={onFechar}>
        ← Voltar
      </button>
      <h2>Meu Carrinho</h2>

      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <div className="produtos-carrinho">
            {carrinho.map((item) => (
              <div className="item-carrinho" key={item.id}>
                {item.imagem && <img src={item.imagem} alt={item.nome} />}
                <div className="info-carrinho">
                  <h4>{item.nome}</h4>
                  <p>{item.descricao}</p>
                  <p>
                    <strong>{item.preco}</strong> × {item.quantidade}
                  </p>
                  <div className="quantidade-controles">
                    <button onClick={() => alterarQuantidade(item.id, -1)}>
                      -
                    </button>
                    <span>{item.quantidade}</span>
                    <button onClick={() => alterarQuantidade(item.id, 1)}>
                      +
                    </button>
                  </div>
                  <button
                    className="remover"
                    onClick={() => removerItem(item.id)}
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="resumo">
            <p>Subtotal: R$ {subtotal.toFixed(2)}</p>
            <p>Desconto: -R$ {desconto.toFixed(2)}</p>
            <h3>Total: R$ {total.toFixed(2)}</h3>
            <CheckoutButton
              carrinho={carrinho}
              total={total}
              nomeCliente="Kuchila"
            />
          </div>

          <div className="important">
            <p>
              🔄 Se o QR Code não carregar imediatamente, por favor, aguarde ⏳
              e atualize a página após alguns minutos.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default CarrinhoLateral;
