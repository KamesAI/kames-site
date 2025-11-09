"use client";

import Link from 'next/link';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-6">
          <Logo />
          <nav className="hidden items-center gap-6 text-sm font-medium text-white/70 md:flex">
            <Link href="/nos-services" className="transition-colors hover:text-white">
              Services
            </Link>
            <Link href="/achievements" className="transition-colors hover:text-white">
              Réalisations
            </Link>
            <Link href="/notre-histoire" className="transition-colors hover:text-white">
              À propos
            </Link>
            <Link href="#contact" className="transition-colors hover:text-white">
              Contact
            </Link>
          </nav>
        </div>
        <Button asChild variant="gradient" size="lg" className="shadow-[0_0_30px_rgba(245,56,160,0.35)]">
          <Link href="#contact">Contactez-nous</Link>
        </Button>
      </div>
    </header>
  );
}
