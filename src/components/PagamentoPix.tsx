import React, { useState } from "react";
import axios from "axios";

const PagamentoPix: React.FC = () => {
  const [qrCodeBase64, setQrCodeBase64] = useState<string>("");
  const [qrCode, setQrCode] = useState<string>("");
  const [ticketUrl, setTicketUrl] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const gerarPagamento = async () => {
    setLoading(true);

    try {
      const resposta = await axios.post(
        "http://localhost:3001/criar-pagamento",
        {
          nomeCliente: "Kuchila",
          total: "R$ 25,41",
          carrinho: [], // você pode incluir os itens reais aqui
        }
      );

      const { qr_code_base64, qr_code, ticket_url, status } = resposta.data;

      setQrCodeBase64(qr_code_base64);
      setQrCode(qr_code);
      setTicketUrl(ticket_url);
      setStatus(status);
    } catch (erro: any) {
      console.error(
        "Erro ao gerar pagamento:",
        erro.response?.data || erro.message
      );
      alert("Erro ao gerar pagamento. Veja o console.");
    } finally {
      setLoading(false);
    }
  };

  const copiarCodigoPix = () => {
    navigator.clipboard.writeText(qrCode);
    alert("Código Pix copiado!");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Pagamento via Pix</h2>

      <button onClick={gerarPagamento} disabled={loading}>
        {loading ? "Gerando pagamento..." : "Gerar QR Code Pix"}
      </button>

      {qrCodeBase64 && (
        <div style={{ marginTop: 20 }}>
          <img
            src={`data:image/png;base64,${qrCodeBase64}`}
            alt="QR Code Pix"
            style={{ maxWidth: "300px" }}
          />

          <p>
            <strong>Status:</strong> {status}
          </p>

          <p>
            <strong>Código Pix:</strong>
          </p>

          <textarea
            value={qrCode}
            readOnly
            rows={4}
            style={{ width: "100%" }}
          />

          <button onClick={copiarCodigoPix} style={{ marginTop: 10 }}>
            Copiar código Pix
          </button>

          <p style={{ marginTop: 10 }}>
            <a href={ticketUrl} target="_blank" rel="noreferrer">
              Abrir no app bancário
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default PagamentoPix;
