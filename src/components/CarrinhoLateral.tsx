import React, { useEffect, useState } from "react";
import "./css/CarrinhoLateral.css";
import CheckoutButton from "./CheckoutButton";

interface CarrinhoLateralProps {
  onFechar: () => void;
}

const CarrinhoLateral: React.FC<CarrinhoLateralProps> = ({ onFechar }) => {
  const [carrinho, setCarrinho] = useState<any[]>([]);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("carrinho") || "[]");
    setCarrinho(dados);
  }, []);

  const subtotal = carrinho.reduce((acc, item) => {
    const preco = parseFloat(
      item.preco.replace("R$", "").replace(".", "").replace(",", ".")
    );
    return acc + preco;
  }, 0);

  const desconto = subtotal * 0.15; // 15% de desconto
  const total = subtotal - desconto;

  const removerItem = (id: number) => {
    const novoCarrinho = carrinho.filter((item) => item.id !== id);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    setCarrinho(novoCarrinho);
    window.dispatchEvent(new Event("carrinhoAtualizado"));
  };

  return (
    <div className="carrinho-lateral">
      {/* ✅ Botão de fechar o carrinho */}
      <button className="voltar-carrinho" onClick={onFechar}>
        ← Voltar
      </button>

      <h2>Meu Carrinho</h2>

      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <div className="produtos-carrinho">
            {carrinho.map((item, index) => (
              <div className="item-carrinho" key={`${item.id}-${index}`}>
                {item.imagem && <img src={item.imagem} alt={item.nome} />}
                <div className="info-carrinho">
                  <h4>{item.nome}</h4>
                  <p>{item.descricao}</p>
                  <p>
                    <strong>{item.preco}</strong>
                  </p>
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
