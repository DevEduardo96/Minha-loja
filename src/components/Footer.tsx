// src/components/Footer.tsx
import React from "react";
import "./css/Footer.css";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Artfix. Todos os direitos
          reservados.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link to={"/"} className="hover:text-gray-400 transition">
            Política de Privacidade
          </Link>
          <Link to={"/"} className="hover:text-gray-400 transition">
            Termos de Uso
          </Link>
          <Link to={"/contato"} className="hover:text-gray-400 transition">
            Contato
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
