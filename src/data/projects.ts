import type { Lang } from './site';

type L = Record<Lang, string>;
type LL = Record<Lang, string[]>;

const gh = (repo: string) => `https://github.com/mauricio-alvarez/${repo}`;

export interface Featured {
  id: string;
  media: 'graph' | 'phones' | 'figure' | 'browser';
  kind: L;
  year: string;
  title: L;
  summary: L;
  points: LL;
  stack: string[];
  repo: string;
  demo?: string;
  caption?: L;
}

export interface Card {
  title: L;
  summary: L;
  stack: string[];
  year: string;
  repo: string;
  demo?: string;
  team?: boolean;
}

export const featured: Featured[] = [
  {
    id: 'openvcc',
    media: 'graph',
    kind: { es: 'Investigación · IA explicable', en: 'Research · Explainable AI' },
    year: '2026',
    title: {
      es: 'Qué aprende un vision transformer, capa por capa',
      en: 'What a vision transformer learns, layer by layer',
    },
    summary: {
      es: 'Investigación sobre cómo los transformers de visión eficientes organizan los conceptos que aprenden. Parte del Visual Concept Connectome (CVPR 2024) y lo lleva a la familia SHViT.',
      en: 'Research into how efficient vision transformers organise the concepts they learn. It builds on the Visual Concept Connectome (CVPR 2024) and takes it to the SHViT family.',
    },
    points: {
      es: [
        'Descubrimiento de conceptos y de sus conexiones entre capas en SHViT.',
        'Variantes de doble y triple cabeza que comparten las primeras etapas de la red.',
        'Evaluación en ImageNet-1K e ImageNet-R, con entrenamiento en clúster HPC (Slurm).',
      ],
      en: [
        'Concept discovery and inter-layer connections for SHViT.',
        'Double- and triple-head variants that share the early stages of the network.',
        'Evaluation on ImageNet-1K and ImageNet-R, trained on an HPC cluster (Slurm).',
      ],
    },
    stack: ['PyTorch', 'SHViT', 'UMAP', 'Slurm'],
    repo: gh('OpenVCC'),
    caption: {
      es: 'Ilustración: conceptos por capa y la fuerza de sus conexiones.',
      en: 'Illustration: concepts per layer and the strength of their connections.',
    },
  },
  {
    id: 'local-models',
    media: 'phones',
    kind: { es: 'App iOS · IA en el dispositivo', en: 'iOS app · On-device AI' },
    year: '2026',
    title: {
      es: 'Local Models: un LLM que vive en tu iPhone',
      en: 'Local Models: an LLM that lives on your iPhone',
    },
    summary: {
      es: 'App nativa en SwiftUI que ejecuta modelos de lenguaje por completo en el teléfono. Sin cuenta, sin backend y sin telemetría: los pesos se descargan y se quedan en el dispositivo.',
      en: 'A native SwiftUI app that runs language models entirely on the phone. No account, no backend and no telemetry: weights are downloaded and stay on the device.',
    },
    points: {
      es: [
        'Chat con modelos GGUF como Gemma y Qwen, o cualquier .gguf importado desde Archivos.',
        'OCR, transcripción y lectura en voz alta en la misma barra de tareas.',
        'Probada en un iPhone 13 físico, con pruebas unitarias del motor de inferencia.',
      ],
      en: [
        'Chat with GGUF models such as Gemma and Qwen, or any .gguf imported from Files.',
        'OCR, transcription and text-to-speech in the same task bar.',
        'Validated on a physical iPhone 13, with unit tests for the inference engine.',
      ],
    },
    stack: ['Swift', 'SwiftUI', 'GGUF', 'XCTest'],
    repo: gh('iOS-Local-Models'),
    caption: {
      es: 'Capturas reales: chat con Gemma 3 y extracción de texto, ambos en el dispositivo.',
      en: 'Real screenshots: chat with Gemma 3 and text extraction, both on device.',
    },
  },
  {
    id: 'cyber-rl',
    media: 'figure',
    kind: { es: 'Aprendizaje por refuerzo', en: 'Reinforcement learning' },
    year: '2026',
    title: {
      es: 'Del escondite multiagente a la ciberdefensa',
      en: 'From multi-agent hide-and-seek to cyber defence',
    },
    summary: {
      es: 'Reproduce en Docker los entornos de escondite multiagente de OpenAI, entrena agentes con PPO y self-play, y transfiere esas políticas a un benchmark de ciberseguridad construido con vulnerabilidades reales.',
      en: "Reproduces OpenAI's multi-agent hide-and-seek environments in Docker, trains agents with PPO and self-play, and transfers those policies to a cyber benchmark built from real vulnerabilities.",
    },
    points: {
      es: [
        'Entorno heredado (Python 3.6, MuJoCo 1.50) reproducible con una sola imagen.',
        'Evaluación cruzada de buscadores y escondidos a lo largo de las fases de entrenamiento.',
        'Benchmark con el catálogo CISA de vulnerabilidades explotadas (KEV).',
      ],
      en: [
        'Legacy environment (Python 3.6, MuJoCo 1.50) made reproducible with a single image.',
        'Cross-play evaluation of seekers and hiders across training phases.',
        'Benchmark built on the CISA Known Exploited Vulnerabilities catalogue.',
      ],
    },
    stack: ['Python', 'PPO + GAE', 'MuJoCo', 'Docker'],
    repo: gh('Proyecto-RL'),
    caption: {
      es: 'Resultado del repositorio: tasa de victoria de buscadores y escondidos por fase.',
      en: 'Result from the repository: seeker and hider win rate per phase.',
    },
  },
  {
    id: 'invoices',
    media: 'browser',
    kind: { es: 'Plataforma full-stack · GenAI', en: 'Full-stack platform · GenAI' },
    year: '2025',
    title: {
      es: 'Facturas que se leen solas',
      en: 'Invoices that read themselves',
    },
    summary: {
      es: 'Plataforma que recibe facturas en PDF y extrae sus datos de forma automática con modelos de lenguaje y Document AI. Desplegada en Google Cloud, con registro de usuarios y panel de control.',
      en: 'A platform that takes invoice PDFs and extracts their data automatically with language models and Document AI. Deployed on Google Cloud, with sign-up and a dashboard.',
    },
    points: {
      es: [
        'API en FastAPI sobre Cloud Run; frontend en Vue 3 y TypeScript sobre Firebase Hosting.',
        'Extracción con OpenAI GPT-4 y Google Document AI como alternativa.',
        'Firestore para los datos y Cloud Storage para los documentos.',
      ],
      en: [
        'FastAPI on Cloud Run; Vue 3 and TypeScript frontend on Firebase Hosting.',
        'Extraction with OpenAI GPT-4, with Google Document AI as an alternative.',
        'Firestore for data and Cloud Storage for the documents.',
      ],
    },
    stack: ['FastAPI', 'Vue 3', 'Cloud Run', 'Firestore', 'OpenAI'],
    repo: gh('InvoiceAnalisis'),
    demo: 'https://fluid-advantage-476915-h9.web.app/login',
    caption: {
      es: 'La demo está en línea: crea una cuenta para probarla.',
      en: 'The demo is live: create an account to try it.',
    },
  },
];

