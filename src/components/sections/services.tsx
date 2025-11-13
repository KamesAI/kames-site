"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, Lightbulb, Rocket, Shapes } from 'lucide-react';
import Link from 'next/link';

const servicesData = [
  {
    icon: <Lightbulb className="w-8 h-8 text-[#FFB300]" />,
    title: 'Offre Standard – Automatisation essentielle',
    subtitle: 'Idéale pour les petites entreprises ou indépendants souhaitant automatiser leurs tâches répétitives.',
    features: [
      'Automatisation ciblée de vos processus via n8n',
      'Hébergement et déploiement sécurisé (AWS/Firebase)',
      'Forfait installation + abonnement maintenance',
      'Check-up mensuel & améliorations continues',
    ],
    timeline: '5 à 10 jours ouvrés',
  },
  {
    icon: <Rocket className="w-8 h-8 text-[#FFB300]" />,
    title: 'Offre Premium – Système IA complet',
    subtitle: 'Pour les entreprises souhaitant intégrer des agents IA autonomes et des workflows complexes.',
    features: [
      'Conception et développement d\'un système sur mesure (agents IA)',
      'Hébergement, déploiement et supervision continue de votre solution IA',
      'Intégrations avancées (Microsoft 365, Google, Fireflies, PandaDoc, etc.)',
      'Mises à jour régulières selon vos besoins métiers',
    ],
    timeline: '2 à 4 semaines',
  },
  {
    icon: <Shapes className="w-8 h-8 text-[#FFB300]" />,
    title: 'Offre Sur Mesure – Écosystème IA complet',
    subtitle: 'Conçue pour les structures ambitieuses cherchant à bâtir leur propre infrastructure IA interconnectée.',
    features: [
      'Audit complet de vos processus internes et de vos outils actuels',
      'Création d\'un écosystème global d\'automatisation et d\'agents IA',
      'Développement de workflows avancés intégrant analyse, génération, décision et reporting',
      'Intégration avec vos outils internes (ERP/CRM/cloud privé/API spécifiques)',
    ],
    timeline: 'Selon la complexité du projet',
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
          <p className="max-w-3xl mx-auto mt-4 text-gray-400 text-base leading-relaxed">
            Chez Kames, nous concevons, déployons et maintenons des systèmes basés sur l'IA qui transforment vos opérations quotidiennes.
            Chaque solution est pensée pour maximiser votre productivité, réduire vos coûts et accélérer la croissance de votre entreprise.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {servicesData.map((service) => (
            <Card
              key={service.title}
              className="flex flex-col transition-all duration-300 bg-card border border-transparent hover:border-[#FFB300] hover:shadow-[0_0_1.5rem_-0.25rem_#FFB300] hover:-translate-y-2 h-full"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-6">{service.icon}</div>
                <CardTitle className="text-lg font-bold text-gradient mb-3">{service.title}</CardTitle>
                <p className="text-sm text-gray-400 leading-relaxed">{service.subtitle}</p>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Ce que comprend l'offre :</h4>
                  <ul className="mt-4 space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-4 h-4 mt-0.5 text-green-500 shrink-0" />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-grow" />
                <div className="pt-6 text-center border-t border-border">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Délai :</p>
                  <p className="font-semibold text-[#FFB300] mt-1">{service.timeline}</p>
                </div>
              </CardContent>
              <CardFooter className="justify-center pt-6 pb-6">
                <Link
                  href="/nos-services"
                  className="inline-flex items-center rounded-full border border-[#FFB300] px-6 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white/5 text-[#FFB300]"
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