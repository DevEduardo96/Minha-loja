import React, { useState } from "react";
import "./css/Contato.css"; // (opcional para estilização)
import Header from "../components/Header";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Mensagem enviada:", formData);
    alert("Mensagem enviada com sucesso!");
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  return (
    <div>
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
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contato;
