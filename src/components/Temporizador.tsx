import React, { useEffect, useState } from "react";
import "./css/Temporizador.css";

const DURACAO_EM_SEGUNDOS = 2 * 60 * 60; // 2 horas
const STORAGE_KEY = "tempoOferta";

const Temporizador: React.FC = () => {
  const [segundosRestantes, setSegundosRestantes] = useState<number>(() => {
    const salvo = localStorage.getItem(STORAGE_KEY);
    const agora = Math.floor(Date.now() / 1000);

    if (salvo) {
      const dataExpira = parseInt(salvo, 10);
      const restante = dataExpira - agora;
      return restante > 0 ? restante : 0;
    } else {
      const expira = agora + DURACAO_EM_SEGUNDOS;
      localStorage.setItem(STORAGE_KEY, expira.toString());
      return DURACAO_EM_SEGUNDOS;
    }
  });

  useEffect(() => {
    if (segundosRestantes <= 0) return;

    const intervalo = setInterval(() => {
      setSegundosRestantes((prev) => {
        if (prev <= 1) {
          clearInterval(intervalo);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalo);
  }, [segundosRestantes]);

  // Reinicia automaticamente após acabar (opcional)
  useEffect(() => {
    if (segundosRestantes === 0) {
      const novaExpiracao = Math.floor(Date.now() / 1000) + DURACAO_EM_SEGUNDOS;
      localStorage.setItem(STORAGE_KEY, novaExpiracao.toString());
      setTimeout(() => setSegundosRestantes(DURACAO_EM_SEGUNDOS), 3000); // reinicia após 3s
    }
  }, [segundosRestantes]);

  const formatarTempo = (s: number) => {
    const horas = Math.floor(s / 3600)
      .toString()
      .padStart(2, "0");
    const minutos = Math.floor((s % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const segundos = (s % 60).toString().padStart(2, "0");
    return `${horas} : ${minutos} : ${segundos}`;
  };

  return (
    <div className="temporizador">
      <span className="titulo">OFERTA ENCERRA EM:</span>
      {segundosRestantes > 0 ? (
        <span className="contador">{formatarTempo(segundosRestantes)}</span>
      ) : (
        <span className="contador finalizado">TEMPO ESGOTADO</span>
      )}
    </div>
  );
};

export default Temporizador;
