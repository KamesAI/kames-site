'use client';
import { useState, useEffect } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

const rotatingTexts = [
  'qui développe des systèmes IA',
  'spécialisée dans la formation IA',
  'qui conseille ses clients sur l’IA',
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('animate-text-appear');
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('animate-text-disappear');
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
        setAnimationClass('animate-text-appear');
      }, 700); // 500ms for disappear animation + 200ms delay
    }, 2200); // 1200ms display time + 1000ms animation and delay

    return () => clearInterval(interval);
  }, []);

  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <section id="home" className="relative flex items-center justify-center w-full min-h-screen">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 flex flex-col items-center max-w-4xl px-4 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-gradient">Transformez votre entreprise avec l’intelligence artificielle</span>
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-lg font-medium text-white md:text-xl">
          Kames met l’IA au service de votre croissance.
        </p>
        <div id="hero-sequence" className="mt-8 text-lg font-medium text-center md:text-xl">
            <p className="text-muted-foreground">Nous ne sommes pas une agence</p>
            <div className="relative h-8 mt-1 overflow-hidden">
                <span className={cn('block absolute w-full text-gradient', animationClass)}>{rotatingTexts[currentIndex]}</span>
            </div>
            <p className="mt-1 text-muted-foreground">Nous sommes tout cela à la fois.</p>
        </div>

        <div className="mt-10">
          <Link 
            href="#services" 
            onClick={handleScrollToServices} 
            className="flex flex-col items-center text-sm font-medium text-white transition-colors group hover:text-primary"
          >
            Découvrez nos services
            <ArrowDown className="w-5 h-5 mt-2 text-white transition-all group-hover:text-primary group-hover:translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
