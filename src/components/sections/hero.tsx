'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const ROTATING_PHRASES = [
  "qui conseille ses clients sur l'IA",
  "spécialisée dans la formation à l'IA",
  "qui développe des systèmes portés par l'IA",
];

const ROTATE_EVERY_MS = 2600;

export default function Hero() {
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
    <section id="hero" className="relative isolate bg-black section-padding">
      <div className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 py-24 md:py-32 text-center">
        
          {/* TITRE PRINCIPAL : 2 lignes en gras */}
          <h1 className="mx-auto max-w-5xl text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.8] md:leading-[2] tracking-tight font-headline">
            <span className="block text-gradient">
              Transformez votre entreprise
            </span>
            <span className="block text-gradient mt-2">
              avec l'intelligence artificielle
            </span>
          </h1>

          {/* SECTION SOUS-TEXTES */}
          <div className="mt-28 md:mt-32 space-y-3 max-w-2xl mx-auto">
            
            {/* Ligne 1 : "Kames met l'IA au service de votre croissance" EN GRAS */}
            <p className="text-base md:text-lg font-semibold text-white font-headline">
              Kames met l'IA au service de votre croissance.
            </p>

            {/* Ligne 2 : "Nous ne sommes pas une agence" */}
            <p className="text-base md:text-lg text-white/70">
              Nous ne sommes pas une agence
            </p>

            {/* Ligne 3 : La phrase qui tourne en dégradé ET EN GRAS */}
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

            {/* Ligne 4 : "Nous sommes tout cela à la fois." */}
            <p className="text-base md:text-lg text-white/70">
              Nous sommes tout cela à la fois.
            </p>
          </div>

          {/* CTA : Bouton rond avec flèche */}
          <div className="mt-12 flex items-center justify-center">
            <button
              aria-label="Découvrir nos services"
              onClick={goToServices}
              className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 ring-1 ring-white/10 transition duration-300 hover:bg-black hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-[#FFB300] focus:ring-offset-2 focus:ring-offset-black"
            >
              <ArrowDown 
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" 
                style={{ color: '#FFB300' }} 
              />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}