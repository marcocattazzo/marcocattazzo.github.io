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

export function getAllArticles({ locale } = {}) {
  const all = [];
  for (const section of sectionSlugs) {
    const dir = path.join(CONTENT_DIR, section);
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith('.mdx')) continue;
      const raw = fs.readFileSync(path.join(dir, file), 'utf8');
      const { data, content } = matter(raw);
      if (locale && data.lang && data.lang !== locale) continue;
      all.push({
        slug: file.replace(/\.mdx$/, ''),
        section,
        content,
        ...data
      });
    }
  }
  return all.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticlesBySection(section, { locale } = {}) {
  return getAllArticles({ locale }).filter((a) => a.section === section);
}

export function getArticle(section, slug, { locale } = {}) {
  const dir = path.join(CONTENT_DIR, section);
  const file = path.join(dir, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  if (locale && data.lang && data.lang !== locale) return null;
  return { slug, section, content, ...data };
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
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith('.mdx')) continue;
    const raw = fs.readFileSync(path.join(dir, file), 'utf8');
    const { data, content } = matter(raw);
    if (locale && data.lang && data.lang !== locale) continue;
    all.push({ slug: file.replace(/\.mdx$/, ''), content, ...data });
  }
  return all.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getProject(slug, { locale } = {}) {
  const file = path.join(CONTENT_DIR, 'lavoro', `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  if (locale && data.lang && data.lang !== locale) return null;
  return { slug, content, ...data };
}
