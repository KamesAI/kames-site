// src/components/sections/documentation.tsx
'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function DocumentationSection() {
  return (
    <section id="documentation" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gradient text-center">
          Simplifier votre quotidien
        </h2>
        <p className="mt-4 text-lg text-center text-foreground">
          Guides, exemples et explications simples pour découvrir comment nous
          pouvons faire gagner un temps précieux à votre entreprise.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-12">
          {/* Menu latéral */}
          <aside className="md:col-span-1 space-y-2">
            <a href="#introduction" className="font-semibold text-primary">
              Introduction
            </a>
            <a href="#notre-demarche" className="text-foreground hover:text-primary">
              Notre démarche
            </a>
            <a href="#securite" className="text-foreground hover:text-primary">
              Sécurité et Authentification
            </a>
            <a href="#agents-ia" className="text-foreground hover:text-primary">
              Agents IA
            </a>
            <a href="#api" className="text-foreground hover:text-primary">
              Référence API
            </a>
            <a href="#best-practices" className="text-foreground hover:text-primary">
              Meilleures pratiques
            </a>
          </aside>

          {/* Contenu principal */}
          <div className="md:col-span-3">
            <h3 id="introduction" className="text-3xl font-bold mb-4">
              Introduction
            </h3>
            <p className="text-muted-foreground mb-4">
              Bienvenue dans la documentation Kames AI. Ici, pas besoin d’être
              ingénieur pour comprendre comment nos systèmes d’intelligence
              artificielle peuvent simplifier votre travail au quotidien.
            </p>
            <p className="text-muted-foreground mb-4">
              Kames AI conçoit des assistants et des automatisations capables de :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>répondre à vos emails à votre place;</li>
              <li>remplir automatiquement vos tableaux Excel;</li>
              <li>créer des propositions commerciales;</li>
              <li>ou même gérer vos rendez-vous.</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              Cette base de connaissances vous explique pas à pas comment
              fonctionnent ces systèmes et comment nous les adaptons à votre
              entreprise.
            </p>

            <Link
              href="/documentation-complete"
              className="inline-flex items-center font-semibold text-primary hover:underline"
            >
              Accédez à notre documentation complète
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DocumentationSection;
