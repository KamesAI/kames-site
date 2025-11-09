'use client';

import { useEffect, useState } from 'react';

const LINKS = [
  { id: 'services', label: 'Services' },
  { id: 'achievements', label: 'Réalisations' },
  { id: 'about', label: 'À propos' },    
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const sections = LINKS.map(l => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActive(id);
    history.replaceState(null, '', `#${id}`);
  };

  return (
    <header className="header-glow sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-lg font-headline font-semibold tracking-tight">KAMES</a>
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
