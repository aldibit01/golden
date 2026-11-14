/* Golden Coffee — содержание, переводы и интерактив.
   Переработано под мобильную версию (iPhone 15/16). */

const menuCategories = [
  { id: 'coffee', names: { ru: 'Кофейная карта', kk: 'Кофе мәзірі', en: 'Coffee' } },
  { id: 'donuts', names: { ru: 'Пончики', kk: 'Пончиктер', en: 'Donuts' } },
  { id: 'snacks', names: { ru: 'Перекусы', kk: 'Жеңіл тағамдар', en: 'Snacks' } },
  { id: 'desserts', names: { ru: 'Десерты', kk: 'Десерттер', en: 'Desserts' } },
  { id: 'croissants', names: { ru: 'Круассаны', kk: 'Круассандар', en: 'Croissants' } },
  { id: 'macarons', names: { ru: 'Макаронсы', kk: 'Макарондар', en: 'Macarons' } }
];

const donutItems = [
  {
    name: {
      ru: 'Шоколадный донат',
      kk: 'Шоколадты донат',
      en: 'Chocolate donut'
    },
    description: {
      ru: 'Погрузитесь в мир шоколадного наслаждения! Нежный шоколадный донат — это просто праздник для сладкоежек.',
      kk: 'Шоколадтың керемет дәміне бойлаңыз! Нәзік шоколадты донат — тәттіқұмарлар үшін нағыз мереке.',
      en: 'Immerse yourself in chocolate indulgence! This soft chocolate donut is a real treat for anyone with a sweet tooth.'
    },
    image: 'donut1'
  },
  {
    name: {
      ru: 'Донат с черничной начинкой',
      kk: 'Көкжидек салмасы бар донат',
      en: 'Blueberry-filled donut'
    },
    description: {
      ru: 'Откройте для себя свежесть ягод с нашим черничным донатом! Нежная текстура и натуральный вкус черники подарят вам ощущение лета в каждом укусе.',
      kk: 'Көкжидек қосылған донатымызбен жидектің балғын дәмін сезініңіз! Нәзік құрылымы мен көкжидектің табиғи дәмі әр тістеген сайын жаздың лебін сыйлайды.',
      en: 'Discover the freshness of berries in our blueberry donut! Its tender texture and natural blueberry flavor bring a taste of summer to every bite.'
    },
    image: 'donut2'
  },
  {
    name: {
      ru: 'Классический донат',
      kk: 'Классикалық донат',
      en: 'Classic donut'
    },
    description: {
      ru: 'Наши классические донаты — это идеальное сочетание лёгкости и сладости, покрытые ароматной глазурью. Прекрасный выбор для любителей классики!',
      kk: 'Классикалық донаттарымыз жеңілдік пен тәттіліктің үйлесімін хош иісті глазурьмен толықтырады. Классиканы ұнататындарға тамаша таңдау!',
      en: 'Our classic donuts balance lightness and sweetness, finished with an aromatic glaze. A perfect choice for lovers of the classics!'
    },
    image: 'donut3'
  }
];

