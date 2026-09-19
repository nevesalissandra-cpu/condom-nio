import React from 'react';
import { Building2, MapPin, ExternalLink, ShieldCheck, Mail, Phone } from 'lucide-react';
import { APARTMENTS } from '../data/apartments';

interface FooterProps {
  onOpenInterestModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInterestModal }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 text-white flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-['Playfair_Display',serif] text-xl font-bold text-white leading-tight">
                  Residencial Jardins
                </span>
                <span className="block text-[10px] tracking-widest uppercase font-semibold text-amber-500">
                  São Paulo • Alto Padrão
                </span>
              </div>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Empreendimentos selecionados nas regiões mais valorizadas de São Paulo: Tatuapé, Mooca e Vila Ema. Plantas inteligentes e lazer estilo clube.
            </p>
            <div className="text-xs text-stone-400">
              <span className="font-semibold text-stone-200">CRECI Jurídico:</span> 34.981-J
            </div>
          </div>

          {/* Links para Formulários por Localidade */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Formulários por Região
            </h4>
            <ul className="space-y-2.5 text-xs">
              {APARTMENTS.map((apt, index) => (
                <li key={apt.id}>
                  <a
                    id={`footer-form-link-${index + 1}`}
                    href={apt.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 flex items-center gap-1.5 transition-colors group"
                  >
                    <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span className="group-hover:underline">
                      Formulário #{index + 1}: {apt.location} ({apt.tag})
                    </span>
                    <ExternalLink className="w-3 h-3 text-stone-500 group-hover:text-amber-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Localizações & Plantões */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Plantões de Atendimento
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <p>
                <strong className="text-stone-200">Tatuapé:</strong> Próx. ao Shopping Anália Franco e Metrô Tatuapé.
              </p>
              <p>
                <strong className="text-stone-200">Mooca:</strong> Próx. ao Clube Atlético Juventus e Av. Paes de Barros.
              </p>
              <p>
                <strong className="text-stone-200">Vila Ema:</strong> Av. Vila Ema, próx. à Estação São Lucas do Monotrilho.
              </p>
              <p className="text-[11px] text-amber-500 font-semibold pt-1">
                Atendimento todos os dias, das 09h às 19h
              </p>
            </div>
          </div>

          {/* Atendimento & CTA */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Atendimento VIP
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Prefere que nossa equipe entre em contato diretamente com você?
            </p>
            <button
              id="footer-open-modal-btn"
              onClick={onOpenInterestModal}
              className="w-full py-3 px-4 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs uppercase tracking-wider text-center transition-colors shadow-md"
            >
              Tenho Interesse Geral
            </button>
            <div className="flex items-center gap-2 text-xs text-stone-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Garantia de privacidade e atendimento seguro</span>
            </div>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Residencial Jardins. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#plantas" className="hover:text-stone-300 transition-colors">Plantas</a>
            <a href="#localizacao" className="hover:text-stone-300 transition-colors">Localizações</a>
            <a href="#faq" className="hover:text-stone-300 transition-colors">Perguntas Frequentes</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
