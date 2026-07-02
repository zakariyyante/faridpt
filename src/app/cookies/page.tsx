import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ShieldCheck } from "lucide-react";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <ShieldCheck size={14} className="text-primary" />
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">
            Security & Privacy
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black mb-12 italic uppercase tracking-tighter">
          Política de <span className="gold-text">Cookies</span>
        </h1>
        
        <div className="prose prose-invert max-w-none space-y-8 text-gray-400 font-medium leading-relaxed">
          <section>
            <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4">1. O que são Cookies?</h2>
            <p>
              Cookies são pequenos ficheiros de texto que são armazenados no seu dispositivo (computador, tablet ou telemóvel) quando visita um website. Eles são amplamente utilizados para fazer os websites funcionarem, ou funcionarem de forma mais eficiente, bem como para fornecer informações aos proprietários do site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4">2. Como utilizamos os Cookies?</h2>
            <p>
              No faridpt.com, utilizamos cookies para:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Lembrar as suas preferências e definições.</li>
              <li>Compreender como utiliza o nosso site através do Vercel Analytics.</li>
              <li>Rastrear cliques em links de afiliados para garantir que recebemos a atribuição correta (ex: parâmetros GCLID).</li>
              <li>Melhorar a segurança e o desempenho do site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4">3. Tipos de Cookies que utilizamos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-card-bg/50 p-6 rounded-2xl border border-white/5">
                <h4 className="text-white font-bold mb-2">Cookies Essenciais</h4>
                <p className="text-sm">Necessários para o funcionamento básico do site e segurança.</p>
              </div>
              <div className="bg-card-bg/50 p-6 rounded-2xl border border-white/5">
                <h4 className="text-white font-bold mb-2">Cookies Analíticos</h4>
                <p className="text-sm">Ajudam-nos a medir o tráfego e o comportamento do utilizador de forma anónima.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4">4. Gestão de Cookies</h2>
            <p>
              Pode controlar e/ou eliminar cookies conforme desejar através das definições do seu navegador. No entanto, se o fizer, poderá ter de ajustar manualmente algumas preferências sempre que visitar um site e alguns serviços e funcionalidades podem não funcionar.
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
