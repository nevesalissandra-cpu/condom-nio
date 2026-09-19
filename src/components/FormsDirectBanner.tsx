import React from 'react';
import { ExternalLink, ClipboardCheck, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { APARTMENTS } from '../data/apartments';

export const FormsDirectBanner: React.FC = () => {
  return (
    <section id="formularios-interesse" className="py-14 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider mb-3">
            <ClipboardCheck className="w-4 h-4 text-amber-700" />
            <span>Formulários Oficiais por Localidade</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Playfair_Display',serif] text-stone-900">
            Cadastre seu interesse no bairro de sua escolha
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Cada link abaixo abre o formulário exclusivo correspondente à localidade desejada: <strong>Tatuapé</strong>, <strong>Mooca</strong> ou <strong>Vila Ema</strong>.
          </p>
        </div>

        {/* 3 Form Cards with specific Locations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {APARTMENTS.map((apt, index) => (
            <div
              key={apt.id}
              className="bg-stone-50 rounded-2xl p-6 border border-stone-200 hover:border-amber-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Location Badge & Form Number */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-700 text-white text-xs font-bold shadow-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{apt.location}</span>
                  </div>
                  <span className="text-xs font-semibold text-stone-500">
                    Formulário #{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-stone-900 font-['Playfair_Display',serif] group-hover:text-amber-800 transition-colors">
                  {apt.name}
                </h3>
                
                <div className="text-xs font-semibold text-amber-800 mt-1 mb-2">
                  {apt.addressHighlight}
                </div>

                <div className="text-xs font-medium text-stone-500 mb-3">
                  {apt.area} • {apt.bedrooms}
                </div>

                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {apt.description}
                </p>

                {/* Specific location highlights */}
                <div className="space-y-1.5 text-xs text-stone-700 mb-6 bg-white p-3 rounded-xl border border-stone-200">
                  <div className="font-semibold text-stone-900 text-[11px] uppercase tracking-wider mb-1 text-amber-900">
                    Destaques desta Localidade:
                  </div>
                  {apt.locationHighlights.slice(0, 3).map((hl, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-stone-600">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-3 text-xs text-stone-500 flex items-center justify-between">
                  <span>Valor estimado</span>
                  <span className="font-bold text-sm text-stone-900">{apt.priceStartingFrom}</span>
                </div>

                <a
                  id={`direct-form-button-${index + 1}`}
                  href={apt.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-amber-700 hover:bg-amber-800 active:bg-amber-900 text-white font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <span>Tenho Interesse em {apt.location}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
