import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Building, Train, ShoppingBag, Trees, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { APARTMENTS, NEARBY_POINTS } from '../data/apartments';

interface LocationSectionProps {
  onOpenInterestModal: () => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  transporte: <Train className="w-4 h-4 text-amber-700" />,
  lazer: <Trees className="w-4 h-4 text-emerald-700" />,
  compras: <ShoppingBag className="w-4 h-4 text-blue-700" />,
  educacao: <Building className="w-4 h-4 text-purple-700" />
};

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenInterestModal }) => {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('Tatuapé');

  const currentApartment = APARTMENTS.find((a) => a.location === selectedNeighborhood) || APARTMENTS[0];
  const filteredPoints = NEARBY_POINTS.filter((p) => p.neighborhood === selectedNeighborhood);

  return (
    <section id="localizacao" className="py-16 sm:py-24 bg-stone-100/70 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Navigation className="w-4 h-4 text-amber-700" />
            <span>Localizações Estratégicas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Playfair_Display',serif] text-stone-900 tracking-tight">
            Perto de tudo o que importa no Tatuapé, Mooca e Vila Ema
          </h2>
          <p className="mt-3 text-stone-600 text-base sm:text-lg">
            Selecione uma localidade para explorar a infraestrutura do entorno e acessar o formulário específico da região.
          </p>

          {/* Neighborhood switcher */}
          <div className="mt-6 inline-flex p-1.5 rounded-2xl bg-white border border-stone-300 shadow-sm">
            {['Tatuapé', 'Mooca', 'Vila Ema'].map((neigh) => (
              <button
                key={neigh}
                id={`filter-location-${neigh.toLowerCase().replace(' ', '-')}`}
                onClick={() => setSelectedNeighborhood(neigh)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedNeighborhood === neigh
                    ? 'bg-amber-700 text-white shadow-md'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{neigh}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Details of Selected Location */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-lg space-y-5">
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <div>
                  <span className="text-xs font-extrabold text-amber-800 uppercase tracking-wider">
                    {currentApartment.cityZone}
                  </span>
                  <h3 className="text-2xl font-bold font-['Playfair_Display',serif] text-stone-900 mt-0.5">
                    {currentApartment.name}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    {currentApartment.addressHighlight}
                  </p>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 font-bold text-xs">
                  {currentApartment.tag}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                  Diferenciais do Bairro:
                </div>
                {currentApartment.locationHighlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Nearby facilities */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                  Pontos de Interesse Próximos:
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {filteredPoints.map((point) => (
                    <div
                      key={point.id}
                      className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-white border border-stone-200 shrink-0">
                          {categoryIcons[point.category]}
                        </div>
                        <span className="font-semibold text-stone-800">{point.place}</span>
                      </div>
                      <div className="flex items-center gap-2 text-stone-500 font-medium shrink-0">
                        <span className="text-amber-800 font-bold">{point.distance}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {point.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA button with specific form */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  id={`location-form-cta-${currentApartment.id}`}
                  href={currentApartment.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3.5 rounded-xl bg-amber-700 hover:bg-amber-800 active:bg-amber-900 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 text-center"
                >
                  <span>Tenho Interesse no {currentApartment.location}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={onOpenInterestModal}
                  className="px-5 py-3.5 rounded-xl bg-white border border-stone-300 text-stone-700 hover:text-stone-900 text-xs font-semibold text-center"
                >
                  Ver Outras Opções
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Map Card */}
          <div className="lg:col-span-6">
            <div className="bg-white p-4 rounded-3xl border border-stone-200 shadow-xl space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-200 group">
                <img
                  src={currentApartment.imageUrl}
                  alt={currentApartment.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-stone-950/30" />

                {/* Pin marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="px-3.5 py-1.5 rounded-full bg-stone-900/90 backdrop-blur-md text-amber-300 text-xs font-bold shadow-2xl border border-amber-400/40 animate-pulse flex items-center gap-2 whitespace-nowrap">
                    <Building className="w-3.5 h-3.5 text-amber-400" />
                    <span>{currentApartment.name} ({currentApartment.location})</span>
                  </div>
                  <div className="w-4 h-4 bg-amber-600 rounded-full border-2 border-white shadow-lg mt-1" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-md text-white text-xs p-3 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="font-medium truncate">{currentApartment.addressHighlight}</span>
                  </div>
                  <span className="text-[11px] text-amber-300 font-bold shrink-0">São Paulo - SP</span>
                </div>
              </div>

              <div className="p-2 text-xs text-stone-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1">
                <span>Showroom e apartamento decorado disponíveis para visitação</span>
                <span className="text-emerald-700 font-semibold">Plantão Diário das 09h às 19h</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
