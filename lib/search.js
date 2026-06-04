import lunr from 'lunr';

let cachedIdx = null;
let cachedDocs = null;

export function buildIndex(docs) {
  cachedDocs = docs;
  cachedIdx = lunr(function () {
    this.ref('id');
    this.field('title', { boost: 5 });
    this.field('abstract', { boost: 2 });
    this.field('tags');
    this.field('section');
    docs.forEach((d) => this.add({
      id: d.id,
      title: d.title,
      abstract: d.abstract || '',
      tags: (d.tags || []).join(' '),
      section: d.section
    }));
  });
  return cachedIdx;
}

export function search(q) {
  if (!cachedIdx || !cachedDocs || !q) return [];
  try {
    const results = cachedIdx.search(q);
    const byId = new Map(cachedDocs.map((d) => [d.id, d]));
    return results.map((r) => byId.get(r.ref)).filter(Boolean);
  } catch {
    return [];
  }
}
