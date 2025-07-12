// components/WhatsAppButton.tsx
import React from "react";
import "./css/WhatsAppButton.css";

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5586999461236?text=Olá! 👋Seja muito bem-vindo(a) à nossa agência digital, Artfix!Estou aqui para ajudar você a tirar seu projeto do papel. ✨Por favor, me diga um pouco mais sobre o que você precisa:- Tipo de projeto: (site, identidade visual, app, loja, etc.)  - Objetivo principal:  - Prazo desejado:Assim conseguimos começar da melhor forma 🤩
"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsAppButton;
