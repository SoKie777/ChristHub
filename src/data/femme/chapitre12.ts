import type { Chapter } from "../types";

// Livre « Le but et la puissance de la femme », conclusion : « La femme de Proverbes 31 »
// Paraphrase libre en français des idées de l'auteur, écrite avec nos propres mots
// (aucune traduction du texte original). Versets : Louis Segond 1910.

export const chapitre12: Chapter = {
  id: "f12",
  number: 12,
  title: "La femme de Proverbes 31",
  theme: "Active, influente, libre : mais d'abord une femme qui connaît son but en Dieu.",
  portions: [
    {
      id: "f12p1",
      title: "Une femme qui agit",
      reading: [
        "Aucun livre sur le but et la puissance de la femme ne serait complet sans la femme de Proverbes 31. Certaines n'aiment pas ce chapitre : « Avec autant de servantes, moi aussi je ferais tout ça ! » Ne te laisse pas écraser par ce qu'elle fait au point de manquer qui elle est.",
        "Proverbes 31 montre une femme qui agit, qui mène mille choses de front : son mari, ses enfants, sa maison, son travail, ses talents, l'Église, les œuvres de charité, parfois ses parents âgés. Elle est une aide et une leader. Elle reçoit dans tous ses « seins » et transforme le monde autour d'elle.",
        "Mais au milieu de tout cela, elle doit se souvenir que sa première place est en Dieu. Il est si facile de Le négliger quand on s'occupe de tant de personnes !",
        "Créée pour être aimée de Dieu et vivre en communion avec Lui, la femme est faite pour refléter son caractère, agir comme Il agit, dans l'amour et la grâce. C'est cela qui donne sa valeur, plus que toutes ses activités.",
      ],
      keyTruth: "Je peux mener mille choses de front, mais ma première place reste en Dieu.",
      verse: {
        ref: "Proverbes 31:10",
        text: "Qui peut trouver une femme vertueuse ? Elle a bien plus de valeur que les perles.",
      },
      exercises: [
        {
          kind: "choice",
          id: "f12p1e1",
          prompt: "Que ne faut-il pas manquer en lisant Proverbes 31 ?",
          options: ["La liste de ses tâches", "Qui elle est, au-delà de ce qu'elle fait", "Le nombre de ses servantes"],
          answer: 1,
          explain: "Ne te laisse pas écraser par ses activités au point de manquer son identité.",
        },
        {
          kind: "truefalse",
          id: "f12p1e2",
          statement: "La femme de Proverbes 31 est à la fois une aide et une leader.",
          answer: true,
          explain: "Elle reçoit, transforme et bâtit le monde autour d'elle.",
        },
        {
          kind: "fill",
          id: "f12p1e3",
          before: "Une femme vertueuse a bien plus de valeur que les",
          after: ".",
          options: ["perles", "maisons", "louanges"],
          answer: 0,
          explain: "Proverbes 31:10.",
        },
      ],
      mirror: {
        question: "Au milieu de tes activités, quelle place reste-t-il à Dieu ?",
        choices: ["La première", "Ce qu'il reste", "Presque rien", "Je veux la Lui redonner"],
      },
      prayer: "Seigneur, au milieu de tout ce que je fais, garde-Toi la première place dans mon cœur.",
    },
    {
      id: "f12p2",
      title: "Être avant faire",
      reading: [
        "Une femme tire souvent son estime d'elle-même de ce qu'elle accomplit, un peu comme l'homme de son travail. Elle a besoin de sentir qu'on apprécie ce qu'elle apporte à sa famille et à son entourage. Mais comme elle vit cela à travers ses relations et ses émotions, on le remarque moins.",
        "Le Christ a libéré la femme du péché et de l'oppression qui la disait inférieure. Mais une fois libre, elle doit veiller à ne pas s'opprimer elle-même : en faisant au détriment d'être.",
        "Le monde dit : prouve ta valeur par ce que tu accomplis. La Bible dit : reçois ta valeur de Celui qui t'aime. Tu n'as pas à justifier ta valeur par le nombre de choses que tu fais pour les autres. Tu n'as pas reçu un esprit d'esclave, mais l'Esprit d'adoption, qui te fait crier : « Abba, Père ! »",
        "Une femme trouve d'abord son identité en Christ, comme enfant bien-aimée de Dieu. C'est seulement ainsi qu'elle peut s'épanouir et accomplir ses projets à Lui, avec sa force à Lui et non la sienne.",
      ],
      keyTruth: "Je n'ai pas à prouver ma valeur par tout ce que je fais : je la reçois de Celui qui m'aime.",
      verse: {
        ref: "Romains 8:15",
        text: "Et vous n'avez point reçu un esprit de servitude, pour être encore dans la crainte ; mais vous avez reçu un Esprit d'adoption, par lequel nous crions : Abba ! Père !",
      },
      exercises: [
        {
          kind: "match",
          id: "f12p2e1",
          prompt: "Associe chaque voix à son message.",
          pairs: [
            ["Le monde", "Prouve ta valeur par ce que tu accomplis"],
            ["La Bible", "Reçois ta valeur de Celui qui t'aime"],
          ],
          explain: "Être passe avant faire.",
        },
        {
          kind: "truefalse",
          id: "f12p2e2",
          statement: "Une femme libérée par le Christ ne peut plus s'opprimer elle-même.",
          answer: false,
          explain: "Elle doit veiller à ne pas s'épuiser à faire au détriment d'être.",
        },
        {
          kind: "fill",
          id: "f12p2e3",
          before: "Nous avons reçu un Esprit d'adoption, par lequel nous crions : Abba !",
          after: "!",
          options: ["Père", "Maître", "Juge"],
          answer: 0,
          explain: "Romains 8:15.",
        },
      ],
      mirror: {
        question: "As-tu l'impression de devoir toujours faire plus pour avoir de la valeur ?",
        choices: ["Oui, tout le temps", "Souvent", "Parfois", "Non, je me sais aimée"],
      },
      prayer: "Abba, Père, je dépose mon besoin de prouver ma valeur : je suis ton enfant bien-aimée.",
    },
    {
      id: "f12p3",
      title: "Elle sait qui elle est",
      reading: [
        "La femme de Proverbes 31 n'est pas seulement une femme occupée : elle connaît son but en Dieu. Elle tire sa force de Lui au lieu d'être paralysée par l'inquiétude, et les siens peuvent lui faire confiance.",
        "Elle sait que Dieu apprécie ses capacités et son intelligence : elle saisit les occasions, fait des projets et élargit son champ d'influence. Elle sait que Dieu est sa Source et veut la bénir : elle travaille avec énergie, sans se plaindre.",
        "Bénie, elle veut bénir à son tour, et tend la main aux plus pauvres. Parce que sa valeur vient de sa position en Dieu, elle se respecte elle-même : elle est revêtue de force et de dignité, et regarde l'avenir en souriant.",
        "Nourrie de la Parole, elle parle avec sagesse et enseigne avec bonté. Parce qu'elle connaît le Dieu de tout encouragement, elle encourage son mari, ses enfants, ses amis et ses collègues. « Beaucoup de femmes ont une conduite vertueuse, mais toi, tu les surpasses toutes. »",
      ],
      keyTruth: "Comme la femme de Proverbes 31, je tire ma force de Dieu, je bénis, je me respecte et je parle avec sagesse.",
      verse: {
        ref: "Proverbes 31:25-26",
        text: "Elle est revêtue de force et de gloire, et elle se rit de l'avenir. Elle ouvre la bouche avec sagesse, et des instructions aimables sont sur sa langue.",
      },
      exercises: [
        {
          kind: "match",
          id: "f12p3e1",
          prompt: "Associe chaque qualité à sa source.",
          pairs: [
            ["Elle n'est pas paralysée par l'inquiétude", "Elle tire sa force de Dieu"],
            ["Elle se respecte", "Sa valeur vient de sa position en Dieu"],
            ["Elle parle avec sagesse", "Elle est nourrie de la Parole"],
          ],
          explain: "Ce qu'elle fait découle de qui elle est en Dieu.",
        },
        {
          kind: "truefalse",
          id: "f12p3e2",
          statement: "La femme de Proverbes 31 travaille en se plaignant sans cesse.",
          answer: false,
          explain: "Elle sait que Dieu est sa Source : elle travaille avec énergie et bonne humeur.",
        },
        {
          kind: "fill",
          id: "f12p3e3",
          before: "Elle est revêtue de force et de gloire, et elle se rit de",
          after: ".",
          options: ["l'avenir", "l'argent", "l'opinion"],
          answer: 0,
          explain: "Proverbes 31:25.",
        },
      ],
      mirror: {
        question: "Quelle qualité de la femme de Proverbes 31 veux-tu développer ?",
        choices: ["La confiance en Dieu", "L'audace pour entreprendre", "La générosité", "Le respect de moi-même", "Des paroles sages"],
      },
      prayer: "Seigneur, revêts-moi de force et de dignité, et mets sur ma langue des paroles sages et bonnes.",
    },
    {
      id: "f12p4",
      title: "Ta place est en Lui",
      reading: [
        "La beauté passe et le charme trompe, mais la femme qui craint l'Éternel est celle qui sera louée. Ta relation avec le Seigneur et le développement de son caractère en toi sont la fondation qui te soutiendra dans toutes tes activités.",
        "Poursuis tous les projets de Dieu pour toi. Il a créé ton esprit à partir de Lui-même et par amour. Il t'a conçue parfaitement pour ton appel. Reçois la liberté qu'Il t'a donnée en Christ, et sache qu'Il t'estime.",
        "Développe les idées créatrices qu'Il dépose au plus profond de toi. Utilise les dons et les talents qu'Il a placés en toi. Sois la bénédiction qu'Il a voulue pour toi-même, ta famille et ton entourage.",
        "Et surtout, découvre que ta vie est cachée avec Christ en Dieu. Ta place est avec Lui et en Lui. Tu as parcouru tout ce livre : pour aller plus loin, procure-toi le livre original, et continue de méditer chaque jour.",
      ],
      keyTruth: "Ma vie est cachée avec Christ en Dieu : c'est là ma vraie place, d'où je peux bénir le monde.",
      verse: {
        ref: "Proverbes 31:30",
        text: "La grâce est trompeuse, et la beauté est vaine ; la femme qui craint l'Éternel est celle qui sera louée.",
      },
      exercises: [
        {
          kind: "fill",
          id: "f12p4e1",
          before: "La femme qui craint l'Éternel est celle qui sera",
          after: ".",
          options: ["louée", "oubliée", "jugée"],
          answer: 0,
          explain: "Proverbes 31:30 : la beauté passe, la crainte de Dieu demeure.",
        },
        {
          kind: "order",
          id: "f12p4e2",
          prompt: "Remets dans l'ordre l'encouragement final de l'auteur.",
          items: ["Reçois la liberté du Christ", "Développe les idées qu'Il te donne", "Utilise tes dons", "Sois une bénédiction"],
          explain: "Tout part de la liberté reçue en Christ.",
        },
        {
          kind: "truefalse",
          id: "f12p4e3",
          statement: "Selon l'auteur, la vraie place de la femme est en Dieu, cachée avec Christ.",
          answer: true,
          explain: "C'est la conclusion de tout le livre : sa place est avec Lui et en Lui.",
        },
      ],
      mirror: {
        question: "Après tout ce parcours, que veux-tu garder en priorité ?",
        choices: ["Ma valeur vient de Dieu", "Mon influence au service du Royaume", "Mieux aimer et respecter", "Ma place est en Dieu", "Tout recommencer depuis le début"],
      },
      prayer: "Père, ma vie est cachée avec Christ en Toi : fais de moi la femme que Tu avais en tête, pour ta gloire.",
    },
  ],
};
