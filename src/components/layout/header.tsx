'use client';

import Link from 'next/link';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const isActive = (sectionId: string): boolean => {
    // Détecte si on est sur la page de réalisations
    if (sectionId === 'achievements' && pathname.startsWith('/realisations')) {
      return true;
    }
    // Désactive tous les liens de navigation si on est dans la section Contact
    if (activeSection === 'contact') {
      return false;
    }
    return activeSection === sectionId;
  };

  const scrollToHome = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky-header sticky top-0">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        
        {/* LOGO À GAUCHE - CLIQUABLE POUR ALLER À HOME */}
        <button onClick={scrollToHome} className="cursor-pointer hover:opacity-80 transition-opacity">
          <Logo />
        </button>
        
        {/* NAV AU CENTRE/DROITE */}
        <nav className="hidden md:flex gap-8 text-sm ml-auto">
          <Link
            href="#services"
            onClick={(e) => handleNavClick(e, 'services')}
            className={`nav-link text-white/80 hover:text-[#FFB300] transition-colors ${
              isActive('services') ? 'active' : ''
            }`}
          >
            Services
          </Link>

          <Link
            href="#achievements"
            onClick={(e) => handleNavClick(e, 'achievements')}
            className={`nav-link text-white/80 hover:text-[#FFB300] transition-colors ${
              isActive('achievements') ? 'active' : ''
            }`}
          >
            Réalisations
          </Link>

          <Link
            href="#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className={`nav-link text-white/80 hover:text-[#FFB300] transition-colors ${
              isActive('about') ? 'active' : ''
            }`}
          >
            À propos
          </Link>

          <Link
            href="#documentation"
            onClick={(e) => handleNavClick(e, 'documentation')}
            className={`nav-link text-white/80 hover:text-[#FFB300] transition-colors ${
              isActive('documentation') ? 'active' : ''
            }`}
          >
            Documentation
          </Link>
        </nav>

        {/* BOUTON CTA À DROITE */}
        <Link 
          href="#contact" 
          onClick={(e) => handleNavClick(e, 'contact')}
          className="ml-6"
        >
          <span 
            className="inline-block px-6 py-2 rounded-full border-2 border-gradient-to-r from-[#FFB300] via-[#FF6D00] to-[#F538A0] font-bold hover:opacity-80 transition-opacity"
            style={{
              background: 'black',
              borderImage: 'linear-gradient(90deg, #FFB300 0%, #FF6D00 50%, #F538A0 100%) 1',
            }}
          >
            <span 
              style={{
                background: 'linear-gradient(90deg, #FFB300 0%, #FF6D00 50%, #F538A0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Contactez-nous
            </span>
          </span>
        </Link>
      </div>
    </header>
  );
}