import React from 'react';
import { CreditCard, Wallet, Percent, ShieldCheck, Check, ArrowUpRight } from 'lucide-react';
import { FORM_LINKS } from '../data/apartments';

interface FinancingBannerProps {
  onOpenInterestModal: () => void;
}

export const FinancingBanner: React.FC<FinancingBannerProps> = ({ onOpenInterestModal }) => {
  return (
    <section id="condicoes" className="py-16 sm:py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3 py-1 rounded-md bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
                Condições de Pagamento & Financiamento
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Playfair_Display',serif] tracking-tight">
                Conquiste seu imóvel com condições sob medida
              </h2>

              <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
                Planos flexíveis de pagamento durante a construção e assessoria de crédito imobiliário gratuita para garantir as melhores taxas do mercado.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Entrada parcelada em até 36x</h4>
                    <p className="text-xs text-stone-300">Pague direto para a construtora sem juros durante o período de obras.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Utilização do seu FGTS</h4>
                    <p className="text-xs text-stone-300">Use seu saldo acumulado como parte da entrada ou amortização.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Aprovação rápida e sem burocracia</h4>
                    <p className="text-xs text-stone-300">Equipe de despachantes bancários conveniada a Caixa, Itaú, Bradesco e Santander.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card / CTA */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/15 text-center space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-amber-600 text-white flex items-center justify-center mx-auto shadow-lg">
                <CreditCard className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-2xl font-bold font-['Playfair_Display',serif] text-white">
                  Quer receber uma simulação gratuita?
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2">
                  Preencha o formulário de interesse da sua tipologia favorita e nossa equipe enviará uma simulação personalizada da sua parcela.
                </p>
              </div>

              <div className="pt-2 space-y-3">
                <button
                  id="financing-tenho-interesse-btn"
                  onClick={onOpenInterestModal}
                  className="w-full py-4 px-6 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-stone-950 font-extrabold text-base shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Tenho Interesse na Simulação</span>
                  <ArrowUpRight className="w-5 h-5" />
                </button>

                <div className="text-[11px] text-stone-400">
                  Sem custo, sem compromisso e com resposta rápida.
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
