# Guide de Style Kames

> **Document vivant** - Ce guide évolue avec le projet. Consultez le changelog en bas de page pour suivre les mises à jour.

---

## Table des matières

1. [Palette de couleurs](#palette-de-couleurs)
2. [Typographie](#typographie)
3. [Composants](#composants)
4. [Effets visuels](#effets-visuels)
5. [Espacement et layout](#espacement-et-layout)
6. [Animations](#animations)
7. [Changelog](#changelog)

---

## Palette de couleurs

### Couleurs principales

Les couleurs de la marque Kames sont définies comme variables CSS dans `globals.css` :

```css
:root {
  --bg: #000000;              /* Fond principal */
  --text: #ffffff;            /* Texte principal */
  --orange-primary: #FFB300; /* Orange principal (Kames) */
  --orange-mid: #FF6D00;      /* Orange moyen */
  --magenta: #F538A0;         /* Magenta */
}
```

### Palette complète

| Couleur | Hex | Usage | Variable CSS |
|---------|-----|-------|--------------|
| **Noir principal** | `#000000` | Fond de page | `--bg` |
| **Noir secondaire** | `#050505` | Fond de composants | - |
| **Noir tertiaire** | `#0A0A0A` | Fond de formulaires | - |
| **Blanc** | `#FFFFFF` | Texte principal | `--text` |
| **Orange primaire** | `#FFB300` | Accent principal, CTA | `--orange-primary` |
| **Orange moyen** | `#FF6D00` | Accent secondaire | `--orange-mid` |
| **Magenta** | `#F538A0` | Accent tertiaire | `--magenta` |

### Couleurs neutres (Tailwind)

| Couleur | Usage |
|---------|-------|
| `text-white/70` | Texte secondaire |
| `text-white/90` | Texte avec opacité |
| `text-neutral-300` | Texte tertiaire |
| `text-neutral-400` | Texte quaternaire |
| `text-neutral-500` | Texte discret |
| `bg-neutral-900/50` | Fond de cartes |
| `border-white/10` | Bordures subtiles |
| `border-white/20` | Bordures moyennes |
| `border-white/30` | Bordures visibles |

### Dégradés

#### Dégradé Kames (signature)

```css
background: linear-gradient(90deg, #FFB300 0%, #FF6D00 50%, #F538A0 100%);
```

**Usage :**
- Texte avec classe `.text-gradient`
- Bordures animées sur les boutons et cartes
- Accents visuels

**Classes CSS :**
- `.text-gradient` - Applique le dégradé au texte
- `.bg-gradient-kames` - Applique le dégradé en arrière-plan

---

## Typographie

### Polices

#### Roboto (Body)
- **Famille** : `Roboto, system-ui, sans-serif`
- **Variable CSS** : `--font-roboto`
- **Poids disponibles** : 400, 500, 700, 900
- **Usage** : Texte de corps, paragraphes, navigation

#### Product Sans (Headlines)
- **Famille** : `Product Sans, sans-serif`
- **Classe Tailwind** : `font-headline`
- **Usage** : Titres principaux, headlines, accroches

#### Monospace (Code)
- **Famille** : `monospace`
- **Classe Tailwind** : `font-code`
- **Usage** : Code, snippets techniques

### Hiérarchie typographique

#### Titres

| Niveau | Taille Desktop | Taille Mobile | Poids | Usage |
|--------|----------------|---------------|-------|-------|
| **H1** | `text-7xl` (4.5rem) | `text-5xl` (3rem) | `font-bold` | Hero principal |
| **H2** | `text-6xl` (3.75rem) | `text-4xl` (2.25rem) | `font-bold` | Titres de section |
| **H3** | `text-5xl` (3rem) | `text-3xl` (1.875rem) | `font-bold` | Sous-titres |
| **H4** | `text-2xl` (1.5rem) | `text-xl` (1.25rem) | `font-medium` | Titres de cartes |

#### Corps de texte

| Type | Taille Desktop | Taille Mobile | Poids | Usage |
|------|----------------|---------------|-------|-------|
| **Lead** | `text-3xl` | `text-xl` | `font-bold` | Accroches importantes |
| **Body Large** | `text-lg` | `text-base` | `font-medium` | Paragraphes importants |
| **Body** | `text-base` | `text-sm` | `font-normal` | Texte standard |
| **Body Small** | `text-sm` | `text-xs` | `font-light` | Texte secondaire |
| **Caption** | `text-xs` | `text-xs` | `font-light` | Légendes, notes |

### Propriétés typographiques

#### Line Height (Leading)

- **Tight** : `leading-tight` - Pour les titres
- **Relaxed** : `leading-relaxed` - Pour les paragraphes
- **Custom** : `leading-[1.8]`, `leading-[2]` - Pour les hero titles

#### Letter Spacing (Tracking)

- **Tight** : `tracking-tight` - Standard pour les titres
- **Wider** : `tracking-wider` - Pour les labels en uppercase

#### Font Weights

| Poids | Classe | Usage |
|-------|--------|-------|
| Light | `font-light` | Texte secondaire, descriptions |
| Normal | `font-normal` | Texte standard |
| Medium | `font-medium` | Labels, navigation |
| Semibold | `font-semibold` | Emphase |
| Bold | `font-bold` | Titres principaux |

---

## Composants

### Magic Button

Le bouton signature de Kames avec bordure animée en dégradé.

**Structure HTML :**
```html
<div className="magic-btn-container">
  <span className="magic-btn-content px-6 py-2">
    Texte du bouton
  </span>
</div>
```

**Caractéristiques :**
- Bordure animée avec dégradé conique rotatif
- Fond noir (`#050505`) avec blur
- Forme pill (border-radius: 9999px)
- Animation de rotation de 3s
- Hover : fond légèrement plus clair (`#0a0a0a`)

**Variantes :**
- **Pleine largeur** : Ajouter `w-full` au container
- **Taille large** : `px-6 py-3` sur le content
- **Taille petite** : `px-4 py-1.5` sur le content

**CSS (défini dans `globals.css`) :**
```css
.magic-btn-container {
  position: relative;
  display: inline-flex;
  overflow: hidden;
  border-radius: 9999px;
  padding: 1px;
}

.magic-btn-container::before {
  content: "";
  position: absolute;
  inset: -1000%;
  background: conic-gradient(from 90deg at 50% 50%, transparent 0%, #FFB300 50%, #F538A0 100%);
  animation: spin 3s linear infinite;
}

.magic-btn-content {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: #050505;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #ffffff;
  backdrop-filter: blur(12px);
  transition: background-color 0.2s;
}
```

### Glass Card

Carte avec effet de verre dépoli.

**Classe :** `.glass-card`

**Caractéristiques :**
- Fond semi-transparent (`rgba(255, 255, 255, 0.03)`)
- Backdrop blur (`blur(10px)`)
- Bordure subtile (`rgba(255, 255, 255, 0.05)`)

**Usage :**
```html
<div className="glass-card p-6 rounded-xl border border-neutral-800">
  Contenu de la carte
</div>
```

### Chrome Scroll Button

Bouton de scroll avec effet métallique chrome.

**Composant :** `ChromeScrollButton`

**Caractéristiques :**
- Anneau métallique rotatif avec reflet
- Glow lumineux autour du bouton
- Cœur noir avec texture noise
- Animation de rotation continue (4s)
- Hover : légère mise à l'échelle

**Props :**
- `onClick` : Fonction de callback
- `ariaLabel` : Label d'accessibilité

### Cards avec bordure animée

Cartes avec bordure animée au hover (utilisé pour les offres).

**Structure :**
```html
<div className="group relative rounded-2xl p-[1px] overflow-hidden">
  <div className="absolute inset-[-1000%] bg-[conic-gradient(...)] animate-spin opacity-0 group-hover:opacity-100 transition-opacity" style={{ animationDuration: '20s' }} />
  <div className="relative bg-black rounded-2xl p-8 border border-transparent">
    Contenu
  </div>
</div>
```

**Caractéristiques :**
- Bordure animée visible uniquement au hover
- Animation lente (20s) pour effet subtil
- Fond noir avec bordures internes

### Input Underlined

Champs de formulaire avec ligne de soulignement animée.

**Classe :** `.input-underlined`

**Caractéristiques :**
- Fond transparent
- Ligne fine en bas (`border-bottom: 1px solid rgba(255, 255, 255, 0.1)`)
- Focus : ligne devient dégradé Kames
- Transition douce (0.3s)

**CSS :**
```css
.input-underlined {
  background-color: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0;
  padding-left: 0;
  padding-right: 0;
  transition: border-color 0.3s ease;
}

.input-underlined:focus {
  outline: none;
  border-bottom-width: 1px;
  border-image: linear-gradient(90deg, #FFB300 0%, #FF6D00 50%, #F538A0 100%);
  border-image-slice: 1;
}
```

### Navbar Pill

Navigation centrale avec effet glassmorphism.

**Classe :** `.nav-pill`

**Caractéristiques :**
- Fond sombre semi-transparent (`rgba(0, 0, 0, 0.6)`)
- Backdrop blur (`blur(12px)`)
- Bordure subtile (`rgba(255, 255, 255, 0.08)`)
- Ombre portée (`box-shadow: 0 4px 20px rgba(0,0,0,0.4)`)

**Usage :**
```html
<div className="nav-pill rounded-full px-8 py-2.5">
  <ul className="flex items-center space-x-8">
    <!-- Liens -->
  </ul>
</div>
```

### FAQ Accordion

Accordéon pour les questions fréquentes.

**Structure :**
```html
<details className="group bg-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden">
  <summary className="flex justify-between items-center p-6 text-white group-hover:bg-neutral-800/50 transition-colors">
    Question
    <ChevronDown className="text-[#FFB300] transition-transform duration-300 group-open:rotate-180" />
  </summary>
  <div className="text-neutral-400 p-6 pt-0 leading-relaxed font-light border-t border-transparent group-open:border-neutral-800 group-open:pt-6">
    Réponse
  </div>
</details>
```

**Caractéristiques :**
- Fond sombre avec bordure
- Hover sur le summary
- Icône chevron qui tourne à l'ouverture
- Transition douce

---

## Effets visuels

### Glows (Lueurs)

#### Glow orange primaire
```css
box-shadow: 0 0 15px rgba(255, 179, 0, 0.6);
```

#### Glow orange moyen
```css
box-shadow: 0 0 15px rgba(255, 109, 0, 0.6);
```

#### Glow magenta
```css
box-shadow: 0 0 15px rgba(245, 56, 160, 0.6);
```

#### Glow blanc (pour les boutons)
```css
box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
```

### Backdrop Blur

**Niveaux disponibles :**
- `blur-sm` - 4px
- `blur-md` - 8px
- `blur-lg` - 16px
- `blur-xl` - 24px
- `blur-2xl` - 40px
- `backdrop-blur-sm` - 4px
- `backdrop-blur-md` - 8px
- `backdrop-blur-lg` - 16px
- `backdrop-blur-xl` - 24px

**Usage recommandé :**
- Navbar : `backdrop-blur-xl` (12px)
- Glass cards : `backdrop-blur-lg` (10px)
- Magic buttons : `backdrop-blur-xl` (12px)

### Gradients

#### Dégradé radial
```css
background: radial-gradient(ellipse at center, transparent 0%, rgba(5,5,5,0.4) 50%, rgba(5,5,5,0.95) 100%);
```

#### Dégradé linéaire vertical
```css
background: linear-gradient(to bottom, rgba(5,5,5,0.3) 0%, transparent 30%, transparent 70%, rgba(5,5,5,0.8) 100%);
```

#### Dégradé conique (pour bordures animées)
```css
background: conic-gradient(from 90deg at 50% 50%, transparent 0%, #FFB300 50%, #F538A0 100%);
```

### Overlays

#### Overlay sombre (pour images de fond)
```html
<div className="absolute inset-0 bg-black/70" />
```

#### Overlay avec gradient radial
```html
<div className="absolute inset-0 bg-gradient-radial from-transparent via-black/40 to-black/95" />
```

### Texture Noise

Texture de grain subtile pour effet premium.

**SVG Noise :**
```html
<div 
  className="absolute inset-0 opacity-[0.03] pointer-events-none"
  style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
  }}
/>
```

**Usage :**
- Sur les boutons chrome
- Sur les backgrounds liquides
- Opacité très faible (0.03-0.25)

---

## Espacement et layout

### Padding de section

**Classe utilitaire :** `.section-padding`

```css
.section-padding {
  padding-top: 6rem;    /* 96px */
  padding-bottom: 6rem; /* 96px */
}
```

**Usage :**
```html
<section className="section-padding">
  Contenu de la section
</section>
```

### Containers (Max-width)

| Classe | Largeur | Usage |
|--------|---------|-------|
| `max-w-3xl` | 48rem (768px) | FAQ, contenu texte |
| `max-w-4xl` | 56rem (896px) | Sections moyennes |
| `max-w-5xl` | 64rem (1024px) | Hero, sections larges |
| `max-w-7xl` | 80rem (1280px) | Sections principales |

### Espacements verticaux

#### Entre sections
- **Standard** : `py-24` (6rem / 96px)
- **Grand** : `py-32` (8rem / 128px)
- **Petit** : `py-16` (4rem / 64px)

#### Padding horizontal
- **Standard** : `px-6` (1.5rem / 24px)
- **Grand** : `px-8` (2rem / 32px)
- **Petit** : `px-4` (1rem / 16px)

### Grilles

#### Grille responsive standard
```html
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <!-- Items -->
</div>
```

#### Grille pour offres (3 colonnes)
```html
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <!-- Cards -->
</div>
```

#### Grille pour bénéfices (4 colonnes)
```html
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  <!-- Items -->
</div>
```

### Gaps

| Classe | Valeur | Usage |
|--------|--------|-------|
| `gap-4` | 1rem | Espacement serré |
| `gap-6` | 1.5rem | Espacement standard |
| `gap-8` | 2rem | Espacement large (cartes) |
| `gap-12` | 3rem | Espacement très large |
| `gap-16` | 4rem | Espacement extra large |

---

## Animations

### Animations définies

#### Spin (Rotation)
```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

**Usage :**
- Bordures animées des boutons et cartes
- Chrome scroll button
- Durée : 3s (boutons), 20s (cartes), 4s (chrome button)

#### Scroll (Marquee infini)
```css
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

**Classe :** `animate-scroll`
**Durée :** 40s linear infinite

**Usage :**
- Bandeau de logos défilant
- Stack marquee

#### Text Appear
```css
@keyframes text-appear {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Classe :** `animate-text-appear`
**Durée :** 0.5s ease-out

**Usage :**
- Phrases rotatives dans le hero
- Apparition de texte

#### Text Disappear
```css
@keyframes text-disappear {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-30px);
  }
}
```

**Classe :** `animate-text-disappear`
**Durée :** 0.5s ease-in

**Usage :**
- Phrases rotatives dans le hero (sortie)

#### Fade In/Out
```css
@keyframes fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes fade-out {
  0% { opacity: 1; }
  100% { opacity: 0; }
}
```

**Classes :** `animate-fade-in`, `animate-fade-out`
**Durée :** 0.3s ease-in-out

### Transitions

#### Standard
```css
transition-colors duration-200
```

#### Smooth
```css
transition-all duration-300
```

#### Slow
```css
transition-all duration-500
```

### Hover Effects

#### Scale
```css
hover:scale-105  /* Légère augmentation */
hover:scale-[1.02]  /* Très subtil */
active:scale-95  /* Réduction au clic */
```

#### Opacity
```css
hover:opacity-80
hover:opacity-90
```

#### Background
```css
hover:bg-white/5
hover:bg-white/10
hover:bg-neutral-800/50
```

---

## Changelog

### Version 1.0.0 - [Date de création]
- ✅ Création initiale du guide de style
- ✅ Documentation de la palette de couleurs Kames
- ✅ Hiérarchie typographique complète
- ✅ Documentation des composants principaux (Magic Button, Glass Card, Chrome Scroll Button)
- ✅ Guide des effets visuels (glows, blur, gradients)
- ✅ Système d'espacement et layout
- ✅ Catalogue des animations

---

## Notes importantes

### Bonnes pratiques

1. **Couleurs** : Toujours utiliser les variables CSS (`--orange-primary`, etc.) ou les classes Tailwind définies
2. **Typographie** : Respecter la hiérarchie (H1 → H4) pour la cohérence SEO et visuelle
3. **Composants** : Réutiliser les composants existants avant d'en créer de nouveaux
4. **Animations** : Éviter les animations trop rapides ou agressives
5. **Responsive** : Toujours tester sur mobile, tablette et desktop

### À éviter

- ❌ Créer de nouvelles couleurs sans les documenter
- ❌ Utiliser des tailles de police arbitraires sans suivre la hiérarchie
- ❌ Animer trop d'éléments simultanément
- ❌ Ignorer l'accessibilité (contraste, focus states)
- ❌ Oublier les états hover/active sur les éléments interactifs

---

**Dernière mise à jour :** [Date de création]
**Maintenu par :** Équipe Kames

