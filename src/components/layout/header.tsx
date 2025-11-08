'use client';

import { useEffect, useState } from 'react';

const LINKS = [
  { id: 'services', label: 'Services' },
  { id: 'realisations', label: 'Réalisations' },
  { id: 'apropos', label: 'À propos' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [active, setActive] = useState<string>(''); // id actif

  // Détecte la section visible et colore le lien correspondant
  useEffect(() => {
    const sections = LINKS.map(l => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Scroll doux vers une section
  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    window.history.pushState({}, '', `#${id}`); // maj de l’URL
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActive(id);
  };

  return (
    <header className="header-glow sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo placeholder (tu mettras l’image plus tard) */}
        <a href="/" className="text-lg font-semibold tracking-tight">KAMES</a>

        <nav className="flex items-center gap-8 text-sm">
          {LINKS.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={go(link.id)}
              className={`nav-link ${active === link.id ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={go('contact')}
            className="rounded-xl border border-white/15 px-3 py-1.5 text-sm nav-link"
          >
            Contactez-nous
          </a>
        </nav>
      </div>
    </header>
  );
}
