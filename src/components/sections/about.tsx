'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-background');

  return (
    <section 
      id="about"
      className="relative flex flex-col items-center justify-center text-center py-32 px-6 bg-black overflow-hidden"
    >
      {aboutImage && (
        <Image
          src={aboutImage.imageUrl}
          alt={aboutImage.description}
          fill
          className="object-cover"
          data-ai-hint={aboutImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl text-gradient">
          L’avenir appartient à ceux qui automatisent avec sens.
        </h2>
        
        <p className="text-gray-300 text-lg md:text-xl my-8">
          Une amitié. Une vision. Une nouvelle façon d’entreprendre.
        </p>

        <Link 
          href="/notre-histoire"
          className="inline-flex items-center text-primary hover:text-orange-500 font-semibold transition-colors group">
          Découvrez notre histoire
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