const snackItems = [
  {
    name: {
      ru: 'Круассан с сёмгой',
      kk: 'Албырт балығы қосылған круассан',
      en: 'Salmon croissant'
    },
    description: {
      ru: 'Откройте для себя изысканность нашего круассана с сёмгой. Гармония вкусов, которая порадует ваши чувства и станет великолепным дополнением к утреннему кофе или лёгкому обеду.',
      kk: 'Албырт балығы қосылған круассанымыздың ерекше дәмін татып көріңіз. Үйлесімді дәм сезіміңізді қуантады әрі таңғы кофеге немесе жеңіл түскі асқа тамаша қосымша болады.',
      en: 'Discover the refined taste of our salmon croissant. A harmony of flavors to delight your senses, perfect with your morning coffee or a light lunch.'
    },
    image: 'kruasansemga'
  },
  {
    name: {
      ru: 'Панини с тунцом',
      kk: 'Тунец қосылған панини',
      en: 'Tuna panini'
    },
    description: {
      ru: 'Попробуйте наше панини с тунцом — идеальный выбор для тех, кто ценит вкус и качество! Каждый укус подарит чувство насыщенности, делая это панини отличным вариантом для обеда или перекуса. Быстро, удобно и невероятно вкусно!',
      kk: 'Дәм мен сапаны бағалайтындарға арналған тунец қосылған паниниімізді татып көріңіз! Әр тістеген сайын тойымды сезім сыйлайды. Түскі асқа не жеңіл тіскебасарға таптырмас таңдау: тез, ыңғайлы әрі өте дәмді!',
      en: 'Try our tuna panini — a perfect choice for those who value flavor and quality. Every bite is satisfying, making it ideal for lunch or a quick snack. Fast, convenient, and delicious!'
    },
    image: 'panini'
  },
  {
    name: {
      ru: 'Круассан с курицей',
      kk: 'Тауық еті қосылған круассан',
      en: 'Chicken croissant'
    },
    description: {
      ru: 'Попробуйте наш круассан с курицей — идеальное сочетание! Хорошо подходит для быстрого обеда или перекуса в любое время дня. Круассан с курицей — ваш новый любимый вкус, который добавит ярких эмоций в каждый день!',
      kk: 'Тауық еті қосылған круассанымызды татып көріңіз — мінсіз үйлесім! Күннің кез келген уақытында жылдам түскі асқа немесе тіскебасарға қолайлы. Күн сайын көңіл-күйіңізді көтеретін жаңа сүйікті дәміңіз болсын!',
      en: 'Try our chicken croissant — a perfect combination. Ideal for a quick lunch or snack any time of day. It could become your new favorite, adding a little joy to every day!'
    },
    image: 'kruasanchicken'
  }
];

const dessertItems = [
  {
    name: {
      ru: 'Орешки со сгущёнкой',
      kk: 'Қоюлатылған сүті бар жаңғақтар',
      en: 'Nut-shaped cookies with condensed milk'
    },
    description: {
      ru: 'Погрузитесь в мир настоящего лакомства с нашими орешками! Идеальное сочетание нежной сгущёнки и разнообразных орехов. Каждый укус подарит гармонию сладости и текстуры, которую невозможно забыть.',
      kk: 'Жаңғақ тәттілеріміздің ерекше дәмін сезініңіз! Нәзік қоюлатылған сүт пен әртүрлі жаңғақтардың тамаша үйлесімі. Әр тістеген сайын ұмытылмас тәттілік пен нәзік құрылымнан ләззат аласыз.',
      en: 'Treat yourself to our nut-shaped cookies: a delightful combination of smooth condensed milk and assorted nuts. Every bite brings together sweetness and texture in a taste you won’t forget.'
    },
    image: 'oreshki'
  },
  {
    name: {
      ru: 'Морковный кекс',
      kk: 'Сәбізді кекс',
      en: 'Carrot cake'
    },
    description: {
      ru: 'Каждый кусочек кекса удивляет своей сочностью и насыщенным вкусом, создавая гармонию между сладостью и лёгкой пряностью. Идеален к утреннему кофе или как сладкий перекус в течение дня.',
      kk: 'Кекстің әр тілімі шырындылығымен және қанық дәмімен таңғалдырады. Тәттілік пен жеңіл дәмдеуіштердің үйлесімі оны таңғы кофеге немесе күндізгі тәтті тіскебасарға тамаша етеді.',
      en: 'Each slice is moist and full of flavor, balancing sweetness with a gentle hint of spice. Perfect with morning coffee or as a little treat during the day.'
    },
    image: 'carrotcake'
  },
  {
    name: {
      ru: 'Муравейник',
      kk: 'Құмырсқа илеуі',
      en: 'Anthill cake'
    },
    description: {
      ru: 'Погрузитесь в мир сладких удовольствий! Это уникальное лакомство сочетает в себе необычную текстуру и богатый вкус, который подарит вам истинное наслаждение с каждым укусом.',
      kk: 'Тәтті ләззат әлеміне еніңіз! Ерекше құрылымы мен қанық дәмі бар бұл тәтті әр тістеген сайын шынайы қуаныш сыйлайды.',
      en: 'Step into a world of sweet indulgence! This unique treat pairs an unusual texture with a rich flavor for pure enjoyment in every bite.'
    },
    image: 'muraveinik'
  },
  {
    name: {
      ru: 'Овсяное печенье',
      kk: 'Сұлы печеньесі',
      en: 'Oat cookie'
    },
    description: {
      ru: 'Наше овсяное печенье — это хрустящая текстура и нежный вкус, обогащённый натуральными ингредиентами.',
      kk: 'Сұлы печеньеміз қытырлақ құрылымы мен табиғи ингредиенттерден жасалған нәзік дәмімен қуантады.',
      en: 'Our oat cookie combines a crisp texture with a delicate flavor, made even better with natural ingredients.'
    },
    image: 'oatcookie'
  },
  {
    name: {
      ru: 'Брауни-печенье M&M’s',
      kk: 'M&M’s қосылған брауни-печенье',
      en: 'M&M’s brownie cookie'
    },
    description: {
      ru: 'Погрузитесь в мир шоколадного наслаждения! Наше брауни-печенье с яркими M&M’s — это взрыв вкуса в каждом укусе.',
      kk: 'Шоколадтың керемет дәміне бөленіңіз! Түрлі түсті M&M’s қосылған брауни-печеньеміз әр тістеген сайын ерекше дәм сыйлайды.',
      en: 'Dive into chocolate bliss! Our brownie cookie with colorful M&M’s delivers a burst of flavor in every bite.'
    },
    image: 'chococookie'
  }
];

