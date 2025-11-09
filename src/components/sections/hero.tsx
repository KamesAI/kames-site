'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';

// Ton utilitaire de classes si tu en as un (facultatif)
// import { cn } from '@/lib/utils';

const ROTATING_PHRASES = [
  "qui développe des systèmes portés par l’IA",
  "spécialisée dans la formation à l’IA",
  "qui conseille ses clients sur l’IA",
];

const ROTATE_EVERY_MS = 2600; // ~2,6s entre deux phrases

export default function Hero() {
  // état pour le texte qui tourne
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<'enter' | 'idle' | 'exit'>('enter');
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    // boucle : enter -> idle -> exit -> index+1 -> enter...
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
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="relative isolate overflow-hidden bg-black">
      {/* image/overlay éventuels déjà présents dans ton Hero — garde-les si tu en as */}
      <div className="container mx-auto px-6 pt-28 pb-24 md:pt-36 md:pb-28 text-center">
        {/* === Titre 2 lignes, pas 3 === */}
        <h1 className="mx-auto max-w-[28ch] text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          <span className="block text-gradient hero-title-line">
            Transformez votre entreprise
          </span>
          <span className="block text-gradient hero-title-line hero-title-delay">
            avec l’intelligence artificielle
          </span>
        </h1>

        {/* === Sous-texte en trois lignes === */}
        <div className="mt-6 space-y-2 text-base md:text-lg leading-relaxed">
          <p className="text-white/80">Kames met l’IA au service de votre croissance.</p>

          {/* ligne qui tourne (dégradé) */}
          <div className="h-7 md:h-8 overflow-hidden">
            <span
              key={index} // re-monte le DOM pour relancer l'animation
              className={[
                "inline-block text-gradient",
                phase === 'enter' && "hero-rotate-enter",
                phase === 'exit'  && "hero-rotate-exit",
              ].filter(Boolean).join(' ')}
            >
              {ROTATING_PHRASES[index]}
            </span>
          </div>

          <p className="text-white/70">Nous ne sommes pas une agence</p>
          <p className="text-white/70">Nous sommes tout cela à la fois.</p>
        </div>

        {/* === Petit CTA rond (flèche vers le bas) === */}
        <div className="mt-10 flex items-center justify-center">
          <button
            aria-label="Découvrir nos services"
            onClick={goToServices}
            className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/80 ring-1 ring-white/10 transition hover:bg-black focus:outline-none"
          >
            <ArrowDown className="h-4 w-4 transition group-hover:translate-y-0.5" style={{ color: '#FF6D00' }} />
          </button>
        </div>
      </div>
    </section>
  );
}
