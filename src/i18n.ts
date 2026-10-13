export type Lang = 'en' | 'zh';

export const locales: Record<Lang, string> = {
  en: 'en',
  zh: 'zh-CN',
};

export const ogLocales: Record<Lang, string> = {
  en: 'en_GB',
  zh: 'zh_CN',
};

export function isZhPath(pathname: string) {
  return pathname === '/zh' || pathname === '/zh/' || pathname.startsWith('/zh/');
}

export function stripLang(pathname: string) {
  const raw = pathname.endsWith('/') || pathname === '/' ? pathname : `${pathname}/`;
  if (raw === '/zh/') return '/';
  if (raw.startsWith('/zh/')) return raw.slice(3);
  return raw;
}

export function withLang(lang: Lang, path: string) {
  if (!path || path.startsWith('http') || path.startsWith('mailto:')) return path;
  if (path.startsWith('#')) return path;
  const hashIndex = path.indexOf('#');
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : '';
  const raw = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
  const page = (raw.startsWith('/') ? raw : `/${raw}`) || '/';
  if (lang === 'en') return `${page}${hash}`;
  if (page === '/') return `/zh/${hash}`;
  return `/zh${page}${hash}`;
}

export function langHref(lang: Lang, pathname: string) {
  return withLang(lang, stripLang(pathname));
}

const enUi = {
  language: 'Language',
  en: 'EN',
  zh: '中文',
  brochure: 'Request brochure',
  brandSub: 'Center of Sino-German Education',
  homeAria: 'CSGE home',
  navAria: 'Main',
  siteAria: 'Site',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  backToTop: 'Back to top',
  apply: 'Apply',
  bookConsultation: 'Book a consultation',
  applyNow: 'Apply now',
  imprint: 'Imprint',
  privacy: 'Privacy',
  home: 'Home',
  copyrightPlace: 'Potsdam',
  formOffline: 'This form is not connected yet. Please contact us via WeChat for now.',
};

const zhUi = {
  language: '语言',
  en: 'EN',
  zh: '中文',
  brochure: '索取手册',
  brandSub: '中德教育与人才流动中心',
  homeAria: 'CSGE 首页',
  navAria: '主导航',
  siteAria: '网站导航',
  openMenu: '打开菜单',
  closeMenu: '关闭菜单',
  backToTop: '回到顶部',
  apply: '申请',
  bookConsultation: '预约咨询',
  applyNow: '立即申请',
  imprint: '法律声明',
  privacy: '隐私政策',
  home: '首页',
  copyrightPlace: '波茨坦',
  formOffline: '表单尚未接通。请先通过微信联系我们。',
};

export const ui = { en: enUi, zh: zhUi };

export const pages = {
  en: {
    home: {
      title: 'Study online from China to Europe | CSGE',
      description:
        'CSGE in Potsdam offers state-accredited German programs to students in China. Learn online, earn ECTS credits from German UDS and build your pathway to Europe.',
    },
    consultation: {
      title: 'Book a free consultation | CSGE',
      description:
        'Talk to CSGE advisors in Potsdam, in Chinese or English. Find your Ed4Change, Young M.Sc. or MBA pathway from China to Europe.',
    },
    imprint: {
      title: 'Imprint',
      description: 'Legal imprint for the Center of Sino-German Education and Talent Mobility GmbH, Potsdam.',
    },
    privacy: {
      title: 'Privacy',
      description: 'Privacy policy for the CSGE website, consultation form, payments and related processing.',
    },
  },
  zh: {
    home: {
      title: '从中国在线通往欧洲 | CSGE 中德教育中心',
      description:
        '位于德国波茨坦的 CSGE 为中国学生提供国家认证的德国项目。在线学习，获得德国数字科学大学 ECTS 学分，规划赴欧留学与就业路径。',
    },
    consultation: {
      title: '免费路径咨询 | CSGE 中德教育中心',
      description:
        '与波茨坦的 CSGE 顾问用中文或英文沟通，找到适合你的 Ed4Change、青年理学硕士或 MBA 路径。',
    },
    imprint: {
      title: '法律声明',
      description: '中德教育与人才流动中心有限公司（波茨坦）法律声明。',
    },
    privacy: {
      title: '隐私政策',
      description: 'CSGE 网站、咨询表单、支付及相关数据处理的隐私政策。',
    },
  },
};

