import { DocsLayout } from '@/components/DocsLayout';
import { PropsWithChildren } from 'react';

export default function ExamplesLayout(props: PropsWithChildren) {
  return <DocsLayout>{props.children}</DocsLayout>;
}
