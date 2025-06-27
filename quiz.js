// ==========================
// 🧠 1. Données du quiz
// ==========================

const quiz = [
  {
    question: "Quelle est la capitale de Madagascar ?",
    options: ["Tananarive", "Bamako", "Kinshina", "France"],
    answer: "Tananarive",
    image: "drapeau.png",
    difficulty: "facile",
    feedback: "<strong>Tananarive</strong> est la capitale de Madagascar."
  },
  {
    question: "Quel est le plat traditionnel malgache ?",
    options: ["Ravitoto", "Katsaka", "Vary", "Saka Saka"],
    answer: "Vary",
    difficulty: "moyen",
    feedback: "Le <strong>Vary</strong> est le plat traditionnel de Madagascar. C'est trop bon !"
  },
  {
    question: "Quel type de forêt unique trouve-t-on au sud-ouest de Madagascar ?",
    options: ["Forêt tropicale dense", "Forêt de mangrove", "Forêt épineuse", "Forêt boréale"],
    answer: "Forêt épineuse",
    difficulty: "moyen",
    feedback: "La <strong>forêt épineuse</strong> du sud-ouest de Madagascar est unique au monde..."
  },
  {
    question: "Quelle pratique funéraire malgache implique le retournement des morts ?",
    options: ["Famadihana", "Sambatra", "Kabar", "Tranomasina"],
    answer: "Famadihana",
    difficulty: "facile",
    feedback: "Le <strong>Famadihana</strong> est un rituel unique où les familles déterrent..."
  },
  {
    question: "Dans quelle région trouve-t-on le désert de sel d’Itraka ?",
    options: ["Sofia", "Anosy", "Androy", "Bongolava"],
    answer: "Androy",
    difficulty: "difficile",
    feedback: "Le désert salin d’<strong>Itraka</strong>, situé dans la région <strong>Androy</strong>..."
  },
  {
    question: "Quel est le plus grand lac de Madagascar ?",
    options: ["Lac Itasy", "Lac Alaotra", "Lac Anosy", "Lac Mandraka"],
    answer: "Lac Alaotra",
    difficulty: "moyen",
    feedback: "Le <strong>lac Alaotra</strong>, situé dans la région d’Alaotra-Mangoro..."
  },
  {
    question: "Quelle est la signification du mot 'Antananarivo' ?",
    options: ["Colline des hommes courageux", "Ville des mille", "Forteresse royale", "Cité rouge"],
    answer: "Ville des mille",
    difficulty: "facile",
    feedback: "Le mot <strong>Antananarivo</strong> signifie <strong>'la ville des mille'</strong>..."
  },
  {
    question: "Quel genre musical malgache est typique du sud de l'île ?",
    options: ["Kilalaka", "Salegy", "Tsapiky", "Beko"],
    answer: "Tsapiky",
    difficulty: "moyen",
    feedback: "Le <strong>tsapiky</strong> est un genre musical entraînant..."
  },
  {
    question: "Quelle plante de Madagascar est utilisée mondialement contre le cancer ?",
    options: ["Ravintsara", "Baobab", "Pervenche de Madagascar", "Saro"],
    answer: "Pervenche de Madagascar",
    difficulty: "difficile",
    feedback: "La <strong>pervenche de Madagascar</strong> (Catharanthus roseus)..."
  },
  {
    question: "Quel est le principal fleuve qui traverse l’ouest de Madagascar ?",
    options: ["Mangoky", "Tsiribihina", "Ikopa", "Mananjary"],
    answer: "Tsiribihina",
    difficulty: "moyen",
    feedback: "Le fleuve <strong>Tsiribihina</strong> est navigable et traverse les hauts plateaux..."
  },
  {
    question: "Quel village malgache est connu pour son architecture en pierre unique ?",
    options: ["Ambositra", "Ifaty", "Antoetra", "Betafo"],
    answer: "Betafo",
    difficulty: "difficile",
    feedback: "<strong>Betafo</strong> est un village historique des Hautes Terres..."
  },
  {
    question: "Quel symbole se trouve au centre du drapeau de la République malgache ?",
    options: ["Un soleil", "Une étoile rouge", "Aucun", "Une tête de zébu"],
    answer: "Aucun",
    difficulty: "facile",
    feedback: "Le drapeau malgache est <strong>sans symbole</strong>..."
  },
  {
    question: "Quel roi malgache est célèbre pour avoir unifié les hauts plateaux au XIXe siècle ?",
    options: ["Radama Ier", "Andrianampoinimerina", "Ranavalona I", "Rasoherina"],
    answer: "Andrianampoinimerina",
    difficulty: "difficile",
    feedback: "<strong>Andrianampoinimerina</strong> (1745–1810) est l’un des rois les plus importants..."
  },
  {
    question: "Quel est le seul mammifère marin protégé qui vient mettre bas sur les côtes de Madagascar ?",
    options: ["Lamantin", "Baleine bleue", "Baleine à bosse", "Dugong"],
    answer: "Baleine à bosse",
    difficulty: "moyen",
    feedback: "Les <strong>baleines à bosse</strong> migrent chaque année vers les eaux chaudes de Madagascar..."
  },
  {
    question: "Pourquoi la population malgache est-elle si culturellement diversifiée ?",
    options: [
      "À cause des migrations anciennes d’Asie, d’Afrique et d’Europe",
      "Car Madagascar est une île isolée",
      "À cause de TikTok",
      "À cause des exportations"
    ],
    answer: "À cause des migrations anciennes d’Asie, d’Afrique et d’Europe",
    difficulty: "moyen",
    feedback: "Les origines de la population malgache sont <strong>mélangées</strong>..."
  },
  {
    question: "Quel est le rôle du 'mpanandro' dans la société traditionnelle malgache ?",
    options: ["Chasseur", "Chef de guerre", "Voyant/astrologue", "Guérisseur"],
    answer: "Voyant/astrologue",
    difficulty: "difficile",
    feedback: "Le <strong>mpanandro</strong> est un <strong>astrologue traditionnel</strong> malgache..."
  },
  {
    question: "Quel fruit emblématique est souvent utilisé dans les chansons et proverbes malgaches ?",
    options: ["Litchi", "Mangue", "Bananier", "Papaye"],
    answer: "Litchi",
    difficulty: "facile",
    feedback: "Le <strong>litchi</strong> est très populaire à Madagascar..."
  },
{
  question: "Quel est le nom du bois sacré utilisé pour les tombeaux traditionnels ?",
  options: ["Satrana", "Hazomalany", "Fihamy", "Voanio"],
  answer: "Hazomalany",
  difficulty: "difficile",
  feedback: "Le <strong>hazomalany</strong> est un bois sacré utilisé dans la construction des tombeaux, considéré comme protecteur."
},
{
  question: "Quel est le nom du riz grillé bu avec de l’eau chaude ?",
  options: ["Vary amin’anana", "Sakay rano", "Ranovola", "Koba"],
  answer: "Ranovola",
  difficulty: "facile",
  feedback: "<strong>Ranovola</strong> est une boisson faite à partir du riz grillé au fond de la marmite, ajoutée à de l’eau chaude."
},
{
  question: "Comment appelle-t-on les sandwichs malgaches vendus dans la rue ?",
  options: ["Mofo gasy", "Menaiky", "Katilesy", "Sambos"],
  answer: "Menaiky",
  difficulty: "moyen",
  feedback: "Le <strong>menaiky</strong> est un sandwich à base de pain local garni d’œufs, de charcuterie ou de viande grillée."
},
{
  question: "Quel genre de musique traditionnelle est souvent joué avec le valiha ?",
  options: ["Salegy", "Beko", "Ba-gasy", "Tsapiky"],
  answer: "Ba-gasy",
  difficulty: "moyen",
  feedback: "Le <strong>ba-gasy</strong> est un style de musique typique des hautes terres, joué au <strong>valiha</strong> et chanté de manière poétique."
},
{
  question: "Quel mot malgache signifie littéralement «vivre ensemble» ?",
  options: ["Fihavanana", "Fiainana", "Fivelomana", "Fisoratana"],
  answer: "Fihavanana",
  difficulty: "facile",
  feedback: "<strong>Fihavanana</strong> signifie vivre en harmonie, entraide et solidarité – c’est une valeur centrale malgache."
},
{
  question: "Quel animal est considéré comme porteur de malchance s’il entre dans une maison ?",
  options: ["Serpent", "Chouette", "Rat", "Caméléon"],
  answer: "Chouette",
  difficulty: "difficile",
  feedback: "La <strong>chouette</strong> est souvent considérée comme un signe de malheur ou de décès proche dans certaines croyances rurales."
},
{
  question: "Comment appelle-t-on le riz du matin très liquide avec légumes ?",
  options: ["Sakay rano", "Vary sosoa", "Vary amin’anana", "Koba rano"],
  answer: "Vary sosoa",
  difficulty: "facile",
  feedback: "<strong>Vary sosoa</strong> est une soupe de riz très liquide souvent servie au petit-déjeuner avec gingembre ou cresson."
},
{
  question: "Quelle couleur de lamba est souvent utilisée pour les enterrements ?",
  options: ["Vert", "Rouge", "Blanc", "Noir"],
  answer: "Blanc",
  difficulty: "moyen",
  feedback: "Le <strong>lamba blanc</strong> est porté par respect lors des funérailles, symbolisant la pureté et l’adieu."
},
{
  question: "Quel sport traditionnel malgache est une sorte de boxe ?",
  options: ["Moraingy", "Kapoera", "Ray sy ray", "Kabary"],
  answer: "Moraingy",
  difficulty: "moyen",
  feedback: "Le <strong>moraingy</strong> est une boxe traditionnelle pratiquée surtout sur les côtes, souvent accompagnée de musique et de danse."
},
{
  question: "Quel fruit malgache a une odeur très forte mais un goût délicieux ?",
  options: ["Voanantsindrana", "Durian", "Sakay manga", "Jacquier"],
  answer: "Durian",
  difficulty: "difficile",
  feedback: "Le <strong>durian</strong>, très rare à Madagascar, a une odeur intense mais un goût très sucré, adoré par certains."
},
{
  question: "Que signifie le proverbe « Ny tody tsy misy fa ny atao no miverina » ?",
  options: [
    "Il ne faut pas se précipiter",
    "On récolte ce qu’on sème",
    "Le mal est puni",
    "J'adore ce Quizz"
  ],
  answer: "On récolte ce qu’on sème",
  difficulty: "moyen",
  feedback: "Le proverbe <strong>Ny tody tsy misy fa ny ataon-dratsy miverina</strong> signifie que tout acte mauvais revient à son auteur."
},
{
  question: "Quel animal est symbole de bénédiction s’il se couche sur le seuil d’une case ?",
  options: ["Chat", "Poulet", "Chien", "Canard"],
  answer: "Chien",
  difficulty: "moyen",
  feedback: "Un <strong>chien</strong> couché sur le seuil est parfois perçu comme un signe que la maison est protégée par les ancêtres."
},
{
  question: "Quel mot désigne le riz à moitié cuit souvent mangé rapidement ?",
  options: ["Vary mafana", "Vary arindra", "Vary tara", "Vary masaka kito"],
  answer: "Vary tara",
  difficulty: "facile",
  feedback: "Le <strong>vary tara</strong> est un riz pas encore bien cuit, parfois mangé pressé avant qu’il ne soit prêt."
},
{
  question: "Quel est le mot malgache pour dire 'tabou' ou 'interdit culturel' ?",
  options: ["Zava-mahery", "Fady", "Sazy", "Fihavanana"],
  answer: "Fady",
  difficulty: "facile",
  feedback: "Un <strong>fady</strong> est un interdit culturel, souvent lié aux ancêtres ou aux coutumes."
},
{
  question: "Quelle collation malgache est faite de banane et de riz pilé ?",
  options: ["Koba", "Mofo baolina", "Ramazava", "Makasoaka"],
  answer: "Koba",
  difficulty: "facile",
  feedback: "Le <strong>koba</strong> est une pâte sucrée faite de banane, de riz et de sucre, enveloppée dans des feuilles de bananier."
},
{
  question: "Quel mot malgache signifie 'paix' ou 'calme' ?",
  options: ["Havana", "Tany", "Fiadanana", "Sambatra"],
  answer: "Fiadanana",
  difficulty: "moyen",
  feedback: "<strong>Fiadanana</strong> veut dire paix, sérénité, un mot très utilisé dans les prières et souhaits."
},
{
  question: "Quel est le plat emblématique du sud de Madagascar à base de feuille de manioc ?",
  options: ["Ravitoto", "Hen’omby sy voanio", "Voanjobory", "Rano vola"],
  answer: "Ravitoto",
  difficulty: "facile",
  feedback: "<strong>Ravitoto</strong> est un plat populaire fait de feuilles de manioc pilées, souvent accompagné de viande ou de coco."
},
{
  question: "Quel instrument est fabriqué avec un bambou et des cordes ?",
  options: ["Valiha", "Kabosa", "Lokanga", "Tari-bato"],
  answer: "Valiha",
  difficulty: "moyen",
  feedback: "Le <strong>valiha</strong> est l’instrument national de Madagascar, fait de bambou et utilisé dans la musique traditionnelle."
},
{
  question: "Quel mot malgache est utilisé pour dire 'je t’aime' ?",
  options: ["Tia anao aho", "Tena mahafatifaty", "Lovy be", "Mankahala anao aho"],
  answer: "Tia anao aho",
  difficulty: "facile",
  feedback: "<strong>Tia anao</strong> signifie <strong>je t’aime</strong> en malgache ❤️."
},
{
  question: "Quel proverbe malgache signifie qu’il ne faut pas se précipiter ?",
  options: [
    "Tsy mitondra hazo mandry", 
    "Alefa aloha ny lavaka", 
    "Ny mora tsy miady", 
    "Aleo malaina toy izay maditra"
  ],
  answer: "Aleo malaina toy izay maditra",
  difficulty: "moyen",
  feedback: "Le proverbe <strong>Aleo malaina toy izay maditra</strong> signifie qu’il vaut mieux être lent mais sage que rapide et bête."
},
{
  question: "Comment appelle-t-on les esprits des ancêtres en malgache ?",
  options: ["Zanahary", "Loharano", "Razana", "Fanahy"],
  answer: "Razana",
  difficulty: "moyen",
  feedback: "Les <strong>razana</strong> sont les esprits des ancêtres, très respectés dans la culture malgache."
},
{
  question: "Quel fruit est souvent cueilli sauvage et mangé avec du sel ?",
  options: ["Vavangy", "Mangahazo", "Tamarin", "Papaye verte"],
  answer: "Vavangy",
  difficulty: "facile",
  feedback: "Le <strong>vavangy</strong> est un fruit acidulé souvent mangé avec du sel, très populaire chez les enfants malgaches."
},
{
  question: "Que signifie le mot 'kabary' ?",
  options: ["Fête", "Parole publique traditionnelle", "Langue secrète", "Langage enfantin"],
  answer: "Parole publique traditionnelle",
  difficulty: "moyen",
  feedback: "Le <strong>kabary</strong> est un discours traditionnel formel, souvent poétique, utilisé lors des mariages ou funérailles."
},
{
  question: "Quel est le nom malgache du manioc ?",
  options: ["Tsaramaso", "Mangahazo", "Katsaka", "Vary"],
  answer: "Mangahazo",
  difficulty: "facile",
  feedback: "Le <strong>mangahazo</strong> est le manioc, un aliment de base dans plusieurs régions rurales de Madagascar."
},
{
  question: "Que signifie 'sambatra' à Madagascar ?",
  options: ["Heureux", "Triste", "Mariage", "Nouvelle année"],
  answer: "Heureux",
  difficulty: "facile",
  feedback: "<strong>Sambatra</strong> veut dire <strong>heureux</strong> ou <strong>chanceux</strong> en malgache."
},
{
  question: "Quelle est la plus célèbre boisson gazeuse locale ?",
  options: ["Coca", "Bonbon anglais", "Fanta", "THB Fresh"],
  answer: "Bonbon anglais",
  difficulty: "facile",
  feedback: "Le <strong>Bonbon Anglais</strong> est une boisson gazeuse emblématique à base de citron, adorée à Madagascar."
},
{
  question: "Quel animal malgache est symbole de sagesse et longévité ?",
  options: ["Kisoa", "Tantely", "Fano", "Lambo"],
  answer: "Fano",
  difficulty: "moyen",
  feedback: "Le <strong>fano</strong>, ou tortue malgache, symbolise la sagesse, la patience et la protection spirituelle."
},
{
  question: "Quel jeu traditionnel malgache se joue avec des cailloux dans des trous ?",
  options: ["Sakoa", "Katro", "Fanorona", "Tantara"],
  answer: "Katro",
  difficulty: "difficile",
  feedback: "Le <strong>katro</strong> est un jeu traditionnel utilisant des galets et des trous creusés dans le sol ou une planche."
},
{
  question: "Quel mot malgache signifie 'adieu' ?",
  options: ["Veloma", "Arahaba", "Tonga soa", "Manao ahoana"],
  answer: "Veloma",
  difficulty: "facile",
  feedback: "On dit <strong>Veloma</strong> pour dire au revoir ou adieu en malgache."
},
{
  question: "Quel ingrédient accompagne souvent le vary amin’anana ?",
  options: ["Ravitoto", "Gazon", "Macarons", "Viande"],
  answer: "Viande",
  difficulty: "facile",
  feedback: "Le <strong>vary amin’anana</strong> est souvent préparé avec des sardines ou du kitoza grillé."
},
{
  question: "Quel phénomène naturel est appelé 'andrivotra' ?",
  options: ["Cyclone", "Sécheresse", "Brouillard", "Vent fort"],
  answer: "Vent fort",
  difficulty: "moyen",
  feedback: "<strong>Andrivotra</strong> signifie vent fort ou tempête, typique des zones côtières."
},
{
  question: "Comment dit-on 'merci' en malgache ?",
  options: ["Veloma", "Azafady", "Misaotra", "Tsisy fisaorana"],
  answer: "Misaotra",
  difficulty: "facile",
  feedback: "Pour dire <strong>merci</strong> en malgache, on dit <strong>Misaotra</strong>."
},
{
  question: "Quel est le nom malgache du piment ?",
  options: ["Sakay", "Tsindrin-tsakafo", "Katsaka", "Kisoa"],
  answer: "Sakay",
  difficulty: "facile",
  feedback: "Le <strong>sakay</strong> est le piment malgache, parfois très très fort 🔥 !"
},
{
  question: "Que signifie 'misotro toaka' ?",
  options: ["Faire la fête", "Travailler dur", "Boire de l’alcool", "Aller au marché"],
  answer: "Boire de l’alcool",
  difficulty: "facile",
  feedback: "<strong>Misotro toaka</strong> veut dire boire de l’alcool. Le 'toaka gasy' est fait maison dans les campagnes."
},
{
  question: "Quel jour de la semaine est sacré pour certaines tribus malgaches ?",
  options: ["Lundi", "Jeudi", "Samedi", "Mardi"],
  answer: "Jeudi",
  difficulty: "difficile",
  feedback: "Le <strong>jeudi</strong> est tabou ou sacré dans certaines régions. Il est interdit de faire certains travaux ou rituels."
},
{
  question: "Quel est le nom de la salade de mangue verte très piquante ?",
  options: ["Achards", "Lasary voatabia", "Lasary manga", "Lasary karoty"],
  answer: "Lasary manga",
  difficulty: "moyen",
  feedback: "<strong>Lasary manga</strong> est une salade de mangue verte râpée avec du piment, de l’oignon et du vinaigre."
},
{
  question: "Quelle croyance entoure les jumeaux dans certaines tribus ?",
  options: ["Ils portent bonheur", "Ils sont tabous", "Ils sont guérisseurs", "Ils doivent vivre loin des autres"],
  answer: "Ils sont tabous",
  difficulty: "difficile",
  feedback: "Dans certaines régions (ex. Antambahoaka), les <strong>jumeaux</strong> sont considérés comme tabous et font l’objet de rituels spéciaux."
},
{
  question: "Que signifie le mot 'toa' dans un proverbe ?",
  options: ["Mais", "Parce que", "Comme / Tel que", "Si"],
  answer: "Comme / Tel que",
  difficulty: "moyen",
  feedback: "Dans un proverbe, <strong>toa</strong> veut dire <strong>comme</strong>, utilisé pour faire une comparaison imagée."
},
{
  question: "Quel est le surnom amusant donné au zébu lors des fêtes traditionnelles ?",
  options: ["L'or à cornes", "Le roi des champs", "Le festin mobile", "Le dieu des collines"],
  answer: "L'or à cornes",
  difficulty: "facile",
  feedback: "Le <strong>zébu</strong> est surnommé <strong>l’or à cornes</strong> à Madagascar pour sa valeur culturelle, économique et symbolique."
},
{
  question: "Quel est le surnom affectueux du lémurien sifaka à cause de sa démarche ?",
  options: ["Lémurien ninja", "Danseur des arbres", "Sifaka bondissant", "Lémurien moonwalk"],
  answer: "Danseur des arbres",
  difficulty: "facile",
  feedback: "Le <strong>sifaka</strong> est surnommé le <strong>danseur des arbres</strong> car il se déplace en sautant latéralement avec élégance !"
},
{
  question: "Quel mot malgache signifie 'bonjour' ?",
  options: ["Veloma", "Misaotra", "Kaiza", "Manahoana"],
  answer: "Manahoana",
  difficulty: "facile",
  feedback: "Pour dire <strong>bonjour</strong> en malgache, on dit <strong>Manahoana</strong> !"
},
{
  question: "Quelle spécialité de rue malgache est une brochette de viande grillée ?",
  options: ["Mofo anana", "Koba", "Brochette tsaky", "Masikita"],
  answer: "Masikita",
  difficulty: "moyen",
  feedback: "Le <strong>masikita</strong> est une délicieuse brochette de viande grillée, très populaire dans les rues de Madagascar."
},
{
  question: "Quel est le moyen de transport original sur la côte Est appelé 'pousse' ?",
  options: ["Taxi-brousse", "Pousse-pousse", "Charrette", "Poussin"],
  answer: "Pousse-pousse",
  difficulty: "facile",
  feedback: "Le <strong>pousse-pousse</strong> est un moyen de transport typique à pied ou à vélo, utilisé dans des villes comme Tamatave."
},
{
  question: "Quelle créature étrange ressemble à une feuille morte à Madagascar ?",
  options: ["Caméléon pygmée", "Gecko feuille", "Papillon Dracula", "Maki fantôme"],
  answer: "Gecko feuille",
  difficulty: "moyen",
  feedback: "Le <strong>gecko feuille</strong> se camoufle parfaitement sur les arbres. On dirait une vraie feuille !"
},
{
  question: "Quel fruit malgache pique... mais qu’on adore quand il est mûr ?",
  options: ["Corossol", "Litchi", "Fruit du dragon", "Prickly pear (raketa)"],
  answer: "Prickly pear (raketa)",
  difficulty: "moyen",
  feedback: "Le <strong>raketa</strong>, ou figue de barbarie, pousse sur les cactus. Attention aux épines avant de le manger !"
},
{
  question: "Quelle danse énergique est populaire à Madagascar, surtout au Nord ?",
  options: ["Afindrafindrao", "Salegy", "Tsy miova", "Malgachoo"],
  answer: "Salegy",
  difficulty: "facile",
  feedback: "Le <strong>salegy</strong> est une danse rythmée du nord de Madagascar, rendue célèbre par l'artiste Jaojoby."
},
{
  question: "Quelle ville de Madagascar est surnommée la 'Cité du Soleil' ?",
  options: ["Morondava", "Tuléar", "Diego Suarez", "Antsiranana"],
  answer: "Tuléar",
  difficulty: "moyen",
  feedback: "<strong>Tuléar</strong> (Toliara) est appelée <strong>la Cité du Soleil</strong> pour son climat sec et ensoleillé toute l’année."
},

  {
    question: "Pourquoi dit-on que Madagascar est une île unique au monde ?",
    options: [
      "Parce que c’est le seul endroit où les zébus ont le droit de bloquer la route",
      "Parce que 90% des espèces animales et végétales n’existent nulle part ailleurs",
      "Parce qu’on y trouve du wifi même dans les rizières",
      "Parce qu’elle a la forme d’un caméléon couché"
    ],
    answer: "Parce que 90% des espèces animales et végétales n’existent nulle part ailleurs",
    difficulty: "moyen",
    feedback: "Madagascar est un <strong>trésor mondial de biodiversité</strong> : lémuriens, baobabs, caméléons, plantes rares… près de <em>9 espèces sur 10</em> sont endémiques 🌍."
  },
  {
    question: "Quelle particularité étonnante a le 'tenrec' malgache ?",
    options: [
      "Il ronfle comme un papi",
      "Il ressemble à un hérisson, mais n’en est pas un",
      "Il fait du beatbox en dormant",
      "Il peut jouer dans les pubs pour rasoirs"
    ],
    answer: "Il ressemble à un hérisson, mais n’en est pas un",
    difficulty: "moyen",
    feedback: "Le <strong>tenrec</strong> est un petit animal piquant qui ressemble à un hérisson… mais qui n’a <em>aucun lien de parenté</em> avec lui ! Un vrai cas à part 🦔."
  },
  {
    question: "Que signifie l’expression malgache 'ny valala tsy mifidy ravina' ?",
    options: [
      "Le criquet ne choisit pas sa feuille",
      "Celui qui a faim ne fait pas le difficile",
      "Un criquet n’est jamais seul",
      "Fais attention aux feuilles piégées"
    ],
    answer: "Celui qui a faim ne fait pas le difficile",
    difficulty: "difficile",
    feedback: "Ce proverbe signifie que <strong>quand on est dans le besoin, on accepte ce qu'on a</strong>. Une leçon de sagesse simple mais puissante 💡."
  },
  {
    question: "Pourquoi certaines personnes évitent de couper leurs ongles la nuit à Madagascar ?",
    options: [
      "Parce que c’est fady (tabou)",
      "Parce que ça attire les moustiques mutants",
      "Parce que l’électricité saute souvent",
      "Parce que les ongles deviennent invisibles"
    ],
    answer: "Parce que c’est fady (tabou)",
    difficulty: "moyen",
    feedback: "Selon la tradition, <strong>se couper les ongles la nuit</strong> serait <strong>fady</strong> (interdit/tabou), car cela attirerait la malchance ou offenserait les ancêtres 🧙‍♂️."
  },
  {
    question: "Comment s’appelait l’un des rois les plus stratégiques des Hautes Terres ?",
    options: [
      "Andrianampoinimerina",
      "AndrianampoiniGoogle",
      "Rajaonarimampianina",
      "Radama the Boss"
    ],
    answer: "Andrianampoinimerina",
    difficulty: "difficile",
    feedback: "<strong>Andrianampoinimerina</strong> (fin 18e siècle) est célèbre pour avoir <strong>unifié les Hautes Terres</strong> et réorganisé le royaume autour d'Antananarivo 🏯."
  },
  {
    question: "Pourquoi les Malgaches font-ils parfois des repas géants pour les morts ?",
    options: [
      "Parce que les ancêtres ont bon appétit",
      "Pour leur rendre hommage et les remercier",
      "Pour faire la fête plus souvent",
      "Parce qu’ils détestent manger seuls"
    ],
    answer: "Pour leur rendre hommage et les remercier",
    difficulty: "moyen",
    feedback: "Lors du <strong>famadihana</strong> ou des grandes cérémonies, on célèbre les ancêtres avec des <strong>festins</strong>, de la <em>musique</em>, des <em>dons</em> et beaucoup d’émotion."
  },
  {
    question: "Quelle est la langue étrangère la plus présente dans le malgache ?",
    options: [
      "Français",
      "Malais",
      "Arabe",
      "Langage des zébus"
    ],
    answer: "Malais",
    difficulty: "difficile",
    feedback: "Le <strong>malgache</strong> vient d’une base <strong>austronésienne</strong> proche du malais. C’est une langue asiatique parlée sur une île africaine — un vrai mélange culturel 🌏."
  },
  {
    question: "Quel ingrédient donne sa couleur au 'ravitoto sy henakisoa' ?",
    options: [
      "Les feuilles de manioc pilées",
      "La viande trop cuite",
      "Le charbon de bois",
      "Le soleil du sud"
    ],
    answer: "Les feuilles de manioc pilées",
    difficulty: "facile",
    feedback: "<strong>Ravitoto</strong> signifie littéralement <em>feuilles de manioc pilées</em>. Ce plat culte est souvent accompagné de viande de porc — un vrai régal 🇲🇬🍽️."
  },
  {
    question: "Quel est le principal moyen de transport rural à Madagascar ?",
    options: [
      "Le pousse-pousse",
      "Le jet privé des zébus",
      "Le taxi-brousse",
      "Le skate en latérite"
    ],
    answer: "Le taxi-brousse",
    difficulty: "facile",
    feedback: "Le <strong>taxi-brousse</strong> est <strong>le roi de la route</strong> malgache 🚐. Il relie presque tout le pays… parfois avec des poules à bord 🐔."
  },
  {
    question: "Pourquoi le baobab est-il souvent creux à l’intérieur ?",
    options: [
      "Pour servir de maison aux caméléons",
      "Parce qu’il stocke de l’eau à l’intérieur",
      "Parce qu’il est timide",
      "Pour cacher des trésors"
    ],
    answer: "Parce qu’il stocke de l’eau à l’intérieur",
    difficulty: "moyen",
    feedback: "Le <strong>baobab</strong> peut stocker jusqu’à <strong>120 000 litres d’eau</strong> dans son tronc. Une adaptation géniale à la sécheresse 💧🌳."
  },
  {
    question: "Pourquoi les zébus sont-ils si importants à Madagascar ?",
    options: [
      "Parce qu’ils font de très bons animaux de compagnie 🐮",
      "Ils symbolisent la richesse et sont utilisés dans les rites traditionnels",
      "Parce qu’on en voit souvent dans les films malgaches",
      "À cause de TikTok"
    ],
    answer: "Ils symbolisent la richesse et sont utilisés dans les rites traditionnels",
    difficulty: "moyen",
    feedback: "Le <strong>zébu</strong> est un <strong>symbole culturel fort</strong> à Madagascar : il est associé à la richesse, aux traditions funéraires, et à la vie rurale."
  },
  {
    question: "Pourquoi appelle-t-on Antananarivo \"la ville des Mille\" ?",
    options: [
      "Parce qu’il y a mille embouteillages",
      "Car mille soldats la défendaient autrefois",
      "Parce qu’elle a mille collines",
      "À cause des mille TikTok filmés là-bas"
    ],
    answer: "Car mille soldats la défendaient autrefois",
    difficulty: "moyen",
    feedback: "Le nom <strong>Antananarivo</strong> signifie « la ville des mille », en référence aux <strong>mille guerriers</strong> que le roi Andrianjaka aurait placés pour la protéger."
  },
  {
    question: "Quel aliment est presque sacré dans la culture malgache ?",
    options: [
      "Le chocolat",
      "Le riz",
      "Le pain",
      "Les samoussas du coin"
    ],
    answer: "Le riz",
    difficulty: "facile",
    feedback: "Le <strong>riz</strong> est au cœur de l’alimentation malgache. Un repas sans riz ? Impensable pour beaucoup ! 🍚"
  },
  {
    question: "Quel animal unique ne vit qu’à Madagascar ?",
    options: [
      "Le crocodile",
      "Le lémurien",
      "Le kangourou",
      "Le chat sauvage de TikTok"
    ],
    answer: "Le lémurien",
    difficulty: "facile",
    feedback: "Les <strong>lémuriens</strong> sont des primates qu’on ne trouve <strong>nulle part ailleurs</strong> sur Terre 🌍 ! Madagascar est leur seule maison 🐒."
  },
  {
    question: "Pourquoi trouve-t-on autant de proverbes dans la culture malgache ?",
    options: [
      "Parce que c’est stylé pour les discours",
      "Pour transmettre des leçons de vie avec sagesse",
      "Parce que les gens aiment parler en énigmes",
      "Parce que c’est un challenge TikTok"
    ],
    answer: "Pour transmettre des leçons de vie avec sagesse",
    difficulty: "moyen",
    feedback: "Les <strong>ohabolana</strong> (proverbes malgaches) sont des <strongformes de sagesse populaire</strong> utilisées pour enseigner, réfléchir ou conseiller."
  },
  {
    question: "Que veut dire l’expression 'tsy misy mahay toy ny be zotom-po' ?",
    options: [
      "Même Google ne sait pas tout",
      "Rien ne vaut la persévérance",
      "Le plus malin gagne toujours",
      "C’est un nouveau style de danse TikTok"
    ],
    answer: "Rien ne vaut la persévérance",
    difficulty: "difficile",
    feedback: "Ce proverbe signifie : <strong>« Aucun expert ne vaut quelqu’un de déterminé »</strong>. L’effort bat le talent quand le talent ne travaille pas !"
  }

];


