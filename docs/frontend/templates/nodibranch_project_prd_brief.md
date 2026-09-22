# Product Requirements Document (PRD) & Project Brief: Nodibranch

**Projet** : Nodibranch Documentation & Developer Portal  
**Type de document** : Project Brief / Product Requirements Document (PRD)  
**Version** : 1.0  
**Statut** : Approuvé  
**Dernière mise à jour** : Mars 2025  

---

## 1. Executive Summary & Vision

### 1.1 Contexte & Définition du Produit
**Nodibranch** est un framework backend TypeScript open-source moderne et strictement typé. Il combine l'élégance architecturale et la rigueur de **Symfony** (PHP) avec la rapidité d'exécution asynchrone et l'inférence de types de l'écosystème **Node.js** moderne.

Le projet met l'accent sur :
- **L'injection de dépendances (DI) compilée et typée** avec autowiring par constructeur.
- **Les attributs/décorateurs TypeScript natifs** pour le routage HTTP, les middlewares et la validation DTO.
- **Une CLI artisanale intégrée** (`nodibranch make:controller`, `nodibranch routes:list`, etc.).
- **Zéro boilerplate et configuration implicite (Convention over Configuration)**.

### 1.2 Objectif de la plateforme web
Offrir un portail développeur de référence composé de :
1. **Une Landing Page d'accueil** à fort impact orientée conversion et clarté architecturale.
2. **Une Documentation technique interactive et exhaustive** structurée selon les standards des frameworks modernes.
3. **Un Playground CLI WebAssembly interactif** permettant d'expérimenter la CLI et la génération de code directement dans le navigateur sans installation locale.

---

## 2. Public Cible & Personas

- **Développeurs Symfony / NestJS / Spring** cherchant un runtime moderne en TypeScript sans sacrifier l'architecture logicielle (Clean Architecture, DDD, conteneur de services).
- **Ingénieurs Backend TypeScript & Node.js** frustrés par le manque de structure des micro-frameworks (Express, Fastify) ou par la lourdeur de configuration de certains frameworks d'entreprise.
- **Tech Leads & Architectes** évaluant un socle fiable pour des API modulaires, testables et maintenables.

---

## 3. Identité Visuelle & Système de Design

### 3.1 Charte Graphique & Palette de Couleurs
Le système graphique s'appuie sur une esthétique moderniste marine (« Marine Modernist ») :

| Rôle | Token | Valeur Hexadécimale | Usage & Règles |
| :--- | :--- | :--- | :--- |
| **Couleur Primaire** | `--primary` | `#1d5f62` | Top Navigation Header, Sidebar de documentation, boutons d'action principaux, titres majeurs. Utilisable à 60% d'opacité pour les séparateurs et conteneurs secondaires. |
| **Couleur Secondaire** | `--secondary` | `#c6eabe` | Accents doux, badges de tags, bouton CTA "Get Started" dans le header, surbrillances douces. |
| **Couleur Accent / Tertiaire** | `--accent` | `#8aba82` | Indicateurs de statut actif, puces interactives, bordures subtiles. |
| **Texte Principal** | `--text` | `#191f34` | Typographie principale, lisibilité maximale sur fond clair. |
| **Arrière-plan / Surface** | `--background` | `#ffffff` | Blanc neutre pur pour les cartes, zones de lecture et conteneurs de documentation. |
| **Bannissement des teintes bleues** | *Exclusion* | *Interdit* | Aucune nuance cyan/bleue vive non incluse dans la palette officielle. Tout élément informatif ou alerte doit adopter la palette verte/menthe. |

### 3.2 Règles d'Affichage du Logo
- **Intégrité du logo** : Le logo (`nodibranch.png` / silhouette de nudibranche marine stylisée) doit **toujours s'afficher dans son ratio d'aspect naturel** (`h-8 w-auto`, `object-contain`).
- **Interdictions** : Aucun rognage circulaire (`rounded-full`), masque ovale ou contrainte carrée déformante n'est autorisé.

---

## 4. Spécifications Fonctionnelles des Écrans

### 4.1 Écran 1 : Landing Page (`/`)
- **Header Global** :
  - Fond en couleur primaire (`#1d5f62`).
  - Logo complet non rogné + libellé de version textuel discret.
  - Liens : *Home*, *Documentation*, *Interactive Playground*, *Showcase*.
  - Barre de recherche globale rapide (`Cmd+K`).
  - Bouton CTA "Get Started" au style secondaire (`#c6eabe` avec texte sombre `#191f34`).
  - *Exclusions strictes* : Pas de badge d'étoiles GitHub, pas de badge de version npm externe, pas de lien Ecosystem, pas d'avatar utilisateur circulaire.
- **Section Héroïque** :
  - Accroche : *"Symfony elegance with Node.js speed."*
  - Description de positionnement technique.
  - Commande d'installation rapide : `$ npm i nodibranch` avec bouton de copie en un clic.
  - Boutons de redirection vers la Documentation et le Playground.
- **Comparatif de Code & Architecture** :
  - Présentation side-by-side / snippet illustrant un contrôleur autowiré avec attributs `@Controller('/api/users')`, `@Get()`, et injection de repository.
