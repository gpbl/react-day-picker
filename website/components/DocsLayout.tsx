import { DocsStaticProps } from "@/pages/[[...slug]]";
import { Box, Separator } from "@radix-ui/themes";

import { useSidebar } from "@/lib/sidebar";
import { DocHeader } from "./DocHeader";
import { Pagination } from "./Pagination";
import { Sidebar } from "./Sidebar";
import { TableOfContent } from "./TableOfContent";

export interface DocsLayoutProps {
  children: React.ReactNode;
  pageProps: DocsStaticProps;
}
export function DocsLayout(props: DocsLayoutProps) {
  const { navigation, doc, toc } = props.pageProps;

  const sidebar = useSidebar();

  // Flat the navigation object to an array
  const flatNavigation = Object.values(navigation).flat();

  // Find the index of the current doc in the navigation
  const docIndex = flatNavigation.findIndex((item) => item.path === doc.path);
  const nextDoc = flatNavigation[docIndex + 1];
  const previousDoc = flatNavigation[docIndex - 1];

  return (
    <Box>
      {/* Sidebar */}
      <Box
        className={`
        b-0
        fixed 
        top-header 
        z-10 
        h-full 
        w-full 
        transform 
        overflow-auto 
        bg-page-background 
        pb-4 
        transition-transform 
        duration-200 
        ease-in-out 
        sm:w-sidebar 
        xl:translate-x-0 
        xl:shadow-none 
        ${sidebar.isOpen ? "shadow-sidebar translate-x-0" : "-translate-x-full shadow-none"}
      `}
        style={{ height: "calc(100vh - var(--header-height))" }}
      >
        <Box p="4">
          <Sidebar navigation={navigation} />
        </Box>
      </Box>

      {/* Content */}
      <Box className="mt-header xl:mt-header" p="4">
        <main
          className={`
        mx-auto
        mb-4 
        max-w-article-max-w 
        p-2
        md:p-4 
        lg:mr-toc-width 
        xl:mx-auto
        `}
        >
          <DocHeader doc={doc} />
          <Separator size="4" my="8" mt="4" />
          <article>{props.children}</article>
          {doc.pagination && (
            <Box>
              <Separator size="4" my="4" mt="8" />
              <Pagination
                nextDoc={nextDoc}
                previousDoc={previousDoc}
                currentDoc={doc}
              />
            </Box>
          )}
        </main>
      </Box>

      {/* toc */}
      <Box
        className={`
          xxl:right-24 
          fixed 
          right-0 
          hidden 
          w-toc-width 
          border-l 
          px-6 
          lg:block 
          xl:right-8
        `}
        style={{
          top: "calc(var(--header-height) + 2rem)",
          borderColor: "var(--gray-a5)",
        }}
      >
        {doc.toc && toc && toc.length > 0 && <TableOfContent toc={toc} />}
      </Box>
    </Box>
  );
}
