# Tâches du Projet Kames AI

> **Document de suivi** - Ce document liste toutes les tâches d'implémentation du site web Kames AI, organisées par phases.

---

## Table des matières

1. [Phase 1: Configuration du projet](#phase-1-configuration-du-projet)
2. [Phase 2: Construction des sections](#phase-2-construction-des-sections)
3. [Phase 3: Mise à jour V2](#phase-3-mise-à-jour-v2)

---

## Phase 1: Configuration du projet

### Infrastructure et setup initial

- [x] Initialisation du projet Next.js 14 avec App Router
- [x] Configuration TypeScript
- [x] Configuration Tailwind CSS avec thème personnalisé
- [x] Configuration des variables CSS (couleurs, polices)
- [x] Configuration Vercel pour déploiement
- [x] Structure des dossiers (`src/app`, `src/components`, `src/lib`)
- [x] Configuration des polices (Roboto, Product Sans)
- [x] Création du système de design de base (`globals.css`)

### Composants UI de base

- [x] Composant Button avec variantes
- [x] Composant Card
- [x] Composant Input
- [x] Composant Textarea
- [x] Composant Form
- [x] Composant Accordion
- [x] Composant Badge
- [x] Composant Toast/Toaster
- [x] Composant Sheet
- [x] Composant Chrome Scroll Button
- [x] Composant Liquid Background

### Layout de base

- [x] Header avec navigation glassmorphism
- [x] Footer avec liens et réseaux sociaux
- [x] Logo Kames
- [x] Layout racine (`src/app/layout.tsx`)

**Statut Phase 1:** ✅ **Terminée**

---

## Phase 2: Construction des sections

### Page d'accueil (`src/app/page.tsx`)

#### Hero Section

- [x] Section Hero avec titre principal
- [x] Sous-titres animés (phrases rotatives)
- [x] Bouton Chrome Scroll
- [x] Hero Background 3D (Three.js / React Three Fiber)
- [x] CTA principal "Nos Services"
- [x] Design responsive (mobile/tablette/desktop)
- [x] Animations text-appear/text-disappear
- **Spécifications design:** ✅ Complètes (Style_Guide.md + project-brief.md)

#### Services Section (`src/components/sections/services.tsx`)

- [x] 4 Piliers de valeur (cartes de bénéfices)
  - [x] Gain de temps
  - [x] Optimisation des ressources
  - [x] Sobriété opérationnelle
  - [x] Sécurisez votre croissance
- [x] Timeline de processus (3 phases)
  - [x] Audit & Analyse
  - [x] Conception
  - [x] Déploiement
- [x] Bandeau logos partenaires (intégré dans Services)
- [x] 3 Packages tarifaires
  - [x] Pack Starter
  - [x] Pack Pro
  - [x] Pack Premium
- [x] Cartes avec bordure animée au hover
- [x] Design responsive
- **Spécifications design:** ✅ Complètes (Style_Guide.md + project-brief.md)

#### Stack Marquee Section (`src/components/sections/stack-marquee.tsx`)

- [x] Bandeau horizontal de logos défilant
- [x] Animation scroll infinie (40s linear)
- [x] Logos: n8n, Zapier, Make, Unity, Bolt, Notion, Hubspot, Azure, OpenAI, GitHub, Google Cloud, Mistral, Postman
- [x] Design responsive
- **Spécifications design:** ✅ Complètes (Style_Guide.md + PROJECT_REQUIREMENTS.md)

#### Témoignages Section (`src/components/sections/testimonials.tsx`)

- [x] Section "Vos succès, nos projets"
- [x] 3 cartes de témoignages
- [x] Système de notes (5 étoiles)
- [x] Citations clients
- [x] Attributions (nom, rôle, entreprise)
- [x] Images placeholder d'avatar
- [x] Design responsive
- **Spécifications design:** ✅ Complètes (project-brief.md)
- **Note:** Contenu placeholder - nécessite de vrais témoignages clients

#### About Section (`src/components/sections/about.tsx`)

- [x] Section vision/mission de la marque
- [x] Titre avec dégradé orange-magenta
- [x] Sous-titre "Une amitié. Une vision. Une nouvelle façon d'entreprendre."
- [x] CTA "Découvrez notre histoire →"
- [x] Design responsive
- **Spécifications design:** ✅ Complètes (project-brief.md)

#### FAQ Section (`src/components/sections/faq.tsx`)

- [x] Section FAQ avec accordéon extensible
- [x] 8 questions fréquentes:
  - [x] "Quels types d'entreprises accompagnez-vous ?"
  - [x] "Combien de temps dure la mise en place ?"
  - [x] "Mes données sont-elles sécurisées ?"
  - [x] "Dois-je avoir des compétences techniques particulières ?"
  - [x] "Combien ça coûte vraiment ?"
  - [x] "Est-ce compatible avec mes outils actuels ?"
  - [x] "Que se passe-t-il si j'ai besoin de modifier quelque chose ?"
  - [x] "Comment savoir si ça va vraiment fonctionner pour mon activité ?"
- [x] Animation chevron rotatif
- [x] Design responsive
- **Spécifications design:** ✅ Complètes (Style_Guide.md + project-brief.md)

#### Contact Section (`src/components/sections/contact.tsx`)

- [x] Section "Travaillons ensemble pour vous faciliter le quotidien"
- [x] Formulaire de contact avec champs:
  - [x] Prénom* (First name)
  - [x] Nom* (Last name)
  - [x] Email*
  - [x] Nom de l'entreprise* (Company name)
  - [x] Type de service* (Service type dropdown)
  - [x] Votre budget* (Budget dropdown)
  - [x] Détails de votre projet (Project details textarea)
- [x] Bouton "Soumettre" (Magic Button)
- [x] Note "Une réponse vous sera donnée sous 24H"
- [x] Intégration webhook n8n (à vérifier)
- [x] Design responsive
- [x] Champs avec style `.input-underlined`
- **Spécifications design:** ✅ Complètes (Style_Guide.md + project-brief.md)
- **Note:** Vérifier l'intégration backend n8n pour la soumission

**Statut Phase 2:** ✅ **Terminée**

### Pages secondaires

#### Nos Services (`src/app/nos-services/page.tsx`)

- [x] Page dédiée aux services
- [ ] Contenu détaillé des services
- [ ] Design spécifique V2 (à définir)
- **Spécifications design:** ⏳ En attente de détails V2

#### Réalisations (`src/app/realisations/[slug]/page.tsx`)

- [x] Structure de page dynamique
- [ ] Contenu des études de cas
- [ ] Design des cartes de réalisations
- [ ] Images et assets
- **Spécifications design:** ⏳ En attente de détails V2

#### Notre Histoire (`src/app/notre-histoire/page.tsx`)

- [x] Page créée
- [ ] Contenu narratif
- [ ] Design storytelling
- **Spécifications design:** ⏳ En attente de détails V2

#### Achievements (`src/app/achievements/page.tsx`)

- [x] Page créée
- [x] Données dans `src/lib/achievements-data.ts`
- [ ] Design des cartes d'achievements
- **Spécifications design:** ⏳ En attente de détails V2

#### Mentions Légales (`src/app/mentions-legales/page.tsx`)

- [x] Page créée avec contenu
- [x] Design conforme au style guide
- **Spécifications design:** ✅ Complètes

#### RGPD (`src/app/rgpd/page.tsx`)

- [x] Page créée avec contenu
- [x] Design conforme au style guide
- **Spécifications design:** ✅ Complètes

---

## Phase 3: Mise à jour V2

> **Note:** Plan de déploiement V2 - Modifications de contenu et mises à jour fonctionnelles

### 1. Modifications de Contenu (services.tsx)

#### Section "Gain de temps"
- [x] Correction grammaticale : "des dizaines d'heures" (accord correct au pluriel)

#### Carte "Optimisation des ressources"
- [x] Modification texte description : "Libérez vos équipes..." → "Donnez à vos équipes les moyens de se concentrer sur l'essentiel"
- [x] Modification titre/label : "Sobriété opérationnelle" → "Efficacité opérationnelle"

#### Section "Notre démarche"
- [x] Étape 1 (Identification) : Remplacé par "Nous décelons ensemble les meilleures opportunités d'automatisation pour votre société."
- [x] Étape 2 (Conception) : Remplacé par "Nous concevons sur mesure vos agents IA et workflows avec les meilleurs outils du marché (n8n, OpenAI, Claude)."
- [x] Étape 3 (Mise en production) : Remplacé par "Nous assurons une mise en production sécurisée, formons vos équipes et garantissons une maintenance continue pour une adoption fluide."

### 2. Mise à jour de la FAQ (faq.tsx)

#### Question 1 : Tarification
- [x] Question remplacée : "Combien ça coûte vraiment?" → "Quel budget prévoir pour gagner en efficacité et en sérénité ?"
- [x] Réponse validée intégrée avec structure de coûts détaillée (Starter, Pro, Premium)

#### Question 2 : ROI et Mesure
- [x] Question remplacée : "Comment savoir si ça va vraiment fonctionner pour mon activité ?" → "Comment mesurer l'impact potentiel sur votre entreprise ?"
- [x] Réponse validée intégrée avec exemple concret de calcul ROI

### 3. Modifications de Design (footer.tsx)

#### Harmonisation du titre "Restons connectés"
- [x] Style harmonisé avec "Travaillons ensemble pour vous faciliter le quotidien."
- [x] Même police et taille (text-5xl md:text-6xl)
- [x] Mise en gras (font-bold)
- [x] Dégradé de couleur appliqué (Orange → Magenta)

### 4. Mise à jour des Témoignages (Section testimonials)

#### Remplacement des témoignages
- [x] Témoignage 1 : Claire F. - Psychologue clinicienne intégré
- [x] Témoignage 2 : Sébastien F. - Gérant, SARL Ferrera Sébastien intégré
- [x] Témoignage 3 : Edouard S. - Photographe & Réalisateur intégré

#### Ajout du CTA "En apprendre plus"
- [x] CTA ajouté en dessous de la grille des témoignages
- [x] Style identique au CTA "Découvrez notre histoire"
- [x] Redirection vers `/temoignages`

#### Création de la page cible
- [x] Page `/temoignages` créée (structure vide pour l'instant)
- [x] Prête pour l'intégration future de la vidéo de présentation

### Sections principales

- [ ] Hero Section V2
  - [ ] Spécifications design V2
  - [ ] Implémentation
  - [ ] Tests responsive

- [x] Services Section V2
  - [x] Modifications de contenu appliquées
  - [ ] Tests responsive

- [ ] Stack Marquee V2
  - [ ] Spécifications design V2
  - [ ] Implémentation
  - [ ] Tests responsive

- [x] Témoignages V2
  - [x] Intégration de vrais témoignages clients
  - [x] Ajout CTA "En apprendre plus"
  - [x] Création page `/temoignages`
  - [ ] Tests responsive

- [ ] About Section V2
  - [ ] Spécifications design V2
  - [ ] Implémentation
  - [ ] Tests responsive

- [x] FAQ V2
  - [x] Mise à jour questions et réponses
  - [ ] Tests responsive

- [ ] Contact V2
  - [ ] Spécifications design V2
  - [ ] Implémentation
  - [ ] Tests responsive
  - [ ] Vérification intégration n8n

### Pages secondaires V2

- [ ] Nos Services V2
  - [ ] Spécifications design V2
  - [ ] Contenu détaillé
  - [ ] Implémentation

- [ ] Réalisations V2
  - [ ] Spécifications design V2
  - [ ] Contenu des études de cas
  - [ ] Implémentation

- [ ] Notre Histoire V2
  - [ ] Spécifications design V2
  - [ ] Contenu narratif
  - [ ] Implémentation

- [ ] Achievements V2
  - [ ] Spécifications design V2
  - [ ] Implémentation

- [x] Témoignages (Page dédiée)
  - [x] Structure de page créée (`/temoignages`)
  - [ ] Contenu complet avec vidéo de présentation

### Améliorations et optimisations

- [ ] Performance
  - [ ] Optimisation Core Web Vitals
  - [ ] Lazy loading des images
  - [ ] Optimisation Three.js (Hero Background)
  - [ ] Code splitting

- [ ] SEO
  - [ ] Meta tags optimisés
  - [ ] Structured data (JSON-LD)
  - [ ] Sitemap.xml
  - [ ] robots.txt

- [ ] Accessibilité
  - [ ] Audit d'accessibilité (WCAG 2.1)
  - [ ] Navigation au clavier
  - [ ] Contraste des couleurs
  - [ ] Labels ARIA

- [ ] Analytics
  - [ ] Intégration Google Analytics 4 ou Plausible
  - [ ] Suivi des conversions
  - [ ] Tracking des événements

- [ ] Backend & Intégrations
  - [ ] Vérification workflows n8n
  - [ ] Intégration Supabase (si nécessaire)
  - [ ] Intégration Stripe (si nécessaire)
  - [ ] Système de newsletter

**Statut Phase 3:** 🚧 **En cours** - Modifications V2 Partie 1-4 terminées

### Vérification et Déploiement V2

- [ ] Vérification orthographique globale (notamment les accords dans services.tsx)
- [ ] Test de responsive design sur les cartes services, l'accordéon FAQ, le footer et les témoignages
- [ ] Build et déploiement de la V2

---

## Légende

- ✅ **Complètes** : Spécifications design complètes dans Style_Guide.md et/ou project-brief.md
- ⏳ **En attente** : Spécifications design à compléter ou plan V2 à fournir
- [x] Tâche terminée
- [ ] Tâche à faire

---

## Notes importantes

### Gouvernance du style

- `Style_Guide.md` est le système de design global autoritaire
- Si l'implémentation diverge et est meilleure, mettre à jour le guide de style
- Ne jamais diverger silencieusement du guide de style

### Bonnes pratiques

- Toujours tester sur mobile, tablette et desktop
- Respecter la hiérarchie typographique (H1 → H4)
- Utiliser les variables CSS pour les couleurs
- Réutiliser les composants existants avant d'en créer de nouveaux
- Respecter l'accessibilité (contraste, focus states, aria-labels)

---

**Dernière mise à jour :** 21 décembre 2025  
**Version :** 1.0.0  
**Maintenu par :** Équipe Kames AI

