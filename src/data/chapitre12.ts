import type { Chapter } from "./types";

// Chapitre 12 : « Les clés pour devenir un vrai homme »
// Paraphrase libre en français des idées du chapitre, écrite avec nos propres mots
// et nos propres images (aucune traduction du texte original). Versets : Louis Segond 1910.

export const chapitre12: Chapter = {
  id: "c12",
  number: 12,
  title: "Les clés pour devenir un vrai homme",
  theme: "Dix clés pour que le dessein de Dieu remplisse ta vie et déborde sur les autres.",
  portions: [
    {
      id: "c12p1",
      title: "Né garçon, devenu homme",
      reading: [
        "On naît de sexe masculin, mais on devient un homme. Il est donc possible de vieillir sans jamais devenir l'homme que Dieu avait en tête. Ce parcours t'a montré le chemin ; voici dix clés pour le garder.",
        "Quand Dieu a confié la terre à l'homme, Il en a fait un intendant : quelqu'un à qui l'on confie ce qui appartient à un autre. Un vrai homme prend soin de ce que Dieu lui a confié et aide les autres à vivre leur but.",
        "Première clé : un vrai homme aime Dieu et sa présence. Il aime adorer Celui qui l'a créé et racheté. Ses priorités spirituelles passent avant ses besoins du moment.",
        "Au désert, affamé, Jésus est tenté de changer une pierre en pain. Il répond que l'homme ne vit pas seulement de pain, mais de toute parole qui vient de Dieu. Il savait ce qui comptait le plus.",
      ],
      keyTruth: "On naît garçon, mais on devient homme : et tout commence par l'amour de Dieu et de sa présence.",
      verse: {
        ref: "Matthieu 4:4",
        text: "Jésus répondit : Il est écrit : L'homme ne vivra pas de pain seulement, mais de toute parole qui sort de la bouche de Dieu.",
      },
      exercises: [
        {
          kind: "truefalse",
          id: "c12p1e1",
          statement: "Naître de sexe masculin suffit pour être un vrai homme.",
          answer: false,
          explain: "On naît garçon, mais devenir un homme est un chemin à parcourir avec Dieu.",
        },
        {
          kind: "fill",
          id: "c12p1e2",
          before: "Un intendant est quelqu'un à qui l'on confie ce qui appartient à un",
          after: ".",
          options: ["autre", "ennemi", "enfant"],
          answer: 0,
          explain: "La terre appartient à Dieu : l'homme en prend soin pour Lui.",
        },
        {
          kind: "choice",
          id: "c12p1e3",
          prompt: "Que répond Jésus quand Il est tenté de changer une pierre en pain ?",
          options: [
            "Qu'Il n'a pas faim",
            "Que l'homme ne vit pas seulement de pain, mais de toute parole de Dieu",
            "Qu'Il le fera plus tard",
          ],
          answer: 1,
          explain: "Ses priorités étaient claires : la Parole de Dieu avant les besoins du moment.",
        },
      ],
      mirror: {
        question: "Qu'est-ce qui passe le plus souvent avant Dieu dans ta vie ?",
        choices: ["Mon confort", "Mon travail", "Mes envies", "Mes inquiétudes", "Dieu passe en premier"],
      },
      prayer: "Seigneur, je ne veux pas seulement vieillir : je veux devenir l'homme que Tu avais en tête.",
    },
    {
      id: "c12p2",
      title: "Retrouver l'image",
      reading: [
        "Deuxième clé : un vrai homme cherche à retrouver en lui l'image de Dieu. Il veut revenir au plan d'origine, celui d'un être humain qui reflète la nature de Dieu tout en vivant sur la terre.",
        "Il ne se laisse pas séduire par les contrefaçons de la virilité que présentent les films, les clips ou les réseaux. Il ne veut pas ressembler au héros du moment : il veut ressembler à son Père.",
        "Cette transformation ne se fait pas en un jour. En contemplant le Seigneur, comme dans un miroir, nous sommes transformés peu à peu à son image. C'est ce que tu fais chaque fois que tu prends un moment « face au miroir » avec Lui.",
        "Le but n'est pas d'être parfait demain, mais de ressembler un peu plus au Christ chaque jour.",
      ],
      keyTruth: "Je ne veux pas copier les contrefaçons du monde : je veux retrouver en moi l'image de mon Père.",
      verse: {
        ref: "2 Corinthiens 3:18",
        text: "Nous tous qui, le visage découvert, contemplons comme dans un miroir la gloire du Seigneur, nous sommes transformés en la même image, de gloire en gloire, comme par le Seigneur, l'esprit.",
      },
      exercises: [
        {
          kind: "choice",
          id: "c12p2e1",
          prompt: "À qui un vrai homme cherche-t-il à ressembler ?",
          options: ["Au héros du moment", "À son Père céleste", "À ses amis"],
          answer: 1,
          explain: "Il refuse les contrefaçons et revient au modèle d'origine.",
        },
        {
          kind: "fill",
          id: "c12p2e2",
          before: "En contemplant le Seigneur, nous sommes transformés en la même image, de gloire en",
          after: ".",
          options: ["gloire", "honte", "or"],
          answer: 0,
          explain: "2 Corinthiens 3:18 : une transformation progressive.",
        },
        {
          kind: "truefalse",
          id: "c12p2e3",
          statement: "La transformation à l'image du Christ se fait en un seul jour.",
          answer: false,
          explain: "Elle est progressive : un peu plus chaque jour.",
        },
      ],
      mirror: {
        question: "Quel modèle de virilité t'a le plus influencé jusqu'ici ?",
        choices: ["Les films ou les séries", "Les réseaux sociaux", "Mon père", "Un mentor", "Jésus"],
      },
      prayer: "Seigneur, en Te contemplant, transforme-moi de gloire en gloire à ton image.",
    },
    {
      id: "c12p3",
      title: "Père et travail",
      reading: [
        "Troisième clé : un vrai homme aime travailler et développer ses dons. Jésus avait deux mots qui revenaient sans cesse : « Père » et « œuvre ». Il parlait de son Père, et Il voulait accomplir l'œuvre que le Père Lui avait confiée.",
        "Un vrai homme n'est pas paresseux. Il a une vision et il est prêt à travailler pour elle. Aux yeux de Dieu, un homme qui travaille et se trompe vaut mieux qu'un homme qui ne fait rien.",
        "Mais il ne travaille pas seulement pour payer ses factures. Dans le jardin, il n'y avait ni patron ni fiche de paie : le travail faisait partie de la nature d'Adam. Jésus invite à travailler pour ce qui dure, pas seulement pour ce qui passe.",
        "Dans la parabole, le serviteur qui a reçu cinq talents les a aussitôt fait travailler, et ils ont doublé. Dieu veut que nous fassions fructifier ce qu'Il nous confie pour son Royaume.",
      ],
      keyTruth: "Je travaille pour accomplir l'œuvre du Père et faire fructifier mes dons, pas seulement pour payer mes factures.",
      verse: {
        ref: "Jean 4:34",
        text: "Jésus leur dit : Ma nourriture est de faire la volonté de celui qui m'a envoyé, et d'accomplir son œuvre.",
      },
      exercises: [
        {
          kind: "match",
          id: "c12p3e1",
          prompt: "Associe les deux mots préférés de Jésus à ce qu'ils révèlent.",
          pairs: [
            ["Père", "Sa relation avec Dieu"],
            ["Œuvre", "Sa mission à accomplir"],
          ],
          explain: "Un vrai homme vit dans la présence du Père et accomplit son œuvre.",
        },
        {
          kind: "truefalse",
          id: "c12p3e2",
          statement: "Aux yeux de Dieu, mieux vaut ne rien faire que risquer de se tromper.",
          answer: false,
          explain: "Un homme qui travaille et se trompe vaut mieux qu'un homme qui ne fait rien.",
        },
        {
          kind: "choice",
          id: "c12p3e3",
          prompt: "Qu'a fait le serviteur qui avait reçu cinq talents ?",
          options: ["Il les a cachés", "Il les a fait travailler aussitôt", "Il les a dépensés"],
          answer: 1,
          explain: "Mis au travail, ses talents ont doublé.",
        },
      ],
      mirror: {
        question: "Quel don Dieu t'a-t-il confié que tu pourrais faire fructifier davantage ?",
        choices: ["Un talent créatif", "Une compétence professionnelle", "Le contact humain", "L'enseignement", "Je cherche encore"],
      },
      prayer: "Père, que ma nourriture soit de faire ta volonté et d'accomplir l'œuvre que Tu m'as confiée.",
    },
    {
      id: "c12p4",
      title: "La famille avant soi",
      reading: [
        "Quatrième clé : un vrai homme honore son mariage et sa famille plus que ses intérêts personnels. Ce n'est pas un hasard si le premier miracle de Jésus a eu lieu à un mariage, à Cana : son ministère s'ouvre en soutenant une famille.",
        "Jésus est comme un fiancé qui attend ses noces. Le Saint-Esprit est un peu comme la bague de fiançailles qu'Il a offerte à son Église : la promesse qu'Il reviendra la chercher.",
        "Et ce fiancé a donné sa vie pour celle qu'Il aime. C'est le modèle de tout mari : aimer sa femme comme le Christ a aimé l'Église, et faire passer les besoins des siens avant les siens.",
        "Quelques hommes qui vivraient vraiment cela pourraient changer l'image de la famille dans tout un pays.",
      ],
      keyTruth: "Comme le Christ a donné sa vie pour son Église, je fais passer ma famille avant mes intérêts.",
      verse: {
        ref: "Jean 2:11",
        text: "Tel fut, à Cana en Galilée, le premier des miracles que fit Jésus. Il manifesta sa gloire, et ses disciples crurent en lui.",
      },
      exercises: [
        {
          kind: "choice",
          id: "c12p4e1",
          prompt: "Où Jésus a-t-il fait son premier miracle ?",
          options: ["Au temple de Jérusalem", "À un mariage à Cana", "Sur la mer de Galilée"],
          answer: 1,
          explain: "Son ministère s'ouvre en soutenant une famille.",
        },
        {
          kind: "fill",
          id: "c12p4e2",
          before: "Le Saint-Esprit est comme la bague de",
          after: "offerte par le Christ à son Église.",
          options: ["fiançailles", "victoire", "famille"],
          answer: 0,
          explain: "C'est la promesse qu'Il reviendra chercher son épouse.",
        },
        {
          kind: "truefalse",
          id: "c12p4e3",
          statement: "Un vrai homme fait passer ses intérêts personnels avant sa famille.",
          answer: false,
          explain: "Comme le Christ, il fait passer les besoins des siens avant les siens.",
        },
      ],
      mirror: {
        question: "Qu'est-ce qui, chez toi, entre parfois en concurrence avec ta famille ?",
        choices: ["Mon travail", "Mes loisirs", "Mon téléphone", "Mes amis", "Rien en ce moment"],
      },
      prayer: "Jésus, Toi qui as donné ta vie pour ton Église, apprends-moi à me donner pour ma famille.",
    },
    {
      id: "c12p5",
      title: "Briller comme des flambeaux",
      reading: [
        "Cinquième clé : un vrai homme apprend la Parole de Dieu, la vit et l'enseigne. Dès le jardin, Dieu a établi ce principe : l'homme ne vit pas seulement de pain, mais de sa Parole.",
        "Un vrai homme est un homme de principes. Il sait que son esprit s'affaiblit s'il n'est pas nourri par la Parole. Elle est la règle de sa vie, et il la transmet à sa famille.",
        "En laissant la Parole transformer sa vie, il devient comme un morceau du jardin de Dieu qui se déplace dans le monde. Là où il passe, la présence de Dieu se répand.",
        "Paul dit que les enfants de Dieu brillent comme des flambeaux au milieu d'une génération tordue. Ta lampe, celle que tu allumes chaque jour dans cette appli, est faite pour éclairer bien au-delà de toi.",
      ],
      keyTruth: "Nourri par la Parole, je deviens un flambeau qui porte la présence de Dieu partout où je vais.",
      verse: {
        ref: "Philippiens 2:15",
        text: "Afin que vous soyez irréprochables et purs, des enfants de Dieu irrépréhensibles au milieu d'une génération perverse et corrompue, parmi laquelle vous brillez comme des flambeaux dans le monde.",
      },
      exercises: [
        {
          kind: "order",
          id: "c12p5e1",
          prompt: "Remets dans l'ordre la cinquième clé.",
          items: ["Apprendre la Parole", "La vivre", "L'enseigner"],
          explain: "On ne transmet bien que ce qu'on a d'abord reçu et vécu.",
        },
        {
          kind: "fill",
          id: "c12p5e2",
          before: "Les enfants de Dieu brillent comme des",
          after: "dans le monde.",
          options: ["flambeaux", "miroirs", "étoiles filantes"],
          answer: 0,
          explain: "Philippiens 2:15 : une lumière au milieu d'une génération tordue.",
        },
        {
          kind: "truefalse",
          id: "c12p5e3",
          statement: "Un homme qui vit la Parole porte la présence de Dieu là où il va.",
          answer: true,
          explain: "Il devient comme un morceau du jardin de Dieu qui se répand dans le monde.",
        },
      ],
      mirror: {
        question: "Où ta lumière pourrait-elle briller davantage ?",
        choices: ["À la maison", "Au travail", "Dans mon quartier", "Sur les réseaux", "À l'église"],
      },
      prayer: "Seigneur, que ta Parole allume en moi un flambeau qui éclaire tous ceux que je croise.",
    },
    {
      id: "c12p6",
      title: "Celui qui fait croire",
      reading: [
        "Sixième clé : un vrai homme vit par la foi et l'inspire aux autres. Jésus a dit : « Rien n'est impossible à Dieu. » Il ne l'a pas seulement dit, Il le croyait. C'est pour cela que le mendiant, la femme rejetée et le religieux venaient tous à Lui.",
        "Les fausses images de l'homme n'ont pas de foi : « Monter ton projet ? Garde plutôt ton poste, c'est plus sûr. » Un vrai homme sait qu'aucun emploi ne donne la vraie sécurité. Il peut avoir peur, mais il ne se laisse pas ronger par l'inquiétude, car il fait confiance à Dieu.",
        "Il est de ceux qui disent : « Tu peux y arriver. Tout le monde tombe un jour : relève-toi et réessaie. » La foi, c'est croire ce que Dieu a dit, pas ce qu'on voit.",
        "Septième clé : un vrai homme aide les autres à devenir le meilleur d'eux-mêmes. Il prie pour savoir comment faire grandir sa femme et ses enfants, et il se réjouit de voir leurs dons s'épanouir, comme Dieu se réjouit de nous voir utiliser les nôtres.",
      ],
      keyTruth: "Je veux être un homme qui fait croire aux autres que rien n'est impossible à Dieu.",
      verse: {
        ref: "Luc 1:37",
        text: "Car rien n'est impossible à Dieu.",
      },
      exercises: [
        {
          kind: "fill",
          id: "c12p6e1",
          before: "Car rien n'est",
          after: "à Dieu.",
          options: ["impossible", "caché", "trop petit"],
          answer: 0,
          explain: "Luc 1:37 : une promesse qui inspire la foi.",
        },
        {
          kind: "choice",
          id: "c12p6e2",
          prompt: "Qu'est-ce que la foi selon cette portion ?",
          options: ["Croire ce qu'on voit", "Croire ce que Dieu a dit", "Ne jamais avoir peur"],
          answer: 1,
          explain: "On peut avoir peur et pourtant faire confiance à Dieu.",
        },
        {
          kind: "truefalse",
          id: "c12p6e3",
          statement: "Un vrai homme se réjouit de voir les dons des siens s'épanouir.",
          answer: true,
          explain: "Comme Dieu se réjouit de nous voir utiliser nos dons pour sa gloire.",
        },
      ],
      mirror: {
        question: "Qui aurait besoin d'entendre « tu peux y arriver » de ta part ?",
        choices: ["Un enfant", "Mon conjoint", "Un ami", "Un collègue", "Moi-même"],
      },
      prayer: "Seigneur, fais de moi quelqu'un qui relève les autres et leur fait croire que rien ne T'est impossible.",
    },
    {
      id: "c12p7",
      title: "Compassion, miséricorde et justice",
      reading: [
        "Huitième clé : un vrai homme aime la compassion, la miséricorde et la justice. C'est là que se révèle la vraie force.",
        "La compassion, c'est une passion qui veut libérer. Chaque fois que Jésus était ému de compassion, Il agissait : Il nourrissait la foule affamée, Il guidait ceux qui étaient comme des brebis sans berger. Avoir de la compassion, c'est mettre sa force au service des besoins des autres.",
        "La miséricorde, c'est ne pas traiter quelqu'un comme il le mérite quand il nous a fait du tort. Dieu nous a fait miséricorde : le Christ est mort pour nous alors que nous étions encore pécheurs. Au lieu de nous venger, nous pardonnons et nous montrons le chemin vers Lui.",
        "La justice, c'est agir avec droiture envers les autres. Dieu déteste l'injustice. Un vrai homme marche humblement avec Lui et défend ce qui est juste.",
      ],
      keyTruth: "Ma force se révèle dans la compassion qui libère, la miséricorde qui pardonne et la justice qui défend.",
      verse: {
        ref: "Michée 6:8",
        text: "On t'a fait connaître, ô homme, ce qui est bien ; et ce que l'Éternel demande de toi, c'est que tu pratiques la justice, que tu aimes la miséricorde, et que tu marches humblement avec ton Dieu.",
      },
      exercises: [
        {
          kind: "match",
          id: "c12p7e1",
          prompt: "Associe chaque vertu à sa définition.",
          pairs: [
            ["Compassion", "Mettre sa force au service des besoins des autres"],
            ["Miséricorde", "Ne pas traiter quelqu'un comme il le mérite"],
            ["Justice", "Agir avec droiture envers les autres"],
          ],
          explain: "Trois vertus qui reflètent le cœur de Dieu.",
        },
        {
          kind: "truefalse",
          id: "c12p7e2",
          statement: "Chez Jésus, la compassion restait un simple sentiment.",
          answer: false,
          explain: "Chaque fois qu'Il était ému de compassion, Il agissait.",
        },
        {
          kind: "order",
          id: "c12p7e3",
          prompt: "Remets dans l'ordre ce que l'Éternel demande selon Michée 6:8.",
          items: ["Pratiquer la justice", "Aimer la miséricorde", "Marcher humblement avec Dieu"],
          explain: "Un résumé de la vie qui plaît à Dieu.",
        },
      ],
      mirror: {
        question: "Envers qui as-tu besoin de faire miséricorde en ce moment ?",
        choices: ["Un membre de ma famille", "Un ancien ami", "Un collègue", "Moi-même", "Personne pour l'instant"],
      },
      prayer: "Seigneur, apprends-moi à pratiquer la justice, à aimer la miséricorde et à marcher humblement avec Toi.",
    },
    {
      id: "c12p8",
      title: "Se tenir à la brèche",
      reading: [
        "Neuvième clé : un vrai homme cherche d'abord le Royaume de Dieu. Les vies brisées le touchent, et il se réjouit quand quelqu'un est libéré. Quand ses disciples sont revenus de mission, Jésus a tressailli de joie : leurs noms étaient inscrits dans les cieux.",
        "Dixième clé : un vrai homme se garde en Dieu. Il ne prend pas sa présence pour acquise, il veille sur son cœur, et il s'appuie de tout son poids sur Celui qui peut le préserver de toute chute.",
        "Dieu cherche des hommes qui se tiennent à la brèche pour leur pays, leur ville, leur famille. Il veut restaurer des couples brisés et des familles blessées, et Il attend des hommes comme toi. Peu importe ton histoire ou celle de ton peuple : ton passé n'est pas ton avenir.",
        "Tu as parcouru tout ce livre, portion après portion. Que ceux qui regardent ta vie puissent dire un jour : « Maintenant, je sais à quoi ressemble un vrai homme. » Continue de méditer, et pour aller plus loin, procure-toi le livre original.",
      ],
      keyTruth: "Dieu cherche des hommes qui se tiennent à la brèche : avec Lui, je peux être l'un d'eux.",
      verse: {
        ref: "Jude 24",
        text: "Or, à celui qui peut vous préserver de toute chute et vous faire paraître devant sa gloire irrépréhensibles et dans l'allégresse.",
      },
      exercises: [
        {
          kind: "choice",
          id: "c12p8e1",
          prompt: "Qu'est-ce qui a fait tressaillir Jésus de joie au retour de ses disciples ?",
          options: ["Leur célébrité", "Que leurs noms soient inscrits dans les cieux", "Leurs richesses"],
          answer: 1,
          explain: "La plus grande joie, c'est le salut des âmes.",
        },
        {
          kind: "truefalse",
          id: "c12p8e2",
          statement: "Un vrai homme peut prendre la présence de Dieu pour acquise.",
          answer: false,
          explain: "Il veille sur son cœur et s'appuie sur Celui qui peut le préserver de toute chute.",
        },
        {
          kind: "match",
          id: "c12p8e3",
          prompt: "Associe ces clés à leur sens.",
          pairs: [
            ["Le Royaume d'abord", "Avoir à cœur le salut des autres"],
            ["Se garder en Dieu", "Veiller sur son cœur et s'appuyer sur Lui"],
            ["Se tenir à la brèche", "Intercéder et agir pour les siens"],
          ],
          explain: "Les dernières clés tournent l'homme vers Dieu et vers les autres.",
        },
      ],
      mirror: {
        question: "Après tout ce parcours, quel changement veux-tu garder en priorité ?",
        choices: ["Rester dans la présence de Dieu", "Vivre ma vision", "Mieux aimer ma famille", "Servir les autres", "Tout recommencer depuis le début"],
      },
      prayer: "Père, me voici : fais de moi un homme qui se tient à la brèche, et garde-moi jusqu'au bout dans ta joie.",
    },
  ],
};
