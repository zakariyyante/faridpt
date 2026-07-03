"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Marcas", href: "#brands" },
    { name: "Guia", href: "#guide" },
    { name: "Sobre Nós", href: "#about" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-48 h-12 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Faridpt Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link 
            href="#brands" 
            className="bg-primary hover:bg-primary-light text-black font-black px-6 py-2 rounded-full text-xs uppercase tracking-tighter transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-primary/20"
          >
            Melhores Marcas
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-primary/10 py-8 px-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-black italic uppercase tracking-tighter text-gray-300 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#brands"
            onClick={() => setIsOpen(false)}
            className="bg-primary text-black text-center font-black py-4 rounded-xl uppercase tracking-widest mt-4"
          >
            Melhores Marcas
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
