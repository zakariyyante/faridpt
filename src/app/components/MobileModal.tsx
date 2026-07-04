"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { Brand } from "../data/brands";
import MobileBrandCard from "./MobileBrandCard";

interface MobileModalProps {
  brands: Brand[];
  gclid?: string;
}

const MobileModal = ({ brands, gclid }: MobileModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isMobileDevice = window.innerWidth < 768;
    const mobileBrands = brands.filter((b) => b.isMobile);
    
    if (gclid && isMobileDevice && mobileBrands.length > 0) {
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
      {/* Header */}
      <div className="sticky top-0 z-[110] bg-background/95 backdrop-blur-lg px-6 h-16 flex items-center justify-between border-b border-primary/10">
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
          <X size={28} />
        </button>
      </div>

      <div className="px-4 py-6">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">
              OFERTAS MÓVEIS DE PRESTÍGIO
            </span>
          </div>
          <h2 className="text-3xl font-black mb-2 uppercase tracking-tighter leading-none text-white italic">
            TOP 10 <span className="gold-text">CASINOS RÁPIDOS</span>
          </h2>
          <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">
            LEVANTAMENTOS NO PRÓPRIO DIA
          </p>
        </div>

        {/* Brand Cards Grid */}
        <div className="flex flex-col gap-6 mb-12">
          {mobileBrands.map((brand) => (
            <MobileBrandCard 
              key={brand.id} 
              brand={brand} 
              gclid={gclid} 
            />
          ))}
        </div>

        {/* Footer in Modal */}
        <div className="py-12 border-t border-white/5 mt-8 text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-40 h-10 opacity-30">
              <Image
                src="/logo.png"
                alt="Faridpt Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-[9px] text-gray-600 max-w-xs font-bold uppercase tracking-widest">
              &copy; 2026 faridpt.com • Padrões de Elite no Jogo
            </p>
            <button 
              onClick={() => setIsOpen(false)}
              className="mt-4 px-8 py-3 rounded-xl bg-white/5 border border-primary/10 text-primary font-black uppercase tracking-[0.2em] text-[10px] hover:bg-primary/10 transition-all"
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
