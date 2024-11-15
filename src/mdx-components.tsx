import type { MDXComponents } from 'mdx/types';

import { mdxCustomComponents } from './components/mdx-custom-components';

export default function useMDXComponents(
  components: MDXComponents
): MDXComponents {
  return {
    ...mdxCustomComponents,
    ...components,
  };
}
