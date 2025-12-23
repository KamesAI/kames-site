'use client';

import Link from 'next/link';
import { Github, Linkedin, ArrowUpRight, Youtube, Instagram, Twitter } from 'lucide-react';

// Composant Logo X personnalisé
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
  return (
    <footer 
      className="bg-black text-white relative overflow-hidden border-t border-white/5"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      {/* Import de la police Roboto si elle n'est pas déjà chargée globalement */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
      `}</style>

      <div className="sm:px-6 md:px-10 relative max-w-7xl mx-auto pt-24 pb-12 px-4">
        
        {/* Soft radial glow - Effet de lumière en fond */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[60%] h-[60%] rounded-[100%] bg-gradient-to-t from-[#FFB300]/10 to-transparent blur-[100px]"></div>
        </div>

        {/* Eyebrow - Petit texte au-dessus du titre */}
        <div className="flex items-center justify-center gap-4 text-neutral-400 text-sm mb-8">
          <span className="h-px w-12 bg-white/10"></span>
          <span className="italic">Contactez-nous à tout moment</span>
          <span className="h-px w-12 bg-white/10"></span>
        </div>

        {/* Heading - Titre Principal avec Dégradé */}
        <h2 
          className="text-5xl md:text-6xl text-center font-bold tracking-tight mb-6"
          style={{
            background: 'linear-gradient(90deg, #FFB300 0%, #FF6D00 50%, #F538A0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Restons connectés
        </h2>

        {/* Copy - Texte descriptif */}
        <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto text-center leading-relaxed">
          Vous avez des questions ou souhaitez collaborer ? N'hésitez pas à nous contacter — 
          Nous sommes ouverts aux nouveaux projets comme aux échanges informels !
        </p>

        {/* CTA - Bouton de contact (Style Magic Button) */}
        <div className="mt-10 flex justify-center relative z-10">
          <Link href="#contact">
            <div className="magic-btn-container">
                <span className="magic-btn-content px-8 py-3 flex items-center gap-2 text-sm font-medium">
                    <ArrowUpRight className="w-4 h-4" />
                    Nous contacter
                </span>
            </div>
          </Link>
        </div>

        {/* Socials - Réseaux sociaux */}
        <div className="mt-12 flex items-center justify-center gap-6 text-neutral-400 relative z-10">
          <a 
            href="https://x.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="X (Twitter)" 
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition-colors ring-1 ring-white/5"
          >
            <XLogo className="w-5 h-5 fill-current" />
          </a>
          
          <span className="h-6 w-px bg-white/10"></span>
          
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="YouTube" 
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition-colors ring-1 ring-white/5"
          >
            <Youtube className="w-5 h-5" />
          </a>

          <span className="h-6 w-px bg-white/10"></span>

          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram" 
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition-colors ring-1 ring-white/5"
          >
            <Instagram className="w-5 h-5" />
          </a>

          <span className="h-6 w-px bg-white/10"></span>

          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn" 
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition-colors ring-1 ring-white/5"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Email */}
        <p className="mt-8 text-center relative z-10">
          <a 
            href="mailto:contact.kamesai@gmail.com"
            className="text-sm text-neutral-400 underline underline-offset-4 hover:text-[#FFB300] transition-colors"
          >
            contact.kamesai@gmail.com
          </a>
        </p>

        {/* Bottom bar - Copyright, Liens légaux & Localisation */}
        <div className="mt-16 pt-8 border-t border-white/5 space-y-4">
          
          {/* Ligne 1 : Liens légaux */}
          <div className="flex items-center justify-center gap-3 text-xs text-neutral-500">
            <Link 
              href="/mentions-legales"
              className="hover:text-[#FFB300] transition-colors underline underline-offset-2"
            >
              Mentions légales
            </Link>
            <span className="text-white/20">•</span>
            <Link 
              href="/rgpd"
              className="hover:text-[#FFB300] transition-colors underline underline-offset-2"
            >
              Politique de confidentialité
            </Link>
          </div>

          {/* Ligne 2 : Copyright & Localisation */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs text-neutral-500">
            <p>© {new Date().getFullYear()} Kames AI. Tous droits réservés.</p>
            <span className="hidden sm:inline text-white/20">•</span>
            <p>Bordeaux, France</p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;