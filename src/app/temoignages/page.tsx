'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TemoignagesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-24 mx-auto md:py-32">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#realisations"
            className="flex items-center mb-8 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gradient md:text-5xl">
            Vos succès, nos projets
          </h1>
          <div className="mt-12 prose prose-invert max-w-none text-muted-foreground">
            <p>
              Découvrez comment nos clients transforment leurs opérations quotidiennes grâce à l'automatisation intelligente. <strong className="text-foreground">Des témoignages authentiques</strong> de professionnels qui ont choisi de <strong className="text-foreground">gagner du temps</strong> et de <strong className="text-gradient">se concentrer sur l'essentiel</strong>.
            </p>
            <div className="relative w-full my-8 aspect-video bg-muted rounded-xl flex items-center justify-center">
              {/* Espace réservé pour la vidéo de témoignages */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

