/* ============================================================
   Scène des Talents — École Arc en Ciel
   Source de données unique partagée par index.html et stats.html
   ============================================================ */

/* Projets d'école — ne comptent PAS dans la limite de 2 scènes */
const SCHOOL_PROJECTS = [
  {
    name: "Capoeira",
    note: "",
    kids: ["Clara", "Anna", "Lydia", "Ryma", "Calie", "Divine", "Keren",
           "Charlotte", "Orianne", "Shine", "Maimouna", "Grace", "Tania"]
  },
  {
    name: "Oh Mama Tetema + Freestyle",
    note: "Chorégraphie",
    kids: ["Keren", "Divine", "Grace", "Maimouna", "Tania", "Orianne"]
  },
  {
    name: "Quinzaine de l'égalité",
    note: "Nos artistes en herbe — par pays et langue",
    languages: [
      { flag: "🇫🇷", country: "France", lang: "Français", kids: ["Lilly","Lydia","Myla","Kelyana","Elaia","Juliette","Ilona","Jasmine","Guillia","Elenna","Mia","Alya","Divine","Lina M.","Alicia","Noémie","Eileen","Céline","Chahd"] },
      { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", country: "Angleterre", lang: "Anglais", kids: ["Juliette"] },
      { flag: "🇪🇸", country: "Espagne", lang: "Espagnol", kids: ["Myla","Kelyana","Elaia","Elenna","Mia","Shyne","Alya","Lina M.","Alicia","Mila","Zia","Chahd"] },
      { flag: "🇵🇹", country: "Portugal", lang: "Portugais", kids: ["Kelyana","Ilona","Alya","Lina M."] },
      { flag: "🇮🇹", country: "Italie", lang: "Italien", kids: ["Guillia","Divine","Camille"] },
      { flag: "🇩🇪", country: "Allemagne", lang: "Allemand", kids: ["Elenna","Mia"] },
      { flag: "🇹🇳", country: "Tunisie", lang: "Darija tunisien", kids: ["Lydia","Jasmine","Yara","Eileen"] },
      { flag: "🇲🇦", country: "Maroc", lang: "Darija marocain", kids: ["Yara","Mayssae","Lina M.","Chahd"] },
      { flag: "🇩🇿", country: "Algérie", lang: "Dziriya", kids: ["Zia","Chahd"] },
      { flag: "🇸🇳", country: "Sénégal", lang: "Wolof", kids: ["Divine","Noémie"] },
      { flag: "🇨🇲", country: "Cameroun", lang: "Douala", kids: ["Nayana","Keren"] },
      { flag: "🇰🇷", country: "Corée du Sud", lang: "Coréen", kids: ["Elenna","Mia","Lina M.","Mila","Zia","Céline"] },
      { flag: "🇯🇵", country: "Japon", lang: "Japonais", kids: ["Kelyana","Juliette","Ilona","Jasmine","Mia","Alya","Lina M.","Mila","Zia","Céline"] }
    ]
  }
];

/* Scènes libres — comptent dans la limite de 2 scènes max par enfant */
const FREE_CATEGORIES = [
  {
    name: "Danse",
    icon: "💃",
    scenes: [
      { who: ["Alya","Elena","Elaïa","Kelyana"], scene: "Lush Life" },
      { who: ["Jasmine","Léa","Lina M."], scene: "Gozalo" },
      { who: ["Clara","Lydia","Divine","Ryma"], scene: "Danse" },
      { who: ["Lana"], scene: "Séga" },
      { who: ["Kaylan","Elvin","Arthur","Alioun"], scene: "Danse / scène de groupe" },
      { who: ["Maissae","Lina M."], scene: "Afro / rondade / salto" },
      { who: ["Grace"], scene: "Danse" },
      { who: ["Lina S.","Maïssa"], scene: "Duo (Brésil) — musique à confirmer" }
    ]
  },
  {
    name: "Gymnastique",
    icon: "🤸",
    scenes: [
      { who: ["Giulia","Stella"], scene: "Gym duo" },
      { who: ["Eileen","Leana","Céline"], scene: "Gym" },
      { who: ["Yara"], scene: "Gym" },
      { who: ["Alya"], scene: "Gym" },
      { who: ["Lya"], scene: "Gym" },
      { who: ["Keren"], scene: "Gym" },
      { who: ["Tania"], scene: "Gym" },
      { who: ["Housna"], scene: "Gym" },
      { who: ["Alicia"], scene: "Gym" },
      { who: ["Lydia"], scene: "Gym / danse à préciser" },
      { who: ["Naima Nour"], scene: "Gym" },
      { who: ["Inès"], scene: "Gym" },
      { who: ["Mélina B."], scene: "Gym" },
      { who: ["Lina S."], scene: "Gym" }
    ]
  },
  {
    name: "Théâtre",
    icon: "🎭",
    scenes: [
      { who: ["Lilly","Shine","Divine"], scene: "Théâtre" },
      { who: ["Ryma","Divine","Clara"], scene: "Mortelle Adèle" },
      { who: ["Nayana"], scene: "Théâtre" },
      { who: ["Charlotte"], scene: "Théâtre" },
      { who: ["Eileen","Leana","Lina M."], scene: "Théâtre" }
    ]
  },
  {
    name: "Chant",
    icon: "🎤",
    scenes: [
      { who: ["Jasmine","Léa"], scene: "Chant" },
      { who: ["Ched / Cheid"], scene: "Chant" },
      { who: ["Maïmouna"], scene: "Chant" },
      { who: ["Céline"], scene: "Chant" },
      { who: ["Lina M."], scene: "Chant" },
      { who: ["Jumana"], scene: "À confirmer" }
    ]
  },
  {
    name: "Roller",
    icon: "🛼",
    scenes: [
      { who: ["Giulia"], scene: "Roller" },
      { who: ["Mélina Adenet"], scene: "Roller" }
    ]
  },
  {
    name: "Jonglage ballon de foot",
    icon: "⚽",
    scenes: [
      { who: ["Courage","Eliam"], scene: "Jonglage" }
    ]
  },
  {
    name: "Magie",
    icon: "🪄",
    scenes: [
      { who: ["Charlotte"], scene: "Holla Up" }
    ]
  }
];

/* ---------- Normalisation des prénoms (variantes d'orthographe) ---------- */
const NAME_ALIASES = {
  "mayssae": "Maissae",
  "guillia": "Giulia",
  "elenna": "Elena",
  "shyne": "Shine",
  "lina m": "Lina M.",
  "maimouna": "Maimouna"
};

function normKey(name) {
  return name.toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/\./g, "").trim();
}

