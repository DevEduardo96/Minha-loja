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

  // 🔐 E-mail de teste válido para o token usado

  const gerarPagamento = async () => {
    if (!nomeCliente.trim() || total <= 0) {
      alert("Preencha o nome e adicione itens ao carrinho.");
      return;
    }

    setLoading(true);

    try {
      const resposta = await axios.post(
        "http://localhost:3001/criar-pagamento",
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

      // ✅ AQUI: abrir QR Code em nova janela
      const popup = window.open("", "Pagamento Pix", "width=500,height=600");
      if (popup) {
        popup.document.write(`
          <html>
            <head>
              <title>Pagamento Pix</title>
              <style>
                body { font-family: sans-serif; padding: 20px; text-align: center; }
                img { max-width: 100%; margin-top: 20px; }
                textarea { width: 100%; margin-top: 10px; font-size: 16px; }
                a { display: inline-block; margin-top: 10px; color: blue; }
                button { margin-top: 10px; padding: 10px 20px; }
              </style>
            </head>
            <body>
              <h2>Status: ${status}</h2>
              <img src="data:image/png;base64,${qr_code_base64}" alt="QR Code Pix" />
              <p><strong>Código Pix:</strong></p>
              <textarea readonly rows="4">${qr_code}</textarea>
              <br/>
              <button onclick="navigator.clipboard.writeText('${qr_code}'); alert('Código copiado!')">Copiar Código</button>
              <p><a href="${ticket_url}" target="_blank">Abrir no app bancário</a></p>
            </body>
          </html>
        `);
        popup.document.close();
      }

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
          `http://localhost:3001/status-pagamento/${id}`
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