// ==========================
// ✨ 2. Messages (aléatoires)
// ==========================

// ✅ Messages de réussite
const messagesReussite = [
  "Bonne réponse ! 👏",
  "Excellent ! 🔥",
  "Wow, t'es un génie ! 🤯",
  "Coup parfait ! 👌",
  "Tu connais bien ton île 🇲🇬",
  "Bravo, champion ! 🏆",
  "Réponse en or ! 💡",
  "Trop fort(e) ! 🥵",
  "Tu déchires ! 💥",
  "Impressionnant ! 🧐",
    "Tu gères comme un roi 👑",
  "T’as allumé le game là ! 🔥",
  "Là, t’as frappé fort 💥",
  "Incroyable mais vrai ! 😲",
  "T’as le feu sacré ou quoi ? 🔥🔥",
  "T’es en train de porter Madagascar 🇲🇬 sur tes épaules !",
  "Score validé, respect 💯",
  "Tu donnes des leçons là 😤",
  "Trop stylé(e), vraiment 👌",
  "Même Google t’aurait pas battu 🧠",
  "Tu vises l’excellence hein ? 🏆",
  "Pas mal du tout, petit malin 😏",
  "T’as ça dans le sang ! 🧬",
  "La culture gasy te dit merci 🙌",
  "Tu viens de gagner un point de karma 🌟",
  "Franchement… chapeau 🎩",
  "Madagascar te regarde avec fierté 🇲🇬😌",
  "Champion(ne) validé(e) ✅",
  "Continue comme ça, t’es une machine 🤖"

];

