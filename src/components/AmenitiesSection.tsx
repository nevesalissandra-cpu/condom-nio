import React from 'react';
import { Waves, Utensils, Dumbbell, Briefcase, Heart, Smile, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { AMENITIES } from '../data/apartments';

interface AmenitiesSectionProps {
  onOpenInterestModal: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Waves: <Waves className="w-5 h-5" />,
  Utensils: <Utensils className="w-5 h-5" />,
  Dumbbell: <Dumbbell className="w-5 h-5" />,
  Briefcase: <Briefcase className="w-5 h-5" />,
  Heart: <Heart className="w-5 h-5" />,
  Smile: <Smile className="w-5 h-5" />
};

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ onOpenInterestModal }) => {
  return (
    <section id="diferenciais" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-amber-700" />
            <span>Lazer & Infraestrutura Premium</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Playfair_Display',serif] text-stone-900 tracking-tight">
            Mais de 15 itens de lazer entregues equipados e decorados
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            Uma extensão natural da sua casa. Desfrute de momentos inesquecíveis com a família e amigos sem precisar sair do condomínio.
          </p>
        </div>

        {/* Amenities Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AMENITIES.map((amenity) => (
            <div
              key={amenity.id}
              className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 group flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm p-2 rounded-xl text-amber-800 shadow">
                  {iconMap[amenity.iconName]}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-['Playfair_Display',serif] text-stone-900 mb-2 group-hover:text-amber-800 transition-colors">
                    {amenity.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Building Standards */}
        <div className="mt-16 bg-stone-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                Segurança & Sustentabilidade
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif]">
                Tecnologia para o seu bem-estar diário
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Portaria blindada com controle de acesso facial 24 horas, gerador para áreas comuns e elevadores, reuso de águas pluviais para jardins, vagas com ponto de recarga para carros elétricos e energia solar fotovoltaica.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                id="amenities-tenho-interesse-btn"
                onClick={onOpenInterestModal}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-bold text-base shadow-xl transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>Tenho Interesse</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