export const more: Card[] = [
  {
    title: { es: 'Conteo de vehículos en video', en: 'Vehicle counting in video' },
    summary: {
      es: 'Detección con YOLOv8 y seguimiento con filtro de Kalman. El conteo por zonas registró 80 vehículos en un tramo donde el cruce de línea solo veía 52.',
      en: 'YOLOv8 detection with Kalman-filter tracking. Zone-based counting registered 80 vehicles on a segment where line crossing only saw 52.',
    },
    stack: ['Python', 'YOLOv8', 'Kalman', 'OpenCV'],
    year: '2025',
    repo: gh('CountingCars'),
  },
  {
    title: { es: 'AI Portrait Studio', en: 'AI Portrait Studio' },
    summary: {
      es: 'Sube un retrato y recibe cinco versiones de estudio con Stable Diffusion img2img. Funciona con GPU local o por API, y protege el rostro para no perder la identidad.',
      en: 'Upload a portrait and get five studio looks through Stable Diffusion img2img. Runs on a local GPU or through an API, with a face lock to preserve identity.',
    },
    stack: ['FastAPI', 'React', 'Diffusers', 'Modal'],
    year: '2026',
    repo: gh('interactive-visual-variation-system'),
  },
  {
    title: { es: 'Explorador de fondos Fintual', en: 'Fintual fund explorer' },
    summary: {
      es: 'Aplicación en Angular 19 que consulta la API pública de Fintual y grafica la evolución de un fondo en el rango de fechas que elijas.',
      en: "An Angular 19 app that queries Fintual's public API and charts a fund's evolution over the date range you choose.",
    },
    stack: ['Angular 19', 'TypeScript', 'ngx-charts'],
    year: '2025',
    repo: gh('FintualAPI'),
  },
  {
    title: { es: 'Motor de archivos en C++', en: 'File-organisation engine in C++' },
    summary: {
      es: 'Sequential file y extendible hashing implementados desde cero, con un parser de SQL y una interfaz gráfica para ejecutar consultas y medir tiempos.',
      en: 'Sequential file and extendible hashing implemented from scratch, with a SQL parser and a GUI to run queries and measure timings.',
    },
    stack: ['C++', 'Qt', 'SQL'],
    year: '2023',
    repo: gh('BDII_Proyecto'),
    team: true,
  },
  {
    title: { es: 'Buscador de artículos académicos', en: 'Academic paper search engine' },
    summary: {
      es: 'Índice invertido construido con SPIMI y ranking por TF-IDF y similitud de coseno sobre publicaciones de arXiv, comparado con el índice de PostgreSQL.',
      en: "An inverted index built with SPIMI, ranked by TF-IDF and cosine similarity over arXiv papers, and compared against PostgreSQL's index.",
    },
    stack: ['Python', 'NLTK', 'PostgreSQL', 'PyQt6'],
    year: '2023',
    repo: gh('BDII-proyecto2'),
    team: true,
  },
  {
    title: { es: 'Búsqueda de rostros por similitud', en: 'Face similarity search' },
    summary: {
      es: 'Búsqueda KNN y por rango sobre vectores de rostros, comparando un recorrido secuencial con índices R-tree y KD-tree.',
      en: 'KNN and range search over face embeddings, comparing a sequential scan with R-tree and KD-tree indexes.',
    },
    stack: ['Python', 'R-tree', 'KD-tree', 'NumPy'],
    year: '2023',
    repo: gh('BDII-proyectoIII'),
    team: true,
  },
];
