import { useEffect } from 'react';

import { type IStaticMethods } from 'preline/preline';
import dayPickerCssHref from 'react-day-picker/dist/style.css';

import { Layout } from '@/components/Layout';
import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation
} from '@remix-run/react';

import tailwindHref from './tailwind.css';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

if (typeof window !== 'undefined') {
  console.log('preline');
  require('preline/preline');
}

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindHref },
  { rel: 'stylesheet', href: dayPickerCssHref },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : [])
];

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <Meta />
        <Links />
      </head>
      <body className="dark:bg-slate-900">
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
