import { Theme } from "@radix-ui/themes";
import { Header } from "@/components/Header";
import { DocsPage } from "./DocsPage";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "@/app/theme-provider";
import { VersionProvider } from "@/utils/VersionContext";

export default function layout(
  props: PropsWithChildren<{ isDocPage: boolean }>,
) {
  return (
    <VersionProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Theme>
          <Header />
          <main>
            {props.isDocPage ? (
              <DocsPage pathName="/">{props.children}</DocsPage>
            ) : (
              props.children
            )}
          </main>
        </Theme>
      </ThemeProvider>
    </VersionProvider>
  );
}