const enHome = {
  nav: [
    { href: '#about', label: 'About' },
    { href: '#programs', label: 'Programs' },
    { href: '#board', label: 'Academic board' },
    { href: '#partners', label: 'Partners' },
    { href: '#faq', label: 'FAQs' },
    { href: '#contact', label: 'Contact' },
  ],
  menu: [
    { href: '#about', label: 'About us' },
    { href: '#potsdam', label: 'Experience Potsdam' },
    { href: '#future', label: 'Digital future' },
    { href: '#programs', label: 'Programs' },
    { href: '#board', label: 'Academic board' },
    { href: '#support', label: 'Learning support' },
    { href: '#partners', label: 'Partners' },
    { href: '#faq', label: 'FAQs' },
    { href: '#contact', label: 'Contact' },
  ],
  footer: [
    { href: '#about', label: 'About us' },
    { href: '#programs', label: 'Programs' },
    { href: '#faq', label: 'FAQs' },
    { href: '#contact', label: 'Contact' },
  ],
  hero: {
    eyebrow: 'free to learn. happy to grow.',
    title: 'Your pass from China to Europe.',
    welcome: 'Welcome to the Center SGE.',
    lead: 'A new way to learn: study online with a world-class digital university at your own pace, earn European ECTS credits and open your path to study and work in Europe.',
    apply: 'Apply now',
    explore: 'Explore programs',
  },
  pass: {
    aria: 'Your route: start from your desk in China, take an open course, earn ECTS credits, visit Europe, and move to a campus in Europe',
    badge: 'learn. earn. move.',
    fromDesk: 'From your desk in',
    china: 'China',
    openCourse: 'Open course',
    ects: 'ECTS credits',
    visit: 'Visit Europe',
    toCampus: 'to a campus in',
    europe: 'Europe',
    chips: ['100% online', 'European ECTS', 'German UDS'],
  },
  highlights: [
    {
      placeholder: 'Photo: online class',
      title: 'Start with an open course',
      text: 'Earn an open course certificate, your only entry requirement.',
    },
    {
      badge: 'ECTS',
      title: 'Credits that travel',
      text: 'European credits issued by German UDS. Stack them towards a future degree.',
    },
    {
      placeholder: 'Photo: design-thinking workshop',
      title: 'Build your own profile',
      text: 'Design Thinking workshops, 1:1 coaching and an AI learning assistant shape a profile that is yours.',
    },
    {
      placeholder: 'Photo: Potsdam campus / Sanssouci',
      title: 'Your pass to Europe',
      text: "A personal route to a Bachelor's, Master's, research or career in Europe.",
    },
  ],
  about: {
    eyebrow: 'about us.',
    title: 'A bridge between Chinese talent and European education',
    photo: 'Photo: CSGE team in Potsdam',
    p1: 'The Center of Sino-German Education and Talent Mobility (CSGE) is based in Potsdam, Germany. We offer state-accredited German programs to students in China: you learn 100% online from home, and we build your personal pathway to study and work in Europe.',
    p2: 'German UDS teaches and awards the credits and degrees. We take care of everything around them: advice, enrolment, learning support and pathway planning, so you can focus on learning.',
    chips: ['Based in Potsdam', 'Credits by German UDS', 'Advice in Chinese & English'],
    valuesChip: 'Happiness · Hope · Honesty',
  },
  potsdam: {
    eyebrow: 'experience. potsdam.',
    title: 'Learn online. Meet us in Potsdam.',
    items: [
      {
        placeholder: 'Photo: European university campus',
        title: 'experience. campus.',
        text: 'European campus tours: meet your lecturers in Potsdam and visit universities you may apply to next.',
      },
      {
        placeholder: 'Photo: career week / company visit',
        title: 'experience. career.',
        text: 'Career weeks with company visits, workshops and meetups with employers and researchers.',
      },
      {
        placeholder: 'Photo: Sanssouci / lakes / Berlin',
        title: 'experience. culture.',
        text: "Palaces, lakes, museums and Berlin's start-up scene. Live a little of European life.",
      },
    ],
    nextEvent: 'Next onsite event',
    eventName: '[Event name] · [Date] · Potsdam',
    register: 'Register interest',
  },
  future: {
    eyebrow: 'experience. future.',
    titleBefore: 'Skills for tomorrow.',
    titleAccent: 'Wellbeing for today.',
    lead: 'Education is more than skills. We care about who you become: a life with happiness, hope and honesty.',
    values: [
      { title: 'happiness.', text: 'Rediscover the joy of learning: curious, creative and at your own pace.' },
      { title: 'hope.', text: 'See real options ahead: new study, new country, new path.' },
      { title: 'honesty.', text: 'Honest work, honest advice: your own projects, your own voice.' },
    ],
    aiTitle: 'AI & Emerging Tech',
    aiLead: 'Master-level modules, 5 ECTS each, in:',
    aiItems: [
      'Applied AI',
      'Cybersecurity',
      'Advanced Digital Reality',
      'Quantum Computing',
      'Digital Leadership',
      'Digital World',
      'Fintech',
    ],
    personalTitle: 'Personalized Learning',
    personalLead: 'Your pace, your goal, your path:',
    personalItems: [
      'Learn through real projects, not exams',
      'Design Thinking, the method pioneered at Stanford',
    ],
    meetTeam: 'Meet your team',
    weeklySupport: 'Weekly support and personal advisors.',
    europeTitle: 'European Network',
    europeLead: 'Connections that outlast the course:',
    europeItems: [
      'Learn alongside peers from around the world',
      'Connect with European universities',
      'Meet employers in Europe',
    ],
  },
  programs: {
    eyebrow: 'programs.',
    title: 'A pathway for every stage',
    aside:
      'From high school to career: every program is taught online by German UDS and awards recognised European credits or a state-accredited degree.',
    microKicker: 'Micro-degrees · 5 ECTS per module · starts every quarter',
    ed4changeLead:
      'Start with a free open course, then take master-level modules worth 5 ECTS each. Choose the track that fits where you are, and where you want to go.',
    applyEd4: 'Apply for Ed4Change',
    finderLabel: 'Where are you now?',
    trackFinder: [
      { label: 'In high school', track: 'i4study' },
      { label: 'After the Gaokao', track: 'i4transfer' },
      { label: 'At university', track: 'i4world' },
      { label: 'Entrepreneur or executive', track: 'i4research' },
    ],
    ed4change: [
      {
        name: 'i4study',
        audience: 'Pre-university · high school students',
        text: 'Earn your first ECTS credits before university. A German UDS module with Design Thinking workshops and weekly support: a strong start for your application to Germany, the UK or elsewhere in Europe.',
        price: '€3,200',
        priceNote: 'all-inclusive package',
      },
      {
        name: 'i4transfer',
        audience: 'Foundation & transfer · Gaokao Students',
        text: 'A foundation year with our Chinese partner universities and a year at German UDS (60 ECTS), then transfer to a university in Europe.',
        price: '€15,000',
        priceNote: 'one year · 60 ECTS',
      },
      {
        name: 'i4world',
        audience: 'International credits · university students',
        text: 'Add European credits, or a full semester abroad, to the degree you are already studying.',
        price: 'from €900',
      },
    ],
    comingSoon: 'Coming soon',
    i4researchAudience: 'Research pathway · entrepreneurs & executives',
    i4researchText: 'A new pathway for entrepreneurs and executives is in preparation. Details will follow soon.',
    registerInterest: 'Register your interest',
    mscKicker: 'Master · 2 years · STEM graduates under 27 · starts April & October',
    mscPricePer: 'per year',
    mscLead:
      'A state-accredited German Master of Science, studied 100% online, built for the tech careers of tomorrow. Choose your specialisation:',
    mscItems: ['Applied AI', 'Cybersecurity', 'Advanced Digital Reality', 'Quantum Computing'],
    applyMsc: 'Apply for the M.Sc.',
    mbaKicker: 'MBA · for professionals & founders',
    mbaLead: 'For people who build: a new career, a team or their own venture. Choose your specialisation:',
    mbaItems: ['Digital Transformation', 'Digital Technology', 'Digital Bureaucracy', 'Financial Technologies'],
    visaKicker: 'Visa support · for M.Sc. students',
    visaTitle: 'Study online. Come to Germany when it matters.',
    during: 'During your studies',
    shortVisa: 'Short-term visa',
    shortVisaText:
      'We support your application for a short-term visa for stays of up to 90 days, for European campus tours, career weeks, immersive weeks and cultural experiences.',
    after: 'After graduation',
    longVisa: 'Long-term visa',
    longVisaText:
      'Your German degree needs no recognition process. Use it to apply for a residence permit to look for work in Germany, with part-time work possible while you search.',
    visaFine:
      'Visa decisions are made by the German authorities. Requirements include, for example, health insurance and proof of funds. We help you prepare your application.',
  },
  board: {
    eyebrow: 'academic board.',
    title: 'Ed4Change Academic Board',
    lead: 'International faculty from Germany and China ensure the quality of our curriculum and its academic standards.',
    chair: 'Chair of the Academic Board',
    prof: 'Prof. Dr.',
    chairRole: 'Founding President, German University of Digital Science',
    chairAlt: 'Portrait of Christoph Meinel, founding president of German UDS',
    chairBio:
      'A world-renowned computer scientist, Christoph Meinel led the Hasso Plattner Institute (HPI) as Managing and Scientific Director from 2004 to 2023. In 2012 he and his team launched openHPI, Europe’s first MOOC platform, the start of a journey that led to German UDS, Germany’s first fully online, state-approved digital university.',
    stats: [
      { label: 'Books', count: '35', suffix: '' },
      { label: 'Papers', count: '750', suffix: '+' },
      { label: 'Doctoral researchers', count: '70', suffix: '+' },
      { label: 'MOOC enrolments', count: '15', suffix: 'M+' },
    ],
    merits: [
      {
        title: 'Academic excellence',
        items: [
          'World-renowned computer scientist: 35 books, 750+ papers, 70+ doctoral researchers supervised',
          'Member of acatech, the German National Academy of Science and Engineering',
          'Co-founder of the Stanford-HPI Design Thinking Research Program',
        ],
      },
      {
        title: 'Pioneer of digital education',
        items: [
          '2002: started online credit courses with Beijing University of Technology, an official Master’s course, 20 editions and 500+ students',
          '2012: founded openHPI, Europe’s first MOOC platform, launched the same year as Coursera',
          '15+ million enrolments across openHPI, openSAP and openWHO',
        ],
      },
      {
        title: 'Leader in STEM education',
        items: [
          'Chair of “MINT Zukunft schaffen”, Germany’s nationwide STEM initiative',
          'Board member of MINT-EC, Germany’s excellence network of K-12 STEM schools',
        ],
      },
    ],
    members: [
      {
        name: 'Dacheng Liu',
        image: '/images/liu.jpg',
        role: 'Professor, Tsinghua University',
        bio: ['Founding Deputy Director,', 'Tsinghua Institute for Internet Industry'],
      },
      {
        name: 'Haojin Yang',
        image: '/images/yang.jpg',
        role: 'Professor, German UDS',
        bio: ['Former Chief AI Scientist,', 'Huawei Edge Cloud Innovation Lab'],
      },
      {
        name: 'Julia von Thienen',
        image: '/images/thienen.jpg',
        role: 'Chair Professor of Design Thinking, German UDS',
        bio: ['Led joint research projects', 'with Stanford-HPI and MIT-HPI'],
      },
      {
        name: 'Sinem Aslan',
        image: '/images/aslan.jpg',
        role: 'Professor, German UDS',
        bio: ['Former Senior AI/UX Scientist,', 'Intel and Google · 13 years in Silicon Valley'],
      },
    ],
    portraitOf: (name: string) => `Portrait of ${name}`,
    supportKicker: 'Learning support & advisors',
    supportTitle: 'You are never learning alone',
    supportLabel: 'Learning support',
    learningSupport: [
      {
        logo: 'UDS logo',
        name: 'College for Design Thinking',
        text: 'Design Thinking workshops and project coaching.',
      },
      {
        logo: 'CSGE',
        name: 'CSGE Learning Center',
        text: 'Weekly small-group learning support and study skills.',
      },
    ],
    advisorsTitle: 'Your personal advisors',
    photo: '[Photo]',
    advisors: [
      { name: '[Name]', role: 'Study pathway advisor', focus: 'University choice and application planning' },
      { name: '[Name]', role: 'Career coach', focus: 'Early career planning and coaching for start-ups' },
      { name: '[Name]', role: 'Career coach', focus: 'Coaching for professionals' },
    ],
  },
  partners: {
    eyebrow: 'partners.',
    title: 'Partnering with universities and employers in Germany and China',
    items: ['[Logo] Guangdong', '[SISU]', '[Employer partner]'],
    cta: "University or employer? Let's build talent pathways together.",
    become: 'Become a partner',
  },
  apply: {
    eyebrow: 'apply.',
    title: 'Ready to start? Apply in four steps.',
    aside: 'Ed4Change modules start every quarter. The M.Sc. starts in April and October.',
    steps: [
      { title: 'Choose your program', text: 'Pick your program and intake.' },
      { title: 'Submit your application', text: 'Fill in the online form and upload your documents.' },
      {
        title: 'Pay securely via Flywire',
        text: 'Pay your fee online through Flywire, in your own currency, with secure international transfer.',
      },
      { title: 'Start learning', text: 'Receive your confirmation and course access.' },
    ],
    unsure: 'Not sure yet? Book a free consultation',
    note: 'Secure payment via Flywire · Refunds possible within 14 days of enrolment',
  },
  faq: {
    eyebrow: 'FAQs.',
    title: 'Questions we hear often',
    items: [
      {
        q: 'Do I need to come to Germany to start?',
        a: 'No. All credit courses are fully online, so you can start from China. Onsite events in Potsdam are optional.',
      },
      {
        q: 'Who awards the ECTS credits?',
        a: 'Our partner university, German UDS, awards all credits and degrees. CSGE advises you, handles your enrolment and supports you while you learn.',
      },
      {
        q: 'Will other universities recognise my ECTS?',
        a: 'ECTS is the European standard for academic credit. Each receiving university decides whether to transfer credits, and we help you prepare that application.',
      },
      {
        q: 'When do courses start?',
        a: 'Ed4Change modules start every quarter. The M.Sc. starts in April or October.',
      },
      {
        q: 'Can I visit Europe during my studies?',
        a: 'Yes. We support your short-term visa application for stays of up to 90 days, for European campus tours, career weeks and cultural experiences. Visa decisions are made by the German authorities.',
      },
      {
        q: 'Can I come to Germany to work after graduating?',
        a: 'Your German degree needs no further recognition. You can use it to apply for a residence permit to look for work in Germany, during which part-time work is possible. You will need, for example, health insurance and proof of funds. We help you prepare.',
      },
      {
        q: 'Who can apply for the Young M.Sc.?',
        a: 'Applicants under 27 with a Bachelor’s degree in a STEM subject.',
      },
      {
        q: 'What is your refund policy?',
        a: 'You can request a refund within 14 days of enrolling.',
      },
      {
        q: 'What language is teaching in?',
        a: '[Confirm: English]. Our advisors speak Chinese and English.',
      },
    ],
  },
  contact: {
    eyebrow: 'contact us.',
    title: 'Start your pathway today',
    address: 'Address',
    addressValue: '[Street, No.], [Postcode] Potsdam, Germany',
    email: 'Email',
    phone: 'Phone',
    wechat: 'WeChat',
    wechatId: 'CSGE 公众号',
    qr: '[WeChat QR code]',
    scan: 'Scan to follow us on WeChat for course and event updates.',
    book: 'Book a free consultation',
  },
};

