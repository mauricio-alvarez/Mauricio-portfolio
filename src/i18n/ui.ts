import type { Lang } from '../data/site';

export const ui = {
  es: {
    metaTitle: 'Mauricio Alvarez — IA explicable y sistemas que escalan',
    metaDescription:
      'Portafolio de Mauricio Alvarez, analista de Datos e IA en Lima: agentes de IA en producción, IA explicable, visión por computadora, aprendizaje por refuerzo y desarrollo full-stack.',
    skip: 'Saltar al contenido',
    nav: { projects: 'Proyectos', about: 'Sobre mí', cv: 'CV', contact: 'Contacto' },
    langLabel: 'Idioma',
    themeLabel: 'Cambiar entre tema claro y oscuro',
    eyebrow: 'Lima, Perú · Analista de Datos e IA en Izipay',
    heroTitle: ['Sistemas de IA que se pueden ', 'explicar', ' y escalar.'],
    heroLead:
      'Soy Mauricio Alvarez. Construyo agentes de IA y automatizaciones que funcionan en producción, e investigo visión por computadora interpretable, aprendizaje por refuerzo y modelos que corren en el dispositivo.',
    ctaProjects: 'Ver proyectos',
    ctaCv: 'Descargar CV',
    ctaCvOther: 'Descargar CV (en inglés)',
    focus: [
      'Agentes de IA',
      'IA explicable',
      'Visión por computadora',
      'Aprendizaje por refuerzo',
      'IA en el dispositivo',
      'Full-stack y nube',
    ],
    projectsTitle: 'Proyectos seleccionados',
    projectsLead:
      'Cuatro trabajos recientes, de la investigación al producto. Todo el código es público.',
    moreTitle: 'Más proyectos',
    demo: 'Demo en vivo',
    code: 'Código',
    team: 'En equipo',
    allRepos: 'Ver todos los repositorios en GitHub',
    aboutTitle: 'Sobre mí',
    about: [
      'Me interesa entender por qué un modelo decide lo que decide, y construir lo necesario para que esa respuesta llegue a alguien: el entrenamiento, la API, la interfaz y el despliegue.',
      'Egresé de Ciencias de la Computación en UTEC, en el quinto superior de la carrera, y hoy trabajo en el equipo de Data & Analytics de Izipay. Mis proyectos personales van desde estructuras de archivos escritas en C++ hasta apps nativas de iOS y servicios en la nube.',
    ],
    skillsTitle: 'Con qué trabajo',
    cvTitle: 'CV',
    cvLead: 'El resumen está aquí; el detalle completo, en el PDF.',
    experience: 'Experiencia',
    education: 'Formación',
    contactTitle: ['¿Construimos ', 'algo', '?'],
    contactLead:
      'Estoy abierto a oportunidades y colaboraciones en IA y desarrollo de software. Escríbeme y conversamos.',
    emailCta: 'Escribirme',
    footer: 'Diseñado y construido en Lima.',
    source: 'Código de este sitio',
    top: 'Volver arriba',
  },
  en: {
    metaTitle: 'Mauricio Alvarez — Explainable AI and systems that scale',
    metaDescription:
      'Portfolio of Mauricio Alvarez, Data & AI analyst in Lima: AI agents in production, explainable AI, computer vision, reinforcement learning and full-stack development.',
    skip: 'Skip to content',
    nav: { projects: 'Projects', about: 'About', cv: 'CV', contact: 'Contact' },
    langLabel: 'Language',
    themeLabel: 'Switch between light and dark theme',
    eyebrow: 'Lima, Peru · Data & AI Analyst at Izipay',
    heroTitle: ['AI systems you can ', 'explain', ' and scale.'],
    heroLead:
      "I'm Mauricio Alvarez. I build AI agents and automations that run in production, and I research interpretable computer vision, reinforcement learning and models that run on the device.",
    ctaProjects: 'See projects',
    ctaCv: 'Download CV',
    ctaCvOther: 'Download CV (in Spanish)',
    focus: [
      'AI agents',
      'Explainable AI',
      'Computer vision',
      'Reinforcement learning',
      'On-device AI',
      'Full-stack & cloud',
    ],
    projectsTitle: 'Selected projects',
    projectsLead: 'Four recent pieces of work, from research to product. All the code is public.',
    moreTitle: 'More projects',
    demo: 'Live demo',
    code: 'Code',
    team: 'Team project',
    allRepos: 'See every repository on GitHub',
    aboutTitle: 'About',
    about: [
      'I care about understanding why a model decides what it decides, and about building what it takes for that answer to reach someone: the training, the API, the interface and the deployment.',
      "I graduated in Computer Science from UTEC, in the top fifth of the programme, and today I work on Izipay's Data & Analytics team. My personal projects range from file structures written in C++ to native iOS apps and cloud services.",
    ],
    skillsTitle: 'What I work with',
    cvTitle: 'CV',
    cvLead: 'The summary is here; the full detail is in the PDF.',
    experience: 'Experience',
    education: 'Education',
    contactTitle: ["Let's build ", 'something', '.'],
    contactLead:
      "I'm open to opportunities and collaborations in AI and software development. Write to me and let's talk.",
    emailCta: 'Email me',
    footer: 'Designed and built in Lima.',
    source: 'Source of this site',
    top: 'Back to top',
  },
} as const satisfies Record<Lang, unknown>;

export const otherLang = (lang: Lang): Lang => (lang === 'es' ? 'en' : 'es');
export const homePath = (lang: Lang) => (lang === 'es' ? '/' : '/en/');
