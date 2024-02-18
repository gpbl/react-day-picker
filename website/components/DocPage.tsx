import { Doc, Navigation } from "@/lib/docs";
import { Box, Flex, Heading, Separator, Text } from "@radix-ui/themes";
import { Toc } from "@stefanprobst/rehype-extract-toc";

import styles from "./DocPage.module.css";
import { Sidebar } from "./Sidebar";
import { TableOfContent } from "./TableOfContent";

export interface DocPageProps {
  navigation: Navigation;
  doc: Doc;
  toc: Toc;
  children: React.ReactNode;
}

export function DocPage(props: DocPageProps) {
  const { doc, navigation, toc } = props;

  const isMainDocs = doc.slug[0] !== "api";
  const isApiMainDocs = doc.slug[0] === "api" && doc.slug[1] === "main";

  return (
    <Flex className={styles.docPage}>
      <Box style={{ width: 250 }}>
        <Box
          display={{ initial: "none", md: "block" }}
          style={{ width: 250, flexShrink: 0 }}
        >
          <Box
            position="fixed"
            left="0"
            bottom="0"
            style={{
              zIndex: 1,
              top: "var(--header-height)",
              overflowX: "hidden",
              width: "inherit",
            }}
          >
            <Box pt="4" px="4" pb="9">
              <Sidebar
                sections={
                  isMainDocs
                    ? navigation.guides
                    : isApiMainDocs
                      ? navigation.apiMain
                      : navigation.apiNext
                }
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <main>
        <Box
          style={{ marginInlineStart: "7.5%" }}
          className="flex flex-1 md:ms-9 w-full "
        >
          <Box className="max-w-screen-md my-20 flex-1">
            <header>
              {doc.section && (
                <Text
                  as="p"
                  size="4"
                  style={{ color: "var(--accent-a9)" }}
                  weight="bold"
                  mb="2"
                  {...props}
                >
                  {doc.section}
                </Text>
              )}
              {doc.title && (
                <Heading as="h1" size="8" mb="3">
                  {doc.title}
                </Heading>
              )}
              {doc.description && (
                <Text as="p" size="5" mt="2" mb="2" color="gray">
                  {doc.description}
                </Text>
              )}
              <Separator size="4" my="6" color="gray" />
            </header>

            {toc.length > 0 && (
              // Show the table of content on mobile
              <Box mb="9" className="lg:hidden">
                <TableOfContent toc={toc} />
              </Box>
            )}

            {props.children}

            {/* <DocsPagination allRoutes={allColorsRoutes} /> */}
            {/* <EditPageLink /> */}
          </Box>
          {toc.length > 0 && (
            // Show the table of content on desktop
            <Box mt="9" className="hidden lg:block sticky top-12">
              <Box
                className="ms-20 mt-9 me-10 py-4 px-4 border-l"
                style={{ borderColor: "var(--slate-a5)" }}
              >
                <TableOfContent toc={toc} />
              </Box>
            </Box>
          )}
        </Box>
      </main>
    </Flex>
  );
}