function getRandomMessageReussite() {
  const index = Math.floor(Math.random() * messagesReussite.length);
  return messagesReussite[index];
}

// ❌ Messages d'erreur
const messagesErreur = [
  "Oups, mauvaise réponse 😢",
  "Presque ! Essaie encore. 😫",
  "Ce n'était pas ça...",
  "Tu peux faire mieux ! 😒",
  "Pas grave, on continue ! 💪",
  "Tu y étais presque ! ",
    "Oups... mauvaise pioche 😅",
  "Eh non ! Ce n’était pas ça 😬",
  "Raté ! Mais t’es pas loin 👀",
  "Aïe... Essaie encore, tu peux le faire 💪",
  "Tu bluffes ? 😆",
  "Presque... mais presque c’est pas assez 😜",
  "On y croit fort, mais là c’est non 🙈",
  "Pas de panique, on continue ! 🚀",
  "Hmm... pas exactement 😕",
  "Tu vas y arriver, respire un bon coup 🧘",
  "Pas ça... mais le courage y est ! 😄",
  "Non, non, non... mais tu progresses 😏",
  "Tu veux un joker ? 😅",
  "Encore raté ! Mais qui compte vraiment ? 😎",
  "Le suspense était là... mais c’est faux 😬",
  "C’était presque stylé, mais faux quand même 😭",
  "Eh ben non... va falloir se rattraper 😤",
  "Allez, on se concentre ! 😌",
  "Faux ! Mais t’es encore dans la course 🔥",
  "Mauvaise réponse... mais tu ne lâches rien 💯"

];

