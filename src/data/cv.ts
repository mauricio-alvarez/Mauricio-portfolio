import type { Lang } from './site';

type L = Record<Lang, string>;

export interface CvEntry {
  period: L;
  title: L;
  place: L;
  detail?: L;
}

/** Work experience. Empty until the real CV is added: nothing here is invented. */
export const experience: CvEntry[] = [];

export const education: CvEntry[] = [
  {
    period: { es: 'Lima, Perú', en: 'Lima, Peru' },
    title: { es: 'Ciencias de la Computación', en: 'Computer Science' },
    place: {
      es: 'UTEC — Universidad de Ingeniería y Tecnología',
      en: 'UTEC — Universidad de Ingeniería y Tecnología',
    },
    detail: {
      es: 'Proyectos de curso en bases de datos, estructuras de datos, ingeniería de software, visión por computadora y aprendizaje por refuerzo.',
      en: 'Coursework projects in databases, data structures, software engineering, computer vision and reinforcement learning.',
    },
  },
];

export const skills: { label: L; items: string[] }[] = [
  {
    label: { es: 'Lenguajes', en: 'Languages' },
    items: ['Python', 'TypeScript', 'Swift', 'C++', 'SQL'],
  },
  {
    label: { es: 'IA y datos', en: 'AI & data' },
    items: ['PyTorch', 'YOLOv8', 'Diffusers', 'PPO / self-play', 'OpenCV', 'GGUF'],
  },
  {
    label: { es: 'Backend y nube', en: 'Backend & cloud' },
    items: ['FastAPI', 'Docker', 'Cloud Run', 'Firestore', 'Firebase', 'Selenium'],
  },
  {
    label: { es: 'Frontend y móvil', en: 'Frontend & mobile' },
    items: ['React', 'Vue 3', 'Angular', 'SwiftUI', 'Tailwind CSS'],
  },
];
