import { type PropsWithChildren } from "react";

import { useRouter } from "next/router";

import { DocsNav } from "@/components/DocsNav";
import { DocsPageWrapper } from "@/components/DocsPageWrapper";
import { Header } from "@/components/Header";
import { MobileMenuProvider } from "@/components/MobileMenu";
import { SideNav } from "@/components/SideNav";
import { apiNav } from "@/pages/nav.api";
import { docsNav } from "@/pages/nav.docs";
import { Box, Flex } from "@radix-ui/themes";

export function Layout(props: PropsWithChildren) {
  const router = useRouter();
  const isDocs =
    location.pathname === "/" || location.pathname.startsWith("/docs");
  const isApi = location.pathname.startsWith("/api");

  const isPage = isDocs || isApi;
  return (
    <MobileMenuProvider>
      <Header gitHubLink="https://github.com/gpbl/react-day-picker/tree/next" />
      <Flex>
        {isPage ? (
          <>
            <SideNav>
              <Box pt="4" px="4" pb="9">
                <DocsNav
                  routes={
                    location.pathname === "/" ||
                    location.pathname.startsWith("/docs")
                      ? docsNav
                      : location.pathname.startsWith("/api")
                        ? apiNav()
                        : []
                  }
                />
              </Box>
            </SideNav>

            <DocsPageWrapper>
              <Box>{props.children}</Box>
              {/* <DocsPagination allRoutes={allColorsRoutes} /> */}
              {/* <EditPageLink /> */}
            </DocsPageWrapper>
          </>
        ) : (
          props.children
        )}
      </Flex>
    </MobileMenuProvider>
  );
}
