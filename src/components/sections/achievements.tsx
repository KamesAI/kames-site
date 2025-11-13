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
    <section id="achievements" className="py-16 bg-background section-padding">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl text-center mb-4">
          <span className="text-gradient">Nos projets, vos succès.</span>
        </h2>
        <p className="mt-4 text-lg text-center text-foreground">
          Découvrez nos implémentations réussies et voyez comment nous avons aidé
          des entreprises à transformer leurs opérations avec des solutions basées sur l’IA.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {caseStudies.map((cs) => (
            <div
              key={cs.title}
              className="p-6 border border-transparent rounded-2xl bg-card/40 hover:border-[#FFB300] hover:shadow-[0_0_1.5rem_-0.25rem_#FFB300] transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-gradient mb-2">
                {cs.title}
              </h3>
              <p className="text-sm font-semibold text-gray-400 mb-6 leading-relaxed">
                {cs.description}
              </p>
              <a
                href={cs.link}
                className="inline-flex items-center text-[#FFB300] font-semibold hover:underline transition-colors"
              >
                Voir l'étude de cas
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
