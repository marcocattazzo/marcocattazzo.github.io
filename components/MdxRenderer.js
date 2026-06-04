import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const components = {
  h2: (props) => <h2 {...props} />,
  h3: (props) => <h3 {...props} />,
  a: (props) => <a {...props} />,
};

export default function MdxRenderer({ source }) {
  return (
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
  );
}
