// src/components/sections/achievements.tsx
'use client';

import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: "Optimisation de la logistique avec l’IA prédictive",
    description:
      "Réduction des coûts d’expédition de 25 % grâce à la mise en place d’un système prédictif de gestion de la logistique et des stocks.",
    link: "/realisations/logistique-ia",
  },
  {
    title: "Automatisation du service client avec des chatbots IA",
    description:
      "Augmentation de la satisfaction client de 40 % grâce au déploiement de chatbots intelligents alimentés par l’IA, disponibles 24/7.",
    link: "/realisations/chatbots-ia",
  },
  {
    title: "Outil d’analyse de marché alimenté par l’IA",
    description:
      "Prise de décision basée sur les données grâce à la création d’un outil d’IA qui analyse les tendances du marché en temps réel.",
    link: "/realisations/analyse-marche",
  },
  {
    title: "Automatisation des processus internes",
    description:
      "Plus de 200 heures de travail par mois économisées grâce à l’automatisation des tâches répétitives de saisie de données et de reporting internes.",
    link: "/realisations/processus-internes",
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gradient text-center">
          Nos projets, vos succès.
        </h2>
        <p className="mt-4 text-lg text-center text-foreground">
          Découvrez nos implémentations réussies et voyez comment nous avons aidé
          des entreprises à transformer leurs opérations avec des solutions basées sur l’IA.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {caseStudies.map((cs) => (
            <div
              key={cs.title}
              className="p-6 border border-white/10 rounded-2xl bg-card/40 hover:shadow-[0_0_1rem_-0.25rem_hsl(var(--primary))] transition-all"
            >
              <h3 className="text-xl font-semibold text-gradient mb-2">
                {cs.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {cs.description}
              </p>
              <a
                href={cs.link}
                className="inline-flex items-center text-primary font-semibold hover:underline"
              >
                Voir l’étude de cas
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AchievementsSection;
