'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import Logo from '@/components/logo';

export default function Header() {
  // Fonction de scroll fluide
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-6 md:py-8 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Logo Left */}
        <div className="flex items-center shrink-0">
          <Link href="/" onClick={(e) => handleNavClick(e, 'hero')}>
            <Logo />
          </Link>
        </div>

        {/* Center Navigation Pill (Desktop) */}
        <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
          <div className="nav-pill rounded-full px-8 py-2.5">
            <ul className="flex items-center space-x-8 text-sm font-normal text-neutral-400">
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-white transition-colors duration-200">Services</a></li>
              <li><a href="#realisations" onClick={(e) => handleNavClick(e, 'realisations')} className="hover:text-white transition-colors duration-200">Réalisations</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-white transition-colors duration-200">À propos</a></li>
              <li><a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="hover:text-white transition-colors duration-200">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Right CTA */}
        <div className="flex items-center shrink-0 gap-4">
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="magic-btn-container group cursor-pointer">
            <span className="magic-btn-content">Contact</span>
          </a>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </div>
        </div>

      </div>
    </nav>
  );
}