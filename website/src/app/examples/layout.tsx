import { DocsLayout } from '@/components/DocsLayout';
import { PropsWithChildren } from 'react';
import type { LayoutProps } from 'next/types';

export default function ExamplesLayout(props: LayoutProps) {
  return <DocsLayout>{props.children}</DocsLayout>;
}
