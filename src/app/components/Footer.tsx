import Link from "next/link";
import Image from "next/image";
import { Crown } from "lucide-react";

const Footer = () => {
  const currentYear = 2026;

  const regulatoryLogos = [
    { src: "/18plus.svg", alt: "18+", href: "https://www.srij.turismodeportugal.pt/", width: 40, height: 40 },
    { src: "/srij.svg", alt: "SRIJ", href: "https://www.srij.turismodeportugal.pt/", width: 100, height: 40 },
    { src: "/begambleaware.svg", alt: "BeGambleAware", href: "https://www.begambleaware.org/", width: 120, height: 40 },
    { src: "/GamCare.svg", alt: "GamCare", href: "https://www.gamcare.org.uk/", width: 100, height: 40 },
    { src: "/IBAS.svg", alt: "IBAS", href: "https://www.ibas-uk.com/", width: 80, height: 40 },
    { src: "/gordonmoody.png", alt: "Gordon Moody", href: "https://gordonmoody.org.uk/", width: 100, height: 40 },
  ];

  return (
    <footer className="bg-[#020305] border-t border-primary/10 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <Link href="/" className="group mb-12">
            <div className="relative w-64 h-16 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Faridpt Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-5xl text-center md:text-left">
            <div className="flex flex-col gap-6">
              <h4 className="text-primary font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center md:justify-start gap-2">
                <Crown size={14} /> Navegação
              </h4>
              <div className="flex flex-col gap-3">
                <Link href="/" className="text-gray-500 hover:text-white text-sm font-bold transition-colors">Início</Link>
                <Link href="#brands" className="text-gray-500 hover:text-white text-sm font-bold transition-colors">Melhores Marcas</Link>
                <Link href="#guide" className="text-gray-500 hover:text-white text-sm font-bold transition-colors">Guia de Avaliação</Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-primary font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center md:justify-start gap-2">
                <Crown size={14} /> Legal
              </h4>
              <div className="flex flex-col gap-3">
                <Link href="/privacy" className="text-gray-500 hover:text-white text-sm font-bold transition-colors">Política de Privacidade</Link>
                <Link href="/terms" className="text-gray-500 hover:text-white text-sm font-bold transition-colors">Termos de Serviço</Link>
                <Link href="/cookies" className="text-gray-500 hover:text-white text-sm font-bold transition-colors">Política de Cookies</Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-primary font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center md:justify-start gap-2">
                <Crown size={14} /> Apoio
              </h4>
              <div className="flex flex-col gap-3">
                <Link href="#contact" className="text-gray-500 hover:text-white text-sm font-bold transition-colors">Contacto</Link>
                <Link href="#faq" className="text-gray-500 hover:text-white text-sm font-bold transition-colors">Perguntas Frequentes</Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-primary font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center md:justify-start gap-2">
                <Crown size={14} /> Responsabilidade
              </h4>
              <div className="flex flex-col gap-3">
                <Link href="https://www.srij.turismodeportugal.pt" target="_blank" className="text-gray-500 hover:text-white text-sm font-bold transition-colors">Autoridade SRIJ</Link>
                <Link href="https://www.begambleaware.org/" target="_blank" className="text-gray-500 hover:text-white text-sm font-bold transition-colors">BeGambleAware</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto border-t border-white/5 pt-10 mb-10">
          <p className="text-[10px] text-gray-600 text-center leading-relaxed font-medium uppercase tracking-wider">
            AVISO: faridpt.com é um portal de comparação independente. As informações aqui contidas são apenas para fins informativos e de entretenimento. O jogo online é regulado em Portugal pelo SRIJ. Certifique-se de que cumpre todos os requisitos legais antes de jogar. Jogue com responsabilidade.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-10 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
          {regulatoryLogos.map((logo, index) => (
            <Link key={index} href={logo.href} target="_blank" className="relative transition-transform hover:scale-110">
              <Image 
                src={logo.src} 
                alt={logo.alt} 
                width={logo.width} 
                height={logo.height} 
                className="object-contain h-8 md:h-10 w-auto" 
              />
            </Link>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[10px] text-gray-700 font-black uppercase tracking-[0.3em]">
            &copy; {currentYear} faridpt.com • O Padrão de Elite em Avaliações
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
