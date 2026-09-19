import React, { useState } from 'react';
import { Building2, Menu, X, Phone, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenInterestModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInterestModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-700 to-amber-900 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="block font-['Playfair_Display',serif] text-xl font-bold text-stone-900 leading-tight">
                Residencial Jardins
              </span>
              <span className="block text-[10px] tracking-widest uppercase font-semibold text-amber-800">
                Apartamentos de Alto Padrão
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-700">
            <a href="#plantas" className="hover:text-amber-800 transition-colors">
              Plantas & Valores
            </a>
            <a href="#diferenciais" className="hover:text-amber-800 transition-colors">
              Diferenciais & Lazer
            </a>
            <a href="#localizacao" className="hover:text-amber-800 transition-colors">
              Localização
            </a>
            <a href="#condicoes" className="hover:text-amber-800 transition-colors">
              Condições & FGTS
            </a>
            <a href="#faq" className="hover:text-amber-800 transition-colors">
              Dúvidas
            </a>
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              id="navbar-tenho-interesse-btn"
              onClick={onOpenInterestModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 active:bg-amber-900 text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <span>Tenho Interesse</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-stone-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-fade-in shadow-xl">
          <nav className="flex flex-col space-y-3 text-base font-medium text-stone-700">
            <a
              href="#plantas"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded-md hover:bg-stone-100"
            >
              Plantas & Modelos
            </a>
            <a
              href="#diferenciais"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded-md hover:bg-stone-100"
            >
              Lazer & Diferenciais
            </a>
            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded-md hover:bg-stone-100"
            >
              Localização Privilegiada
            </a>
            <a
              href="#condicoes"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded-md hover:bg-stone-100"
            >
              Financiamento & Entrada
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded-md hover:bg-stone-100"
            >
              Perguntas Frequentes
            </a>
          </nav>
          <div className="pt-2">
            <button
              id="mobile-menu-tenho-interesse-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInterestModal();
              }}
              className="w-full py-3 rounded-xl bg-amber-700 text-white font-semibold text-center shadow-md flex items-center justify-center gap-2"
            >
              <span>Tenho Interesse</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
