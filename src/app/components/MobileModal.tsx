"use client";

import { useState, useEffect } from "react";
import { X, Crown } from "lucide-react";
import Image from "next/image";
import { Brand } from "../data/brands";
import BrandCard from "./BrandCard";
import DisclaimerBar from "./DisclaimerBar";

interface MobileModalProps {
  brands: Brand[];
  gclid?: string;
}

const MobileModal = ({ brands, gclid }: MobileModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mobileBrands = brands.filter((b) => b.isMobile);
    if (gclid && mobileBrands.length > 0) {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [gclid, brands]);

  if (!isOpen) return null;

  const mobileBrands = brands.filter((b) => b.isMobile);

  return (
    <div className="fixed inset-0 z-[100] bg-background overflow-y-auto animate-in fade-in duration-500">
      <div className="sticky top-0 z-[110] bg-background/95 backdrop-blur-lg border-b border-primary/10 px-6 h-20 flex items-center justify-between">
        <div className="relative w-32 h-8">
          <Image
            src="/logo.png"
            alt="Faridpt Logo"
            fill
            className="object-contain"
          />
        </div>
        <button 
          onClick={() => setIsOpen(false)}
          className="p-2 text-primary hover:text-white transition-colors"
        >
          <X size={32} />
        </button>
      </div>

      <div className="px-6 py-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Crown size={14} className="text-primary" />
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">
              Acesso Móvel VIP
            </span>
          </div>
          <h2 className="text-4xl font-black mb-4 uppercase italic tracking-tighter leading-none">
            Ofertas Móveis <span className="gold-text">Exclusivas</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-xs mx-auto font-medium">
            Ofertas premium selecionadas e otimizadas para a sua experiência de jogo móvel.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-16">
          {mobileBrands.map((brand, index) => (
            <BrandCard 
              key={brand.id} 
              brand={brand} 
              rank={index + 1} 
              gclid={gclid} 
            />
          ))}
        </div>

        <DisclaimerBar />
        
        <div className="py-16 border-t border-white/5 mt-10 text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-40 h-10 opacity-50">
              <Image
                src="/logo.png"
                alt="Faridpt Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-[10px] text-gray-600 max-w-xs font-bold uppercase tracking-widest">
              &copy; 2026 faridpt.com • Padrões de Elite no Jogo
            </p>
            <button 
              onClick={() => setIsOpen(false)}
              className="mt-6 px-10 py-4 rounded-2xl bg-white/5 border border-primary/30 text-primary font-black uppercase tracking-[0.2em] text-xs hover:bg-primary/10 transition-all active:scale-95"
            >
              Entrar no Site Principal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileModal;
