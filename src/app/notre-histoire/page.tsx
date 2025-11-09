'use client';

import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-24 mx-auto md:py-32">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#about"
            className="flex items-center mb-8 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gradient md:text-5xl">
            Nous créons des systèmes basés sur l'IA. Mais surtout, des histoires humaines.
          </h1>
          <div className="mt-12 prose prose-invert max-w-none text-muted-foreground">
            <p>
              <span className="font-bold text-gradient">Kames</span> est née d’une amitié de longue date — celle de deux amis d’enfance qui ont décidé de <strong className="text-foreground">transformer leur passion</strong> pour la technologie en <strong className="text-foreground">mission commune</strong> : rendre l’intelligence artificielle réellement <strong className="text-foreground">utile et accessible aux entreprises</strong>.
            </p>
            <div className="relative w-full my-8 aspect-video bg-muted rounded-xl flex items-center justify-center">
              {/* Espace réservé pour la vidéo YouTube */}
            </div>

            <h2><span className="text-gradient">Notre vision</span></h2>
            <p>
              Nous croyons que chaque entreprise peut elle aussi tirer parti de <strong className="text-foreground">la puissance de l’IA</strong> — à condition d’être accompagnée par des gens qui <strong className="text-foreground">comprennent sa réalité.</strong>
            </p>
            <p>
              Concevoir <strong className="text-foreground">des solutions</strong> qui évoluent avec vous, et qui vous permettent de vous <strong className="text-foreground">concentrer</strong> sur ce qui compte vraiment : <strong className="text-gradient">votre business, vos idées, votre vision.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