function getMessageErreurAleatoire() {
  const index = Math.floor(Math.random() * messagesErreur.length);
  return messagesErreur[index];
}

// ==========================
// 🔄 3. Mélange aléatoire
// ==========================
function melangerQuiz(quiz) {
  for (let i = quiz.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
  }
  return quiz;
}

let QuizMelange = melangerQuiz([...quiz]);

//Pour le mélange des options, on va créer un tableau 
const index=[
{
  chiffre:"0"
},
{
  chiffre:"1"
},
{
  chiffre:"2"
},
{
  chiffre:"3"
}
];
// Fonction pour mélanger le contenu du tableau index
function melangeIndex(index){
    for (let i = index.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [index[i], index[j]] = [index[j], index[i]];
  }
  return index;
}
let indexMelangee = melangeIndex([...index]);

// ==========================
// 🧩 4. Sélection des éléments HTML
// ==========================

// Conteneurs principaux
var body = document.querySelector(".body");
var questionContainer = document.querySelector(".question");
var optionContainer = document.querySelector(".optionContainer");
var feedback = document.querySelector(".feedback");
var buttonNext = document.querySelector(".next");
var sessionContainer = document.querySelector(".session");
var transit = document.querySelector(".transitionContainer");
var ptsFb = document.querySelector(".ptsFeedback");
var FbTitle = document.querySelector(".FbTitle");
var btnRetour = document.querySelector(".btn-retour");
var pointsContainer = document.querySelector(".points");
var globalPointContainer = document.querySelector(".globalPoint");
var accBtn = document.querySelector(".acc-btn");
var accPage = document.querySelector(".acc-hero");
var timer = document.querySelector(".timer");
var pizzaloader = document.querySelector(".pizzaloader");
var bottomLoader = document.querySelector(".loader");
var audioSuccess = document.querySelector(".audioSuccess");
var audioFail = document.querySelector(".audioFail");
var audioVictory = document.querySelector(".audioVictory");
var audioSec = document.querySelector(".audioSec");
var stopwatch = document.querySelector(".stopwatch");
var audioNewSession = document.querySelector(".audioCommencerSession");
var trackMusic = document.querySelector(".trackMusic");



