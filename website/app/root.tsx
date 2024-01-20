// import dayPickerCssHref from 'react-day-picker/dist/style.css';

import {
  ThemeProvider,
  useTheme,
  PreventFlashOnWrongTheme,
  Theme
} from 'remix-themes';
import { themeSessionResolver } from './sessions.server';

// Return the theme from the session storage using the loader
export const loader: LoaderFunction = async ({ request }) => {
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme()
  };
};

import { Theme as RadixTheme } from '@radix-ui/themes';

import { Layout } from '@/components/Layout';
import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction, LoaderFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from '@remix-run/react';

import tailwindHref from './tailwind.css';
import radixUIHref from '@radix-ui/themes/styles.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindHref },
  { rel: 'stylesheet', href: radixUIHref },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : [])
];

export default function AppWithProviders() {
  const data = useLoaderData<{ theme: Theme }>(); // Update the type of `data` to include the `theme` property
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  );
}

function App() {
  const data = useLoaderData();
  const [theme] = useTheme();
  return (
    <html lang="en" data-theme={theme ?? ''} className={theme ?? ''}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>
      <body>
        <RadixTheme radius="medium">
          <Layout>
            <Outlet />
          </Layout>
        </RadixTheme>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
