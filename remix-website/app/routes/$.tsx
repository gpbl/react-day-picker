import { RenderJsx } from '@/components/RenderJsx';
import type { Frontmatter } from '@/lib/docs.server';
import { getDoc } from '@/lib/docs.server';
import { MetaFunction, useLoaderData } from '@remix-run/react';
import type {
  LoaderFunction,
  LoaderFunctionArgs
} from '@remix-run/server-runtime';
import { json } from '@remix-run/server-runtime';

type LoaderData = {
  frontmatter: Frontmatter;
  code: string;
};

export const loader: LoaderFunction = async ({
  params
}: LoaderFunctionArgs) => {
  const slug = params['*'] || 'intro';
  if (!slug) {
    throw new Response('Not found', { status: 404 });
  }
  const data = await getDoc(slug);

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

export default function DocPage() {
  const { code } = useLoaderData<LoaderData>();
  return (
    <main>
      <RenderJsx jsx={code} />
    </main>
  );
}