// Options individuelles
var option1 = document.querySelector(".option:nth-child(1)");
var option2 = document.querySelector(".option:nth-child(2)");
var option3 = document.querySelector(".option:nth-child(3)");
var option4 = document.querySelector(".option:nth-child(4)");
var allOption = document.querySelectorAll(".option");


// ==========================
// 🛠️ 5. Variables globales
// ==========================

var currentSession = 1;
var finalSession = 10;
var currentPoint = 0;
var globalPoint = 0;
var currentTime = 18;
var i = 0;
var t;
var currentQuestion = QuizMelange[i];


// ==========================
// 🧠 6. Logique principale
// ==========================

changerQuestion(currentQuestion);
sessionContainer.innerHTML = currentSession + "/" + finalSession;
btnRetour.style.visibility = "hidden";
pointsContainer.innerHTML = currentPoint;

// 🧠 Écouteur sur chaque option
allOption.forEach(function (uneOption) {
  uneOption.addEventListener("click", function () {
    timer.style.visibility = "hidden";
    if (uneOption.innerHTML == currentQuestion.answer) {
      ptsFb.classList.add("active");
      FbTitle.innerHTML = getRandomMessageReussite();
      feedback.innerHTML = currentQuestion.feedback;
      currentPoint = ajouterPoint(currentPoint);
          //audio
      playSound(audioSuccess);
      
            // Animation pour le points
      pointsContainer.classList.add("flash");
      setTimeout(() => {
       pointsContainer.classList.remove("flash");
      }, 300);

    } else {
      FbTitle.innerHTML = getMessageErreurAleatoire();
      feedback.innerHTML = currentQuestion.feedback;
                //audio
      playSound(audioFail);
    }

    pointsContainer.innerHTML = currentPoint;
    clearInterval(t);
    optionContainer.style.visibility = "hidden";
    buttonNext.style.visibility = "visible";
    transit.classList.add("visible");
    feedback.style.visibility = "visible";
    pizzaloader.classList.remove("animPizza");
    FbTitle.classList.add("active2");
    buttonNext.classList.add("active2");
    feedback.classList.add("active2");
  });
});

