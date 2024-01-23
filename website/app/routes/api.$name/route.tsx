import { useMemo } from 'react';

import { getMDXComponent } from 'mdx-bundler/client/index.js';

import { mdxComponents } from '@/components/mdxComponents';

import type { Frontmatter } from '@/lib/docs.server';
import { getDoc } from '@/lib/docs.server';
import { MetaFunction, useLoaderData, useParams } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/server-runtime';
import { json } from '@remix-run/server-runtime';
import { PropsTable } from '@/components/PropsTable';

type LoaderData = {
  frontmatter: Frontmatter;
  code: string;
};

export const loader: LoaderFunction = async () => {
  const data = (await getDoc('intro')) as LoaderData;
  if (data) {
    return json(data);
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

export default function Index() {
  const params = useParams();
  const name = params['name'];
  if (!name) {
    throw new Response('Not found', { status: 404 });
  }
  return (
    <main>
      <PropsTable interface={name} />
    </main>
  );
}
