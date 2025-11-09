// src/lib/achievements-data.ts
export type Achievement = {
  slug: string;
  title: string;
  client: string;
  summary: string;
  details: string;
  logoUrl?: string;
};

export const achievements: Achievement[] = [
  {
    slug: 'logistique-ia',
    client: 'Client logistique',
    title: 'Optimisation de la logistique avec l’IA prédictive',
    summary: "Réduction des coûts d’expédition de 25 % grâce à un système prédictif de gestion des stocks.",
    details: "Mise en place d’un pipeline d’IA (prévision demande, réassort, alerting n8n). Intégration ERP et tableau de bord.",
    logoUrl: '/og-image.png'
  },
  {
    slug: 'chatbots-ia',
    client: 'Support 24/7',
    title: 'Automatisation du service client avec des chatbots IA',
    summary: "Satisfaction client +40 % avec des chatbots 24/7 sur la base de connaissances.",
    details: "Ingestion KB, fine-tuning prompts, routage humain, suivi des métriques (CSAT).",
    logoUrl: '/og-image.png'
  },
  {
    slug: 'analyse-marche',
    client: 'PME Retail',
    title: 'Outil d’analyse de marché alimenté par l’IA',
    summary: "Décisions pilotées par la donnée via la surveillance des tendances en temps réel.",
    details: "Scraping légal, normalisation, scoring d’opportunités, reporting hebdo.",
    logoUrl: '/og-image.png'
  },
  {
    slug: 'processus-internes',
    client: 'Direction Opérations',
    title: 'Automatisation des processus internes',
    summary: "200+ heures / mois économisées sur la saisie et le reporting.",
    details: "Automatisation multi-apps (Excel/Notion/Drive), validations et logs, réduction d’erreurs.",
    logoUrl: '/og-image.png'
  },
];
