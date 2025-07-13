// components/WhatsAppButton.tsx
import React from "react";
import "./css/WhatsAppButton.css";

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5586999461236?text=Olá! 👋 Tenho interesse em criar um projeto com a Artfix e gostaria de saber mais sobre como funciona. "
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
