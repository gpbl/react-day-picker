import { DocsStaticProps } from "@/pages/docs/[[...slug]]";
import { Box, Flex, Separator } from "@radix-ui/themes";

import { useSidebar } from "@/lib/sidebar";
import { Breadcrumbs } from "./Breadcrumbs";
import { DocHeader } from "./DocHeader";
import { Sidebar } from "./Sidebar";
import { TableOfContent } from "./TableOfContent";

export interface DocsLayoutProps {
  children: React.ReactNode;
  pageProps: DocsStaticProps;
}
export function DocsLayout(props: DocsLayoutProps) {
  const { navigation, doc, toc } = props.pageProps;

  const sidebar = useSidebar();

  return (
    <Box>
      {/* Breadcrumbs */}
      <Box
        className="fixed inset-x-0 top-header z-10 w-full border-b bg-page-background px-4 xl:hidden"
        style={{ borderColor: "var(--gray-a5)" }}
      >
        <Breadcrumbs doc={doc} />
      </Box>

      {/* Sidebar */}
      <Box
        className={`b-0 sm:shadow-sidebar pt-0transition-transform fixed top-header-full z-10 h-full w-full transform scroll-pb-32 overflow-auto bg-page-background p-4 duration-200 ease-in-out sm:w-sidebar xl:top-header xl:block xl:translate-x-0 xl:shadow-none ${sidebar.isOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{
          height: "calc(100vh - var(--header-full))",
          marginTop: 1,
        }}
      >
        <Sidebar navigation={navigation} />
      </Box>

      {/* Content */}
      <Box className="mt-header-full xl:ms-sidebar xl:mt-header">
        <Box
          mx="auto"
          className="max-w-screen-lg xl:max-w-screen-xl"
          p={{ initial: "4", lg: "8", xl: "9" }}
          asChild
          style={{ maxWidth: "120ch" }}
        >
          <main>
            <Flex>
              {/* Main content */}
              <Box className="w-full flex-auto overflow-auto px-2 py-4 md:pe-8 xl:pe-12">
                <DocHeader doc={doc} />
                <Separator size="4" mt="6" mb="9" color="gray" />
                {props.children}
              </Box>

              {/* toc */}
              <Box className="hidden min-h-dvh pb-3 md:block">
                <Box
                  className="sticky border-l ps-6 md:w-44 lg:w-56"
                  style={{
                    top: "calc(var(--header-height) + 5rem)",
                    borderColor: "var(--gray-a5)",
                  }}
                >
                  {toc && toc.length > 3 && <TableOfContent toc={toc} />}
                </Box>
              </Box>
            </Flex>
          </main>
        </Box>
      </Box>
    </Box>
  );
}
