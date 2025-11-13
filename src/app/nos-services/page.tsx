'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NosServicesPage() {
  const [sent, setSent] = useState(false);

  return (
    <main
      id="top"
      className="min-h-screen w-full bg-black text-white antialiased"
    >
      {/* CTA RETOUR À L'ACCUEIL */}
      <div className="mx-auto max-w-6xl px-6 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour à l&apos;accueil</span>
        </Link>
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-10 md:pt-20 md:pb-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
              <span className="text-gradient">
                Automatisez maintenant. Accélérez durablement.
              </span>
            </h1>
            <p className="mt-5 text-base text-white/80 md:text-lg">
              Une page unique pour comprendre pourquoi choisir{' '}
              <span className="font-semibold">Kames</span>, notre méthodologie,
              comparer nos offres et nous briefer en 2 minutes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#comparatif"
                className="rounded-2xl border border-[#FFB300] px-5 py-3 text-sm transition hover:-translate-y-0.5 hover:bg-white/5 md:text-base"
              >
                Voir nos offres
              </Link>
              <Link
                href="#contact"
                className="rounded-2xl border border-[#FFB300] px-5 py-3 text-sm transition hover:-translate-y-0.5 hover:bg-white/5 md:text-base"
              >
                Demander un devis
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-[#FFB300] via-[#FF6D00] to-[#F538A0] opacity-40 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <ul className="grid gap-4 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#FF6D00]" />
                  ROI mesurable dès les premières semaines
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#FF6D00]" />
                  n8n + agents IA + intégrations Microsoft/Google
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#FF6D00]" />
                  Sécurité, chiffrement & conformité RGPD
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#FF6D00]" />
                  Maintenance proactive & amélioration continue
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI KAMES */}
      <section id="pourquoi" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <h2 className="text-2xl font-semibold md:text-4xl">
          <span className="text-gradient">Pourquoi choisir Kames ?</span>
        </h2>
        <p className="mt-3 text-sm text-white/70 md:text-base">
          L&apos;IA doit être utile, rentable et simple à exploiter. Nos engagements
          clés.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Orienté résultats',
              desc: 'Analyse ROI en amont, KPI de temps gagné, taux d\'automatisation, et économies obtenues.',
            },
            {
              title: 'Architecture évolutive',
              desc: 'Systèmes modulaires: commencez avec 1 flux, étendez vers un écosystème multi‑agents.',
            },
            {
              title: 'Sécurité & RGPD',
              desc: 'Hébergement sécurisé (AWS/Firebase), chiffrement des données, principes de minimisation.',
            },
            {
              title: 'Transparence & pédagogie',
              desc: 'Pas de jargon: démos, docs concises, et formation orientée cas d\'usage.',
            },
            {
              title: 'Maintenance proactive',
              desc: 'Monitoring, correctifs rapides, roadmap d\'optimisation en continu.',
            },
            {
              title: 'Intégrations riches',
              desc: 'Microsoft 365, Google, CRM/ERP, PandaDoc, Fireflies, datawarehouses, APIs privées…',
            },
          ].map((c, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-primary hover:shadow-[0_0_1rem_-0.25rem_hsl(var(--primary))] hover:-translate-y-2"
            >
              <h3 className="text-lg font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm text-white/80">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* METHODOLOGIE */}
      <section
        id="methodologie"
        className="mx-auto max-w-6xl px-6 py-12 md:py-16"
      >
        <h2 className="text-2xl font-semibold md:text-4xl">
          <span className="text-gradient">Notre méthodologie</span>
        </h2>
        <p className="mt-3 text-sm text-white/70 md:text-base">
          Un cadre opérationnel clair pour livrer vite, bien, et sans dette
          technique.
        </p>

        <ol className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {
              step: '1. Audit & Analyse',
              points: [
                'Cartographie des processus: tâches répétitives, frictions, risques.',
                'Hypothèses d\'automatisation + estimation de ROI (heures/mois, €).',
                'Priorisation: impact × faisabilité (quick wins → projets structurants).',
              ],
            },
            {
              step: '2. Conception & Développement',
              points: [
                'Workflows n8n + agents IA (ChatGPT/Claude) orchestrés.',
                'Intégrations Microsoft/Google/CRM, gestion d\'erreurs & logs.',
                'Qualité: tests unitaires sur flux, sandbox & revue guidée.',
              ],
            },
            {
              step: '3. Déploiement & Formation',
              points: [
                'Hébergement sécurisé (AWS/Firebase), secrets & permissions.',
                'Intégration à vos outils (Outlook, Excel, Notion, ERP…).',
                'Formation courte + micro‑docs (mode opératoire, FAQ).',
              ],
            },
            {
              step: '4. Suivi & Évolution',
              points: [
                'Monitoring, alerting, SLA de correction.',
                'Amélioration continue: nouvelles règles, nouveaux flux.',
                'Quarterly Business Review: roadmap & ROI actualisé.',
              ],
            },
          ].map((b, i) => (
            <li
              key={i}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-primary hover:shadow-[0_0_1rem_-0.25rem_hsl(var(--primary))] hover:-translate-y-2"
            >
              <h3 className="text-lg font-semibold">{b.step}</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/80">
                {b.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* GRILLE COMPARATIVE */}
      <section
        id="comparatif"
        className="mx-auto max-w-6xl px-6 py-12 md:py-16"
      >
        <h2 className="text-2xl font-semibold md:text-4xl">
          <span className="text-gradient">Comparatif des offres</span>
        </h2>
        <p className="mt-3 text-sm text-white/70 md:text-base">
          Choisissez le niveau adapté aujourd&apos;hui, faites‑le évoluer demain —
          sans repartir de zéro.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Standard */}
          <article className="relative flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-primary hover:shadow-[0_0_1rem_-0.25rem_hsl(var(--primary))] hover:-translate-y-2">
            <header>
              <h3 className="text-xl font-semibold">
                Standard — Automatisation essentielle
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Pour démarrer vite sur vos tâches répétitives clés.
              </p>
            </header>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
                <li><span className="font-semibold text-white/90">Objectif :</span> Automatiser un processus clé</li>
                <li><span className="font-semibold text-white/90">Technologie :</span> n8n + hébergement</li>
                <li><span className="font-semibold text-white/90">Analyse :</span> Complète avec focus précis sur une tâche</li>
                <li><span className="font-semibold text-white/90">Maintenance :</span> Check-up mensuel</li>
                <li><span className="font-semibold text-white/90">Assistance :</span> Mail/Visio</li>
                <li><span className="font-semibold text-white/90">Formation :</span> 1h express</li>
            </ul>
            <div className="mt-auto pt-6 text-sm opacity-80">
              <p>À partir de <span className="font-semibold text-primary">490 €</span> <span className="text-primary">+</span> <span className="font-semibold text-primary">79 €/mois</span></p>
              <p className="mt-1">Délai : <span className="font-semibold">5–10 jours</span></p>
            </div>
            <div className="mt-6">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl border border-[#FFB300] px-5 py-3 text-sm transition hover:-translate-y-0.5 hover:bg-white/5"
              >
                Demander un devis
              </Link>
            </div>
          </article>

          {/* Premium */}
          <article className="relative flex flex-col rounded-3xl border border-white/10 bg-white/[0.05] p-6 ring-1 ring-white/10 transition-all duration-300 hover:border-primary hover:shadow-[0_0_1rem_-0.25rem_hsl(var(--primary))] hover:-translate-y-2">
            <header>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-wide text-white/70">
                Populaire
              </div>
              <h3 className="mt-3 text-xl font-semibold">
                Premium — Système IA complet
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Agents IA, intégrations avancées et supervision continue.
              </p>
            </header>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
                <li><span className="font-semibold text-white/90">Objectif :</span> Créer un système reposant sur l&apos;IA efficace et complet</li>
                <li><span className="font-semibold text-white/90">Technologie :</span> n8n + agents IA + intégrations</li>
                <li><span className="font-semibold text-white/90">Analyse :</span> Complète, avec focus 3-5 processus</li>
                <li><span className="font-semibold text-white/90">Maintenance :</span> Mises à jour hebdomadaires et check-up continu</li>
                <li><span className="font-semibold text-white/90">Assistance :</span> Prioritaire (Téléphone/Mail/Visio)</li>
                <li><span className="font-semibold text-white/90">Formation :</span> Équipe + micro-docs</li>
            </ul>
            <div className="mt-auto pt-6 text-sm opacity-80">
              <p>À partir de <span className="font-semibold text-primary">1 490 €</span> <span className="text-primary">+</span> <span className="font-semibold text-primary">149 €/mois</span></p>
              <p className="mt-1">Délai : <span className="font-semibold">2–4 semaines</span></p>
            </div>
            <div className="mt-6">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl border border-[#FFB300] px-5 py-3 text-sm transition hover:-translate-y-0.5 hover:bg-white/5"
              >
                Demander un devis
              </Link>
            </div>
          </article>

          {/* Sur mesure */}
          <article className="relative flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-primary hover:shadow-[0_0_1rem_-0.25rem_hsl(var(--primary))] hover:-translate-y-2">
            <header>
              <h3 className="text-xl font-semibold">
                Sur Mesure — Écosystème IA complet
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Pour les projets ambitieux et interconnectés.
              </p>
            </header>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
                <li><span className="font-semibold text-white/90">Objectif :</span> Écosystème IA global</li>
                <li><span className="font-semibold text-white/90">Technologie :</span> Multi-agents + APIs custom</li>
                <li><span className="font-semibold text-white/90">Analyse :</span> Audit global + roadmap</li>
                <li><span className="font-semibold text-white/90">Maintenance :</span> Équipe dédiée</li>
                <li><span className="font-semibold text-white/90">Assistance :</span> Dédiée + stratégique</li>
                <li><span className="font-semibold text-white/90">Formation :</span> Personnalisée</li>
            </ul>
            <div className="mt-auto pt-6 text-sm opacity-80">
              <p>Sur devis - <span className="font-semibold text-primary">dès 5 000 €</span></p>
              <p className="mt-1">Délai : <span className="font-semibold">Selon projet</span></p>
            </div>
            <div className="mt-6">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl border border-[#FFB300] px-5 py-3 text-sm transition hover:-translate-y-0.5 hover:bg-white/5"
              >
                Demander un devis
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* SECTION CONTACT */}
      <section id="contact" className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <h2 className="text-center text-2xl font-semibold md:text-4xl">
          <span className="text-gradient">
            Demander un devis
          </span>
        </h2>
        <p className="mt-3 text-center text-white/70">
          Un expert Kames vous répond sous 24h.
        </p>

        {sent ? (
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center">
            <p className="text-white/90">
              Merci, votre demande a été envoyée. Nous revenons vers vous très
              vite.
            </p>
          </div>
        ) : (
          <form
            className="mt-8 grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="firstName" className="text-sm text-white/70">Prénom *</label>
                <input id="firstName" name="firstName" required placeholder="Ex. Marie"
                  className="rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-[#FF6D00]" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="lastName" className="text-sm text-white/70">Nom *</label>
                <input id="lastName" name="lastName" required placeholder="Ex. Dupont"
                  className="rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-[#FF6D00]" />
              </div>
            </div>

            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm text-white/70">Email professionnel *</label>
              <input id="email" name="email" type="email" required placeholder="prenom@entreprise.com"
                className="rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-[#FF6D00]" />
            </div>

            <div className="grid gap-2">
              <label htmlFor="role" className="text-sm text-white/70">Votre rôle dans l&apos;organisation *</label>
              <input id="role" name="role" required placeholder="Ex. CTO, Directeur des Opérations, Chef de projet…"
                className="rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-[#FF6D00]" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="company" className="text-sm text-white/70">Entreprise *</label>
                <input id="company" name="company" required placeholder="Ex. Kames"
                  className="rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-[#FF6D00]" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="website" className="text-sm text-white/70">Site web (optionnel)</label>
                <input id="website" name="website" type="url" placeholder="https://votreentreprise.com"
                  className="rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-[#FF6D00]" />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="phone" className="text-sm text-white/70">Téléphone (optionnel)</label>
                <input id="phone" name="phone" type="tel" placeholder="+33 6 12 34 56 78"
                  className="rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-[#FF6D00]" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="companySize" className="text-sm text-white/70">Taille de l&apos;entreprise *</label>
                <select id="companySize" name="companySize" required className="appearance-none rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-[#FF6D00]"
                 style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.5rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em',
                  }}
                >
                  <option className="bg-black" value="">Sélectionner</option>
                  <option className="bg-black" value="1-10">1–10</option>
                  <option className="bg-black" value="11-50">11–50</option>
                  <option className="bg-black" value="51-200">51–200</option>
                  <option className="bg-black" value="200+">200+ </option>
                </select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="annualRevenue" className="text-sm text-white/70">Chiffre d&apos;affaires annuel *</label>
                <select id="annualRevenue" name="annualRevenue" required className="appearance-none rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-[#FF6D00]"
                   style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.5rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em',
                  }}
                >
                  <option className="bg-black" value="">Sélectionner</option>
                  <option className="bg-black" value="<200k">{'< 200 k€'}</option>
                  <option className="bg-black" value="200k-1m">200 k€ – 1 M€</option>
                  <option className="bg-black" value="1m-5m">1 – 5 M€</option>
                  <option className="bg-black" value="5m+">5 M€ +</option>
                </select>
              </div>
              <div className="grid gap-2">
                <label htmlFor="projectBudget" className="text-sm text-white/70">Budget projet *</label>
                <select id="projectBudget" name="projectBudget" required className="appearance-none rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-[#FF6D00]"
                   style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.5rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em',
                  }}
                >
                  <option className="bg-black" value="">Sélectionner</option>
                  <option className="bg-black" value="<1500">{'< 1 500 €'}</option>
                  <option className="bg-black" value="1500-3000">1 500 – 3 000 €</option>
                  <option className="bg-black" value="3000-8000">3 000 – 8 000 €</option>
                  <option className="bg-black" value="8000+">8 000 € +</option>
                </select>
              </div>
            </div>

            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm text-white/70">Comment pouvons‑nous aider ? *</label>
              <textarea id="message" name="message" required rows={5} placeholder="Décrivez vos besoins: ex. automatiser prospection + RDV + devis, intégration Microsoft 365/Notion/CRM, contraintes et délais…"
                className="rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-[#FF6D00]" />
            </div>

            <div className="mt-2 space-y-2 text-sm">
              <label className="flex items-start gap-3 text-white/80">
                <input type="checkbox" name="optEmail" className="mt-1 h-4 w-4 rounded border-white/20 bg-transparent text-primary focus:ring-primary" />
                <span>Recevoir des contenus bonus et offres (email)</span>
              </label>
              <label className="flex items-start gap-3 text-white/80">
                <input type="checkbox" name="optSMS" className="mt-1 h-4 w-4 rounded border-white/20 bg-transparent text-primary focus:ring-primary" />
                <span>Recevoir des messages SMS pour le suivi</span>
              </label>
            </div>

            <div className="mt-2 text-xs text-white/60">
              En envoyant ce formulaire, vous acceptez notre traitement de vos données pour répondre à votre demande. <Link href="/politique-confidentialite" className="underline hover:text-white">Politique de confidentialité</Link>.
            </div>

            <div className="pt-3">
              <button type="submit" className="w-full rounded-2xl border border-[#FFB300] px-6 py-3 font-medium transition hover:-translate-y-0.5 hover:bg-white/5">
                Envoyer ma demande
              </button>
            </div>
          </form>
        )}
      </section>

      {/* FOOTER MINI */}
      <footer className="mx-auto max-w-6xl px-6 pb-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <span className="text-xs text-white/50">
            © {new Date().getFullYear()} Kames. Tous droits réservés.
          </span>
          <nav className="flex items-center gap-5 text-xs text-white/60">
            <Link href="#pourquoi" className="hover:text-white">
              Pourquoi Kames
            </Link>
            <Link href="#methodologie" className="hover:text-white">
              Méthodologie
            </Link>
            <Link href="#comparatif" className="hover:text-white">
              Offres
            </Link>
            <Link href="#contact" className="hover:text-white">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}