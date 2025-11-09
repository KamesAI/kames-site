import { ArrowLeft, BookOpen, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata = {
  title: 'Documentation Complète - Kames AI',
  description: 'Toutes nos fiches techniques et informations clés à destination de nos clients.',
};

const documentationStructure = [
    {
      title: 'Introduction à Kames AI',
      description: 'Notre vision : combler le fossé entre intelligence humaine et intelligence artificielle.',
      articles: [
        'Pourquoi Kames AI ?',
        'Comment l’automatisation peut transformer votre entreprise',
        'Notre méthodologie : du diagnostic à l’automatisation complète',
        'Qu’est-ce qu’un agent IA et pourquoi c’est l’avenir du travail',
      ],
    },
    {
      title: 'Sécurité et Authentification',
      description: 'Comment Kames protège vos données et vos flux.',
      articles: [
        'Sécurité by design : comment Kames protège vos données et vos flux',
        'Comprendre l’authentification OAuth2, SSO et API Keys',
        'Bonnes pratiques pour connecter vos comptes Google, Microsoft et OpenAI',
        'RGPD & IA : nos engagements pour la conformité et la transparence',
        'Sécuriser vos workflows n8n et vos accès cloud',
      ],
    },
    {
      title: 'Stack Technologique',
      description: 'Comment nous connectons les outils entre eux pour livrer vite et bien.',
      articles: [
        'L’architecture Kames AI : comment nous connectons les outils entre eux',
        'n8n : le moteur des workflows intelligents',
        'Firebase : hébergement, sécurité et rapidité au cœur de Kames',
        'ChatGPT, Claude, Genspark… comparaison et usages chez Kames',
        'Nos environnements cloud : AWS, Hostinger, GitHub et intégrations CI/CD',
        'Comment nous combinons Low-Code + IA + API pour livrer vite et bien',
      ],
    },
    {
      title: 'Agents IA',
      description: 'Description de nos workflows, leurs objectifs et leurs bénéfices.',
      articles: [
        'Agent #1 : Lead Generation — automatiser la prospection locale via Google Maps',
        'Agent #2 : Prospection multicanal — emails, LinkedIn et suivi automatisé',
        'Agent #3 : RDV automatisés — intégration Calendly, Notion et CRM',
        'Agent #4 : Devis & Propositions — génération de documents via Fireflies, Genspark & PandaDoc',
        'Agent #5 : Reporting et Dashboards — suivi client via Google Analytics & Notion',
        'Agent #6 : Contenu YouTube — génération vidéo via Google Veo et ElevenLabs',
        'Agent #7 : Support IA — création d’assistants internes et chatbots métier',
      ],
    },
    {
      title: 'Meilleures Pratiques',
      description: 'Guide stratégique pour maximiser la valeur de l’IA et des automatisations.',
      articles: [
        'Comment choisir le bon processus à automatiser',
        '10 erreurs fréquentes en automatisation et comment les éviter',
        'Construire une stratégie IA efficace pour votre PME',
        'KPI et ROI : mesurer la performance de vos automatisations',
        'Documenter vos workflows pour assurer la maintenance et l’évolutivité',
      ],
    },
    {
      title: 'Guides Techniques',
      description: 'Documentation concrète pour les utilisateurs avancés et partenaires techniques.',
      articles: [
        'Créer une clé API OpenAI, Anthropic ou Google AI Studio',
        'Connecter n8n à Google, Microsoft et Notion pas à pas',
        'Déployer un site avec Firebase Hosting (et GitHub Actions)',
        'Mettre à jour votre workflow n8n sans tout casser',
        'Sauvegarder et restaurer vos automatisations dans le cloud',
        'Installer n8n sur AWS EC2 – Guide complet',
      ],
    },
    {
      title: 'Glossaire & Ressources',
      description: 'Démocratiser le vocabulaire technique et offrir des ressources pédagogiques.',
      articles: [
        'Glossaire de l’automatisation et de l’IA (A → Z)',
        'Les meilleurs outils pour démarrer dans l’automatisation',
        'Nos recommandations de formation & ressources (YouTube, Docs, Cours)',
        'Les API incontournables pour connecter votre entreprise au futur',
      ],
    },
    {
      title: 'Mises à Jour & Roadmap',
      description: 'Suivez l’évolution continue de Kames AI.',
      articles: [
        'Mise à jour : nouvelle version de nos agents IA (octobre 2025)',
        'Notre roadmap 2026 : IA conversationnelle, automatisation vidéo et dashboards clients',
        'Ce qui arrive bientôt : intégration HubSpot, Slack et Zapier Bridge',
      ],
    },
];

export default function DocumentationCompletePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-24 mx-auto md:py-32">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#documentation"
            className="flex items-center mb-8 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10">
                <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-gradient md:text-5xl">
                    Documentation Complète
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">
                    Toutes nos fiches techniques et informations clés à destination de nos clients.
                </p>
            </div>
          </div>

          <div className="mt-12">
            <Accordion type="single" collapsible className="w-full">
              {documentationStructure.map((section, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                    <div className="flex flex-col">
                        <span>{section.title}</span>
                        <span className="text-sm font-normal text-muted-foreground">{section.description}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="py-4 pl-8 pr-4 space-y-3 list-none">
                      {section.articles.map((article, i) => (
                        <li key={i} className="flex items-start">
                          <ChevronRight className="w-4 h-4 mt-1 mr-3 text-primary shrink-0" />
                          <span className="text-muted-foreground">{article}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
