/**
 * Textos en espanol (idioma por defecto, es-CO).
 *
 * Este archivo es la FUENTE DE VERDAD de la estructura de traducciones: el tipo
 * `Messages` se deriva de aqui y `en.ts` debe cumplirlo, asi que cualquier
 * clave nueva que agregues aqui hara fallar el typecheck hasta traducirla.
 *
 * Importante: este modulo debe ser puro (sin import.meta.env ni DOM), porque
 * tambien lo importa vite.config.ts para generar el JSON-LD de las FAQ.
 */
const es = {
  meta: {
    htmlLang: 'es-CO',
    ogLocale: 'es_CO',
    title: 'Barbattia — Tu estilo, donde estés | Barberos verificados cerca de ti',
    description:
      'Barbattia conecta clientes con barberos verificados. Publica el servicio que necesitas, propone tu precio y recibe ofertas de barberos cercanos. Academia, tienda y asistente con IA en una sola app.',
  },

  common: {
    brand: 'Barbattia',
    slogan: 'Tu estilo, donde estés',
    skipToContent: 'Saltar al contenido',
    downloadApp: 'Descargar app',
    comingSoon: 'Próximamente',
    example: 'Ejemplo',
    verified: 'Verificado',
    viewInApp: 'Ver en la app',
    close: 'Cerrar',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    language: 'Idioma',
    languageNames: { es: 'Español', en: 'English' },
    switchToLight: 'Cambiar a tema claro',
    switchToDark: 'Cambiar a tema oscuro',
    backHome: 'Volver al inicio',
    ratingLabel: 'Calificación: {value} de 5 mostachos',
    mustaches: 'mostachos',
    km: '{km} km',
    loading: 'Cargando…',
    retry: 'Reintentar',
    logoAlt: 'Logo de Barbattia',
  },

  nav: {
    label: 'Navegación principal',
    how: 'Cómo funciona',
    app: 'La app',
    services: 'Servicios',
    academy: 'Academia',
    shop: 'Tienda',
    ai: 'IA',
    trust: 'Seguridad',
    faq: 'Preguntas',
    contact: 'Contacto',
  },

  hero: {
    audienceLabel: 'Elige tu perfil',
    client: {
      tab: 'Soy cliente',
      title: 'Encuentra tu próximo barbero.',
      subtitle:
        'Dinos qué corte quieres, dónde y cuándo. Propón tu precio y recibe ofertas de barberos verificados cerca de ti. Tú eliges.',
      primary: 'Descargar app',
      secondary: 'Ver cómo funciona',
    },
    barber: {
      tab: 'Soy barbero',
      title: 'Convierte tu talento en oportunidades.',
      subtitle:
        'Recibe solicitudes de clientes cercanos, envía tu oferta, muestra tu portafolio y administra tu agenda y tus ganancias desde el celular.',
      primary: 'Quiero trabajar con Barbattia',
      secondary: 'Ver cómo funciona',
    },
    highlights: ['Barberos verificados', 'Tú propones el precio', 'Calificación en mostachos'],
    visualLabel: 'Ilustración animada de solicitudes y ofertas en la app',
    clientCards: [
      { title: 'Tu solicitud', meta: 'Corte + barba · Laureles · Hoy 6:30 p. m.', value: '$35.000' },
      { title: 'Nueva oferta · Andrés M.', meta: '1,2 km · 4,9 mostachos', value: '$38.000' },
      { title: 'Nueva oferta · Camilo R.', meta: '0,8 km · 4,8 mostachos', value: '$35.000' },
    ],
    barberCards: [
      { title: 'Nueva solicitud cerca', meta: 'Corte clásico · El Poblado · 7:00 p. m.', value: '$30.000' },
      { title: 'Oferta aceptada', meta: 'Juliana te eligió · Chat abierto', value: '✓' },
      { title: 'Ganancias de la semana', meta: '14 servicios completados', value: '$486.000' },
    ],
  },

  how: {
    eyebrow: 'Cómo funciona',
    title: 'Tú pones las condiciones. Los barberos compiten por tu estilo.',
    subtitle:
      'Un flujo simple, inspirado en la movilidad bajo demanda, pensado para la barbería.',
    tabsLabel: 'Ver el proceso para',
    tabs: { client: 'Clientes', barber: 'Barberos' },
    step: 'Paso {n}',
    clientSteps: [
      { title: '¿Qué necesitas?', text: 'Corte, barba, diseño, color… elige el servicio y agrega una foto de referencia.' },
      { title: '¿Dónde?', text: 'En la barbería del profesional o a domicilio. Tu ubicación exacta se comparte solo al confirmar.' },
      { title: '¿Cuándo?', text: 'Ahora mismo o en la fecha y hora que prefieras.' },
      { title: 'Tu precio', text: 'Propón cuánto quieres pagar. Ves un rango sugerido para tu zona.' },
      { title: 'Ofertas cercanas', text: 'Barberos verificados aceptan tu precio o envían una contraoferta.' },
      { title: 'Chat', text: 'Elige una oferta y coordina los detalles directamente en la app.' },
      { title: 'Servicio', text: 'Sigue el estado de tu cita y recibe tu servicio.' },
      { title: 'Calificación', text: 'Califica de 1 a 5 mostachos. El barbero también te califica a ti.' },
    ],
    barberSteps: [
      { title: 'Perfil', text: 'Crea tu perfil profesional con tus especialidades y zona de trabajo.' },
      { title: 'Documentos', text: 'Sube tu identificación y certificados para obtener la insignia de verificado.' },
      { title: 'Portafolio', text: 'Muestra tus mejores cortes con fotos reales de tu trabajo.' },
      { title: 'Disponibilidad', text: 'Configura tu agenda y activa el modo disponible cuando quieras.' },
      { title: 'Recibe solicitudes', text: 'Te llegan solicitudes cercanas: acepta el precio o haz tu oferta.' },
      { title: 'Gana', text: 'Completa servicios, suma mostachos y sigue tus ganancias en tiempo real.' },
    ],
  },

  showcase: {
    eyebrow: 'La app',
    title: 'Todo tu mundo de barbería en un solo lugar',
    subtitle:
      'Explora la experiencia: toca la pantalla, desliza o usa los controles. La demostración se pausa cuando pasas el cursor o enfocas el teléfono.',
    controlsLabel: 'Pantallas de la demostración',
    region: 'Demostración interactiva de la app',
    prev: 'Pantalla anterior',
    next: 'Pantalla siguiente',
    pause: 'Pausar demostración',
    play: 'Reanudar demostración',
    status: 'Pantalla {current} de {total}: {name}',
    tapHint: 'Toca para continuar',
    screens: {
      search: {
        tab: 'Buscar',
        description: 'Elige el servicio, el lugar, la hora y propón tu precio.',
        title: '¿Qué necesitas?',
        chips: ['Corte', 'Barba', 'Corte + barba', 'Diseño'],
        whereLabel: '¿Dónde?',
        where: 'Laureles, Medellín',
        whenLabel: '¿Cuándo?',
        when: 'Hoy · 6:30 p. m.',
        priceLabel: 'Tu precio',
        priceHint: 'Sugerido en tu zona: $30.000 – $42.000',
        cta: 'Buscar barberos',
      },
      map: {
        tab: 'Mapa',
        description: 'Barberos verificados cercanos ven tu solicitud y te envían ofertas.',
        title: 'Barberos cerca de ti',
        found: '3 ofertas nuevas',
        accept: 'Elegir',
        offers: [
          { name: 'Andrés Mejía', km: '1,2', rating: 4.9, price: 38000 },
          { name: 'Camilo Ríos', km: '0,8', rating: 4.8, price: 35000 },
          { name: 'Sara Duque', km: '2,1', rating: 5, price: 40000 },
        ],
      },
      profile: {
        tab: 'Perfil',
        description: 'Revisa el perfil, el portafolio y la calificación antes de elegir.',
        name: 'Andrés Mejía',
        role: 'Barbero profesional · Laureles',
        stats: [
          { value: '4,9', label: 'mostachos' },
          { value: '320', label: 'servicios' },
          { value: '6 años', label: 'experiencia' },
        ],
        portfolio: 'Portafolio',
        cta: 'Elegir oferta · $38.000',
      },
      chat: {
        tab: 'Chat',
        description: 'Coordina los detalles con tu barbero en el chat de la app.',
        status: 'En línea',
        messages: [
          { from: 'barber', text: '¡Hola! Ya vi tu referencia. ¿Degradado bajo con la barba perfilada?' },
          { from: 'me', text: 'Exacto. ¿Llegas a las 6:30?' },
          { from: 'barber', text: 'Confirmado. Voy en camino con todo el equipo. ✂️' },
        ],
        placeholder: 'Escribe un mensaje…',
      },
      done: {
        tab: 'Listo',
        description: 'Servicio completado: califica en mostachos y listo.',
        title: '¡Servicio completado!',
        subtitle: '¿Cómo te fue con Andrés?',
        thanks: 'Tu calificación ayuda a toda la comunidad.',
        cta: 'Enviar calificación',
      },
    },
  },

  benefits: {
    eyebrow: 'Beneficios',
    title: 'Gana el cliente. Gana el barbero.',
    clients: {
      title: 'Para clientes',
      items: [
        { title: 'Tú decides el precio', text: 'Propón lo que quieres pagar y compara ofertas reales.' },
        { title: 'Profesionales verificados', text: 'Identidad y documentos revisados antes de recibir solicitudes.' },
        { title: 'Donde estés', text: 'En la barbería o a domicilio, hoy o cuando quieras.' },
        { title: 'Calificaciones honestas', text: 'Mostachos y reseñas de clientes que sí recibieron el servicio.' },
      ],
    },
    barbers: {
      title: 'Para barberos',
      items: [
        { title: 'Más clientes cerca', text: 'Recibe solicitudes de tu zona sin pagar publicidad.' },
        { title: 'Tu marca personal', text: 'Perfil profesional, portafolio e insignia de verificado.' },
        { title: 'Agenda y ganancias', text: 'Organiza tus citas y sigue tus ingresos desde el celular.' },
        { title: 'Crece con la Academia', text: 'Aprende nuevas técnicas o vende tus propios cursos.' },
      ],
    },
  },

  services: {
    eyebrow: 'Servicios',
    title: 'Lo que necesites, con quien mejor lo hace.',
    subtitle: 'Publica cualquiera de estos servicios y recibe ofertas de especialistas.',
    items: {
      corte: { name: 'Corte', text: 'Clásico, degradado, tijera o máquina.' },
      barba: { name: 'Barba', text: 'Perfilado, rebajado y toalla caliente.' },
      combo: { name: 'Corte + barba', text: 'El combo completo en una sola cita.' },
      diseno: { name: 'Diseño', text: 'Líneas, figuras y freestyle.' },
      color: { name: 'Color', text: 'Tintes, decoloración y mechas.' },
      tratamientos: { name: 'Tratamientos', text: 'Hidratación, keratina y cuidado capilar.' },
      infantil: { name: 'Infantil', text: 'Cortes para los más pequeños, con paciencia.' },
      domicilio: { name: 'A domicilio', text: 'El barbero llega a tu casa u oficina.' },
      otros: { name: 'Otros', text: 'Cejas, eventos, novios y lo que imagines.' },
    },
  },

  barbers: {
    eyebrow: 'Barberos destacados',
    title: 'Talento real, perfiles que inspiran confianza.',
    subtitle: 'Así se ve un perfil profesional en Barbattia.',
    disclaimer: 'Perfiles de ejemplo con fines ilustrativos. No representan a personas reales.',
    reviews: '{n} reseñas',
    available: 'Disponible hoy',
    cta: 'Ver perfiles en la app',
    specialties: {
      fade: 'Degradados',
      beard: 'Barba',
      classic: 'Clásico',
      design: 'Diseños',
      color: 'Color',
      kids: 'Infantil',
      home: 'A domicilio',
      treatments: 'Tratamientos',
    },
  },

  academy: {
    eyebrow: 'Barber Academy',
    title: 'Aprende de los mejores. Enseña lo que dominas.',
    subtitle:
      'Cursos creados por barberos para barberos: desde tu primer corte hasta la gestión de tu propia barbería.',
    categoriesLabel: 'Categorías',
    categories: ['Fundamentos', 'Degradados', 'Barba', 'Diseño y freestyle', 'Colorimetría', 'Negocio y marca personal'],
    coursesLabel: 'Cursos de ejemplo',
    teacher: 'Docente',
    lessons: '{n} lecciones',
    certificate: 'Certificado',
    courses: [
      { title: 'Degradado perfecto de cero a pro', teacher: 'Andrés Mejía', level: 'Intermedio', duration: '6 h' },
      { title: 'Barba de autor y toalla caliente', teacher: 'Sara Duque', level: 'Básico', duration: '4 h' },
      { title: 'Colorimetría para barberos', teacher: 'Mateo Ruiz', level: 'Avanzado', duration: '8 h' },
      { title: 'Haz crecer tu barbería', teacher: 'Laura Gómez', level: 'Todos', duration: '3 h' },
    ],
    benefitsTitle: 'Por qué aprender en Barbattia',
    benefits: [
      'Clases en video a tu ritmo, desde el celular',
      'Docentes con perfil verificado y calificado',
      'Certificados que se muestran en tu perfil profesional',
      'Vende tus propios cursos y genera ingresos extra',
    ],
    certTitle: 'Certificaciones que suman',
    certText: 'Al completar un curso obtienes un certificado digital visible en tu perfil para que tus clientes lo vean.',
    cta: 'Quiero aprender',
    ctaTeach: 'Quiero enseñar',
    note: 'Cursos, docentes y contenidos de ejemplo.',
  },

  shop: {
    eyebrow: 'Tienda',
    title: 'Equípate como un profesional.',
    subtitle: 'Máquinas, tijeras, navajas, productos y mobiliario seleccionados para barberos y clientes exigentes.',
    filterLabel: 'Filtrar productos por categoría',
    all: 'Todo',
    categories: {
      maquinas: 'Máquinas',
      tijeras: 'Tijeras',
      navajas: 'Navajas',
      capilares: 'Productos capilares',
      ceras: 'Ceras',
      shampoos: 'Shampoos',
      accesorios: 'Accesorios',
      mobiliario: 'Mobiliario',
      equipamiento: 'Equipamiento profesional',
    },
    note: 'Catálogo de muestra. Las compras se realizan desde la app.',
    empty: 'Pronto tendremos productos en esta categoría.',
    error: 'No pudimos cargar el catálogo.',
    featured: 'Destacado',
  },

  ai: {
    eyebrow: 'Asistente Barber · IA',
    title: 'Un asistente que entiende de barbería.',
    subtitle:
      'El Asistente Barber integrado en la app te guía paso a paso, seas cliente o barbero.',
    assistantName: 'Asistente Barber',
    tabsLabel: 'Ver conversación de ejemplo',
    tabs: { barber: 'Barbero', client: 'Cliente' },
    typing: 'El asistente está escribiendo',
    replay: 'Repetir conversación',
    you: 'Tú',
    inputPlaceholder: 'Pregúntale al Asistente Barber…',
    conversations: {
      barber: [
        { from: 'user', text: 'Quiero empezar a trabajar como barbero.' },
        { from: 'ai', text: 'Te voy a ayudar a completar tu perfil, verificar tus documentos y preparar tu portafolio.' },
        { from: 'ai', text: 'Empecemos: ¿en qué zona trabajas y cuáles son tus especialidades?' },
      ],
      client: [
        { from: 'user', text: 'Busco un corte clásico cerca de Laureles.' },
        { from: 'ai', text: 'Perfecto. ¿Quieres que busque profesionales disponibles cerca de ti para hoy?' },
        { from: 'user', text: 'Sí, para esta tarde.' },
        { from: 'ai', text: 'Listo, preparé tu solicitud: corte clásico, Laureles, hoy en la tarde. Solo falta tu precio.' },
      ],
    },
    features: [
      { title: 'Onboarding guiado', text: 'Perfil, documentos y portafolio sin enredos.' },
      { title: 'Solicitudes en lenguaje natural', text: 'Describe lo que quieres y el asistente arma la solicitud.' },
      { title: 'Consejos de estilo y cuidado', text: 'Recomendaciones según tu tipo de cabello y barba.' },
    ],
    disclaimer: 'Conversación ilustrativa. Las respuestas reales pueden variar.',
  },

  trust: {
    eyebrow: 'Seguridad y confianza',
    title: 'Confianza en cada corte.',
    subtitle: 'Diseñamos Barbattia para que clientes y barberos se sientan seguros antes, durante y después del servicio.',
    verification: {
      title: 'Verificación de barberos',
      text: 'Cada profesional sube sus documentos y nuestro equipo los revisa. El estado de cada documento es visible para el barbero.',
      sample: 'Estado de verificación (ejemplo)',
      docs: [
        { name: 'Documento de identidad', status: 'verified' },
        { name: 'Certificado de barbería', status: 'verified' },
        { name: 'Foto de perfil', status: 'review' },
        { name: 'Certificado adicional', status: 'pending' },
      ],
      statuses: { verified: 'Verificado', review: 'En revisión', pending: 'Pendiente', rejected: 'Rechazado' },
    },
    items: [
      { title: 'Ubicación aproximada', text: 'Antes de confirmar solo se muestra una zona aproximada. La dirección exacta se comparte al aceptar el servicio.' },
      { title: 'Calificaciones en ambos sentidos', text: 'Clientes y barberos se califican mutuamente en mostachos.' },
      { title: 'Reportar y bloquear', text: 'Reporta comportamientos inadecuados y bloquea usuarios desde el chat o el perfil.' },
      { title: 'Soporte', text: 'Un equipo humano para ayudarte cuando algo no sale como esperabas.' },
      { title: 'Manejo de disputas', text: 'Si hay un desacuerdo, revisamos el caso con la información de ambas partes.' },
    ],
  },

  download: {
    eyebrow: 'Descarga la aplicación',
    title: 'Tu próximo corte está a un escaneo.',
    subtitle: 'Escanea el código con la cámara de tu celular o descarga Barbattia desde tu tienda de aplicaciones.',
    qrLabel: 'Código QR para descargar Barbattia',
    scan: 'Escanea con tu cámara',
    appStoreTop: 'Descárgala en',
    googlePlayTop: 'Disponible en',
    comingSoonTop: 'Muy pronto en',
    comingSoonNote: 'Las tiendas se habilitarán en el lanzamiento. Escanea el QR o vuelve pronto.',
    points: ['Gratis para clientes', 'iOS y Android', 'Español e inglés'],
  },

  downloadPage: {
    title: 'Descarga Barbattia',
    subtitle: 'Elige tu tienda de aplicaciones.',
    detectedIos: 'Detectamos un dispositivo iPhone o iPad.',
    detectedAndroid: 'Detectamos un dispositivo Android.',
    detectedOther: 'Abre esta página desde tu celular o escanea el QR.',
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Resolvemos tus dudas.',
    groups: [
      {
        title: 'Clientes',
        items: [
          { q: '¿Cómo pido un servicio?', a: 'Abre la app, elige el servicio, indica dónde y cuándo lo quieres y propón tu precio. Los barberos cercanos te enviarán ofertas y tú eliges la que más te guste.' },
          { q: '¿Puedo pedir un barbero a domicilio?', a: 'Sí. Al crear tu solicitud eliges si vas a la barbería del profesional o si prefieres que llegue a tu casa u oficina.' },
          { q: '¿Qué son los mostachos?', a: 'Es nuestra forma de calificar: de 1 a 5 mostachos en lugar de estrellas. Clientes y barberos se califican después de cada servicio.' },
        ],
      },
      {
        title: 'Barberos',
        items: [
          { q: '¿Cómo empiezo a trabajar con Barbattia?', a: 'Descarga la app, crea tu perfil profesional, sube tus documentos y tu portafolio. Cuando tu verificación esté aprobada empezarás a recibir solicitudes cercanas.' },
          { q: '¿Puedo vender cursos en la Academia?', a: 'Sí. Los barberos verificados pueden crear y publicar cursos en Barber Academy.' },
        ],
      },
      {
        title: 'Pagos',
        items: [
          { q: '¿Cómo se paga el servicio?', a: 'Le pagas directamente al barbero al terminar el servicio, en efectivo o como lo acuerden. Barbattia no procesa pagos en línea: la app conecta, organiza y protege el servicio.' },
        ],
      },
      {
        title: 'Verificación y seguridad',
        items: [
          { q: '¿Qué significa que un barbero esté verificado?', a: 'Que su documento de identidad y sus certificados fueron revisados por nuestro equipo. Puedes ver la insignia de verificado en su perfil.' },
          { q: '¿Quién ve mi ubicación?', a: 'Antes de confirmar un servicio los barberos solo ven una zona aproximada. La dirección exacta se comparte únicamente con el barbero que elegiste.' },
        ],
      },
      {
        title: 'Asistente con IA',
        items: [
          { q: '¿Qué puede hacer el Asistente Barber?', a: 'Te guía para completar tu perfil, armar solicitudes describiendo lo que quieres y resolver dudas de estilo y cuidado. Sus respuestas son orientativas.' },
        ],
      },
    ],
  },

  contact: {
    eyebrow: 'Contacto',
    title: 'Hablemos.',
    subtitle: '¿Eres barbero, marca, inversionista o tienes una idea? Escríbenos.',
    name: 'Nombre',
    email: 'Correo electrónico',
    role: 'Me interesa',
    roles: { client: 'Usar la app como cliente', barber: 'Trabajar como barbero', academy: 'Enseñar en la Academia', shop: 'Vender en la tienda', other: 'Otro tema' },
    message: 'Mensaje',
    submit: 'Enviar mensaje',
    sending: 'Enviando…',
    errors: {
      required: 'Este campo es obligatorio.',
      email: 'Escribe un correo válido.',
      short: 'Cuéntanos un poco más (mínimo 10 caracteres).',
    },
    mailtoOpened: 'Abrimos tu aplicación de correo con el mensaje listo. Envíalo desde allí para que nos llegue.',
    success: '¡Gracias! Recibimos tu mensaje y te responderemos pronto.',
    failure: 'No pudimos enviar el mensaje. Inténtalo de nuevo o escríbenos por correo.',
    mailSubject: 'Contacto desde la web — {role}',
    channelsTitle: 'Otros canales',
    emailUs: 'Escríbenos',
    whatsapp: 'WhatsApp',
    whatsappText: 'Hola Barbattia, quiero más información.',
    unavailable: 'El canal de contacto aún no está configurado.',
  },

  footer: {
    tagline: 'La plataforma que conecta clientes con barberos verificados.',
    explore: 'Explorar',
    legal: 'Legal',
    terms: 'Términos y condiciones',
    privacy: 'Política de privacidad',
    follow: 'Síguenos',
    rights: '© {year} Barbattia. Todos los derechos reservados.',
  },

  legal: {
    draft: 'Borrador',
    draftNotice:
      'Este documento es un BORRADOR de ejemplo y no tiene validez legal. Será reemplazado por la versión revisada antes del lanzamiento.',
    terms: {
      title: 'Términos y condiciones',
      sections: [
        { h: '1. Objeto', p: 'Barbattia es una plataforma que conecta a personas que buscan servicios de barbería con barberos independientes. [Texto provisional]' },
        { h: '2. Cuentas de usuario', p: 'Los usuarios deben proporcionar información veraz y mantener la seguridad de su cuenta. [Texto provisional]' },
        { h: '3. Servicios y precios', p: 'Los precios se acuerdan entre cliente y barbero mediante el sistema de ofertas. [Texto provisional]' },
        { h: '4. Calificaciones y conducta', p: 'Las calificaciones deben reflejar experiencias reales. Nos reservamos el derecho de suspender cuentas que incumplan las normas. [Texto provisional]' },
      ],
    },
    privacy: {
      title: 'Política de privacidad',
      sections: [
        { h: '1. Datos que recopilamos', p: 'Datos de cuenta, ubicación aproximada y documentos de verificación de barberos. [Texto provisional]' },
        { h: '2. Uso de la ubicación', p: 'La ubicación exacta solo se comparte con el barbero elegido una vez confirmado el servicio. [Texto provisional]' },
        { h: '3. Tus derechos', p: 'Puedes solicitar acceso, corrección o eliminación de tus datos. [Texto provisional]' },
      ],
    },
  },

  notFound: {
    title: 'Página no encontrada',
    text: 'La página que buscas no existe o fue movida.',
  },
};

export type Messages = typeof es;
export default es;
