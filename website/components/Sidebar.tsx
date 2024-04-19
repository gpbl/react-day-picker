import { usePathname } from "next/navigation";

import { Doc } from "@/lib/docs";
import { useSidebar } from "@/lib/sidebar";
import { Badge, Box, Heading, Text } from "@radix-ui/themes";

import { SidebarLink } from "./SidebarLink";

export interface SidebarProps {
  navigation: Record<string, Doc[]>;
}

export function Sidebar(props: SidebarProps) {
  const pathName = usePathname()?.replace(/^\//, "") ?? "";
  const { id } = useSidebar();
  return (
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
                {props.navigation[section].map((page) => (
                  <li key={page.path}>
                    <SidebarLink
                      href={page.path}
                      active={pathName === page.path}
                    >
                      <Text
                        size="2"
                        className={page.deprecated ? "line-through" : ""}
                      >
                        {page.navigationLabel || page.title}
                      </Text>{" "}
                      {page.deprecated && (
                        <Badge color="amber">deprecated</Badge>
                      )}
                    </SidebarLink>
                  </li>
                ))}
              </ul>
            </li>
          </Box>
        );
      })}
    </ul>
  );
}
