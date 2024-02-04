import { Theme } from "@radix-ui/themes";
import { Header } from "@/components/Header";
import { DocsPage } from "./DocsPage";
import { PropsWithChildren } from "react";

export default function layout(
  props: PropsWithChildren<{ isDocPage: boolean }>
) {
  return (
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
  );
}
