import { Text, Heading, Box, Flex } from "@radix-ui/themes";
import { DocsNavItem } from "./DocsNavItem";
import { usePathname } from "next/navigation";
import { Doc } from "@/lib/docs";

export interface DocsNavProps {
  navigation: Record<string, Doc[]>;
}

export function DocsNav(props: DocsNavProps) {
  const pathName = usePathname()?.replace(/^\//, "") ?? "";

  return (
    <Box>
      {Object.keys(props.navigation).map((section) => {
        return (
          <Box key={section} mb="4">
            {section !== "Introduction" && (
              <Box py="2" px="3">
                <Heading as="h4" size={{ initial: "3", md: "2" }}>
                  {section}
                </Heading>
              </Box>
            )}
            {props.navigation[section].map((page) => {
              return (
                <DocsNavItem
                  key={page.path}
                  href={page.path}
                  active={pathName === page.path}
                >
                  <Flex gap="2" align="center">
                    <Text size="2">{page.navigationLabel || page.title}</Text>
                  </Flex>
                </DocsNavItem>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
}
