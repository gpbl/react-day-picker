import dayPickerCssHref from 'react-day-picker/dist/style.css';
import { Theme } from '@radix-ui/themes';

import { Layout } from '@/components/Layout';
import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react';

import tailwindHref from './tailwind.css';
import radixUIHref from '@radix-ui/themes/styles.css';
export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindHref },
  { rel: 'stylesheet', href: dayPickerCssHref },
  { rel: 'stylesheet', href: radixUIHref },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : [])
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <Meta />
        <Links />
      </head>
      <body>
        <Theme>
          <Layout>
            <Outlet />
          </Layout>
        </Theme>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