const croissantItems = [
  {
    name: {
      ru: 'Миндальный круассан',
      kk: 'Бадам қосылған круассан',
      en: 'Almond croissant'
    },
    description: {
      ru: 'Откройте для себя волшебство нашего миндального круассана! Идеален к утреннему кофе или как изысканное угощение в любое время дня.',
      kk: 'Бадам қосылған круассанымыздың ерекше дәмін татып көріңіз! Таңғы кофеге тамаша үйлеседі немесе күннің кез келген уақытында дәм татуға лайық.',
      en: 'Discover the magic of our almond croissant! Perfect with your morning coffee or as a delightful treat any time of day.'
    },
    image: 'mindalk'
  },
  {
    name: {
      ru: 'Шоколадный круассан',
      kk: 'Шоколадты круассан',
      en: 'Chocolate croissant'
    },
    description: {
      ru: 'Насладитесь истинным счастьем с нашим шоколадным круассаном! Нежное слоёное тесто, наполненное тающим шоколадом, создаёт идеальное сочетание хрустящей корочки и насыщенной сладости.',
      kk: 'Шоколадты круассанымызбен ерекше ләззатқа бөленіңіз! Еріген шоколадқа толы нәзік қатпарлы қамыр қытырлақ қабық пен қанық тәттіліктің тамаша үйлесімін ұсынады.',
      en: 'Enjoy a little moment of bliss with our chocolate croissant! Delicate flaky pastry filled with melting chocolate brings together a crisp crust and rich sweetness.'
    },
    image: 'chocok'
  },
  {
    name: {
      ru: 'Фисташковый круассан',
      kk: 'Пісте қосылған круассан',
      en: 'Pistachio croissant'
    },
    description: {
      ru: 'Подарите себе удовольствие и попробуйте наш фисташковый круассан — изысканное лакомство, которое добавит ярких оттенков в ваш день!',
      kk: 'Өзіңізді қуанышқа бөлеп, пісте қосылған круассанымызды татып көріңіз — күніңізге ерекше реңк қосатын нәзік тәтті.',
      en: 'Treat yourself to our pistachio croissant — a refined delight that will add a bright note to your day!'
    },
    image: 'fistashk'
  }
];

