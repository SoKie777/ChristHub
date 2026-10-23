import type { Chapter } from "../types";

// Livre « Le but et la puissance de la femme », chapitre 3 : « Le but et la nature de l'humanité »
// Paraphrase libre en français des idées de l'auteur, écrite avec nos propres mots
// (aucune traduction du texte original). Versets : Louis Segond 1910.

export const chapitre3: Chapter = {
  id: "f3",
  number: 3,
  title: "Le but et la nature de l'humanité",
  theme: "Créée par amour et pour l'amour : la femme porte le même esprit que l'homme, dans une maison différente.",
  portions: [
    {
      id: "f3p1",
      title: "Relation et vocation",
      reading: [
        "Pour comprendre la femme, il faut revenir aux deux premiers êtres humains, car ils nous représentent tous. En créant l'humanité, Dieu avait deux grands buts : la relation et la vocation.",
        "La relation, c'est sa raison personnelle : Il nous a créés pour vivre une relation avec Lui. La vocation, c'est sa raison « professionnelle » : l'œuvre qu'Il nous a confiée sur la terre.",
        "Genèse 1 est un chapitre de déclaration : il annonce ce que Dieu a fait. Genèse 2 est un chapitre d'explication : il raconte comment Il l'a fait.",
        "Quatre questions vont nous guider : pourquoi Dieu a-t-Il créé l'homme ? Que signifie être créé à son image ? Que veut dire dominer sur la terre ? Et pourquoi Dieu a-t-Il fait l'homme et la femme ?",
      ],
      keyTruth: "Dieu m'a créée pour deux raisons : vivre une relation avec Lui et accomplir une mission sur la terre.",
      verse: {
        ref: "Genèse 1:27",
        text: "Dieu créa l'homme à son image, il le créa à l'image de Dieu, il créa l'homme et la femme.",
      },
      exercises: [
        {
          kind: "match",
          id: "f3p1e1",
          prompt: "Associe chaque but de la création à son sens.",
          pairs: [
            ["La relation", "Vivre une relation d'amour avec Dieu"],
            ["La vocation", "Accomplir l'œuvre qu'Il nous confie sur la terre"],
          ],
          explain: "Une raison personnelle et une raison « professionnelle » : les deux buts de Dieu.",
        },
        {
          kind: "match",
          id: "f3p1e2",
          prompt: "Associe chaque chapitre de la Genèse à son rôle.",
          pairs: [
            ["Genèse 1", "Déclare ce que Dieu a fait"],
            ["Genèse 2", "Explique comment Il l'a fait"],
          ],
          explain: "L'un annonce, l'autre détaille.",
        },
        {
          kind: "truefalse",
          id: "f3p1e3",
          statement: "Adam et Ève représentent toute l'humanité.",
          answer: true,
          explain: "C'est pourquoi on revient à eux pour comprendre l'homme et la femme.",
        },
      ],
      mirror: {
        question: "Lequel de ces deux buts vis-tu le plus aujourd'hui ?",
        choices: ["La relation avec Dieu", "Ma mission sur la terre", "Les deux", "Aucun des deux pour l'instant"],
      },
      prayer: "Seigneur, je veux vivre avec Toi et accomplir l'œuvre que Tu m'as confiée.",
    },
    {
      id: "f3p2",
      title: "Créée pour être aimée",
      reading: [
        "Pourquoi Dieu a-t-Il créé l'homme ? Par amour. Dieu ne donne pas seulement de l'amour : Il est amour. Il pourrait être saint, juste et tout-puissant tout seul. Mais l'amour, lui, ne peut pas exister dans l'isolement : il a besoin de quelqu'un à aimer.",
        "Dieu a créé les étoiles, les galaxies, les animaux, et Il a vu que c'était bon. Mais Il ne pouvait pas vraiment les aimer, car ils n'étaient pas comme Lui. Pour qu'un don soit complet, celui qui reçoit doit être semblable à celui qui donne.",
        "Voilà pourquoi Dieu a créé l'homme à son image : pour avoir quelqu'un à aimer, capable de L'aimer en retour. Toute l'humanité, toi comprise, a été créée pour être aimée de Dieu.",
        "Quand l'humanité L'a rejeté, pourquoi n'a-t-Il pas recommencé avec une autre race ? Parce que Dieu n'est pas infidèle : son amour ne dépend pas de ce que fait celui qu'Il aime. Tant que Dieu n'a pas sa place dans ton cœur, tu resteras seule, même entourée.",
      ],
      keyTruth: "J'ai été créée pour être aimée de Dieu, d'un amour qui ne dépend pas de ce que je fais.",
      verse: {
        ref: "Jérémie 31:3",
        text: "De loin l'Éternel se montre à moi : Je t'aime d'un amour éternel ; c'est pourquoi je te conserve ma bonté.",
      },
      exercises: [
        {
          kind: "fill",
          id: "f3p2e1",
          before: "Dieu ne donne pas seulement de l'amour : Il",
          after: "amour.",
          options: ["est", "cherche", "vend"],
          answer: 0,
          explain: "1 Jean 4:8 : Dieu est amour.",
        },
        {
          kind: "choice",
          id: "f3p2e2",
          prompt: "Pourquoi Dieu ne pouvait-Il pas vraiment aimer les étoiles ou les animaux ?",
          options: ["Parce qu'ils sont trop nombreux", "Parce qu'ils n'étaient pas semblables à Lui", "Parce qu'ils étaient mauvais"],
          answer: 1,
          explain: "Pour qu'un don soit complet, celui qui reçoit doit être semblable à celui qui donne.",
        },
        {
          kind: "truefalse",
          id: "f3p2e3",
          statement: "L'amour de Dieu dépend de ce que nous faisons.",
          answer: false,
          explain: "Son amour est pur et inconditionnel : c'est pourquoi Il n'a pas recommencé avec une autre race.",
        },
      ],
      mirror: {
        question: "Crois-tu que Dieu t'aime vraiment, telle que tu es ?",
        choices: ["Oui, profondément", "Dans ma tête, pas dans mon cœur", "J'ai du mal à y croire", "Je veux le découvrir"],
      },
      prayer: "Père, merci de m'aimer d'un amour éternel : que ce soit Toi qui remplisses mon cœur avant tout autre.",
    },
    {
      id: "f3p3",
      title: "Il y a un « homme » dans la femme",
      reading: [
        "Être créé à l'image de Dieu, c'est être tiré de Lui. Dieu est Esprit : Il a donc créé l'homme esprit. Aucun autre être, pas même les anges, n'a été créé à son image.",
        "Attention : à ce stade, on parle de l'« homme » au sens de l'humanité, de l'esprit. Or un esprit n'a pas de sexe. Dieu a ensuite placé cet esprit-homme dans deux formes physiques : le mâle et la femelle. L'essence de l'un comme de l'autre, c'est l'esprit qui habite en eux.",
        "Il y a donc un « homme » dans la femme. Genèse 5 le dit : Dieu les créa homme et femme, et Il les appela « homme ». Mon épouse n'est pas une « non-homme » : nous sommes tous deux « homme ».",
        "Certains disent : « Je ne crois pas aux femmes prédicatrices. » Ils oublient qu'il y a un « homme » dans la femme. Si une femme qui prêche te dérange, ferme les yeux et écoute : laisse l'homme en elle prêcher. Dieu s'adresse à l'être intérieur.",
      ],
      keyTruth: "Je suis d'abord un esprit créé à l'image de Dieu : il y a un « homme » dans la femme.",
      verse: {
        ref: "Jean 4:24",
        text: "Dieu est Esprit, et il faut que ceux qui l'adorent l'adorent en esprit et en vérité.",
      },
      exercises: [
        {
          kind: "truefalse",
          id: "f3p3e1",
          statement: "Un esprit a un sexe, masculin ou féminin.",
          answer: false,
          explain: "L'esprit-homme n'a pas de sexe : il a été placé dans deux maisons, le mâle et la femelle.",
        },
        {
          kind: "choice",
          id: "f3p3e2",
          prompt: "Selon Genèse 5:2, comment Dieu a-t-Il appelé l'homme et la femme ensemble ?",
          options: ["Adam et Ève", "« Homme »", "Ses serviteurs"],
          answer: 1,
          explain: "Il les créa homme et femme, et Il les appela « homme ».",
        },
        {
          kind: "fill",
          id: "f3p3e3",
          before: "Si une femme qui prêche te dérange, ferme les yeux et laisse",
          after: "en elle prêcher.",
          options: ["l'homme", "l'ange", "l'enfant"],
          answer: 0,
          explain: "Il y a un « homme », un esprit, dans la femme : Dieu s'adresse à l'être intérieur.",
        },
      ],
      mirror: {
        question: "Te vois-tu d'abord comme une femme, ou comme un esprit créé à l'image de Dieu ?",
        choices: ["D'abord comme une femme", "Comme un esprit à son image", "Les deux", "Je n'y avais jamais pensé"],
      },
      prayer: "Père, Tu es Esprit : apprends-moi à T'adorer en esprit et en vérité, avec tout mon être intérieur.",
    },
    {
      id: "f3p4",
      title: "Chacun répond de lui-même",
      reading: [
        "Devant Dieu, ton esprit ne dépend pas de ton conjoint. Beaucoup d'hommes déposent leur femme à l'église en pensant : « C'est elle la spirituelle de la maison, elle priera pour les enfants et pour moi ; moi, je vais au match. » Mais chaque esprit est responsable devant Dieu.",
        "Beaucoup de femmes, de leur côté, attendent que leur mari se convertisse pour adorer Dieu. Mais si ton mari ne s'intéresse pas à Dieu, cela ne change rien à ta propre adoration. Dieu ne te dira pas : « Puisque ton mari ne M'adorait pas, tu étais dispensée. »",
        "C'est pour cela que la Bible dit que tous ont péché, et pas « les hommes et les femmes ». Et quand une épouse se convertit, son mari n'est pas automatiquement sauvé : c'est un autre esprit. Le conjoint croyant sanctifie l'autre, il le garde dans un environnement où Dieu peut l'atteindre, mais chacun doit venir à Dieu lui-même.",
        "Parce qu'on a oublié que le même esprit habite l'homme et la femme, ils se battent pour savoir qui domine. Mais aucun n'est supérieur : ils sont de la même essence.",
      ],
      keyTruth: "Ma relation avec Dieu ne dépend ni de mon mari ni de personne : je réponds de moi-même devant Lui.",
      verse: {
        ref: "Romains 14:12",
        text: "Ainsi chacun de nous rendra compte à Dieu pour lui-même.",
      },
      exercises: [
        {
          kind: "truefalse",
          id: "f3p4e1",
          statement: "Une femme peut attendre que son mari se convertisse avant d'adorer Dieu.",
          answer: false,
          explain: "Sa propre adoration ne dépend pas de celle de son mari : chacun répond de lui-même.",
        },
        {
          kind: "choice",
          id: "f3p4e2",
          prompt: "Que fait le conjoint croyant pour le conjoint non croyant ?",
          options: [
            "Il le sauve automatiquement",
            "Il le sanctifie : il le garde dans un environnement où Dieu peut l'atteindre",
            "Rien du tout",
          ],
          answer: 1,
          explain: "Mais le conjoint non croyant doit encore venir à Dieu par lui-même.",
        },
        {
          kind: "fill",
          id: "f3p4e3",
          before: "L'homme et la femme ne sont pas supérieurs l'un à l'autre : ils sont de la même",
          after: ".",
          options: ["essence", "taille", "humeur"],
          answer: 0,
          explain: "Le même esprit habite l'un et l'autre.",
        },
      ],
      mirror: {
        question: "Ta vie spirituelle dépend-elle trop de quelqu'un d'autre ?",
        choices: ["De mon conjoint", "De mes parents", "De mon pasteur", "Non, elle m'appartient"],
      },
      prayer: "Seigneur, je viens à Toi pour moi-même : que ma foi tienne debout, quoi que fassent les autres.",
    },
    {
      id: "f3p5",
      title: "Régner et refléter",
      reading: [
        "En plus de la relation, Dieu a créé l'homme pour une vocation : dominer sur la terre. Et comme l'« homme » désigne l'esprit présent dans les deux, cette mission a été donnée à l'homme et à la femme. Spirituellement, ils ont la même responsabilité envers la terre.",
        "Dominer, c'est d'abord prendre soin. Comme Adam devait cultiver et garder le jardin, l'humanité doit cultiver et garder toute la terre, et la façonner avec la créativité que Dieu lui a donnée.",
        "Mais la mission va plus loin. Selon Éphésiens 3, Dieu veut que sa sagesse soit révélée, par l'Église, aux puissances du monde invisible. Si le diable veut savoir à quoi ressemble Dieu, il est censé nous regarder !",
        "Hélas, beaucoup d'entre nous montrent plutôt au diable à quoi il ressemble lui-même. Notre vocation est de refléter la sagesse, la créativité et la gloire de Celui qui nous a créés.",
      ],
      keyTruth: "Homme et femme ont reçu la même mission : prendre soin de la terre et refléter la sagesse de Dieu jusque dans le monde invisible.",
      verse: {
        ref: "Éphésiens 3:10",
        text: "Afin que les dominations et les autorités dans les lieux célestes connaissent aujourd'hui par l'Église la sagesse infiniment variée de Dieu.",
      },
      exercises: [
        {
          kind: "truefalse",
          id: "f3p5e1",
          statement: "La mission de dominer sur la terre a été donnée seulement à l'homme masculin.",
          answer: false,
          explain: "Elle a été donnée à l'« homme », l'esprit présent dans l'homme et dans la femme.",
        },
        {
          kind: "choice",
          id: "f3p5e2",
          prompt: "Selon Éphésiens 3, à qui la sagesse de Dieu doit-elle être révélée par l'Église ?",
          options: ["Aux seuls croyants", "Aux puissances du monde invisible", "Aux animaux"],
          answer: 1,
          explain: "Si le diable veut savoir à quoi ressemble Dieu, il est censé nous regarder.",
        },
        {
          kind: "fill",
          id: "f3p5e3",
          before: "Dominer la terre, c'est d'abord en prendre",
          after: ".",
          options: ["soin", "possession", "peur"],
          answer: 0,
          explain: "Comme Adam devait cultiver et garder le jardin.",
        },
      ],
      mirror: {
        question: "Si quelqu'un regardait ta vie cette semaine, que verrait-il de Dieu ?",
        choices: ["Sa bonté", "Sa paix", "Pas grand-chose", "Je préfère ne pas y penser"],
      },
      prayer: "Père, que ma vie reflète ta sagesse et ta gloire, aux yeux des hommes comme du monde invisible.",
    },
    {
      id: "f3p6",
      title: "Créé et façonné",
      reading: [
        "La Bible utilise deux verbes différents. « Créer » (bara) veut dire faire à partir de rien. « Faire » (asah) veut dire former à partir de ce qui existe déjà. Dieu a créé l'homme et Il l'a aussi fait.",
        "L'esprit de l'homme a été créé à partir de rien : il est sorti de Dieu, par sa parole, comme la lumière. Mais pour le mâle et la femelle, Dieu a utilisé la matière qu'Il avait déjà créée.",
        "Pour que l'esprit-homme puisse dominer sur une terre physique, Dieu lui a donné un corps. Il a formé une maison avec la poussière du sol, le mâle, et Il y a fait habiter l'esprit. Une partie de l'homme vient de l'Esprit de Dieu, une autre de la poussière.",
        "Puis Dieu l'a placé dans le jardin pour régner sur ce qu'Il avait créé, la terre, à travers ce qu'Il avait fait, le corps de l'homme. Les esprits n'ont pas de sexe, mais les maisons dans lesquelles ils habitent en ont un.",
      ],
      keyTruth: "Mon esprit vient de Dieu, mon corps de la terre : mon esprit n'a pas de sexe, ma maison en a un.",
      verse: {
        ref: "Genèse 2:7",
        text: "L'Éternel Dieu forma l'homme de la poussière de la terre, il souffla dans ses narines un souffle de vie et l'homme devint un être vivant.",
      },
      exercises: [
        {
          kind: "match",
          id: "f3p6e1",
          prompt: "Associe chaque verbe hébreu à son sens.",
          pairs: [
            ["Bara (créer)", "Faire à partir de rien"],
            ["Asah (faire)", "Former à partir de ce qui existe"],
          ],
          explain: "L'esprit a été créé de rien ; le corps a été formé de la poussière.",
        },
        {
          kind: "choice",
          id: "f3p6e2",
          prompt: "De quoi Dieu a-t-Il formé le corps du mâle ?",
          options: ["De la poussière du sol", "D'une côte", "De rien"],
          answer: 0,
          explain: "Genèse 2:7 : la poussière de la terre, puis le souffle de vie.",
        },
        {
          kind: "truefalse",
          id: "f3p6e3",
          statement: "Les esprits ont un sexe, mais pas les corps.",
          answer: false,
          explain: "C'est l'inverse : l'esprit n'a pas de sexe, la maison physique en a un.",
        },
      ],
      mirror: {
        question: "Prends-tu soin de la « maison » que Dieu t'a donnée, ton corps ?",
        choices: ["Oui, plutôt bien", "Je la néglige", "Je ne l'aime pas beaucoup", "J'essaie de mieux faire"],
      },
      prayer: "Seigneur, merci pour mon esprit qui vient de Toi et pour mon corps que Tu as formé : que les deux Te glorifient.",
    },
    {
      id: "f3p7",
      title: "Née de l'amour",
      reading: [
        "Au début, seul l'homme masculin régnait dans le jardin. Il avait la communion avec Dieu, mais il avait maintenant un corps : il avait besoin de quelqu'un avec qui partager un amour humain et physique. Car l'amour ne peut pas vivre seul.",
        "Dieu a présenté tous les animaux à l'homme, mais aucun ne lui correspondait. Les animaux apportent un peu de réconfort, mais ils ne comblent pas le besoin d'amour. Certaines personnes préfèrent leur chien ou leur chat aux humains : un animal ne te reproche jamais tes défauts.",
        "Alors Dieu a créé la femme. Elle est née de quelque chose de beau : l'amour. Son but premier était d'être aimée par l'homme, comme le but premier de l'esprit-homme était d'être aimé par Dieu. La domination venait en second.",
        "La création de la femme est le reflet exact de celle de l'homme. Dieu a tiré l'homme de Lui-même pour avoir quelqu'un à aimer ; Il a tiré la femme de l'homme pour que l'homme ait quelqu'un à aimer. Car celui qui reçoit doit être de la même essence que celui qui donne.",
      ],
      keyTruth: "Je suis née de l'amour : la femme a d'abord été créée pour être aimée.",
      verse: {
        ref: "Genèse 2:18",
        text: "L'Éternel Dieu dit : Il n'est pas bon que l'homme soit seul ; je lui ferai une aide semblable à lui.",
      },
      exercises: [
        {
          kind: "choice",
          id: "f3p7e1",
          prompt: "Quel était le but premier de la femme selon l'auteur ?",
          options: ["Dominer sur les animaux", "Être aimée par l'homme", "Travailler le jardin seule"],
          answer: 1,
          explain: "Comme l'esprit-homme a d'abord été créé pour être aimé de Dieu ; la domination venait en second.",
        },
        {
          kind: "order",
          id: "f3p7e2",
          prompt: "Remets dans l'ordre le parallèle de la création.",
          items: ["Dieu tire l'homme de Lui-même", "L'homme peut recevoir l'amour de Dieu", "Dieu tire la femme de l'homme", "La femme peut recevoir l'amour de l'homme"],
          explain: "Celui qui reçoit doit être de la même essence que celui qui donne.",
        },
        {
          kind: "truefalse",
          id: "f3p7e3",
          statement: "Les animaux peuvent combler pleinement le besoin d'amour d'un être humain.",
          answer: false,
          explain: "Aucun animal ne correspondait à l'homme : ils ne sont pas de la même essence.",
        },
      ],
      mirror: {
        question: "Te sens-tu aimée comme une femme a besoin de l'être ?",
        choices: ["Oui", "Pas assez", "Je ne sais plus ce que c'est", "Je me sens aimée de Dieu d'abord"],
      },
      prayer: "Père, merci de m'avoir créée par amour et pour l'amour : guéris les endroits de mon cœur qui ne se sont pas sentis aimés.",
    },
    {
      id: "f3p8",
      title: "Bâtie, semblable et distincte",
      reading: [
        "Le mot traduit par « côte » peut aussi signifier « côté » ou « chambre ». Dieu a tiré la femme d'une partie de l'homme, sans retourner à la poussière, pour qu'elle soit exactement de la même substance que lui.",
        "L'homme a été « formé », comme un potier modèle l'argile. La femme a été « bâtie », construite. On peut l'imaginer comme des cellules prises à l'homme qui se multiplient, comme dans le ventre d'une mère. Quand Adam l'a vue, il s'est écrié : « Voici celle qui est os de mes os et chair de ma chair ! »",
        "Parce que la femme vient de l'homme, l'homme est essentiellement celui qui donne, et la femme celle qui reçoit. Son corps est conçu pour recevoir de A à Z. Et pour recevoir, elle doit être à la fois semblable à l'homme et différente de lui.",
        "On pourrait dire que la femme est un « homme avec un utérus » : la même essence, avec des différences complémentaires. Elles permettent à l'homme et à la femme de combler mutuellement leurs besoins, nourris spirituellement par Dieu, et de dominer ensemble sur la terre.",
      ],
      keyTruth: "La femme est de la même essence que l'homme, mais distincte : faite pour recevoir et compléter.",
      verse: {
        ref: "Genèse 2:23",
        text: "Et l'homme dit : Voici cette fois celle qui est os de mes os et chair de ma chair ! on l'appellera femme, parce qu'elle a été prise de l'homme.",
      },
      exercises: [
        {
          kind: "match",
          id: "f3p8e1",
          prompt: "Associe à chacun le verbe utilisé pour sa création.",
          pairs: [
            ["L'homme", "Formé, comme l'argile du potier"],
            ["La femme", "Bâtie, construite"],
          ],
          explain: "Deux méthodes différentes pour une même substance.",
        },
        {
          kind: "choice",
          id: "f3p8e2",
          prompt: "Pourquoi Dieu n'est-Il pas retourné à la poussière pour faire la femme ?",
          options: ["Il n'y en avait plus", "Pour qu'elle soit exactement de la même substance que l'homme", "Par hasard"],
          answer: 1,
          explain: "Celle qui reçoit doit être de la même essence que celui qui donne.",
        },
        {
          kind: "fill",
          id: "f3p8e3",
          before: "L'homme est essentiellement celui qui donne, la femme celle qui",
          after: ".",
          options: ["reçoit", "commande", "attend"],
          answer: 0,
          explain: "Son corps est conçu pour recevoir de A à Z.",
        },
      ],
      mirror: {
        question: "Comment vis-tu le fait d'être à la fois semblable et différente de l'homme ?",
        choices: ["Avec fierté", "Avec confusion", "Avec frustration", "Avec paix"],
      },
      prayer: "Seigneur, merci de m'avoir bâtie avec soin : j'accueille à la fois ce qui me rapproche et ce qui me distingue.",
    },
  ],
};
