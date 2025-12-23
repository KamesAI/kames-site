'use client';

import { useEffect, useRef } from 'react';

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Charger le script UnicornStudio uniquement côté client
    if (typeof window === 'undefined') return;

    // Vérifier si UnicornStudio est déjà initialisé
    if (window.UnicornStudio?.isInitialized) return;

    // Initialiser UnicornStudio si ce n'est pas déjà fait
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
    }

    // Créer et charger le script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js';
    script.onload = () => {
      if (window.UnicornStudio && !window.UnicornStudio.isInitialized && window.UnicornStudio.init) {
        window.UnicornStudio.init();
        window.UnicornStudio.isInitialized = true;
      }
    };
    
    // Ajouter le script au document
    (document.head || document.body).appendChild(script);

    // Nettoyage lors du démontage
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div 
        ref={containerRef}
        data-us-project="N9XzvQXu7fA5SY2ewADJ" 
        className="w-full h-full"
        style={{ width: '100%', height: '100%' }}
      />
      {/* Overlay optionnel pour assombrir légèrement et assurer la lisibilité du texte par-dessus */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      
      {/* Dégradé en bas pour une transition fluide vers la section suivante */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
}