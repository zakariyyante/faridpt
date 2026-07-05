"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const AgeVerification = () => {
  const [isVisible, setIsOpen] = useState(false);

  useEffect(() => {
    const isVerified = localStorage.getItem("age-verified");
    if (!isVerified) {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem("age-verified", "true");
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  const handleLeave = () => {
    window.location.href = "https://www.google.com";
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-card-bg border border-primary/20 rounded-[2rem] p-8 md:p-12 shadow-2xl casino-glow animate-in zoom-in-95 duration-300">
        {/* Header with Flag and 18+ Badge */}
        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/5">
          <div className="relative w-8 h-6 overflow-hidden rounded-sm shadow-sm">
            <Image
              src="https://flagcdn.com/pt.svg"
              alt="Portugal Flag"
              fill
              className="object-cover"
            />
          </div>
          <div className="px-3 py-1 rounded-full border border-primary/30 bg-primary/5">
            <span className="text-xs font-black text-primary uppercase tracking-widest">
              18+ | Apenas Adultos
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 mb-10">
          <p className="text-gray-300 text-lg font-medium leading-relaxed">
            O conteúdo deste site destina-se exclusivamente a adultos com idade igual ou superior a 18 anos. Qualquer utilização por menores é estritamente proibida.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Para informações ou apoio relacionado com o jogo responsável, visite{" "}
            <a href="https://www.begambleaware.org" target="_blank" className="text-primary hover:underline font-bold">www.begambleaware.org</a> ou{" "}
            <a href="https://www.srij.turismodeportugal.pt" target="_blank" className="text-primary hover:underline font-bold">www.srij.turismodeportugal.pt</a>.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-4">
          <button
            onClick={handleVerify}
            className="w-full bg-gradient-to-r from-primary to-primary-light text-black font-black py-5 rounded-2xl uppercase tracking-[0.15em] text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
          >
            Sim, tenho 18 anos ou mais.
          </button>
          <button
            onClick={handleLeave}
            className="w-full bg-white/5 border border-white/10 text-gray-400 font-bold py-4 rounded-2xl uppercase tracking-widest text-xs hover:bg-white/10 transition-all"
          >
            Não, sair
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;
