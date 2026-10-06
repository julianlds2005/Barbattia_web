import type { Messages } from './es';

/** English copy. Must satisfy the exact shape of `es.ts` (enforced by `Messages`). */
const en: Messages = {
  meta: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    title: 'Barbattia — Your style, wherever you are | Verified barbers near you',
    description:
      'Barbattia connects clients with verified barbers. Post the service you need, name your price and get offers from nearby barbers. Academy, shop and an AI assistant in one app.',
  },

  common: {
    brand: 'Barbattia',
    slogan: 'Your style, wherever you are',
    skipToContent: 'Skip to content',
    downloadApp: 'Get the app',
    comingSoon: 'Coming soon',
    example: 'Example',
    verified: 'Verified',
    viewInApp: 'View in the app',
    close: 'Close',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    languageNames: { es: 'Español', en: 'English' },
    switchToLight: 'Switch to light theme',
    switchToDark: 'Switch to dark theme',
    backHome: 'Back to home',
    ratingLabel: 'Rating: {value} out of 5 mustaches',
    mustaches: 'mustaches',
    km: '{km} km',
    loading: 'Loading…',
    retry: 'Try again',
    logoAlt: 'Barbattia logo',
  },

  nav: {
    label: 'Main navigation',
    how: 'How it works',
    app: 'The app',
    services: 'Services',
    academy: 'Academy',
    shop: 'Shop',
    ai: 'AI',
    trust: 'Safety',
    faq: 'FAQ',
    contact: 'Contact',
  },

  hero: {
    audienceLabel: 'Choose your profile',
    client: {
      tab: "I'm a client",
      title: 'Find your next barber.',
      subtitle:
        'Tell us the cut you want, where and when. Name your price and get offers from verified barbers near you. You choose.',
      primary: 'Get the app',
      secondary: 'See how it works',
    },
    barber: {
      tab: "I'm a barber",
      title: 'Turn your talent into opportunities.',
      subtitle:
        'Get requests from nearby clients, send your offer, show your portfolio and manage your schedule and earnings from your phone.',
      primary: 'I want to work with Barbattia',
      secondary: 'See how it works',
    },
    highlights: ['Verified barbers', 'You name the price', 'Rated in mustaches'],
    visualLabel: 'Animated illustration of requests and offers in the app',
    clientCards: [
      { title: 'Your request', meta: 'Cut + beard · Laureles · Today 6:30 p.m.', value: '$35,000' },
      { title: 'New offer · Andrés M.', meta: '1.2 km · 4.9 mustaches', value: '$38,000' },
      { title: 'New offer · Camilo R.', meta: '0.8 km · 4.8 mustaches', value: '$35,000' },
    ],
    barberCards: [
      { title: 'New request nearby', meta: 'Classic cut · El Poblado · 7:00 p.m.', value: '$30,000' },
      { title: 'Offer accepted', meta: 'Juliana chose you · Chat open', value: '✓' },
      { title: "This week's earnings", meta: '14 services completed', value: '$486,000' },
    ],
  },

  how: {
    eyebrow: 'How it works',
    title: 'You set the terms. Barbers compete for your style.',
    subtitle: 'A simple flow inspired by on-demand mobility, built for barbering.',
    tabsLabel: 'Show the process for',
    tabs: { client: 'Clients', barber: 'Barbers' },
    step: 'Step {n}',
    clientSteps: [
      { title: 'What do you need?', text: 'Cut, beard, design, color… pick the service and add a reference photo.' },
      { title: 'Where?', text: "At the barber's shop or at your place. Your exact location is only shared once confirmed." },
      { title: 'When?', text: 'Right now or at the date and time you prefer.' },
      { title: 'Your price', text: 'Propose what you want to pay. You see a suggested range for your area.' },
      { title: 'Nearby offers', text: 'Verified barbers accept your price or send a counteroffer.' },
      { title: 'Chat', text: 'Pick an offer and sort out the details right in the app.' },
      { title: 'Service', text: 'Track your appointment status and get your service.' },
      { title: 'Rating', text: 'Rate from 1 to 5 mustaches. The barber rates you too.' },
    ],
    barberSteps: [
      { title: 'Profile', text: 'Create your professional profile with your specialties and work area.' },
      { title: 'Documents', text: 'Upload your ID and certificates to earn the verified badge.' },
      { title: 'Portfolio', text: 'Show off your best cuts with real photos of your work.' },
      { title: 'Availability', text: 'Set your schedule and switch to available whenever you want.' },
      { title: 'Get requests', text: 'Nearby requests come to you: accept the price or make an offer.' },
      { title: 'Earn', text: 'Complete services, collect mustaches and track your earnings in real time.' },
    ],
  },

  showcase: {
    eyebrow: 'The app',
    title: 'Your whole barbering world in one place',
    subtitle:
      'Explore the experience: tap the screen, swipe or use the controls. The demo pauses while you hover or focus the phone.',
    controlsLabel: 'Demo screens',
    region: 'Interactive app demo',
    prev: 'Previous screen',
    next: 'Next screen',
    pause: 'Pause demo',
    play: 'Resume demo',
    status: 'Screen {current} of {total}: {name}',
    tapHint: 'Tap to continue',
    screens: {
      search: {
        tab: 'Search',
        description: 'Pick the service, place and time, and name your price.',
        title: 'What do you need?',
        chips: ['Cut', 'Beard', 'Cut + beard', 'Design'],
        whereLabel: 'Where?',
        where: 'Laureles, Medellín',
        whenLabel: 'When?',
        when: 'Today · 6:30 p.m.',
        priceLabel: 'Your price',
        priceHint: 'Suggested in your area: $30,000 – $42,000',
        cta: 'Find barbers',
      },
      map: {
        tab: 'Map',
        description: 'Nearby verified barbers see your request and send you offers.',
        title: 'Barbers near you',
        found: '3 new offers',
        accept: 'Choose',
        offers: [
          { name: 'Andrés Mejía', km: '1.2', rating: 4.9, price: 38000 },
          { name: 'Camilo Ríos', km: '0.8', rating: 4.8, price: 35000 },
          { name: 'Sara Duque', km: '2.1', rating: 5, price: 40000 },
        ],
      },
      profile: {
        tab: 'Profile',
        description: 'Check the profile, portfolio and rating before you choose.',
        name: 'Andrés Mejía',
        role: 'Professional barber · Laureles',
        stats: [
          { value: '4.9', label: 'mustaches' },
          { value: '320', label: 'services' },
          { value: '6 yrs', label: 'experience' },
        ],
        portfolio: 'Portfolio',
        cta: 'Choose offer · $38,000',
      },
      chat: {
        tab: 'Chat',
        description: 'Sort out the details with your barber in the in-app chat.',
        status: 'Online',
        messages: [
          { from: 'barber', text: 'Hi! I saw your reference. Low fade with a sharp beard line?' },
          { from: 'me', text: 'Exactly. Can you make it by 6:30?' },
          { from: 'barber', text: "Confirmed. I'm on my way with all my gear. ✂️" },
        ],
        placeholder: 'Type a message…',
      },
      done: {
        tab: 'Done',
        description: 'Service completed: rate in mustaches and you are done.',
        title: 'Service completed!',
        subtitle: 'How was it with Andrés?',
        thanks: 'Your rating helps the whole community.',
        cta: 'Send rating',
      },
    },
  },

  benefits: {
    eyebrow: 'Benefits',
    title: 'Clients win. Barbers win.',
    clients: {
      title: 'For clients',
      items: [
        { title: 'You set the price', text: 'Propose what you want to pay and compare real offers.' },
        { title: 'Verified professionals', text: 'ID and documents reviewed before they can get requests.' },
        { title: 'Wherever you are', text: 'At the shop or at home, today or whenever you like.' },
        { title: 'Honest ratings', text: 'Mustaches and reviews from clients who actually got the service.' },
      ],
    },
    barbers: {
      title: 'For barbers',
      items: [
        { title: 'More clients nearby', text: 'Get requests from your area without paying for ads.' },
        { title: 'Your personal brand', text: 'Professional profile, portfolio and verified badge.' },
        { title: 'Schedule and earnings', text: 'Organize appointments and track income from your phone.' },
        { title: 'Grow with the Academy', text: 'Learn new techniques or sell your own courses.' },
      ],
    },
  },

  services: {
    eyebrow: 'Services',
    title: 'Whatever you need, from whoever does it best.',
    subtitle: 'Post any of these services and get offers from specialists.',
    items: {
      corte: { name: 'Haircut', text: 'Classic, fade, scissors or clippers.' },
      barba: { name: 'Beard', text: 'Line-up, trim and hot towel.' },
      combo: { name: 'Cut + beard', text: 'The full combo in one appointment.' },
      diseno: { name: 'Design', text: 'Lines, patterns and freestyle.' },
      color: { name: 'Color', text: 'Dye, bleaching and highlights.' },
      tratamientos: { name: 'Treatments', text: 'Hydration, keratin and hair care.' },
      infantil: { name: 'Kids', text: 'Cuts for the little ones, with patience.' },
      domicilio: { name: 'At home', text: 'The barber comes to your home or office.' },
      otros: { name: 'Other', text: 'Brows, events, weddings and whatever you imagine.' },
    },
  },

  barbers: {
    eyebrow: 'Featured barbers',
    title: 'Real talent, profiles you can trust.',
    subtitle: 'This is what a professional profile looks like on Barbattia.',
    disclaimer: 'Sample profiles for illustration only. They do not represent real people.',
    reviews: '{n} reviews',
    available: 'Available today',
    cta: 'See profiles in the app',
    specialties: {
      fade: 'Fades',
      beard: 'Beard',
      classic: 'Classic',
      design: 'Designs',
      color: 'Color',
      kids: 'Kids',
      home: 'At home',
      treatments: 'Treatments',
    },
  },

  academy: {
    eyebrow: 'Barber Academy',
    title: 'Learn from the best. Teach what you master.',
    subtitle: 'Courses made by barbers for barbers: from your first cut to running your own shop.',
    categoriesLabel: 'Categories',
    categories: ['Fundamentals', 'Fades', 'Beard', 'Design & freestyle', 'Color theory', 'Business & personal brand'],
    coursesLabel: 'Sample courses',
    teacher: 'Teacher',
    lessons: '{n} lessons',
    certificate: 'Certificate',
    courses: [
      { title: 'The perfect fade, zero to pro', teacher: 'Andrés Mejía', level: 'Intermediate', duration: '6 h' },
      { title: 'Signature beard & hot towel', teacher: 'Sara Duque', level: 'Beginner', duration: '4 h' },
      { title: 'Color theory for barbers', teacher: 'Mateo Ruiz', level: 'Advanced', duration: '8 h' },
      { title: 'Grow your barbershop', teacher: 'Laura Gómez', level: 'All levels', duration: '3 h' },
    ],
    benefitsTitle: 'Why learn on Barbattia',
    benefits: [
      'Video lessons at your own pace, from your phone',
      'Teachers with verified, rated profiles',
      'Certificates displayed on your professional profile',
      'Sell your own courses and earn extra income',
    ],
    certTitle: 'Certifications that count',
    certText: 'When you finish a course you get a digital certificate shown on your profile for clients to see.',
    cta: 'I want to learn',
    ctaTeach: 'I want to teach',
    note: 'Sample courses, teachers and content.',
  },

  shop: {
    eyebrow: 'Shop',
    title: 'Gear up like a pro.',
    subtitle: 'Clippers, scissors, razors, products and furniture selected for barbers and demanding clients.',
    filterLabel: 'Filter products by category',
    all: 'All',
    categories: {
      maquinas: 'Clippers',
      tijeras: 'Scissors',
      navajas: 'Razors',
      capilares: 'Hair products',
      ceras: 'Waxes',
      shampoos: 'Shampoos',
      accesorios: 'Accessories',
      mobiliario: 'Furniture',
      equipamiento: 'Pro equipment',
    },
    note: 'Sample catalog. Purchases are made in the app.',
    empty: 'Products for this category are coming soon.',
    error: "We couldn't load the catalog.",
    featured: 'Featured',
  },

  ai: {
    eyebrow: 'Barber Assistant · AI',
    title: 'An assistant that knows barbering.',
    subtitle: 'The Barber Assistant built into the app guides you step by step, whether you are a client or a barber.',
    assistantName: 'Barber Assistant',
    tabsLabel: 'Show sample conversation',
    tabs: { barber: 'Barber', client: 'Client' },
    typing: 'The assistant is typing',
    replay: 'Replay conversation',
    you: 'You',
    inputPlaceholder: 'Ask the Barber Assistant…',
    conversations: {
      barber: [
        { from: 'user', text: 'I want to start working as a barber.' },
        { from: 'ai', text: "I'll help you complete your profile, verify your documents and prepare your portfolio." },
        { from: 'ai', text: "Let's start: which area do you work in and what are your specialties?" },
      ],
      client: [
        { from: 'user', text: "I'm looking for a classic cut near Laureles." },
        { from: 'ai', text: 'Great. Want me to find available professionals near you for today?' },
        { from: 'user', text: 'Yes, for this afternoon.' },
        { from: 'ai', text: 'Done, I drafted your request: classic cut, Laureles, this afternoon. Just add your price.' },
      ],
    },
    features: [
      { title: 'Guided onboarding', text: 'Profile, documents and portfolio without the hassle.' },
      { title: 'Natural-language requests', text: 'Describe what you want and the assistant builds the request.' },
      { title: 'Style and care tips', text: 'Recommendations for your hair and beard type.' },
    ],
    disclaimer: 'Illustrative conversation. Real answers may vary.',
  },

  trust: {
    eyebrow: 'Safety & trust',
    title: 'Trust in every cut.',
    subtitle: 'We designed Barbattia so clients and barbers feel safe before, during and after the service.',
    verification: {
      title: 'Barber verification',
      text: 'Every professional uploads their documents and our team reviews them. Barbers can see the status of each document.',
      sample: 'Verification status (example)',
      docs: [
        { name: 'ID document', status: 'verified' },
        { name: 'Barbering certificate', status: 'verified' },
        { name: 'Profile photo', status: 'review' },
        { name: 'Additional certificate', status: 'pending' },
      ],
      statuses: { verified: 'Verified', review: 'In review', pending: 'Pending', rejected: 'Rejected' },
    },
    items: [
      { title: 'Approximate location', text: 'Before confirming, only an approximate area is shown. The exact address is shared once the service is accepted.' },
      { title: 'Two-way ratings', text: 'Clients and barbers rate each other in mustaches.' },
      { title: 'Report and block', text: 'Report inappropriate behavior and block users from the chat or profile.' },
      { title: 'Support', text: "A human team to help when something doesn't go as expected." },
      { title: 'Dispute handling', text: 'If there is a disagreement, we review the case with information from both sides.' },
    ],
  },

  download: {
    eyebrow: 'Get the app',
    title: 'Your next cut is one scan away.',
    subtitle: 'Scan the code with your phone camera or download Barbattia from your app store.',
    qrLabel: 'QR code to download Barbattia',
    scan: 'Scan with your camera',
    appStoreTop: 'Download on the',
    googlePlayTop: 'Get it on',
    comingSoonTop: 'Coming soon to',
    comingSoonNote: 'Stores will open at launch. Scan the QR or check back soon.',
    points: ['Free for clients', 'iOS and Android', 'Spanish and English'],
  },

  downloadPage: {
    title: 'Download Barbattia',
    subtitle: 'Choose your app store.',
    detectedIos: 'We detected an iPhone or iPad.',
    detectedAndroid: 'We detected an Android device.',
    detectedOther: 'Open this page on your phone or scan the QR code.',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Your questions, answered.',
    groups: [
      {
        title: 'Clients',
        items: [
          { q: 'How do I request a service?', a: 'Open the app, pick the service, say where and when you want it and name your price. Nearby barbers will send you offers and you choose the one you like best.' },
          { q: 'Can I get a barber at home?', a: "Yes. When you create your request you choose whether you go to the barber's shop or they come to your home or office." },
          { q: 'What are mustaches?', a: 'Our way of rating: 1 to 5 mustaches instead of stars. Clients and barbers rate each other after every service.' },
        ],
      },
      {
        title: 'Barbers',
        items: [
          { q: 'How do I start working with Barbattia?', a: 'Download the app, create your professional profile, upload your documents and portfolio. Once your verification is approved you will start getting nearby requests.' },
          { q: 'Can I sell courses in the Academy?', a: 'Yes. Verified barbers can create and publish courses in Barber Academy.' },
        ],
      },
      {
        title: 'Payments',
        items: [
          { q: 'How is the service paid?', a: 'You pay the barber directly when the service ends, in cash or as you agree. Barbattia does not process online payments: the app connects, organizes and protects the service.' },
        ],
      },
      {
        title: 'Verification & safety',
        items: [
          { q: 'What does it mean that a barber is verified?', a: 'Their ID and certificates were reviewed by our team. You can see the verified badge on their profile.' },
          { q: 'Who can see my location?', a: 'Before a service is confirmed, barbers only see an approximate area. The exact address is shared only with the barber you chose.' },
        ],
      },
      {
        title: 'AI assistant',
        items: [
          { q: 'What can the Barber Assistant do?', a: 'It guides you through completing your profile, building requests by describing what you want and answering style and care questions. Its answers are for guidance only.' },
        ],
      },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: "Let's talk.",
    subtitle: 'Are you a barber, a brand, an investor or have an idea? Write to us.',
    name: 'Name',
    email: 'Email',
    role: "I'm interested in",
    roles: { client: 'Using the app as a client', barber: 'Working as a barber', academy: 'Teaching in the Academy', shop: 'Selling in the shop', other: 'Something else' },
    message: 'Message',
    submit: 'Send message',
    sending: 'Sending…',
    errors: {
      required: 'This field is required.',
      email: 'Enter a valid email.',
      short: 'Tell us a bit more (at least 10 characters).',
    },
    mailtoOpened: 'We opened your email app with the message ready. Send it from there so it reaches us.',
    success: "Thanks! We got your message and we'll get back to you soon.",
    failure: "We couldn't send the message. Try again or email us.",
    mailSubject: 'Website contact — {role}',
    channelsTitle: 'Other channels',
    emailUs: 'Email us',
    whatsapp: 'WhatsApp',
    whatsappText: 'Hi Barbattia, I would like more information.',
    unavailable: 'This contact channel is not configured yet.',
  },

  footer: {
    tagline: 'The platform that connects clients with verified barbers.',
    explore: 'Explore',
    legal: 'Legal',
    terms: 'Terms and conditions',
    privacy: 'Privacy policy',
    follow: 'Follow us',
    rights: '© {year} Barbattia. All rights reserved.',
  },

  legal: {
    draft: 'Draft',
    draftNotice:
      'This document is a sample DRAFT and has no legal validity. It will be replaced by the reviewed version before launch.',
    terms: {
      title: 'Terms and conditions',
      sections: [
        { h: '1. Purpose', p: 'Barbattia is a platform that connects people looking for barbering services with independent barbers. [Placeholder text]' },
        { h: '2. User accounts', p: 'Users must provide accurate information and keep their account secure. [Placeholder text]' },
        { h: '3. Services and prices', p: 'Prices are agreed between client and barber through the offer system. [Placeholder text]' },
        { h: '4. Ratings and conduct', p: 'Ratings must reflect real experiences. We may suspend accounts that break the rules. [Placeholder text]' },
      ],
    },
    privacy: {
      title: 'Privacy policy',
      sections: [
        { h: '1. Data we collect', p: 'Account data, approximate location and barber verification documents. [Placeholder text]' },
        { h: '2. Use of location', p: 'The exact location is only shared with the chosen barber once the service is confirmed. [Placeholder text]' },
        { h: '3. Your rights', p: 'You can request access, correction or deletion of your data. [Placeholder text]' },
      ],
    },
  },

  notFound: {
    title: 'Page not found',
    text: "The page you are looking for doesn't exist or was moved.",
  },
};

export default en;
