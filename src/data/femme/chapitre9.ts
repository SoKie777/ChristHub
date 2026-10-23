import type { Chapter } from "../types";

// Livre « Le but et la puissance de la femme », chapitre 9 : « Comprendre la communication de la femme »
// Paraphrase libre en français des idées de l'auteur, écrite avec nos propres mots
// (aucune traduction du texte original). Versets : Louis Segond 1910.

export const chapitre9: Chapter = {
  id: "f9",
  number: 9,
  title: "Comprendre la communication de la femme",
  theme: "Elle ressent, il réfléchit : comprendre ces deux langages transforme les relations.",
  portions: [
    {
      id: "f9p1",
      title: "Des fils emmêlés",
      reading: [
        "Dieu a fait l'homme et la femme très différents dans leur façon de penser, d'agir et de réagir. Ces différences étaient faites pour se compléter, pas pour diviser. Adam et Ève, en harmonie avec Dieu, savaient puiser dans les forces de l'autre.",
        "Mais quand l'humanité s'est détournée de Dieu, les lignes de communication entre l'homme et la femme ont été coupées, ou du moins bien emmêlées. Ce qui devait se répondre provoque maintenant des malentendus et des conflits. Tu en as sans doute fait l'expérience !",
        "Comment vivre en paix avec quelqu'un qu'on aime mais qui fonctionne tout autrement ? Comment se faire comprendre sans chercher à contrôler l'autre ? La réponse : comprendre les buts et la conception de chacun, avec un peu de patience et beaucoup de pardon.",
        "Ce qui suit décrit des tendances générales : il y a toujours des exceptions. Mais dans l'ensemble, elles se vérifient. Le but est que chacun apprenne à parler dans le langage que l'autre peut recevoir.",
      ],
      keyTruth: "Nos différences de communication étaient faites pour se compléter : avec patience et pardon, elles peuvent redevenir une richesse.",
      verse: {
        ref: "Colossiens 3:13",
        text: "Supportez-vous les uns les autres, et, si l'un a sujet de se plaindre de l'autre, pardonnez-vous réciproquement. De même que Christ vous a pardonné, pardonnez-vous aussi.",
      },
      exercises: [
        {
          kind: "truefalse",
          id: "f9p1e1",
          statement: "Les différences de communication entre l'homme et la femme sont une conséquence de la chute.",
          answer: false,
          explain: "Elles faisaient partie du plan ; c'est la chute qui a emmêlé les lignes.",
        },
        {
          kind: "choice",
          id: "f9p1e2",
          prompt: "Quel est le but de ce chapitre ?",
          options: [
            "Prouver qu'un sexe communique mieux que l'autre",
            "Apprendre à parler dans le langage que l'autre peut recevoir",
            "Éviter de parler",
          ],
          answer: 1,
          explain: "Comprendre le style de l'autre permet de se faire comprendre.",
        },
        {
          kind: "fill",
          id: "f9p1e3",
          before: "De même que Christ vous a",
          after: ", pardonnez-vous aussi.",
          options: ["pardonné", "jugé", "oubliés"],
          answer: 0,
          explain: "Colossiens 3:13.",
        },
      ],
      mirror: {
        question: "Avec qui as-tu le plus de mal à te faire comprendre ?",
        choices: ["Mon conjoint", "Un parent", "Un enfant", "Un collègue", "Personne en particulier"],
      },
      prayer: "Seigneur, démêle les fils de mes relations, et donne-moi patience et pardon là où je ne suis pas comprise.",
    },
    {
      id: "f9p2",
      title: "Une sensible émotionnelle",
      reading: [
        "Dieu a fait la femme d'abord « sensible émotionnelle », et l'homme d'abord « penseur logique ». Quand une femme reçoit une information, elle l'évalue à la fois avec sa raison et ses émotions. L'homme, lui, utilise généralement ces deux fonctions séparément.",
        "Il y a une explication physique : chez la femme, les deux hémisphères du cerveau sont bien reliés. Voilà pourquoi elle peut mener plusieurs tâches à la fois et traiter faits et sentiments presque en même temps. Chez l'homme, les connexions sont moins nombreuses : il doit « changer de vitesse » pour passer de la logique à l'émotion. Il pense en ligne droite, elle pense comme une grille, captant des détails, des personnalités et des motivations que lui ne voit pas.",
        "Personne ne voit le monde en entier. La vision périphérique de la femme évite à l'homme les nids-de-poule sur sa route ; la ligne droite de l'homme évite à la femme de se perdre dans les couches de sa pensée. Ensemble, ils voient plus juste.",
        "Les hommes ont souvent jugé les femmes stupides ou inférieures parce qu'elles expriment leurs émotions. Une femme n'a pas à s'excuser de ses émotions : Dieu l'a faite pour ressentir.",
      ],
      keyTruth: "Je n'ai pas à m'excuser de mes émotions : Dieu m'a faite pour ressentir, et ma façon de voir complète celle de l'homme.",
      verse: {
        ref: "Romains 12:15",
        text: "Réjouissez-vous avec ceux qui se réjouissent ; pleurez avec ceux qui pleurent.",
      },
      exercises: [
        {
          kind: "match",
          id: "f9p2e1",
          prompt: "Associe à chacun sa façon de penser.",
          pairs: [
            ["La femme", "Comme une grille, faits et sentiments ensemble"],
            ["L'homme", "En ligne droite, vers le but"],
          ],
          explain: "Deux façons complémentaires de voir le monde.",
        },
        {
          kind: "truefalse",
          id: "f9p2e2",
          statement: "Une femme devrait s'excuser d'exprimer ses émotions.",
          answer: false,
          explain: "Dieu l'a faite pour ressentir.",
        },
        {
          kind: "choice",
          id: "f9p2e3",
          prompt: "Pourquoi la femme peut-elle mener plusieurs tâches à la fois, selon l'auteur ?",
          options: ["Par habitude", "Parce que les deux hémisphères de son cerveau sont bien reliés", "Parce qu'elle a plus de temps"],
          answer: 1,
          explain: "Elle traite faits et sentiments presque simultanément.",
        },
      ],
      mirror: {
        question: "Comment vis-tu tes émotions ?",
        choices: ["Comme une force", "Comme une faiblesse", "J'essaie de les cacher", "J'apprends à les accueillir"],
      },
      prayer: "Père, merci pour mon cœur sensible : apprends-moi à le mettre au service de ceux qui m'entourent.",
    },
    {
      id: "f9p3",
      title: "La table dressée",
      reading: [
        "Une femme prépare une soirée romantique : repas soigné, fleurs, argenterie, jolie robe. Son mari rentre, dit bonjour, passe devant elle sans rien remarquer et annonce : « Je mange devant les infos. » Son esprit est encore au travail : il cherche des informations qui pourraient toucher son emploi, donc sa capacité de pourvoir.",
        "Elle, blessée, le trouve ingrat et sans cœur. Quand on ne comprend pas le but de l'autre, on commence à mal interpréter ses motifs, et c'est ce soupçon qui crée le conflit. Elle a pris son indifférence pour elle ; lui était absorbé par ses pensées et n'a pas vu ce qu'elle ressentait.",
        "La femme exprime plus facilement ses sentiments et ses pensées : Dieu l'a faite ainsi. L'homme parle moins et ne garde que l'essentiel. Mais les hommes ont des émotions ! Ils ne les expriment simplement pas toujours. « Le crédit est en retard, ils vont saisir les meubles ! » « Ne t'inquiète pas, je m'en occupe. » Elle appelle sa mère, sa cousine et sa tante ; lui semble indifférent, mais il réfléchit déjà à comment trouver l'argent. Elle ressent ; il réfléchit.",
        "L'homme doit apprendre à exprimer ce qu'il ressent, par exemple en remarquant la table et en remerciant. Et la femme ne doit pas prendre sa réaction pour de l'irresponsabilité ou du mépris.",
      ],
      keyTruth: "Quand je ne comprends pas l'autre, je commence à soupçonner ses motifs : comprendre sa conception désamorce le conflit.",
      verse: {
        ref: "1 Corinthiens 13:5",
        text: "Elle ne fait rien de malhonnête, elle ne cherche point son intérêt, elle ne s'irrite point, elle ne soupçonne point le mal.",
      },
      exercises: [
        {
          kind: "choice",
          id: "f9p3e1",
          prompt: "Pourquoi le mari passe-t-il devant la table dressée sans rien dire ?",
          options: ["Parce qu'il n'aime pas sa femme", "Parce que son esprit est encore tourné vers son travail", "Parce qu'il n'a pas faim"],
          answer: 1,
          explain: "Il pense à ce qui touche sa capacité de pourvoir, sans voir ce qu'elle ressent.",
        },
        {
          kind: "fill",
          id: "f9p3e2",
          before: "Quand on ne comprend pas le but de l'autre, on commence à mal interpréter ses",
          after: ".",
          options: ["motifs", "cadeaux", "habits"],
          answer: 0,
          explain: "C'est le soupçon qui crée le conflit.",
        },
        {
          kind: "truefalse",
          id: "f9p3e3",
          statement: "Les hommes n'ont pas d'émotions.",
          answer: false,
          explain: "Ils en ont, mais ne les expriment pas toujours.",
        },
      ],
      mirror: {
        question: "As-tu récemment prêté à quelqu'un de mauvaises intentions qu'il n'avait pas ?",
        choices: ["Oui", "Peut-être", "Non", "On me l'a fait à moi"],
      },
      prayer: "Seigneur, donne-moi un amour qui ne soupçonne pas le mal, et la patience de comprendre avant de conclure.",
    },
    {
      id: "f9p4",
      title: "L'intuition qui sauve",
      reading: [
        "Pendant le procès de Jésus, la femme de Pilate lui envoie un message : « Ne te mêle pas de l'affaire de ce juste, car j'ai beaucoup souffert en songe à cause de lui. » Elle avait un pressentiment. Mais Pilate, sous la pression de la foule, a condamné un homme qu'il savait innocent. Il aurait mieux fait d'écouter l'instinct de sa femme.",
        "Les hommes doivent apprendre à être ouverts à ce que leur disent leur épouse et les autres femmes de leur vie. Dieu a donné la femme à l'homme pour l'équilibrer, pour qu'il bénéficie de sa sensibilité. Il est si facile pour un homme de décider sans se soucier des conséquences sur les autres !",
        "La femme est cette autre partie de lui qui dit : « Ce que tu veux faire est peut-être juste, mais la manière ne l'est pas. Pense plutôt à ceci… » Ce que l'homme n'a pas, la femme le possède, et inversement. Ce que Dieu a tiré d'Adam pour faire Ève, l'homme en a besoin pour être complet.",
        "Abigaïl l'a montré. Son mari Nabal avait insulté David, qui venait pour le détruire. Abigaïl est allée au-devant de David et a fait appel à sa justice et à sa crainte de Dieu. Elle savait comment lui parler pour toucher ses convictions profondes, et elle a évité un massacre.",
      ],
      keyTruth: "L'intuition et le discernement de la femme sont un don pour l'homme : ce qu'il n'a pas, elle le possède.",
      verse: {
        ref: "1 Samuel 25:33",
        text: "Béni soit ton bon sens, et bénie sois-tu, toi qui m'as empêché en ce jour de répandre le sang, et qui as retenu ma main !",
      },
      exercises: [
        {
          kind: "choice",
          id: "f9p4e1",
          prompt: "Qu'a fait Pilate du message de sa femme ?",
          options: ["Il l'a écouté et libéré Jésus", "Il ne l'a pas écouté et a cédé à la foule", "Il ne l'a jamais reçu"],
          answer: 1,
          explain: "Il aurait mieux fait d'écouter l'instinct de sa femme.",
        },
        {
          kind: "match",
          id: "f9p4e2",
          prompt: "Associe chaque femme à ce qu'elle a fait.",
          pairs: [
            ["La femme de Pilate", "A averti son mari après un songe"],
            ["Abigaïl", "A empêché David de répandre le sang"],
          ],
          explain: "Deux exemples du discernement de la femme.",
        },
        {
          kind: "truefalse",
          id: "f9p4e3",
          statement: "Ce que Dieu a tiré d'Adam pour faire Ève, l'homme en a besoin pour être complet.",
          answer: true,
          explain: "Ce que l'homme n'a pas, la femme le possède, et inversement.",
        },
      ],
      mirror: {
        question: "As-tu déjà eu une intuition que personne n'a écoutée ?",
        choices: ["Oui, et j'avais raison", "Oui, et je me suis trompée", "Je n'ose pas les partager", "On m'écoute en général"],
      },
      prayer: "Seigneur, aiguise mon discernement, et donne-moi, comme Abigaïl, les mots justes pour éviter le mal.",
    },
    {
      id: "f9p5",
      title: "Ce qu'elle dit, ce qu'elle pense",
      reading: [
        "La logique de l'homme équilibre aussi l'émotion de la femme. En pleine crise, un leader n'a pas le temps de vivre une expérience émotionnelle : il doit réfléchir. Devant la mer Rouge, le peuple panique, mais Moïse dit : « L'Éternel combattra pour vous, et vous, gardez le silence. » Il a mis de l'ordre, puis il est allé parler à Dieu.",
        "Ce qu'une femme dit exprime ce qu'elle ressent ; ce qu'un homme dit exprime ce qu'il pense. Ce sont deux niveaux d'information différents.",
        "« Tes parents viennent demain, la maison est en désordre, il n'y a rien à manger, les enfants m'ont épuisée, je n'y arrive plus ! » Le mari propose des solutions : faire les courses, sortir dîner, ranger. Elle refuse tout. Il est exaspéré. En réalité, elle voulait d'abord qu'il la prenne dans ses bras et lui dise combien elle compte. Ensuite, elle aurait tout affronté.",
        "Ce qu'une femme pense est souvent différent de ce qu'elle dit. « On mange à 18 h ? » « Il reste la purée, la sauce, les petits pains, et Susan arrivera peut-être à 18 h 15… » « Alors, oui ou non ? » « Non, 18 h 30. » Lui voulait un oui ou un non ; elle réfléchissait à tous les détails. L'homme doit apprendre la patience pour découvrir ce qu'elle pense vraiment.",
      ],
      keyTruth: "Derrière ce qu'une femme dit se cache souvent un besoin d'être rejointe avant d'être aidée.",
      verse: {
        ref: "Exode 14:14",
        text: "L'Éternel combattra pour vous ; et vous, gardez le silence.",
      },
      exercises: [
        {
          kind: "match",
          id: "f9p5e1",
          prompt: "Associe à chacun ce que ses paroles expriment surtout.",
          pairs: [
            ["Ce que dit la femme", "Ce qu'elle ressent"],
            ["Ce que dit l'homme", "Ce qu'il pense"],
          ],
          explain: "Deux niveaux d'information, d'où tant de malentendus.",
        },
        {
          kind: "choice",
          id: "f9p5e2",
          prompt: "De quoi la femme débordée avait-elle d'abord besoin ?",
          options: ["De solutions pratiques", "D'être prise dans les bras et appréciée", "Qu'on la laisse seule"],
          answer: 1,
          explain: "Une fois rejointe émotionnellement, elle aurait pu tout affronter.",
        },
        {
          kind: "truefalse",
          id: "f9p5e3",
          statement: "Ce qu'une femme pense est toujours exactement ce qu'elle dit.",
          answer: false,
          explain: "Il faut souvent de la patience pour découvrir ce qu'elle pense vraiment.",
        },
      ],
      mirror: {
        question: "Quand tu es débordée, de quoi as-tu besoin en premier ?",
        choices: ["D'un câlin", "D'une écoute", "D'une aide concrète", "D'être seule un moment"],
      },
      prayer: "Seigneur, apprends-moi à dire ce dont j'ai vraiment besoin, et donne à ceux que j'aime la patience de me comprendre.",
    },
    {
      id: "f9p6",
      title: "Ce qu'il ressent sans le dire",
      reading: [
        "Quand un homme parle à une femme, il dit rarement ce qu'il ressent. « Il ne me dit jamais qu'il m'aime, il est indifférent. » Pourtant, il ressent profondément. Mais ce qui monte à son esprit, ce sont des faits et des chiffres. En plein moment romantique, il peut parler de son chéquier !",
        "« Je te l'ai dit le jour de notre mariage, ça tient toujours. » C'est maladroit, mais cela révèle surtout combien il lui est difficile d'exprimer ses sentiments. Les hommes doivent apprendre à le faire, et traiter leur femme avec égards. Plus les femmes sont heureuses, plus les hommes le sont : « Quand Jane est heureuse, Tarzan est heureux. »",
        "Beaucoup d'hommes souffrent en silence : pas de promotion depuis dix ans, le sentiment d'être des perdants, d'avoir déçu leur femme. Ils ne trouvent pas les mots. Une femme peut créer un climat où il pourra dire ce qu'il ressent. En passant par ses pensées, elle découvrira ses sentiments, souvent bien différents de ses paroles.",
        "Faute de comprendre cela, beaucoup concluent que leur couple ne marche pas, partent, se remarient, et retrouvent les mêmes problèmes. Le problème n'était pas la personne, mais la communication.",
      ],
      keyTruth: "Un homme ressent souvent bien plus qu'il ne dit : je peux créer un climat où son cœur ose parler.",
      verse: {
        ref: "Proverbes 20:5",
        text: "Les pensées dans le cœur de l'homme sont des eaux profondes, mais l'homme intelligent sait y puiser.",
      },
      exercises: [
        {
          kind: "truefalse",
          id: "f9p6e1",
          statement: "Un homme qui ne dit pas « je t'aime » ne ressent rien.",
          answer: false,
          explain: "Il ressent profondément, mais ce sont des faits qui lui viennent à l'esprit.",
        },
        {
          kind: "fill",
          id: "f9p6e2",
          before: "« Quand Jane est heureuse,",
          after: "est heureux. »",
          options: ["Tarzan", "personne", "le voisin"],
          answer: 0,
          explain: "Plus les femmes sont heureuses, plus les hommes le sont.",
        },
        {
          kind: "choice",
          id: "f9p6e3",
          prompt: "Pourquoi beaucoup retrouvent-ils les mêmes problèmes dans leur nouveau couple ?",
          options: ["Parce qu'ils choisissent mal", "Parce que le problème était la communication, pas la personne", "Par malchance"],
          answer: 1,
          explain: "Tant qu'on ne comprend pas nos différences, le cycle recommence.",
        },
      ],
      mirror: {
        question: "Y a-t-il un homme dans ta vie qui souffre peut-être en silence ?",
        choices: ["Mon mari", "Mon père", "Mon fils", "Un frère ou un ami", "Je ne sais pas"],
      },
      prayer: "Seigneur, donne-moi l'intelligence de puiser dans les eaux profondes du cœur de ceux que j'aime.",
    },
    {
      id: "f9p7",
      title: "Ce qu'elle entend",
      reading: [
        "Ce qu'une femme entend, elle le vit comme une expérience émotionnelle ; ce qu'un homme entend, il le reçoit comme une information. Dis « tu es moche » à un homme, il répondra « toi aussi ». Dis-le à une femme, elle ne l'oubliera jamais.",
        "« Cette robe te serre un peu. » Pendant des semaines, elle se tait, puis un matin elle appelle une amie en pleurs : « Tu m'as traitée de grosse ! » « Le riz était un peu salé aujourd'hui. » Pour lui, c'est une information. Elle entend : tu cuisines mal, ma mère faisait mieux, tu ne m'apprécies pas… et finit par se demander s'il déjeune avec une autre femme. Trois semaines plus tard, au restaurant : « Tu ne trouvais pas mon riz bon, hein ? »",
        "Avant de parler à une femme, un homme doit réfléchir à ce qu'il va dire et à la manière. Ses paroles seront absorbées par tout son être.",
        "Et la femme doit savoir que l'homme fonctionne à l'information. Quand elle pleure, il dit « je reviens quand tu seras calmée » : pour lui, il n'y a pas d'information. Elle peut plutôt lui dire calmement : « Je me suis sentie moins respectée quand tu ne m'as pas ouvert la porte devant nos amis. Je sais que ce n'était pas voulu, mais cela compte pour moi. » Il ne « sent » pas ses larmes ; il veut savoir quoi réparer.",
      ],
      keyTruth: "Mes paroles touchent tout l'être de l'autre : je les choisis avec soin, et j'apprends à dire clairement ce que je ressens.",
      verse: {
        ref: "Colossiens 4:6",
        text: "Que votre parole soit toujours accompagnée de grâce, assaisonnée de sel, afin que vous sachiez comment il faut répondre à chacun.",
      },
      exercises: [
        {
          kind: "match",
          id: "f9p7e1",
          prompt: "Associe à chacun la façon dont il reçoit ce qu'il entend.",
          pairs: [
            ["La femme", "Comme une expérience émotionnelle"],
            ["L'homme", "Comme une information"],
          ],
          explain: "D'où l'histoire du riz trop salé !",
        },
        {
          kind: "choice",
          id: "f9p7e2",
          prompt: "Comment une femme peut-elle mieux se faire comprendre d'un homme ?",
          options: ["En pleurant plus fort", "En lui disant calmement ce qu'elle a ressenti et pourquoi", "En se taisant"],
          answer: 1,
          explain: "Il fonctionne à l'information : il veut savoir quoi réparer.",
        },
        {
          kind: "truefalse",
          id: "f9p7e3",
          statement: "Une remarque anodine pour un homme peut être vécue très personnellement par une femme.",
          answer: true,
          explain: "Elle l'absorbe et l'incube de tout son être.",
        },
      ],
      mirror: {
        question: "Quelle remarque anodine t'a blessée plus qu'elle n'aurait dû ?",
        choices: ["Sur mon physique", "Sur ma cuisine ou ma maison", "Sur mon travail", "Sur ma façon d'être", "Je ne m'en souviens pas"],
      },
      prayer: "Seigneur, que mes paroles soient pleines de grâce, et que je reçoive celles des autres sans y entendre plus qu'ils n'ont dit.",
    },
    {
      id: "f9p8",
      title: "Répondre plutôt que réagir",
      reading: [
        "Les femmes s'intéressent souvent aux détails, les hommes au principe. Après un mariage, une femme peut parler des heures des fleurs, de la musique, de la robe et du repas. Demandez à un homme : « Alors, ce mariage ? » « Ils se sont mariés. »",
        "Les femmes oublient rarement ; les hommes doivent souvent être rappelés. Elle évoque une faute vieille de cinq ans, et lui s'agace : « Je me suis déjà excusé ! » Mais elle est faite pour ne pas oublier. Lui, en revanche, oublie l'anniversaire de sa sœur malgré trois rappels, et s'installe devant le match avec son pop-corn. Ces différences se complètent ; incomprises, elles font naître des soupçons.",
        "Nous apprenons tous à ressembler au Christ. En attendant, revêtons-nous de compassion, de bonté, d'humilité, de douceur et de patience, supportons-nous et pardonnons-nous, et que la paix du Christ règne dans nos cœurs.",
        "Plutôt que de réagir, apprends à répondre. Réagir, c'est agir contre l'autre avant de réfléchir. Répondre, c'est agir de façon responsable parce qu'on comprend ses motivations, en disant la vérité avec amour. Le Christ est notre paix : Il a renversé le mur de séparation.",
      ],
      keyTruth: "Au lieu de réagir, je choisis de répondre : je cherche à comprendre l'autre et je laisse la paix du Christ régner.",
      verse: {
        ref: "Colossiens 3:15",
        text: "Et que la paix de Christ, à laquelle vous avez été appelés pour former un seul corps, règne dans vos cœurs. Et soyez reconnaissants.",
      },
      exercises: [
        {
          kind: "match",
          id: "f9p8e1",
          prompt: "Associe chaque attitude à sa définition.",
          pairs: [
            ["Réagir", "Agir contre l'autre avant de réfléchir"],
            ["Répondre", "Agir de façon responsable en comprenant l'autre"],
          ],
          explain: "Comprendre les motivations permet de répondre plutôt que réagir.",
        },
        {
          kind: "choice",
          id: "f9p8e2",
          prompt: "Que retient souvent un homme d'un mariage selon l'auteur ?",
          options: ["Tous les détails de la décoration", "« Ils se sont mariés »", "Le menu complet"],
          answer: 1,
          explain: "Les hommes retiennent l'essentiel, les femmes les détails.",
        },
        {
          kind: "fill",
          id: "f9p8e3",
          before: "Que la paix de Christ",
          after: "dans vos cœurs.",
          options: ["règne", "dorme", "attende"],
          answer: 0,
          explain: "Colossiens 3:15.",
        },
      ],
      mirror: {
        question: "Cette semaine, as-tu plutôt réagi ou répondu face aux autres ?",
        choices: ["Plutôt réagi", "Plutôt répondu", "Un peu des deux", "Je veux apprendre à répondre"],
      },
      prayer: "Prince de la paix, apprends-moi à répondre plutôt qu'à réagir, et fais régner ta paix dans mes relations.",
    },
  ],
};
