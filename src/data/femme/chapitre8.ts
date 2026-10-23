import type { Chapter } from "../types";

// Livre « Le but et la puissance de la femme », chapitre 8 : « La femme qui donne la vie »
// (« The Woman as Life-Giver »). Paraphrase libre en français des idées de l'auteur,
// écrite avec nos propres mots (aucune traduction du texte original). Versets : Louis Segond 1910.

export const chapitre8: Chapter = {
  id: "f8",
  number: 8,
  title: "La femme qui donne la vie",
  theme: "Tout en elle est un sein : la femme reçoit, porte, multiplie et donne la vie.",
  portions: [
    {
      id: "f8p1",
      title: "Ève, celle qui donne la vie",
      reading: [
        "On dit que la pression subie par le corps d'une femme pendant l'accouchement tuerait un homme. Dieu a donné à la femme des capacités extraordinaires pour concevoir, porter un enfant et le mettre au monde. Elle est vraiment une créature merveilleuse.",
        "Après la chute, mais avant de quitter le jardin, Adam a donné un nom à sa femme : Ève, qui signifie « celle qui donne la vie », car elle allait être la mère de tous les vivants. Dieu ne les a pas chassés du jardin avant qu'elle soit nommée : sa capacité de donner la vie fait partie du plan d'origine, pas de la chute.",
        "Pendant la grossesse, tout le corps de la femme se transforme : son utérus prépare un abri chaud et sûr, ses hormones protègent l'enfant, son cerveau change, ses nutriments vont d'abord au bébé, son centre de gravité se déplace. Tout son être se concentre sur la vie qu'elle porte.",
        "C'est le troisième rôle de la femme dans la mission de domination : concevoir, développer et donner vie à ce qu'elle reçoit en elle. Et ce rôle dépasse de loin le corps.",
      ],
      keyTruth: "Donner la vie fait partie du plan d'origine de Dieu pour la femme : c'est une puissante responsabilité, pas une conséquence de la chute.",
      verse: {
        ref: "Genèse 3:20",
        text: "Adam donna à sa femme le nom d'Ève : car elle a été la mère de tous les vivants.",
      },
      exercises: [
        {
          kind: "fill",
          id: "f8p1e1",
          before: "Le nom Ève signifie « celle qui donne la",
          after: "».",
          options: ["vie", "loi", "paix"],
          answer: 0,
          explain: "Elle allait être la mère de tous les vivants.",
        },
        {
          kind: "truefalse",
          id: "f8p1e2",
          statement: "La capacité de donner la vie est une conséquence de la chute.",
          answer: false,
          explain: "Elle fait partie du plan d'origine : Ève a été nommée avant de quitter le jardin.",
        },
        {
          kind: "choice",
          id: "f8p1e3",
          prompt: "Que se passe-t-il dans le corps de la femme pendant la grossesse ?",
          options: ["Presque rien", "Tout son être se transforme pour la vie qu'elle porte", "Seul son ventre change"],
          answer: 1,
          explain: "Hormones, cerveau, nutriments, équilibre : tout se concentre sur l'enfant.",
        },
      ],
      mirror: {
        question: "Comment vois-tu ta capacité à donner la vie, au sens large ?",
        choices: ["Comme un don", "Comme une charge", "Comme une blessure", "Je n'y avais jamais pensé"],
      },
      prayer: "Créateur de la vie, merci de m'avoir faite capable de porter et de donner la vie : que je l'honore comme un don.",
    },
    {
      id: "f8p2",
      title: "Tout en elle est un sein",
      reading: [
        "La femme n'est pas seulement capable de porter un enfant : par nature, elle est une « couveuse ». Elle a un sein physique, mais aussi un sein émotionnel, un sein de l'intelligence et de l'instinct, et un sein spirituel. Tout en elle reçoit, nourrit jusqu'à maturité, puis rend sous une forme accomplie.",
        "Un sein ne rend jamais simplement ce qu'il a reçu : il le multiplie. Donne à une femme une semence, elle te rendra un bébé. Donne-lui une maison, elle te rendra un foyer. Donne-lui des courses, elle te rendra un repas. Donne-lui un sourire, elle te donnera son cœur.",
        "Alors si tu veux développer quelque chose, apporte-le à une femme. Une idée, un projet, un sujet de prière ? Confie-le à une femme. Beaucoup d'hommes parlent de leurs idées à tout le monde sauf à leur épouse. Pourtant, elle reviendra avec le plan, la façon de faire, et même la personne qui financera, et ça marchera.",
        "Beaucoup de femmes ne savent même pas qu'elles portent un but aussi extraordinaire.",
      ],
      keyTruth: "Tout ce qu'on me donne, je le multiplie : une maison devient un foyer, un sourire devient mon cœur.",
      verse: {
        ref: "Romains 4:17",
        text: "Devant celui auquel il a cru, Dieu, qui donne la vie aux morts, et qui appelle les choses qui ne sont point comme si elles étaient.",
      },
      exercises: [
        {
          kind: "match",
          id: "f8p2e1",
          prompt: "Associe ce qu'on donne à la femme à ce qu'elle rend.",
          pairs: [
            ["Une maison", "Un foyer"],
            ["Des courses", "Un repas"],
            ["Un sourire", "Son cœur"],
          ],
          explain: "Un sein ne rend jamais simplement ce qu'il a reçu : il le multiplie.",
        },
        {
          kind: "choice",
          id: "f8p2e2",
          prompt: "Quels « seins » la femme possède-t-elle selon l'auteur ?",
          options: [
            "Seulement physique",
            "Physique, émotionnel, de l'intelligence et spirituel",
            "Aucun en dehors de la grossesse",
          ],
          answer: 1,
          explain: "Sa capacité d'incuber imprègne tous les domaines de sa vie.",
        },
        {
          kind: "truefalse",
          id: "f8p2e3",
          statement: "Un homme qui a une idée de projet ferait bien d'en parler à sa femme.",
          answer: true,
          explain: "Elle la développera et la rendra sous forme de plan complet.",
        },
      ],
      mirror: {
        question: "Qu'as-tu multiplié dernièrement à partir de ce qu'on t'a donné ?",
        choices: ["Une maison en foyer", "Une idée en projet", "Un petit budget en grande provision", "Rien pour l'instant"],
      },
      prayer: "Seigneur, Toi qui donnes la vie, que tout ce qui passe entre mes mains soit multiplié pour ta gloire.",
    },
    {
      id: "f8p3",
      title: "Un service de recherche et développement",
      reading: [
        "Comment la femme « incube »-t-elle en dehors de la grossesse ? Elle voit les possibilités et le potentiel. Elle médite les paroles, les actes, les liens entre les choses. Elle traite les idées, les besoins et les problèmes.",
        "Elle conçoit et invente. Elle développe des idées, des plans et des programmes. Elle protège ce qu'elle a reçu pendant que cela grandit. Elle produit quelque chose de nouveau, et elle multiplie ce qu'on lui donne.",
        "On pourrait dire que la femme est, à elle seule, tout un service de recherche et développement. En cela, elle reflète son Créateur, qui appelle les choses qui ne sont pas comme si elles étaient. Comme Dieu a tiré l'homme de Lui-même, la femme fait naître une vie nouvelle de l'intérieur d'elle-même.",
        "Mais ce don a deux faces. Il peut créer, mais aussi détruire, quand ce que la femme reçoit est malsain pour elle sur le plan émotionnel, psychologique ou spirituel. Parce qu'elle reçoit, elle absorbe les attitudes de ceux qui l'entourent, et les transforme d'une façon qui reste souvent un mystère pour l'homme.",
      ],
      keyTruth: "Je vois le potentiel, je conçois, je développe et je multiplie : mais je dois veiller à ce que je reçois, car je le transforme.",
      verse: {
        ref: "Proverbes 31:16",
        text: "Elle pense à un champ, et elle l'acquiert ; du fruit de son travail elle plante une vigne.",
      },
      exercises: [
        {
          kind: "order",
          id: "f8p3e1",
          prompt: "Remets dans l'ordre le chemin d'une idée chez la femme.",
          items: ["Elle voit le potentiel", "Elle conçoit", "Elle développe et protège", "Elle produit et multiplie"],
          explain: "La femme est tout un service de recherche et développement.",
        },
        {
          kind: "truefalse",
          id: "f8p3e2",
          statement: "Le don d'incuber ne peut produire que du bien.",
          answer: false,
          explain: "Il a deux faces : il peut aussi transformer et amplifier ce qui est malsain.",
        },
        {
          kind: "fill",
          id: "f8p3e3",
          before: "Dieu appelle les choses qui ne sont point comme si elles",
          after: ".",
          options: ["étaient", "mouraient", "fuyaient"],
          answer: 0,
          explain: "La femme reflète ce Créateur qui fait naître la vie.",
        },
      ],
      mirror: {
        question: "Quelle idée ou quel projet portes-tu en ce moment ?",
        choices: ["Un projet familial", "Un projet professionnel", "Un projet pour l'Église", "Un rêve que je n'ose pas dire", "Rien pour l'instant"],
      },
      prayer: "Père, que les idées que je porte viennent de Toi, et que je les développe pour bénir.",
    },
    {
      id: "f8p4",
      title: "Le sein des émotions",
      reading: [
        "Un homme peut se montrer dur ou méprisant envers une femme pendant des années. Elle porte en elle cette amertume, en silence. Puis un jour, elle arrive à terme : « C'en est trop, va-t'en. » Lui ne comprend pas : « Je fais la même chose depuis dix ans ! » Justement : le « bébé » a grandi tout ce temps.",
        "Hommes, attention à ce que vous donnez à une femme : cela vous reviendra, plus fort. Lors d'une dispute, un mari lance mille mots, dont un : « J'aurais aimé ne jamais t'épouser. » Cette seule phrase pénètre son cœur comme une semence. Neuf ans plus tard, il lui dit qu'elle est la plus douce des femmes, et elle répond : « Ce n'est pas ce que tu pensais il y a neuf ans. » Elle se souvient du jour, de l'heure, de sa robe, et de la glace qu'elle mangeait.",
        "Dis à un homme « tu es moche », il répondra « toi aussi » et oubliera. Dis-le à une femme, elle s'en souviendra toujours. Un célibataire qui dit à une femme « tu es magnifique » risque d'avoir bientôt un « bébé » émotionnel : « Tu m'as dit que tu m'aimais ! » « Je plaisantais. » Une remarque sur quelques kilos en trop, et la voilà qui court à l'aube, puis devient insécure, jusqu'à l'explosion le jour où il complimente une autre femme.",
        "Entre femmes aussi, il faut faire attention : une petite remarque sur une coiffure peut être incubée et ressortir deux semaines plus tard. Une femme n'oublie rien. À quatre-vingt-dix ans, elle dit encore de son fils de soixante-dix ans : « C'est mon bébé. »",
      ],
      keyTruth: "Les paroles semées dans le cœur d'une femme grandissent : je fais attention à ce que je dis, car cela reviendra multiplié.",
      verse: {
        ref: "Proverbes 18:21",
        text: "La mort et la vie sont au pouvoir de la langue ; quiconque l'aime en mangera les fruits.",
      },
      exercises: [
        {
          kind: "choice",
          id: "f8p4e1",
          prompt: "Pourquoi une femme semble-t-elle « exploser » soudainement après des années ?",
          options: [
            "Par caprice",
            "Parce qu'elle a porté longtemps ce qu'on lui a donné, et qu'elle arrive à terme",
            "Parce qu'elle a oublié le passé",
          ],
          answer: 1,
          explain: "Le « bébé » de l'amertume a grandi tout ce temps.",
        },
        {
          kind: "truefalse",
          id: "f8p4e2",
          statement: "Une phrase blessante prononcée dans une dispute est vite oubliée par une femme.",
          answer: false,
          explain: "Elle l'incube, parfois pendant des années.",
        },
        {
          kind: "fill",
          id: "f8p4e3",
          before: "La mort et la vie sont au pouvoir de la",
          after: ".",
          options: ["langue", "loi", "force"],
          answer: 0,
          explain: "Proverbes 18:21.",
        },
      ],
      mirror: {
        question: "Portes-tu en toi une parole blessante depuis longtemps ?",
        choices: ["Oui, d'un homme", "Oui, d'une femme", "Oui, d'un parent", "Non", "Je veux la déposer devant Dieu"],
      },
      prayer: "Seigneur, je Te remets les paroles blessantes que je porte : arrache-les de mon cœur avant qu'elles n'enfantent l'amertume.",
    },
    {
      id: "f8p5",
      title: "Le sein de l'esprit",
      reading: [
        "Certains hommes ne veulent pas se marier pour ne pas partager leur argent, et d'autres serrent leur salaire contre eux, persuadés que leur femme en veut à leur argent. Si elle le veut, c'est parce qu'elle est faite pour recevoir et multiplier. Confie-lui vingt dollars en lui faisant confiance, et tu les verras devenir deux cents, deux mille, vingt mille.",
        "Jésus a confié à son épouse, l'Église, douze apôtres. Elle ne Lui rendra pas douze hommes, mais des millions d'hommes, de femmes et d'enfants. Dieu récupérera plus que ce qu'Il a donné, parce qu'Il l'a confié à une « femme ».",
        "Pourquoi les réunions de prière sont-elles surtout fréquentées par des femmes ? Parce qu'elles incubent. Présente-leur un besoin, elles le porteront dans leur sein spirituel, où elles rencontrent Dieu, pendant des mois s'il le faut, jusqu'à la réponse. Si tu veux qu'on prie pour quelque chose, dis-le à une femme.",
        "C'est une veuve qui frappait sans cesse à la porte du juge. C'est une femme cananéenne qui a insisté auprès de Jésus pour sa fille. Et c'est à des femmes que Jésus a confié en premier le message de la résurrection : les hommes s'étaient enfermés, mais les femmes étaient retournées au tombeau. Donne un message à une femme près d'un puits, elle en fera une campagne d'évangélisation !",
      ],
      keyTruth: "Dans mon sein spirituel, je porte les besoins devant Dieu et je ne lâche pas tant que la réponse n'est pas venue.",
      verse: {
        ref: "Matthieu 15:28",
        text: "Alors Jésus lui dit : Femme, ta foi est grande ; qu'il te soit fait comme tu veux. Et, à l'heure même, sa fille fut guérie.",
      },
      exercises: [
        {
          kind: "choice",
          id: "f8p5e1",
          prompt: "À qui Jésus a-t-Il confié en premier le message de la résurrection ?",
          options: ["Aux disciples enfermés", "À des femmes revenues au tombeau", "Aux prêtres"],
          answer: 1,
          explain: "Les hommes s'étaient enfermés ; les femmes étaient retournées au tombeau.",
        },
        {
          kind: "truefalse",
          id: "f8p5e2",
          statement: "Selon l'auteur, il y a souvent plus de femmes aux réunions de prière parce qu'elles incubent les besoins.",
          answer: true,
          explain: "Elles portent un besoin devant Dieu jusqu'à recevoir la réponse.",
        },
        {
          kind: "match",
          id: "f8p5e3",
          prompt: "Associe chaque femme de l'Évangile à sa persévérance.",
          pairs: [
            ["La veuve", "Frappait sans cesse à la porte du juge"],
            ["La Cananéenne", "Insistait auprès de Jésus pour sa fille"],
            ["La Samaritaine", "A annoncé Jésus à toute sa ville"],
          ],
          explain: "Une femme qui porte quelque chose ne lâche pas.",
        },
      ],
      mirror: {
        question: "Quel sujet de prière portes-tu en ce moment ?",
        choices: ["Ma famille", "Mon couple", "Ma santé", "Mon avenir", "Quelqu'un qui ne connaît pas Dieu"],
      },
      prayer: "Seigneur, donne-moi la foi persévérante de la Cananéenne : je ne lâcherai pas tant que Tu n'auras pas répondu.",
    },
    {
      id: "f8p6",
      title: "Elle donne vie aux lieux",
      reading: [
        "La femme a été faite pour donner la vie. Si ta vie manque de vie, il te faut quelqu'un qui en donne. Certains hommes veulent se suffire à eux-mêmes et tiennent les femmes à distance : ils ne savent pas quelle vie ils manquent.",
        "As-tu déjà vu l'appartement d'un homme qui vit seul ? Des couleurs ternes, tout en désordre. On lui dit : « Il te faudrait une touche féminine. » Quand il se marie, sa femme met des rideaux colorés, des fleurs, des tableaux, déplace les meubles, et l'endroit devient beau. Quand une femme entre dans une pièce, elle en change le visage.",
        "Mesdames, votre mari ne peut peut-être pas vous offrir un château tout de suite. Mais prenez le meilleur de ce qu'il vous donne, incubez-le, donnez-lui vie : la maison deviendra un foyer.",
        "Beaucoup de femmes ont des dons d'incubation, mais ont été tellement écrasées par la vie et par les paroles blessantes qu'elles ne s'en servent presque plus. On leur a dit qu'elles n'avaient rien à apporter. Si c'est ton cas, Dieu veut te libérer pour développer les dons, les idées et les visions qu'Il met en toi. N'aie pas peur.",
      ],
      keyTruth: "Là où j'entre, je peux donner la vie : Dieu veut me libérer pour développer les dons qu'Il a mis en moi.",
      verse: {
        ref: "Proverbes 24:3",
        text: "C'est par la sagesse qu'une maison s'élève, et par l'intelligence qu'elle s'affermit.",
      },
      exercises: [
        {
          kind: "fill",
          id: "f8p6e1",
          before: "Quand une femme entre dans une pièce, elle en change le",
          after: ".",
          options: ["visage", "propriétaire", "prix"],
          answer: 0,
          explain: "Elle donne vie aux lieux qu'elle habite.",
        },
        {
          kind: "truefalse",
          id: "f8p6e2",
          statement: "Une femme doit attendre d'avoir un château pour en faire un foyer.",
          answer: false,
          explain: "Elle peut prendre le meilleur de ce qu'elle reçoit et lui donner vie.",
        },
        {
          kind: "choice",
          id: "f8p6e3",
          prompt: "Que veut faire Dieu pour les femmes écrasées par des paroles blessantes ?",
          options: ["Les laisser se taire", "Les libérer pour développer leurs dons", "Les remplacer"],
          answer: 1,
          explain: "Dieu a mis en elles une grande capacité de bénir.",
        },
      ],
      mirror: {
        question: "Quel don as-tu laissé de côté parce qu'on t'a dit que tu n'avais rien à apporter ?",
        choices: ["Un don créatif", "Un don de parole", "Un don d'organisation", "Un don spirituel", "Je ne sais pas encore"],
      },
      prayer: "Père, Toi qui donnes la vie, libère en moi les dons que la peur et les blessures ont étouffés.",
    },
  ],
};
