import type { MDXComponents } from 'mdx/types'
import { AnchorLink } from '@/components/mdx/anchor-link';
import { tableComponents } from '@/components/mdx/table';
import { headersComponents } from './components/mdx/headers';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: AnchorLink,
    ...tableComponents,
    ...headersComponents,
    ...components,
  }
}

