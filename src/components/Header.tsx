import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "./css/Header.css";
import logo from "../assets/logo3.png";
import CarrinhoLateral from "./CarrinhoLateral";

const Header: React.FC = () => {
  const [cartCount, setCartCount] = useState(
    JSON.parse(localStorage.getItem("carrinho") || "[]").length
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const atualizarContagem = () => {
      const carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");
      setCartCount(carrinho.length);
    };

    window.addEventListener("storage", atualizarContagem);
    window.addEventListener("carrinhoAtualizado", atualizarContagem);

    atualizarContagem();

    return () => {
      window.removeEventListener("storage", atualizarContagem);
      window.removeEventListener("carrinhoAtualizado", atualizarContagem);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const toggleCart = () => setCartOpen(!cartOpen);
  const closeCart = () => setCartOpen(false);

  return (
    <>
      <header className="header">
        <div className="header-desktop">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>

          <nav className="nav-links">
            <a href="/">Home</a>
            <a href="/produtos">Produtos</a>
            <a href="/contato">Contato</a>
            <a href="/sobre">Sobre</a>
          </nav>

          <div className="search-box">
            <input type="text" placeholder="Buscar produtos..." />
          </div>

          <div className="cart-menu">
            <div
              className="cart-icon"
              aria-label="Carrinho"
              onClick={toggleCart}
            >
              <FaShoppingCart size={24} />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </div>

            <button className="menu-toggle" onClick={toggleMenu}>
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </header>

      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeMenu}>
          <IoClose size={28} />
        </button>
        <a href="/" onClick={closeMenu}>
          Home
        </a>
        <a href="/produtos" onClick={closeMenu}>
          Produtos
        </a>
        <a href="/contato" onClick={closeMenu}>
          Contato
        </a>
        <a href="/sobre" onClick={closeMenu}>
          Sobre
        </a>
      </div>

      {menuOpen && <div className="overlay" onClick={closeMenu} />}
      {cartOpen && <div className="overlay" onClick={closeCart} />}

      {cartOpen && (
        <div className="cart-side-menu">
          <button className="close-btn" onClick={closeCart}>
            <IoClose size={28} />
          </button>

          {/* ✅ CarrinhoLateral com botão de voltar funcional */}
          <CarrinhoLateral onFechar={closeCart} />
        </div>
      )}
    </>
  );
};

export default Header;
