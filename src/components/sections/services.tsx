'use client';

import { Zap, TrendingUp, PiggyBank, ShieldCheck, Check, ArrowRight, Hourglass, Clock, Target, Calendar } from 'lucide-react';
import Link from 'next/link';

export function Services() {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      
      {/* 4.1 BENEFICES & INTRO */}
      <div className="mb-32 text-center">
        
        {/* Titre Principal */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient mb-8 max-w-4xl mx-auto">
          Votre partenaire privilégié pour placer l'IA au cœur de votre entreprise
        </h2>

        {/* Sous-titre "Nos Services" transformé en Magic Button */}
        <div className="mb-8 flex justify-center">
          <div className="magic-btn-container">
            <span className="magic-btn-content px-6 text-xl">Nos Services</span>
          </div>
        </div>

        {/* Texte descriptif */}
        <p className="text-base md:text-lg text-white/70 max-w-4xl mx-auto mb-16 font-light leading-relaxed">
          Chez Kames, nous concevons, déployons et maintenons des systèmes basés sur l'IA qui transforment vos opérations quotidiennes. Chaque solution est pensée pour maximiser votre productivité, réduire vos coûts et accélérer la croissance de votre entreprise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { 
              icon: Hourglass, 
              title: "Gain de temps", 
              desc: "Automatisez vos tâches répétitives et économisez des dizaine d'heures par mois" 
            },
            { 
              icon: TrendingUp, 
              title: "Optimisation des ressources", 
              desc: "Libérez vos équipes pour les missions à forte valeur ajoutée" 
            },
            { 
              icon: PiggyBank, 
              title: "Sobriété opérationnelle", 
              desc: "Faire plus avec moins, grâce à l'orchestration automatisée" 
            },
            { 
              icon: ShieldCheck, 
              title: "Sécurisez votre croissance", 
              desc: "RGPD, hébergement France, souveraineté des données et protection renforcée" 
            }
          ].map((item, i) => (
            <div key={i} className="group relative rounded-2xl p-[1px] overflow-hidden">
                {/* Bordure animée (effet hover ici pour les petites cartes) */}
                <div className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#FFB300_50%,#F538A0_100%)] animate-spin opacity-0 group-hover:opacity-100 transition-opacity" style={{ animationDuration: '3s' }} />
                
                {/* Contenu de la carte */}
                <div className="relative h-full bg-black rounded-2xl p-6 flex flex-col items-center border border-white/10 group-hover:border-transparent transition-colors">
                    <div className="p-3 bg-neutral-900 rounded-lg w-fit text-[#FFB300] border border-white/5 mx-auto mb-4">
                        <item.icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <h4 className="text-xl font-medium text-white mb-2">{item.title}</h4>
                    <p className="text-neutral-400 font-light text-sm">{item.desc}</p>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4.2 NOTRE DÉMARCHE (TIMELINE) */}
      <div className="mb-32">
        <div className="text-center mb-16 flex justify-center">
          {/* Titre "Notre démarche" en Magic Button */}
          <div className="magic-btn-container">
            <span className="magic-btn-content px-6 text-xl">Notre démarche</span>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
           {/* Ligne Verticale Centrale (Desktop uniquement) */}
           <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#FFB300]/30 to-transparent -translate-x-1/2 hidden md:block" />

           <div className="space-y-16 md:space-y-32 relative">
             
             {/* ÉTAPE 1 : Audit & Analyse */}
             <div className="relative flex flex-col md:flex-row items-center md:justify-between group">
                 {/* Texte à Gauche */}
                 <div className="md:w-[45%] text-center md:text-right pr-0 md:pr-12 mb-6 md:mb-0">
                     <h3 className="text-2xl font-bold text-[#FFB300] mb-3">Audit & Analyse</h3>
                     <p className="text-neutral-400 font-light text-lg">
                       Nous plongeons dans vos données et processus pour identifier les opportunités d'automatisation à fort impact.
                     </p>
                 </div>
                 
                 {/* Point Central (Orange) */}
                 <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-[#000000] border-2 border-[#FFB300] shadow-[0_0_15px_rgba(255,179,0,0.6)] z-10">
                     <div className="w-1.5 h-1.5 bg-[#FFB300] rounded-full" />
                 </div>
                 {/* Version Mobile du Point */}
                 <div className="md:hidden w-3 h-3 rounded-full bg-[#FFB300] mb-4 shadow-[0_0_10px_rgba(255,179,0,0.6)]"></div>

                 {/* Espace Vide à Droite */}
                 <div className="md:w-[45%] pl-0 md:pl-12 hidden md:block"></div>
             </div>

             {/* ÉTAPE 2 : Conception (Orange Foncé) */}
             <div className="relative flex flex-col md:flex-row-reverse items-center md:justify-between group">
                  {/* Texte à Droite */}
                 <div className="md:w-[45%] text-center md:text-left pl-0 md:pl-12 mb-6 md:mb-0">
                     <h3 className="text-2xl font-bold text-[#FF6D00] mb-3">Conception</h3>
                     <p className="text-neutral-400 font-light text-lg">
                       Développement sur mesure de vos agents IA et workflows avec les meilleurs outils (n8n, OpenAI, Claude).
                     </p>
                 </div>

                 {/* Point Central (Orange Foncé) */}
                 <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-[#000000] border-2 border-[#FF6D00] shadow-[0_0_15px_rgba(255,109,0,0.6)] z-10">
                     <div className="w-1.5 h-1.5 bg-[#FF6D00] rounded-full" />
                 </div>
                 {/* Version Mobile du Point */}
                 <div className="md:hidden w-3 h-3 rounded-full bg-[#FF6D00] mb-4 shadow-[0_0_10px_rgba(255,109,0,0.6)]"></div>

                  {/* Espace Vide à Gauche */}
                  <div className="md:w-[45%] pr-0 md:pr-12 hidden md:block"></div>
             </div>

             {/* ÉTAPE 3 : Déploiement (Magenta) */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between group">
                 {/* Texte à Gauche */}
                 <div className="md:w-[45%] text-center md:text-right pr-0 md:pr-12 mb-6 md:mb-0">
                     <h3 className="text-2xl font-bold text-[#F538A0] mb-3">Déploiement</h3>
                     <p className="text-neutral-400 font-light text-lg">
                       Mise en production sécurisée, formation de vos équipes et maintenance continue pour une adoption fluide.
                     </p>
                 </div>
                 
                 {/* Point Central (Magenta) */}
                 <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-[#000000] border-2 border-[#F538A0] shadow-[0_0_15px_rgba(245,56,160,0.6)] z-10">
                     <div className="w-1.5 h-1.5 bg-[#F538A0] rounded-full" />
                 </div>
                 {/* Version Mobile du Point */}
                 <div className="md:hidden w-3 h-3 rounded-full bg-[#F538A0] mb-4 shadow-[0_0_10px_rgba(245,56,160,0.6)]"></div>

                 {/* Espace Vide à Droite */}
                 <div className="md:w-[45%] pl-0 md:pl-12 hidden md:block"></div>
             </div>
           </div>
        </div>
      </div>

      {/* 4.3 NOS OFFRES */}
      <div>
        <div className="text-center mb-16 flex justify-center">
            {/* Titre "Nos Offres" identique à "Notre démarche" */}
            <div className="magic-btn-container">
                <span className="magic-btn-content px-6 text-xl">
                    Nos Offres
                </span>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* STARTER */}
          <div className="group relative rounded-2xl p-[1px] overflow-hidden flex flex-col">
            <div className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#FFB300_50%,#F538A0_100%)] animate-spin" style={{ animationDuration: '20s' }} />
            <div className="relative flex-1 bg-black rounded-2xl p-8 border border-transparent flex flex-col">
                <h3 className="text-2xl font-medium text-white mb-2">Pack Starter</h3>
                <h4 className="text-lg text-[#FFB300] font-normal mb-4">Automatisez vos processus essentiels</h4>
                <p className="text-neutral-300 mb-6 text-sm font-light leading-relaxed">
                  Vous consacrez plusieurs heures par semaine aux mêmes actions ? Nous automatisons ces processus pour libérer votre temps et celui de vos équipes.
                </p>
                
                <div className="space-y-4 mb-8 flex-1">
                  <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-3">Ce que comprend l'offre :</p>
                  {[
                    'Audit gratuit (analyse process & besoins)', 
                    'Développement solution sur mesure', 
                    'Hébergement sécurisé inclus',
                    'Formation de prise en main (2h)',
                    'Support mensuel inclus'
                  ].map((feat, i) => (
                      <li key={i} className="flex items-start text-white text-sm font-light list-none">
                        <Check className="w-4 h-4 text-[#FFB300] mr-3 mt-1 shrink-0" /> 
                        <span>{feat}</span>
                      </li>
                  ))}

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-3">Exemples :</p>
                    <ul className="text-xs text-neutral-300 space-y-2 list-disc pl-4 font-normal">
                      <li>Qualification automatique demandes entrantes</li>
                      <li>Suivi échéances & relances clients</li>
                      <li>Synthèse opportunités CRM</li>
                      <li>Transcription échanges commerciaux</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-white/10 mb-6 space-y-3">
                  <div className="flex items-start gap-2 text-sm text-neutral-300">
                     <Target className="w-4 h-4 text-[#F538A0] mt-0.5 shrink-0" />
                     <span className="font-light"><strong className="font-medium text-white">Idéal pour :</strong> Automatiser 1 ou 2 processus critiques quotidiens</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-300">
                     <Clock className="w-4 h-4 text-[#F538A0] shrink-0" />
                     <span className="font-light"><strong className="font-medium text-white">Délai :</strong> 5 à 7 jours ouvrés</span>
                  </div>
                </div>

                <Link href="#contact" className="block w-full">
                    <div className="magic-btn-container w-full">
                        <span className="magic-btn-content w-full justify-center text-sm font-bold py-3">
                            Réservez votre audit offert
                        </span>
                    </div>
                </Link>
            </div>
          </div>

          {/* PRO (Mise en avant) */}
          <div className="group relative rounded-2xl p-[1px] overflow-hidden flex flex-col">
            <div className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#FFB300_50%,#F538A0_100%)] animate-spin" style={{ animationDuration: '20s' }} />
            <div className="relative flex-1 bg-black rounded-2xl p-8 border-transparent flex flex-col">
                
                <h3 className="text-2xl font-medium text-white mb-2">Pack Pro</h3>
                <h4 className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#FFB300] to-[#F538A0] font-normal mb-4">Orchestration intelligente</h4>
                <p className="text-neutral-300 mb-6 text-sm font-light leading-relaxed">
                  Plusieurs workflows interconnectés et agents IA qui travaillent ensemble. Votre infrastructure d'automatisation professionnelle de bout en bout.
                </p>
                
                <div className="space-y-4 mb-8 flex-1">
                  <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-3">Ce que comprend l'offre :</p>
                  {[
                    'Audit complet gratuit', 
                    'Workflows multiples interconnectés', 
                    'Agents IA conversationnels',
                    'Intégrations métier avancées',
                    'Dashboard de pilotage temps réel',
                    'Supervision proactive'
                  ].map((feat, i) => (
                      <li key={i} className="flex items-start text-white text-sm font-light list-none">
                        <Check className="w-4 h-4 text-[#F538A0] mr-3 mt-1 shrink-0" /> 
                        <span>{feat}</span>
                      </li>
                  ))}

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-3">Exemples :</p>
                    <ul className="text-xs text-neutral-300 space-y-2 list-disc pl-4 font-normal">
                      <li>Gestion commerciale (Lead à RDV)</li>
                      <li>Parcours client (Onboarding & Fidélisation)</li>
                      <li>Récupération paniers abandonnés</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-white/10 mb-6 space-y-3">
                  <div className="flex items-start gap-2 text-sm text-neutral-300">
                     <Target className="w-4 h-4 text-[#F538A0] mt-0.5 shrink-0" />
                     <span className="font-light"><strong className="font-medium text-white">Idéal pour :</strong> Transformer l'intégralité d'un processus métier</span>
                  </div>
                   <div className="flex items-center gap-2 text-sm text-neutral-300">
                     <Clock className="w-4 h-4 text-[#F538A0] shrink-0" />
                     <span className="font-light"><strong className="font-medium text-white">Délai :</strong> 2 à 4 semaines</span>
                  </div>
                </div>

                <Link href="#contact" className="block w-full">
                    <div className="magic-btn-container w-full">
                        <span className="magic-btn-content w-full justify-center text-sm font-bold py-3">
                            Réservez votre audit offert
                        </span>
                    </div>
                </Link>
            </div>
          </div>

          {/* PREMIUM */}
          <div className="group relative rounded-2xl p-[1px] overflow-hidden flex flex-col">
            <div className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#FFB300_50%,#F538A0_100%)] animate-spin" style={{ animationDuration: '20s' }} />
            <div className="relative flex-1 bg-black rounded-2xl p-8 border border-transparent flex flex-col">
                <h3 className="text-2xl font-medium text-white mb-2">Pack Premium</h3>
                <h4 className="text-lg text-[#F538A0] font-normal mb-4">Solution sur mesure</h4>
                <p className="text-neutral-300 mb-6 text-sm font-light leading-relaxed">
                  Audit complet, architecture personnalisée, développement sur mesure. Nous construisons votre avantage concurrentiel et votre vision IA.
                </p>
                
                <div className="space-y-4 mb-8 flex-1">
                  <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-3">Ce que comprend l'offre :</p>
                  {[
                    'Audit stratégique approfondi', 
                    'Architecture personnalisée', 
                    'Développement dédié & Intégrations',
                    'Formation continue de vos équipes',
                    'Gouvernance complète',
                    'Accompagnement continu'
                  ].map((feat, i) => (
                      <li key={i} className="flex items-start text-white text-sm font-light list-none">
                        <Check className="w-4 h-4 text-[#F538A0] mr-3 mt-1 shrink-0" /> 
                        <span>{feat}</span>
                      </li>
                  ))}

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-3">Exemples :</p>
                    <ul className="text-xs text-neutral-300 space-y-2 list-disc pl-4 font-normal">
                      <li>Écosystème multi-agents cycle complet</li>
                      <li>Infrastructure IA réseau de franchises</li>
                      <li>Plateforme analyse prédictive</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-white/10 mb-6 space-y-3">
                   <div className="flex items-start gap-2 text-sm text-neutral-300">
                     <Target className="w-4 h-4 text-[#F538A0] mt-0.5 shrink-0" />
                     <span className="font-light"><strong className="font-medium text-white">Idéal pour :</strong> Projets d'envergure & stratégiques</span>
                  </div>
                   <div className="flex items-center gap-2 text-sm text-neutral-300">
                     <Clock className="w-4 h-4 text-[#F538A0] shrink-0" />
                     <span className="font-light"><strong className="font-medium text-white">Investissement :</strong> Sur devis</span>
                  </div>
                </div>

                <Link href="#contact" className="block w-full">
                    <div className="magic-btn-container w-full">
                        <span className="magic-btn-content w-full justify-center text-sm font-bold py-3">
                            Dites nous en plus
                        </span>
                    </div>
                </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}