const macaronItems = [
  {
    name: {
      ru: 'Шоколадный макарон',
      kk: 'Шоколадты макарон',
      en: 'Chocolate macaron'
    },
    description: {
      ru: 'Настоящая мечта для любителей шоколада.',
      kk: 'Шоколад сүйер қауымның нағыз арманы.',
      en: 'A true dream for chocolate lovers.'
    },
    image: 'chocomac'
  },
  {
    name: {
      ru: 'Ягодный макарон',
      kk: 'Жидек дәмі бар макарон',
      en: 'Berry macaron'
    },
    description: {
      ru: 'Восхитительное сочетание подарит вам настоящий взрыв вкуса.',
      kk: 'Керемет үйлесім сізге ерекше дәм сезімін сыйлайды.',
      en: 'A delightful combination that brings a burst of flavor.'
    },
    image: 'berrymac'
  },
  {
    name: {
      ru: 'Манго-маракуйя макарон',
      kk: 'Манго мен маракуйя қосылған макарон',
      en: 'Mango and passion fruit macaron'
    },
    description: {
      ru: 'Яркий тропический вкус создаст идеальную гармонию для ваших чувств.',
      kk: 'Жарқын тропикалық дәм сезімдеріңізге тамаша үйлесім сыйлайды.',
      en: 'A vibrant tropical flavor creates perfect harmony for your senses.'
    },
    image: 'mangomac'
  },
  {
    name: {
      ru: 'Фисташка-малина макарон',
      kk: 'Пісте мен таңқурай қосылған макарон',
      en: 'Pistachio and raspberry macaron'
    },
    description: {
      ru: 'Нежный фисташковый крем с лёгкой кислинкой малины станет настоящим открытием для ценителей необычных сочетаний.',
      kk: 'Таңқурайдың жеңіл қышқылдығы бар нәзік пісте кремі ерекше үйлесімдерді бағалайтындар үшін жаңа жаңалық болады.',
      en: 'Delicate pistachio cream with a hint of raspberry tartness is a delightful discovery for lovers of unexpected pairings.'
    },
    image: 'fistashmac'
  }
];

const branches = [
  {
    number: '01',
    image: 'saryarka',
    address: 'Проспект Сарыарка 8/1',
    mapUrl: 'https://2gis.kz/astana/geo/70000001094366021?inv_by=da778d1cfc0d44f7b2b69bac8ece7a35&inv_ts=1794562615',
    hours: [['weekdaysSat', '07:00–24:00'], ['sunday', '08:00–24:00']]
  },
  {
    number: '02',
    image: 'abay',
    address: 'Проспект Абая, 47',
    mapUrl: 'https://2gis.kz/astana/geo/70000001118406803?inv_by=da778d1cfc0d44f7b2b69bac8ece7a35&inv_ts=1794562630',
    hours: [['weekdays', '07:00–20:00'], ['saturday', '09:00–16:00'], ['sunday', 'closed']]
  }
];

const dayLabels = {
  ru: { weekdaysSat: 'Пн — Сб', weekdays: 'Пн — Пт', saturday: 'Суббота', sunday: 'Воскресенье', closed: 'Выходной' },
  kk: { weekdaysSat: 'Дс — Сб', weekdays: 'Дс — Жм', saturday: 'Сенбі', sunday: 'Жексенбі', closed: 'Демалыс' },
  en: { weekdaysSat: 'Mon — Sat', weekdays: 'Mon — Fri', saturday: 'Saturday', sunday: 'Sunday', closed: 'Closed' }
};

