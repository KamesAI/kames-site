// src/app/achievements/page.tsx
import Link from 'next/link';

const caseStudies = [
  {
    slug: 'logistique-ia',
    title: 'Optimisation de la logistique avec l’IA prédictive',
    summary: "Réduction des coûts d’expédition de 25 % grâce à un système prédictif de gestion des stocks.",
  },
  {
    slug: 'chatbots-ia',
    title: 'Automatisation du service client avec des chatbots IA',
    summary: "Satisfaction client +40 % avec des chatbots 24/7 entraînés sur la base de connaissances métier.",
  },
  {
    slug: 'analyse-marche',
    title: 'Outil d’analyse de marché alimenté par l’IA',
    summary: "Décisions pilotées par la donnée via une surveillance des tendances en temps réel.",
  },
  {
    slug: 'processus-internes',
    title: 'Automatisation des processus internes',
    summary: "200+ heures / mois économisées sur la saisie et le reporting.",
  },
];

export const metadata = {
  title: 'Réalisations – Kames AI',
  description: 'Nos études de cas et succès clients en automatisation IA.',
};

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-24 mx-auto md:py-32">
        <h1 className="text-4xl font-bold tracking-tight text-gradient md:text-5xl">Réalisations</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Découvrez comment nous avons transformé les opérations de nos clients.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/realisations/${cs.slug}`}
              className="p-6 border border-white/10 rounded-2xl bg-card/40 hover:shadow-[0_0_1rem_-0.25rem_hsl(var(--primary))] transition-all"
            >
              <h3 className="text-xl font-semibold text-gradient mb-2">{cs.title}</h3>
              <p className="text-sm text-muted-foreground">{cs.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