function canonical(name) {
  const k = normKey(name);
  if (NAME_ALIASES[k]) return NAME_ALIASES[k];
  // Titre propre par défaut (garde l'original tel quel)
  return name.trim();
}

/* ---------- Calculs statistiques ---------- */
function computeStats() {
  const freeSceneCount = FREE_CATEGORIES.reduce((n, c) => n + c.scenes.length, 0);
  const schoolCount = SCHOOL_PROJECTS.length;

  // Comptage des scènes libres par enfant (pour la règle des 2 max)
  const perChild = new Map();   // key -> { display, count, scenes:[...] }
  FREE_CATEGORIES.forEach(cat => {
    cat.scenes.forEach(s => {
      s.who.forEach(raw => {
        const disp = canonical(raw);
        const key = normKey(disp);
        if (!perChild.has(key)) perChild.set(key, { display: disp, count: 0, scenes: [] });
        const e = perChild.get(key);
        e.count++;
        e.scenes.push(`${cat.name} — ${s.scene}`);
      });
    });
  });

  // Participants uniques (toutes scènes confondues, y compris projets d'école)
  const allKids = new Set();
  FREE_CATEGORIES.forEach(c => c.scenes.forEach(s => s.who.forEach(w => allKids.add(normKey(canonical(w))))));
  SCHOOL_PROJECTS.forEach(p => {
    if (p.kids) p.kids.forEach(k => allKids.add(normKey(canonical(k))));
    if (p.languages) p.languages.forEach(l => l.kids.forEach(k => allKids.add(normKey(canonical(k)))));
  });

  // Quinzaine : enfants uniques
  const quinzaine = SCHOOL_PROJECTS.find(p => p.languages);
  const quinzaineKids = new Set();
  quinzaine.languages.forEach(l => l.kids.forEach(k => quinzaineKids.add(normKey(canonical(k)))));

  const children = [...perChild.values()].sort((a, b) => b.count - a.count || a.display.localeCompare(b.display));
  const overLimit = children.filter(c => c.count > 2);

  return {
    freeSceneCount,
    schoolCount,
    totalScenes: freeSceneCount + schoolCount,
    categoryCount: FREE_CATEGORIES.length,
    uniqueChildren: allKids.size,
    childrenInFree: perChild.size,
    quinzaineLangs: quinzaine.languages.length,
    quinzaineKids: quinzaineKids.size,
    children,
    overLimit,
    perCategory: FREE_CATEGORIES.map(c => ({
      name: c.name,
      icon: c.icon,
      scenes: c.scenes.length,
      kids: new Set(c.scenes.flatMap(s => s.who.map(w => normKey(canonical(w))))).size
    }))
  };
}
