'use client';

import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface ChromeScrollButtonProps {
  onClick: (e: React.MouseEvent) => void;
  ariaLabel?: string;
}

export function ChromeScrollButton({ onClick, ariaLabel }: ChromeScrollButtonProps) {
  return (
    <div className="relative flex items-center justify-center p-6"> {/* Container de marge pour l'effet de glow */}
      <button
        onClick={onClick}
        aria-label={ariaLabel || "Scroll down"}
        className="relative group w-[48px] h-[48px] rounded-full outline-none transition-transform duration-500 hover:scale-[1.02] active:scale-95 isolate"
      >
        {/* 1. FLOU ARRIÈRE (Le Glow qui bave) */}
        {/* Crée l'effet de halo lumineux autour du métal quand ça tourne */}
        <div className="absolute inset-[-4px] rounded-full z-0 opacity-40 blur-md overflow-hidden">
             <div className="absolute inset-[-100%] bg-[conic-gradient(from_180deg,transparent_0_300deg,#FFB300_340deg,#F538A0_360deg)] animate-[spin_4s_linear_infinite]" />
        </div>

        {/* 2. L'ANNEAU MÉTALLIQUE (La structure physique) */}
        {/* C'est lui qui définit l'épaisseur du métal. Note l'inset-0 ici. */}
        <div className="absolute inset-0 rounded-full z-10 overflow-hidden p-[2.5px]"> {/* p-[2.5px] définit l'épaisseur du métal */}
          
          {/* Le reflet qui tourne DANS le métal avec dégradé Kames */}
          <div className="absolute inset-[-100%] bg-[conic-gradient(from_180deg,transparent_0_310deg,#FFB300_330deg,#FF6D00_345deg,#F538A0_360deg)] animate-[spin_4s_linear_infinite]" />
          
          {/* Un overlay statique pour donner une teinte au métal quand il n'est pas éclairé */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFB300]/10 to-[#F538A0]/10 mix-blend-overlay" />
        </div>

        {/* 3. LE CŒUR NOIR (L'intérieur du bouton) */}
        {/* Positionné en absolute avec un inset pour laisser apparaître l'anneau du dessous */}
        <div className="absolute inset-[2.5px] rounded-full bg-black z-20 flex items-center justify-center overflow-hidden">
          
          {/* A. Ombre interne forte pour l'effet "Enfoncé" (Concave) */}
          <div className="absolute inset-0 shadow-[inset_0_2px_8px_rgba(255,179,0,0.15)] rounded-full pointer-events-none z-30" />
          
          {/* B. Texture Noise (Paper Shader) */}
          <div 
            className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none z-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          />

          {/* C. Reflet de verre supérieur (Lentille) avec teinte Kames */}
          <div className="absolute -top-[20%] left-0 right-0 h-[60%] bg-gradient-to-b from-[#FFB300]/20 to-transparent blur-[2px] z-20" />

          {/* D. L'Icône */}
          <motion.div
            initial={{ y: 0 }}
            whileHover={{ y: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="relative z-40"
          >
            <ArrowDown className="w-4 h-4 text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]" strokeWidth={1.5} />
          </motion.div>
        </div>
      </button>
    </div>
  );
}