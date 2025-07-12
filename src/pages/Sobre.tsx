import React from "react";

import Header from "../components/Header";
import "./css/Sobre.css";

const Sobre: React.FC = () => {
  return (
    <div className="container-sobre">
      <Header />
      <div className="sobre-container">
        <h2>Sobre a Plataforma</h2>
        <p>
          Somos uma plataforma especializada na venda de produtos digitais como
          packs de design, sites, ilustrações e outros recursos criativos que
          ajudam você a transformar ideias em projetos incríveis.
        </p>

        <p>
          Além da nossa loja digital, também oferecemos serviços personalizados
          como uma agência criativa: criamos identidades visuais, landing pages,
          sites profissionais, artes promocionais e tudo o que você precisa para
          destacar sua marca no mundo digital.
        </p>

        <p>
          Nosso compromisso é com a qualidade, agilidade e praticidade — seja em
          nossos produtos prontos para download ou nos serviços sob medida. Com
          a gente, você encontra as ferramentas e o suporte ideais para fazer
          seu projeto acontecer.
        </p>
      </div>
    </div>
  );
};

export default Sobre;