// 🕒 Timer
function temps() {
  timer.innerHTML = currentTime+"s";
  currentTime--;

  timer.style.color = currentTime < 5 ? "#d64123" : "#25b09b";
  bottomLoader.style.background = currentTime < 5 ? "linear-gradient(#d64123 0 0) left/0% 100% no-repeat #ddd" : "linear-gradient(#25b09b 0 0) left/0% 100% no-repeat #ddd" //le background du loader bottom

  if (currentTime < 0) {
    FbTitle.innerHTML = "Temps écoulé. ⌛";
     timer.style.visibility = "hidden";
    clearInterval(t);
    playSound(audioFail);
    buttonNext.style.visibility = "visible";
    feedback.innerHTML = currentQuestion.feedback;
    optionContainer.style.visibility = "hidden";
    transit.classList.add("visible");
    feedback.style.visibility = "visible";
    pizzaloader.classList.remove("animPizza");
    FbTitle.classList.add("active2");
    buttonNext.classList.add("active2");
    feedback.classList.add("active2");
  }
  if(currentTime>0){
    playSound(stopwatch);
  }
}

// 🔄 Changer de question
function changerQuestion(currentQuestion) {
  option1.innerHTML = currentQuestion.options[indexMelangee[0].chiffre];
  option2.innerHTML = currentQuestion.options[indexMelangee[1].chiffre];
  option3.innerHTML = currentQuestion.options[indexMelangee[2].chiffre];
  option4.innerHTML = currentQuestion.options[indexMelangee[3].chiffre];
  questionContainer.innerHTML = currentQuestion.question;
  buttonNext.style.visibility = "hidden";
  feedback.style.visibility = "hidden";
  optionContainer.style.visibility = "visible";
}

