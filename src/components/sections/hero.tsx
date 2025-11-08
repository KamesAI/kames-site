'use client';
import { useState, useEffect } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ArrowDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const rotatingTexts = [
  'spécialisée dans la formation à l’IA',
  'qui développe des systèmes portés par l’IA',
  'qui conseille et accompagne ses clients',
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
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brandGradientEnd/30 via-transparent to-transparent" />
      <div className="relative z-10 flex max-w-4xl flex-col items-center px-4 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.4em] text-white/70">
          Kames AI Studio
        </span>
        <h1 className="mt-6 font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-gradient">
            Transformez votre entreprise avec l’intelligence artificielle
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-medium text-white/90 md:text-xl">
          Kames met l’IA au service de votre croissance.
        </p>
        <div id="hero-sequence" className="mt-8 text-lg font-medium text-center text-white md:text-xl">
          <p className="text-white/70">Nous ne sommes pas une agence</p>
          <div className="relative mt-2 h-8 overflow-hidden">
            <span
              className={cn(
                'absolute inset-0 mx-auto flex w-full items-center justify-center text-gradient',
                animationClass,
              )}
            >
              {rotatingTexts[currentIndex]}
            </span>
          </div>
          <p className="mt-2 text-white/70">Nous sommes tout cela à la fois.</p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6">
          <Button
            asChild
            variant="gradient"
            size="lg"
            className="px-8 text-base font-semibold shadow-[0_0_40px_rgba(255,109,0,0.35)]"
          >
            <Link href="#services" onClick={handleScrollToServices}>
              <span className="mr-3">Découvrez nos services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Link
            href="#services"
            onClick={handleScrollToServices}
            className="flex flex-col items-center text-xs font-medium uppercase tracking-widest text-white/70 transition-colors hover:text-white"
          >
            Faites défiler pour explorer
            <ArrowDown className="mt-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
