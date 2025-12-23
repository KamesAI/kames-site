'use client';

import { useEffect, useRef } from 'react';

export function DemarcheBackground() {
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
    script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js';
    script.onload = () => {
      if (!window.UnicornStudio.isInitialized && window.UnicornStudio.init) {
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
    <div className="absolute w-full h-full left-0 top-0">
      <div 
        ref={containerRef}
        data-us-project="p7Ff6pfTrb5Gs59C7nLC" 
        className="absolute w-full h-full left-0 top-0"
        style={{ 
          width: '100%', 
          height: '100%',
          minHeight: '100%'
        }}
      />
    </div>
  );
}

