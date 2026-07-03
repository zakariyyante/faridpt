import { Check, ShieldCheck, Crown, Search, HeartHandshake } from "lucide-react";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 italic uppercase tracking-tighter">
            O <span className="gold-text">Padrão de Elite</span> das Avaliações
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full opacity-50" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Why Our Reviews Stand Out */}
          <div className="bg-card-bg/40 border border-primary/10 rounded-[2.5rem] p-10 md:p-14 backdrop-blur-sm casino-glow">
            <div className="flex items-center gap-5 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-lg shadow-primary/5">
                <Search size={32} />
              </div>
              <h3 className="text-3xl font-black italic uppercase tracking-tighter">O Nosso Processo de Avaliação</h3>
            </div>
            
            <ul className="space-y-6">
              {[
                "Verificação Rigorosa da Licença SRIJ",
                "Testes de Depósito e Levantamento com Dinheiro Real",
                "Análise Profunda dos Termos e Condições dos Bónus",
                "Auditoria de Qualidade do Apoio ao Cliente 24/7",
                "Benchmarking de Desempenho Móvel e UX"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <div className="mt-1 text-primary group-hover:scale-125 transition-transform duration-300">
                    <Check size={20} strokeWidth={3} />
                  </div>
                  <span className="text-gray-300 font-bold text-lg leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Responsible Gambling Section */}
          <div className="bg-card-bg/40 border border-white/5 rounded-[2.5rem] p-10 md:p-14 backdrop-blur-sm">
            <div className="flex items-center gap-5 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white">
                <HeartHandshake size={32} />
              </div>
              <h3 className="text-3xl font-black italic uppercase tracking-tighter">Jogue com Responsabilidade</h3>
            </div>
            
            <p className="text-gray-400 mb-10 text-lg font-medium leading-relaxed">
              O jogo é uma forma de entretenimento, não uma fonte de rendimento. Estamos comprometidos com o jogo responsável e incentivamos todos os nossos utilizadores a jogar dentro dos seus limites.
            </p>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-lg group-hover:scale-110 transition-transform">
                  1414
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-black uppercase tracking-widest text-white">Linha Vida</span>
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">Linha de Apoio 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Crown Motif */}
      <div className="absolute -bottom-24 -right-24 opacity-[0.02] pointer-events-none">
        <Crown size={400} />
      </div>
    </section>
  );
};

export default AboutSection;
