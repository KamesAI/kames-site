// src/components/layout/footer.tsx
'use client';

import Link from 'next/link';
import Logo from '@/components/logo';
import { X, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8 px-6">
        {/* Logo et localisation */}
        <div className="flex-1">
          <Logo />
          <p className="mt-2 text-muted-foreground">Bordeaux, France</p>
        </div>

        {/* Liens rapides */}
        <div className="flex-1">
          <h4 className="font-bold text-gradient mb-4">Liens rapides</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-primary">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/nos-services" className="hover:text-primary">
                Services
              </Link>
            </li>
            <li>
              <Link href="/achievements" className="hover:text-primary">
                Réalisations
              </Link>
            </li>
            <li>
              <Link href="/notre-histoire" className="hover:text-primary">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/documentation" className="hover:text-primary">
                Documentation
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-primary">
                Nos Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex-1">
          <h4 className="font-bold text-gradient mb-4">Suivez‑nous</h4>
          <div className="flex gap-4">
            <a href="https://twitter.com" className="text-white hover:text-primary">
              <X className="w-5 h-5" />
            </a>
            <a href="https://github.com/kamesai" className="text-white hover:text-primary">
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/company/kamesai"
              className="text-white hover:text-primary"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-white/60">
        © {new Date().getFullYear()} Kames AI. Tous droits réservés.
      </div>
    </footer>
  );
}
