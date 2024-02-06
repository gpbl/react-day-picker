import { PropsWithChildren } from "react";

import { Box, Flex, Heading, Separator } from "@radix-ui/themes";

import { DocsNav, DocsNavProps } from "./DocsNav";
import { DocsPageWrapper } from "./DocsPageWrapper";
import { SideNav } from "./SideNav";
import { Frontmatter } from "@/types/frontmatter";
import { SectionTitle } from "./SectionTitle";
import { Description } from "./Description";
import { Navigation } from "@/types/docs";

export function DocPage(
  props: PropsWithChildren<{
    navigation: Navigation;
    frontmatter: Frontmatter;
  }>,
) {
  const { frontmatter } = props;
  return (
    <Flex>
      <SideNav>
        <Box pt="4" px="4" pb="9">
          <DocsNav navigation={props.navigation} />
        </Box>
      </SideNav>
      <DocsPageWrapper>
        <Box>
          {frontmatter.section && (
            <SectionTitle>{frontmatter.section}</SectionTitle>
          )}
          {frontmatter.title && (
            <Heading
              asChild
              size="8"
              mb="3"
              style={{ scrollMarginTop: "var(--space-9)" }}
            >
              <h1>{frontmatter.title}</h1>
            </Heading>
          )}
          {frontmatter.description && (
            <Description>{frontmatter.description}</Description>
          )}
          <Separator size="4" my="6" style={{ marginInline: "auto" }} />
          {props.children}
        </Box>
        {/* <DocsPagination allRoutes={allColorsRoutes} /> */}
        {/* <EditPageLink /> */}
      </DocsPageWrapper>
    </Flex>
  );
}
