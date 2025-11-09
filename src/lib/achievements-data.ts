// src/lib/achievements-data.ts
export type Achievement = {
  slug: string;
  client: string;
  title: string;
  summary: string;
  details: string;
  logoUrl?: string;
};

export const achievements: Achievement[] = [
  {
    slug: 'logistique-ia',
    client: 'Client logistique',
    title: "Optimisation de la logistique avec l’IA prédictive",
    summary: "Réduction des coûts d’expédition de 25 %.",
    details: "Modèle prédictif + automatisations n8n → baisse des ruptures, gains de temps.",
    logoUrl: '',
  },
  {
    slug: 'chatbots-ia',
    client: 'Retail',
    title: 'Automatisation du service client avec des chatbots IA',
    summary: 'Satisfaction client +40 %',
    details: 'Chatbots 24/7 + base de connaissances.',
    logoUrl: '',
  },
  {
    slug: 'analyse-marche',
    client: 'FinTech',
    title: 'Outil d’analyse de marché alimenté par l’IA',
    summary: 'Décisions data-driven',
    details: 'Scraping légal + agrégation + dashboard.',
    logoUrl: '',
  },
  {
    slug: 'processus-internes',
    client: 'PME',
    title: 'Automatisation des processus internes',
    summary: '200 h/mois économisées',
    details: 'Intégrations back-office + RPA light.',
    logoUrl: '',
  },
];

export function getAchievementBySlug(slug: string) {
  return achievements.find((a) => a.slug === slug);
}
