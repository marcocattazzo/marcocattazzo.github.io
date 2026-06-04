'use client';

import Giscus from '@giscus/react';

export default function GiscusComments({ locale }) {
  const repo = process.env.NEXT_PUBLIC_GISCUS_REPO;
  const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID;
  const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY;
  const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID;

  if (!repo || !repoId) {
    return (
      <div style={{
        padding: '2rem',
        textAlign: 'center',
        border: '0.5px solid var(--border-subtle)',
        fontFamily: 'EB Garamond, serif',
        fontStyle: 'italic',
        color: 'var(--text-dim)',
        fontSize: '14px'
      }}>
        Commenti disponibili una volta configurato Giscus.
      </div>
    );
  }

  return (
    <Giscus
      id="comments"
      repo={repo}
      repoId={repoId}
      category={category || 'General'}
      categoryId={categoryId || ''}
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="dark_dimmed"
      lang={locale === 'en' ? 'en' : 'it'}
      loading="lazy"
    />
  );
}
