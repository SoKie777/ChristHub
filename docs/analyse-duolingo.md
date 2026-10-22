# Analyse de Duolingo (APK) — mécaniques à transposer dans ChristHub

> Analyse statique de `Duolingo.apk` (v6.102.4, build 2481, `com.duolingo`, SHA-256
> `7f0bbd2e…7f79fc`) faite le 2026-10-22 avec REA (inventaire d'archive, apktool, JADX).
> Rien n'a été exécuté. On n'en garde que des **mécaniques** (idées de produit) :
> aucun code, texte, image, son, personnage ni nom de Duolingo n'est repris.

## Ce qui est observé (preuves REA)

| Sujet | Observation | Source |
|---|---|---|
| Archive | 18 112 entrées, 10 fichiers DEX, 78 579 classes | `ev_b785728a…`, JADX |
| Textes | 6 554 chaînes (5 692 en français) | apktool `res/values-fr` |
| Exercices | énumération `com.duolingo.core.challenges.ChallengeType`, ~115 types | `ev_e12e25c3…` |

## Mécaniques relevées

### 1. Série (streak) — le cœur de la rétention (~250 textes)
- Une leçon par jour prolonge la série ; un jour manqué la remet à zéro.
- **Gel de série** : protège un jour manqué ; offert au retour, aux paliers, ou par un ami.
- **Série parfaite** : jours enchaînés *sans* gel ; récompense de « Semaine parfaite ».
- **Flamme qui évolue** aux paliers ; **objectif de série** choisi (7, 14, 30 j…).
- Statistiques motivantes (« une série de 14 jours rend 5x plus probable la fin du cours »).
- **Calendrier de série**, **alarme de série**, widget d'écran d'accueil.
- **Série entre amis** : objectif commun à deux, relances, envoi de gels.
- Réparation de série perdue, « Cercle de la série » (récompenses par paliers).

### 2. XP, combos, perfection
- XP par leçon ; record de XP par jour ; **boosters** x2 / x3 limités dans le temps.
- **Combo** de bonnes réponses d'affilée (« Combo perdu », « Combo max »).
- **Leçon parfaite** (aucune erreur), compteur de leçons parfaites.
- Quitter en cours = perdre les XP de la leçon (aversion à la perte).

### 3. Énergie (anciens « cœurs »)
- Dans cette version les cœurs sont devenus de l'**énergie** : chaque leçon en consomme,
  elle se recharge ; la révision des erreurs n'en demande pas.

### 4. Parcours (path)
- Unités → leçons → **points de contrôle** ; révision d'unité ; sauter à une unité.
- **Niveau Légendaire** : rejouer un niveau en mode difficile, sans droit à l'erreur.

### 5. Révision et erreurs
- **Revue des erreurs** (gratuite, XP doublés), « Révision du jour », mini-révision,
  centre d'entraînement sur les points faibles. Ton bienveillant (« on apprend de ses erreurs »).

### 6. Ligues hebdomadaires
- 10 divisions (Bronze → Diamant), classement par XP de la semaine,
  zones de promotion / relégation, succès « 1re place ».

### 7. Quêtes, coffres, récompenses
- Quête du jour, quête du week-end, **quête entre amis** ; coffres (matin, soir, épique) ;
  gemmes ; récompenses quotidiennes de retour.

### 8. Succès (achievements) et partage
- Succès à niveaux (XP, semaines parfaites, erreurs corrigées…), cartes de partage.

### 9. Fin de session
- Écrans enchaînés après une leçon : XP gagnés → série prolongée → progression en ligue
  → récompense éventuelle, avec un message d'encouragement adapté.

### 10. Types d'exercices utiles pour du texte (extrait de `ChallengeType`)
`SELECT` (QCM), `READ_COMPREHENSION`, `GAP_FILL` / `TAP_COMPLETE` / `TYPE_CLOZE`
(texte à trous), `WORD_MATCH` / `DEFINITION_MATCH` (associer), `ORDER_TAP_COMPLETE`
(remettre dans l'ordre), `SAME_DIFFERENT`, `MEANING_GUESS`, `FLASHCARDS`,
`DIALOGUE`, `WRITE_COMPREHENSION` (réponse libre). Les familles audio, micro, maths,
musique et échecs ne nous concernent pas pour le MVP.

## Transposition dans ChristHub (proposition)

| Duolingo | ChristHub |
|---|---|
| Leçon | **Portion** : Lire → Consolider → Miroir → Prier |
| QCM, trous, associer, ordre | Questions sur la portion (vérité clé, verset, idée) |
| Série + gel | **Série de fidélité** + « Grâce » (gel) |
| Série parfaite | **Semaine de fidélité** |
| Flamme qui évolue | **Lampe** qui brille davantage aux paliers |
| XP / combo / parfait | XP, combo, « portion parfaite » |
| Énergie | *Pas pour le MVP* (frustrant pour un usage spirituel) |
| Parcours d'unités | **Chemin du livre** : chapitres → portions → point de contrôle |
| Révision des erreurs | **Méditer à nouveau** : révision espacée des vérités ratées |
| Fin de session | XP → série → verset à retenir → partage |
| Ligues, quêtes entre amis | Plus tard (phase sociale) |
