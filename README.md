# ChristHub

Application Android pour **méditer des livres chrétiens, une portion par jour**, avec
la boucle :

**Lire → Consolider → Face au miroir → Prier (15 s)**

Le tout avec des mécaniques de jeu qui aident à tenir : série de fidélité (la lampe),
Grâces pour protéger un jour manqué, XP, combos, portions parfaites, chemin du livre,
point de contrôle par chapitre et « Méditer à nouveau » (révision espacée des points
manqués : 1, 3, 7 puis 16 jours).

## Contenu

MVP : chapitre 1 (« Qu'est-ce qu'un vrai homme ? »), **inspiré du livre
*Understanding the Purpose and Power of Men* de Myles Munroe** (Whitaker House, 2001),
en **8 portions**. Pour aller plus loin, procure-toi le livre officiel.

Le texte de l'application est une **paraphrase libre en français**, écrite avec nos
propres mots : ce n'est pas une traduction du livre, et le livre lui-même n'est pas
dans ce dépôt. Les versets viennent de la Bible Louis Segond 1910 (domaine public).
ChristHub n'est pas affilié à l'auteur ni à l'éditeur.

## Développement

```bash
npm install
npm run dev      # http://localhost:6778
npm run build    # vérification TypeScript + build dans dist/
```

- `src/data/` : le contenu (un fichier par chapitre, voir `types.ts`).
- `src/lib/progress.ts` : série, Grâces, XP, révision espacée (stocké dans le téléphone).
- `src/screens/` : chemin, séance, écrans de fin.
- `android/` : l'appli Android (WebView qui embarque `dist/`).

## APK

Chaque push sur `main` compile l'APK avec GitHub Actions
(`.github/workflows/apk.yml`) et le publie dans les **Releases**.
Signature : secrets `KEYSTORE_B64`, `KEYSTORE_PASSWORD`, `KEY_ALIAS`, `KEY_PASSWORD`.
