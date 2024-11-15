import { MDXComponents } from 'mdx/types';

export const mdxCustomComponents: MDXComponents = {
  h1: ({ children, ...props }) => (
    <h1 {...props} style={{ color: 'red' }}>
      {children}
    </h1>
  ),
};
