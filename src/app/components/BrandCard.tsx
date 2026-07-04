"use client";

import Image from "next/image";
import { Star, ExternalLink, Crown, Zap } from "lucide-react";
import { track } from "@vercel/analytics";
import { Brand } from "../data/brands";

interface BrandCardProps {
  brand: Brand;
  rank: number;
  gclid?: string;
}

const buildUrl = (url: string, gclid?: string) => {
  if (!gclid) return url;
  return `${url}${gclid}`;
};

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => void;
  }
}

const BrandCard = ({ brand, rank, gclid }: BrandCardProps) => {
  const finalUrl = buildUrl(brand.url, gclid);

  const handleCardClick = () => {
    track("Brand Click", { brand: brand.name });
    
    if (typeof window !== "undefined" && window.gtag_report_conversion) {
      // The conversion script handles the redirect in its callback
      window.gtag_report_conversion(finalUrl);
    } else {
      // Fallback if the script isn't loaded
      window.open(finalUrl, "_blank", "noopener,noreferrer");
    }
  };

  const getBadge = () => {
    if (brand.badge) {
      const badgeStyles = {
        best_casino: {
          text: "MELHOR CASINO",
          colors: "from-[#c5a059] to-[#f5d797] text-black",
          icon: <Crown size={14} />
        },
        new_casino: {
          text: "NOVO CASINO",
          colors: "from-blue-600 to-blue-400 text-white",
          icon: <Star size={14} className="fill-white" />
        },
        fast_withdrawal: {
          text: "PAGAMENTO RÁPIDO",
          colors: "from-green-600 to-green-400 text-white",
          icon: <Zap size={14} className="fill-white" />
        }
      };

      const style = badgeStyles[brand.badge];
      return (
        <div className={`absolute -top-4 -left-4 z-20 bg-gradient-to-br ${style.colors} px-4 py-2 rounded-xl flex items-center gap-2 font-black italic text-xs shadow-xl border-2 border-background transform -rotate-6`}>
          {style.icon}
          {style.text}
        </div>
      );
    }

    if (rank > 3) return null;
    
    const rankColors = {
      1: "from-[#c5a059] to-[#f5d797] text-black",
      2: "from-slate-300 to-white text-black",
      3: "from-amber-700 to-amber-500 text-white"
    };

    return (
      <div className={`absolute -top-4 -left-4 z-20 bg-gradient-to-br ${rankColors[rank as keyof typeof rankColors]} w-12 h-12 rounded-full flex items-center justify-center font-black italic text-xl shadow-xl border-2 border-background transform -rotate-12`}>
        {rank}
      </div>
    );
  };

  return (
    <div 
      onClick={handleCardClick}
      className="relative group casino-card-bg rounded-[2rem] p-8 flex flex-col cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:casino-glow gold-shimmer border border-primary/10"
    >
      {getBadge()}
      
      {/* Corner Accents */}
      <div className="absolute top-4 right-4 text-primary/20 group-hover:text-primary/40 transition-colors">
        <Crown size={24} />
      </div>

      {/* Brand Logo Area */}
      <div className="flex flex-col items-center mb-8 pt-4">
        <div className="relative w-full h-24 bg-white/5 rounded-2xl p-4 flex items-center justify-center overflow-hidden border border-white/5 group-hover:border-primary/20 transition-colors">
          {brand.logo ? (
            <div className="relative w-full h-full">
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <div className="text-3xl font-black text-white italic tracking-tighter uppercase group-hover:text-primary transition-colors">
              {brand.name}
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                className={i < Math.floor(brand.rating / 2) ? "fill-primary text-primary" : "text-gray-700"} 
              />
            ))}
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black text-white italic">{brand.rating.toFixed(1)}</span>
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">/ 10</span>
          </div>
        </div>
      </div>

      {/* Bonus Info */}
      <div className="flex-grow flex flex-col justify-center text-center mb-8">
        <span className="text-[10px] text-primary font-black uppercase tracking-[0.2em] mb-2">Oferta Exclusiva</span>
        <h3 className="text-2xl font-black text-white leading-none italic uppercase tracking-tighter">
          {brand.bonus}
        </h3>
      </div>

      {/* CTA Button */}
      <button 
        className="w-full bg-gradient-to-r from-primary to-primary-light text-black font-black py-5 rounded-2xl uppercase tracking-[0.15em] text-sm flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-primary/10 group-hover:shadow-primary/30 group-hover:scale-[1.02]"
      >
        Reclamar Oferta
        <ExternalLink size={20} />
      </button>

      {/* Social Proof */}
      <div className="mt-4 text-center">
        <span className="text-[9px] text-gray-600 font-bold uppercase tracking-widest">
          {brand.votes.toLocaleString()} Grandes Jogadores Votaram
        </span>
      </div>
    </div>
  );
};

export default BrandCard;