const zhHome = {
  nav: [
    { href: '#about', label: '关于' },
    { href: '#programs', label: '项目' },
    { href: '#board', label: '学术委员会' },
    { href: '#partners', label: '合作伙伴' },
    { href: '#faq', label: '常见问题' },
    { href: '#contact', label: '联系' },
  ],
  menu: [
    { href: '#about', label: '关于我们' },
    { href: '#potsdam', label: '体验波茨坦' },
    { href: '#future', label: '数字未来' },
    { href: '#programs', label: '项目' },
    { href: '#board', label: '学术委员会' },
    { href: '#support', label: '学习支持' },
    { href: '#partners', label: '合作伙伴' },
    { href: '#faq', label: '常见问题' },
    { href: '#contact', label: '联系我们' },
  ],
  footer: [
    { href: '#about', label: '关于我们' },
    { href: '#programs', label: '项目' },
    { href: '#faq', label: '常见问题' },
    { href: '#contact', label: '联系我们' },
  ],
  hero: {
    eyebrow: '自由学习。快乐成长。',
    title: '从中国通往欧洲的通行证。',
    welcome: '欢迎来到中德教育中心。',
    lead: '一种新的学习方式：在世界一流的数字大学按自己的节奏在线学习，获得欧洲 ECTS 学分，打开赴欧留学与就业的道路。',
    apply: '立即申请',
    explore: '了解项目',
  },
  pass: {
    aria: '你的路径：从中国书桌出发，完成开放课程，获得 ECTS 学分，走进欧洲，抵达欧洲校园',
    badge: '学习。获得。启程。',
    fromDesk: '从你所在的',
    china: '中国',
    openCourse: '开放课程',
    ects: 'ECTS 学分',
    visit: '走进欧洲',
    toCampus: '抵达校园',
    europe: '欧洲',
    chips: ['100% 在线', '欧洲 ECTS', '德国数字科学大学'],
  },
  highlights: [
    {
      placeholder: '图片：在线课堂',
      title: '从开放课程开始',
      text: '获得开放课程证书，这是唯一的入学要求。',
    },
    {
      badge: 'ECTS',
      title: '可携带的学分',
      text: '由德国数字科学大学颁发的欧洲学分，可累积用于未来学位。',
    },
    {
      placeholder: '图片：设计思维工作坊',
      title: '打造你自己的画像',
      text: '设计思维工作坊、一对一辅导和 AI 学习助手，塑造属于你的学习画像。',
    },
    {
      placeholder: '图片：波茨坦校园 / 无忧宫',
      title: '通往欧洲的通行证',
      text: '为你规划赴欧攻读学士、硕士、科研或职业发展的个人路径。',
    },
  ],
  about: {
    eyebrow: '关于我们。',
    title: '连接中国人才与欧洲教育的桥梁',
    photo: '图片：CSGE 团队在波茨坦',
    p1: '中德教育与人才流动中心（CSGE）位于德国波茨坦。我们向中国学生提供国家认证的德国项目：你在家 100% 在线学习，我们为你规划赴欧留学与就业的个人路径。',
    p2: '德国数字科学大学负责教学并颁发学分与学位。我们负责周边一切：咨询、注册、学习支持和路径规划，让你专注学习。',
    chips: ['总部设在波茨坦', '学分由德国数字科学大学颁发', '中英双语咨询'],
    valuesChip: '幸福 · 希望 · 诚实',
  },
  potsdam: {
    eyebrow: '体验。波茨坦。',
    title: '在线学习。在波茨坦见面。',
    items: [
      {
        placeholder: '图片：欧洲大学校园',
        title: '体验。校园。',
        text: '欧洲校园参访：在波茨坦见到授课教师，走访你下一步可能申请的大学。',
      },
      {
        placeholder: '图片：职业周 / 企业参访',
        title: '体验。职业。',
        text: '职业周包含企业参访、工作坊，以及与雇主和研究者的交流。',
      },
      {
        placeholder: '图片：无忧宫 / 湖区 / 柏林',
        title: '体验。文化。',
        text: '宫殿、湖泊、博物馆，以及柏林的创业场景。亲身体验一段欧洲生活。',
      },
    ],
    nextEvent: '下一场线下活动',
    eventName: '[活动名称] · [日期] · 波茨坦',
    register: '登记意向',
  },
  future: {
    eyebrow: '体验。未来。',
    titleBefore: '面向明天的技能。',
    titleAccent: '关照今天的身心。',
    lead: '教育不只是技能。我们关心你成为怎样的人：幸福、希望与诚实的人生。',
    values: [
      { title: '幸福。', text: '重新发现学习的乐趣：好奇、创造，并按自己的节奏前行。' },
      { title: '希望。', text: '看见前方的真实选择：新的学业、新的国家、新的道路。' },
      { title: '诚实。', text: '诚实的功课，诚实的建议：你自己的项目，你自己的声音。' },
    ],
    aiTitle: '人工智能与新兴科技',
    aiLead: '硕士水平模块，每门 5 ECTS，涵盖：',
    aiItems: ['应用人工智能', '网络安全', '高级数字现实', '量子计算', '数字领导力', '数字世界', '金融科技'],
    personalTitle: '个性化学习',
    personalLead: '你的节奏，你的目标，你的路径：',
    personalItems: ['通过真实项目学习，而不是应试', '设计思维，源于斯坦福的方法'],
    meetTeam: '认识你的团队',
    weeklySupport: '每周辅导与专属顾问。',
    europeTitle: '欧洲网络',
    europeLead: '课程结束后仍能延续的连接：',
    europeItems: ['与来自世界各地的同学一起学习', '对接欧洲高校', '结识欧洲雇主'],
  },
  programs: {
    eyebrow: '项目。',
    title: '每个阶段都有一条路径',
    aside: '从高中到职业发展：所有项目均由德国数字科学大学在线授课，并颁发受认可的欧洲学分或国家认证学位。',
    microKicker: '微学位 · 每模块 5 ECTS · 每季度开学',
    ed4changeLead: '先从免费开放课程开始，再选修每门 5 ECTS 的硕士水平模块。选择适合你当下与未来的轨道。',
    applyEd4: '申请 Ed4Change',
    finderLabel: '你现在处于哪个阶段？',
    trackFinder: [
      { label: '高中在读', track: 'i4study' },
      { label: '高考之后', track: 'i4transfer' },
      { label: '大学在读', track: 'i4world' },
      { label: '创业者或高管', track: 'i4research' },
    ],
    ed4change: [
      {
        name: 'i4study',
        audience: '大学预科 · 高中生',
        text: '在进入大学前获得第一批 ECTS 学分。德国数字科学大学模块，含设计思维工作坊与每周辅导：为申请德国、英国或其他欧洲高校打下坚实起点。',
        price: '€3,200',
        priceNote: '一价全包',
      },
      {
        name: 'i4transfer',
        audience: '预科与转学 · 高考学生',
        text: '先在中国合作高校完成预科年，再在德国数字科学大学学习一年（60 ECTS），随后转入欧洲高校。',
        price: '€15,000',
        priceNote: '一年 · 60 ECTS',
      },
      {
        name: 'i4world',
        audience: '国际学分 · 在校大学生',
        text: '为你正在攻读的学位叠加欧洲学分，或完成一个完整的海外学期。',
        price: '起价 €900',
      },
    ],
    comingSoon: '即将推出',
    i4researchAudience: '科研路径 · 创业者与高管',
    i4researchText: '面向创业者与高管的新路径正在筹备中，详情即将公布。',
    registerInterest: '登记意向',
    mscKicker: '硕士 · 两年 · 27 岁以下 STEM 毕业生 · 四月与十月开学',
    mscPricePer: '每年',
    mscLead: '国家认证的德国理学硕士，100% 在线学习，面向未来科技职业。选择你的方向：',
    mscItems: ['应用人工智能', '网络安全', '高级数字现实', '量子计算'],
    applyMsc: '申请理学硕士',
    mbaKicker: 'MBA · 面向职场人士与创始人',
    mbaLead: '写给建设者：新职业、新团队，或自己的事业。选择你的方向：',
    mbaItems: ['数字化转型', '数字技术', '数字治理', '金融科技'],
    visaKicker: '签证支持 · 面向理学硕士学生',
    visaTitle: '在线学习。在关键时刻来到德国。',
    during: '学习期间',
    shortVisa: '短期签证',
    shortVisaText: '我们协助你申请最长 90 天的短期签证，用于欧洲校园参访、职业周、沉浸周与文化体验。',
    after: '毕业之后',
    longVisa: '长期签证',
    longVisaText: '你的德国学位无需额外认证。可凭此申请在德求职居留许可，求职期间可兼职工作。',
    visaFine: '签证决定由德国主管部门作出。常见要求包括医疗保险与资金证明。我们协助你准备申请材料。',
  },
  board: {
    eyebrow: '学术委员会。',
    title: 'Ed4Change 学术委员会',
    lead: '来自德国与中国的国际师资，保障课程质量与学术标准。',
    chair: '学术委员会主席',
    prof: '教授、博士',
    chairRole: '德国数字科学大学创校校长',
    chairAlt: 'Christoph Meinel 肖像，德国数字科学大学创校校长',
    chairBio:
      '世界知名计算机科学家 Christoph Meinel 于 2004 至 2023 年担任哈索·普拉特纳研究所（HPI）管理与科学主任。2012 年，他与团队创办欧洲首个慕课平台 openHPI，由此走向德国数字科学大学：德国第一所完全在线、获国家批准的数字大学。',
    stats: [
      { label: '著作', count: '35', suffix: '' },
      { label: '论文', count: '750', suffix: '+' },
      { label: '博士研究生', count: '70', suffix: '+' },
      { label: '慕课注册人次', count: '15', suffix: 'M+' },
    ],
    merits: [
      {
        title: '学术卓越',
        items: [
          '世界知名计算机科学家：35 部著作、750 余篇论文、指导 70 余名博士研究生',
          '德国国家科学与工程院 acatech 院士',
          '斯坦福-HPI 设计思维研究项目联合创始人',
        ],
      },
      {
        title: '数字教育先驱',
        items: [
          '2002 年：与北京工业大学开办在线学分课程，官方硕士课程，20 届、500 余名学生',
          '2012 年：创办欧洲首个慕课平台 openHPI，与 Coursera 同年上线',
          'openHPI、openSAP 与 openWHO 累计注册超过 1500 万人次',
        ],
      },
      {
        title: 'STEM 教育引领者',
        items: [
          '德国全国 STEM 倡议 “MINT Zukunft schaffen” 主席',
          '德国中小学 STEM 卓越网络 MINT-EC 理事会成员',
        ],
      },
    ],
    members: [
      {
        name: 'Dacheng Liu',
        image: '/images/liu.jpg',
        role: '清华大学教授',
        bio: ['创始副院长，', '清华大学互联网产业研究院'],
      },
      {
        name: 'Haojin Yang',
        image: '/images/yang.jpg',
        role: '德国数字科学大学教授',
        bio: ['前首席人工智能科学家，', '华为边缘云创新实验室'],
      },
      {
        name: 'Julia von Thienen',
        image: '/images/thienen.jpg',
        role: '德国数字科学大学设计思维讲席教授',
        bio: ['主持与斯坦福-HPI', '及 MIT-HPI 的联合研究项目'],
      },
      {
        name: 'Sinem Aslan',
        image: '/images/aslan.jpg',
        role: '德国数字科学大学教授',
        bio: ['前高级人工智能/体验科学家，', '英特尔与谷歌 · 硅谷 13 年'],
      },
    ],
    portraitOf: (name: string) => `${name} 肖像`,
    supportKicker: '学习支持与顾问',
    supportTitle: '你从来不是一个人在学',
    supportLabel: '学习支持',
    learningSupport: [
      {
        logo: 'UDS logo',
        name: '设计思维学院',
        text: '设计思维工作坊与项目辅导。',
      },
      {
        logo: 'CSGE',
        name: 'CSGE 学习中心',
        text: '每周小组学习支持与学习方法辅导。',
      },
    ],
    advisorsTitle: '你的专属顾问',
    photo: '[照片]',
    advisors: [
      { name: '[姓名]', role: '升学路径顾问', focus: '院校选择与申请规划' },
      { name: '[姓名]', role: '职业教练', focus: '早期职业规划与创业辅导' },
      { name: '[姓名]', role: '职业教练', focus: '面向职场人士的辅导' },
    ],
  },
  partners: {
    eyebrow: '合作伙伴。',
    title: '与德国及中国的高校和雇主携手',
    items: ['[标识] 广东', '[SISU]', '[雇主伙伴]'],
    cta: '高校或雇主？让我们一起建设人才通道。',
    become: '成为合作伙伴',
  },
  apply: {
    eyebrow: '申请。',
    title: '准备好了吗？四步完成申请。',
    aside: 'Ed4Change 模块每季度开学。理学硕士于四月和十月开学。',
    steps: [
      { title: '选择项目', text: '选定项目与入学批次。' },
      { title: '提交申请', text: '填写在线表格并上传材料。' },
      {
        title: '通过 Flywire 安全缴费',
        text: '通过 Flywire 在线支付学费，可用本币，国际转账安全便捷。',
      },
      { title: '开始学习', text: '收到确认并获得课程权限。' },
    ],
    unsure: '还不确定？预约免费咨询',
    note: 'Flywire 安全支付 · 入学后 14 天内可申请退款',
  },
  faq: {
    eyebrow: '常见问题。',
    title: '我们经常被问到的问题',
    items: [
      {
        q: '开始学习必须去德国吗？',
        a: '不必。所有学分课程均为完全在线，你可以从中国开始。波茨坦的线下活动可选参加。',
      },
      {
        q: 'ECTS 学分由谁颁发？',
        a: '合作高校德国数字科学大学颁发所有学分与学位。CSGE 为你提供咨询、办理注册，并在学习过程中给予支持。',
      },
      {
        q: '其他大学会认可我的 ECTS 吗？',
        a: 'ECTS 是欧洲学术学分标准。是否转换学分由接收院校决定，我们协助你准备相关申请。',
      },
      {
        q: '课程何时开学？',
        a: 'Ed4Change 模块每季度开学。理学硕士于四月或十月开学。',
      },
      {
        q: '学习期间可以去欧洲吗？',
        a: '可以。我们协助申请最长 90 天的短期签证，用于欧洲校园参访、职业周与文化体验。签证决定由德国主管部门作出。',
      },
      {
        q: '毕业后可以来德国工作吗？',
        a: '你的德国学位无需额外认证。可凭此申请在德求职居留许可，求职期间可兼职。通常需要医疗保险与资金证明。我们协助你准备。',
      },
      {
        q: '谁可以申请青年理学硕士？',
        a: '27 岁以下、拥有 STEM 学士学位的申请者。',
      },
      {
        q: '退款政策是什么？',
        a: '入学后 14 天内可申请退款。',
      },
      {
        q: '授课语言是什么？',
        a: '[待确认：英语]。顾问提供中文与英语服务。',
      },
    ],
  },
  contact: {
    eyebrow: '联系我们。',
    title: '今天就开始你的路径',
    address: '地址',
    addressValue: '[街道，门牌]，[邮编] 德国波茨坦',
    email: '邮箱',
    phone: '电话',
    wechat: '微信',
    wechatId: 'CSGE 公众号',
    qr: '[微信二维码]',
    scan: '扫码关注微信公众号，获取课程与活动更新。',
    book: '预约免费咨询',
  },
};

