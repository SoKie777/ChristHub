import type { Chapter } from "../types";

// Livre « Le but et la puissance de la femme », chapitre 7 : « La femme qui reflète »
// (« The Woman as Reflector »). Paraphrase libre en français des idées de l'auteur,
// écrite avec nos propres mots (aucune traduction du texte original). Versets : Louis Segond 1910.

export const chapitre7: Chapter = {
  id: "f7",
  number: 7,
  title: "La femme qui reflète",
  theme: "Créée pour recevoir l'amour, la femme reflète ce qu'elle reçoit, comme l'Église reflète le Christ.",
  portions: [
    {
      id: "f7p1",
      title: "L'amour, son carburant",
      reading: [
        "L'esprit-homme a été tiré de Dieu pour recevoir son amour et refléter sa nature. La femme a été créée sur le même modèle : tirée de l'homme pour recevoir son amour et refléter sa nature. C'est son deuxième rôle : refléter.",
        "La raison la plus importante de la création de la femme est qu'elle puisse recevoir de l'amour. C'est l'amour qui l'a fait exister. L'homme a été conçu pour donner l'amour, la femme pour le recevoir.",
        "L'amour est le carburant de la femme. Une voiture sans essence ne roule pas ; une femme qui ne reçoit pas l'amour pour lequel elle a été faite ne peut pas fonctionner pleinement. Quand on lui donne de l'amour, elle s'épanouit ; quand elle reçoit moins que cela, c'est comme un court-circuit.",
        "Paul le répète trois fois en Éphésiens 5 : « Maris, aimez vos femmes. » Comme le Christ a aimé l'Église, comme votre propre corps, comme vous-mêmes. Avec toutes les qualités de 1 Corinthiens 13 : patience, bonté, sans orgueil, sans rancune. Ne pas aimer une femme, c'est maltraiter sa nature même.",
      ],
      keyTruth: "L'amour est mon carburant : j'ai été créée d'abord pour recevoir l'amour et le refléter.",
      verse: {
        ref: "Éphésiens 5:25",
        text: "Maris, aimez vos femmes, comme Christ a aimé l'Église, et s'est livré lui-même pour elle.",
      },
      exercises: [
        {
          kind: "fill",
          id: "f7p1e1",
          before: "L'amour est le",
          after: "de la femme.",
          options: ["carburant", "décor", "piège"],
          answer: 0,
          explain: "Sans amour, elle ne peut pas fonctionner pleinement, comme une voiture sans essence.",
        },
        {
          kind: "choice",
          id: "f7p1e2",
          prompt: "Quelle est la raison la plus importante de la création de la femme ?",
          options: ["Travailler la terre", "Recevoir de l'amour", "Commander"],
          answer: 1,
          explain: "C'est l'amour qui l'a fait exister, et elle a été faite pour le recevoir.",
        },
        {
          kind: "truefalse",
          id: "f7p1e3",
          statement: "Paul répète trois fois aux maris d'aimer leur femme en Éphésiens 5.",
          answer: true,
          explain: "Comme le Christ a aimé l'Église, comme leur propre corps, comme eux-mêmes.",
        },
      ],
      mirror: {
        question: "Ton « réservoir » d'amour est-il plein en ce moment ?",
        choices: ["Plein", "À moitié", "Presque vide", "Je le remplis auprès de Dieu"],
      },
      prayer: "Père, Tu es la source de tout amour : remplis mon cœur, pour que je reflète ce que je reçois de Toi.",
    },
    {
      id: "f7p2",
      title: "« Maris, aimez »",
      reading: [
        "Une chose frappante : nulle part la Bible ne demande à la femme d'aimer son mari. Elle lui demande de se soumettre, de le respecter et de l'honorer. Mais à l'homme, Dieu commande encore et encore : aime ta femme.",
        "Pourquoi ? Parce que la chute a abîmé l'amour naturel de l'homme pour la femme : il veut la dominer plutôt que l'aimer comme lui-même. Et elle a abîmé le respect naturel de la femme pour l'homme. Chacun doit donc être instruit sur ce qui a été blessé en lui.",
        "C'est comme si Paul disait : « Mari, avant tout, aime ta femme. Le reste viendra en son temps. Si tu l'aimes, beaucoup de problèmes de votre couple se régleront, parce qu'elle est née pour être aimée. »",
        "Une femme reflète l'amour, ou le manque d'amour, qu'elle reçoit. Aimée, elle vit dans la joie et la paix même au milieu des difficultés. Mal aimée, elle porte un poids sur le cœur. Tout homme qui prive une femme d'amour détourne le but de Dieu pour elle.",
      ],
      keyTruth: "Une femme reflète l'amour, ou le manque d'amour, qu'elle reçoit : c'est pourquoi Dieu ordonne aux maris d'aimer.",
      verse: {
        ref: "Colossiens 3:19",
        text: "Maris, aimez vos femmes, et ne vous aigrissez pas contre elles.",
      },
      exercises: [
        {
          kind: "truefalse",
          id: "f7p2e1",
          statement: "La Bible ordonne à la femme d'aimer son mari.",
          answer: false,
          explain: "Elle lui demande de se soumettre, de respecter et d'honorer ; c'est à l'homme qu'elle ordonne d'aimer.",
        },
        {
          kind: "match",
          id: "f7p2e2",
          prompt: "Associe à chacun ce que la chute a abîmé en lui.",
          pairs: [
            ["L'homme", "Son amour naturel pour la femme"],
            ["La femme", "Son respect naturel pour l'homme"],
          ],
          explain: "Chacun est instruit précisément sur ce qui a été blessé.",
        },
        {
          kind: "choice",
          id: "f7p2e3",
          prompt: "Que reflète une femme ?",
          options: ["Seulement son humeur", "L'amour ou le manque d'amour qu'elle reçoit", "Rien du tout"],
          answer: 1,
          explain: "Aimée, elle vit dans la joie ; mal aimée, elle porte un poids sur le cœur.",
        },
      ],
      mirror: {
        question: "Ce que tu reflètes aujourd'hui ressemble-t-il plutôt à de la joie ou à un poids ?",
        choices: ["À de la joie", "À un poids", "Aux deux", "Je ne sais pas"],
      },
      prayer: "Seigneur, guéris ce que la chute a abîmé : en moi le respect, et chez les hommes de ma vie l'amour.",
    },
    {
      id: "f7p3",
      title: "« Je te l'ai dit il y a dix ans »",
      reading: [
        "Une femme a besoin que l'amour lui soit exprimé sans cesse, par des paroles et des gestes. L'homme, plutôt logique, a tendance à la traiter de façon logique, et elle le ressent comme de la froideur.",
        "Ce n'est pas assez pour un homme de penser qu'il donne de l'amour : il doit apprendre comment elle le reçoit. Le jour du mariage, il dit : « Je t'aime. » Deux mois plus tard, elle demande : « Tu m'aimes encore ? » « Je te l'ai dit il y a deux mois. » Dix ans plus tard : « Je te l'ai dit il y a dix ans, ça tient toujours. Je te préviendrai si je change d'avis. » Ce n'est pas de la tendresse, c'est de l'ignorance !",
        "Beaucoup de femmes disent que ce qui leur parle d'amour, ce sont des gestes réguliers : de la tendresse physique, un petit mot, des fleurs. Ce n'est pas le prix du cadeau qui compte, mais l'attention et la régularité.",
        "Beaucoup d'hommes pensent montrer leur amour en fournissant un toit, de la nourriture, des vêtements, ou même un manteau de fourrure. C'est souvent fait par amour, mais ce n'est pas l'essence de l'amour. L'amour ne dit pas : « Je t'ai acheté une maison, qu'est-ce que tu veux de plus ? »",
      ],
      keyTruth: "L'amour ne se dit pas une fois pour toutes : il s'exprime souvent, par des gestes attentionnés plus que par des cadeaux coûteux.",
      verse: {
        ref: "Cantique des cantiques 2:4",
        text: "Il m'a fait entrer dans la maison du vin ; et la bannière qu'il déploie sur moi, c'est l'amour.",
      },
      exercises: [
        {
          kind: "truefalse",
          id: "f7p3e1",
          statement: "Dire « je t'aime » le jour du mariage suffit pour toute la vie.",
          answer: false,
          explain: "Une femme a besoin d'entendre et de voir l'amour exprimé souvent.",
        },
        {
          kind: "choice",
          id: "f7p3e2",
          prompt: "Qu'est-ce qui compte le plus dans un geste d'amour ?",
          options: ["Son prix", "L'attention et la régularité", "Qu'il soit vu par les autres"],
          answer: 1,
          explain: "Un petit mot régulier peut dire plus qu'un cadeau coûteux.",
        },
        {
          kind: "fill",
          id: "f7p3e3",
          before: "L'homme doit apprendre comment la femme",
          after: "l'amour.",
          options: ["reçoit", "refuse", "mérite"],
          answer: 0,
          explain: "Il ne suffit pas de penser donner : il faut donner d'une façon qu'elle puisse recevoir.",
        },
      ],
      mirror: {
        question: "Qu'est-ce qui te fait le plus sentir aimée ?",
        choices: ["Des paroles", "De la tendresse", "Du temps ensemble", "Des attentions", "Des services rendus"],
      },
      prayer: "Seigneur, apprends à ceux qui m'aiment comment me le montrer, et apprends-moi à le dire avec douceur.",
    },
    {
      id: "f7p4",
      title: "Mise à part comme un joyau",
      reading: [
        "Le Christ a aimé l'Église, s'est donné pour elle, et l'a sanctifiée. Un homme qui veut aimer sa femme doit fréquenter le Christ et apprendre comment Il aime son Église. Cela prend toute une vie !",
        "Sanctifier, c'est mettre à part, placer dans un endroit spécial, en prendre soin chaque jour, et l'estimer comme une pierre précieuse. On ne laisse rien approcher qui pourrait l'abîmer. On ne la prête pas aux autres pour les divertir. Quand une femme reçoit un tel amour, cela se voit sur son visage, dans sa façon de voir la vie et dans ses relations.",
        "Ces principes dépassent le mariage. Comme les femmes peuvent encourager les hommes qu'elles croisent, les hommes peuvent bâtir l'estime des femmes en les traitant avec bonté et amour chrétien. Les femmes ont besoin de l'approbation des hommes, comme les hommes ont besoin du respect des femmes.",
        "C'est d'autant plus important que les hommes sont souvent en position d'autorité sur des femmes, à l'église ou au travail. Ils doivent les traiter avec égards, pour ne pas éteindre la nature que Dieu a mise en elles. Les femmes reflètent souvent la manière dont les hommes les traitent.",
      ],
      keyTruth: "Être aimée comme le Christ aime l'Église, c'est être mise à part et estimée comme un joyau.",
      verse: {
        ref: "Cantique des cantiques 4:7",
        text: "Tu es toute belle, mon amie, et il n'y a point en toi de défaut.",
      },
      exercises: [
        {
          kind: "fill",
          id: "f7p4e1",
          before: "Sanctifier, c'est mettre à part et estimer comme une pierre",
          after: ".",
          options: ["précieuse", "ordinaire", "tombale"],
          answer: 0,
          explain: "On en prend soin chaque jour et on ne laisse rien l'abîmer.",
        },
        {
          kind: "choice",
          id: "f7p4e2",
          prompt: "Où un homme apprend-il à aimer sa femme ?",
          options: ["Dans les films", "En fréquentant le Christ et sa façon d'aimer l'Église", "Auprès de ses amis"],
          answer: 1,
          explain: "C'est le manuel d'amour de toute une vie.",
        },
        {
          kind: "truefalse",
          id: "f7p4e3",
          statement: "Les hommes en position d'autorité peuvent éteindre la nature d'une femme s'ils la traitent mal.",
          answer: true,
          explain: "Les femmes reflètent souvent la façon dont les hommes les traitent.",
        },
      ],
      mirror: {
        question: "Te sens-tu estimée comme un joyau par Dieu ?",
        choices: ["Oui", "Pas vraiment", "Je l'oublie souvent", "Je veux le croire"],
      },
      prayer: "Jésus, Tu m'as mise à part et Tu me trouves belle : que je vive de ce regard sur moi.",
    },
    {
      id: "f7p5",
      title: "La gloire de l'homme",
      reading: [
        "Deuxième aspect du reflet : la femme représente la nature de l'homme. Paul dit que l'homme est l'image et la gloire de Dieu, et que la femme est la gloire de l'homme.",
        "La gloire d'une chose, c'est la meilleure expression d'elle-même : la fleur épanouie, le lion dans sa pleine force, le soleil à midi. Refléter la gloire de Dieu, ce n'est pas seulement lever les mains en disant « alléluia » : c'est montrer sa vraie nature, par exemple en restant semblable au Christ quand un collègue nous pousse à bout.",
        "Si la femme est la gloire de l'homme, alors pour savoir comment est un homme, regarde la femme qui le reflète. Si tu n'aimes pas la façon dont sont les femmes, la responsabilité retombe sur les hommes. Bien sûr, chacun répond de ses actes devant Dieu : une femme peut refléter son propre égoïsme plutôt que la bonté de son mari.",
        "Si tu t'intéresses à un homme, parle à sa mère et à ses sœurs. Et regarde la société : des foyers dirigés par des femmes seules, des enfants sans direction, plus de femmes que d'hommes au travail. Cela dit quelque chose des hommes. Une femme toujours triste ou aigrie reflète souvent la façon dont son mari la traite. Elle devrait grandir en grâce à ses côtés.",
      ],
      keyTruth: "La femme est la gloire de l'homme : pour connaître un homme, regarde la femme qui le reflète.",
      verse: {
        ref: "1 Corinthiens 11:7",
        text: "L'homme ne doit pas se couvrir la tête, puisqu'il est l'image et la gloire de Dieu, tandis que la femme est la gloire de l'homme.",
      },
      exercises: [
        {
          kind: "match",
          id: "f7p5e1",
          prompt: "Associe chaque image à « sa gloire », sa meilleure expression.",
          pairs: [
            ["La fleur", "Pleinement épanouie"],
            ["Le lion", "Dans toute sa force"],
            ["Le soleil", "À midi"],
          ],
          explain: "La gloire d'une chose, c'est sa vraie nature pleinement manifestée.",
        },
        {
          kind: "choice",
          id: "f7p5e2",
          prompt: "Pour savoir comment est un homme, qui faut-il observer selon l'auteur ?",
          options: ["Ses amis", "La femme qui le reflète, sa mère et ses sœurs", "Son patron"],
          answer: 1,
          explain: "La femme est la gloire de l'homme : elle reflète sa nature.",
        },
        {
          kind: "truefalse",
          id: "f7p5e3",
          statement: "Une femme ne répond jamais de ses propres actes, puisqu'elle reflète son mari.",
          answer: false,
          explain: "Chacun répond de ses actes devant Dieu : elle peut refléter son propre égoïsme.",
        },
      ],
      mirror: {
        question: "Que reflète ta vie de ceux qui t'entourent ?",
        choices: ["Leur amour", "Leurs blessures", "Leur foi", "Leur absence", "Je ne sais pas"],
      },
      prayer: "Seigneur, que ma vie manifeste ta gloire, même sous la pression, et que je grandisse en grâce.",
    },
    {
      id: "f7p6",
      title: "L'épouse du Christ",
      reading: [
        "Jésus aussi a une épouse appelée à refléter sa nature : l'Église. Il l'a envoyée dans le monde pour Le montrer. « Tous connaîtront que vous êtes mes disciples à l'amour que vous aurez les uns pour les autres. » Le monde ne vient pas d'abord à Jésus : il vient voir l'épouse.",
        "Pourquoi le monde ne vient-il pas davantage à Jésus ? Souvent parce que l'Église est un mauvais témoin, et parce que nos mariages ne reflètent pas la gloire de Dieu. C'est contre nature : Jésus est l'Époux parfait et mérite d'être fidèlement reflété.",
        "On dit qu'un mariage est une église dans l'Église. Pour que le monde voie le Christ, commençons par nos foyers : maris et femmes, pères et filles, frères et sœurs, puis les relations entre hommes et femmes dans l'Église.",
        "Par son rôle de reflet, la femme peut montrer au monde ce que c'est d'être aimé de Dieu. Mais l'homme a une grande responsabilité : s'il ne donne pas un amour qu'elle peut recevoir et refléter, le témoignage de la famille et de l'Église s'affaiblit. Les champs sont prêts pour la moisson.",
      ],
      keyTruth: "Comme l'Église reflète le Christ, nos foyers sont appelés à montrer au monde l'amour de Dieu.",
      verse: {
        ref: "Jean 13:35",
        text: "À ceci tous connaîtront que vous êtes mes disciples, si vous avez de l'amour les uns pour les autres.",
      },
      exercises: [
        {
          kind: "fill",
          id: "f7p6e1",
          before: "Un mariage est une église dans",
          after: ".",
          options: ["l'Église", "l'école", "l'entreprise"],
          answer: 0,
          explain: "Pour que le monde voie le Christ, il faut commencer par nos foyers.",
        },
        {
          kind: "choice",
          id: "f7p6e2",
          prompt: "Comment le monde reconnaîtra-t-il les disciples de Jésus ?",
          options: ["À leurs vêtements", "À l'amour qu'ils ont les uns pour les autres", "À leurs bâtiments"],
          answer: 1,
          explain: "Jean 13:35.",
        },
        {
          kind: "truefalse",
          id: "f7p6e3",
          statement: "Nos mariages n'ont aucun effet sur le témoignage de l'Église.",
          answer: false,
          explain: "Quand ils ne reflètent pas la gloire de Dieu, le monde ne voit pas le Christ.",
        },
      ],
      mirror: {
        question: "Ton foyer ou tes relations reflètent-ils le Christ aux yeux des autres ?",
        choices: ["Oui, la plupart du temps", "Parfois", "Pas vraiment", "Je veux que ça change"],
      },
      prayer: "Jésus, Époux parfait, que ma maison et ma vie Te reflètent fidèlement aux yeux du monde.",
    },
  ],
};
