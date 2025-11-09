// src/components/sections/about.tsx
'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center py-32 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
    >
      {/* Overlay sombre pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h2 className="text-5xl font-bold tracking-tight">
          <span className="text-gradient">
            L’avenir appartient à ceux qui automatisent avec sens.
          </span>
        </h2>
        <p className="mt-4 text-lg font-medium text-white">
          Une amitié. Une vision. Une nouvelle façon d’entreprendre.
        </p>
        <Link
          href="/notre-histoire"
          className="mt-8 inline-flex items-center text-primary font-semibold hover:underline"
        >
          Découvrez notre histoire
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

export default AboutSection;
