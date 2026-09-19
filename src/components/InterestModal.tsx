import React from 'react';
import { X, ExternalLink, MapPin, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { APARTMENTS } from '../data/apartments';

interface InterestModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedApartmentId?: string | null;
}

export const InterestModal: React.FC<InterestModalProps> = ({
  isOpen,
  onClose,
  selectedApartmentId
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="interest-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        id="interest-modal-container"
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white p-6 sm:p-7">
          <button
            id="close-interest-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 text-stone-300 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Formulários Oficiais por Localidade</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight font-['Playfair_Display',serif]">
            Tenho Interesse no Imóvel
          </h3>
          <p className="mt-1.5 text-stone-300 text-xs sm:text-sm leading-relaxed">
            Selecione abaixo a <strong>localidade</strong> desejada para abrir o formulário oficial do Google Forms e receber a tabela de valores, plantas e agendamento daquela região:
          </p>
        </div>

        {/* Options List */}
        <div className="p-5 sm:p-7 space-y-3.5 max-h-[68vh] overflow-y-auto bg-stone-50">
          <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">
            Escolha uma das 3 localidades disponíveis:
          </div>

          {APARTMENTS.map((apt, index) => {
            const isSelected = selectedApartmentId === apt.id;
            return (
              <a
                key={apt.id}
                id={`modal-form-option-${index + 1}`}
                href={apt.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block p-4 sm:p-5 rounded-xl border transition-all duration-200 bg-white hover:border-amber-500 hover:shadow-lg ${
                  isSelected
                    ? 'border-amber-600 ring-2 ring-amber-500/20 shadow-md'
                    : 'border-stone-200 shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200 group-hover:bg-amber-700 group-hover:text-white transition-colors">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      {/* Location and Tag pills */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-amber-700 text-white tracking-wide">
                          📍 {apt.location}
                        </span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-200">
                          {apt.tag}
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-1.5 group-hover:text-amber-700 transition-colors">
                        {apt.name}
                      </h4>

                      <p className="text-xs text-amber-900 font-medium mt-0.5">
                        {apt.addressHighlight}
                      </p>

                      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-stone-500">
                        <span>{apt.area}</span>
                        <span>•</span>
                        <span>{apt.bedrooms}</span>
                        <span>•</span>
                        <span className="font-bold text-amber-800">{apt.priceStartingFrom}</span>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-700 group-hover:text-amber-800 group-hover:translate-x-0.5 transition-all pt-1">
                    <span className="hidden sm:inline">Preencher Form</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </a>
            );
          })}

          {/* Guarantee pill */}
          <div className="mt-4 flex items-center gap-2 text-xs text-stone-500 bg-stone-100 p-3 rounded-lg border border-stone-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Cada link direciona para o Google Forms oficial da localidade escolhida. Seus dados estão protegidos.
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-white border-t border-stone-200 flex items-center justify-end gap-3">
          <button
            id="modal-cancel-btn"
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg border border-stone-300 text-stone-700 text-sm font-medium hover:bg-stone-50 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
