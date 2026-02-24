# Camille Bordeaux Pilates – Site Web

Site statique one-page pour Camille Gaubin, Masseur Kinésithérapeute et enseignante Pilates à Bordeaux.

## Structure des fichiers

```
/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── favicon.svg       ← inclus
    ├── studio.webp       ← à ajouter (photo du studio / tapis)
    ├── method-1.webp     ← à ajouter (méthode – stabilité)
    ├── method-2.webp     ← à ajouter (méthode – souplesse / logo)
    ├── method-3.webp     ← à ajouter (méthode – renforcement)
    └── camille.webp      ← à ajouter (portrait de Camille)
```

## Images à fournir

Placez vos images dans le dossier `/assets/` avec exactement ces noms de fichiers :

| Fichier | Description |
|---|---|
| `studio.webp` | Photo du studio avec les tapis (hero) |
| `method-1.webp` | Image méthode – Stabilité / mobilité |
| `method-2.webp` | Image méthode – Souplesse (logo ou photo) |
| `method-3.webp` | Image méthode – Renforcement / alignement |
| `camille.webp` | Portrait de Camille Gaubin |

> **Conseil optimisation** : Convertissez vos images en WebP, redimensionnez-les à 1200px max. Vous pouvez utiliser [Squoosh](https://squoosh.app/) gratuitement.

## Déploiement GitHub Pages

1. Créez un dépôt GitHub (ex : `camillebordeauxpilates`)
2. Uploadez tous les fichiers à la racine du dépôt
3. Dans **Settings → Pages**, choisissez la branche `main` et le dossier `/root`
4. Le site sera accessible à : `https://votre-username.github.io/camillebordeauxpilates/`

## Personnalisation

- **Couleurs** : modifiez les variables CSS dans `:root { }` en haut de `style.css`
- **Témoignages** : remplacez Name / Description et les guillemets dans `index.html`
- **Lien réservation** : déjà configuré → `https://camillebordeauxpilates.setmore.com/`
- **Réseaux sociaux** : ajoutez les vrais liens dans le footer (`href="#"`)
