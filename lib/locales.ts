export type LocaleCopy = {
  code: "fr" | "es" | "ar" | "zh";
  language: string;
  endonym: string;
  dir: "ltr" | "rtl";
  eyebrow: string;
  title: { lead: string; gold: string; tail: string };
  lede: string;
  doctrineEyebrow: string;
  doctrine: string[];
  ctaPrimary: string;
  ctaSecondary: string;
  navEnglish: string;
  pillars: { title: string; body: string }[];
  closing: string;
};

export const locales: LocaleCopy[] = [
  {
    code: "fr",
    language: "French",
    endonym: "Français",
    dir: "ltr",
    eyebrow: "Voranox Inc. — La Norme de l'Intelligence",
    title: {
      lead: "L'intelligence,",
      gold: "raffinée",
      tail: "pour chaque industrie de la planète.",
    },
    lede: "Voranox Inc. est la maison-mère qui conçoit des plateformes intelligentes pour chaque secteur, institution et discipline de l'entreprise humaine — depuis les capitales souveraines jusqu'aux marchés mondiaux, du bloc opératoire à l'espace lointain.",
    doctrineEyebrow: "La Doctrine Voranox",
    doctrine: [
      "Une plateforme par industrie. Conçue pour son langage, sa physique et son éthique propres.",
      "De qualité souveraine par défaut. Auditable. Avec provenance. Déployable dans la juridiction qui possède les données.",
      "L'autorité humaine est préservée. Humains dans la boucle. Automatisation bornée.",
      "Long horizon. Nous concevons pour des décennies.",
      "La retenue est une vertu. Nous refusons le travail qui ne convient pas à une firme sérieuse.",
    ],
    ctaPrimary: "Voir le répertoire",
    ctaSecondary: "Demander un entretien",
    navEnglish: "English site",
    pillars: [
      {
        title: "De qualité souveraine",
        body: "Conçu pour les standards des banques centrales, des ministères, des hôpitaux et des opérateurs mondiaux.",
      },
      {
        title: "Spécifique au secteur",
        body: "Une plateforme par industrie. Pas d'ajustements génériques. Pas de couture.",
      },
      {
        title: "Discrètement durable",
        body: "Les engagements Voranox sont confidentiels par défaut. Notre travail se mesure en décennies d'intelligence accumulée.",
      },
    ],
    closing:
      "Pour les institutions qui construisent ce qui vient ensuite.",
  },
  {
    code: "es",
    language: "Spanish",
    endonym: "Español",
    dir: "ltr",
    eyebrow: "Voranox Inc. — El Estándar de la Inteligencia",
    title: {
      lead: "Inteligencia,",
      gold: "refinada",
      tail: "para cada industria de la tierra.",
    },
    lede: "Voranox Inc. es la sociedad matriz que diseña plataformas inteligentes para cada sector, institución y disciplina de la empresa humana — desde las capitales soberanas hasta los mercados globales, desde el quirófano hasta el espacio profundo.",
    doctrineEyebrow: "La Doctrina Voranox",
    doctrine: [
      "Una plataforma por industria. Diseñada para su lenguaje, su física y su ética.",
      "De grado soberano por defecto. Auditable. Con procedencia. Desplegable en la jurisdicción que posee los datos.",
      "Se preserva la autoridad humana. Humanos en el bucle. Automatización acotada.",
      "Largo horizonte. Diseñamos para décadas.",
      "La contención es una virtud. Rechazamos el trabajo que no corresponde a una firma seria.",
    ],
    ctaPrimary: "Ver el directorio",
    ctaSecondary: "Solicitar una sesión",
    navEnglish: "English site",
    pillars: [
      {
        title: "Grado soberano",
        body: "Diseñado al estándar de los bancos centrales, los ministerios, los hospitales y los operadores globales.",
      },
      {
        title: "Específico del sector",
        body: "Una plataforma por industria. Sin ajustes genéricos. Sin costuras.",
      },
      {
        title: "Discretamente duradero",
        body: "Los compromisos de Voranox son confidenciales por defecto. Nuestro trabajo se mide en décadas de inteligencia compuesta.",
      },
    ],
    closing:
      "Para las instituciones que construyen lo que viene después.",
  },
  {
    code: "ar",
    language: "Arabic",
    endonym: "العربية",
    dir: "rtl",
    eyebrow: "فورانوكس · معيار الذكاء",
    title: {
      lead: "الذكاء،",
      gold: "مُكرَّر",
      tail: "لكل صناعة على وجه الأرض.",
    },
    lede: "فورانوكس إنك. هي الشركة الأم التي تُصمِّم منصات ذكية لكل قطاع، ومؤسسة، وفرع من فروع المسعى الإنساني — من العواصم السيادية إلى الأسواق العالمية، ومن غرف العمليات إلى الفضاء البعيد.",
    doctrineEyebrow: "عقيدة فورانوكس",
    doctrine: [
      "منصّة واحدة لكل صناعة. مُصمَّمة وفق لغتها وفيزيائها وأخلاقها.",
      "بدرجة سيادية افتراضياً. قابلة للتدقيق. ذات منشأ موثَّق. قابلة للنشر في الولاية التي تملك البيانات.",
      "السلطة البشرية محفوظة. الإنسان في الحلقة. الأتمتة محدودة بالسياسة.",
      "أفق بعيد. نُصمِّم لعقود من الزمن.",
      "الانضباط فضيلة. نرفض العمل الذي لا يليق بشركة جادة.",
    ],
    ctaPrimary: "تصفّح الدليل",
    ctaSecondary: "طلب جلسة سرّية",
    navEnglish: "النسخة الإنجليزية",
    pillars: [
      {
        title: "بدرجة سيادية",
        body: "مُصمَّمة وفق معايير المصارف المركزية والوزارات والمستشفيات والمشغلين العالميين.",
      },
      {
        title: "خاصّة بالقطاع",
        body: "منصة واحدة لكل صناعة. لا تكييفات عامة. لا تلفيقات.",
      },
      {
        title: "متينة بصمت",
        body: "ارتباطات فورانوكس سرّية افتراضياً. يُقاس عملنا بعقود من الذكاء المتراكم.",
      },
    ],
    closing: "للمؤسسات التي تبني ما هو آتٍ.",
  },
  {
    code: "zh",
    language: "Chinese (Simplified)",
    endonym: "简体中文",
    dir: "ltr",
    eyebrow: "Voranox 公司 · 智能的标准",
    title: {
      lead: "为地球上每一个行业",
      gold: "精炼",
      tail: "的智能。",
    },
    lede: "Voranox 公司是为人类事业的每一个行业、机构与领域构建智能平台的母公司——从主权首都到全球市场，从手术室到深空。",
    doctrineEyebrow: "Voranox 信条",
    doctrine: [
      "每一个行业，一个平台。按照其语言、物理学与伦理学量身打造。",
      "默认主权级。可审计。可溯源。可在拥有数据的辖区内部署。",
      "人类权威得到保留。人在回路之内。自动化受政策约束。",
      "长期视角。我们以数十年为单位进行设计。",
      "克制是一种美德。我们拒绝不适合一家严肃公司承接的工作。",
    ],
    ctaPrimary: "查看平台目录",
    ctaSecondary: "申请保密简报",
    navEnglish: "英文版",
    pillars: [
      {
        title: "主权级标准",
        body: "按照中央银行、各部委、医院与全球运营机构的标准设计。",
      },
      {
        title: "行业原生",
        body: "每个行业一个平台。没有通用改装。没有缝隙。",
      },
      {
        title: "悄然持久",
        body: "Voranox 的合作默认保密。我们的工作以数十年的复利智能为衡量单位。",
      },
    ],
    closing: "服务于那些正在塑造未来的机构。",
  },
];

export const localeByCode = (code: string): LocaleCopy | undefined =>
  locales.find((l) => l.code === code);