const translations = {
  ru: {
    navMenu: 'Меню',
    navLocations: 'Филиалы',
    navMap: 'Карта',
    navContact: 'Контакты',
    navReviews: 'Отзывы',
    navInstagram: 'Instagram',
    language: 'Язык',
    order: 'Заказать',
    heroEyebrow: 'КОФЕЙНЯ · КУХНЯ · АСТАНА',
    heroTitle: 'Кофе для тех,<br><em>кто понимает.</em>',
    heroText: 'Два филиала в Астане. Зайдёшь за латте — останешься на десерт.',
    viewMenu: 'Смотреть меню',
    ourLocations: 'Наши филиалы',
    reviewsButton: 'Отзывы',
    menuEyebrow: 'ИЗУЧИТЕ НАШЕ',
    menuTitle: 'Меню',
    menuDesc: 'Выберите что-то для себя. Актуальное меню и наличие уточняйте у наших сотрудников.',
    locationsEyebrow: 'БУДЕМ РАДЫ ВАС ВИДЕТЬ',
    locationsTitle: 'Наши филиалы',
    locationsDesc: 'Два адреса в Астане — одно любимое место.',
    mapEyebrow: 'НАЙДИТЕ НАС',
    mapTitle: 'Мы на карте',
    mapDesc: 'Выберите филиал, чтобы открыть его в 2ГИС.',
    contactEyebrow: 'ОСТАЛИСЬ ВОПРОСЫ?',
    contactTitle: 'Мы на связи',
    contactModalDesc: 'Выберите удобный способ связаться с нами.',
    callUs: 'Позвонить нам',
    foodWhatsapp: 'Доставка блюд',
    coffeeWhatsapp: 'Кофейня WhatsApp',
    footer: 'Кофейня и кухня в Астане',
    hours: 'ЧАСЫ РАБОТЫ',
    product: 'Позиция',
    branchTitle: 'Филиал {n}',
    mapOpenBranch: 'Филиал {n} в 2ГИС'
  },
  kk: {
    navMenu: 'Мәзір',
    navLocations: 'Филиалдар',
    navMap: 'Карта',
    navContact: 'Байланыс',
    navReviews: 'Пікірлер',
    navInstagram: 'Instagram',
    language: 'Тіл',
    order: 'Тапсырыс беру',
    heroEyebrow: 'КОФЕЙНЯ · АСХАНА · АСТАНА',
    heroTitle: 'Кофені түсінетіндер<br><em>үшін.</em>',
    heroText: 'Астанада екі филиалымыз бар. Латте ішуге кіресің — десертке қаласың.',
    viewMenu: 'Мәзірді көру',
    ourLocations: 'Біздің филиалдар',
    reviewsButton: 'Пікірлер',
    menuEyebrow: 'БІЗДІҢ',
    menuTitle: 'Мәзір',
    menuDesc: 'Өзіңізге ұнайтынды таңдаңыз. Жақында мұнда тағамдар мен сусындарымыз пайда болады.',
    locationsEyebrow: 'СІЗДІ КҮТЕМІЗ',
    locationsTitle: 'Біздің филиалдар',
    locationsDesc: 'Астанадағы екі мекенжай — бір сүйікті орын.',
    mapEyebrow: 'БІЗДІ ТАБЫҢЫЗ',
    mapTitle: 'Біз картадамыз',
    mapDesc: '2GIS-те ашу үшін филиалды таңдаңыз.',
    contactEyebrow: 'СҰРАҚТАРЫҢЫЗ БАР МА?',
    contactTitle: 'Біз байланыстамыз',
    contactModalDesc: 'Бізбен байланысудың ыңғайлы жолын таңдаңыз.',
    callUs: 'Қоңырау шалу',
    foodWhatsapp: 'Тағам жеткізу',
    coffeeWhatsapp: 'Кофейня WhatsApp',
    footer: 'Астанадағы кофейня және асхана',
    hours: 'ЖҰМЫС УАҚЫТЫ',
    product: 'Тағам',
    branchTitle: '{n}-филиал',
    mapOpenBranch: '{n}-филиал в 2ГИС'
  },
  en: {
    navMenu: 'Menu',
    navLocations: 'Locations',
    navMap: 'Map',
    navContact: 'Contact',
    navReviews: 'Reviews',
    navInstagram: 'Instagram',
    language: 'Language',
    order: 'Order',
    heroEyebrow: 'COFFEE · KITCHEN · ASTANA',
    heroTitle: 'Coffee for those<br><em>who know.</em>',
    heroText: 'Two locations in Astana. Come in for a latte — stay for dessert.',
    viewMenu: 'Explore menu',
    ourLocations: 'Our locations',
    reviewsButton: 'Reviews',
    menuEyebrow: 'DISCOVER OUR',
    menuTitle: 'Menu',
    menuDesc: 'Find something for yourself. Current menu and availability — ask our team.',
    locationsEyebrow: 'WE LOOK FORWARD TO SEEING YOU',
    locationsTitle: 'Our locations',
    locationsDesc: 'Two addresses in Astana — one favorite place.',
    mapEyebrow: 'FIND US',
    mapTitle: 'Find us on the map',
    mapDesc: 'Choose a branch to open it in 2GIS.',
    contactEyebrow: 'HAVE A QUESTION?',
    contactTitle: 'Get in touch',
    contactModalDesc: 'Choose a convenient way to get in touch.',
    callUs: 'Call us',
    foodWhatsapp: 'Food delivery',
    coffeeWhatsapp: 'Coffee shop WhatsApp',
    footer: 'Coffee and kitchen in Astana',
    hours: 'OPENING HOURS',
    product: 'Item',
    branchTitle: 'Branch {n}',
    mapOpenBranch: 'Branch {n} in 2GIS'
  }
};

const menuLabels = {
  ru: { open: 'Открыть меню', close: 'Закрыть меню' },
  kk: { open: 'Мәзірді ашу', close: 'Мәзірді жабу' },
  en: { open: 'Open menu', close: 'Close menu' }
};

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