// ➕ Ajouter des points
function ajouterPoint(currentPoint) {
  return currentPoint += 5;
}

// ▶️ Nouvelle session
function newSession() {
  clearInterval(t);
  currentSession++;

  if (currentSession > finalSession) {
    finishSession();
    return;
  }

  sessionContainer.innerHTML = currentSession + "/" + finalSession;
  i++;
  currentQuestion = QuizMelange[i];
  changerQuestion(currentQuestion);
  currentTime = 18;
  timer.style.visibility = "visible";
  t = setInterval(temps, 1100);
  transit.classList.remove("visible");
  ptsFb.classList.remove("active");
  pizzaloader.classList.add("animPizza");
  FbTitle.classList.remove("active2");
  buttonNext.classList.remove("active2");
  feedback.classList.remove("active2");
}

// 🏁 Fin de la session
  function finishSession() {
   clearInterval(t);
  
   // Contenu dynamique selon score
   const scoreFinal = currentPoint / 5;
   let messageScore = `Tu as eu <strong>${scoreFinal}/${finalSession}</strong> bonnes réponses 🎯`;
  
   let titreFinal = "Fin de la session 👏";
   if (scoreFinal === finalSession) titreFinal = "Parfait ! Tu connais Madagascar comme ta poche 🇲🇬";
   else if (scoreFinal >= 8) titreFinal = "Excellent score ! 🔥";
   else if (scoreFinal >= 5) titreFinal = "Pas mal du tout ! 😎";
   else titreFinal = "Tu peux mieux faire ! 😅";
  
   FbTitle.innerHTML = titreFinal;
   feedback.innerHTML = messageScore;
  
   // Montrer boutons finaux
   buttonNext.style.display = "none";
   btnRetour.style.visibility = "visible";
  
   // Ajouter un bouton partage (optionnel)
   feedback.innerHTML += `<br><br><button class="partagerBtn" onclick="partagerScore()">📤 Partager ton score</button>`;
  
   optionContainer.style.visibility = "hidden";
   transit.classList.add("visible");
   feedback.style.visibility = "visible";
  
   // Animation sonore
   playSound(audioVictory);
  }

