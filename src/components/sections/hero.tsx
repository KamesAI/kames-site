import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-background');

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
'use client';

import { useState, useEffect } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';

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
        setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length);
        setAnimationClass('animate-text-appear');
      }, 700);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="hero"
      className="relative hero-wrap min-h-[110vh] flex w-full items-center justify-center overflow-hidden"
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

      <div className="hero-overlay" />
      {/* bande supérieure orange (remplace le violet) */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#FFB300]/30 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        {/* Titre (police headline Sora) */}
        <h1 className="mt-2 font-headline text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight md:leading-[1.05]">
          <span className="text-gradient">
            Transformez votre entreprise avec l’intelligence artificielle
          </span>
        </h1>
        <div className="mt-8 text-center">
          <p className="text-lg md:text-xl font-medium text-white">Kames met l’IA au service de votre croissance.</p>
          <p className="text-lg md:text-xl text-muted-foreground mt-2">Nous ne sommes pas une agence</p>
          <p className="text-lg md:text-xl text-gradient mt-1">qui développe des systèmes portés par l’IA</p>
          <p className="text-lg md:text-xl text-muted-foreground mt-1">Nous sommes tout cela à la fois.</p>
        </div>

        <div className="mt-12 flex items-center justify-center">
          <Button
            asChild
            variant="gradient"
            size="lg"
            className="px-8 text-base font-semibold shadow-[0_0_40px_rgba(255,109,0,0.35)]"
          >
            <Link href="#contact">Contactez-nous</Link>
          </Button>

        <p className="mt-6 text-white/90 text-base md:text-lg font-medium">
          Kames met l’IA au service de votre croissance.
        </p>

        {/* bloc “Nous ne sommes pas …” */}
        <div className="mt-8 space-y-3 text-lg md:text-xl text-white/80">
          <p>Nous ne sommes pas une agence</p>
          <p className="single-line">
            <span className={`text-gradient ${animationClass}`}>
              {rotatingTexts[currentIndex]}
            </span>
          </p>
          <p>Nous sommes tout cela à la fois.</p>
        </div>

        {/* bouton rond discret vers Services */}
        <div className="mt-10">
          <Link href="#services" onClick={scrollTo('services')} className="btn-scroll" aria-label="Descendre">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
