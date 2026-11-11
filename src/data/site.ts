import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export type Lang = 'es' | 'en';

/**
 * Everything personal lives here. Leave a field as `null` and the site simply
 * hides that link, so nothing half-filled is ever published.
 */
export const site = {
  name: 'Mauricio Alvarez',
  url: 'https://mauricioalvarezj.tech',
  github: 'https://github.com/mauricio-alvarez',
  linkedin: null as string | null, // e.g. 'https://www.linkedin.com/in/your-handle'
  email: null as string | null, // e.g. 'hello@mauricioalvarezj.tech'
};

/**
 * CV download: drop a PDF into `public/cv/` and the button appears by itself.
 *   public/cv/Mauricio-Alvarez-CV-ES.pdf   (Spanish page)
 *   public/cv/Mauricio-Alvarez-CV-EN.pdf   (English page)
 *   public/cv/Mauricio-Alvarez-CV.pdf      (fallback for both)
 */
export function cvPath(lang: Lang): string | null {
  const candidates = [
    `Mauricio-Alvarez-CV-${lang.toUpperCase()}.pdf`,
    'Mauricio-Alvarez-CV.pdf',
  ];
  for (const file of candidates) {
    const onDisk = fileURLToPath(new URL(`../../public/cv/${file}`, import.meta.url));
    if (existsSync(onDisk)) return `/cv/${file}`;
  }
  return null;
}
