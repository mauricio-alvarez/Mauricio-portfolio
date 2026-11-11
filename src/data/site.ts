import { existsSync } from 'node:fs';
import { join } from 'node:path';

export type Lang = 'es' | 'en';

/**
 * Everything personal lives here. Leave a field as `null` and the site simply
 * hides that link, so nothing half-filled is ever published.
 */
export const site = {
  name: 'Mauricio Alvarez',
  url: 'https://mauricioalvarezj.tech',
  github: 'https://github.com/mauricio-alvarez',
  linkedin: 'https://www.linkedin.com/in/mauricio-alvarez' as string | null,
  email: 'mauricio.alvarez@utec.edu.pe' as string | null,
};

/**
 * CV download: drop a PDF into `public/cv/` and the button appears by itself.
 *   public/cv/Mauricio-Alvarez-CV-ES.pdf   (Spanish)
 *   public/cv/Mauricio-Alvarez-CV-EN.pdf   (English)
 *   public/cv/Mauricio-Alvarez-CV.pdf      (no language in the name)
 * A page whose own language is missing falls back to the other one and says so.
 */
export function cvFile(lang: Lang): { href: string; lang: Lang | null } | null {
  const other: Lang = lang === 'es' ? 'en' : 'es';
  const candidates: { file: string; lang: Lang | null }[] = [
    { file: `Mauricio-Alvarez-CV-${lang.toUpperCase()}.pdf`, lang },
    { file: 'Mauricio-Alvarez-CV.pdf', lang: null },
    { file: `Mauricio-Alvarez-CV-${other.toUpperCase()}.pdf`, lang: other },
  ];
  for (const c of candidates) {
    // Resolved from the project root: the build bundles this module elsewhere.
    const onDisk = join(process.cwd(), 'public', 'cv', c.file);
    if (existsSync(onDisk)) return { href: `/cv/${c.file}`, lang: c.lang };
  }
  return null;
}
