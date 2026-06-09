import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { CitazioniProvider } from './Citazioni';
import Cite from './Cite';
import Riferimenti from './Riferimenti';

const components = {
  h2: (props) => <h2 {...props} />,
  h3: (props) => <h3 {...props} />,
  a: (props) => <a {...props} />,
  // Componenti per citazioni accademiche (uso opzionale nei .mdx).
  Cite,
  Riferimenti
};

export default function MdxRenderer({ source }) {
  return (
    <CitazioniProvider>
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkMath],
            rehypePlugins: [[rehypeKatex, { strict: false }]]
          }
        }}
      />
    </CitazioniProvider>
  );
}
