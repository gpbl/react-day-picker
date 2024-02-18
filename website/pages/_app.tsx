import "@radix-ui/themes/styles.css";
import "react-day-picker/style.css";

import "@/app/globals.css";
import "@/app/radix-config.css";
import "@/app/shiki.css";

import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";

import { Header } from "@/components/Header";
import { VersionProvider } from "@/lib/version";
import { Theme } from "@radix-ui/themes";
import { DocsLayout } from "@/components/DocsLayout";
import { type DocStaticProps } from "./docs/[[...slug]]";

interface AppProps {
  Component: React.ComponentType<DocStaticProps>;
  pageProps: DocStaticProps;
}

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const pathname = usePathname();
  const isDocPage = pathname?.startsWith("/docs");

  return (
    <VersionProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Theme>
          <Header />
          {isDocPage ? (
            <DocsLayout pageProps={pageProps}>
              <Component {...pageProps} />
            </DocsLayout>
          ) : (
            <Component {...pageProps} />
          )}
        </Theme>
      </ThemeProvider>
    </VersionProvider>
  );
}
