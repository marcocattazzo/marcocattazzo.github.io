import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export const sectionSlugs = [
  'matematica',
  'fede-e-chiesa',
  'parole',
  'musica',
  'giochi',
  'grafica',
  'pensieri'
];

// --- Sistema lingua + fallback -------------------------------------------
// Convenzione: un articolo IT è `slug.mdx`. Una eventuale versione inglese è
// `slug.en.mdx`. Per locale 'en' si preferisce la variante .en.mdx se esiste;
// altrimenti si mostra la versione IT (fallback) con _fallback: true, così le
// pagine /en non restano vuote finché le traduzioni non sono pronte.

function readMdx(filePath) {
  return matter(fs.readFileSync(filePath, 'utf8'));
}

// Mappa: slug logico -> { base: 'slug.mdx', en: 'slug.en.mdx' }
function collectVariants(dir) {
  const map = new Map();
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith('.mdx')) continue;
    let slug, lang;
    if (file.endsWith('.en.mdx')) {
      slug = file.slice(0, -'.en.mdx'.length);
      lang = 'en';
    } else {
      slug = file.slice(0, -'.mdx'.length);
      lang = 'base';
    }
    const entry = map.get(slug) || {};
    entry[lang] = file;
    map.set(slug, entry);
  }
  return map;
}

// Sceglie il file giusto per il locale, segnalando il fallback.
function pickFile(entry, locale) {
  if (locale === 'en' && entry.en) return { file: entry.en, fallback: false };
  return { file: entry.base, fallback: locale === 'en' && !entry.en };
}

export function getAllArticles({ locale } = {}) {
  const all = [];
  for (const section of sectionSlugs) {
    const dir = path.join(CONTENT_DIR, section);
    if (!fs.existsSync(dir)) continue;
    const variants = collectVariants(dir);
    for (const [slug, entry] of variants) {
      const { file, fallback } = pickFile(entry, locale);
      if (!file) continue;
      const { data, content } = readMdx(path.join(dir, file));
      all.push({ slug, section, content, _fallback: fallback, ...data });
    }
  }
  return all.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticlesBySection(section, { locale } = {}) {
  return getAllArticles({ locale }).filter((a) => a.section === section);
}

export function getArticle(section, slug, { locale } = {}) {
  const dir = path.join(CONTENT_DIR, section);
  let file = null;
  let fallback = false;
  if (locale === 'en' && fs.existsSync(path.join(dir, `${slug}.en.mdx`))) {
    file = `${slug}.en.mdx`;
  } else if (fs.existsSync(path.join(dir, `${slug}.mdx`))) {
    file = `${slug}.mdx`;
    fallback = locale === 'en';
  }
  if (!file) return null;
  const { data, content } = readMdx(path.join(dir, file));
  return { slug, section, content, _fallback: fallback, ...data };
}

export function getAdjacentArticles(section, slug, { locale } = {}) {
  const articles = getArticlesBySection(section, { locale });
  const idx = articles.findIndex((a) => a.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: articles[idx + 1] || null,
    next: articles[idx - 1] || null
  };
}

export function getAllProjects({ locale } = {}) {
  const dir = path.join(CONTENT_DIR, 'lavoro');
  if (!fs.existsSync(dir)) return [];
  const all = [];
  const variants = collectVariants(dir);
  for (const [slug, entry] of variants) {
    const { file, fallback } = pickFile(entry, locale);
    if (!file) continue;
    const { data, content } = readMdx(path.join(dir, file));
    all.push({ slug, content, _fallback: fallback, ...data });
  }
  return all.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getProject(slug, { locale } = {}) {
  const dir = path.join(CONTENT_DIR, 'lavoro');
  let file = null;
  let fallback = false;
  if (locale === 'en' && fs.existsSync(path.join(dir, `${slug}.en.mdx`))) {
    file = `${slug}.en.mdx`;
  } else if (fs.existsSync(path.join(dir, `${slug}.mdx`))) {
    file = `${slug}.mdx`;
    fallback = locale === 'en';
  }
  if (!file) return null;
  const { data, content } = readMdx(path.join(dir, file));
  return { slug, content, _fallback: fallback, ...data };
}
