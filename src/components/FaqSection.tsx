import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';
import { FAQS } from '../data/apartments';

interface FaqSectionProps {
  onOpenInterestModal: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenInterestModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Playfair_Display',serif] text-stone-900 tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3">
            Informações claras sobre o processo de compra, formulário de interesse e visitação.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  id={`faq-btn-${index}`}
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-stone-900 hover:text-amber-800 transition-colors"
                >
                  <span className="text-base sm:text-lg font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-stone-600 leading-relaxed border-t border-stone-100 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-stone-200">
          <p className="text-stone-700 text-sm font-medium">
            Ficou com alguma dúvida específica sobre o empreendimento?
          </p>
          <div className="mt-3">
            <button
              id="faq-tenho-interesse-cta"
              onClick={onOpenInterestModal}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-sm font-bold shadow-md transition-all cursor-pointer"
            >
              <span>Tenho Interesse e Quero Saber Mais</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
