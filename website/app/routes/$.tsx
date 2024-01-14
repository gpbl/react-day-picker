import { useMemo } from 'react';

import { getMDXComponent } from 'mdx-bundler/client/index.js';
import { MetaFunction, useLoaderData } from '@remix-run/react';
import type {
  LoaderFunction,
  LoaderFunctionArgs
} from '@remix-run/server-runtime';
import { json } from '@remix-run/server-runtime';

import type { Frontmatter } from '../utils/docs.server';
import { getDoc } from '../utils/docs.server';

import { DayPicker } from 'react-day-picker';
import { components } from '@/components/MDXComponents';
// import type { MetaFunction } from '@remix-run/react/dist/routeModules';

type LoaderData = {
  frontmatter: Frontmatter;
  code: string;
};

export const loader: LoaderFunction = async ({
  params
}: LoaderFunctionArgs) => {
  const slug = params['*'] || 'index';
  if (!slug) throw new Response('Not found', { status: 404 });

  const docPage = await getDoc(slug);
  if (docPage) {
    return json(docPage);
  } else {
    throw new Response('Not found', { status: 404 });
  }
};

export const meta: MetaFunction = (arg) => {
  const frontmatter = (arg.data as LoaderData).frontmatter;
  const title = frontmatter?.title ?? 'React DayPicker';
  const description = frontmatter?.description ?? undefined;

  return [
    { title: title },
    { name: 'description', content: description },
    { name: 'og:title', content: title },
    { name: 'og:description', content: description },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description }
  ];
};

export default function Page() {
  const { code, frontmatter } = useLoaderData<LoaderData>();
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <main>
      <Component
        components={{
          DayPicker,
          ...components
        }}
      />
    </main>
  );
}
