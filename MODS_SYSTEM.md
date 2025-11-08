# Système d'Icônes des Mods - Sol'Ark

## 📋 Description
Nouveau système d'affichage des mods avec des icônes carrées responsives et des liens directs vers CurseForge.

## 🗂️ Structure des Fichiers
```
extract/
├── mods/                          # Dossier contenant toutes les icônes des mods
│   ├── Moros_Indomitable_Duo_icon.png
│   ├── BigALs_WAK_Spinosaurus_icon.png
│   ├── TG_Stacking_Mod_10000-90_icon.png
│   └── ... (34 icônes au total)
├── pages/
│   └── infos.html                 # Page intégrant le nouveau système
└── css/
    └── style.css                  # Styles pour les mod-cards
```

## 🎨 Caractéristiques des Icônes
- **Format** : Carré 200x200 pixels
- **Style** : Icônes colorées avec initiales et noms tronqués
- **Couleurs** : 15 couleurs différentes pour variety
- **Typographie** : Initiales en grand + nom du mod en petit
- **Responsive** : S'adapte à tous les écrans

## 🖱️ Fonctionnalités
- **Liens CurseForge** : Chaque icône redirige vers la page CurseForge du mod
- **Effet de survol** : Animation scale + ombre colorée
- **Icone externe** : Indicateur visuel "↗" pour les liens externes
- **Animation progressive** : Les lignes apparaissent successivement
- **Responsive design** : Adaptation automatique selon la taille d'écran

## 📱 Responsive Breakpoints
- **Écran large** (>992px) : 4 icônes par ligne
- **Écran moyen** (768-992px) : 3 icônes par ligne
- **Écran petit** (576-768px) : 2 icônes par ligne
- **Mobile** (<576px) : 2 icônes par ligne avec texte réduit

## 🎯 Installation/Configuration

### Pour ajouter de nouveaux mods :
1. Ajouter l'icône dans le dossier `mods/`
2. Nom du fichier : `{nom_mod}_icon.png`
3. Ajouter la carte dans `pages/infos.html`
4. Copier-coller une ligne existante et modifier :
   - Lien href vers CurseForge
   - src de l'image
   - Texte alt
   - Texte du titre

### Pour remplacer une icône :
1. Remplacer le fichier PNG dans `mods/`
2. Conserver le même nom de fichier
3. L'interface se met à jour automatiquement

## 📊 Liste des Mods (34 mods)
- Moro's Indomitable Duo
- BigAL's WAK Spinosaurus
- TG Stacking Mod 10000-90
- Wall'n'Floor Decor
- ASA-Bot Companion
- ASA's Eerie Dinos
- Klinger Additional Structures
- Klinger Additional Rustic Building
- PFF Music Collection
- Play For Fun Music Collection
- Train Music
- LudoARK Casino Freemium
- JVH Landscaping
- JVH Landscaping Mod
- Poker Table
- Runic Wyverns
- Shiny Ascended (Shiny! Dinos Ascended)
- Super Cryo Storage
- Alfa Oceanic Platforms
- Awesome Spyglass
- M-Bioshift
- Structure Management Tool
- Chaos Gaming Potions Updated
- RR-Homdeco and more
- Awesome ARK Tools
- Spawn Blocker
- Death Inventory Keeper
- Auto Engrams
- Cyrus's Critters: Redpanda
- Rhythmbox
- Night of the Dead (Halloween)
- Custom Dino Levels
- Amissa Additions
- Automated Dino Wipes

## 🔧 Classes CSS Utilisées
- `.mods-grid` : Conteneur principal
- `.mod-card` : Lien de carte mod
- `.mod-icon` : Image de l'icône
- `.mod-title` : Titre du mod

## ✨ Avantages du Nouveau Système
1. **Performance** : Images optimisées (200x200px)
2. **UX** : Navigation intuitive avec liens directs
3. **Maintenance** : Facile d'ajouter/supprimer des mods
4. **Responsive** : Parfait sur tous les appareils
5. **SEO** : Liens vers sources officielles
6. **Visuel** : Design moderne et engageant

---
*Mis à jour le 8 novembre 2025*