import { PropsWithChildren } from "react";

import { Navigation } from "@/types/docs";
import { Frontmatter } from "@/types/frontmatter";
import { Box, Flex, Heading, Separator } from "@radix-ui/themes";
import { Toc } from "@stefanprobst/rehype-extract-toc";

import { Description } from "./Description";
import { DocsNav } from "./DocsNav";
import { SectionTitle } from "./SectionTitle";
import { SideNav } from "./SideNav";
import { TableOfContent } from "./TableOfContent";

import styles from "./DocPage.module.css";

export function DocPage(
  props: PropsWithChildren<{
    navigation: Navigation;
    frontmatter: Frontmatter;
    toc: Toc;
  }>,
) {
  const { frontmatter } = props;
  return (
    <Flex className={styles.docPage}>
      <Box style={{ width: 250 }}>
        <SideNav>
          <Box pt="4" px="4" pb="9">
            <DocsNav navigation={props.navigation} />
          </Box>
        </SideNav>
      </Box>
      <Box
        style={{ width: "100%", marginInlineStart: "7.5%" }}
        className="flex flex-1 md:ms-9"
      >
        <Box className="max-w-screen-md my-20 flex-1">
          {frontmatter.section && (
            <SectionTitle>{frontmatter.section}</SectionTitle>
          )}
          {frontmatter.title && (
            <Heading
              asChild
              size="8"
              mb="3"
              style={{ scrollMarginTop: "var(--header-height)" }}
            >
              <h1>{frontmatter.title}</h1>
            </Heading>
          )}
          {frontmatter.description && (
            <Description>{frontmatter.description}</Description>
          )}
          <Separator size="4" my="6" color="gray" />

          {props.toc.length > 0 && (
            <Box mb="9" className="lg:hidden">
              <TableOfContent toc={props.toc} />
            </Box>
          )}
          {props.children}
          {/* <DocsPagination allRoutes={allColorsRoutes} /> */}
          {/* <EditPageLink /> */}
        </Box>
        {props.toc.length > 0 && (
          <Box mt="9" className="hidden lg:block">
            <Box
              className="ms-20 mt-9 me-10 py-4 px-4"
              style={{ borderLeft: "1px solid var(--slate-a5)" }}
            >
              <TableOfContent toc={props.toc} />
            </Box>
          </Box>
        )}
      </Box>
    </Flex>
  );
}
