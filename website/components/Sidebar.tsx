import { Text, Heading, Box, Flex } from "@radix-ui/themes";
import { SidebarLink } from "./SidebarLink";
import { usePathname } from "next/navigation";
import { Doc } from "@/lib/docs";

export interface SidebarProps {
  sections: Record<string, Doc[]>;
}

export function Sidebar(props: SidebarProps) {
  const pathName = usePathname()?.replace(/^\//, "") ?? "";
  const sidebarBarId = "sidebar";

  return (
    <Box>
      {Object.keys(props.sections).map((section) => {
        return (
          <Box key={section} mb="4">
            {section !== "Introduction" && (
              <Box py="2" px="3" asChild>
                <Heading as="h4" size="2" id={`${sidebarBarId}-1`}>
                  {section}
                </Heading>
              </Box>
            )}
            <ul aria-labelledby={`${sidebarBarId}-1`}>
              {props.sections[section].map((page) => {
                return (
                  <li key={page.path}>
                    <SidebarLink
                      href={page.path}
                      active={pathName === page.path}
                    >
                      <Text size="2">{page.navigationLabel || page.title}</Text>
                    </SidebarLink>
                  </li>
                );
              })}
            </ul>
          </Box>
        );
      })}
    </Box>
  );
}
