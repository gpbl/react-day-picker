"use client";

import NextLink from "next/link";

import { Version, useVersion } from "@/lib/versions";
import {
  Cross1Icon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { Box, Flex, IconButton, Link, Text } from "@radix-ui/themes";

import { useSidebar } from "@/lib/sidebar";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const { version } = useVersion();
  const sidebar = useSidebar();

  return (
    <Flex
      position="fixed"
      className="left-0 right-0 top-0 z-30 h-header border-b bg-page-background pl-4"
      style={{
        borderColor: "var(--gray-a5)",
        paddingInlineStart: "1rem",
      }}
      asChild
    >
      <nav>
        {/* Logo and hamburger menu */}
        <Flex
          position="absolute"
          align="center"
          gap="4"
          wrap="nowrap"
          className="h-header"
          width={{ initial: "100%", sm: "auto" }}
        >
          <IconButton
            size="3"
            className="xl:hidden"
            variant="ghost"
            onClick={() => sidebar.setIsOpen(!sidebar.isOpen)}
            aria-label="Toggle sidebar"
            aria-controls={sidebar.id}
            aria-expanded={sidebar.isOpen}
          >
            {sidebar.isOpen ? (
              <Cross1Icon width="22" height="22" />
            ) : (
              <HamburgerMenuIcon width="22" height="22" />
            )}
          </IconButton>
          <Flex asChild gap="2" align="center">
            <NextLink href="/" aria-label="React DayPicker">
              <Box display={{ initial: "none", xs: "inline" }}>
                <Logo />
              </Box>
              <Text size="4">
                <Box display={{ initial: "none", xs: "inline" }}>React</Box>{" "}
                <b>DayPicker</b>
              </Text>
            </NextLink>
          </Flex>
        </Flex>

        <Flex
          align="center"
          gap="4"
          position="absolute"
          top="0"
          bottom="0"
          right="0"
          pr="4"
        >
          <Flex
            align="center"
            gap="4"
            display={{ initial: "flex", xs: "flex" }}
          >
            <Box display={{ initial: "none", xs: "block" }}>
              <Link
                asChild
                underline="hover"
                color="gray"
                size={{ initial: "2", md: "3" }}
              >
                <NextLink href="/">Docs</NextLink>
              </Link>
            </Box>
            <Box>
              <Link
                asChild
                underline="hover"
                color="gray"
                size={{ initial: "2", md: "3" }}
              >
                <NextLink href="/api/latest">API</NextLink>
              </Link>
            </Box>
            <Box>
              <Link
                asChild
                underline="hover"
                color="gray"
                size={{ initial: "2", md: "3" }}
              >
                <NextLink href="/playground">Playground</NextLink>
              </Link>
            </Box>
            <Flex>
              <GitHub version={version} />
            </Flex>
            <Flex>
              <ThemeToggle />
            </Flex>
          </Flex>
        </Flex>
      </nav>
    </Flex>
  );
}
function GitHub({ version }: { version: Version }) {
  const href = `http://github.com/gpbl/react-day-picker${version === "latest" ? "" : "/tree/next"}`;
  return (
    <IconButton
      aria-label="Open DayPicker on GitHub"
      asChild
      variant="ghost"
      color="gray"
    >
      <a href={href} target="_blank" rel="noreferrer">
        <GitHubLogoIcon width="18" height="18" />
      </a>
    </IconButton>
  );
}
