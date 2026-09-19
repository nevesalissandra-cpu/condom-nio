import React from 'react';
import { ArrowUpRight, CheckCircle2, Shield, MapPin, Sparkles, FileText, ChevronRight } from 'lucide-react';
import { APARTMENTS } from '../data/apartments';

interface HeroProps {
  onOpenInterestModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInterestModal }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-stone-100/80 via-stone-50 to-white">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-stone-300/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/60 text-amber-900 text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>Lançamentos em 3 Regiões Nobres de SP</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 font-['Playfair_Display',serif] tracking-tight leading-[1.12]">
              Seu novo apartamento no{' '}
              <span className="text-amber-800 italic underline decoration-amber-300 decoration-wavy decoration-2">
                Tatuapé, Mooca ou Vila Ema
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed max-w-2xl font-normal">
              Escolha a sua localidade favorita em São Paulo. Empreendimentos modernos com plantas de <strong>42m² a 92m²</strong>, lazer estilo clube completo e facilidade de pagamento.
            </p>

            {/* Quick value props bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2.5 text-stone-700 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-amber-700 shrink-0" />
                <span>3 Localizações: Tatuapé, Mooca e Vila Ema</span>
              </div>
              <div className="flex items-center gap-2.5 text-stone-700 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-amber-700 shrink-0" />
                <span>Entrada facilitada parcelada direto em obras</span>
              </div>
              <div className="flex items-center gap-2.5 text-stone-700 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-amber-700 shrink-0" />
                <span>Aceita FGTS e financiamento bancário</span>
              </div>
              <div className="flex items-center gap-2.5 text-stone-700 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-amber-700 shrink-0" />
                <span>Próximo a metrô, monotrilho, parques e shoppings</span>
              </div>
            </div>

            {/* Main CTA Area */}
            <div className="pt-3 space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  id="hero-tenho-interesse-btn"
                  onClick={onOpenInterestModal}
                  className="px-8 py-4 rounded-xl bg-amber-700 hover:bg-amber-800 active:bg-amber-900 text-white font-bold text-lg shadow-xl hover:shadow-2xl shadow-amber-900/20 transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer group"
                >
                  <span>Tenho Interesse</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <a
                  href="#plantas"
                  id="hero-ver-plantas-btn"
                  className="px-6 py-4 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-semibold text-base shadow-sm hover:border-stone-400 transition-all duration-200 text-center flex items-center justify-center gap-2"
                >
                  <span>Ver Empreendimentos & Plantas</span>
                  <ChevronRight className="w-4 h-4 text-stone-500" />
                </a>
              </div>

              {/* Direct Form Quick Links with Location Tags */}
              <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 mt-4">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5 mb-2.5">
                  <FileText className="w-4 h-4 text-amber-700" />
                  <span>Escolha o formulário da sua localidade de interesse:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {APARTMENTS.map((apt, idx) => (
                    <a
                      key={apt.id}
                      id={`hero-direct-form-link-${idx + 1}`}
                      href={apt.formUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-white rounded-xl border border-amber-200 hover:border-amber-500 hover:shadow-md transition-all group flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[11px] font-extrabold px-2 py-0.5 rounded bg-amber-100 text-amber-900 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-amber-700" />
                          <span>{apt.location}</span>
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-amber-700 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <div className="text-xs font-bold text-stone-900">
                        {apt.name}
                      </div>
                      <div className="text-[11px] text-stone-500 mt-0.5">
                        {apt.priceStartingFrom}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Micro proof */}
            <div className="flex items-center gap-3 pt-2 text-xs text-stone-500">
              <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Atendimento direto dos corretores credenciados para Tatuapé, Mooca e Vila Ema.</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main property image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] object-cover group">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
                  alt="Fachada moderna dos empreendimentos"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent" />
                
                {/* Floating details on image */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-amber-700 text-white text-xs font-bold">
                      📍 Tatuapé
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-amber-800 text-white text-xs font-bold">
                      📍 Mooca
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-stone-800 text-white text-xs font-bold">
                      📍 Vila Ema
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-['Playfair_Display',serif]">
                    Residencial Jardins & Coleção São Paulo
                  </h3>
                  <p className="text-stone-300 text-xs">
                    Plantas inteligentes e lazer clube de alto padrão nas localizações mais desejadas.
                  </p>
                </div>
              </div>

              {/* Floating pill badge 1: Localidades Atendidas */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white p-3.5 rounded-2xl shadow-xl border border-stone-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold text-sm">
                  <MapPin className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">3 Bairros Exclusivos</div>
                  <div className="text-[11px] text-stone-500">Tatuapé • Mooca • Vila Ema</div>
                </div>
              </div>

              {/* Floating pill badge 2: Condição Especial */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-stone-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm">
                  FGTS
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">Entrada Facilitada</div>
                  <div className="text-[11px] text-emerald-700 font-semibold">Parcele direto na obra</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
