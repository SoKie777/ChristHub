import type { Chapter } from "./types";

// Chapitre 10 : « Différences entre l'homme et la femme »
// Paraphrase libre en français des idées du chapitre, écrite avec nos propres mots
// et nos propres images (aucune traduction du texte original). Versets : Louis Segond 1910.

export const chapitre10: Chapter = {
  id: "c10",
  number: 10,
  title: "Différences entre l'homme et la femme",
  theme: "Comprendre nos différences pour cesser de nous heurter et commencer à nous compléter.",
  portions: [
    {
      id: "c10p1",
      title: "On ne met pas d'essence sur une plante",
      reading: [
        "Dieu a créé l'homme et la femme pour qu'ils se complètent parfaitement. Les conflits naissent quand chacun attend de l'autre qu'il pense, réagisse et fonctionne comme lui.",
        "On met de l'essence dans une voiture pour qu'elle roule. Mais personne n'arrose ses plantes avec de l'essence ! Chaque être a besoin de ce qui correspond à sa nature. Dans un couple, on a tendance à donner à l'autre ce dont on a soi-même besoin, alors que ses besoins sont différents.",
        "Certains hommes disent : « Je n'ai pas besoin d'une femme. » Pourtant, Dieu a placé dans la femme des forces que l'homme n'a pas. Tant qu'il ne les reconnaît pas, il reste faible dans ces domaines.",
        "Les différences qui suivent sont des tendances générales, pas des règles absolues : chacun est unique. Elles ne disent pas qui est meilleur, seulement que nous sommes différents, et que c'est une richesse.",
      ],
      keyTruth: "Je ne dois pas donner à l'autre ce dont moi j'ai besoin, mais découvrir ce dont lui a besoin.",
      verse: {
        ref: "Romains 12:4",
        text: "Car, comme nous avons plusieurs membres dans un seul corps, et que tous les membres n'ont pas la même fonction.",
      },
      exercises: [
        {
          kind: "choice",
          id: "c10p1e1",
          prompt: "D'où naissent souvent les conflits entre hommes et femmes ?",
          options: [
            "Du fait que chacun attend que l'autre fonctionne comme lui",
            "Du manque d'argent uniquement",
            "Du fait qu'ils sont trop semblables",
          ],
          answer: 0,
          explain: "Ignorer nos différences crée des frustrations ; les comprendre crée l'harmonie.",
        },
        {
          kind: "fill",
          id: "c10p1e2",
          before: "On met de l'essence dans une voiture, mais on ne la met pas sur une",
          after: ".",
          options: ["plante", "route", "facture"],
          answer: 0,
          explain: "Chacun a besoin de ce qui correspond à sa nature.",
        },
        {
          kind: "truefalse",
          id: "c10p1e3",
          statement: "Ces différences sont des règles absolues qui s'appliquent à tout le monde de la même façon.",
          answer: false,
          explain: "Ce sont des tendances générales : chaque personne est unique.",
        },
      ],
      mirror: {
        question: "Te surprends-tu à attendre des autres qu'ils réagissent comme toi ?",
        choices: ["Souvent", "Parfois", "Rarement", "Je n'y avais pas pensé"],
      },
      prayer: "Seigneur, ouvre mes yeux sur les besoins des autres, au lieu de ne voir que les miens.",
    },
    {
      id: "c10p2",
      title: "Respect et amour",
      reading: [
        "Les besoins premiers d'un homme sont le respect, la complicité dans les loisirs et la sexualité. Ceux d'une femme sont l'amour, la conversation et la tendresse.",
        "Un homme n'a pas seulement envie de respect : il en a besoin, comme d'air. C'est au cœur de son estime de lui. Une épouse qui lui rappelle sincèrement ce qu'il sait faire et qui est fière de lui le fait grandir.",
        "Une femme a besoin de se sentir aimée, précieuse, choisie. Quand un homme prend du temps pour elle et veille à ce qu'elle ne manque de rien, elle sait qu'elle compte vraiment pour lui.",
        "Paul résume tout cela en une phrase : que le mari aime sa femme, et que la femme respecte son mari. Et ces besoins existent aussi chez les célibataires : un frère, une sœur, un ami peuvent les honorer.",
      ],
      keyTruth: "L'homme a besoin de respect, la femme a besoin d'amour : chacun peut nourrir l'autre de ce qui le fait vivre.",
      verse: {
        ref: "Éphésiens 5:33",
        text: "Du reste, que chacun de vous aime sa femme comme lui-même, et que la femme respecte son mari.",
      },
      exercises: [
        {
          kind: "match",
          id: "c10p2e1",
          prompt: "Associe à chacun son besoin premier selon Éphésiens 5:33.",
          pairs: [
            ["L'homme", "Le respect"],
            ["La femme", "L'amour"],
          ],
          explain: "Que le mari aime sa femme, et que la femme respecte son mari.",
        },
        {
          kind: "truefalse",
          id: "c10p2e2",
          statement: "Ces besoins disparaissent quand on est célibataire.",
          answer: false,
          explain: "Ils restent : la famille et les amis peuvent les honorer avec respect et affection fraternelle.",
        },
        {
          kind: "choice",
          id: "c10p2e3",
          prompt: "Qu'est-ce qui fait se sentir aimée une femme, selon cette portion ?",
          options: ["Qu'on lui donne des ordres clairs", "Qu'on prenne du temps pour elle et qu'on veille sur elle", "Qu'on la laisse toujours seule"],
          answer: 1,
          explain: "Le temps et l'attention disent : « Tu comptes pour moi. »",
        },
      ],
      mirror: {
        question: "Comment pourrais-tu montrer cette semaine du respect ou de l'amour à un proche ?",
        choices: ["Par une parole sincère", "Par du temps donné", "Par un service", "Par un geste de tendresse"],
      },
      prayer: "Père, apprends-moi à aimer et à honorer les autres de la manière dont ils en ont vraiment besoin.",
    },
    {
      id: "c10p3",
      title: "Partager ses loisirs, partager ses mots",
      reading: [
        "L'homme aime les défis et les activités, et il aime les partager. Rien ne le touche plus que de voir sa femme s'intéresser à ce qu'il aime : un sport, un instrument, un projet. Partager ses passions crée de la complicité.",
        "La femme, elle, a besoin de conversation. Avec sa fibre de leader, l'homme a tendance à parler à sa femme comme on donne des consignes. Elle a besoin qu'il parle avec elle, pas à elle.",
        "Écouter vraiment, c'est s'intéresser à ce qu'elle a vécu et ressenti, sans se précipiter pour proposer des solutions. Souvent, elle ne cherche pas un réparateur, mais quelqu'un qui l'écoute.",
        "Ces deux besoins forment un pont magnifique : il partage ses centres d'intérêt, elle partage ses pensées, et chacun entre un peu plus dans le monde de l'autre.",
      ],
      keyTruth: "Écouter vraiment, sans me précipiter pour tout réparer, est l'un des plus beaux cadeaux que je puisse faire.",
      verse: {
        ref: "Jacques 1:19",
        text: "Ainsi, que tout homme soit prompt à écouter, lent à parler, lent à se mettre en colère.",
      },
      exercises: [
        {
          kind: "fill",
          id: "c10p3e1",
          before: "Une femme a besoin qu'on parle avec elle, pas",
          after: "elle.",
          options: ["à", "pour", "sans"],
          answer: 0,
          explain: "Un vrai dialogue n'est pas une liste de consignes.",
        },
        {
          kind: "truefalse",
          id: "c10p3e2",
          statement: "Quand une femme partage un souci, elle attend toujours une solution immédiate.",
          answer: false,
          explain: "Souvent, elle a d'abord besoin d'être écoutée et comprise.",
        },
        {
          kind: "choice",
          id: "c10p3e3",
          prompt: "Qu'est-ce qui touche particulièrement un homme ?",
          options: ["Qu'on critique ses loisirs", "Que sa femme s'intéresse à ce qu'il aime", "Qu'on parle à sa place"],
          answer: 1,
          explain: "Partager ses passions crée de la complicité.",
        },
      ],
      mirror: {
        question: "Quand quelqu'un te confie un souci, quelle est ta réaction spontanée ?",
        choices: ["Donner une solution", "Écouter jusqu'au bout", "Changer de sujet", "Raconter mon propre souci"],
      },
      prayer: "Seigneur, rends-moi prompt à écouter et lent à parler, pour que ceux que j'aime se sentent compris.",
    },
    {
      id: "c10p4",
      title: "La tendresse avant tout",
      reading: [
        "Le besoin sexuel de l'homme est l'un des plus forts qui soient, et la femme doit y être sensible. Certaines le négligent parce qu'elles s'investissent plus dans les activités de l'église que dans leur mari, ou parce qu'elles pensent que ce n'est pas « spirituel » : c'est une erreur, et un mauvais témoignage. Entre mari et femme, la sexualité est sainte. La femme, elle, a un fort besoin de tendresse. Mal compris, ces deux besoins peuvent provoquer parmi les pires conflits d'un couple.",
        "Il faut retenir ceci : la tendresse crée le climat, l'intimité est l'événement. Beaucoup d'hommes foncent vers l'événement sans avoir créé le climat. Or c'est à l'homme de prendre l'initiative de la tendresse.",
        "Être tendre, c'est s'asseoir près d'elle, lui tenir la main, la prendre dans ses bras sans arrière-pensée, lui écrire un mot, lui offrir une fleur, la traiter avec égards. Si tu ne sais pas comment faire, demande-lui simplement, avec douceur.",
        "La Bible demande aux époux de prendre soin des besoins l'un de l'autre, et au mari de vivre avec sa femme avec sagesse et respect. Chacun pense d'abord à l'autre, et tous deux sont comblés.",
      ],
      keyTruth: "La tendresse crée le climat de l'amour : c'est à moi de la cultiver chaque jour, sans rien exiger en retour.",
      verse: {
        ref: "1 Corinthiens 7:3",
        text: "Que le mari rende à sa femme ce qu'il lui doit, et que la femme agisse de même envers son mari.",
      },
      exercises: [
        {
          kind: "match",
          id: "c10p4e1",
          prompt: "Complète l'image de cette portion.",
          pairs: [
            ["La tendresse", "Le climat"],
            ["L'intimité", "L'événement"],
          ],
          explain: "Sans climat de tendresse, l'événement perd son sens.",
        },
        {
          kind: "choice",
          id: "c10p4e2",
          prompt: "À qui revient l'initiative de la tendresse selon cette portion ?",
          options: ["À la femme", "À l'homme", "Personne"],
          answer: 1,
          explain: "C'est au mari de créer ce climat, jour après jour.",
        },
        {
          kind: "truefalse",
          id: "c10p4e3",
          statement: "Demander à sa femme comment lui montrer de la tendresse est un signe de faiblesse.",
          answer: false,
          explain: "C'est une marque d'amour et d'humilité.",
        },
      ],
      mirror: {
        question: "Quel geste de tendresse gratuite pourrais-tu offrir aujourd'hui ?",
        choices: ["Un mot écrit", "Un câlin", "Un moment ensemble", "Un service", "Je suis célibataire, je prie pour ma future famille"],
      },
      prayer: "Seigneur, rends-moi tendre et attentionné, et apprends-moi à donner sans rien exiger.",
    },
    {
      id: "c10p5",
      title: "La ligne droite et la grille",
      reading: [
        "L'homme est naturellement un « penseur logique », la femme une « sensible émotionnelle » : lui réagit d'abord par la réflexion puis ressent, elle ressent d'abord puis réfléchit. Il y a une explication physiologique : chez l'homme, les deux hémisphères du cerveau sont reliés par moins de connexions. Il doit « changer de vitesse » pour passer de la logique à l'émotion, alors que chez la femme les deux côtés travaillent ensemble. Ni l'un ni l'autre n'est meilleur.",
        "L'homme pense souvent en ligne droite : il voit le but et cherche le chemin le plus direct pour l'atteindre. C'est précieux pour avancer vers une vision.",
        "La femme pense plutôt comme une grille : elle perçoit en même temps les détails, les personnes, les motivations, les émotions. C'est pour cela qu'elle peut mener plusieurs choses de front.",
        "Ensemble, c'est une force. Sa vision large évite à l'homme de foncer droit dans un nid-de-poule qu'il n'avait pas vu. Sa ligne droite aide la femme à ne pas se perdre dans toutes les couches de la situation. Au lieu de se traiter de « froid » ou d'« émotive », on peut se remercier.",
      ],
      keyTruth: "Nos façons de penser sont différentes pour se compléter : ce que l'un ne voit pas, l'autre le perçoit.",
      verse: {
        ref: "Ecclésiaste 4:12",
        text: "Et si quelqu'un est plus fort qu'un seul, les deux peuvent lui résister ; et la corde à trois fils ne se rompt pas facilement.",
      },
      exercises: [
        {
          kind: "match",
          id: "c10p5e1",
          prompt: "Associe chaque façon de penser à sa force.",
          pairs: [
            ["La ligne droite", "Avancer directement vers le but"],
            ["La grille", "Percevoir les détails et les personnes"],
          ],
          explain: "Ensemble, elles évitent les angles morts.",
        },
        {
          kind: "truefalse",
          id: "c10p5e2",
          statement: "Penser en ligne droite est supérieur à penser comme une grille.",
          answer: false,
          explain: "Ce sont deux forces différentes qui se complètent.",
        },
        {
          kind: "choice",
          id: "c10p5e3",
          prompt: "Comment la vision large de la femme aide-t-elle l'homme ?",
          options: ["Elle l'empêche d'avancer", "Elle lui évite les obstacles qu'il n'avait pas vus", "Elle n'a aucun effet"],
          answer: 1,
          explain: "Sa vision périphérique le protège des angles morts.",
        },
      ],
      mirror: {
        question: "Y a-t-il quelqu'un dont la façon de penser t'agace, mais pourrait te compléter ?",
        choices: ["Oui, mon conjoint", "Oui, un collègue", "Oui, un proche", "Pas vraiment"],
      },
      prayer: "Père, merci pour les regards différents du mien : apprends-moi à les accueillir comme un cadeau.",
    },
    {
      id: "c10p6",
      title: "Ce qu'on dit, ce qu'on entend",
      reading: [
        "Quand un homme parle, il exprime souvent ce qu'il pense. Quand une femme parle, elle exprime souvent ce qu'elle ressent. Ce sont deux types d'informations très différents.",
        "Pour beaucoup d'hommes, dire ce qu'ils ressentent est très difficile. Une femme qui crée un climat de confiance découvrira souvent que ce qu'il ressent est bien différent de ce qu'il dit.",
        "À l'inverse, une femme ne dit pas toujours directement ce qu'elle pense. L'homme, qui aime aller droit au but, doit apprendre la patience pour comprendre ce qui se passe vraiment dans son cœur.",
        "Pour l'homme, écouter, c'est recevoir des informations. Pour la femme, c'est aussi une expérience émotionnelle : elle entend les mots, mais aussi le ton et les silences. Avant de conclure sur les intentions de l'autre, prenons le temps de vraiment comprendre.",
      ],
      keyTruth: "Avant de juger les intentions de l'autre, je prends le temps de comprendre ce qu'il pense et ce qu'il ressent.",
      verse: {
        ref: "Proverbes 18:13",
        text: "Celui qui répond avant d'avoir écouté fait un acte de folie et s'attire la confusion.",
      },
      exercises: [
        {
          kind: "match",
          id: "c10p6e1",
          prompt: "Associe à chacun ce qu'il exprime le plus souvent en parlant.",
          pairs: [
            ["L'homme", "Ce qu'il pense"],
            ["La femme", "Ce qu'elle ressent"],
          ],
          explain: "Deux types d'informations différents, d'où les malentendus.",
        },
        {
          kind: "fill",
          id: "c10p6e2",
          before: "Celui qui répond avant d'avoir",
          after: "fait un acte de folie.",
          options: ["écouté", "mangé", "gagné"],
          answer: 0,
          explain: "Proverbes 18:13 : écouter d'abord évite bien des conflits.",
        },
        {
          kind: "truefalse",
          id: "c10p6e3",
          statement: "Pour une femme, écouter peut être une expérience autant émotionnelle qu'intellectuelle.",
          answer: true,
          explain: "Elle perçoit les mots, mais aussi le ton et les silences.",
        },
      ],
      mirror: {
        question: "As-tu récemment mal interprété les paroles de quelqu'un ?",
        choices: ["Oui, et je dois en reparler", "Peut-être", "Non", "On m'a mal compris, moi"],
      },
      prayer: "Seigneur, apprends-moi à écouter le cœur derrière les mots avant de répondre.",
    },
    {
      id: "c10p7",
      title: "Le classeur et l'ordinateur",
      reading: [
        "Face à un problème, beaucoup d'hommes fonctionnent comme un classeur : ils décident vite et rangent l'affaire dans un tiroir, ou la mettent de côté pour plus tard. Beaucoup de femmes fonctionnent comme un ordinateur : leur esprit continue de tourner jusqu'à ce que le problème soit résolu.",
        "Devant un conflit, l'homme a tendance à garder de la rancune et à « classer » l'affaire. La femme a tendance à culpabiliser, même quand elle n'est pas en tort, et à chercher ce qu'elle aurait pu faire autrement.",
        "Ces façons de faire peuvent s'entraider. Elle peut l'aider à comprendre les sentiments en jeu dans un conflit au travail. Il peut l'aider à décider plus vite en posant clairement les faits et les options.",
        "Pour les buts concrets, l'homme veut souvent les étapes, la femme voit l'objectif. Dans la vie spirituelle, c'est souvent l'inverse : lui voit la grande direction, elle s'investit dans les moyens de grandir. Chacun peut apprendre de l'autre.",
      ],
      keyTruth: "Nos façons de résoudre les problèmes sont différentes : ensemble, nous prenons de meilleures décisions.",
      verse: {
        ref: "Proverbes 15:22",
        text: "Les projets échouent, faute d'une assemblée qui délibère ; mais ils réussissent quand il y a de nombreux conseillers.",
      },
      exercises: [
        {
          kind: "match",
          id: "c10p7e1",
          prompt: "Associe chaque image à sa façon de résoudre un problème.",
          pairs: [
            ["Le classeur", "Décider vite et ranger l'affaire"],
            ["L'ordinateur", "Continuer à tourner jusqu'à la solution"],
          ],
          explain: "Deux façons différentes, qui peuvent s'enrichir.",
        },
        {
          kind: "choice",
          id: "c10p7e2",
          prompt: "Face à un conflit, quelle tendance cette portion attribue-t-elle souvent à l'homme ?",
          options: ["Culpabiliser", "Garder de la rancune et classer l'affaire", "Tout oublier aussitôt"],
          answer: 1,
          explain: "Connaître cette tendance aide à ne pas laisser la rancune s'installer.",
        },
        {
          kind: "truefalse",
          id: "c10p7e3",
          statement: "Prendre en compte à la fois les faits et les sentiments aide à mieux décider.",
          answer: true,
          explain: "Les projets réussissent quand il y a plusieurs conseillers.",
        },
      ],
      mirror: {
        question: "Y a-t-il une affaire que tu as « rangée dans un tiroir » avec de la rancune ?",
        choices: ["Oui", "Peut-être", "Non", "Je préfère ne pas l'ouvrir"],
      },
      prayer: "Seigneur, aide-moi à ne pas ranger mes blessures avec de la rancune, mais à les régler avec Toi.",
    },
    {
      id: "c10p8",
      title: "Chercher d'abord à combler l'autre",
      reading: [
        "Souvent, le travail d'un homme est un prolongement de sa personnalité, et la maison celui de sa femme. Voilà pourquoi des chaussures boueuses sur la table peuvent la blesser comme si on l'avait salie elle-même, et pourquoi perdre son emploi peut tant ébranler un homme.",
        "L'homme a tendance à aimer l'aventure et les nouveaux horizons professionnels, tandis que beaucoup de femmes ont besoin de racines et de sécurité. Un déménagement peut être une promotion pour lui et un arrachement pour elle. Face à la nouveauté, il observe longtemps, elle s'engage plus vite.",
        "Aucun des deux ne voit le monde en entier. Ensemble, ils voient plus juste. Mais si chacun ne se concentre que sur ses propres besoins, il finit par en vouloir à l'autre au lieu de le voir comme un cadeau de Dieu.",
        "Le secret est simple : cherche d'abord à combler les besoins de l'autre. Bien souvent, celui qui est comblé a envie de combler en retour. Donner plutôt qu'exiger : c'est là que se trouve le vrai bonheur.",
      ],
      keyTruth: "Au lieu d'exiger que mes besoins soient comblés, je cherche d'abord à combler ceux de l'autre.",
      verse: {
        ref: "Luc 6:38",
        text: "Donnez, et il vous sera donné : on versera dans votre sein une bonne mesure, serrée, secouée et qui déborde ; car on vous mesurera avec la mesure dont vous vous serez servis.",
      },
      exercises: [
        {
          kind: "match",
          id: "c10p8e1",
          prompt: "Associe à chacun ce qui prolonge souvent sa personnalité.",
          pairs: [
            ["L'homme", "Son travail"],
            ["La femme", "Sa maison"],
          ],
          explain: "Cela explique bien des réactions qui semblent disproportionnées.",
        },
        {
          kind: "truefalse",
          id: "c10p8e2",
          statement: "Un déménagement pour le travail est vécu de la même façon par chacun dans un couple.",
          answer: false,
          explain: "Une promotion pour l'un peut être un arrachement pour l'autre : il faut patience et douceur.",
        },
        {
          kind: "fill",
          id: "c10p8e3",
          before: "Le secret d'une relation heureuse : chercher d'abord à",
          after: "les besoins de l'autre.",
          options: ["combler", "ignorer", "critiquer"],
          answer: 0,
          explain: "Donnez, et il vous sera donné.",
        },
      ],
      mirror: {
        question: "De qui pourrais-tu chercher à combler un besoin cette semaine ?",
        choices: ["Mon conjoint", "Un parent", "Un enfant", "Un ami", "Un collègue"],
      },
      prayer: "Père, apprends-moi à donner avant d'exiger, et à voir chaque personne comme un cadeau de ta part.",
    },
  ],
};
