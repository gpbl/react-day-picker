import { Doc } from "@/lib/docs";
import { useSidebar } from "@/lib/sidebar";
import { Box, Flex, Heading, Separator, Text } from "@radix-ui/themes";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { SidebarLink } from "./SidebarLink";

export interface SidebarProps {
  navigation: Record<string, Doc[]>;
}

export function Sidebar(props: SidebarProps) {
  const pathName = usePathname()?.replace(/^\//, "") ?? "";
  const isDocumentation =
    pathName.startsWith("docs") && !pathName.includes("/api/");

  const isApi = pathName.includes("/api/");
  const isPlayground = pathName.startsWith("playground");

  const { id } = useSidebar();
  return (
    <>
      <Box display={{ md: "none" }}>
        <Flex direction="row" gap="4" wrap="nowrap">
          <Box asChild>
            <Text
              color="indigo"
              asChild
              size="3"
              weight={isDocumentation ? "bold" : "regular"}
            >
              <NextLink
                href={"/start"}
                aria-description="Open the DayPicker guides"
              >
                Documentation
              </NextLink>
            </Text>
          </Box>
          <Box asChild>
            <Text
              color="indigo"
              asChild
              size="3"
              weight={isApi ? "bold" : "regular"}
            >
              <NextLink
                href={"/api/latest"}
                aria-description="Open the DayPicker API reference"
              >
                API reference
              </NextLink>
            </Text>
          </Box>
          <Box asChild>
            <Text
              color="indigo"
              asChild
              size="3"
              weight={isPlayground ? "bold" : "regular"}
            >
              <NextLink
                href={"/playground"}
                aria-description="Open a page for playing with the DayPicker props"
              >
                Playground
              </NextLink>
            </Text>
          </Box>
        </Flex>
        <Separator size="4" my="4" color="gray" />
      </Box>
      <ul>
        {Object.keys(props.navigation).map((section, i) => {
          return (
            <Box key={section} mb="4" asChild>
              <li>
                {section !== "Introduction" && (
                  <Box py="2" px="3" asChild>
                    <Heading as="h4" size="2" id={`${id}-${i}`}>
                      {section}
                    </Heading>
                  </Box>
                )}
                <ul aria-labelledby={`${id}-${i}`}>
                  {props.navigation[section].map((page) => {
                    return (
                      <li key={page.path}>
                        <SidebarLink
                          href={page.path}
                          active={pathName === page.path}
                        >
                          <Text size="2">
                            {page.navigationLabel || page.title}
                          </Text>
                        </SidebarLink>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </Box>
          );
        })}
      </ul>
    </>
  );
}