let currentLanguage = 'ru';
let activeCategory = 'coffee';

/* ──────── Rendering ──────── */

function renderMenu() {
  const tabs = $('#menu-tabs');
  const grid = $('#menu-grid');
  if (!tabs || !grid) return;

  const category = menuCategories.find(item => item.id === activeCategory) || menuCategories[0];

  tabs.innerHTML = menuCategories.map(item => `
    <button class="menu-tab ${item.id === activeCategory ? 'active' : ''}"
      type="button" role="tab" aria-selected="${item.id === activeCategory}"
      aria-controls="menu-grid" data-category="${item.id}">${item.names[currentLanguage]}</button>
  `).join('');

  if (category.id === 'coffee') {
    grid.replaceChildren();
    return;
  }

  const products = category.id === 'snacks'
    ? snackItems
    : category.id === 'desserts'
      ? dessertItems
      : category.id === 'croissants'
        ? croissantItems
        : category.id === 'macarons'
          ? macaronItems
          : donutItems;
  grid.innerHTML = products.map(item => `
    <article class="menu-card menu-product">
      <div class="menu-image">
        <img src="assets/${item.image}.webp" alt="${item.name[currentLanguage]}" loading="lazy" decoding="async" width="640" height="640">
      </div>
      <div class="menu-product-content">
        <h3>${item.name[currentLanguage]}</h3>
        <p>${item.description[currentLanguage]}</p>
      </div>
    </article>
  `).join('');
}

function renderBranches() {
  const grid = $('#location-grid');
  if (!grid) return;

  const t = translations[currentLanguage];
  const days = dayLabels[currentLanguage];

  if (!grid.children.length) {
    grid.innerHTML = branches.map(branch => `
      <article class="location-card">
        <img class="location-photo" src="assets/${branch.image}.webp" alt="" width="800" height="800" loading="lazy" decoding="async">
        <div class="location-info">
          <span class="location-no"></span>
          <h3></h3>
          <address></address>
          <div class="location-hours"></div>
        </div>
      </article>
    `).join('');
  }

  branches.forEach((branch, index) => {
    const card = grid.children[index];
    if (!card) return;
    card.querySelector('.location-no').textContent = `GOLDEN COFFEE · ${branch.number}`;
    card.querySelector('h3').textContent = t.branchTitle.replace('{n}', branch.number);
    card.querySelector('address').textContent = branch.address;
    card.querySelector('.location-hours').innerHTML = `
      <strong>${t.hours}</strong>
      ${branch.hours.map(([day, time]) => `
        <span>${days[day]}</span><span>${time === 'closed' ? days.closed : time}</span>
      `).join('')}
    `;
  });
}

function renderMapBranches() {
  const container = $('#map-branches');
  if (!container) return;

  const t = translations[currentLanguage];

  if (!container.children.length) {
    container.innerHTML = branches.map(branch => `
      <a class="map-link" target="_blank" rel="noopener noreferrer">
        <span class="map-icon"><img src="assets/2gis.webp" alt="2ГИС" width="26" height="26" loading="lazy" decoding="async"></span>
        <span class="map-label"><small></small></span>
        <b aria-hidden="true">↗</b>
      </a>
    `).join('');
  }

  branches.forEach((branch, index) => {
    const link = container.children[index];
    if (!link) return;
    link.href = branch.mapUrl;
    link.querySelector('small').textContent = branch.address;
  });
}

/* ──────── Language ──────── */

function applyTranslations(language) {
  $$('[data-i18n]').forEach(element => {
    const value = translations[language][element.dataset.i18n];
    if (value) element.textContent = value;
  });

  $$('[data-i18n-html]').forEach(element => {
    const value = translations[language][element.dataset.i18nHtml];
    if (value) element.innerHTML = value;
  });
}

