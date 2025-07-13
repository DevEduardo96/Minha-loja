import React from "react";
import Header from "../components/Header";
import WhatsAppButton from "../components/WhatsAppButton";
import "./css/PoliticaPrivacidade.css";

const PoliticaPrivacidade: React.FC = () => {
  return (
    <div className="container-politica">
      <Header />

      <div className="politica-container">
        <h2>Política de Privacidade</h2>

        <p>
          Esta Política de Privacidade descreve como suas informações pessoais
          são coletadas, usadas e compartilhadas quando você visita ou realiza
          uma compra em nosso site.
        </p>

        <h3>1. Informações que coletamos</h3>
        <p>
          Ao visitar o site, coletamos automaticamente certas informações sobre
          seu dispositivo, como endereço IP, tipo de navegador, páginas
          acessadas e horário da visita. Além disso, quando você realiza uma
          compra ou entra em contato, coletamos informações como nome, e-mail e
          forma de pagamento.
        </p>

        <h3>2. Como usamos suas informações</h3>
        <ul>
          <li>Para processar suas compras e pagamentos.</li>
          <li>Para entrar em contato com você sobre pedidos ou dúvidas.</li>
          <li>Para melhorar nosso site e serviços.</li>
          <li>Para fins de marketing, com seu consentimento.</li>
        </ul>

        <h3>3. Compartilhamento de informações</h3>
        <p>
          Não compartilhamos suas informações pessoais com terceiros, exceto
          quando necessário para processar pagamentos (como gateways de
          pagamento) ou cumprir obrigações legais.
        </p>

        <h3>4. Segurança</h3>
        <p>
          Adotamos medidas de segurança para proteger suas informações pessoais.
          No entanto, nenhuma transmissão de dados na internet é 100% segura.
        </p>

        <h3>5. Seus direitos</h3>
        <p>
          Você pode solicitar acesso, correção ou exclusão de suas informações
          pessoais a qualquer momento, entrando em contato conosco.
        </p>

        <h3>6. Cookies</h3>
        <p>
          Utilizamos cookies para melhorar sua experiência de navegação. Você
          pode desativá-los nas configurações do seu navegador.
        </p>

        <h3>7. Alterações nesta política</h3>
        <p>
          Podemos atualizar esta política periodicamente. A versão mais recente
          sempre estará disponível nesta página.
        </p>

        <h3>8. Contato</h3>
        <p>
          Em caso de dúvidas sobre esta política, entre em contato pelo e-mail:{" "}
          <strong>contato@seudominio.com</strong>
        </p>

        <p style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#555" }}>
          Última atualização: 13 de julho de 2025
        </p>
      </div>

      <WhatsAppButton />
    </div>
  );
};

export default PoliticaPrivacidade;
