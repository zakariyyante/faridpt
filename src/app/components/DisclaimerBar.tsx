import Link from "next/link";
import { AlertTriangle } from "lucide-react";

const DisclaimerBar = () => {
  return (
    <div className="w-full bg-black/40 border-y border-white/5 py-4 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2 text-red-500">
            <AlertTriangle size={20} />
            <span className="font-bold text-sm uppercase tracking-tight">Apenas para maiores de 18 anos.</span>
          </div>
          
          <p className="text-xs text-gray-400 max-w-3xl">
            O jogo pode ser viciante. Jogue com responsabilidade. Para ajuda e apoio, contacte a Linha Vida através do número 1414.
            Regulado pelo SRIJ - Serviço de Regulação e Inspeção de Jogos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerBar;
