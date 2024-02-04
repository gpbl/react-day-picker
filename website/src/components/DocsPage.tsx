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
  return (
    <Flex>
      <SideNav>
        <Box pt="4" px="4" pb="9">
          <DocsNav
            routes={pathName?.startsWith("/docs/api") ? apiNav() : docsNav}
          />
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
