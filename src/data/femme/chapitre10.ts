import type { Chapter } from "../types";

// Livre « Le but et la puissance de la femme », chapitre 10 :
// « Les besoins émotionnels et la sexualité de la femme ». Paraphrase libre en français
// des idées de l'auteur, écrite avec nos propres mots (aucune traduction du texte original).
// Versets : Louis Segond 1910.

export const chapitre10: Chapter = {
  id: "f10",
  number: 10,
  title: "Les besoins émotionnels et la sexualité de la femme",
  theme: "Amour, conversation, tendresse : connaître les besoins de l'autre pour les combler.",
  portions: [
    {
      id: "f10p1",
      title: "Des besoins différents par conception",
      reading: [
        "Savais-tu que la peau d'une femme a deux fois plus de terminaisons nerveuses que celle d'un homme ? Ses nerfs sont plus vite mis à rude épreuve, et sa peau est presque faite pour recevoir les gestes tendres d'un mari qui l'apaisent.",
        "Les femmes prennent les choses à cœur, les hommes de façon impersonnelle. Les femmes sont comme des ordinateurs qui continuent de tourner jusqu'à la solution ; les hommes comme des classeurs qu'on referme. La maison prolonge la personnalité de la femme, le travail celle de l'homme. Elle a besoin de racines, lui peut être nomade. Elle a tendance à culpabiliser, lui à garder rancune. Elle change sans cesse, lui se stabilise. Elle s'engage vite, lui observe d'abord.",
        "Le but détermine la conception, et la conception détermine les besoins. Après vingt ans de conseil conjugal, l'auteur constate que le plus grand problème est que les époux ignorent que les besoins de l'autre sont différents des leurs.",
        "L'épanouissement vient quand chacun travaille à combler les besoins de l'autre. Il y a plus de bonheur à donner qu'à recevoir : en comblant l'autre, beaucoup de tes propres besoins seront comblés. Les besoins décrits pour l'un existent aussi chez l'autre, mais ils sont présentés ici comme les besoins premiers de chacun.",
      ],
      keyTruth: "Nos besoins découlent de notre conception : je cherche d'abord à combler ceux de l'autre plutôt qu'à exiger les miens.",
      verse: {
        ref: "Galates 6:2",
        text: "Portez les fardeaux les uns des autres, et vous accomplirez ainsi la loi de Christ.",
      },
      exercises: [
        {
          kind: "match",
          id: "f10p1e1",
          prompt: "Associe chaque tendance à la femme ou à l'homme.",
          pairs: [
            ["Comme un ordinateur qui tourne jusqu'à la solution", "La femme"],
            ["Comme un classeur qu'on referme", "L'homme"],
          ],
          explain: "Deux façons différentes de traiter les problèmes.",
        },
        {
          kind: "fill",
          id: "f10p1e2",
          before: "Le but détermine la conception, et la conception détermine les",
          after: ".",
          options: ["besoins", "défauts", "goûts"],
          answer: 0,
          explain: "C'est le principe qui traverse tout le livre.",
        },
        {
          kind: "truefalse",
          id: "f10p1e3",
          statement: "Le plus grand problème des couples est souvent d'ignorer que les besoins de l'autre sont différents des siens.",
          answer: true,
          explain: "C'est ce que l'auteur a constaté en vingt ans de conseil conjugal.",
        },
      ],
      mirror: {
        question: "Connais-tu vraiment les besoins des personnes qui te sont proches ?",
        choices: ["Oui, bien", "Un peu", "Pas vraiment", "Je ne leur ai jamais demandé"],
      },
      prayer: "Seigneur, apprends-moi à porter les fardeaux des autres et à découvrir leurs vrais besoins.",
    },
    {
      id: "f10p2",
      title: "« C'est toi que je veux »",
      reading: [
        "Le besoin premier de la femme est l'amour. Si les hommes n'apprenaient que cela, la vie de beaucoup de femmes, et la leur, changerait. Elle ne veut pas seulement être aimée : elle en a besoin, par conception.",
        "Un homme peut lui offrir une maison et des cadeaux coûteux, et elle reste insatisfaite. « Je fais tout pour toi, qu'est-ce qui ne va pas ? » « Ce n'est pas le manteau de fourrure ou la maison que je veux. C'est toi. Je veux que tu me dises que je compte, que je suis unique pour toi, que tu m'aimes. »",
        "Aimer, c'est chérir, prendre soin et montrer de la tendresse. Chérir, ce n'est pas offrir des cadeaux chers, c'est l'appeler plusieurs fois par jour pour lui dire qu'on l'aime. Prendre soin, c'est tout lâcher pour s'assurer qu'elle va bien ; l'amour ne dit pas « je suis occupé, on en parle plus tard ». La sécurité financière et le temps passé ensemble lui montrent aussi qu'elle passe en premier. Mais celui qui accumule les heures supplémentaires en négligeant sa femme peut avoir des millions à la banque : elle ne se sentira pas aimée.",
        "Pour une femme célibataire, recevoir de l'amour reste son plus grand besoin. Elle a besoin de l'affection et de la compagnie des hommes : pères, oncles, frères et amis peuvent l'entourer d'un amour fraternel.",
      ],
      keyTruth: "Le besoin premier de la femme n'est pas d'avoir des choses, mais d'être aimée : chérie, entourée de soin et de tendresse.",
      verse: {
        ref: "Cantique des cantiques 8:7",
        text: "Les grandes eaux ne peuvent éteindre l'amour, et les fleuves ne le submergeraient pas ; quand un homme offrirait tous les biens de sa maison contre l'amour, il ne s'attirerait que le mépris.",
      },
      exercises: [
        {
          kind: "choice",
          id: "f10p2e1",
          prompt: "Quel est le besoin premier de la femme ?",
          options: ["L'argent", "L'amour", "La réussite"],
          answer: 1,
          explain: "Elle en a besoin par conception.",
        },
        {
          kind: "match",
          id: "f10p2e2",
          prompt: "Associe chaque facette de l'amour à un geste concret.",
          pairs: [
            ["Chérir", "L'appeler pour lui dire qu'on l'aime"],
            ["Prendre soin", "Tout lâcher pour s'assurer qu'elle va bien"],
            ["La tendresse", "Câlins, mots doux, attentions"],
          ],
          explain: "Aimer, c'est chérir, prendre soin et montrer de la tendresse.",
        },
        {
          kind: "truefalse",
          id: "f10p2e3",
          statement: "Une femme dont le mari gagne beaucoup se sent forcément aimée.",
          answer: false,
          explain: "Sans temps et sans attention, même des millions ne suffisent pas.",
        },
      ],
      mirror: {
        question: "Te sens-tu chérie par les personnes qui comptent pour toi ?",
        choices: ["Oui", "Parfois", "Rarement", "Je me sens surtout aimée de Dieu"],
      },
      prayer: "Seigneur, Toi dont l'amour ne s'achète pas, remplis le besoin d'amour que Tu as mis en moi.",
    },
    {
      id: "f10p3",
      title: "Il a besoin de respect",
      reading: [
        "Parce que son propre besoin premier est l'amour, la femme pense souvent que c'est aussi celui de l'homme. Il a besoin d'amour, mais il a un besoin encore plus grand.",
        "Une femme peut tenir la maison à merveille, écrire des mots doux à son mari, l'entourer de tendresse, et se demander pourquoi il ne semble pas comblé. Il apprécie tout cela, comme elle apprécie la maison qu'il lui offre. Mais cela ne touche pas son besoin premier.",
        "Autant une femme a besoin de se sentir aimée, autant un homme a besoin de se savoir respecté. Le respect est au cœur de son estime de lui-même, et touche tous les domaines de sa vie. Une femme peut y répondre mieux que quiconque en reconnaissant sa valeur et ses réussites, en lui rappelant ses capacités et en l'aidant à garder confiance. Qu'elle soit fière de lui, non par devoir, mais par admiration sincère.",
        "Un homme célibataire a autant besoin de respect : les femmes de sa vie peuvent reconnaître sa valeur et l'encourager dans ses talents et son œuvre. Le mari aime et chérit, la femme respecte et honore : chacun comble alors le besoin premier de l'autre.",
      ],
      keyTruth: "Autant la femme a besoin d'être aimée, autant l'homme a besoin d'être respecté : chacun comble le besoin premier de l'autre.",
      verse: {
        ref: "Philippiens 2:3",
        text: "Ne faites rien par esprit de parti ou par vaine gloire, mais que l'humilité vous fasse regarder les autres comme étant au-dessus de vous-mêmes.",
      },
      exercises: [
        {
          kind: "match",
          id: "f10p3e1",
          prompt: "Associe à chacun son besoin premier.",
          pairs: [
            ["La femme", "L'amour"],
            ["L'homme", "Le respect"],
          ],
          explain: "Le mari aime et chérit, la femme respecte et honore.",
        },
        {
          kind: "truefalse",
          id: "f10p3e2",
          statement: "Une femme qui donne beaucoup d'amour à son mari comble forcément son besoin premier.",
          answer: false,
          explain: "Son besoin le plus profond est le respect.",
        },
        {
          kind: "fill",
          id: "f10p3e3",
          before: "La femme peut être fière de son mari, non par devoir, mais par",
          after: "sincère.",
          options: ["admiration", "obligation", "habitude"],
          answer: 0,
          explain: "Le respect sincère nourrit son estime de lui-même.",
        },
      ],
      mirror: {
        question: "Comment pourrais-tu montrer du respect à un homme de ta vie cette semaine ?",
        choices: ["Le remercier", "Reconnaître une réussite", "Demander son avis", "Le défendre devant d'autres"],
      },
      prayer: "Père, donne-moi un regard d'admiration sincère sur les hommes que Tu as placés dans ma vie.",
    },
    {
      id: "f10p4",
      title: "En attendant qu'il apprenne",
      reading: [
        "Un vrai problème : une femme peut honorer et estimer son mari, et lui ne pas lui montrer d'amour, simplement parce qu'il ne sait pas comment faire. Si elle comprend leurs besoins mais pas lui, elle doit être patiente et lui répondre selon ce qu'il sait.",
        "On ne peut pas en vouloir à quelqu'un qui ignore. Jésus en est le plus grand modèle : « Père, pardonne-leur, car ils ne savent ce qu'ils font. » Il faut passer sur les fautes de celui qui ne sait pas : cela protège le cœur de l'amertume.",
        "C'est différent quand il sait ce qu'il devrait faire mais ne le fait pas. Alors une correction est nécessaire. Selon la situation, la femme peut lui parler directement, ou demander au pasteur, à un ami chrétien de confiance ou à un membre de la famille de lui parler.",
        "Mais son meilleur recours est de prier pour son mari et de laisser le Seigneur le changer. Ne pas accuser l'autre, vivre de façon responsable devant Dieu, remplir ses propres responsabilités, et faire confiance à Dieu pour enseigner à son conjoint comment combler ses besoins.",
      ],
      keyTruth: "Quand l'autre ne sait pas encore m'aimer comme j'en ai besoin, je choisis la patience, je prie, et je garde mon cœur de l'amertume.",
      verse: {
        ref: "Luc 23:34",
        text: "Jésus dit : Père, pardonne-leur, car ils ne savent ce qu'ils font.",
      },
      exercises: [
        {
          kind: "choice",
          id: "f10p4e1",
          prompt: "Que faire si ton mari ne sait pas comment t'aimer ?",
          options: ["Lui en vouloir", "Être patiente, prier et lui répondre selon ce qu'il sait", "Le quitter"],
          answer: 1,
          explain: "On ne peut pas reprocher à quelqu'un ce qu'il ignore.",
        },
        {
          kind: "truefalse",
          id: "f10p4e2",
          statement: "Si le mari sait ce qu'il devrait faire et ne le fait pas, une correction peut être nécessaire.",
          answer: true,
          explain: "Directement, ou par l'intermédiaire du pasteur ou d'un ami de confiance.",
        },
        {
          kind: "fill",
          id: "f10p4e3",
          before: "Passer sur les fautes de celui qui ne sait pas protège le cœur de",
          after: ".",
          options: ["l'amertume", "l'amour", "l'espoir"],
          answer: 0,
          explain: "C'est le modèle de Jésus sur la croix.",
        },
      ],
      mirror: {
        question: "Y a-t-il quelqu'un dont tu attends quelque chose qu'il ne sait peut-être pas te donner ?",
        choices: ["Mon conjoint", "Un parent", "Un ami", "Non"],
      },
      prayer: "Jésus, Toi qui as pardonné à ceux qui ne savaient pas, donne-moi ta patience et garde mon cœur de l'amertume.",
    },
    {
      id: "f10p5",
      title: "Parler avec elle",
      reading: [
        "Deuxième besoin de la femme : la conversation. Elle a besoin qu'un homme parle avec elle, pas à elle. Avec son esprit de leader, l'homme transforme souvent la conversation en consignes. Un cadeau coûteux posé avant de repartir ne vaut rien pour elle : elle préfère la conversation.",
        "Pour combler ce besoin, il doit lui parler au niveau des sentiments, pas seulement des informations, et écouter avec intérêt ce qu'elle a vécu dans sa journée. Toutes ses conversations doivent montrer qu'il veut la comprendre, pas la changer. Donc pas de solutions immédiates : d'abord toute son attention. Puis il lui dit, les yeux dans les yeux, ce qu'il pense et ressent, et lui expose clairement ses projets, parce qu'il se considère comme responsable devant elle. Elle pourra alors lui faire confiance.",
        "« De quoi je vais lui parler ? » Il suffit de demander : « Qu'est-ce qui te préoccupe ? » Elle aura beaucoup à dire. Il n'a plus qu'à répondre « Ah oui ? Je vois », à condition d'écouter vraiment !",
        "La femme, elle, peut créer des occasions de conversation en s'intéressant au travail et aux loisirs de son mari. Plutôt que « éteins cette télé », elle peut dire : « Explique-moi ce match, je veux tout comprendre. » Il parlera aussitôt, et après le match, elle aura toute son attention.",
      ],
      keyTruth: "Une femme a besoin qu'on parle avec elle, pas à elle : être écoutée et comprise, pas changée.",
      verse: {
        ref: "Proverbes 25:11",
        text: "Comme des pommes d'or sur des ciselures d'argent, ainsi est une parole dite à propos.",
      },
      exercises: [
        {
          kind: "fill",
          id: "f10p5e1",
          before: "La femme a besoin qu'on parle avec elle, pas",
          after: "elle.",
          options: ["à", "pour", "contre"],
          answer: 0,
          explain: "Un vrai dialogue, pas une liste de consignes.",
        },
        {
          kind: "choice",
          id: "f10p5e2",
          prompt: "Que doit éviter un homme quand sa femme lui parle de sa journée ?",
          options: ["De l'écouter", "De vouloir tout de suite résoudre ses problèmes", "De la regarder"],
          answer: 1,
          explain: "Il doit d'abord offrir son attention et sa compréhension.",
        },
        {
          kind: "truefalse",
          id: "f10p5e3",
          statement: "S'intéresser aux loisirs de son mari peut ouvrir la porte à la conversation.",
          answer: true,
          explain: "Il aime parler de ce qui le passionne, et sera ensuite disponible.",
        },
      ],
      mirror: {
        question: "As-tu eu récemment une vraie conversation où tu t'es sentie écoutée ?",
        choices: ["Oui", "Pas depuis longtemps", "Je ne sais plus ce que c'est", "Avec Dieu, oui"],
      },
      prayer: "Seigneur, mets sur mes lèvres des paroles dites à propos, et donne-moi des oreilles qui écoutent vraiment.",
    },
    {
      id: "f10p6",
      title: "Complice de ses loisirs",
      reading: [
        "Pendant que la femme a besoin de conversation, l'homme a besoin de complicité dans ses loisirs. Les deux besoins parlent de partager la compagnie de l'autre : quand elle participe à ses loisirs, il se met à lui parler.",
        "Ce besoin vient de sa conception. Créé en premier, avec une nature de leader et de protecteur, l'homme a besoin de défendre son « territoire » et de sentir qu'il gagne. Cela se traduit par le désir de gagner une compétition ou de maîtriser un domaine. Il aime gagner, mais il aime aussi partager ces moments.",
        "Rien ne touche plus un homme qu'une femme qui s'implique dans ses loisirs : tennis, visites historiques, musique, informatique… Qu'elle le laisse lui raconter, et leur relation se fortifiera. Certains hommes se rapprochent d'autres femmes qui partagent leur activité, parce qu'ils ont besoin de cette complicité. Une épouse peut l'éviter en s'y intéressant.",
        "« Ce vieux fou est encore au terrain de foot ! Qu'il rentre être un mari ! » Cette attitude n'aide pas. S'il y passe des heures, c'est qu'un besoin est comblé là-bas. Plutôt que de combattre ce qui l'épanouit, découvre pourquoi c'est important pour lui, et partagez-le si possible.",
      ],
      keyTruth: "Partager ce qui passionne l'autre crée la complicité : au lieu de combattre ce qui l'épanouit, je cherche à le comprendre.",
      verse: {
        ref: "Ecclésiaste 9:9",
        text: "Jouis de la vie avec la femme que tu aimes, pendant tous les jours de ta vie de vanité, que Dieu t'a donnés sous le soleil.",
      },
      exercises: [
        {
          kind: "match",
          id: "f10p6e1",
          prompt: "Associe à chacun son besoin de compagnie.",
          pairs: [
            ["La femme", "La conversation"],
            ["L'homme", "La complicité dans les loisirs"],
          ],
          explain: "Deux besoins qui parlent de partager la compagnie de l'autre.",
        },
        {
          kind: "choice",
          id: "f10p6e2",
          prompt: "D'où vient le besoin de l'homme de gagner selon l'auteur ?",
          options: ["De son orgueil seulement", "De sa nature de leader et de protecteur de son « territoire »", "De la télévision"],
          answer: 1,
          explain: "Créé en premier pour conduire et protéger, il a besoin de sentir qu'il gagne.",
        },
        {
          kind: "truefalse",
          id: "f10p6e3",
          statement: "Critiquer les loisirs de son mari l'aide à rentrer plus tôt.",
          answer: false,
          explain: "Mieux vaut comprendre le besoin qu'ils comblent, et les partager si possible.",
        },
      ],
      mirror: {
        question: "T'intéresses-tu à ce qui passionne les personnes que tu aimes ?",
        choices: ["Oui, souvent", "Parfois", "Rarement", "Je trouve ça ennuyeux"],
      },
      prayer: "Seigneur, aide-moi à entrer dans le monde de ceux que j'aime, pour y construire la complicité.",
    },
    {
      id: "f10p7",
      title: "La tendresse avant l'événement",
      reading: [
        "Troisième besoin de la femme : la tendresse. Celui de l'homme : la sexualité. Mal compris, ces deux besoins provoquent parmi les pires conflits d'un couple. La tendresse crée le climat de l'union, la sexualité en est l'événement. La plupart des hommes foncent vers l'événement sans créer le climat.",
        "Cela vient de leur conception. L'homme est la source : il porte la semence, et son inclination naturelle est de la donner. La femme porte la vie : elle offre un environnement chaud et sûr. Voilà pourquoi elle a besoin d'un climat de tendresse pour se sentir aimée. Et la femme a des saisons, liées à son cycle : l'été chaud, l'automne plus réservé, l'hiver où l'homme se sent à la porte, puis le printemps où tout renaît. Il peut être prêt quand, pour elle, c'est l'hiver.",
        "Certains hommes n'ont aucun égard. Beaucoup violent leur femme en pensant que le mariage les y autorise. Ce n'est pas être un homme, c'est être une bête ; ce n'est pas de l'amour, c'est un viol, même dans le cadre du mariage. Et quand l'homme est satisfait, cela ne veut pas dire que sa femme l'est.",
        "La tendresse, ce sont des fleurs, un appel quotidien, un petit mot sans occasion, lui tenir la main au centre commercial, pousser le chariot, l'aider en cuisine : « Je coupe les oignons, que mes yeux pleurent pour une fois ! » « Où est mon dîner ? » n'est pas tendre. Des femmes disent : « Cet homme de Dieu prie, prêche, puis me traite comme une prostituée. » Qu'il n'en soit pas ainsi parmi nous. Quand une femme dit « serre-moi dans tes bras », elle ne demande pas d'aller au lit : elle demande de la tendresse.",
      ],
      keyTruth: "La tendresse crée le climat, l'union en est l'événement : l'amour véritable est patient, attentionné et respectueux.",
      verse: {
        ref: "Cantique des cantiques 2:6",
        text: "Que sa main gauche soit sous ma tête, et que sa droite m'embrasse !",
      },
      exercises: [
        {
          kind: "match",
          id: "f10p7e1",
          prompt: "Complète l'image de cette portion.",
          pairs: [
            ["La tendresse", "Le climat"],
            ["L'union", "L'événement"],
          ],
          explain: "La plupart des hommes foncent vers l'événement sans créer le climat.",
        },
        {
          kind: "truefalse",
          id: "f10p7e2",
          statement: "Le mariage autorise un mari à forcer sa femme.",
          answer: false,
          explain: "C'est un viol, même dans le mariage : ce n'est pas être un homme, c'est être une bête.",
        },
        {
          kind: "choice",
          id: "f10p7e3",
          prompt: "Que demande une femme qui dit « serre-moi dans tes bras » ?",
          options: ["Forcément d'aller au lit", "De la tendresse", "Qu'on la laisse tranquille"],
          answer: 1,
          explain: "Elle a besoin d'un climat de tendresse pour se sentir aimée.",
        },
      ],
      mirror: {
        question: "Te sens-tu respectée et entourée de tendresse dans l'intimité ?",
        choices: ["Oui", "Pas toujours", "Non", "Je ne suis pas mariée", "Je préfère ne pas répondre"],
      },
      prayer: "Seigneur, que l'amour dans le mariage soit toujours patient, tendre et respectueux, comme Tu l'as voulu.",
    },
    {
      id: "f10p8",
      title: "Toujours prêt, maître de lui",
      reading: [
        "L'homme a été conçu pour être leader, enseignant et protecteur : il doit être prêt à tout moment, de jour comme de nuit. Cette disponibilité touche toute sa vie, y compris sa sexualité. Ce n'est pas anormal. Mais être prêt ne veut pas dire passer à l'acte : Paul demande aux jeunes hommes d'être maîtres d'eux-mêmes, et cette énergie doit nourrir un leadership positif.",
        "Si son approche est brusque, la femme peut la trouver animale et le repousser ; lui y voit du désintérêt, et risque d'aller chercher ailleurs intérêt et respect. À l'inverse, certaines femmes s'occupent davantage de l'église et de l'évangélisation que de leur mari, et le laissent seul à la maison, lui qui est toujours prêt. C'est la recette du désastre.",
        "Paul dit que les époux ne doivent se priver l'un de l'autre que d'un commun accord et pour un temps, pour la prière. Certaines femmes converties disent : « Mon corps est le temple du Saint-Esprit, ne me touche pas. » C'est une erreur et un mauvais témoignage : la sexualité fait partie du plan de Dieu, elle est sainte entre mari et femme. Le corps de la femme appartient aussi à son mari, et celui du mari à sa femme. Mais chacun a son mot à dire : « Tu es toujours prêt, mais moi pas maintenant. » Et à l'homme qui pense mourir s'il n'obtient rien : non, tu ne mourras pas, maîtrise-toi.",
        "Si tu ne reçois pas ce dont tu as besoin, vérifie d'abord si tu combles les besoins de l'autre. Le peuple de Dieu périt faute de connaissance. Les situations de violence physique sont un autre sujet : si c'est ton cas, demande l'aide de ton pasteur et d'amis chrétiens de confiance.",
      ],
      keyTruth: "Dans le mariage, chaque corps appartient aussi à l'autre : on se donne avec générosité, et on se respecte avec maîtrise de soi.",
      verse: {
        ref: "1 Corinthiens 7:4",
        text: "La femme n'a pas autorité sur son propre corps, mais c'est le mari ; et pareillement, le mari n'a pas autorité sur son propre corps, mais c'est la femme.",
      },
      exercises: [
        {
          kind: "truefalse",
          id: "f10p8e1",
          statement: "Être toujours prêt dispense un homme de se maîtriser.",
          answer: false,
          explain: "Paul demande aux hommes d'être maîtres d'eux-mêmes.",
        },
        {
          kind: "choice",
          id: "f10p8e2",
          prompt: "Quand les époux peuvent-ils se priver l'un de l'autre selon Paul ?",
          options: ["Quand l'un le décide seul", "D'un commun accord et pour un temps, pour la prière", "Jamais"],
          answer: 1,
          explain: "1 Corinthiens 7:5, pour éviter les tentations.",
        },
        {
          kind: "fill",
          id: "f10p8e3",
          before: "Entre mari et femme, la sexualité est",
          after: ".",
          options: ["sainte", "honteuse", "facultative"],
          answer: 0,
          explain: "Elle fait partie du plan d'origine de Dieu.",
        },
      ],
      mirror: {
        question: "Dans tes relations, cherches-tu d'abord à recevoir ou à combler l'autre ?",
        choices: ["À recevoir", "À combler l'autre", "Les deux", "Je dois y réfléchir"],
      },
      prayer: "Père, apprends-moi la générosité et la maîtrise de soi, et que ta Parole forme ma façon d'aimer.",
    },
  ],
};
