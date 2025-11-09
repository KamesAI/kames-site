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
        </div>
      </div>
    </section>
  );
}
