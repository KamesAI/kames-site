'use client';
import Link from 'next/link';
import Logo from '@/components/logo';
import { Github, Linkedin } from 'lucide-react';

const XLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    aria-label="X logo"
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Logo + Localisation */}
          <div className="flex flex-col items-start">
            <Logo />
            <p className="mt-4 text-sm text-gray-400">
              Bordeaux, France
            </p>
          </div>

          {/* Liens rapides */}
          <div className="md:mx-auto">
            <h3 
              className="text-sm font-semibold tracking-wider uppercase mb-4"
              style={{
                background: 'linear-gradient(90deg, #FFB300 0%, #FF6D00 50%, #F538A0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              LIENS RAPIDES
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  onClick={(e) => handleScroll(e, '#hero')}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  onClick={(e) => handleScroll(e, '#services')}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#achievements"
                  onClick={(e) => handleScroll(e, '#achievements')}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Réalisations
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  onClick={(e) => handleScroll(e, '#about')}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="#documentation"
                  onClick={(e) => handleScroll(e, '#documentation')}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/nos-services"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Nos Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div className="md:ml-auto">
            <h3 
              className="text-sm font-semibold tracking-wider uppercase mb-4"
              style={{
                background: 'linear-gradient(90deg, #FFB300 0%, #FF6D00 50%, #F538A0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              SUIVEZ-NOUS
            </h3>
            <div className="flex space-x-4">
              <a 
                href="https://x.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="X"
              >
                <XLogo className="w-6 h-6" fill="currentColor" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Github"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-12 border-t border-white/10">
          <p className="text-sm text-center text-gray-400">
            © {new Date().getFullYear()} Kames AI. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;