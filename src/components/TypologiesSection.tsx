import React, { useState } from 'react';
import { BedDouble, Bath, Car, Maximize2, Check, ExternalLink, Sparkles, MapPin } from 'lucide-react';
import { APARTMENTS } from '../data/apartments';

interface TypologiesSectionProps {
  onSelectApartment: (apartmentId: string) => void;
}

export const TypologiesSection: React.FC<TypologiesSectionProps> = ({ onSelectApartment }) => {
  const [activeTab, setActiveTab] = useState<string>(APARTMENTS[0].id); // default to Tatuapé

  const currentApt = APARTMENTS.find((a) => a.id === activeTab) || APARTMENTS[0];

  return (
    <section id="plantas" className="py-16 sm:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-amber-700" />
            <span>Plantas & Empreendimentos por Localidade</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Playfair_Display',serif] text-stone-900 tracking-tight">
            Descubra os apartamentos em cada região
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            Selecione a região de sua preferência para conferir plantas, acabamentos, localização exata e acessar o formulário oficial dedicado.
          </p>

          {/* Location Switcher Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-white border border-stone-300 shadow-sm max-w-full overflow-x-auto">
            {APARTMENTS.map((apt) => (
              <button
                key={apt.id}
                id={`tab-btn-${apt.id}`}
                onClick={() => setActiveTab(apt.id)}
                className={`flex items-center gap-2 px-5 sm:px-7 py-3 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeTab === apt.id
                    ? 'bg-amber-700 text-white shadow-md'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                <MapPin className="w-4 h-4" />
                <span>{apt.location} ({apt.tag})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Typology Spotlight Card */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden mb-16 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Image Side */}
            <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto min-h-[380px] overflow-hidden group">
              <img
                src={currentApt.imageUrl}
                alt={currentApt.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-amber-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-md">
                <MapPin className="w-3.5 h-3.5" />
                <span>Localidade: {currentApt.location}</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/85 to-transparent p-5 rounded-xl text-white">
                <div className="text-xs uppercase tracking-wider text-amber-300 font-bold">
                  {currentApt.cityZone}
                </div>
                <div className="text-2xl font-bold font-['Playfair_Display',serif]">
                  {currentApt.name}
                </div>
                <div className="text-xs text-stone-300 mt-1">
                  {currentApt.addressHighlight}
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-4 mb-6">
                  <div>
                    <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                      Valor de Lançamento em {currentApt.location}
                    </span>
                    <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-['Playfair_Display',serif]">
                      {currentApt.priceStartingFrom}
                    </div>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                    {currentApt.tag}
                  </span>
                </div>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                  {currentApt.description}
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="text-center sm:text-left">
                    <div className="flex items-center gap-1.5 text-stone-500 text-xs font-medium">
                      <Maximize2 className="w-3.5 h-3.5 text-amber-700" />
                      <span>Metragem</span>
                    </div>
                    <div className="text-base font-bold text-stone-900 mt-1">{currentApt.area}</div>
                  </div>

                  <div className="text-center sm:text-left">
                    <div className="flex items-center gap-1.5 text-stone-500 text-xs font-medium">
                      <BedDouble className="w-3.5 h-3.5 text-amber-700" />
                      <span>Dormitórios</span>
                    </div>
                    <div className="text-base font-bold text-stone-900 mt-1">{currentApt.bedrooms}</div>
                  </div>

                  <div className="text-center sm:text-left">
                    <div className="flex items-center gap-1.5 text-stone-500 text-xs font-medium">
                      <Bath className="w-3.5 h-3.5 text-amber-700" />
                      <span>Banheiros</span>
                    </div>
                    <div className="text-base font-bold text-stone-900 mt-1">{currentApt.bathrooms}</div>
                  </div>

                  <div className="text-center sm:text-left">
                    <div className="flex items-center gap-1.5 text-stone-500 text-xs font-medium">
                      <Car className="w-3.5 h-3.5 text-amber-700" />
                      <span>Vagas</span>
                    </div>
                    <div className="text-base font-bold text-stone-900 mt-1">{currentApt.parkingSpots}</div>
                  </div>
                </div>

                {/* Location specific highlights */}
                <div className="space-y-2 mb-8 bg-amber-50/60 p-4 rounded-2xl border border-amber-200/80">
                  <div className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-700" />
                    <span>Pontos fortes da localização no {currentApt.location}:</span>
                  </div>
                  {currentApt.locationHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons with the explicit Google Form URL */}
              <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row gap-3">
                <a
                  id={`cta-btn-${currentApt.id}`}
                  href={currentApt.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-4 px-6 rounded-xl bg-amber-700 hover:bg-amber-800 active:bg-amber-900 text-white font-bold text-base text-center shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Tenho Interesse em {currentApt.location}</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <button
                  id={`open-all-forms-modal-${currentApt.id}`}
                  onClick={() => onSelectApartment(currentApt.id)}
                  className="py-4 px-5 rounded-xl bg-white border border-stone-300 hover:border-amber-400 text-stone-700 hover:text-amber-800 font-semibold text-sm transition-colors text-center"
                >
                  Ver Todas as Localidades
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* All 3 Cards Comparison Grid with Locations */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold font-['Playfair_Display',serif] text-stone-900">
              Comparativo das 3 Regiões
            </h3>
            <p className="text-stone-600 text-sm mt-1">
              Clique no botão de interesse da localidade que melhor atende à sua rotina:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {APARTMENTS.map((apt, idx) => (
              <div
                key={apt.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={apt.imageUrl}
                      alt={apt.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-amber-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{apt.location}</span>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                      {apt.area}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-1">
                      {apt.tag}
                    </div>
                    <h4 className="text-lg font-bold text-stone-900 font-['Playfair_Display',serif] group-hover:text-amber-800 transition-colors">
                      {apt.name}
                    </h4>
                    <p className="text-xs text-stone-500 mt-1">
                      {apt.addressHighlight}
                    </p>

                    <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600 font-medium">
                      <span>{apt.bedrooms}</span>
                      <span>{apt.parkingSpots}</span>
                    </div>

                    <div className="mt-4">
                      <div className="text-[11px] text-stone-500 font-medium uppercase">Valor estimado</div>
                      <div className="text-lg font-bold text-amber-800">
                        {apt.priceStartingFrom}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    id={`cards-tenho-interesse-btn-${idx + 1}`}
                    href={apt.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 transition-colors duration-200 shadow-sm"
                  >
                    <span>Tenho Interesse ({apt.location})</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
