import React from "react";

import Header from "../components/Header";
import "./css/TermosUso.css";
import WhatsAppButton from "../components/WhatsAppButton";

const PoliticaPrivacidade: React.FC = () => {
  return (
    <div className="container-termos">
      <Header />
      <div className="termos-container">
        <h2>Termos de Uso</h2>

        <p>
          Ao acessar este site e utilizar nossos serviços, você concorda com os
          seguintes termos e condições. Caso não concorde com algum dos termos,
          recomendamos que não utilize este site.
        </p>

        <h3>1. Uso do site</h3>
        <p>
          O conteúdo deste site é destinado para uso pessoal e não comercial.
          Você concorda em não reproduzir, duplicar ou explorar qualquer parte
          do site sem permissão expressa.
        </p>

        <h3>2. Produtos e serviços</h3>
        <p>
          Os produtos digitais oferecidos estão sujeitos a disponibilidade e
          podem ser removidos ou alterados a qualquer momento sem aviso prévio.
        </p>

        <h3>3. Compras e pagamentos</h3>
        <p>
          As compras realizadas são finais. Não oferecemos reembolso, salvo em
          casos específicos de erro técnico ou cobrança indevida.
        </p>

        <h3>4. Propriedade intelectual</h3>
        <p>
          Todo o conteúdo do site, incluindo textos, imagens e produtos, é
          protegido por direitos autorais e é propriedade exclusiva da nossa
          plataforma ou de seus criadores.
        </p>

        <h3>5. Responsabilidades do usuário</h3>
        <p>
          Você se compromete a fornecer informações verdadeiras ao realizar
          compras e não utilizar o site para atividades ilegais ou não
          autorizadas.
        </p>

        <h3>6. Modificações dos termos</h3>
        <p>
          Podemos atualizar estes termos periodicamente. Ao continuar usando o
          site, você concorda com as modificações.
        </p>

        <p style={{ fontSize: "0.9rem", color: "#777", textAlign: "right" }}>
          Última atualização: Julho de 2025
        </p>
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default PoliticaPrivacidade;
