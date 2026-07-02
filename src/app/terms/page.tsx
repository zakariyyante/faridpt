import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ShieldCheck } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <ShieldCheck size={14} className="text-primary" />
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">
            Legal Framework
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-black mb-12 italic uppercase tracking-tighter">
          Termos de <span className="gold-text">Serviço</span>
        </h1>
        
        <div className="prose prose-invert max-w-none space-y-8 text-gray-400 font-medium leading-relaxed">
          <p className="text-lg">
            Ao aceder ao site faridpt.com, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.
          </p>

          <section>
            <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4">1. Uso de Conteúdo</h2>
            <p>
              O conteúdo deste site é apenas para fins informativos. Não garantimos a precisão ou integridade de qualquer informação fornecida. O uso de qualquer informação deste site é por sua conta e risco.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4">2. Restrição de Idade</h2>
            <p>
              Deve ter pelo menos 18 anos de idade para utilizar este site. O jogo online é estritamente proibido para menores em Portugal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4">3. Jogo Responsável</h2>
            <p>
              Incentivamos o jogo responsável. Se sente que o jogo está a tornar-se um problema, procure ajuda profissional através da Linha Vida (1414) ou do SICAD.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4">4. Isenção de Responsabilidade</h2>
            <p>
              O faridpt.com não opera quaisquer jogos de casino. Somos um portal de comparação independente. Não nos responsabilizamos por quaisquer perdas financeiras resultantes do jogo em sites de terceiros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4">5. Modificações</h2>
            <p>
              Podemos rever estes termos de serviço a qualquer momento, sem aviso prévio. Ao utilizar este site, concorda em ficar vinculado à versão atual destes termos de serviço.
            </p>
          </section>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-white font-black uppercase tracking-[0.2em] text-sm transition-colors group">
            <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Voltar para a Página Inicial
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
