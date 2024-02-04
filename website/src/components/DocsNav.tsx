import { Text, Heading, Box, Badge, Flex } from "@radix-ui/themes";
import { DocsNavItem } from "./DocsNavItem";
import { usePathname } from "next/navigation";

export interface DocsNavProps {
  routes: {
    label?: string;
    pages: {
      title: string;
      slug: string;
      icon?: React.ReactNode;
      preview?: boolean;
      deprecated?: boolean;
    }[];
  }[];
}

export function DocsNav({ routes }: DocsNavProps) {
  const pathName = usePathname() ?? "/";
  return (
    <Box>
      {routes.map((section, i) => (
        <Box key={section.label ?? i} mb="4">
          {section.label && (
            <Box py="2" px="3">
              <Heading as="h4" size={{ initial: "3", md: "2" }}>
                {section.label}
              </Heading>
            </Box>
          )}

          {section.pages.map((page) => (
            <DocsNavItem
              key={page.slug}
              href={page.slug ? "./docs/" + page.slug : "/"}
              active={pathName.replace("/docs/", "") === page.slug}
            >
              <Flex gap="2" align="center">
                {page.icon}
                <Text size={{ initial: "3", md: "2" }}>{page.title}</Text>
              </Flex>

              {page.preview && (
                <Badge ml="2" color="blue" radius="full">
                  Preview
                </Badge>
              )}

              {page.deprecated && (
                <Badge ml="2" color="yellow" radius="full">
                  Deprecated
                </Badge>
              )}
            </DocsNavItem>
          ))}
        </Box>
      ))}
    </Box>
  );
}
