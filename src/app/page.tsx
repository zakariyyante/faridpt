import { brands } from "./data/brands";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BrandCard from "./components/BrandCard";
import DisclaimerBar from "./components/DisclaimerBar";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import MobileModal from "./components/MobileModal";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const gclidValue = typeof params.gclid === "string" ? params.gclid : undefined;

  // Filter out brands that are marked as mobile-only for the main grid
  const desktopBrands = brands.filter(brand => !brand.isMobile);
  const sortedBrands = [...desktopBrands].sort((a, b) => b.rating - a.rating);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <section id="brands" className="py-20 bg-background/50">
          <div className="container mx-auto px-4">
            <div className={`grid grid-cols-1 ${sortedBrands.length > 1 ? 'lg:grid-cols-3' : 'max-w-2xl mx-auto'} gap-8`}>
              {sortedBrands.map((brand, index) => (
                <BrandCard 
                  key={brand.id} 
                  brand={brand} 
                  rank={index + 1} 
                  gclid={gclidValue} 
                />
              ))}
            </div>
          </div>
        </section>

        <section id="guide" className="py-20 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-br from-primary/20 to-transparent p-1 md:p-px rounded-[3rem]">
              <div className="bg-background rounded-[3rem] p-8 md:p-16">
                <h2 className="text-3xl md:text-5xl font-black mb-8 italic uppercase tracking-tighter">
                  Guia de <span className="gold-text">Avaliação</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <p className="text-gray-400 font-medium leading-relaxed">
                      O nosso processo de avaliação é independente e rigoroso. Analisamos cada casino com base em critérios objetivos para garantir a sua segurança e diversão.
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full chip-gradient flex items-center justify-center text-black font-black">1</div>
                      <span className="text-white font-bold uppercase tracking-tight">Segurança e Licenciamento</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full chip-gradient flex items-center justify-center text-black font-black">2</div>
                      <span className="text-white font-bold uppercase tracking-tight">Variedade de Jogos</span>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full chip-gradient flex items-center justify-center text-black font-black">3</div>
                      <span className="text-white font-bold uppercase tracking-tight">Bónus e Promoções</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full chip-gradient flex items-center justify-center text-black font-black">4</div>
                      <span className="text-white font-bold uppercase tracking-tight">Métodos de Pagamento</span>
                    </div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-6">
                      * Atualizado semanalmente por especialistas do mercado português.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <DisclaimerBar />
        
        <AboutSection />

        <section id="faq" className="py-20 bg-background/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-black mb-12 italic uppercase tracking-tighter text-center">
              Perguntas <span className="gold-text">Frequentes</span>
            </h2>
            <div className="space-y-6">
              {[
                { q: "Os casinos listados são legais em Portugal?", a: "Sim, todos os casinos que recomendamos possuem licença válida emitida pelo SRIJ." },
                { q: "Como posso reclamar um bónus?", a: "Basta clicar no botão 'Reclamar Oferta' e seguir as instruções no site do casino." },
                { q: "O que é o GCLID?", a: "É um identificador de clique do Google usado para medir a eficácia das nossas recomendações." }
              ].map((item, i) => (
                <div key={i} className="bg-card-bg/50 border border-white/5 p-6 rounded-2xl">
                  <h4 className="text-white font-black uppercase tracking-tight mb-2 italic">{item.q}</h4>
                  <p className="text-gray-400 text-sm font-medium">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6 italic uppercase tracking-tighter">
              Precisa de <span className="gold-text">Ajuda?</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto font-medium">
              A nossa equipa de especialistas está disponível para esclarecer qualquer dúvida sobre os casinos online em Portugal.
            </p>
            <a href="mailto:geral@faridpt.com" className="inline-block bg-white/5 border border-primary/30 text-primary font-black px-12 py-4 rounded-2xl uppercase tracking-[0.2em] hover:bg-primary/10 transition-all">
              Contactar Equipa
            </a>
          </div>
        </section>
      </main>

      <Footer />

      <MobileModal brands={brands} gclid={gclidValue} />
    </div>
  );
}
