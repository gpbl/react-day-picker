import {
  PreventFlashOnWrongTheme,
  Theme,
  ThemeProvider,
  useTheme,
} from "remix-themes";

import { Layout } from "@/components/Layout";
import {
  themeSessionResolver,
  versionSessionResolver,
} from "@/sessions.server";
import tailwindHref from "@/tailwind.css";
import { Theme as RadixTheme } from "@radix-ui/themes";
import radixUIHref from "@radix-ui/themes/styles.css";
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

// Return the theme from the session storage using the loader
export const loader: LoaderFunction = async ({ request }) => {
  const { getTheme } = await themeSessionResolver(request);
  const { getVersion } = await versionSessionResolver(request);
  return {
    theme: getTheme(),
    version: getVersion(),
  };
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindHref },
  { rel: "stylesheet", href: radixUIHref },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

type LoaderData = {
  theme: Theme;
};

export default function AppWithProviders() {
  const data = useLoaderData<LoaderData>(); // Update the type of `data` to include the `theme` property
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  );
}

function App() {
  const data = useLoaderData() as LoaderData;
  const [theme] = useTheme();
  return (
    <html lang="en" data-theme={theme ?? ""} className={theme ?? ""}>
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
