'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, Settings, Lightbulb, Rocket, Shapes } from 'lucide-react';
import Link from 'next/link';

const servicesData = [
  {
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: 'Offre Standard — Automatisation essentielle',
    subtitle: 'Idéale pour les petites entreprises ou indépendants souhaitant automatiser leurs tâches répétitives.',
    price: 'À partir de 490 € + 79 €/mois',
    delay: 'Délai moyen : 5 à 10 jours ouvrés',
    features: [
      'Automatisation ciblée de vos processus métiers via n8n (emails, CRM, facturation, suivi client, etc.)',
      'Hébergement et déploiement sécurisé de votre solution IA sur nos serveurs (AWS/Firebase)',
      'Forfait d’installation fixe, puis abonnement mensuel couvrant maintenance et support',
      'Check-up mensuel : audit des performances et améliorations continues',
    ]
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: 'Offre Premium — Système IA complet',
    subtitle: 'Pour les entreprises souhaitant intégrer des agents IA autonomes et des workflows complexes.',
    price: 'À partir de 1 490 € + 149 €/mois',
    delay: 'Délai moyen : 2 à 4 semaines',
    features: [
      'Conception et développement d’un système IA sur mesure avec plusieurs agents intelligents (prospection, reporting, RDV, génération de documents, etc.)',
      'Hébergement, déploiement et supervision continue de votre environnement n8n + intégrations (Microsoft 365, Google, Fireflies, PandaDoc, etc.)',
      'Mises à jour et évolutions régulières selon vos besoins métiers',
      'Assistance technique prioritaire et amélioration continue des performances',
    ],
  },
  {
    icon: <Shapes className="w-8 h-8 text-primary" />,
    title: 'Offre Sur Mesure — Écosystème IA complet',
    subtitle: 'Conçue pour les structures ambitieuses cherchant à bâtir leur propre infrastructure IA.',
    price: 'Sur devis (à partir de 5 000 €)',
    delay: 'Selon la complexité du projet',
    features: [
      'Audit complet de vos processus internes et de vos outils actuels',
      'Création d’un écosystème global d’automatisation et d’agents IA interconnectés',
      'Développement de workflows avancés intégrant analyse, génération, décision et reporting',
      'Intégration avec vos outils internes (ERP, CRM, cloud privé, API spécifiques, etc.)',
      'Suivi stratégique et évolution long terme avec plan d’amélioration continue',
    ],
  },
];

export function Services() {

  return (
    <section id="services" className="bg-background section-padding">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-gradient">Nos Services</span>
          </h2>
          <p className="mt-4 text-lg font-semibold text-foreground">
            Votre partenaire privilégié pour placer l'IA au cœur de votre entreprise
          </p>
          <p className="max-w-3xl mx-auto mt-4 text-muted-foreground">
            Chez Kames, nous concevons, déployons et maintenons des systèmes basés sur l'IA qui transforment vos opérations quotidiennes.
            Chaque solution est pensée pour maximiser votre productivité, réduire vos coûts et accélérer la croissance de votre entreprise.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {servicesData.map((service) => (
            <Card key={service.title} className="flex flex-col transition-all duration-300 bg-card hover:shadow-[0_0_1rem_-0.25rem_hsl(var(--primary))] hover:border-primary hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-gradient">{service.title}</CardTitle>
                <CardDescription className="px-4">{service.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground">Ce que comprend l’offre :</h4>
                  <ul className="mt-3 space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-4 h-4 mt-1 mr-2 text-green-500 shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex-grow" />
                <div className="pt-4 text-center border-t border-border">
                  <p className="font-semibold text-primary">{service.price}</p>
                  <p className="text-xs text-muted-foreground">{service.delay}</p>
                </div>
              </CardContent>
              <CardFooter className="justify-center">
                <Link href="/nos-services" className="flex items-center text-sm font-semibold transition-colors text-primary hover:text-foreground group">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
