import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

interface FloatingMobileBarProps {
  onOpenInterestModal: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ onOpenInterestModal }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 p-3 shadow-2xl">
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <div className="text-[10px] uppercase font-bold text-amber-800 tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            <span>Condição Especial</span>
          </div>
          <div className="text-xs font-bold text-stone-900 leading-tight">
            A partir de R$ 289.000
          </div>
        </div>

        <button
          id="floating-mobile-tenho-interesse-btn"
          onClick={onOpenInterestModal}
          className="px-5 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs shadow-md flex items-center gap-1.5 active:scale-95 transition-transform"
        >
          <span>Tenho Interesse</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