function setLanguage(language) {
  if (!translations[language]) return;
  currentLanguage = language;
  document.documentElement.lang = language;

  applyTranslations(language);

  $$('[data-lang]').forEach(button => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  const toggle = $('.menu-toggle');
  if (toggle) {
    const open = $('#main-nav')?.classList.contains('open');
    toggle.setAttribute('aria-label', menuLabels[language][open ? 'close' : 'open']);
  }

  renderMenu();
  renderBranches();
  renderMapBranches();
  applyReveals();
}

$$('[data-lang]').forEach(button => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

/* ──────── Menu category switching ──────── */

$('#menu-tabs')?.addEventListener('click', event => {
  const tab = event.target.closest('[data-category]');
  if (!tab || tab.dataset.category === activeCategory) return;
  activeCategory = tab.dataset.category;
  renderMenu();
  applyReveals();
});

/* ──────── Mobile navigation ──────── */

const nav = $('#main-nav');
const menuToggle = $('.menu-toggle');
const navClose = $('.nav-close');

function setMenuOpen(open) {
  if (!nav || !menuToggle) return;
  nav.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
  document.documentElement.classList.toggle('menu-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', menuLabels[currentLanguage][open ? 'close' : 'open']);
  menuToggle.textContent = open ? '✕' : '☰';
}

menuToggle?.addEventListener('click', () => setMenuOpen(!nav.classList.contains('open')));
navClose?.addEventListener('click', () => setMenuOpen(false));

$$('.main-nav a').forEach(link => link.addEventListener('click', event => {
  setMenuOpen(false);
  const targetId = link.getAttribute('href')?.slice(1);
  const target = targetId && document.getElementById(targetId);
  if (!target) return;
  event.preventDefault();
  (target.querySelector('.section-heading') || target).scrollIntoView({ behavior: 'smooth', block: 'start' });
  history.replaceState(null, '', `#${targetId}`);
}));

$$('.hero-buttons a[href="#menu"], .hero-buttons a[href="#locations"]').forEach(link => {
  link.addEventListener('click', event => {
    const target = document.getElementById(link.hash.slice(1));
    if (!target) return;
    event.preventDefault();
    (target.querySelector('.section-heading') || target).scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', link.hash);
  });
});

document.addEventListener('click', event => {
  if (!nav || !nav.classList.contains('open')) return;
  if (nav.contains(event.target) || menuToggle.contains(event.target)) return;
  setMenuOpen(false);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav?.classList.contains('open')) setMenuOpen(false);
});

const desktopQuery = window.matchMedia('(min-width: 769px)');
desktopQuery.addEventListener('change', event => {
  if (event.matches) setMenuOpen(false);
});

/* ──────── Modals (map & contacts) ──────── */

const mapModal = $('#map-modal');
const contactModal = $('#contact-modal');
let activeModal = null;
let lastFocused = null;

function openModal(modal) {
  if (!modal || modal === activeModal) return;
  if (activeModal) closeModal(activeModal);

  lastFocused = document.activeElement;
  activeModal = modal;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('map-modal-open');
  $('.map-close', modal)?.focus();
}

function closeModal(modal = activeModal) {
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');

  if (modal === activeModal) {
    activeModal = null;
    document.body.classList.remove('map-modal-open');
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
    lastFocused = null;
  }
}

$$('a[href="#map"]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    openModal(mapModal);
  });
});

$$('a[href="#contact"]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    openModal(contactModal);
  });
});

$$('[data-close]').forEach(button => {
  button.addEventListener('click', () => closeModal(button.closest('.map-modal')));
});

document.addEventListener('keydown', event => {
  if (!activeModal) return;

  if (event.key === 'Escape') {
    closeModal();
    return;
  }

  if (event.key !== 'Tab') return;

  const focusable = $$('a[href], button:not([disabled]):not([tabindex="-1"])', activeModal)
    .filter(element => element.getClientRects().length > 0);
  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

/* ──────── Scroll Reveals ──────── */

const revealSelector = '.section-heading, .menu-card, .location-card, .contact-section > *';
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let revealObserver = null;

if ('IntersectionObserver' in window && !reduceMotion) {
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
}

function applyReveals() {
  if (!revealObserver) return;
  $$(revealSelector).forEach((element, index) => {
    if (element.classList.contains('is-visible')) return;
    element.classList.add('reveal');
    if (element.matches('.menu-card, .location-card')) {
      element.style.transitionDelay = `${(index % 3) * 90}ms`;
    }
    revealObserver.observe(element);
  });
}

/* ──────── Init ──────── */

$('#year') && ($('#year').textContent = String(new Date().getFullYear()));
setLanguage(currentLanguage);
