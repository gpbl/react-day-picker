import "@radix-ui/themes/styles.css";
import "react-day-picker/style.css";

import "@/app/globals.css";
import "@/app/radix-config.css";
import "@/app/shiki.css";

import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";

import { DocPage } from "@/components/DocPage";
import { Header } from "@/components/Header";
import { VersionProvider } from "@/lib/version";
import { Theme } from "@radix-ui/themes";

interface AppProps {
  Component: React.ComponentType<PropsWithChildren>;
  pageProps: PropsWithChildren;
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
            <DocPage {...pageProps}>
              <Component {...pageProps} />
            </DocPage>
          ) : (
            <Component {...pageProps} />
          )}
        </Theme>
      </ThemeProvider>
    </VersionProvider>
  );
}
