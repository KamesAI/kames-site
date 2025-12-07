'use client';

import { ChevronDown } from 'lucide-react';

const FAQS = [
  { 
    q: "Quels types d'entreprises accompagnez-vous ?", 
    r: "Nous travaillons principalement avec des TPE, PME et ETI de tous secteurs d'activité. Que vous soyez dans le commerce, les services, l'immobilier, le conseil ou l'industrie, si vous avez des tâches répétitives ou des processus à optimiser, nous pouvons vous aider.\n\nLa plupart de nos clients n'ont aucune compétence technique en interne, et c'est exactement pour cette raison qu'ils font appel à nous." 
  },
  { 
    q: "Combien de temps dure la mise en place ?", 
    r: "Pack Starter : 5 à 7 jours ouvrés\nPack Pro : 2 à 4 semaines\nPack Premium : Variable selon le périmètre, défini lors de l'audit initial\n\nVous êtes opérationnel rapidement, et nous vous formons pour que vos équipes sachent utiliser le système dès le premier jour." 
  },
  { 
    q: "Mes données sont-elles sécurisées ?", 
    r: "Absolument. Vos données sont hébergées sur des serveurs européens (AWS France) avec chiffrement de bout en bout. Nous respectons strictement le RGPD et ne partageons jamais vos informations avec des tiers. Vous restez propriétaire à 100% de vos données et pouvez les récupérer à tout moment." 
  },
  { 
    q: "Dois-je avoir des compétences techniques particulières ?", 
    r: "Non, aucune compétence technique n'est requise. C'est précisément notre métier de rendre l'automatisation accessible. Nous créons les systèmes, les configurons et formons vos équipes à les utiliser. Vous n'avez qu'à nous expliquer ce qui vous fait perdre du temps, nous nous occupons du reste." 
  },
  { 
    q: "Combien ça coûte vraiment ?", 
    r: "Nos tarifs dépendent du pack choisi :\n\nStarter : Setup + abonnement mensuel (idéal pour débuter)\nPro : Setup + abonnement pour un système complet\nPremium : Sur devis selon votre projet\n\nNous pratiquons une tarification transparente, sans frais cachés. L'abonnement mensuel inclut l'hébergement, la maintenance et le support. Pas de mauvaise surprise en fin de mois, support continu et un appel visio mensuel au minimum compris dans chaque offre." 
  },
  { 
    q: "Est-ce compatible avec mes outils actuels ?", 
    r: "Très probablement oui. Nous nous connectons à plus de 400 applications professionnelles : CRM (HubSpot, Salesforce, Pipedrive), emails (Gmail, Outlook), calendriers (Google, Outlook), outils métier (Airtable, Notion, Excel), téléphonie (Aircall, RingOver), et bien d'autres. Si vous utilisez un logiciel spécifique, nous vérifions la compatibilité lors de notre premier échange." 
  },
  { 
    q: "Que se passe-t-il si j'ai besoin de modifier quelque chose ?", 
    r: "Votre abonnement mensuel inclut les ajustements et optimisations. Si vos besoins évoluent, vos processus changent ou vous voulez ajouter des fonctionnalités, nous adaptons votre système. Vous n'êtes jamais bloqué avec une solution figée." 
  },
  { 
    q: "Y a-t-il un engagement de durée ?", 
    r: "Oui, nous fonctionnons avec un engagement de 6 à 12 mois selon le pack choisi. Voici pourquoi cet engagement est dans votre intérêt :\n\nUne automatisation réussie se construit dans le temps\nLes premiers jours, le système est opérationnel. Mais c'est dans les semaines suivantes qu'on l'affine vraiment : on ajuste selon vos retours terrain, on optimise les scénarios, on détecte les cas particuliers. Un engagement sur plusieurs mois nous permet de vous accompagner jusqu'à ce que le système soit vraiment parfait pour vous.\n\nUn suivi proactif inclus sur toute la période\nContrairement à un prestataire qui livre et disparaît, nous surveillons vos workflows en continu. Si quelque chose ralentit, si un processus peut être amélioré, si vos besoins évoluent, nous intervenons sans attendre que vous nous le demandiez. Cet accompagnement actif nécessite une relation de moyen terme.\n\nVotre rentabilité se mesure sur plusieurs mois\nL'investissement initial (setup) s'amortit généralement entre 3 et 6 mois selon les gains de temps réalisés. Un engagement sur 6-12 mois vous garantit d'atteindre et de dépasser largement votre retour sur investissement. Vous ne payez pas pour tester, vous investissez pour transformer durablement votre activité.\n\nÉvolution et formation continues\nVos processus métier évoluent, vos équipes découvrent de nouvelles idées d'automatisation, les outils que vous utilisez ajoutent des fonctionnalités. Sur 6-12 mois, nous intégrons ces évolutions progressivement. C'est cette amélioration continue qui fait la différence entre un simple outil et un véritable avantage concurrentiel." 
  },
  { 
    q: "Comment savoir si ça va vraiment fonctionner pour mon activité ?", 
    r: "Nous commençons toujours par un échange gratuit pour comprendre vos processus et identifier les gains potentiels. Nous vous donnons une vision claire de ce qui est automatisable, des délais et du retour sur investissement attendu. Si nous pensons qu'une automatisation n'est pas pertinente pour vous, nous vous le dirons franchement. Notre objectif est que vous gagniez réellement du temps et de l'argent." 
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 max-w-3xl mx-auto">
      {/* 1. Titre "FAQ" avec w-fit et mx-auto pour forcer le dégradé sur la largeur du texte uniquement */}
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient mb-12 text-center w-fit mx-auto">FAQ</h2>
      
      <div className="space-y-4">
        {FAQS.map((faq, i) => (
          <details key={i} className="group bg-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white group-hover:bg-neutral-800/50 transition-colors">
              <span className="text-lg">{faq.q}</span>
              <span className="transition-transform duration-300 group-open:rotate-180 flex-shrink-0 ml-4">
                <ChevronDown className="text-[#FFB300] stroke-[1.5]" />
              </span>
            </summary>
            {/* Ajout de whitespace-pre-line pour gérer les sauts de ligne dans les réponses longues */}
            <div className="text-neutral-400 p-6 pt-0 leading-relaxed font-light border-t border-transparent group-open:border-neutral-800 group-open:pt-6 whitespace-pre-line">
              {faq.r}
            </div>
          </details>
        ))}
      </div>

      {/* 2. CTA style Magic Button */}
      <div className="mt-12 flex justify-center">
        <a href="#contact">
            <div className="magic-btn-container">
                <span className="magic-btn-content px-6 py-2 flex items-center gap-2 text-sm font-medium">
                    Contactez nous
                </span>
            </div>
        </a>
      </div>
    </section>
  );
}