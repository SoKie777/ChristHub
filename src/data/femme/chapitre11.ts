import type { Chapter } from "../types";

// Livre « Le but et la puissance de la femme », chapitre 11 : « Les femmes doivent-elles diriger ? »
// Paraphrase libre en français des idées de l'auteur, écrite avec nos propres mots
// (aucune traduction du texte original). Versets : Louis Segond 1910.

export const chapitre11: Chapter = {
  id: "f11",
  number: 11,
  title: "Les femmes doivent-elles diriger ?",
  theme: "L'homme dirige par sa position, la femme par son influence : en Christ, elle retrouve sa place de partenaire.",
  portions: [
    {
      id: "f11p1",
      title: "Moïse, Aaron et Myriam",
      reading: [
        "Les femmes doivent-elles diriger ? Et, pour les croyants, peuvent-elles diriger dans l'Église ? Avant de conclure, il faut considérer l'ensemble de la Parole de Dieu, et non bâtir toute une doctrine sur un seul verset, comme on l'a souvent fait.",
        "Moïse a sans doute été le plus grand leader de l'Ancien Testament. Mais écoute ce que Dieu dit par le prophète Michée : « J'ai envoyé devant toi Moïse, Aaron et Myriam. » Dieu a envoyé trois leaders, dont une femme. Beaucoup d'hommes n'aiment pas lire ce verset.",
        "Dieu n'a pas envoyé Myriam parce qu'il manquait d'hommes : Il l'a placée dans une équipe, à côté d'eux. Moïse le dirigeant, Aaron le prêtre, et entre les deux une femme pour équilibrer l'ensemble. En la mettant sur la même liste que Moïse, Dieu a montré qu'une femme peut légitimement diriger.",
        "Hommes et femmes sont égaux devant Dieu, ont reçu ensemble la mission de dominer, ont des conceptions différentes et se complètent. La vraie question n'est donc pas « les femmes doivent-elles diriger ? », mais « comment doivent-elles diriger, selon leur but et leur conception ? »",
      ],
      keyTruth: "Dieu a envoyé Moïse, Aaron et Myriam : la question n'est pas si la femme peut diriger, mais comment.",
      verse: {
        ref: "Michée 6:4",
        text: "Car je t'ai fait monter du pays d'Égypte, je t'ai délivré de la maison de servitude, et j'ai envoyé devant toi Moïse, Aaron et Marie.",
      },
      exercises: [
        {
          kind: "choice",
          id: "f11p1e1",
          prompt: "Quels leaders Dieu dit-Il avoir envoyés devant Israël, selon Michée 6:4 ?",
          options: ["Moïse seul", "Moïse et Aaron", "Moïse, Aaron et Myriam"],
          answer: 2,
          explain: "Dieu a placé une femme dans l'équipe de direction.",
        },
        {
          kind: "truefalse",
          id: "f11p1e2",
          statement: "Dieu a envoyé Myriam parce qu'il n'y avait pas d'hommes disponibles.",
          answer: false,
          explain: "Il l'a envoyée diriger aux côtés des hommes, pour équilibrer l'équipe.",
        },
        {
          kind: "fill",
          id: "f11p1e3",
          before: "La vraie question n'est pas si les femmes doivent diriger, mais",
          after: "elles doivent diriger.",
          options: ["comment", "pourquoi", "quand"],
          answer: 0,
          explain: "Selon leur but et leur conception.",
        },
      ],
      mirror: {
        question: "As-tu déjà senti un appel à diriger quelque chose ?",
        choices: ["Oui, et je le fais", "Oui, mais je n'ose pas", "On m'en a empêchée", "Pas pour l'instant"],
      },
      prayer: "Seigneur, Toi qui as envoyé Myriam, montre-moi comment exercer le leadership que Tu as mis en moi.",
    },
    {
      id: "f11p2",
      title: "Un programme de réparation",
      reading: [
        "La mission de domination a été donnée à l'« homme », l'esprit présent dans le mâle et dans la femelle. Dominer, c'est gouverner, régner, gérer, conduire, administrer. Dieu aime le leadership et l'ordre : c'est pour cela qu'Il voulait que la terre soit cultivée et non laissée en friche.",
        "Dans les deux premiers chapitres de la Genèse, il n'y a aucune trace de soumission ou d'oppression de la femme. Tous deux étaient égaux, bénis, et dominaient ensemble, et Dieu a dit : « C'est très bon. » Tout autre arrangement est venu de la chute.",
        "Cela veut dire que tout ce que Dieu dit sur la relation homme-femme après Genèse 2 est un programme de réparation.",
        "Et puisque le but de l'humanité était de diriger, Dieu a mis en l'homme et en la femme la capacité de diriger. L'esprit de leadership est en chacun. Mais la façon d'exercer cette domination diffère selon leur conception.",
      ],
      keyTruth: "Dans le plan d'origine, l'homme et la femme dirigeaient ensemble : tout ce qui vient après la chute est un programme de réparation.",
      verse: {
        ref: "Psaume 8:7",
        text: "Tu lui as donné la domination sur les œuvres de tes mains, tu as tout mis sous ses pieds.",
      },
      exercises: [
        {
          kind: "truefalse",
          id: "f11p2e1",
          statement: "Genèse 1 et 2 décrivent une femme soumise et dominée par l'homme.",
          answer: false,
          explain: "Il n'y a aucune trace de soumission ou d'oppression dans le plan d'origine.",
        },
        {
          kind: "fill",
          id: "f11p2e2",
          before: "Tout ce que Dieu dit sur la relation homme-femme après Genèse 2 est un programme de",
          after: ".",
          options: ["réparation", "punition", "vacances"],
          answer: 0,
          explain: "C'est la réponse de Dieu à la chute.",
        },
        {
          kind: "choice",
          id: "f11p2e3",
          prompt: "Qu'est-ce qui diffère entre l'homme et la femme dans le leadership ?",
          options: ["Leur valeur", "La façon de l'exercer, selon leur conception", "Leur droit de diriger"],
          answer: 1,
          explain: "L'esprit de leadership est en chacun ; l'exécution diffère.",
        },
      ],
      mirror: {
        question: "Te vois-tu comme quelqu'un que Dieu a équipé pour diriger ?",
        choices: ["Oui", "Un peu", "Pas du tout", "Je commence à y croire"],
      },
      prayer: "Père, merci d'avoir mis en moi un esprit de leadership : apprends-moi à l'exercer selon ton plan.",
    },
    {
      id: "f11p3",
      title: "Position et influence",
      reading: [
        "Dieu a conçu l'homme pour diriger par sa position, et la femme pour diriger par son influence. L'homme tient sa position du fait qu'il a été créé le premier et qu'il est la source de la femme, dont il est responsable. La femme, qui reçoit et transforme, est faite pour influencer. « La main qui berce l'enfant gouverne le monde. »",
        "Ces deux pouvoirs ne s'opposent pas, ils s'exercent ensemble. L'homme porte la semence des nations : Dieu a fait d'Abraham le père d'une multitude. Mais sans Sara, aucune nation ne serait née. La semence ne sert à rien sans la terre.",
        "Le pouvoir de position s'accompagne d'un titre, roi, pasteur, médecin, et s'exerce par des ordres. Le pouvoir d'influence n'a pas besoin de titre, ni même de mots. Les hommes se disent « chef de la maison », mais ce sont les femmes qui la font tourner.",
        "Le père de l'auteur dirigeait la maison avec sa bouche : « Range la cuisine ! Enlève tes pieds du fauteuil ! » Sa mère, elle, le regardait simplement, et les pieds descendaient. Certains hommes croient les femmes faibles parce qu'elles ne donnent pas d'ordres : ils ne comprennent pas le pouvoir d'influence. Le pouvoir et l'influence sont égaux, mais différents.",
      ],
      keyTruth: "L'homme dirige par sa position, la femme par son influence : deux pouvoirs égaux, différents, faits pour s'unir.",
      verse: {
        ref: "Genèse 21:12",
        text: "Dieu dit à Abraham : Ne t'afflige pas à cause de l'enfant et de ta servante. Accorde à Sara tout ce qu'elle te demandera ; car c'est d'Isaac que sortira une postérité qui te sera propre.",
      },
      exercises: [
        {
          kind: "match",
          id: "f11p3e1",
          prompt: "Associe chaque forme de pouvoir à sa façon d'agir.",
          pairs: [
            ["Le pouvoir de position", "Un titre et des ordres"],
            ["Le pouvoir d'influence", "Sans titre, parfois sans un mot"],
          ],
          explain: "Un simple regard de la mère suffisait à faire descendre les pieds du fauteuil.",
        },
        {
          kind: "fill",
          id: "f11p3e2",
          before: "La main qui berce l'enfant gouverne le",
          after: ".",
          options: ["monde", "foyer seulement", "silence"],
          answer: 0,
          explain: "Le pouvoir d'influence est immense.",
        },
        {
          kind: "truefalse",
          id: "f11p3e3",
          statement: "Le pouvoir d'influence est inférieur au pouvoir de position.",
          answer: false,
          explain: "Ils sont égaux, mais différents, et faits pour s'exercer ensemble.",
        },
      ],
      mirror: {
        question: "Où ton influence se fait-elle le plus sentir ?",
        choices: ["Dans ma famille", "Au travail", "À l'église", "Dans mes amitiés", "Je ne m'en rends pas compte"],
      },
      prayer: "Seigneur, merci pour l'influence que Tu m'as confiée : qu'elle serve toujours ton Royaume.",
    },
    {
      id: "f11p4",
      title: "Une influence sous protection",
      reading: [
        "Satan a compris la force de l'influence. Il voulait atteindre l'homme, la fondation, mais on ne détruit pas directement un pouvoir de position solide : on le détruit par l'influence. Il est donc allé vers la femme, qui a mangé, puis a influencé son mari. Il n'a jamais changé de tactique, tant elle a bien marché.",
        "Après la chute, Dieu a placé l'influence de la femme sous régulation. « Il dominera sur toi » veut dire « régulera », pas « fera le chef ». Ce n'était pas le plan d'origine : c'est temporaire, jusqu'à ce que le Fils, né d'une femme, restaure son partenariat. Dieu l'a fait pour la protéger, comme Il a éloigné Adam et Ève de l'arbre de vie. Ce n'est pas parce qu'elle est le vase le plus faible, mais parce qu'elle est potentiellement le plus dangereux. À l'homme, Dieu a laissé les épines et les difficultés de la vie pour le réguler.",
        "Le pouvoir de position s'annonce : « Je suis le chef. » L'influence, elle, entre en silence, et quand on la remarque, elle a déjà pris le contrôle. Une femme qui n'est pas habitée par le Saint-Esprit est une influence puissante qui peut détruire sans frein. Le vrai pouvoir n'est pas seulement au palais présidentiel, il est aussi dans la chambre : « Je ne crois pas que tu devrais faire ça, chéri », et cela devient la politique du pays.",
        "Adam a préféré la voix d'Ève à celle de Dieu. Abraham a écouté Sara plutôt que la promesse, et le conflit qui en est né dure encore. Samson a livré son secret à Dalila. Cette influence est un don de Dieu, fait pour le bien. Même une femme rachetée doit la discipliner.",
      ],
      keyTruth: "Mon influence est un don puissant de Dieu : sous la conduite du Saint-Esprit, elle bâtit ; sans Lui, elle peut détruire.",
      verse: {
        ref: "Proverbes 31:3",
        text: "Ne livre pas ta vigueur aux femmes, et tes voies à celles qui perdent les rois.",
      },
      exercises: [
        {
          kind: "choice",
          id: "f11p4e1",
          prompt: "Pourquoi le serpent est-il allé vers la femme plutôt que vers l'homme ?",
          options: [
            "Parce qu'elle était plus faible",
            "Pour atteindre le pouvoir de position par le pouvoir d'influence",
            "Par hasard",
          ],
          answer: 1,
          explain: "On ne détruit pas directement une position solide : on passe par l'influence.",
        },
        {
          kind: "truefalse",
          id: "f11p4e2",
          statement: "Selon l'auteur, Dieu a placé la femme sous régulation parce qu'elle est le vase le plus faible.",
          answer: false,
          explain: "C'est parce que son influence, déchue, est potentiellement la plus dangereuse.",
        },
        {
          kind: "match",
          id: "f11p4e3",
          prompt: "Associe chaque homme à l'influence qui l'a détourné.",
          pairs: [
            ["Adam", "Ève"],
            ["Abraham", "Sara"],
            ["Samson", "Dalila"],
          ],
          explain: "Trois exemples d'influence corrompue dans la Bible.",
        },
      ],
      mirror: {
        question: "Utilises-tu ton influence pour bâtir ou parfois pour manipuler ?",
        choices: ["Pour bâtir", "Parfois pour manipuler", "Je ne m'en rends pas compte", "Je veux la soumettre à Dieu"],
      },
      prayer: "Saint-Esprit, prends le contrôle de mon influence : qu'elle ne détourne jamais personne de Dieu.",
    },
    {
      id: "f11p5",
      title: "Restaurée comme partenaire",
      reading: [
        "L'influence de la femme n'est pas le fruit de la chute : c'est sa corruption qui l'est. Dieu veut rendre à la femme toute sa place de leader. Quand le Saint-Esprit revient dans la vie d'une femme, le plan de Dieu pour elle redevient celui du commencement. Pierre appelle les femmes « cohéritières de la grâce de la vie ».",
        "La Bible raconte un programme de restauration : Genèse 1 et 2 montrent le plan parfait, Genèse 3 sa chute, et tout le reste, jusqu'à l'Apocalypse, ce que Dieu fait pour le restaurer. En Christ, la femme retrouve la communion avec Dieu et sa place de partenaire de l'homme. Elle n'a plus à être dominée par lui ; sinon, l'œuvre du Christ aurait échoué.",
        "La femme a été créée pour être une aide, pas une esclave. Le Saint-Esprit est appelé l'Aide, le Consolateur, et Il nous conduit dans toute la vérité. Être une aide ne veut pas dire être inférieure : une aide peut guider et enseigner.",
        "Dans le plan de Dieu, l'homme reste la tête responsable, mais il n'est pas le « patron », ni le propriétaire de la femme. Elle est co-leader. Le Christ et l'Église en sont le modèle : la tête et le corps travaillent ensemble.",
      ],
      keyTruth: "En Christ, je suis cohéritière de la grâce de la vie : une aide, jamais une esclave, et une partenaire de plein droit.",
      verse: {
        ref: "Colossiens 1:18",
        text: "Il est la tête du corps de l'Église ; il est le commencement, le premier-né d'entre les morts, afin d'être en tout le premier.",
      },
      exercises: [
        {
          kind: "truefalse",
          id: "f11p5e1",
          statement: "L'influence de la femme est une conséquence de la chute.",
          answer: false,
          explain: "C'est un don de la création ; seule sa corruption vient de la chute.",
        },
        {
          kind: "choice",
          id: "f11p5e2",
          prompt: "Que montre le fait que le Saint-Esprit soit appelé « l'Aide » ?",
          options: ["Qu'une aide est inférieure", "Qu'une aide peut guider et enseigner", "Que l'aide ne sert à rien"],
          answer: 1,
          explain: "Être une aide ne veut pas dire être inférieure.",
        },
        {
          kind: "match",
          id: "f11p5e3",
          prompt: "Associe chaque partie de la Bible à son rôle dans le programme de Dieu.",
          pairs: [
            ["Genèse 1 et 2", "Le plan parfait"],
            ["Genèse 3", "La chute"],
            ["De Genèse 3 à l'Apocalypse", "La restauration"],
          ],
          explain: "Toute la Bible raconte le programme de restauration de Dieu.",
        },
      ],
      mirror: {
        question: "Te sens-tu partenaire ou servante dans tes relations ?",
        choices: ["Partenaire", "Servante", "Ça dépend", "Je ne sais pas"],
      },
      prayer: "Jésus, merci de m'avoir restaurée : je reçois ma place de cohéritière et de partenaire.",
    },
    {
      id: "f11p6",
      title: "L'épouse du Second Adam",
      reading: [
        "Avant de retourner au Père, Jésus voulait influencer le monde pour son Royaume. Lui, le Roi et la Parole, exerçait un pouvoir de position. Pour influencer le monde, Il avait besoin d'une épouse dotée d'un pouvoir d'influence.",
        "Le Second Adam a vécu ce qu'avait vécu le premier. Il s'est endormi dans la mort sur la croix, et de son côté percé sont sortis le sang et l'eau : l'Église est née de son côté, comme la femme du côté d'Adam. Elle est appelée « elle », l'épouse.",
        "Adam aurait dû protéger Ève et la garder purifiée par la Parole. Il l'a laissée seule face au serpent, puis l'a suivie dans la désobéissance. Jésus, l'Adam parfait, dit à son épouse : « Je ne te délaisserai point. » C'est pour cela que Satan ne peut pas vaincre l'Église.",
        "Jésus a laissé la terre entre les mains d'une « femme », l'Église, en lui confiant sa Parole. Il ne l'appelle pas servante, mais amie ; elle est assise avec Lui dans les lieux célestes, pas en dessous. Le Roi a une reine. Quand des hommes traitent les femmes comme inférieures, ils se nuisent à eux-mêmes : celui qui aime sa femme s'aime lui-même.",
      ],
      keyTruth: "Le Christ a confié le monde et sa Parole à son épouse : la femme n'est pas faite pour être en dessous, mais aux côtés.",
      verse: {
        ref: "Hébreux 13:5",
        text: "Car Dieu lui-même a dit : Je ne te délaisserai point, et je ne t'abandonnerai point.",
      },
      exercises: [
        {
          kind: "order",
          id: "f11p6e1",
          prompt: "Remets dans l'ordre le parallèle entre Adam et le Christ.",
          items: ["Le Second Adam s'endort dans la mort", "Son côté est percé", "Le sang et l'eau coulent", "L'Église naît de son côté"],
          explain: "Comme la femme est née du côté d'Adam.",
        },
        {
          kind: "choice",
          id: "f11p6e2",
          prompt: "Entre les mains de qui Jésus a-t-Il laissé la terre ?",
          options: ["Des anges", "De son épouse, l'Église", "Des rois de la terre"],
          answer: 1,
          explain: "Il lui a confié sa Parole et la mission d'influencer le monde.",
        },
        {
          kind: "truefalse",
          id: "f11p6e3",
          statement: "Un homme qui rabaisse les femmes se nuit à lui-même.",
          answer: true,
          explain: "Celui qui aime sa femme s'aime lui-même.",
        },
      ],
      mirror: {
        question: "Que fais-tu de la mission d'influencer le monde pour le Christ ?",
        choices: ["Je la vis au quotidien", "J'aimerais la vivre plus", "Je ne m'en sens pas capable", "Je n'y avais pas pensé"],
      },
      prayer: "Jésus, Toi qui ne me délaisses jamais, aide-moi à porter ta Parole et ton influence dans le monde.",
    },
    {
      id: "f11p7",
      title: "Et les écrits de Paul ?",
      reading: [
        "Beaucoup pensent que Paul interdit aux femmes de diriger, ou se contredit. Mais il écrivait dans deux contextes : celui du dessein de Dieu pour l'esprit-homme, et celui de conseils pratiques à des Églises aux prises avec les effets de la chute dans leur culture.",
        "Quand il écrit « il n'y a plus ni homme ni femme, car vous êtes tous un en Jésus-Christ », il parle de l'esprit-homme racheté. Quand il dit aux Corinthiens « que les femmes se taisent dans les assemblées », il répond à un désordre local. Dans la même lettre, il donne des consignes aux femmes qui prient et prophétisent : elles parlaient donc ! Dieu est un Dieu d'ordre.",
        "Pourtant, on s'appuie sur ces quelques phrases pour dire que les femmes doivent se taire, porter un chapeau et ne jamais prêcher. Qu'est-ce qui compte le plus : la culture ou le Christ ? Jésus a-t-Il jamais fait taire une femme ? A-t-Il empêché une femme de prêcher ? La Samaritaine est devenue évangéliste !",
        "Tout est Parole de Dieu, mais Paul traitait là de questions culturelles, et Jésus de principes : il ne faut pas confondre culture et principe. Jésus a élevé et restauré la dignité des femmes. Si une femme qui prêche te dérange, ferme les yeux et écoute l'esprit qui parle : c'est l'Esprit qui fait vivre.",
      ],
      keyTruth: "Paul parlait aussi à des cultures précises, Jésus énonçait des principes : Jésus n'a jamais fait taire une femme.",
      verse: {
        ref: "2 Corinthiens 3:6",
        text: "Il nous a aussi rendus capables d'être ministres d'une nouvelle alliance, non de la lettre, mais de l'esprit ; car la lettre tue, mais l'esprit vivifie.",
      },
      exercises: [
        {
          kind: "match",
          id: "f11p7e1",
          prompt: "Associe chaque parole de Paul à son contexte.",
          pairs: [
            ["« Il n'y a plus ni homme ni femme »", "L'esprit-homme racheté en Christ"],
            ["« Que les femmes se taisent »", "Un désordre local à Corinthe"],
          ],
          explain: "Paul écrivait dans deux contextes différents.",
        },
        {
          kind: "truefalse",
          id: "f11p7e2",
          statement: "Dans la même lettre aux Corinthiens, Paul parle de femmes qui prient et prophétisent.",
          answer: true,
          explain: "Elles parlaient donc : la consigne de silence visait l'ordre, pas l'interdiction.",
        },
        {
          kind: "choice",
          id: "f11p7e3",
          prompt: "Qu'a fait la Samaritaine après sa rencontre avec Jésus ?",
          options: ["Elle s'est tue", "Elle est allée annoncer Jésus à toute sa ville", "Elle a quitté la ville"],
          answer: 1,
          explain: "Jésus n'a jamais empêché une femme de prêcher.",
        },
      ],
      mirror: {
        question: "As-tu déjà été freinée dans ton service à cause de ton sexe ?",
        choices: ["Oui", "Un peu", "Non", "Je me suis freinée moi-même"],
      },
      prayer: "Seigneur, libère-moi de la lettre qui tue, et fais vivre ton Esprit en moi pour servir sans crainte.",
    },
    {
      id: "f11p8",
      title: "Bienvenue en terre de liberté",
      reading: [
        "Dans chaque personne qui suit se cache un leader qui s'ignore, et il y a beaucoup de leaders cachés parmi les femmes de nos églises. Le dicton est vrai : si tu veux qu'une chose soit faite, confie-la à une femme. Même dans un rôle de position, elle apporte son influence et son instinct : c'est pour cela qu'elle fait d'excellentes négociatrices.",
        "Des églises sont remplies de femmes, mais les hommes ne leur confient aucune responsabilité. Les hommes promettent de venir et ne viennent pas ; les femmes ne disent rien, mais elles viennent, et elles en entraînent d'autres.",
        "Harriet Tubman, qui a libéré tant d'esclaves, disait en franchissant la frontière : « J'étais libre, mais personne n'était là pour m'accueillir au pays de la liberté. J'étais une étrangère en terre étrangère. » Beaucoup de femmes ressentent la même chose : libérées par le Christ, rendues à leur place de partenaires, mais personne ne les accueille dans cette terre de service.",
        "« C'est pour la liberté que Christ nous a affranchis. » Il est temps que les hommes accueillent les femmes dans la terre de la liberté. La puissance de position et la puissance d'influence, unies dans un même but, font trembler le diable.",
      ],
      keyTruth: "Le Christ m'a libérée : je ne suis pas une étrangère dans son Royaume, mais une leader qu'Il appelle à servir.",
      verse: {
        ref: "Galates 5:1",
        text: "C'est pour la liberté que Christ nous a affranchis. Demeurez donc fermes, et ne vous laissez pas mettre de nouveau sous le joug de la servitude.",
      },
      exercises: [
        {
          kind: "fill",
          id: "f11p8e1",
          before: "Si tu veux qu'une chose soit faite, confie-la à une",
          after: ".",
          options: ["femme", "commission", "machine"],
          answer: 0,
          explain: "Les femmes sont des leaders efficaces, souvent cachées.",
        },
        {
          kind: "choice",
          id: "f11p8e2",
          prompt: "Que ressentait Harriet Tubman en franchissant la frontière de la liberté ?",
          options: ["De la peur", "D'être une étrangère que personne n'accueillait", "De la colère"],
          answer: 1,
          explain: "Beaucoup de femmes libérées par le Christ ressentent la même chose dans l'Église.",
        },
        {
          kind: "truefalse",
          id: "f11p8e3",
          statement: "Position et influence unies dans un même but rendent l'Église plus forte face au diable.",
          answer: true,
          explain: "Le diable est en difficulté quand les deux pouvoirs s'unissent.",
        },
      ],
      mirror: {
        question: "Quel service Dieu pourrait-Il te confier dans ton Église ?",
        choices: ["Enseigner", "Prier pour les autres", "Organiser", "Accueillir", "Je vais Lui demander"],
      },
      prayer: "Christ, Toi qui m'as affranchie, donne-moi le courage de demeurer ferme et de servir avec toute la liberté que Tu m'as donnée.",
    },
  ],
};
