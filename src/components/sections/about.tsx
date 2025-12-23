// src/components/sections/about.tsx
'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SplineBackground from '@/components/ui/SplineBackground';

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center section-padding py-32"
    >
      <SplineBackground />
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          <span className="text-gradient">
            L&apos;avenir appartient à ceux qui automatisent avec sens.
          </span>
        </h2>
        <p className="mt-4 text-lg font-medium text-white mb-10">
          Une amitié. Une vision. Une nouvelle façon d&apos;entreprendre.
        </p>
        
        {/* CTA transformé en Magic Button style Contact */}
        <div className="flex justify-center">
            <Link href="/notre-histoire">
                <div className="magic-btn-container">
                    <span className="magic-btn-content px-6 py-2 flex items-center gap-2 text-sm font-medium">
                        Découvrez notre histoire <ArrowRight className="w-4 h-4" />
                    </span>
                </div>
            </Link>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;