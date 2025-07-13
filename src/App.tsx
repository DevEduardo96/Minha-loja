import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Produto from "./pages/Produtos";
import "./App.css";
import Carrinho from "./pages/Carrinho";
import PagamentoPix from "./components/PagamentoPix";
import Sobre from "./pages/Sobre";
import Contatos from "./pages/Contatos";
import DetalhesProduto from "./pages/DetalhesProduto";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos/" element={<Produto />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/pagamento" element={<PagamentoPix />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contatos />} />
      <Route path="/produto/:id" element={<DetalhesProduto />} />
    </Routes>
  );
};

export default App;
