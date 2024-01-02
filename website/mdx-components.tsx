import type { MDXComponents } from 'mdx/types';
import * as examples from 'react-day-picker/examples';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...examples
  };
}
