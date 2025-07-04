import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Produto from "./pages/Produtos";
import "./App.css";
import Carrinho from "./pages/Carrinho";
import PagamentoPix from "./components/PagamentoPix";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produto/:id" element={<Produto />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/pagamento" element={<PagamentoPix />} />
    </Routes>
  );
};

export default App;