export const home = { en: enHome, zh: zhHome };

const enConsult = {
  nav: [
    { href: '/#about', label: 'About' },
    { href: '/#programs', label: 'Programs' },
    { href: '/#faq', label: 'FAQs' },
    { href: '/', label: 'Home' },
  ],
  menu: [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#potsdam', label: 'Experience Potsdam' },
    { href: '/#future', label: 'Digital future' },
    { href: '/#programs', label: 'Programs' },
    { href: '/#faq', label: 'FAQs' },
    { href: '/#contact', label: 'Contact' },
  ],
  kicker: 'Center Sino-German Education · Potsdam',
  title: 'Your pass from China to Europe.',
  lead: 'Join our digital learning community, earn European ECTS credits and gain cutting-edge skills in applied AI and emerging technologies from the German University of Digital Science.',
  leadStrong: 'Open your path to study and work in Europe, starting online, from home.',
  findPathway: 'Find your pathway',
  download: 'Download brochure',
  motto: { learn: 'learn.', earn: 'earn.', move: 'move.' },
  photo: 'Photo: students at a CSGE onsite event in Potsdam',
  promiseAria: 'Our promise',
  promises: [
    {
      title: 'Community. Digital learning',
      text: 'Design thinking, AI and emerging technologies: digital learning from a German University of Digital Science.',
    },
    {
      title: 'Earn ECTS',
      text: 'Each module is worth 5 European ECTS points, issued by German UDS, stackable towards a later degree.',
    },
    {
      title: 'Get your pass to Europe',
      text: 'Use your credits, portfolio and our guidance to move on to study, research or a career in Europe.',
    },
  ],
  howEyebrow: 'how it works.',
  howTitle: 'From your desk in China to a campus in Europe',
  steps: [
    { title: 'Start with an open course', text: 'Start an open course, earn a certificate, your only entry requirement.' },
    {
      title: 'Take credit modules',
      text: 'Master-level micro-degree modules in AI, cybersecurity and digital topics, 5 ECTS each.',
    },
    { title: 'Build your own profile', text: 'Project work, workshops and 1:1 coaching shape your own portfolio.' },
    {
      title: 'Move on to Europe',
      text: "Transfer your credits, apply for a Bachelor's or Master's degree, or start your career in Europe.",
    },
  ],
  programsEyebrow: 'choose your pathway.',
  programsTitle: 'Programs',
  seeAll: 'See all programs',
  programs: [
    {
      photo: 'Photo: online design-thinking workshop',
      audience: 'For high-school & university students',
      name: 'Ed4Change',
      text: 'Micro-degree with ECTS: i4study, i4world, i4transfer and i4research.',
      link: 'Explore Ed4Change',
    },
    {
      photo: 'Photo: students in a lab or AI class',
      audience: 'For STEM graduates under 27',
      name: 'Young M.Sc.',
      text: 'Master of Science in Applied AI, Cybersecurity, Advanced Digital Reality or Quantum Computing.',
      link: 'Explore the M.Sc.',
    },
    {
      photo: 'Photo: professionals at a leadership session',
      audience: 'For professionals',
      name: 'Builder MBA',
      text: 'Build your new career or venture in Europe.',
      link: 'Explore the MBA',
    },
  ],
  leadEyebrow: "let's talk.",
  leadTitle: 'Book a free pathway consultation',
  leadText:
    'Tell us where you are now and where you want to go. Our advisors in Potsdam reply within [2] working days, in Chinese or English.',
  checks: [
    'Credits issued by German UDS, Potsdam',
    'Ed4Change starts every quarter',
    'M.Sc. and MBA start in April or October',
    '100% online, no travel needed to start',
  ],
  formTitle: 'Request your consultation',
  formLead: 'It takes less than a minute.',
  fullName: 'Full name',
  email: 'Email',
  wechat: 'WeChat ID',
  optional: '(optional)',
  interested: "I'm interested in",
  submit: 'Request my consultation',
  privacyNote: 'By submitting you agree to our',
  privacyLink: 'privacy policy',
  interests: [
    'Ed4Change: i4study',
    'Ed4Change: i4world',
    'Ed4Change: i4transfer',
    'Ed4Change: i4research',
    'Young M.Sc.',
    'MBA',
    'Not sure yet',
  ],
};

