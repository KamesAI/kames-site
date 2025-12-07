'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import dynamic from 'next/dynamic';

// Import dynamique corrigé pour gérer l'export nommé
const HeroBackground = dynamic(() => import('./hero-background').then(mod => mod.HeroBackground), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black z-0" />
});

const ROTATING_PHRASES = [
  "qui conseille ses clients sur l'IA",
  "spécialisée dans la formation à l'IA",
  "qui développe des systèmes portés par l'IA",
];

const ROTATE_EVERY_MS = 2600;

// Changement en export nommé pour correspondre à l'import dans page.tsx
export function Hero() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<'enter' | 'idle' | 'exit'>('enter');
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const run = () => {
      setPhase('enter');
      window.setTimeout(() => setPhase('idle'), 550);
      window.setTimeout(() => setPhase('exit'), ROTATE_EVERY_MS - 550);
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % ROTATING_PHRASES.length);
        setPhase('enter');
      }, ROTATE_EVERY_MS);
    };

    run();
    timerRef.current = window.setInterval(run, ROTATE_EVERY_MS) as unknown as number;

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, []);

  const goToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('services')?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center overflow-hidden">
      
      {/* 1. BACKGROUND 3D (R3F) */}
      <div className="absolute inset-0 z-0">
        <HeroBackground />
      </div>

      {/* 2. CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* TITRE PRINCIPAL */}
        <h1 className="mx-auto max-w-5xl text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.8] md:leading-[2] tracking-tight font-headline mb-8 md:mb-12">
          <span className="block text-gradient">
            Transformez votre entreprise
          </span>
          <span className="block text-gradient mt-2">
            grâce à l'intelligence artificielle
          </span>
        </h1>

        {/* SOUS-TITRES ANIMÉS */}
        <div className="space-y-3 max-w-3xl mx-auto">
            
          {/* Ligne 1 */}
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white font-headline">
            Kames met l'IA au service de votre croissance.
          </p>

          {/* Ligne 2 */}
          <p className="text-base md:text-lg text-white/70">
            Nous ne sommes pas une agence
          </p>

          {/* Ligne 3 : La phrase qui tourne */}
          <div className="h-8 md:h-9 overflow-hidden flex items-center justify-center">
            <span
              key={index}
              className={[
                "inline-block text-gradient text-base md:text-lg font-semibold transition-all duration-500 font-headline",
                phase === 'enter' && "animate-text-appear",
                phase === 'exit' && "animate-text-disappear",
              ].filter(Boolean).join(' ')}
            >
              {ROTATING_PHRASES[index]}
            </span>
          </div>

          {/* Ligne 4 */}
          <p className="text-base md:text-lg text-white/70">
            Nous sommes tout cela à la fois.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <button 
            aria-label="Découvrir nos services"
            onClick={goToServices}
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-[#FFB300]"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
}