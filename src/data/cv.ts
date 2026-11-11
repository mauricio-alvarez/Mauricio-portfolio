import type { Lang } from './site';

type L = Record<Lang, string>;

export interface CvEntry {
  period: L;
  title: L;
  place: L;
  detail?: L;
}

/** Summarised from the CV PDF in public/cv/. Keep the two in sync. */
export const experience: CvEntry[] = [
  {
    period: { es: 'Jul. 2026 – Actualidad', en: 'Jul 2026 – Present' },
    title: {
      es: 'Analista de Datos e Inteligencia Artificial',
      en: 'Data & Artificial Intelligence Analyst',
    },
    place: { es: 'Izipay · Lima, Perú', en: 'Izipay · Lima, Peru' },
    detail: {
      es: 'Me incorporé al equipo de Data & Analytics tras el Programa de Verano. Mantengo y hago evolucionar la solución de agentes de IA que automatiza el canal de atención posventa por correo, y apoyo en pipelines de MLOps con LangChain, LangGraph, LangFuse y LangSmith.',
      en: 'Joined the Data & Analytics team after the Summer Programme. I maintain and evolve the AI-agent solution that automates the post-sales email channel, and support MLOps pipelines with LangChain, LangGraph, LangFuse and LangSmith.',
    },
  },
  {
    period: { es: 'Jun. 2026 – Jul. 2026', en: 'Jun 2026 – Jul 2026' },
    title: { es: 'Desarrollador Freelance', en: 'Freelance Developer' },
    place: { es: 'LineLogic AI · Remoto', en: 'LineLogic AI · Remote' },
    detail: {
      es: 'Me contactaron tras una hackathon de ElevenLabs para implementar un flujo de agentes de voz de atención al cliente. Desarrollé la lógica de los agentes y sus herramientas en Python, la página web de la empresa y un dashboard para monitorear conversaciones y desempeño.',
      en: 'Contacted after an ElevenLabs hackathon to build a voice-agent flow for customer service. I developed the agent logic and its tools in Python, the company website, and a dashboard to monitor conversations and agent performance.',
    },
  },
  {
    period: { es: 'Ene. 2026 – Jul. 2026', en: 'Jan 2026 – Jul 2026' },
    title: { es: 'Practicante del Programa de Verano', en: 'Summer Programme Intern' },
    place: { es: 'Izipay · Lima, Perú', en: 'Izipay · Lima, Peru' },
    detail: {
      es: 'Seleccionado entre más de 4,000 postulantes. Desarrollé la automatización del canal de atención por correo con agentes en Python y LangGraph, con un ahorro estimado del 10% del tiempo total de procesamiento de correos.',
      en: 'Selected from more than 4,000 applicants. I built the automation of the email support channel with agents in Python and LangGraph, for an estimated 10% saving in total email-processing time.',
    },
  },
  {
    period: { es: 'Feb. 2025 – Ago. 2025', en: 'Feb 2025 – Aug 2025' },
    title: { es: 'Practicante Full-Stack', en: 'Full-Stack Intern' },
    place: { es: 'Crece Capital Factoring · Lima, Perú', en: 'Crece Capital Factoring · Lima, Peru' },
    detail: {
      es: 'Automaticé validaciones de archivos PDF con Python e IA, reduciendo el procesamiento por archivo de 15 minutos a 1. Desarrollé y mantuve soluciones web en AngularJS, C# y TypeScript.',
      en: 'Automated PDF validations with Python and AI, cutting processing per file from 15 minutes to 1. Developed and maintained web solutions in AngularJS, C# and TypeScript.',
    },
  },
];

export const education: CvEntry[] = [
  {
    period: { es: '2021 – 2026', en: '2021 – 2026' },
    title: { es: 'Ciencias de la Computación', en: 'Computer Science' },
    place: {
      es: 'UTEC — Universidad de Ingeniería y Tecnología',
      en: 'UTEC — Universidad de Ingeniería y Tecnología',
    },
    detail: {
      es: 'Quinto superior de la carrera.',
      en: 'Top fifth of the programme.',
    },
  },
  {
    period: { es: '2019 – 2020', en: '2019 – 2020' },
    title: {
      es: 'Programa del Diploma del Bachillerato Internacional',
      en: 'International Baccalaureate Diploma Programme',
    },
    place: { es: 'International Baccalaureate', en: 'International Baccalaureate' },
  },
];

export const skills: { label: L; items: string[] }[] = [
  {
    label: { es: 'Lenguajes', en: 'Languages' },
    items: ['Python', 'TypeScript', 'JavaScript', 'C#', 'Swift', 'C++', 'SQL'],
  },
  {
    label: { es: 'IA y agentes', en: 'AI & agents' },
    items: ['LangChain', 'LangGraph', 'PyTorch', 'YOLOv8', 'Diffusers', 'OpenCV'],
  },
  {
    label: { es: 'MLOps y nube', en: 'MLOps & cloud' },
    items: ['LangFuse', 'LangSmith', 'Docker', 'AWS', 'Cloud Run', 'Firebase'],
  },
  {
    label: { es: 'Web y móvil', en: 'Web & mobile' },
    items: ['FastAPI', 'React', 'Vue 3', 'Angular', 'SwiftUI'],
  },
];
