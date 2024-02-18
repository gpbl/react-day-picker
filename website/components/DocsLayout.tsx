import { useEffect, useState } from "react";

import { DocStaticProps } from "@/pages/docs/[[...slug]]";
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Separator,
  Text,
} from "@radix-ui/themes";

import { Sidebar } from "./Sidebar";
import { TableOfContent } from "./TableOfContent";
import {
  ChevronRightIcon,
  Cross1Icon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { useRouter } from "next/router";

export interface DocsLayoutProps {
  children: React.ReactNode;
  pageProps: DocStaticProps;
}
export function DocsLayout(props: DocsLayoutProps) {
  const { sideNav, toc, doc } = props.pageProps;
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => {
      setSidebarOpen(false);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    // Cleanup function to remove the listener when the component unmounts
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div>
      {/* Breadcrumbs */}
      <Box
        className="fixed z-10 xl:hidden px-4 border-b w-full"
        style={{
          left: 0,
          right: 0,
          top: "var(--header-height)",
          backgroundColor: "var(--color-page-background)",
          borderColor: "var(--gray-a5)",
        }}
      >
        <Flex py="2" align="center" gap="1">
          <Button
            className="xl:hidden"
            variant="ghost"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={isSidebarOpen}
          >
            {isSidebarOpen ? (
              <Cross1Icon width="18" height="18" />
            ) : (
              <HamburgerMenuIcon width="18" height="18" />
            )}
            {/* <Text weight="bold" size="2">
              Documentation
            </Text> */}
          </Button>
          <ChevronRightIcon width="18" height="18" />
          <Text size="2">{doc.section}</Text>
          <ChevronRightIcon width="18" height="18" />
          <Text size="2">{doc.title}</Text>
        </Flex>
      </Box>
      {/* Sidebar */}
      <Box
        id="sidebar"
        className={`
          fixed
          px-4
          z-10 
          overflow-auto 
          ${isSidebarOpen ? "block mt-4" : "hidden"} 
          w-full
          xl:block
          xl:w-64
        `}
        style={{
          overflow: "auto",
          top: "calc(var(--header-height) + 1rem)",
          bottom: 0,
          height: "calc(100vh - var(--header-height))",
          backgroundColor: "var(--color-page-background)",
        }}
      >
        <Sidebar sections={sideNav} />
      </Box>

      {/* Content */}
      <Flex
        asChild
        justify="center"
        className={`
          py-36
          xl:ms-64
        `}
      >
        <main>
          <Box className="w-full max-w-3xl mx-4 md:mx-8">
            <header>
              {doc.section && (
                <Text
                  as="p"
                  size="4"
                  style={{ color: "var(--accent-a9)" }}
                  weight="bold"
                  mb="2"
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

            {props.children}
          </Box>

          <Box>
            {/* TOC for extra large screens */}

            <Box className="hidden md:block">
              <Box
                className="sticky w-56 border-l ps-6"
                style={{
                  top: "calc(var(--header-height) + 4rem)",
                  borderColor: "var(--gray-a5)",
                }}
              >
                {toc && toc.length > 0 && <TableOfContent toc={toc} />}
              </Box>
            </Box>
          </Box>
        </main>
      </Flex>
    </div>
  );
}
