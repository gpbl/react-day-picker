import { PropsWithChildren } from "react";

import { Box, Flex } from "@radix-ui/themes";

import { DocsNav } from "./DocsNav";
import { DocsPageWrapper } from "./DocsPageWrapper";
import { SideNav } from "./SideNav";
import { docsNav } from "@/pages/nav.docs";
import { apiNav } from "@/pages/nav.api";
import { usePathname } from "next/navigation";

export function DocsPage(props: PropsWithChildren<{ pathName: string }>) {
  const pathName = usePathname();

  const routes = [];

  if (pathName?.startsWith("/docs/api")) {
    routes.push(...apiNav());
  } else if (pathName?.startsWith("/docs") || pathName === "/") {
    routes.push(...docsNav);
  }

  return (
    <Flex>
      <SideNav>
        <Box pt="4" px="4" pb="9">
          <DocsNav routes={routes} />
        </Box>
      </SideNav>

      <DocsPageWrapper>
        <Box>{props.children}</Box>
        {/* <DocsPagination allRoutes={allColorsRoutes} /> */}
        {/* <EditPageLink /> */}
      </DocsPageWrapper>
    </Flex>
  );
}
