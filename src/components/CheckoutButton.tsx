import React, { useState } from "react";
import axios from "axios";
import "./css/CheckoutButton.css";

interface CheckoutProps {
  carrinho: any[];
  total: number;
  nomeCliente: string;
}

const CheckoutButton: React.FC<CheckoutProps> = ({
  carrinho,
  total,
  nomeCliente,
}) => {
  const [qrCodeBase64, setQrCodeBase64] = useState<string>("");
  const [qrCode, setQrCode] = useState<string>("");
  const [ticketUrl, setTicketUrl] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [pagamentoAprovado, setPagamentoAprovado] = useState<boolean>(false);

  const gerarPagamento = async () => {
    if (!nomeCliente.trim() || total <= 0) {
      alert("Preencha o nome e adicione itens ao carrinho.");
      return;
    }

    setLoading(true);

    try {
      const resposta = await axios.post(
        "https://servidor-loja-digital.onrender.com/criar-pagamento",
        {
          carrinho,
          nomeCliente,
          total: `R$ ${total.toFixed(2).replace(".", ",")}`,
        }
      );

      const { id, status, qr_code_base64, qr_code, ticket_url } = resposta.data;

      setStatus(status);
      setQrCodeBase64(qr_code_base64);
      setQrCode(qr_code);
      setTicketUrl(ticket_url);

      verificarStatus(id);
    } catch (erro: any) {
      const mensagem =
        erro?.response?.data?.detalhes ||
        erro?.response?.data?.error ||
        erro.message;

      console.error("Erro ao gerar pagamento:", mensagem);
      alert("Erro ao gerar pagamento: " + mensagem);
    } finally {
      setLoading(false);
    }
  };

  const verificarStatus = (id: number) => {
    const interval = setInterval(async () => {
      try {
        const res = await axios.get(
          `https://servidor-loja-digital.onrender.com/status-pagamento/${id}`
        );
        const novoStatus = res.data.status;
        setStatus(novoStatus);

        if (novoStatus === "approved") {
          clearInterval(interval);
          setPagamentoAprovado(true);
          alert("✅ Pagamento aprovado! Produto liberado.");
          localStorage.removeItem("carrinho");
          window.dispatchEvent(new Event("carrinhoAtualizado"));
        }
      } catch (err) {
        console.error("Erro ao verificar status:", err);
      }
    }, 5000);
  };

  const copiarCodigoPix = () => {
    if (!qrCode) return;
    navigator.clipboard.writeText(qrCode);
    alert("Código Pix copiado!");
  };

  return (
    <div className="checkout-pix">
      {!qrCodeBase64 ? (
        <button onClick={gerarPagamento} disabled={loading}>
          {loading ? "Gerando Pix..." : "Pagar com Pix"}
        </button>
      ) : (
        <div className="qr-section">
          <h4>
            Status:{" "}
            <span style={{ textTransform: "capitalize" }}>{status}</span>
          </h4>
          <img
            src={`data:image/png;base64,${qrCodeBase64}`}
            alt="QR Code para pagamento Pix"
            className="qr-image"
          />
          <textarea
            value={qrCode}
            readOnly
            rows={4}
            style={{ width: "100%", marginTop: "10px" }}
          />
          <button onClick={copiarCodigoPix}>Copiar código Pix</button>
          {ticketUrl && (
            <p style={{ marginTop: 10 }}>
              <a href={ticketUrl} target="_blank" rel="noreferrer">
                Abrir no app bancário
              </a>
            </p>
          )}
        </div>
      )}

      {pagamentoAprovado && (
        <div className="sucesso-pagamento">
          <h3>✅ Pagamento aprovado!</h3>
          <p>Você receberá seu produto em breve.</p>
        </div>
      )}
    </div>
  );
};

export default CheckoutButton;
