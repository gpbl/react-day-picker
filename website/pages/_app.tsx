import "@/app/globals.css";
import "@/app/radix-config.css";
import "@/app/shiki.css";
import "@radix-ui/themes/styles.css";
import "react-day-picker/style.css";

import { ThemeProvider } from "next-themes";

import { Header } from "@/components/Header";
import { SidebarProvider } from "@/lib/sidebar";
import { VersionProvider } from "@/lib/versions";
import { type DocsStaticProps } from "@/pages/[[...slug]]";
import { Theme } from "@radix-ui/themes";

interface AppProps {
  Component: React.ComponentType<DocsStaticProps>;
  pageProps: DocsStaticProps;
}

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <VersionProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SidebarProvider>
          <Theme>
            <Header />
            <Component {...pageProps} />
          </Theme>
        </SidebarProvider>
      </ThemeProvider>
    </VersionProvider>
  );
}
