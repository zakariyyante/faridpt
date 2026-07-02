import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <ShieldCheck size={14} className="text-primary" />
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">
            Trust & Transparency
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-black mb-12 italic uppercase tracking-tighter">
          Política de <span className="gold-text">Privacidade</span>
        </h1>
        
        <div className="prose prose-invert max-w-none space-y-8 text-gray-400 font-medium leading-relaxed">
          <p className="text-lg">
            Bem-vindo ao faridpt.com. A sua privacidade é de extrema importância para nós. Esta Política de Privacidade descreve como recolhemos, utilizamos e protegemos as suas informações.
          </p>

          <section>
            <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4">1. Recolha de Informação</h2>
            <p>
              Não recolhemos informações de identificação pessoal, a menos que nos sejam fornecidas voluntariamente (por exemplo, através de um formulário de contacto). No entanto, utilizamos ferramentas de análise como o Vercel Analytics e o Google Tag para recolher dados anónimos sobre como os utilizadores interagem com o nosso site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4">2. Utilização de Cookies</h2>
            <p>
              Utilizamos cookies para melhorar a sua experiência de navegação e para fins analíticos. Ao utilizar o nosso site, concorda com o uso de cookies de acordo com a nossa Política de Cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4">3. Links de Afiliados</h2>
            <p>
              O faridpt.com é um site de marketing de afiliados. Isto significa que quando clica em links para marcas de casino no nosso site, podemos receber uma comissão. Estes links incluem parâmetros de rastreio (como o GCLID) para garantir que as conversões são atribuídas corretamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4">4. Responsabilidade</h2>
            <p>
              Não somos responsáveis pelas políticas de privacidade ou pelo conteúdo de sites de terceiros para os quais tenhamos links. Recomendamos que leia as políticas de privacidade de qualquer site que visite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4">5. Contacto</h2>
            <p>
              Se tiver alguma dúvida sobre esta Política de Privacidade, entre em contacto connosco através do e-mail <span className="text-primary">geral@faridpt.com</span>.
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
