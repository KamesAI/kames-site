'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, Lightbulb, Rocket, Shapes } from 'lucide-react';
import Link from 'next/link';

const servicesData = [
  {
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: 'Offre Standard — Automatisation essentielle',
    price: 'À partir de 490 € + 79 €/mois',
    features: [
      'Automatisation ciblée de vos processus via n8n',
      'Hébergement et déploiement sécurisé (AWS/Firebase)',
      'Forfait installation + abonnement maintenance',
      'Check‑up mensuel & améliorations continues',
    ],
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: 'Offre Premium — Système IA complet',
    price: 'À partir de 1 490 € + 149 €/mois',
    features: [
      'Conception & dev d’un système sur mesure (agents IA)',
      'Supervision continue + intégrations (M365, Google, etc.)',
      'Mises à jour régulières selon besoins métiers',
      'Assistance prioritaire & amélioration des performances',
    ],
  },
  {
    icon: <Shapes className="w-8 h-8 text-primary" />,
    title: 'Offre Sur Mesure — Écosystème IA complet',
    price: 'Sur devis (à partir de 5 000 €)',
    features: [
      'Audit complet de vos processus et outils actuels',
      'Écosystème d’agents IA interconnectés',
      'Workflows avancés : analyse, génération, décision',
      'Intégration ERP/CRM/API + évolution long terme',
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
            <Card
              key={service.title}
              className="flex flex-col transition-all duration-300 bg-card hover:shadow-[0_0_1rem_-0.25rem_hsl(var(--primary))] hover:border-primary hover:-translate-y-2"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-gradient">{service.title}</CardTitle>
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
                </div>
              </CardContent>
              <CardFooter className="justify-center">
                <Link
                  href="/nos-services"
                  className="flex items-center text-sm font-semibold transition-colors text-primary hover:text-foreground group"
                >
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
