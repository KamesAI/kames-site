# Exigences du Projet Kames AI

> **Document de référence** - Ce document décrit les exigences techniques, structurelles et de design du site web Kames AI.

---

## Table des matières

1. [Vue d'ensemble du projet](#1-vue-densemble-du-projet)
2. [Stack technique](#2-stack-technique)
3. [Dépendances](#3-dépendances)
4. [Système de design](#4-système-de-design)
5. [Sections de page](#5-sections-de-page)
6. [Structure des fichiers](#6-structure-des-fichiers)
7. [Exigences responsive](#7-exigences-responsive)
8. [Notes](#8-notes)

---

## 1. Vue d'ensemble du projet

### Qu'est-ce que ce projet ?

**Kames AI** est une agence d'automatisation IA ciblant les entrepreneurs individuels et les PME françaises. Le site web sert d'outil principal de génération de leads et de conversion, mettant en valeur l'expertise en automatisation IA tout en éduquant les prospects sur la valeur de l'automatisation intelligente.

**Offres principales :**
- Répondeurs IA 24/7 pour les appels manqués et les demandes clients
- Systèmes de scoring et de qualification de leads intelligents
- Automatisation de synthèse d'appels avec intégration CRM
- Séquences de suivi par email et SMS
- Automatisation de workflows n8n personnalisés

**Modèle économique :**
- Frais de setup : 800-1 500 € (unique)
- Abonnements mensuels : 247-497 € (récurrent)
- Objectif : 10 000 € MRR (Monthly Recurring Revenue)

### Pour qui est-ce ?

**Profil d'entreprise cible :**
- PME françaises et européennes (TPE/PME)
- Capacité budgétaire mensuelle : 1 000-5 000 € pour l'automatisation
- Confrontées à des goulots d'étranglement opérationnels manuels et répétitifs
- Souhaitant développer des solutions d'automatisation IA
- 90% des prospects ont peu ou pas de connaissances en IA

**Industries ciblées :**
- Entreprises de services (conseil, coaching, agences, services professionnels)
- E-commerce et retail
- Cabinets médicaux
- Agences immobilières
- Toute entreprise avec un volume élevé d'interactions clients

### Quel est l'objectif ?

**Objectif de conversion principal :**
Réserver un appel de consultation gratuit pour discuter de leurs besoins en automatisation.

**Parcours utilisateur :**
1. Arrivent sur la landing page (via recherche organique, LinkedIn, référencement)
2. Découvrent ce que l'automatisation IA peut faire pour leur entreprise
3. Comprennent les bénéfices concrets (temps gagné, leads capturés, revenus protégés)
4. Font confiance à Kames AI comme expert technique
5. Agissent en remplissant le formulaire de contact ou en réservant un appel

**Objectifs secondaires :**
- S'abonner à la newsletter
- Télécharger des lead magnets
- Suivre sur les réseaux sociaux
- S'engager avec du contenu éducatif

### Performance

**Le site web doit :**
- Charger très rapidement (optimisation des performances critiques)
- Être entièrement responsive sur desktop, mobile et tablette
- Offrir une expérience utilisateur fluide et moderne
- Respecter les meilleures pratiques SEO
- Optimiser le Core Web Vitals (LCP, FID, CLS)

---

## 2. Stack technique

| Technologie | Version | Usage |
|-------------|--------|-------|
| **Next.js** | 14.2.3 | Framework React avec App Router, SSR pour SEO |
| **React** | 18.3.1 | Bibliothèque UI |
| **TypeScript** | 5.0.0 | Typage statique |
| **Tailwind CSS** | 3.4.3 | Framework CSS utility-first |
| **Vercel** | - | Hébergement et déploiement (migré depuis Firebase App Hosting) |

### Hébergement & Déploiement

- **Production** : Branche `main` → `kamesai.com`
- **Staging** : Branche `staging` → `staging.kamesai.com`
- **CDN et SSL** : Intégrés via Vercel
- **Déploiements automatiques** : Depuis GitHub

### Backend & Automatisation

- **n8n** (auto-hébergé sur AWS EC2) : Workflows de gestion des leads, séquences email
- **Supabase** (Future) : Base de données PostgreSQL pour données utilisateur

---

## 3. Dépendances

### Framework Core

| Package | Version | Usage |
|---------|---------|-------|
| `next` | 14.2.3 | Framework Next.js |
| `react` | 18.3.1 | Bibliothèque React |
| `react-dom` | 18.3.1 | Rendu React DOM |

### Styling

| Package | Version | Usage |
|---------|---------|-------|
| `tailwindcss` | 3.4.3 | Framework CSS utility-first |
| `tailwindcss-animate` | 1.0.7 | Animations Tailwind |
| `@tailwindcss/typography` | 0.5.13 | Plugin typographie |
| `autoprefixer` | 10.4.19 | Préfixes CSS automatiques |
| `postcss` | 8.4.38 | Traitement CSS |
| `class-variance-authority` | 0.7.0 | Variantes de composants |
| `clsx` | 2.1.1 | Utilitaires de classes CSS |
| `tailwind-merge` | 2.3.0 | Fusion de classes Tailwind |

### 3D Graphics

| Package | Version | Usage |
|---------|---------|-------|
| `three` | 0.164.1 | Bibliothèque 3D WebGL |
| `@react-three/fiber` | 8.18.0 | Rendu React pour Three.js |
| `@react-three/drei` | 9.122.0 | Helpers et abstractions pour R3F |

### Animations

| Package | Version | Usage |
|---------|---------|-------|
| `framer-motion` | 12.23.26 | Animations et transitions fluides |

### Icônes et Polices

| Package | Version | Usage |
|---------|---------|-------|
| `lucide-react` | 0.378.0 | Bibliothèque d'icônes |
| `next/font/google` | - | Chargement optimisé des polices (Roboto) |

### Dépendances de développement

| Package | Version | Usage |
|---------|---------|-------|
| `typescript` | 5.0.0 | Compilateur TypeScript |
| `@types/node` | 20.0.0 | Types Node.js |
| `@types/react` | 18.0.0 | Types React |
| `@types/react-dom` | 18.0.0 | Types React DOM |
| `@types/three` | 0.164.1 | Types Three.js |

---

## 4. Système de design

### Principes de design clés

#### Palette de couleurs

**Couleurs principales :**
- **Noir principal** (`#000000`) : Fond de page
- **Noir secondaire** (`#050505`) : Fond de composants
- **Noir tertiaire** (`#0A0A0A`) : Fond de formulaires
- **Blanc** (`#FFFFFF`) : Texte principal
- **Orange primaire** (`#FFB300`) : Accent principal, CTA
- **Orange moyen** (`#FF6D00`) : Accent secondaire
- **Magenta** (`#F538A0`) : Accent tertiaire

**Dégradé signature Kames :**
```css
background: linear-gradient(90deg, #FFB300 0%, #FF6D00 50%, #F538A0 100%);
```

#### Typographie

**Polices :**
- **Roboto** : Texte de corps, paragraphes, navigation (poids : 400, 500, 700, 900)
- **Product Sans** : Titres principaux, headlines, accroches
- **Monospace** : Code, snippets techniques

**Hiérarchie :**
- **H1** : `text-7xl` desktop / `text-5xl` mobile, `font-bold`
- **H2** : `text-6xl` desktop / `text-4xl` mobile, `font-bold`
- **H3** : `text-5xl` desktop / `text-3xl` mobile, `font-bold`
- **H4** : `text-2xl` desktop / `text-xl` mobile, `font-medium`

#### Composants réutilisables

**Magic Button :**
- Bouton signature avec bordure animée en dégradé conique
- Fond noir (`#050505`) avec blur
- Animation de rotation de 3s
- Classe CSS : `.magic-btn-container` / `.magic-btn-content`

**Glass Card :**
- Effet de verre dépoli
- Fond semi-transparent avec backdrop blur
- Classe CSS : `.glass-card`

**Chrome Scroll Button :**
- Bouton de scroll avec effet métallique chrome
- Anneau rotatif avec reflet
- Composant : `ChromeScrollButton`

**Cards avec bordure animée :**
- Bordure animée visible au hover
- Animation lente (20s) pour effet subtil
- Utilisé pour les offres et bénéfices

#### Effets visuels

**Glows (Lueurs) :**
- Orange primaire : `box-shadow: 0 0 15px rgba(255, 179, 0, 0.6)`
- Orange moyen : `box-shadow: 0 0 15px rgba(255, 109, 0, 0.6)`
- Magenta : `box-shadow: 0 0 15px rgba(245, 56, 160, 0.6)`

**Backdrop Blur :**
- Navbar : `backdrop-blur-xl` (12px)
- Glass cards : `backdrop-blur-lg` (10px)
- Magic buttons : `backdrop-blur-xl` (12px)

**Animations :**
- `spin` : Rotation pour bordures animées (3s, 20s selon contexte)
- `scroll` : Marquee infini pour logos (40s linear infinite)
- `text-appear` / `text-disappear` : Transitions de texte (0.5s)
- `fade-in` / `fade-out` : Apparition/disparition (0.3s)

#### Espacement

**Padding de section :**
- Classe utilitaire : `.section-padding` (6rem top/bottom)

**Containers (Max-width) :**
- `max-w-3xl` (768px) : FAQ, contenu texte
- `max-w-4xl` (896px) : Sections moyennes
- `max-w-5xl` (1024px) : Hero, sections larges
- `max-w-7xl` (1280px) : Sections principales

**Espacements verticaux :**
- Standard : `py-24` (6rem / 96px)
- Grand : `py-32` (8rem / 128px)
- Petit : `py-16` (4rem / 64px)

---

## 5. Sections de page

### Page d'accueil (`src/app/page.tsx`)

| Section | Description | Fichier |
|---------|-------------|---------|
| **Hero** | Section hero avec titre principal, sous-titres animés et bouton de scroll chrome | `src/components/sections/hero.tsx` |
| **Hero Background** | Fond 3D animé avec Three.js (React Three Fiber) | `src/components/sections/hero-background.tsx` |
| **Services** | 4 piliers de valeur, timeline de processus (3 phases), bandeau logos, 3 packages tarifaires | `src/components/sections/services.tsx` |
| **Stack Marquee** | Bandeau horizontal de logos défilant (n8n, Zapier, Make, etc.) | `src/components/sections/stack-marquee.tsx` |
| **Témoignages** | Section de preuve sociale avec 3 cartes de témoignages | `src/components/sections/testimonials.tsx` |
| **About** | Section vision/mission de la marque | `src/components/sections/about.tsx` |
| **FAQ** | Section FAQ avec accordéon extensible (8 questions) | `src/components/sections/faq.tsx` |
| **Contact** | Formulaire de contact pour capture de leads | `src/components/sections/contact.tsx` |

### Pages secondaires

| Page | Route | Fichier |
|------|-------|---------|
| **Nos Services** | `/nos-services` | `src/app/nos-services/page.tsx` |
| **Réalisations** | `/realisations/[slug]` | `src/app/realisations/[slug]/page.tsx` |
| **Notre Histoire** | `/notre-histoire` | `src/app/notre-histoire/page.tsx` |
| **Achievements** | `/achievements` | `src/app/achievements/page.tsx` |
| **Mentions Légales** | `/mentions-legales` | `src/app/mentions-legales/page.tsx` |
| **RGPD** | `/rgpd` | `src/app/rgpd/page.tsx` |

### Composants de layout

| Composant | Description | Fichier |
|-----------|-------------|---------|
| **Header** | Navigation principale avec effet glassmorphism | `src/components/layout/header.tsx` |
| **Footer** | Footer avec liens de navigation et réseaux sociaux | `src/components/layout/footer.tsx` |
| **Logo** | Composant logo Kames | `src/components/logo.tsx` |

### Composants UI réutilisables

| Composant | Description | Fichier |
|-----------|-------------|---------|
| **Button** | Bouton de base avec variantes | `src/components/ui/button.tsx` |
| **Card** | Carte de base | `src/components/ui/card.tsx` |
| **Input** | Champ de formulaire | `src/components/ui/input.tsx` |
| **Textarea** | Zone de texte | `src/components/ui/textarea.tsx` |
| **Form** | Composant formulaire | `src/components/ui/form.tsx` |
| **Accordion** | Accordéon pour FAQ | `src/components/ui/accordion.tsx` |
| **Badge** | Badge de statut | `src/components/ui/badge.tsx` |
| **Toast** | Notifications toast | `src/components/ui/toast.tsx` |
| **Toaster** | Conteneur de toasts | `src/components/ui/toaster.tsx` |
| **Sheet** | Panneau latéral | `src/components/ui/sheet.tsx` |
| **Chrome Scroll Button** | Bouton de scroll chrome | `src/components/ui/chrome-scroll-button.tsx` |
| **Liquid Background** | Fond liquide animé | `src/components/ui/liquid-background.tsx` |

---

## 6. Structure des fichiers

```
kames-site-local/
├── src/
│   ├── app/                          # App Router Next.js
│   │   ├── layout.tsx                # Layout racine avec Header/Footer
│   │   ├── page.tsx                  # Page d'accueil
│   │   ├── globals.css               # Styles globaux et classes CSS personnalisées
│   │   ├── achievements/
│   │   │   └── page.tsx
│   │   ├── mentions-legales/
│   │   │   └── page.tsx
│   │   ├── nos-services/
│   │   │   └── page.tsx
│   │   ├── notre-histoire/
│   │   │   └── page.tsx
│   │   ├── realisations/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   └── rgpd/
│   │       └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header.tsx            # Navigation principale
│   │   │   └── footer.tsx            # Footer
│   │   ├── sections/
│   │   │   ├── hero.tsx              # Section hero
│   │   │   ├── hero-background.tsx   # Fond 3D hero
│   │   │   ├── services.tsx          # Section services/offres
│   │   │   ├── stack-marquee.tsx     # Bandeau logos
│   │   │   ├── testimonials.tsx      # Témoignages
│   │   │   ├── about.tsx              # Section about
│   │   │   ├── faq.tsx                # FAQ
│   │   │   └── contact.tsx            # Formulaire contact
│   │   ├── ui/                        # Composants UI réutilisables
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── form.tsx
│   │   │   ├── accordion.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── toaster.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── chrome-scroll-button.tsx
│   │   │   └── liquid-background.tsx
│   │   ├── logo.tsx
│   │   └── intro-overlay.tsx
│   ├── lib/
│   │   ├── achievements-data.ts
│   │   ├── documentation-data.tsx
│   │   ├── placeholder-images.ts
│   │   └── utils.ts                  # Utilitaires (cn, etc.)
│   ├── hooks/
│   │   └── use-toast.ts              # Hook pour toasts
│   └── ai/
│       └── dev.ts
├── public/
│   └── images/
│       └── logo-kames.png
├── website_guidelines/
│   ├── project-brief.md              # Brief du projet
│   ├── Style_Guide.md                # Guide de style
│   └── PROJECT_REQUIREMENTS.md       # Ce document
├── package.json
├── package-lock.json
├── tailwind.config.ts                # Configuration Tailwind
├── tsconfig.json                     # Configuration TypeScript
├── next.config.mjs                    # Configuration Next.js
├── postcss.config.mjs                 # Configuration PostCSS
└── components.json                   # Configuration shadcn/ui
```

---

## 7. Exigences responsive

### Breakpoints Tailwind

| Breakpoint | Valeur | Appareil cible |
|------------|--------|----------------|
| **sm** | 640px | Petites tablettes (portrait) |
| **md** | 768px | Tablettes (portrait) |
| **lg** | 1024px | Tablettes (paysage) / Petits desktop |
| **xl** | 1280px | Desktop |
| **2xl** | 1536px | Grands desktop |

### Stratégie responsive

**Mobile First :**
- Design initial pour mobile (< 640px)
- Améliorations progressives pour tablettes et desktop
- Utilisation des préfixes Tailwind (`md:`, `lg:`, `xl:`)

**Grilles responsive :**
- **Mobile** : `grid-cols-1` (1 colonne)
- **Tablette** : `md:grid-cols-2` (2 colonnes)
- **Desktop** : `lg:grid-cols-3` ou `lg:grid-cols-4` (3-4 colonnes)

**Typographie responsive :**
- Titres : Tailles réduites sur mobile (`text-5xl` → `text-7xl`)
- Corps : Tailles adaptées (`text-base` → `text-lg`)

**Espacement responsive :**
- Padding horizontal : `px-4` mobile → `px-6` tablette → `px-8` desktop
- Padding vertical : `py-16` mobile → `py-24` tablette → `py-32` desktop

**Navigation responsive :**
- Menu hamburger sur mobile
- Navigation pill sur desktop

**Hero responsive :**
- Titre adapté : `text-5xl` mobile → `text-7xl` desktop
- Background 3D désactivé sur mobile si nécessaire (performance)
- Bouton chrome scroll adapté

---

## 8. Notes

### Étapes de configuration

Voir `tasks.md` pour les tâches d'implémentation et les instructions de configuration.

**Commandes principales :**
```bash
npm install              # Installation des dépendances
npm run dev              # Développement (port 9002)
npm run build            # Build de production
npm run start            # Serveur de production
npm run lint             # Linting
```

**Configuration requise :**
- Node.js 18+ recommandé
- npm ou yarn
- Git pour le contrôle de version

### Décisions de design

**Design spécifique aux sections :**
Les notes de design spécifiques à chaque section sont documentées dans les fichiers individuels de section (`src/components/sections/*.tsx`).

**Patterns réutilisables :**
Les patterns de design réutilisables sont documentés dans `website_guidelines/Style_Guide.md`.

**Gouvernance du style :**
- `Style_Guide.md` est le système de design global autoritaire
- Si l'implémentation diverge et est meilleure, mettre à jour le guide de style
- Ne jamais diverger silencieusement du guide de style

### Règles des composants

**Composants partagés :**

1. **Magic Button** (`magic-btn-container` / `magic-btn-content`) :
   - Utilisé dans : Hero, Services, Contact
   - Style cohérent avec bordure animée dégradé
   - Variantes : Pleine largeur (`w-full`), tailles (`px-6 py-2`, `px-4 py-1.5`)

2. **Chrome Scroll Button** (`ChromeScrollButton`) :
   - Utilisé dans : Hero
   - Effet métallique chrome avec rotation
   - Accessibilité : `ariaLabel` requis

3. **Cards avec bordure animée** :
   - Utilisé dans : Services (bénéfices, offres)
   - Animation visible au hover uniquement
   - Durée d'animation : 20s pour effet subtil

4. **Glass Card** (`.glass-card`) :
   - Utilisé dans : Navigation, cartes diverses
   - Effet de verre dépoli avec backdrop blur

**Bonnes pratiques :**
- Toujours utiliser les composants UI existants avant d'en créer de nouveaux
- Respecter la hiérarchie typographique (H1 → H4)
- Utiliser les variables CSS pour les couleurs (`--orange-primary`, etc.)
- Tester sur mobile, tablette et desktop
- Respecter l'accessibilité (contraste, focus states, aria-labels)

**À éviter :**
- Créer de nouvelles couleurs sans les documenter
- Utiliser des tailles de police arbitraires
- Animer trop d'éléments simultanément
- Ignorer l'accessibilité
- Oublier les états hover/active

---

**Dernière mise à jour :** 21 décembre 2025  
**Version :** 1.0.0  
**Maintenu par :** Équipe Kames AI