const zhConsult = {
  nav: [
    { href: '/#about', label: '关于' },
    { href: '/#programs', label: '项目' },
    { href: '/#faq', label: '常见问题' },
    { href: '/', label: '首页' },
  ],
  menu: [
    { href: '/', label: '首页' },
    { href: '/#about', label: '关于' },
    { href: '/#potsdam', label: '体验波茨坦' },
    { href: '/#future', label: '数字未来' },
    { href: '/#programs', label: '项目' },
    { href: '/#faq', label: '常见问题' },
    { href: '/#contact', label: '联系' },
  ],
  kicker: '中德教育中心 · 波茨坦',
  title: '从中国通往欧洲的通行证。',
  lead: '加入我们的数字学习社区，获得欧洲 ECTS 学分，向德国数字科学大学学习应用人工智能与新兴科技的前沿能力。',
  leadStrong: '打开赴欧留学与就业的道路，从家里在线开始。',
  findPathway: '找到你的路径',
  download: '下载手册',
  motto: { learn: '学习。', earn: '获得。', move: '启程。' },
  photo: '图片：学生参加 CSGE 波茨坦线下活动',
  promiseAria: '我们的承诺',
  promises: [
    {
      title: '社区。数字学习',
      text: '设计思维、人工智能与新兴科技：来自德国数字科学大学的数字学习。',
    },
    {
      title: '获得 ECTS',
      text: '每门模块价值 5 个欧洲 ECTS 学分，由德国数字科学大学颁发，可累积用于后续学位。',
    },
    {
      title: '拿到通往欧洲的通行证',
      text: '凭学分、作品集与我们的指导，继续赴欧深造、科研或就业。',
    },
  ],
  howEyebrow: '如何进行。',
  howTitle: '从中国的书桌，到欧洲的校园',
  steps: [
    { title: '从开放课程开始', text: '参加开放课程并获得证书，这是唯一的入学要求。' },
    {
      title: '选修学分模块',
      text: '人工智能、网络安全与数字主题的硕士水平微学位模块，每门 5 ECTS。',
    },
    { title: '打造你自己的画像', text: '项目作业、工作坊与一对一辅导，塑造属于你的作品集。' },
    {
      title: '迈向欧洲',
      text: '转换学分，申请学士或硕士学位，或在欧洲开启职业发展。',
    },
  ],
  programsEyebrow: '选择你的路径。',
  programsTitle: '项目',
  seeAll: '查看全部项目',
  programs: [
    {
      photo: '图片：在线设计思维工作坊',
      audience: '面向高中生与大学生',
      name: 'Ed4Change',
      text: '含 ECTS 的微学位：i4study、i4world、i4transfer 与 i4research。',
      link: '了解 Ed4Change',
    },
    {
      photo: '图片：实验室或人工智能课堂中的学生',
      audience: '面向 27 岁以下 STEM 毕业生',
      name: '青年理学硕士',
      text: '应用人工智能、网络安全、高级数字现实或量子计算理学硕士。',
      link: '了解理学硕士',
    },
    {
      photo: '图片：领导力课程中的职场人士',
      audience: '面向职场人士',
      name: 'Builder MBA',
      text: '在欧洲打造新的职业或事业。',
      link: '了解 MBA',
    },
  ],
  leadEyebrow: '让我们聊聊。',
  leadTitle: '预约免费路径咨询',
  leadText: '告诉我们你现在在哪里、想去向何方。波茨坦的顾问将在 [2] 个工作日内以中文或英文回复。',
  checks: [
    '学分由波茨坦德国数字科学大学颁发',
    'Ed4Change 每季度开学',
    '理学硕士与 MBA 于四月或十月开学',
    '100% 在线，开始学习无需出行',
  ],
  formTitle: '申请咨询',
  formLead: '不到一分钟即可完成。',
  fullName: '姓名',
  email: '邮箱',
  wechat: '微信号',
  optional: '（选填）',
  interested: '我感兴趣的是',
  submit: '提交咨询申请',
  privacyNote: '提交即表示你同意我们的',
  privacyLink: '隐私政策',
  interests: [
    'Ed4Change: i4study',
    'Ed4Change: i4world',
    'Ed4Change: i4transfer',
    'Ed4Change: i4research',
    '青年理学硕士',
    'MBA',
    '还不确定',
  ],
};

export const consultation = { en: enConsult, zh: zhConsult };

export const legal = {
  en: {
    imprintBody:
      '[Impressum to be provided: company name, legal form, address, managing directors, register court and number, VAT ID, contact details, responsible person for content.]',
    privacyBody:
      '[Datenschutzerklärung to be provided, covering hosting, the consultation form and CRM processing, Flywire payments and any analytics or cookies.]',
  },
  zh: {
    imprintBody:
      '[法律声明待补充：公司名称、法律形式、地址、董事、登记法院与编号、增值税号、联系方式、内容责任人。]',
    privacyBody:
      '[隐私政策待补充，涵盖托管、咨询表单与客户系统处理、Flywire 支付以及分析或 Cookie。]',
  },
};
