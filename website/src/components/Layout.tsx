import { PropsWithChildren } from "react";

import { ThemeProvider } from "@/app/theme-provider";
import { Header } from "@/components/Header";
import { VersionProvider } from "@/utils/VersionContext";
import { Theme } from "@radix-ui/themes";

export default function layout(props: PropsWithChildren) {
  return (
    <VersionProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Theme>
          <Header />
          <main>{props.children}</main>
        </Theme>
      </ThemeProvider>
    </VersionProvider>
  );
}
