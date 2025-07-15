import React, { useState } from "react";
import "./css/Contato.css";
import Header from "../components/Header";

// 🔔 Importa SweetAlert2
import Swal from "sweetalert2";
import WhatsAppButton from "../components/WhatsAppButton";

const Contato: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xjkrnnzl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          mensagem: formData.mensagem,
        }),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Mensagem enviada!",
          text: "Obrigado pelo contato. Em breve responderemos.",
          confirmButtonColor: "#3085d6",
        });
        setFormData({ nome: "", email: "", mensagem: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Erro ao enviar",
          text: "Tente novamente mais tarde.",
          confirmButtonColor: "#d33",
        });
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      Swal.fire({
        icon: "warning",
        title: "Erro de conexão",
        text: "Verifique sua internet e tente novamente.",
        confirmButtonColor: "#f39c12",
      });
    }
  };

  return (
    <div className="container">
      <div className="container-secondario">
        <Header />
        <div className="container-menu">
          <div className="contato-container">
            <h2>Fale com a gente</h2>
            <p>Tem alguma dúvida, sugestão ou proposta? Envie sua mensagem!</p>
            <form onSubmit={handleSubmit} className="formulario-contato">
              <input
                type="text"
                name="nome"
                placeholder="Seu nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Seu e-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="mensagem"
                placeholder="Digite sua mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows={5}
                required
              ></textarea>
              <button type="submit">
                Enviar<span className="arrow">»</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Contato;
