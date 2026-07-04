"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { track } from "@vercel/analytics";
import { Brand } from "../data/brands";

interface MobileBrandCardProps {
  brand: Brand;
  gclid?: string;
}

const buildUrl = (url: string, gclid?: string) => {
  if (!gclid) return url;
  return `${url}${gclid}`;
};

const MobileBrandCard = ({ brand, gclid }: MobileBrandCardProps) => {
  const finalUrl = buildUrl(brand.url, gclid);

  const handleCardClick = () => {
    track("Brand Click", { brand: brand.name });
    if (typeof window !== "undefined" && window.gtag_report_conversion) {
      window.gtag_report_conversion(finalUrl);
    } else {
      window.location.href = finalUrl;
    }
  };

  const getBadge = () => {
    if (!brand.badge) return null;

    const badgeStyles = {
      best_casino: {
        text: "MELHOR CASINO",
        colors: "bg-primary text-black",
      },
      new_casino: {
        text: "NOVO CASINO",
        colors: "bg-white text-black",
      },
      fast_withdrawal: {
        text: "LEVANTAMENTOS RÁPIDOS",
        colors: "bg-primary-light text-black",
      }
    };

    const style = badgeStyles[brand.badge];
    return (
      <div className={`absolute top-0 left-0 z-20 ${style.colors} px-3 py-1 rounded-br-lg font-black text-[10px] uppercase tracking-wider`}>
        {style.text}
      </div>
    );
  };

  return (
    <div 
      onClick={handleCardClick}
      className="relative bg-card-bg rounded-2xl p-4 flex gap-4 border border-primary/10 overflow-hidden shadow-2xl"
    >
      {getBadge()}

      {/* Left Column: Logo & Rating */}
      <div className="flex flex-col items-center justify-center w-[120px] shrink-0 pt-4">
        <div className="relative w-full h-16 mb-2 flex items-center justify-center">
          {brand.logo ? (
            <Image
              src={brand.logo}
              alt={brand.name}
              fill
              className="object-contain"
            />
          ) : (
            <span className="text-xl font-black text-white italic">{brand.name}</span>
          )}
        </div>
        
        <div className="flex items-center gap-0.5 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={12} 
              className={i < Math.floor(brand.rating / 2) ? "fill-primary text-primary" : "text-gray-700"} 
            />
          ))}
        </div>
        
        <div className="flex items-baseline gap-0.5">
          <span className="text-4xl font-black text-white tracking-tighter">{brand.rating.toFixed(1)}</span>
          <span className="text-[10px] text-gray-500 font-bold">/10</span>
        </div>
      </div>

      {/* Right Column: Bonus & CTA */}
      <div className="flex flex-col justify-between flex-grow py-1">
        <div className="flex flex-col items-center text-center">
          <div className="bg-primary/5 border border-primary/20 px-4 py-0.5 rounded-full mb-3">
            <span className="text-[8px] text-primary font-black uppercase tracking-[0.2em]">BÓNUS EXCLUSIVO</span>
          </div>
          <h3 className="text-[15px] font-black text-white leading-tight mb-4 px-1 tracking-tight italic uppercase">
            {brand.bonus}
          </h3>
        </div>

        <button 
          className="w-full bg-gradient-to-r from-primary to-primary-light text-black font-black py-3.5 rounded-xl uppercase tracking-wider text-[11px] shadow-lg shadow-primary/10 active:scale-[0.98] transition-transform"
        >
          JOGAR NO {brand.name.toUpperCase()}
        </button>
      </div>
    </div>
  );
};

export default MobileBrandCard;
