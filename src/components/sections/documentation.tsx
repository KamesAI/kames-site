'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const G = ({ children }: { children: React.ReactNode }) => (
  <span style={{background:'linear-gradient(90deg,#FFB300 0%,#FF6D00 50%,#F538A0 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>{children}</span>
);

const W = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: '#FFFFFF' }}>{children}</span>
);

export function DocumentationSection() {
  const [activeLink, setActiveLink] = useState('introduction');

  const handleLinkClick = (id: string) => {
    setActiveLink(id);
  };

  const renderContent = () => {
    switch (activeLink) {
      case 'introduction':
        return (
          <>
            <p className="mb-4" style={{ color: '#FFFFFF' }}>
              Bienvenue dans la documentation <G>Kames AI</G>. Ici, pas besoin d&apos;être ingénieur pour comprendre comment nos systèmes d&apos;intelligence artificielle peuvent <G>simplifier votre travail au quotidien</G>.
            </p>
            <p className="mb-4" style={{ color: '#FFFFFF' }}>
              <G>Kames AI</G> conçoit des assistants et des automatisations capables de :
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6" style={{ color: '#FFFFFF' }}>
              <li>répondre à vos emails à votre place,</li>
              <li>remplir automatiquement vos tableaux Excel,</li>
              <li>créer des propositions commerciales,</li>
              <li>ou même gérer vos rendez-vous.</li>
            </ul>
            <p className="mb-6" style={{ color: '#FFFFFF' }}>
              Cette <G>base de connaissances</G> vous explique pas à pas comment fonctionnent ces systèmes et comment <G>nous les adaptons à votre entreprise</G>.
            </p>
          </>
        );

      case 'notre-demarche':
        return (
          <>
            <p className="mb-6" style={{ color: '#FFFFFF' }}>
              Travailler avec <W>Kames AI</W>, c&apos;est avant tout une collaboration humaine — pas une <W>simple prestation technique.</W>
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">
                  <G>◆ 1. Consultation initiale</G>
                </h4>
                <p style={{ color: '#FFFFFF' }}>
                  Nous échangeons lors d&apos;un premier rendez-vous pour discuter de vos <W>besoins</W>, analyser vos <W>processus</W> et vos <W>points de blocage</W>, afin d&apos;identifier ensemble les <W>meilleures opportunités</W> pour vous.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">
                  <G>◆ 2. Feuille de route & démonstration</G>
                </h4>
                <p style={{ color: '#FFFFFF' }}>
                  Quelques jours plus tard, nous vous présentons une feuille de route personnalisée accompagnée d&apos;une <W>démonstration</W> du prototype de votre <W>future solution</W>.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">
                  <G>◆ 3. Signature & mise en production</G>
                </h4>
                <p style={{ color: '#FFFFFF' }}>
                  Une fois la <W>proposition validée</W> et le contrat signé, nous lançons immédiatement la <W>mise en production</W> de votre solution selon le <W>plan de route</W> défini ensemble.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">
                  <G>◆ 4. Développement & intégration</G>
                </h4>
                <p style={{ color: '#FFFFFF' }}>
                  Nos experts conçoivent, testent et intègrent la solution directement à vos outils existants pour une <W>transition fluide et sans interruption.</W>
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">
                  <G>◆ 5. Formation & support continu</G>
                </h4>
                <p style={{ color: '#FFFFFF' }}>
                  Nous <W>formons</W> vos équipes à l&apos;utilisation du système et restons <W>disponibles</W> pour le suivi, les mises à jour et <W>l&apos;optimisation continue</W>.
                </p>
              </div>
            </div>

            <p className="font-semibold mt-8" style={{ color: '#FFFFFF' }}>
              <G>Notre but :</G> garantir un <W>succès commun à long terme</W>.
            </p>
          </>
        );

      case 'securite':
        return (
          <>
            <p className="mb-6" style={{ color: '#FFFFFF' }}>
              Chez <W>Kames AI</W>, la <G>sécurité des données</G> et la <G>confidentialité de vos informations</G> sont au cœur de notre démarche.
            </p>

            <p className="mb-6" style={{ color: '#FFFFFF' }}>
              Nous appliquons des protocoles de protection équivalents à ceux des grandes entreprises technologiques :
            </p>

            <ul className="list-disc list-inside space-y-3 mb-6" style={{ color: '#FFFFFF' }}>
              <li><W><strong>Authentification sécurisée</strong></W> (OAuth2, clés API, accès restreints par rôle),</li>
              <li><W><strong>Chiffrement</strong></W> des échanges entre nos serveurs et vos outils,</li>
              <li><W><strong>Stockage isolé</strong></W> des données client, hébergé sur des serveurs conformes aux normes européennes (RGPD).</li>
            </ul>

            <p className="mb-6" style={{ color: '#FFFFFF' }}>
              Chaque projet dispose de son propre environnement, garantissant qu&apos;aucune donnée n&apos;est partagée entre clients. Nos agents IA n&apos;ont accès qu&apos;aux informations strictement nécessaires à leur tâche, et tout est traçable.
            </p>

            <p style={{ color: '#FFFFFF' }}>
              💡 <G>Notre engagement :</G> transparence, conformité et tranquillité d&apos;esprit à chaque étape de votre automatisation.
            </p>
          </>
        );

      case 'agents-ia':
        return (
          <>
            <p className="mb-6" style={{ color: '#FFFFFF' }}>
              Les agents IA <W>Kames</W> sont des <G>assistants intelligents</G> conçus pour automatiser vos <G>tâches récurrentes</G> et faire <G>gagner du temps</G> à vos équipes. Ils peuvent gérer vos emails, préparer des devis, classer vos fichiers, ou encore générer des reports.
            </p>

            <p className="mb-6" style={{ color: '#FFFFFF' }}>
              Chaque agent est bâti selon <G>notre méthodologie</G> :
            </p>

            <ul className="list-disc list-inside space-y-3 mb-6" style={{ color: '#FFFFFF' }}>
              <li><W>Observation</W> — nous analysons votre manière de travailler, vos outils et vos contraintes.</li>
              <li><W>Reproduction</W> — nous créons un agent qui reproduit fidèlement votre logique métier.</li>
              <li><W>Amélioration</W> — l&apos;agent apprend et s&apos;adapte pour devenir plus efficace au fil du temps.</li>
            </ul>

            <p className="mb-6" style={{ color: '#FFFFFF' }}>
              Chaque agent est <G>entièrement personnalisé</G> selon votre métier, vos outils et vos priorités : l&apos;IA devient un véritable <W>levier de croissance</W> lorsqu&apos;elle est utilisée avec <G>méthode, stratégie et accompagnement humain</G>.
            </p>

            <p style={{ color: '#FFFFFF' }}>
              Contrairement aux solutions &quot;toutes faites&quot;, nos agents sont <G>stables, supervisés et transparents</G> — vous <W>gardez le contrôle</W> sur chaque action.
            </p>
          </>
        );

      case 'api':
        return (
          <>
            <p className="mb-6" style={{ color: '#FFFFFF' }}>
              Notre API vous permet d&apos;accéder à tous nos agents et automatisations de <W>manière programmée</W>. Consultez la <G>documentation technique</G> complète pour débuter votre intégration.
            </p>

            <p className="mb-6" style={{ color: '#FFFFFF' }}>
              Endpoints disponibles :
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6" style={{ color: '#FFFFFF' }}>
              <li><G>/agents</G> - Lister et gérer vos agents</li>
              <li><G>/workflows</G> - Créer et exécuter des workflows</li>
              <li><G>/logs</G> - Accéder à l&apos;historique des actions</li>
              <li><G>/webhooks</G> - Configurer des déclencheurs externes</li>
            </ul>

            <p style={{ color: '#FFFFFF' }}>
              Tous les appels API sont authentifiés via <G>OAuth2</G> et limitées par quota. Pour accéder à la <G>documentation technique</G> complète, consultez notre <W>portail développeur</W>.
            </p>
          </>
        );

      case 'best-practices':
        return (
          <>
            <p className="mb-6" style={{ color: '#FFFFFF' }}>
              Voici nos recommandations pour maximiser l&apos;impact de vos automatisations IA :
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">
                  <G>1. Commencez petit, pensez grand</G>
                </h4>
                <p style={{ color: '#FFFFFF' }}>
                  Lancez d&apos;abord avec un flux simple (ex: qualification de leads), validez les résultats, puis étendez à d&apos;autres processus. Chaque victoire crée de la crédibilité interne.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">
                  <G>2. Mesurez tout</G>
                </h4>
                <p style={{ color: '#FFFFFF' }}>
                  Avant et après chaque automatisation, documentez les gains : temps économisé, erreurs réduites, revenue générée. Cela vous aide à prioriser les prochains projets.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">
                  <G>3. Impliquez vos équipes</G>
                </h4>
                <p style={{ color: '#FFFFFF' }}>
                  Les IA qui réussissent sont celles acceptées et alimentées par vos collaborateurs. Formation, feedback et amélioration continue sont clés.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">
                  <G>4. Restez transparent</G>
                </h4>
                <p style={{ color: '#FFFFFF' }}>
                  Communiquez clairement sur ce que l&apos;IA fait, ses limites et comment elle impacte vos clients. La confiance se bâtit sur la transparence.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">
                  <G>5. Optimisez en continu</G>
                </h4>
                <p style={{ color: '#FFFFFF' }}>
                  Pas d&apos;automatisation n&apos;est &quot;finie&quot;. Collectez les retours, identifiez les cas limites et ajustez vos règles et agents régulièrement.
                </p>
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  const getTitleForActiveLink = () => {
    const titles: Record<string, string> = {
      introduction: 'Introduction',
      'notre-demarche': 'Notre démarche',
      securite: 'Sécurité et Authentification',
      'agents-ia': 'Agents IA',
      api: 'Référence API',
      'best-practices': 'Meilleures pratiques',
    };
    return titles[activeLink] || 'Introduction';
  };

  return (
    <section id="documentation" className="py-16 bg-background section-padding">
      <div className="container mx-auto px-6">
        <h2 style={{background: 'linear-gradient(90deg, #FFB300 0%, #FF6D00 50%, #F538A0 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}} className="text-5xl md:text-6xl font-bold text-center mb-6">
          Simplifier votre quotidien
        </h2>
        <p className="mt-4 text-center text-lg font-medium text-white max-w-3xl mx-auto leading-relaxed">
          Guides, exemples et explications simples pour découvrir comment nous
          pouvons faire gagner un temps précieux à votre entreprise.
        </p>

        <div className="grid md:grid-cols-4 gap-12 mt-16">
          {/* Menu latéral */}
          <aside className="md:col-span-1">
            <p className="text-lg font-semibold text-white mb-6">Sujets</p>
            <div className="space-y-3">
              <a 
                href="#introduction" 
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('introduction');
                }}
                className={`block text-sm font-medium transition-colors ${
                  activeLink === 'introduction' 
                    ? 'text-[#FFB300] font-semibold' 
                    : 'text-gray-500 hover:text-white'
                }`}
              >
                Introduction
              </a>
              <a 
                href="#notre-demarche" 
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('notre-demarche');
                }}
                className={`block text-sm font-medium transition-colors ${
                  activeLink === 'notre-demarche' 
                    ? 'text-[#FFB300] font-semibold' 
                    : 'text-gray-500 hover:text-white'
                }`}
              >
                Notre démarche
              </a>
              <a 
                href="#securite" 
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('securite');
                }}
                className={`block text-sm font-medium transition-colors ${
                  activeLink === 'securite' 
                    ? 'text-[#FFB300] font-semibold' 
                    : 'text-gray-500 hover:text-white'
                }`}
              >
                Sécurité et Authentification
              </a>
              <a 
                href="#agents-ia" 
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('agents-ia');
                }}
                className={`block text-sm font-medium transition-colors ${
                  activeLink === 'agents-ia' 
                    ? 'text-[#FFB300] font-semibold' 
                    : 'text-gray-500 hover:text-white'
                }`}
              >
                Agents IA
              </a>
              <a 
                href="#api" 
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('api');
                }}
                className={`block text-sm font-medium transition-colors ${
                  activeLink === 'api' 
                    ? 'text-[#FFB300] font-semibold' 
                    : 'text-gray-500 hover:text-white'
                }`}
              >
                Référence API
              </a>
              <a 
                href="#best-practices" 
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('best-practices');
                }}
                className={`block text-sm font-medium transition-colors ${
                  activeLink === 'best-practices' 
                    ? 'text-[#FFB300] font-semibold' 
                    : 'text-gray-500 hover:text-white'
                }`}
              >
                Meilleures pratiques
              </a>
            </div>
          </aside>

          {/* Contenu principal */}
          <div className="md:col-span-3">
            <h3 className="text-3xl font-bold text-[#FFB300] mb-6">
              {getTitleForActiveLink()}
            </h3>
            <div className="text-muted-foreground space-y-4">
              {renderContent()}
            </div>

            <Link
              href="/documentation-complete"
              className="inline-flex items-center px-6 py-3 rounded-full border border-[#FFB300] font-semibold text-[#FFB300] hover:bg-white/5 transition mt-8"
            >
              Accédez à notre documentation complète
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DocumentationSection;