- **Grille de Piliers Architecturaux** :
  - *Compiled Dependency Injection*, *Expressive Route Attributes*, *Zero-Config Services*, *Pluggable Middlewares*, *Artisan-grade CLI*, *TypeScript First & Strict*.
- **CTA de Conversion & Footer** :
  - Bloc sombre contrasté invitant à scaffolder un projet via `npx nb`.
  - Footer complet avec colonnes Documentation, Écosystème, Communauté et mentions de licence MIT.

---

### 4.2 Écran 2 : Documentation Technique (`/docs`)
- **Structure de la mise en page** :
  - **Barre supérieure (Header)** : Identique à la spécification globale (couleur primaire `#1d5f62`).
  - **Barre latérale gauche unique (Sidebar)** :
    - Fond en couleur primaire (`#1d5f62`).
    - Liens de navigation hiérarchiques : *Getting Started* (Overview, Installation, First Bundle), *Architecture Core* (Service Container & DI, Kernel Request Lifecycle, Event Dispatcher, Compiler Passes), *HTTP & Routing* (Attributes & Controllers, Middleware Pipeline, DTO & Validation).
    - Style actif : surbrillance contrastée blanc / accent secondaire (`#c6eabe`).
    - *Exclusions strictes* : Une seule sidebar gauche (aucune double sous-navigation), pas de widget benchmark "Marine Kernel".
  - **Zone de Contenu Principal (Article Central)** :
    - Fil d'Ariane clair (*Docs > Getting Started > Installation*).
    - *Exclusions strictes* : Aucune mention superflue de métadonnées ("v1.0 Stable", "Updated 2 days ago").
    - Grille de prérequis clairs (Node.js LTS >= 18, TypeScript 5.0+, gestionnaires npm/pnpm/yarn/bun).
    - Étapes pas-à-pas numérotées :
      1. Installation des dépendances (`npm i nodibranch @nodibranch/core reflect-metadata`).
      2. Configuration obligatoire de `tsconfig.json` (`experimentalDecorators`, `emitDecoratorMetadata`).
      3. Création du premier contrôleur avec injection automatique de dépendances.
      4. Bootstrapping du kernel d'application avec `NodibranchFactory.create()`.
    - Bloc simulant le terminal avec le log de démarrage compilé.
    - Navigation séquentielle bas de page (Précédent / Suivant).
  - **Rail Droit "On this page"** :
    - Table des matières d'accès rapide aux ancres.
    - *Exclusion* : Pas de widget de vote ou formulaire "Was this page helpful?".

---

### 4.3 Écran 3 : Interactive CLI Playground (`/playground`)
- **Objectif** : Permettre au visiteur de tester les commandes de scaffolding en WebAssembly sans prérequis local.
- **Composants clés** :
  - **Barre d'outils Quick Runners** : Boutons d'action prédéfinis (`make:controller User`, `routes:list`, `container:debug`, `serve`).
  - **Terminal Interactif Sandbox** :
    - En-tête de fenêtre stylisé avec statut de session (ex: UTF-8, Node v20.11 WebContainer).
    - ASCII Art Nodibranch et émulation de shell bash avec auto-complétion.
  - **Explorateur de Fichiers & Visualiseur de Code** :
    - Arborescence du workspace virtuel généré (`src/controllers`, `src/services`, `nodibranch.config.ts`).
    - Onglet de visualisation en direct du code TypeScript produit par la commande CLI.
    - Onglets d'inspection complémentaires : HTTP Live, Graphe d'injection de dépendances (DI Graph), Logs runtime.
  - **Actions d'Exportation** :
    - Boutons *"Reset Playground"*, *"Export as ZIP"*, et *"Open in StackBlitz"*.
  - **Moniteur de Métriques** : Consommation mémoire de l'instance WebAssembly et temps de démarrage à froid (Cold Start).

---

## 5. Exigences Non-Fonctionnelles & Standards Techniques

1. **Accessibilité (a11y)** :
   - Contraste de texte conforme WCAG AA sur le fond primaire (`#1d5f62`) et sur les fonds de cartes neutres.
   - Support complet de la navigation clavier sur la barre de recherche (`Cmd+K` / `Ctrl+K`) et les blocs de code copiables.
2. **Performance Web** :
   - Rendu initial sous 1.2s.
   - Code-splitting des blocs de code et du terminal WebAssembly.
3. **Responsivité & Adaptabilité** :
   - Support desktop plein écran et adaptation fluide pour tablettes et mobiles avec drawer rétractable pour la navigation de documentation.
4. **Cohérence du design system** :
   - Réutilisation stricte des classes utilitaires et variables CSS déclarées dans `DESIGN.md`.

---

## 6. Feuille de Route & Prochaines Évolutions (Roadmap)

- [x] **Phase 1** : Création du Design System, de la Landing Page, de la Documentation et du Playground CLI.
- [x] **Phase 2** : Harmonisation de la charte de couleurs (fond primaire sur header/sidebar, élimination des artefacts bleus, plein affichage du logo).
- [ ] **Phase 3** : Ajout d'une page *Showcase / Benchmarks* comparant les performances face à NestJS et Fastify.
- [ ] **Phase 4** : Module d'authentification et gestion de profils développeurs pour sauvegarder ses sessions de playground dans le cloud.