// 📎Partager le score
function partagerScore() {
 const score = currentPoint / 5;
 const message = `J’ai eu ${score}/10 au quiz Madagascar 🇲🇬 ! T'oses me battre ? 💪 👉 https://safidy-mahefa.github.io/Quiz_Connais-tu_Madagascar/`;

const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
 window.open(url, '_blank');
}




// ▶️ Bouton "Next"
buttonNext.addEventListener("click", function () {
  newSession();
});

// Bouton Retour
  btnRetour.addEventListener("click", function () {
    accPage.style.visibility = "visible";
    addPoints();
    playSound(trackMusic);
    body.style.overflow="scroll";
    buttonNext.style.display = "block";
  });
  
  
// 🎬 Bouton "Commencer"
accBtn.addEventListener("click", function () {
  // Réinitialisation des variables
  currentSession = 1;
  currentPoint = 0;
  currentTime = 18;
  i = 0;
  clearInterval(t); // au cas où un ancien timer tourne encore

  // Mélanger à nouveau le quiz et redéfinir la première question
  QuizMelange = melangerQuiz([...quiz]);
  currentQuestion = QuizMelange[0];

  // Remise à jour de l'affichage
  changerQuestion(currentQuestion);
  sessionContainer.innerHTML = currentSession + "/" + finalSession;
  timer.innerHTML = currentTime+"s";
  timer.style.visibility="visible";
  pointsContainer.innerHTML = currentPoint;
  btnRetour.style.visibility = "hidden";
  pizzaloader.classList.add("animPizza");
  accPage.style.visibility = "hidden";
  transit.classList.remove("visible");
  playSound(audioNewSession);
  trackMusic.pause();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  body.style.overflow="hidden";

  // Lancer le timer
  t = setInterval(temps, 1100);
});


// 🧮 Ajouter les points globaux
function addPoints() {
  globalPoint += currentPoint;
  globalPointContainer.innerHTML = globalPoint;
}

// Sauvegarder Global Points
localStorage.setItem('totalPoints', globalPoint);



// ==========================
// 👾 6. Musique et SFX
// ==========================
function playSound(audio){
  audio.play();
}

window.addEventListener("load", function(){
    playSound(trackMusic);
})
