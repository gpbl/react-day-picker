import { Text, Heading, Box, Badge, Flex } from "@radix-ui/themes";
import { DocsNavItem } from "./DocsNavItem";
import { usePathname } from "next/navigation";
import { Navigation } from "@/types/docs";

export interface DocsNavProps {
  navigation: Navigation;
}

export function DocsNav(props: DocsNavProps) {
  const pathName = usePathname() ?? "/";
  return (
    <Box>
      {props.navigation.map((section, i) => (
        <Box key={section.label ?? i} mb="4">
          {section.label && section.label !== "Introduction" && (
            <Box py="2" px="3">
              <Heading as="h4" size={{ initial: "3", md: "2" }}>
                {section.label}
              </Heading>
            </Box>
          )}
          {section.frontmatters.map((page) => {
            const slug = page.slug.replace("README", "").replace("index", "");
            const slugFromPath = pathName.replace(/\/docs\/?/, "");
            return (
              <DocsNavItem
                key={page.slug}
                href={`docs/${slug}`}
                active={slugFromPath === slug}
              >
                <Flex gap="2" align="center">
                  {/* {page.icon} */}
                  <Text size={{ initial: "3", md: "2" }}>
                    {page.navigationLabel ?? page.title}
                  </Text>
                </Flex>
                {/*
            {page.preview && (
              <Badge ml="2" color="blue" radius="full">
                Preview
              </Badge>
            )} */}
                {/*
            {page.deprecated && (
              <Badge ml="2" color="yellow" radius="full">
                Deprecated
              </Badge>
            )} */}
              </DocsNavItem>
            );
          })}
        </Box>
      ))}
    </Box>
  );
}
