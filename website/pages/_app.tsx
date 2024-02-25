import "@radix-ui/themes/styles.css";
import "react-day-picker/style.css";

import "@/app/globals.css";
import "@/app/radix-config.css";
import "@/app/shiki.css";

import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";

import { DocsLayout } from "@/components/DocsLayout";
import { Header } from "@/components/Header";
import { SidebarProvider } from "@/lib/sidebar";
import { VersionProvider } from "@/lib/versions";
import { type DocsStaticProps } from "@/pages/docs/[[...slug]]";
import { Theme } from "@radix-ui/themes";

interface AppProps {
  Component: React.ComponentType<DocsStaticProps>;
  pageProps: DocsStaticProps;
}

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const pathname = usePathname();
  const isDocPage = pathname?.startsWith("/docs");

  return (
    <VersionProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SidebarProvider>
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
        </SidebarProvider>
      </ThemeProvider>
    </VersionProvider>
  );
}
